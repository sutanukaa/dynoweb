# -*- coding: utf-8 -*-
"""
md2pdf — render Markdown files in this folder to styled PDFs.

Layout convention: the .md files live in this folder (root); every generated .pdf
goes in the pdf/ subfolder with the same basename. Edit the .md, rerun this, PDF updates.

Usage:
    python md2pdf.py                    # rebuild every canonical .md -> pdf/
    python md2pdf.py dynoweb-icp.md     # rebuild one -> pdf/dynoweb-icp.pdf

The .md is the editable source of truth. Offline, no LaTeX/pandoc — reportlab +
the `markdown` package only. (notes.md is scratch and is skipped by the all-run.)
"""
import os, re, sys, html
from xml.etree import ElementTree as ET
import markdown as md_lib
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph,
                                Spacer, Table, TableStyle, HRFlowable, ListFlowable,
                                ListItem, KeepTogether)
from reportlab.lib.styles import ParagraphStyle

HERE = os.path.dirname(os.path.abspath(__file__))

# ---- palette ----
INK, INK_DIM = colors.HexColor("#171a1f"), colors.HexColor("#565f6b")
ACCENT, ACCENT_K = colors.HexColor("#c1741c"), colors.HexColor("#7a4a10")
LINE = colors.HexColor("#d7d9d4")
PANEL = colors.HexColor("#f4f3ef")
PANEL_HD = colors.HexColor("#1f2530")
SOFT = colors.HexColor("#f6ece0")
BAD = colors.HexColor("#b0472f")

SERIF, SERIF_B, SERIF_I = "Times-Roman", "Times-Bold", "Times-Italic"
SANS, SANS_B = "Helvetica", "Helvetica-Bold"
MONO = "Courier"

body = ParagraphStyle("body", fontName=SERIF, fontSize=10, leading=14.5,
                      textColor=INK, alignment=TA_LEFT, spaceAfter=6)
h1s = ParagraphStyle("h1", fontName=SERIF_B, fontSize=23, leading=27, textColor=INK,
                     spaceBefore=2, spaceAfter=10)
h2s = ParagraphStyle("h2", fontName=SANS_B, fontSize=13.5, leading=17, textColor=INK,
                     spaceBefore=17, spaceAfter=5)
h3s = ParagraphStyle("h3", fontName=SANS_B, fontSize=10.5, leading=14, textColor=ACCENT_K,
                     spaceBefore=11, spaceAfter=3)
h4s = ParagraphStyle("h4", fontName=SANS_B, fontSize=9.5, leading=13, textColor=INK_DIM,
                     spaceBefore=8, spaceAfter=2)
li_s = ParagraphStyle("li", parent=body, spaceAfter=3)
cell = ParagraphStyle("cell", fontName=SERIF, fontSize=8.5, leading=11.5, textColor=INK)
cell_hd = ParagraphStyle("cellhd", fontName=SANS_B, fontSize=7.5, leading=10,
                         textColor=colors.white)
quote_s = ParagraphStyle("quote", fontName=SERIF, fontSize=9.5, leading=13.5,
                         textColor=INK, alignment=TA_LEFT, spaceAfter=4)
code_s = ParagraphStyle("code", fontName=MONO, fontSize=7.6, leading=10.6, textColor=INK)

CONTENT_W = 170 * mm


def inline(el):
    """Serialize an element's inline children into reportlab markup."""
    out = ""
    if el.text:
        out += html.escape(el.text)
    for child in el:
        t = child.tag
        inner = inline(child)
        if t in ("strong", "b"):
            out += f"<b>{inner}</b>"
        elif t in ("em", "i"):
            out += f"<i>{inner}</i>"
        elif t == "code":
            out += f'<font face="{MONO}" size="8.5">{inner}</font>'
        elif t == "a":
            href = child.get("href", "")
            out += f'<link href="{html.escape(href)}"><font color="#7a4a10"><u>{inner}</u></font></link>'
        elif t == "br":
            out += "<br/>"
        elif t == "del":
            out += f"<strike>{inner}</strike>"
        else:
            out += inner
        if child.tail:
            out += html.escape(child.tail)
    return out


