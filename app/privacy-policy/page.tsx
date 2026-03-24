"use client";

import { useEffect, useRef, useState } from "react";
import PillNav from "../components/PillNav";
import Footer from "../components/Footer";

const sections = [
  {
    id: "controller",
    number: "01",
    title: "Data Controller",
    content: (
      <>
        <p className="pp-sub-label">For Merchants and Store Visitors</p>
        <p>DynoWeb is a Shopify application that helps merchants understand storefront behavior, generate AI-driven suggestions, and optionally apply changes to draft themes.</p>
        <p>For merchant account data, support data, billing data, and app-usage data, DynoWeb generally acts as a data controller.</p>
        <p>For storefront visitor analytics and replay data collected from a merchant's Shopify store through the DynoWeb tracker, DynoWeb generally acts as a data processor or service provider on behalf of that merchant. The merchant remains responsible for providing any required notices and obtaining any consent required by applicable law. Where Shopify's Customer Privacy API is available, DynoWeb's storefront tracker is designed to wait until analytics processing is allowed before it starts collecting analytics data.</p>
      </>
    ),
  },
  {
    id: "storage",
    number: "02",
    title: "Cookies, Local Storage, and Similar Technologies",
    content: (
      <>
        <p>DynoWeb uses browser-based storage and platform session technologies to operate the website, Shopify app, and storefront tracker.</p>
        <p>Depending on the context, these technologies may include:</p>
        <ul>
          <li>session technologies used by Shopify and the embedded app environment for authentication and app operation</li>
          <li><code>sessionStorage</code> used to keep a DynoWeb session identifier on the storefront during a browsing session</li>
          <li><code>localStorage</code> used to temporarily queue failed event batches for retry, store replay quota counters, and store debug flags where enabled</li>
          <li><code>sessionStorage</code> used to store replay sequencing state during a browsing session</li>
        </ul>
        <p>In the storefront integration currently implemented in the codebase, DynoWeb does not set its own custom marketing cookies. Instead, the tracker relies mainly on <code>sessionStorage</code> and <code>localStorage</code> for operational purposes. Shopify and other platform components may still use their own cookies or similar technologies for authentication, storefront operation, consent handling, billing, and embedded app behavior.</p>
        <p>On Shopify storefronts, DynoWeb is designed to integrate with Shopify's Customer Privacy API. Where that API is available, DynoWeb checks whether analytics processing is allowed before loading the tracker. DynoWeb also listens for Shopify's consent-change event so that tracking can respond to updated visitor choices.</p>
        <p>If a browser blocks cookies, <code>localStorage</code>, or <code>sessionStorage</code>, parts of DynoWeb may not work properly. For example, login, batching, replay limits, or revenue attribution may not operate as intended.</p>
        <p>Visitors and merchants can control cookies and similar technologies through their browser settings and, on Shopify storefronts, through the merchant's configured privacy or consent banner.</p>
      </>
    ),
  },
  {
    id: "processing",
    number: "03",
    title: "Data Processing on the Website and in the App",
    content: (
      <>
        <p className="pp-sub-label">A. Shopify installation, login, and account access</p>
        <p>DynoWeb may process the following data when a merchant installs or uses the app:</p>
        <ul>
          <li>shop domain</li>
          <li>Shopify access tokens and refresh-token related data</li>
          <li>granted scopes</li>
          <li>session identifiers</li>
          <li>Shopify user ID</li>
          <li>merchant first name and last name, if provided by Shopify</li>
          <li>merchant e-mail address, if provided by Shopify</li>
          <li>locale, collaborator status, account-owner status, and e-mail verification status, if provided by Shopify</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <ul>
          <li>merchant authentication</li>
          <li>operating the embedded Shopify app</li>
          <li>maintaining app sessions</li>
          <li>verifying billing and scopes</li>
          <li>handling installation, reinstallation, uninstallation, and app access</li>
        </ul>
        <p className="pp-sub-label">Legal basis</p>
        <ul>
          <li>performance of a contract or steps taken at the request of the merchant before entering into a contract (GDPR Article 6(1)(b))</li>
          <li>our legitimate interests in securing the app, preventing abuse, and maintaining service integrity (GDPR Article 6(1)(f))</li>
        </ul>
        <p className="pp-sub-label">Retention</p>
        <p>Generally for as long as necessary to operate the merchant's installation and account access, subject to uninstall events, token expiry, deletion requests, and legal obligations.</p>

        <p className="pp-sub-label">B. Merchant settings and support</p>
        <p>DynoWeb may process the following merchant-provided or merchant-configured data:</p>
        <ul>
          <li>tracking settings and replay settings</li>
          <li>notification preferences</li>
          <li>storefront password submitted by the merchant for protected storefront screenshots</li>
          <li>default profitability settings such as COGS percentage</li>
          <li>support and feedback form submissions, including subject, category, message, and optional contact e-mail address</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <ul>
          <li>configuring the product for the merchant's store</li>
          <li>providing support and troubleshooting</li>
          <li>collecting product feedback</li>
          <li>capturing screenshots of password-protected storefronts when requested by the merchant</li>
        </ul>
        <p className="pp-sub-label">Legal basis</p>
        <ul>
          <li>performance of a contract (GDPR Article 6(1)(b))</li>
          <li>our legitimate interests in support, service improvement, and troubleshooting (GDPR Article 6(1)(f))</li>
          <li>where relevant, consent for optional data provided voluntarily (GDPR Article 6(1)(a))</li>
        </ul>
        <p className="pp-sub-label">Retention</p>
        <p>Until the settings are changed or removed, or for as long as support and service records are reasonably needed.</p>

        <p className="pp-sub-label">C. Storefront analytics, heatmaps, journeys, and form interaction analytics</p>
        <p>When a merchant enables DynoWeb tracking on its Shopify storefront, DynoWeb may process:</p>
        <ul>
          <li>page path, referrer, and page title</li>
          <li>DynoWeb session ID</li>
          <li>viewport width and height, device type, orientation, and pixel ratio</li>
          <li>click events, rage clicks, dead clicks, error clicks, mouse-shake signals, mobile gestures, visibility events, and scroll metrics</li>
          <li>limited element metadata, such as selector, xpath, HTML tag, and limited visible element text associated with the interaction</li>
          <li>form interaction metadata, such as hashed field identifiers, time spent, and whether a field was changed</li>
          <li>cart or conversion-intent related metadata such as product handle, quantity, and variant ID where available</li>
          <li>coarse geolocation fields such as country, region, and city</li>
          <li>a one-way hash of the visitor IP address</li>
        </ul>
        <p>DynoWeb's current tracker implementation is designed not to store:</p>
        <ul>
          <li>raw IP addresses</li>
          <li>form field values</li>
          <li>customer names, e-mail addresses, phone numbers, or postal addresses as part of the standard tracker payload</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <ul>
          <li>heatmaps</li>
          <li>journey and funnel analysis</li>
          <li>frustration and UX diagnostics</li>
          <li>conversion analysis</li>
          <li>revenue attribution support</li>
          <li>analytics dashboards</li>
          <li>AI-generated suggestions and optimization workflows</li>
        </ul>
        <p className="pp-sub-label">Legal basis</p>
        <p>For storefront visitor data, DynoWeb generally acts on the merchant's instructions; the merchant is responsible for identifying and documenting the appropriate legal basis and obtaining any required consent under applicable law.</p>
        <p className="pp-sub-label">Retention</p>
        <p>The current implementation is designed to retain raw click, scroll, form, and page-view records for the applicable analysis history window, which is set to 90 days by default in the codebase, after which older raw events are deleted during scheduled rollups.</p>
        <p>Aggregated analytics and derived insights may be retained longer while the merchant account remains active.</p>

        <p className="pp-sub-label">D. Session replay</p>
        <p>If session replay is enabled by a merchant, DynoWeb may process:</p>
        <ul>
          <li>rrweb replay event data and DOM snapshots</li>
          <li>replay metadata such as session ID, device type, entry page, exit page, duration, frustration score, country, and conversion status</li>
          <li>order-total linkage where a tracked session later converts</li>
        </ul>
        <p>DynoWeb's current replay configuration is designed to:</p>
        <ul>
          <li>mask input values broadly, including password, text, email, telephone, search, textarea, and select fields</li>
          <li>block password fields and explicitly marked private regions</li>
          <li>respect replay retention settings configured by the merchant</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <p>Replaying real browsing sessions so the merchant can diagnose friction, hesitation, or broken UX.</p>
        <p className="pp-sub-label">Legal basis</p>
        <p>DynoWeb generally processes replay data on the merchant's instructions, subject to the merchant's own privacy and consent obligations.</p>
        <p className="pp-sub-label">Retention</p>
        <p>Configurable by the merchant.</p>
        <p>Default replay retention in the current codebase is 7 days.</p>
        <p>The current implementation supports a configurable retention period and purges expired replay data from storage after the retention period ends.</p>

        <p className="pp-sub-label">E. Orders and revenue attribution</p>
        <p>DynoWeb receives limited order-related data from Shopify webhooks and stores:</p>
        <ul>
          <li>Shopify order ID</li>
          <li>DynoWeb session ID if passed through cart attributes or note attributes</li>
          <li>total price</li>
          <li>currency</li>
          <li>order creation or processing timestamps</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <ul>
          <li>connecting orders back to tracked sessions</li>
          <li>attributing revenue to storefront pages, sessions, and elements</li>
          <li>supporting conversion analytics</li>
        </ul>
        <p className="pp-sub-label">Legal basis</p>
        <ul>
          <li>performance of a contract (GDPR Article 6(1)(b))</li>
          <li>our legitimate interests in providing attribution and analytics requested by the merchant (GDPR Article 6(1)(f))</li>
          <li>in the storefront visitor context, processing also occurs on the merchant's instructions</li>
        </ul>
        <p>DynoWeb does not store payment card numbers through its own billing flow. Merchant subscription charging is handled through Shopify billing.</p>

        <p className="pp-sub-label">F. DynoAgent, AI suggestions, screenshots, theme analysis, and generated images</p>
        <p>If a merchant uses DynoAgent or other AI features, DynoWeb may process:</p>
        <ul>
          <li>merchant prompts and chat messages</li>
          <li>uploaded files or images submitted in the chat</li>
          <li>message metadata and token-usage metadata</li>
          <li>saved AI insights and memory items</li>
          <li>pending approval records, action previews, and before/after payloads for write actions</li>
          <li>theme files, theme snippets, template structure, and brand settings needed for audits, previews, or draft-theme changes</li>
          <li>screenshots of storefront pages</li>
          <li>product, page, collection, blog, or theme content the merchant asks DynoWeb to analyze or modify</li>
          <li>generated images and related prompts</li>
          <li>selected analytics context needed to produce AI suggestions or reports</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <ul>
          <li>AI-powered analysis</li>
          <li>suggestion generation</li>
          <li>content generation</li>
          <li>theme code generation</li>
          <li>search-grounded answers</li>
          <li>image generation</li>
          <li>approval-gated store actions</li>
          <li>draft-theme previews and screenshots</li>
        </ul>
        <p className="pp-sub-label">Legal basis</p>
        <ul>
          <li>performance of a contract (GDPR Article 6(1)(b))</li>
          <li>our legitimate interests in operating and improving merchant-requested AI features (GDPR Article 6(1)(f))</li>
        </ul>
        <p className="pp-sub-label">Retention</p>
        <ul>
          <li>chat conversations and action history are generally retained while needed for the feature or until related shop data is deleted</li>
          <li>saved AI insight memory currently expires after 30 days</li>
          <li>the LLM response cache currently uses a short-lived cache window of approximately 6 hours</li>
          <li>generated images are currently cached for approximately 2 hours</li>
          <li>screenshot cache entries are currently cached for approximately 1 hour for preview-theme captures and approximately 6 hours for other captures</li>
        </ul>

        <p className="pp-sub-label">G. Customer data accessed through Shopify admin tools</p>
        <p>DynoWeb's Shopify app scopes and agent tooling may permit access to certain Shopify customer data if a merchant explicitly uses customer-related admin tools.</p>
        <p>If such tools are used, DynoWeb may process customer-related data returned by Shopify, such as:</p>
        <ul>
          <li>customer names</li>
          <li>customer e-mail addresses</li>
          <li>customer postal addresses</li>
          <li>segment information</li>
          <li>other customer data available through Shopify Admin APIs or connected tool-routing services</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <p>Fulfilling the merchant's explicit request inside the app.</p>
        <p className="pp-sub-label">Legal basis</p>
        <p>Performance of a contract with the merchant and processing on the merchant's instructions.</p>
        <p className="pp-sub-label">Important note</p>
        <p>DynoWeb's standard storefront analytics views are designed not to expose individual customer names, e-mail addresses, or IDs. Customer-level data is relevant only if the merchant explicitly invokes customer-related admin functionality.</p>
      </>
    ),
  },
  {
    id: "compliance",
    number: "04",
    title: "Legal Obligations, Security, and Platform Compliance",
    content: (
      <>
        <p>DynoWeb may process personal data where necessary to comply with legal obligations, platform requirements, or security obligations, including:</p>
        <ul>
          <li>handling Shopify mandatory privacy or compliance webhooks such as <code>customers/data_request</code>, <code>customers/redact</code>, and <code>shop/redact</code></li>
          <li>handling app lifecycle and operational webhooks such as <code>app/uninstalled</code>, <code>app/scopes_update</code>, and <code>orders/create</code></li>
          <li>maintaining audit logs, error logs, and security-related records</li>
          <li>responding to lawful requests, defending legal claims, or enforcing our terms</li>
        </ul>
        <p>DynoWeb's standard storefront tracker is intentionally designed not to associate analytics events with direct customer identifiers such as customer name, e-mail, or phone number. However, if customer-related admin tools are used by a merchant, applicable records may need to be reviewed and deleted in response to valid deletion requests.</p>
        <p className="pp-sub-label">Legal basis</p>
        <ul>
          <li>compliance with legal obligations (GDPR Article 6(1)(c))</li>
          <li>our legitimate interests in security, fraud prevention, service integrity, and legal defense (GDPR Article 6(1)(f))</li>
        </ul>
      </>
    ),
  },
  {
    id: "processors",
    number: "05",
    title: "Data Transfer and Data Processors",
    content: (
      <>
        <p>DynoWeb may use the following categories of processors or sub-processors, based on the current codebase:</p>
        <p className="pp-sub-label">Shopify</p>
        <p>Purpose: authentication, embedded app operation, billing, Admin API access, theme operations, customer privacy API integration, and platform webhooks.</p>
        <p className="pp-sub-label">Google / Google Cloud</p>
        <p>Purpose: Gemini-powered chat, grounded search, image generation, and Google Cloud Storage-based storage or caching for replay and screenshot assets where configured; hosting and infrastructure may also run on Google Cloud services.</p>
        <p className="pp-sub-label">OpenRouter</p>
        <p>Purpose: AI suggestion generation, quick-wins audits, and theme code generation. Prompts sent to OpenRouter may include merchant prompts, analytics context, screenshots, theme snippets, and merchant-supplied storefront content. OpenRouter may route requests to underlying model providers.</p>
        <p className="pp-sub-label">Composio</p>
        <p>Purpose: optional Shopify tool routing and automation used by DynoAgent. In the current implementation, Shopify access tokens and tool inputs may be sent to Composio when these features are used.</p>
        <p className="pp-sub-label">Sentry</p>
        <p>Purpose: application error monitoring and technical diagnostics.</p>
        <p className="pp-sub-label">Our database, storage, and hosting providers</p>
        <p>Purpose: storing merchant account data, analytics data, support records, billing usage, chat history, and temporary caches.</p>
        <p>DynoWeb may transfer data to countries outside the country where the merchant or visitor is located. Where such transfers occur, they should be assessed and handled in accordance with applicable law and the contractual or technical safeguards used by the relevant provider.</p>
      </>
    ),
  },
  {
    id: "rights",
    number: "06",
    title: "Your Rights",
    content: (
      <>
        <p>Subject to applicable law, data subjects may have the right to:</p>
        <ul>
          <li>request access to their personal data</li>
          <li>request correction of inaccurate or incomplete data</li>
          <li>request deletion of personal data</li>
          <li>request restriction of processing</li>
          <li>object to certain processing based on legitimate interests</li>
          <li>request data portability where applicable</li>
          <li>withdraw consent where processing is based on consent</li>
          <li>lodge a complaint with a competent supervisory authority or regulator</li>
          <li>seek a judicial or other legal remedy where permitted by law</li>
        </ul>
        <p>If your personal data was collected on a merchant's Shopify storefront through the DynoWeb tracker, you should usually contact that merchant first, because DynoWeb generally processes that data on the merchant's behalf.</p>
        <p>Requests may be sent to <a href="mailto:support@dynoweb.ai">support@dynoweb.ai</a> or to any other privacy contact details published by the Data Controller.</p>
        <p>DynoWeb will review and respond to valid requests within the timeframe required by applicable law.</p>
      </>
    ),
  },
  {
    id: "remedies",
    number: "07",
    title: "Complaints and Legal Remedies",
    content: (
      <>
        <p>If you believe your personal data has been processed unlawfully, you may:</p>
        <ul>
          <li>contact DynoWeb first at <a href="mailto:support@dynoweb.ai">support@dynoweb.ai</a></li>
          <li>contact the merchant whose storefront collected the data, where relevant</li>
          <li>lodge a complaint with your local data protection or privacy authority</li>
          <li>seek another remedy available under applicable law</li>
        </ul>
        <p>Effective from: March 24, 2026</p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [animKey, setAnimKey] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeIndex = sections.findIndex((s) => s.id === activeId);
  const activeSection = sections[activeIndex];

  const goTo = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    const pts: { x: number; y: number; vx: number; vy: number; a: number; r: number }[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 65; i++) {
      pts.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.28 + 0.04,
        r: Math.random() * 1.1 + 0.3,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`; ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Karla:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* pp-root is the full-page wrapper — no height/overflow here,
           PillNav lives outside it and stacks normally above */
        .pp-root {
          background: #0a0a0a;
          color: #fff;
          font-family: 'Karla', sans-serif;
          position: relative;
          display: flex;
          flex-direction: column;
          /* Fill whatever viewport space remains after PillNav */
          height: calc(100svh - var(--pillnav-height, 72px));
          overflow: hidden;
        }

        .pp-canvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

        .pp-dot-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 20%, transparent 100%);
        }
        .pp-glow-top {
          position: fixed; top: -80px; left: 0; right: 0; height: 420px; z-index: 0; pointer-events: none;
          background: radial-gradient(50% 100% at 50% 0%, rgba(255,255,255,0.065) 0%, transparent 100%);
        }
        .pp-glow-l {
          position: fixed; top: 10%; left: -15%; width: 50%; height: 60%; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse at 20% 40%, rgba(110,176,255,0.04) 0%, transparent 65%);
        }
        .pp-glow-r {
          position: fixed; bottom: 5%; right: -10%; width: 45%; height: 55%; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse at 80% 60%, rgba(110,176,255,0.03) 0%, transparent 65%);
        }
        .pp-vignette {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse 120% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.58) 100%);
        }
        .pp-border-l, .pp-border-r {
          position: fixed; top: 0; bottom: 0; width: 1px; z-index: 40; pointer-events: none;
          background: rgba(255,255,255,0.08);
          mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 80%, transparent 100%);
        }
        .pp-border-l { left: 0; } .pp-border-r { right: 0; }

        /* 3-COL BODY — fills the remaining height of pp-root */
        .pp-body {
          position: relative; z-index: 1;
          flex: 1;
          overflow: hidden;
          display: grid;
          grid-template-columns: 240px 210px 1fr;
        }
        @media (max-width: 860px) {
          .pp-body { grid-template-columns: 1fr; }
          .pp-left { display: none; }
          .pp-mid { display: none; }
        }

        /* LEFT — static title */
        .pp-left {
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 2.5rem 1.75rem;
          display: flex; flex-direction: column; justify-content: space-between;
          overflow: hidden;
        }
        .pp-main-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.8rem, 2.6vw, 2.6rem);
          font-weight: 800; line-height: 1.06; letter-spacing: -0.03em;
          color: #fff; text-shadow: 0 0 50px rgba(255,255,255,0.1);
          margin-bottom: 0.85rem;
        }
        .pp-main-title span { color: rgba(255,255,255,0.2); }
        .pp-updated { font-size: 0.7rem; color: rgba(255,255,255,0.18); font-weight: 500; letter-spacing: 0.03em; }
        .pp-left-foot { font-size: 0.68rem; color: rgba(255,255,255,0.12); line-height: 1.75; }
        .pp-left-foot a { color: rgba(110,176,255,0.4); text-decoration: none; transition: color 0.15s; }
        .pp-left-foot a:hover { color: rgba(110,176,255,0.75); }

        /* MID — section list */
        .pp-mid {
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 1.75rem 0;
          display: flex; flex-direction: column; overflow-y: auto;
        }
        .pp-mid-label {
          font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.16); padding: 0 1.1rem 0.7rem;
        }
        .pp-mid-btn {
          display: flex; align-items: flex-start; gap: 9px;
          padding: 7px 1.1rem;
          border: none; border-left: 2px solid transparent;
          background: transparent; cursor: pointer; text-align: left; width: 100%;
          transition: background 0.12s, border-color 0.12s;
        }
        .pp-mid-btn:hover { background: rgba(255,255,255,0.03); }
        .pp-mid-btn.active {
          background: rgba(255,255,255,0.05);
          border-left-color: rgba(110,176,255,0.45);
        }
        .pp-mid-num {
          font-family: 'Montserrat', sans-serif; font-size: 0.56rem; font-weight: 700;
          letter-spacing: 0.06em; color: rgba(255,255,255,0.16); min-width: 18px; padding-top: 2px;
        }
        .pp-mid-btn.active .pp-mid-num { color: rgba(110,176,255,0.5); }
        .pp-mid-text {
          font-family: 'Karla', sans-serif; font-size: 0.76rem; font-weight: 500;
          color: rgba(255,255,255,0.28); line-height: 1.4;
        }
        .pp-mid-btn.active .pp-mid-text { color: rgba(255,255,255,0.78); }

        /* RIGHT — single section */
        .pp-right {
          overflow-y: auto;
          padding: 3rem max(2rem, 4vw) 4rem;
        }

        @keyframes sectionFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pp-section-view {
          animation: sectionFadeUp 0.28s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          max-width: 620px;
        }

        .pp-eyebrow {
          display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.6rem;
        }
        .pp-eyebrow-num {
          font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.1em; color: rgba(110,176,255,0.5);
          border: 1px solid rgba(110,176,255,0.18);
          background: rgba(110,176,255,0.06);
          border-radius: 4px; padding: 2px 7px;
        }
        .pp-eyebrow-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }

        .pp-section-h {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.25rem, 2.2vw, 1.7rem);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 1.5rem;
        }

        .pp-section-view p {
          font-size: 0.91rem; line-height: 1.88; color: rgba(255,255,255,0.42); margin-bottom: 0.8rem;
        }
        .pp-section-view p:last-child { margin-bottom: 0; }
        .pp-section-view ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.9rem; padding: 0; }
        .pp-section-view ul li { display: flex; align-items: baseline; gap: 0.75rem; font-size: 0.9rem; line-height: 1.72; color: rgba(255,255,255,0.38); }
        .pp-section-view ul li::before {
          content: ''; display: inline-block; width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,255,255,0.13); flex-shrink: 0; margin-top: 0.55em;
        }
        .pp-section-view a { color: rgba(110,176,255,0.72); text-decoration: none; transition: color 0.15s; }
        .pp-section-view a:hover { color: rgba(110,176,255,1); }
        .pp-section-view code {
          font-family: 'Courier New', monospace; font-size: 0.79rem;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 4px; padding: 1px 6px; color: rgba(255,255,255,0.52);
        }
        .pp-sub-label {
          font-family: 'Montserrat', sans-serif !important;
          font-size: 0.6rem !important; font-weight: 700 !important;
          letter-spacing: 0.09em !important; text-transform: uppercase !important;
          color: rgba(255,255,255,0.18) !important;
          margin-top: 1.2rem !important; margin-bottom: 0.4rem !important;
        }

        /* prev / next */
        .pp-page-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 3rem; padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          max-width: 620px;
        }
        .pp-page-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Karla', sans-serif; font-size: 0.76rem; font-weight: 600;
          color: rgba(255,255,255,0.28); background: transparent; border: none;
          cursor: pointer; padding: 0; transition: color 0.15s;
        }
        .pp-page-btn:hover { color: rgba(255,255,255,0.65); }
        .pp-page-btn:disabled { opacity: 0.15; cursor: default; }
        .pp-page-progress {
          font-family: 'Montserrat', sans-serif; font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.07em; color: rgba(255,255,255,0.13);
        }
      `}</style>

      {/* PillNav renders at its natural height outside pp-root */}
      <PillNav />

      <div className="pp-root">
        <canvas ref={canvasRef} className="pp-canvas" aria-hidden="true" />
        <div className="pp-dot-grid" aria-hidden="true" />
        <div className="pp-glow-top" aria-hidden="true" />
        <div className="pp-glow-l" aria-hidden="true" />
        <div className="pp-glow-r" aria-hidden="true" />
        <div className="pp-vignette" aria-hidden="true" />
        <div className="pp-border-l" aria-hidden="true" />
        <div className="pp-border-r" aria-hidden="true" />

        <div className="pp-body" style={{ marginTop: "var(--pillnav-height, 72px)" }}>

          {/* LEFT — static */}
          <div className="pp-left">
            <div>
              <h1 className="pp-main-title">Privacy<br /><span>Policy</span></h1>
              <p className="pp-updated">Last updated: March 24, 2026</p>
            </div>
            <div className="pp-left-foot">
              Questions?<br />
              <a href="mailto:support@dynoweb.ai">support@dynoweb.ai</a>
            </div>
          </div>

          {/* MID — nav */}
          <nav className="pp-mid">
            {sections.map(({ id, number, title }) => (
              <button
                key={id}
                className={`pp-mid-btn${activeId === id ? " active" : ""}`}
                onClick={() => goTo(id)}
              >
                <span className="pp-mid-num">{number}</span>
                <span className="pp-mid-text">{title}</span>
              </button>
            ))}
          </nav>

          {/* RIGHT — active section */}
          <div className="pp-right">
            {activeSection ? (
              <div key={animKey} className="pp-section-view">
                <div className="pp-eyebrow">
                  <span className="pp-eyebrow-num">{activeSection.number}</span>
                  <span className="pp-eyebrow-line" />
                </div>
                <h2 className="pp-section-h">{activeSection.title}</h2>
                {activeSection.content}

                <div className="pp-page-nav">
                  <button
                    className="pp-page-btn"
                    onClick={() => goTo(sections[activeIndex - 1]?.id)}
                    disabled={activeIndex === 0}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    {activeIndex > 0 ? sections[activeIndex - 1]?.title : "Previous"}
                  </button>
                  <span className="pp-page-progress">
                    {activeSection.number} / {String(sections.length).padStart(2, "0")}
                  </span>
                  <button
                    className="pp-page-btn"
                    onClick={() => goTo(sections[activeIndex + 1]?.id)}
                    disabled={activeIndex === sections.length - 1}
                  >
                    {activeIndex < sections.length - 1 ? sections[activeIndex + 1]?.title : "Next"}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <div className="pp-section-view">
                <h2 className="pp-section-h">Section not found</h2>
                <p>This section does not exist.</p>
              </div>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
