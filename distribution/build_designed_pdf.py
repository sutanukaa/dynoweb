# -*- coding: utf-8 -*-
"""
Build the hand-designed 'field notebook' PDF of the DynoWeb distribution plan.

This is the ORIGINAL bespoke-layout version (cover page, stat panels, custom tables).
It is hand-authored here, NOT generated from markdown — that's the point of it.

  - Editable, markdown-driven version : dynoweb-distribution-plan.md -> md2pdf.py
  - This one (bespoke design)         : build_designed_pdf.py -> DynoWeb-Plan-Designed.pdf

Content note: this reflects the 30-paying-in-90-days framing from BEFORE the ICP research
landed. The ICP work later revised the realistic ceiling down (see dynoweb-icp.md §7).
Kept as-is deliberately — it's the designed artifact Suman asked to preserve.
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_JUSTIFY
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, ListFlowable, ListItem, KeepTogether, CondPageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

# ---- palette (matches the HTML artifact) ----
INK      = colors.HexColor("#171a1f")
INK_DIM  = colors.HexColor("#565f6b")
ACCENT   = colors.HexColor("#c1741c")
ACCENT_K = colors.HexColor("#7a4a10")
LINE     = colors.HexColor("#d7d9d4")
PANEL    = colors.HexColor("#f4f3ef")
PANEL_HD = colors.HexColor("#1f2530")
GOOD     = colors.HexColor("#2f7d4f")
BAD      = colors.HexColor("#b0472f")
SOFT     = colors.HexColor("#f3e7d6")

SERIF = "Times-Roman"
SERIF_B = "Times-Bold"
SERIF_I = "Times-Italic"
SANS = "Helvetica"
SANS_B = "Helvetica-Bold"
MONO = "Courier"

_PDF_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "pdf")
os.makedirs(_PDF_DIR, exist_ok=True)
OUT = os.path.join(_PDF_DIR, "DynoWeb-distribution-main-plan.pdf")

styles = getSampleStyleSheet()
def S(name, **kw):
    return ParagraphStyle(name, **kw)

body = S("body", fontName=SERIF, fontSize=10.5, leading=15.5, textColor=INK,
         alignment=TA_JUSTIFY, spaceAfter=7)
body_l = S("body_l", parent=body, alignment=TA_LEFT)
lede = S("lede", fontName=SERIF, fontSize=12, leading=18, textColor=INK_DIM,
         spaceAfter=10)
h1 = S("h1", fontName=SANS_B, fontSize=17, leading=21, textColor=INK,
       spaceBefore=6, spaceAfter=3)
h2 = S("h2", fontName=SANS_B, fontSize=13, leading=17, textColor=INK,
       spaceBefore=16, spaceAfter=6)
h3 = S("h3", fontName=SANS_B, fontSize=11, leading=15, textColor=ACCENT_K,
       spaceBefore=9, spaceAfter=3)
eyebrow = S("eyebrow", fontName=SANS_B, fontSize=8, leading=11, textColor=ACCENT,
            spaceAfter=3)
kicker = S("kicker", fontName=SANS_B, fontSize=8.5, leading=12, textColor=INK_DIM)
small = S("small", fontName=SERIF, fontSize=9, leading=13, textColor=INK_DIM,
          spaceAfter=4)
cell = S("cell", fontName=SERIF, fontSize=9, leading=12.5, textColor=INK)
cell_b = S("cell_b", parent=cell, fontName=SERIF_B)
cell_hd = S("cell_hd", fontName=SANS_B, fontSize=8, leading=11, textColor=colors.white)
li = S("li", fontName=SERIF, fontSize=10.5, leading=15, textColor=INK, spaceAfter=4)
note = S("note", fontName=SERIF_I, fontSize=9.5, leading=14, textColor=INK_DIM)

def bullets(items, style=li):
    return ListFlowable(
        [ListItem(Paragraph(t, style), leftIndent=6, value="•") for t in items],
        bulletType="bullet", bulletColor=ACCENT, bulletFontSize=8,
        leftIndent=14, spaceBefore=2, spaceAfter=4)

def numlist(items, style=li):
    return ListFlowable(
        [ListItem(Paragraph(t, style), leftIndent=6) for t in items],
        bulletType="1", bulletColor=ACCENT_K, bulletFontName=SANS_B,
        leftIndent=16, spaceBefore=2, spaceAfter=4)

def panel(flowables, bg=PANEL, pad=9, border=LINE):
    t = Table([[flowables]], colWidths=[165*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0),(-1,-1), bg),
        ("BOX", (0,0),(-1,-1), 0.6, border),
        ("LEFTPADDING",(0,0),(-1,-1), pad+2),
        ("RIGHTPADDING",(0,0),(-1,-1), pad+2),
        ("TOPPADDING",(0,0),(-1,-1), pad),
        ("BOTTOMPADDING",(0,0),(-1,-1), pad),
    ]))
    return t

def accent_panel(flowables):
    t = Table([[flowables]], colWidths=[165*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0),(-1,-1), SOFT),
        ("LINEBEFORE",(0,0),(0,-1), 2.5, ACCENT),
        ("LEFTPADDING",(0,0),(-1,-1), 12),
        ("RIGHTPADDING",(0,0),(-1,-1), 11),
        ("TOPPADDING",(0,0),(-1,-1), 9),
        ("BOTTOMPADDING",(0,0),(-1,-1), 9),
    ]))
    return t

def table(data, widths, header=True, aligns=None):
    t = Table(data, colWidths=widths, repeatRows=1 if header else 0)
    st = [
        ("VALIGN",(0,0),(-1,-1),"TOP"),
        ("LEFTPADDING",(0,0),(-1,-1),6),
        ("RIGHTPADDING",(0,0),(-1,-1),6),
        ("TOPPADDING",(0,0),(-1,-1),5),
        ("BOTTOMPADDING",(0,0),(-1,-1),5),
        ("LINEBELOW",(0,0),(-1,-2),0.4,LINE),
        ("ROWBACKGROUNDS",(0,1),(-1,-1),[colors.white, colors.HexColor("#faf9f6")]),
    ]
    if header:
        st += [("BACKGROUND",(0,0),(-1,0),PANEL_HD),
               ("LINEBELOW",(0,0),(-1,0),0,colors.white),
               ("TOPPADDING",(0,0),(-1,0),6),
               ("BOTTOMPADDING",(0,0),(-1,0),6)]
    if aligns:
        for col,a in enumerate(aligns):
            st.append(("ALIGN",(col,0),(col,-1),a))
    t.setStyle(TableStyle(st))
    return t

# ---------- page furniture ----------
def header_footer(canvas, doc):
    canvas.saveState()
    w, h = A4
    canvas.setFont(SANS_B, 7.5)
    canvas.setFillColor(INK_DIM)
    canvas.drawString(20*mm, h-13*mm, "DYNOWEB  /  DISTRIBUTION PLAN")
    canvas.drawRightString(w-20*mm, h-13*mm, "0 → PAYING  ·  90-DAY SPRINT")
    canvas.setStrokeColor(LINE); canvas.setLineWidth(0.5)
    canvas.line(20*mm, h-15*mm, w-20*mm, h-15*mm)
    canvas.line(20*mm, 13*mm, w-20*mm, 13*mm)
    canvas.setFont(SERIF, 8); canvas.setFillColor(INK_DIM)
    canvas.drawString(20*mm, 9*mm, "Reframed from the 15-Day B2B Distribution Mastery Plan")
    canvas.drawRightString(w-20*mm, 9*mm, "Page %d" % doc.page)
    canvas.restoreState()

doc = BaseDocTemplate(OUT, pagesize=A4,
    leftMargin=20*mm, rightMargin=20*mm, topMargin=20*mm, bottomMargin=17*mm,
    title="DynoWeb Distribution Plan", author="Suman Jana")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height-4*mm, id="main")
doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=header_footer)])

E = []
def sp(x): E.append(Spacer(1, x))
def rule(): E.append(HRFlowable(width="100%", thickness=0.6, color=LINE,
                                spaceBefore=6, spaceAfter=8))

# ================= COVER =================
sp(28)
E.append(Paragraph("A DISTRIBUTION PLAYBOOK  ·  DIGITAL B2B · SHOPIFY", eyebrow))
sp(6)
E.append(Paragraph("Getting DynoWeb Its<br/>First Paying Customers",
                   S("title", fontName=SERIF_B, fontSize=30, leading=34, textColor=INK)))
sp(4)
E.append(Paragraph("A sequenced 90-day plan — interview first, validate the message, "
                   "then pitch a named list by hand and turn one channel into a repeatable system.",
                   lede))
sp(10)
E.append(HRFlowable(width="38%", thickness=2, color=ACCENT, spaceBefore=2, spaceAfter=12))

meta = table([
    [Paragraph("STARTING POINT", cell_hd), Paragraph("THE GOAL", cell_hd), Paragraph("TIME BUDGET", cell_hd)],
    [Paragraph("<b>0 real paying customers</b><br/>~18 real free-tier stores<br/>installs stalled to ~1/wk", cell),
     Paragraph("<b>Target: 50 paying / 60 days</b><br/>Honest ceiling: ~8–15<br/>(see funnel math, §7)", cell),
     Paragraph("<b>15–20 hrs/week</b><br/>founder-led, hands-on<br/>outbound + interviews", cell)],
], [55*mm, 55*mm, 55*mm])
E.append(meta)
sp(12)
E.append(accent_panel([Paragraph(
    "“Poor distribution — not product — is the number one cause of startup failure.” "
    "In B2B it is truer still: the best tool loses to the one the buyer’s peers already trust. "
    "This plan is built on that fact — credibility and proof come before reach.", note)]))
sp(10)
E.append(Paragraph("Prepared 2026-07-17 · grounded in live DynoWeb production data and peer feedback (Charlie Ngo).", small))

E.append(CondPageBreak(40*mm))

# ================= 0. HOW TO READ =================
E.append(Paragraph("The plan, in one breath", h2))
E.append(Paragraph(
    "Nine steps, in order. The spine is simple: <b>you cannot write the message, "
    "shoot the video, or pitch the list until you have actually listened to merchants.</b> "
    "Everything upstream of the interviews is preparation; everything downstream is execution. "
    "The single discipline that keeps it honest is the funnel math in §7 — revisit it "
    "whenever a step tempts you to do more of everything instead of more of what works.", body))
sp(2)
order = table([
    [Paragraph("STEP", cell_hd), Paragraph("WHAT", cell_hd), Paragraph("WHY IT COMES HERE", cell_hd)],
    [Paragraph("1", cell_b), Paragraph("Define the ICP", cell_b), Paragraph("You can’t pick a channel or a list before you know exactly who you’re for.", cell)],
    [Paragraph("2", cell_b), Paragraph("Interview — warm 18 first", cell_b), Paragraph("The customers hand you the words. Do this <i>before</i> any asset work.", cell)],
    [Paragraph("3", cell_b), Paragraph("Pick ≤ 3 value points", cell_b), Paragraph("Charlie’s note: no focused value prop today. The interviews decide the 3.", cell)],
    [Paragraph("4", cell_b), Paragraph("Remake video, images, site", cell_b), Paragraph("Only now — built around validated words, not guesses.", cell)],
    [Paragraph("5", cell_b), Paragraph("Bullseye traction research", cell_b), Paragraph("Map all 19 channels + study how App Store competitors get installs.", cell)],
    [Paragraph("6", cell_b), Paragraph("Test 3 channels, pick 1", cell_b), Paragraph("The whole point of Bullseye is 3-in, 1-out — not do-everything.", cell)],
    [Paragraph("7", cell_b), Paragraph("Build 50-lead sheet, pitch by hand", cell_b), Paragraph("Warm converts fastest; cold fills the rest. Track the funnel, not vibes.", cell)],
    [Paragraph("8", cell_b), Paragraph("Credibility layer: BFS + reviews", cell_b), Paragraph("The trust gap Charlie named. Runs alongside everything.", cell)],
    [Paragraph("9", cell_b), Paragraph("Free CRO report as the hook", cell_b), Paragraph("Not a separate channel — the ammunition for steps 7 and 8.", cell)],
], [14*mm, 52*mm, 99*mm])
E.append(order)

E.append(CondPageBreak(50*mm))

# ================= 1. DEFINE ICP =================
E.append(Paragraph("1 · Define the ICP", h2))
E.append(Paragraph(
    "Do not sell to “Shopify stores.” Define an Ideal Customer Profile tight enough that you "
    "can name 50 real stores against it. A usable segment is "
    "<b>industry + store size + a specific pain + a trigger event.</b> The trigger is what turns a "
    "fit into a <i>now</i>.", body))
E.append(Paragraph("Working draft (to be confirmed by the interviews in §2):", h3))
E.append(accent_panel([Paragraph(
    "A <b>Shopify DTC store with real traffic and a flat or declining conversion rate</b>, "
    "who today eyeballs GA4 or simply guesses at what’s broken — with no dev resource on call. "
    "The <b>trigger</b>: they just ran a paid-traffic push, hired a first growth/ops hire, or "
    "plateaued after a redesign.", body_l)]))
sp(3)
E.append(Paragraph(
    "<b>Vocabulary rule.</b> This buyer searches “traffic but no sales” and “leaking funnel” "
    "— never “CRO” or “AI expert.” Every line of copy, outreach and listing must match their "
    "words, not our internal ones.", body))
E.append(Paragraph(
    "<b>Buying committee — collapsed.</b> At this store size the owner or ops lead is economic buyer, "
    "champion and end user at once, with no procurement blocker. That is precisely why a fast, "
    "self-serve + founder-pitch motion fits.", body))

# ================= 2. INTERVIEW =================
E.append(Paragraph("2 · Interview — start with the warm 18", h2))
E.append(Paragraph(
    "This is the correction Charlie pushed and it is the right one: <b>spend time interviewing your "
    "ideal customer</b>, don’t ask peers to grade your listing. Your own installed stores are the "
    "fastest, warmest source of truth — they have already used the product.", body))
E.append(Paragraph("What each interview must extract:", h3))
E.append(bullets([
    "The <b>exact words</b> they use for the problem (these become your headline and outreach openers).",
    "What made them install — and what stopped them short of paying.",
    "Which single output they found genuinely useful (heatmap? replay? SmartNudge? a finding?).",
    "What they’d have to see to justify $14–$29/month — the real willingness-to-pay signal.",
]))
E.append(Paragraph(
    "Reach every genuinely-active free store; two are already at their session cap, which is the "
    "easiest possible reason to open a conversation. Ranked by real usage:", body))
warm = table([
    [Paragraph("STORE", cell_hd), Paragraph("SESSIONS / CAP", cell_hd), Paragraph("WHY THEY’RE FIRST", cell_hd)],
    [Paragraph("mexican-oaxacan-silver-jewelry", cell), Paragraph("1500 / 1500 (100%)", cell_b), Paragraph("Capped — losing visibility right now", cell)],
    [Paragraph("freshleafindia", cell), Paragraph("1500 / 1500 (100%)", cell_b), Paragraph("Capped — losing visibility right now", cell)],
    [Paragraph("esselbath1", cell), Paragraph("1191 / 1500 (79%)", cell), Paragraph("About to cap", cell)],
    [Paragraph("cofainc", cell), Paragraph("489 / 1500", cell), Paragraph("Real, steady usage", cell)],
    [Paragraph("bd00fa-3", cell), Paragraph("352 / 1500", cell), Paragraph("Longest-installed real user (since Feb)", cell)],
    [Paragraph("skyline-decor", cell), Paragraph("338 / 1500", cell), Paragraph("Real, steady usage", cell)],
    [Paragraph("kitchener-printkia", cell), Paragraph("322 / 1500", cell), Paragraph("Real, steady usage", cell)],
    [Paragraph("corporatedrivertrainingaustralia", cell), Paragraph("170 / 1500", cell), Paragraph("Real, steady usage", cell)],
], [60*mm, 33*mm, 72*mm])
E.append(warm)
sp(2)
E.append(Paragraph(
    "These 8 are also your first <b>paying</b> cohort — the pitch is “you’re at/near your free "
    "limit, here’s what upgrading unlocks,” not a cold sell.", note))

E.append(CondPageBreak(45*mm))

# ================= 3. VALUE POINTS =================
E.append(Paragraph("3 · Pick ≤ 3 value points — from the interviews, not from us", h2))
E.append(Paragraph(
    "Charlie’s sharpest note: “choose up to 3 key points to focus on — do not make your customer "
    "see a table with a lot of stuff.” Today the listing and site sprawl. After the interviews you "
    "will know which 2–3 outcomes merchants actually care about, in their language. Everything "
    "downstream — video, images, site, listing, outreach — leads with those, and nothing else.", body))
E.append(panel([
    Paragraph("The candidate spine (to be confirmed by §2):", h3),
    Paragraph("<b>See why visitors don’t buy → get the specific fix → recover the lost sales.</b> "
              "The one honest differentiator left after the apply-engine was parked is that "
              "<b>SmartNudge deploys the intervention</b> — it doesn’t just report the leak. If the "
              "interviews confirm that lands, it becomes value point #1.", body_l),
]))

# ================= 4. REMAKE ASSETS =================
E.append(Paragraph("4 · Remake the promo video, images & website", h2))
E.append(Paragraph(
    "Only now — with validated words in hand. Doing this first would repeat the exact mistake "
    "Charlie flagged: an unfocused message and a site that “looks like AI vibe code” and doesn’t "
    "match the brand. Order of work:", body))
E.append(numlist([
    "<b>Listing rewrite first</b> (it’s been drafted since May and never shipped): app name, keywords "
    "in merchant vocabulary, hero line, description, screenshots. No engineering needed.",
    "<b>Promo video</b> — 60 seconds: install → first finding → SmartNudge deployed, on a real store.",
    "<b>Promo images</b> — rebuilt around the ≤ 3 points; drop the feature-dump table.",
    "<b>Website / product voice</b> — match the brand, kill the AI-generated feel, lead with the outcome "
    "for the specific store type, one proof element beneath it.",
]))
E.append(accent_panel([Paragraph(
    "<b>Reality check.</b> At near-zero traffic, polishing the site produces zero paying customers "
    "directly — it only improves conversion of traffic you don’t have yet. Do the minimum listing "
    "fix now; save the full design lift for after the first interviews and first payers fund it.", note)]))

E.append(CondPageBreak(45*mm))

# ================= 5-6 BULLSEYE =================
E.append(Paragraph("5 · Traction research — map the outer ring", h2))
E.append(Paragraph(
    "Bullseye: brainstorm every channel (outer ring), run cheap tests on the promising few "
    "(middle ring), then pour everything into the one that works (inner ring). Two research jobs "
    "before you test:", body))
E.append(bullets([
    "<b>List all 19 traction channels</b> and write one concrete DynoWeb idea per channel — specific, "
    "not “SEO” but “rank a ‘Lucky Orange alternative’ page aimed at Shopify merchants.”",
    "<b>Study your own category on the App Store</b> — how do Clarity, MIDA, Lucky Orange and the newer "
    "entrants actually get installs? Reviews, keywords, Built-for-Shopify badge, free tier, category "
    "placement. Their traction sources are visible; copy the mechanics.",
]))
E.append(Paragraph(
    "Default priority order for digital B2B: founder-led sales &amp; outbound, partnerships/integrations, "
    "content + SEO, email, engineering-as-marketing — with one addition specific to us: "
    "<b>the Shopify App Store is itself a search engine</b>, and ranking inside it is a real channel, "
    "not a “rarely-primary” one.", body))

E.append(Paragraph("6 · Test 3 channels — pick 1 (the Bullseye trap)", h2))
E.append(Paragraph(
    "The discipline is <b>3-in, 1-out.</b> Do not run SEO + GEO + backlinks + free features + outbound "
    "all at once — that is the disease. Define the success metric <i>before</i> running; “signal” "
    "means qualified conversations, not raw traffic.", body))
test = table([
    [Paragraph("CHANNEL", cell_hd), Paragraph("CHEAP TEST", cell_hd), Paragraph("SUCCESS SIGNAL", cell_hd)],
    [Paragraph("Convert warm free users", cell_b), Paragraph("Founding offer to the 8 active stores in §2", cell), Paragraph("≥ 3–5 upgrade to paid", cell)],
    [Paragraph("Founder-led outbound", cell_b), Paragraph("30–40 personalized touches/week to named accounts", cell), Paragraph("≥ 3 replies / 1 call per 30", cell)],
    [Paragraph("Comparison-page SEO", cell_b), Paragraph("Publish 1 “[competitor] alternative” page, then leave it", cell), Paragraph("Ranks / 1 inbound in 2–3 wks", cell)],
], [42*mm, 78*mm, 45*mm])
E.append(test)
sp(2)
E.append(Paragraph(
    "<b>Deferred on purpose:</b> SEO / GEO / backlinks are correct long-term but compound over "
    "<i>months</i> — they will produce ~0 paying users inside 60 days. They are the month-3+ layer, "
    "not this sprint’s engine. Say so out loud so they don’t quietly eat the hours.", note))

E.append(CondPageBreak(55*mm))

# ================= 7. LEAD SHEET + FUNNEL MATH =================
E.append(Paragraph("7 · Build the 50-lead sheet & pitch by hand", h2))
E.append(Paragraph(
    "From the confirmed ICP, list 50 named stores that fit — real names, pulled from App Store "
    "reviewers, stores matching the trigger, and lookalikes of whoever converted warm. Pitch each by "
    "hand and maintain the sheet. The columns are the funnel stages, because <b>the funnel math — not "
    "gut feel — tells you whether the plan can hit its number.</b>", body))
E.append(Paragraph("Lead-sheet columns:", h3))
E.append(Paragraph(
    "Store &nbsp;·&nbsp; contact &nbsp;·&nbsp; trigger &nbsp;·&nbsp; free-CRO-report sent? "
    "&nbsp;·&nbsp; touch 1/2/3 &nbsp;·&nbsp; replied? &nbsp;·&nbsp; call booked? "
    "&nbsp;·&nbsp; trialing? &nbsp;·&nbsp; <b>paid?</b> &nbsp;·&nbsp; notes",
    S("mono", fontName=MONO, fontSize=8.5, leading=13, textColor=INK, spaceAfter=8)))

E.append(Paragraph("The honest funnel math (the plan’s Day 3 — do not skip it)", h3))
E.append(Paragraph(
    "You set 50 paying in 60 days. Work it backwards before committing to it:", body))
math = table([
    [Paragraph("SOURCE", cell_hd), Paragraph("REALISTIC CONVERSION", cell_hd), Paragraph("PAYING", cell_hd)],
    [Paragraph("Warm — 8 active free stores", cell), Paragraph("Founding offer, already getting value, some capped", cell), Paragraph("~3–5", cell_b)],
    [Paragraph("Cold — 50-person hand list", cell), Paragraph("reply 15% × call 30% × close 30% ≈ 1.3% lead→paid", cell), Paragraph("~1", cell_b)],
    [Paragraph("Cold — to net ~15 paying", cell), Paragraph("would need ~1,100 leads touched (impossible by hand)", cell), Paragraph("—", cell_b)],
], [45*mm, 92*mm, 28*mm])
E.append(math)
sp(3)
E.append(accent_panel([
    Paragraph("Realistic 60-day ceiling: ~8–15 paying, not 50.",
              S("mh", fontName=SANS_B, fontSize=11, leading=15, textColor=BAD, spaceAfter=5)),
    Paragraph("A 50-person by-hand list and a 50-paying goal are mathematically incompatible — one "
              "has to change. The recommendation: keep <b>50 as the north star you scale into</b>, and "
              "make the <b>real 60-day win</b>: first 8–15 paying + 5–10 App Store reviews + BFS "
              "badge applied + a pitch that converts at a <i>known</i> rate. Hit that and 50 becomes a "
              "volume problem you already know how to solve. Set 50-in-60 as the hard number and 15 will "
              "feel like failure — when 15 first-ever paying customers from zero is a real win.", body_l),
]))

E.append(CondPageBreak(50*mm))

# ================= 8. CREDIBILITY =================
E.append(Paragraph("8 · Credibility layer — BFS badge + reviews", h2))
E.append(Paragraph(
    "Charlie named the real blocker: the app <b>lacks credibility — not Built-for-Shopify, and almost "
    "no reviews.</b> In B2B, trust and proof dominate; this is not a nice-to-have, it is the #4 "
    "principle of the whole plan. Runs in parallel with everything else.", body))
E.append(bullets([
    "<b>Apply for the Built-for-Shopify badge in Week 1</b> — it lifts App Store ranking 30–50% and is "
    "the credibility stamp merchants look for.",
    "<b>Founding-Merchant offer:</b> first 15 payers get Growth ($14/mo) at 30% off for 6 months in "
    "exchange for a written review once they’ve seen a real result. This closes faster than “try it "
    "and maybe upgrade,” builds the review count, and produces case-study material for the next "
    "round of outreach. Cap at 15 — the scarcity is real.",
    "Every review and every case study warms the next deal — that is the <b>proof loop</b>, and it is "
    "the one growth loop already within reach.",
]))

# ================= 9. FREE CRO REPORT =================
E.append(Paragraph("9 · The free CRO report — the hook, not a fifth channel", h2))
E.append(Paragraph(
    "This is the standout among the marketing ideas, but its power is that it is <b>not a separate "
    "workstream.</b> “I ran a free CRO report on your store — here’s the top leak costing you "
    "sales” is the outreach opener that actually earns replies, and it is the proof that supports the "
    "founding offer. Fold it into steps 7 and 8; do not run it as its own channel.", body))
E.append(panel([Paragraph(
    "<b>Engineering-as-marketing.</b> A free, per-store CRO report is a classic free-tool traction play: "
    "it gives value before asking for anything, it is personalized (so it can’t be ignored like a "
    "template), and it demonstrates the product’s core promise in the first touch. It is the single "
    "best piece of ammunition you have — point it at the warm list and the named 50.", body_l)]))

# ================= WEEK MAP =================
E.append(CondPageBreak(60*mm))
E.append(Paragraph("The 90-day cadence at a glance", h2))
wk = table([
    [Paragraph("WHEN", cell_hd), Paragraph("FOCUS", cell_hd), Paragraph("TARGET (cumulative paying)", cell_hd)],
    [Paragraph("Week 1", cell_b), Paragraph("Ship the overdue listing fix · apply for BFS · start warm interviews · build the named-50 list", cell), Paragraph("0 — groundwork", cell)],
    [Paragraph("Weeks 2–4", cell_b), Paragraph("Founding offer to the 8 warm stores · 30–40 outbound touches/week with the free CRO report as hook · track the funnel", cell), Paragraph("8–10", cell_b)],
    [Paragraph("Weeks 5–8", cell_b), Paragraph("Kill the weaker lever, double the winner (Bullseye) · watch for review-driven App Store lift", cell), Paragraph("18–20", cell_b)],
    [Paragraph("Weeks 9–12", cell_b), Paragraph("Referral ask baked into onboarding · finish the named list · compound toward the north star", cell), Paragraph("30 — and climbing to 50", cell_b)],
], [22*mm, 105*mm, 38*mm])
E.append(wk)
sp(8)
E.append(HRFlowable(width="100%", thickness=0.6, color=LINE, spaceAfter=8))
E.append(Paragraph("What has to be true — said plainly", h3))
E.append(Paragraph(
    "This is aggressive for a motion with zero proven paid conversions. It only compounds if, inside "
    "the first three weeks, at least one is true: (a) the warm free-tier users convert meaningfully "
    "better than cold outbound, or (b) the Founding-Merchant discount is steep enough to overcome "
    "“nobody has paid for this yet.” If Week-2’s scorecard shows neither converting, the honest move "
    "is to revisit the offer or the number — not to run the same outreach at higher volume and hope.", body))

doc.build(E)
print("WROTE", OUT)