def make_table(el):
    head, rows = [], []
    for sect in el:
        for tr in sect.iter("tr"):
            cells = [inline(td) for td in tr if td.tag in ("td", "th")]
            if sect.tag == "thead":
                head = cells
            else:
                rows.append(cells)
    if not head and rows:
        head, rows = rows[0], rows[1:]
    ncol = max([len(head)] + [len(r) for r in rows]) if (head or rows) else 0
    if not ncol:
        return None
    head += [""] * (ncol - len(head))
    rows = [r + [""] * (ncol - len(r)) for r in rows]

    # width by relative content mass, clamped so no column collapses
    mass = []
    for c in range(ncol):
        longest = max([len(head[c])] + [len(r[c]) for r in rows] or [1])
        mass.append(max(longest, 6))
    total = sum(mass)
    widths = [max(14 * mm, CONTENT_W * m / total) for m in mass]
    scale = CONTENT_W / sum(widths)
    widths = [w * scale for w in widths]

    data = [[Paragraph(h, cell_hd) for h in head]]
    data += [[Paragraph(c, cell) for c in r] for r in rows]
    t = Table(data, colWidths=widths, repeatRows=1)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PANEL_HD),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.5),
        ("LINEBELOW", (0, 1), (-1, -2), 0.35, LINE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#faf9f6")]),
        ("BOX", (0, 0), (-1, -1), 0.4, LINE),
    ]))
    return t


def boxed(flows, bg=SOFT, bar=ACCENT):
    t = Table([[flows]], colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("LINEBEFORE", (0, 0), (0, -1), 2.2, bar),
        ("LEFTPADDING", (0, 0), (-1, -1), 11),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return t


def render_list(el, ordered, depth=0):
    items = []
    for lielem in el:
        if lielem.tag != "li":
            continue
        # text of the li itself
        head_txt = (html.escape(lielem.text) if lielem.text else "")
        sub = []
        for child in lielem:
            if child.tag in ("ul", "ol"):
                sub.append(render_list(child, child.tag == "ol", depth + 1))
            elif child.tag == "p":
                head_txt += inline(child)
                if child.tail:
                    head_txt += html.escape(child.tail)
            else:
                # inline element belonging to the li line
                tmp = ET.Element("x")
                tmp.append(child)
                head_txt += inline(tmp)
        flow = [Paragraph(head_txt.strip() or "&nbsp;", li_s)] + sub
        items.append(ListItem(flow, leftIndent=6))
    if not items:
        return Spacer(1, 0)
    return ListFlowable(
        items,
        bulletType="1" if ordered else "bullet",
        start="1" if ordered else None,
        bulletColor=ACCENT_K if ordered else ACCENT,
        bulletFontName=SANS_B if ordered else SERIF,
        bulletFontSize=8 if not ordered else 9,
        leftIndent=15 + depth * 8, spaceBefore=1, spaceAfter=4,
    )


def convert(md_path):
    src = open(md_path, encoding="utf-8").read()
    title = "Document"
    m = re.search(r"^#\s+(.+)$", src, re.M)
    if m:
        title = m.group(1).strip()

    htm = md_lib.markdown(src, extensions=["tables", "fenced_code", "sane_lists"])
    root = ET.fromstring("<root>" + htm + "</root>")

    E = []
    for el in root:
        tag = el.tag
        if tag == "h1":
            E.append(Paragraph(inline(el), h1s))
            E.append(HRFlowable(width="30%", thickness=2, color=ACCENT,
                                spaceBefore=0, spaceAfter=12))
        elif tag == "h2":
            E.append(Paragraph(inline(el), h2s))
            E.append(HRFlowable(width="100%", thickness=0.5, color=LINE, spaceAfter=7))
        elif tag == "h3":
            E.append(Paragraph(inline(el), h3s))
        elif tag in ("h4", "h5", "h6"):
            E.append(Paragraph(inline(el), h4s))
        elif tag == "p":
            txt = inline(el).strip()
            if txt:
                E.append(Paragraph(txt, body))
        elif tag == "table":
            t = make_table(el)
            if t is not None:
                E.append(Spacer(1, 2)); E.append(t); E.append(Spacer(1, 7))
        elif tag == "blockquote":
            inner = []
            for c in el:
                if c.tag == "p":
                    inner.append(Paragraph(inline(c), quote_s))
                elif c.tag in ("ul", "ol"):
                    inner.append(render_list(c, c.tag == "ol"))
                elif c.tag in ("h1", "h2", "h3", "h4"):
                    inner.append(Paragraph(inline(c), ParagraphStyle(
                        "qh", parent=h3s, textColor=BAD, spaceBefore=0)))
            if inner:
                E.append(boxed(inner)); E.append(Spacer(1, 7))
        elif tag in ("ul", "ol"):
            E.append(render_list(el, tag == "ol"))
        elif tag == "pre":
            code = "".join(el.itertext()).rstrip("\n")
            lines = [Paragraph(html.escape(l).replace(" ", "&nbsp;") or "&nbsp;", code_s)
                     for l in code.split("\n")]
            E.append(boxed(lines, bg=PANEL, bar=INK_DIM)); E.append(Spacer(1, 7))
        elif tag == "hr":
            E.append(HRFlowable(width="100%", thickness=0.5, color=LINE,
                                spaceBefore=6, spaceAfter=10))

    # .md lives in root; the generated .pdf goes in the pdf/ subfolder (same basename).
    pdf_dir = os.path.join(os.path.dirname(os.path.abspath(md_path)), "pdf")
    os.makedirs(pdf_dir, exist_ok=True)
    out = os.path.join(pdf_dir, os.path.splitext(os.path.basename(md_path))[0] + ".pdf")

    def furniture(canvas, doc):
        canvas.saveState()
        w, h = A4
        canvas.setFont(SANS_B, 7)
        canvas.setFillColor(INK_DIM)
        canvas.drawString(20 * mm, h - 12 * mm, "DYNOWEB  /  DISTRIBUTION")
        canvas.drawRightString(w - 20 * mm, h - 12 * mm, title.upper()[:52])
        canvas.setStrokeColor(LINE); canvas.setLineWidth(0.5)
        canvas.line(20 * mm, h - 14 * mm, w - 20 * mm, h - 14 * mm)
        canvas.line(20 * mm, 12.5 * mm, w - 20 * mm, 12.5 * mm)
        canvas.setFont(SERIF, 7.5)
        canvas.drawString(20 * mm, 8.5 * mm,
                          "Source of truth: %s — edit the .md, rerun md2pdf.py"
                          % os.path.basename(md_path))
        canvas.drawRightString(w - 20 * mm, 8.5 * mm, "Page %d" % doc.page)
        canvas.restoreState()

    doc = BaseDocTemplate(out, pagesize=A4, leftMargin=20 * mm, rightMargin=20 * mm,
                          topMargin=19 * mm, bottomMargin=16 * mm,
                          title=title, author="Suman Jana")
    doc.addPageTemplates([PageTemplate(
        id="m",
        frames=[Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height - 3 * mm)],
        onPage=furniture)])
    doc.build(E)
    return out


if __name__ == "__main__":
    SKIP = {"notes.md"}  # scratch — not a canonical doc
    targets = sys.argv[1:] or [
        f for f in sorted(os.listdir(HERE)) if f.endswith(".md") and f not in SKIP]
    for t in targets:
        p = t if os.path.isabs(t) else os.path.join(HERE, t)
        print("OK  ->", os.path.basename(convert(p)))
