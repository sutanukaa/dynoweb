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
          <li>marketing attribution parameters present in the page URL, such as UTM source, medium, campaign, term, and content</li>
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
        <p className="pp-sub-label">Free trial terms</p>
        <p>Each store is eligible for one free trial. Free trial days are granted once per store, on the store&apos;s first paid subscription. Upgrading, downgrading, adding or removing an add-on, cancelling, or re-subscribing does not restart the trial period — any unused trial days from the original trial window are carried over to the new subscription instead. Trial eligibility is determined from the store&apos;s Shopify subscription history. Where no trial days remain, plan changes take effect with Shopify&apos;s standard prorated charging.</p>

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

        <p className="pp-sub-label">G. SmartNudge interventions, exposure logs, and conditional visitor data</p>
        <p>If a merchant enables SmartNudge, DynoWeb may process:</p>
        <ul>
          <li>intervention configuration, targeting rules, copy, A/B variants, and holdout settings</li>
          <li>exposure events such as <code>shown</code>, <code>clicked</code>, <code>dismissed</code>, <code>converted</code>, and <code>holdout</code> bucket assignments</li>
          <li>session ID, page URL, device type, and timestamp associated with each exposure</li>
          <li>conversion linkage including order ID and order total when a tracked session converts</li>
          <li>the <strong>visitor e-mail address</strong> only if the merchant configures a SmartNudge intervention that prompts visitors to submit an e-mail (for example, to receive a discount code) and only when the visitor submits a value that looks like an e-mail address</li>
          <li>discount code metadata when a merchant configures auto-generated Shopify discount codes inside an intervention</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <ul>
          <li>delivering and measuring on-site interventions and experiments</li>
          <li>delivering coupon codes to visitors who explicitly request them</li>
          <li>conversion and revenue attribution for SmartNudge campaigns</li>
        </ul>
        <p className="pp-sub-label">Legal basis</p>
        <p>DynoWeb processes SmartNudge data on the merchant's instructions. The merchant is responsible for displaying any required notices, obtaining consent where required by applicable law (including for storing visitor e-mail addresses), and respecting the visitor's choices via the merchant's consent banner and Shopify's Customer Privacy API.</p>
        <p className="pp-sub-label">Retention</p>
        <p>Exposure events are retained alongside other storefront analytics under the same default analytics history window. Visitor e-mail addresses captured through a SmartNudge intervention are retained while the related intervention or shop record is active and are removed on shop redact, customer redact, or merchant request.</p>

        <p className="pp-sub-label">H. Brand DNA and storefront brand asset extraction</p>
        <p>To power AI-driven design and copy suggestions, DynoWeb may extract and store:</p>
        <ul>
          <li>logo URLs, favicon URLs, and OG image URLs taken from the merchant's storefront</li>
          <li>brand color palettes and typography</li>
          <li>brand voice descriptors and imagery style attributes inferred from the storefront</li>
        </ul>
        <p className="pp-sub-label">Purpose of processing</p>
        <p>Producing on-brand AI suggestions, generated copy, and generated imagery for the merchant.</p>
        <p className="pp-sub-label">Legal basis</p>
        <p>Performance of a contract with the merchant (GDPR Article 6(1)(b)) and our legitimate interests in operating merchant-requested AI features (GDPR Article 6(1)(f)).</p>
        <p className="pp-sub-label">Retention</p>
        <p>Brand DNA records are retained while the merchant account is active and refreshed when the merchant re-runs brand extraction.</p>

        <p className="pp-sub-label">I. Agent action history and approval audit trail</p>
        <p>For DynoAgent write actions, DynoWeb stores an audit record of each pending and executed action, which may include the input payload, a "before" snapshot, and an "after" snapshot of the affected Shopify resource or theme file.</p>
        <p className="pp-sub-label">Purpose of processing</p>
        <p>Approval-gated execution, rollback safety, debugging, and audit transparency for the merchant.</p>
        <p className="pp-sub-label">Retention</p>
        <p>Agent action history is retained while the merchant account is active and is purged when the shop is redacted or on validated merchant request.</p>

        <p className="pp-sub-label">J. Customer data accessed through Shopify admin tools</p>
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
        <p className="pp-sub-label">Resend</p>
        <p>Purpose: transactional and notification e-mail delivery, including SmartNudge coupon e-mails, weekly CRO digests, customer data-request exports, and operational notifications.</p>
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
        <p>Requests may be sent to <a href="mailto:help@dynoweb.app">help@dynoweb.app</a> or to any other privacy contact details published by the Data Controller.</p>
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
          <li>contact DynoWeb first at <a href="mailto:help@dynoweb.app">help@dynoweb.app</a></li>
          <li>contact the merchant whose storefront collected the data, where relevant</li>
          <li>lodge a complaint with your local data protection or privacy authority</li>
          <li>seek another remedy available under applicable law</li>
        </ul>
        <p>Effective from: May 5, 2026</p>
      </>
    ),
  },
];

export default function PrivacyPolicyClient() {
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

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dynoweb.app/" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.dynoweb.app/privacy-policy" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
        /* Mobile-only header — shown when the 3-col layout collapses */
        .pp-mobile-header { display: none; }
        .pp-mobile-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.9rem, 7.5vw, 2.6rem);
          font-weight: 800;
          line-height: 1.06;
          letter-spacing: -0.03em;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .pp-mobile-title span { color: rgba(255,255,255,0.3); }
        .pp-mobile-updated {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.28);
          font-weight: 500;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }
        .pp-mobile-select {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: rgba(255,255,255,0.85);
          font-family: 'Karla', sans-serif;
          font-size: 0.95rem;
          padding: 12px 40px 12px 14px;
          margin-bottom: 1.75rem;
          appearance: none;
          -webkit-appearance: none;
          outline: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
          background-repeat: no-repeat;
          background-position: right 14px center;
          transition: border-color 0.15s, background-color 0.15s;
        }
        .pp-mobile-select:focus,
        .pp-mobile-select:hover {
          border-color: rgba(110,176,255,0.35);
          background-color: rgba(255,255,255,0.06);
        }
        .pp-mobile-select option {
          background: #0a0a0a;
          color: #fff;
        }

        @media (max-width: 860px) {
          /* page scrolls naturally on mobile — no internal scrollers */
          .pp-root {
            height: auto;
            min-height: calc(100svh - var(--pillnav-height, 72px));
            overflow: visible;
          }
          .pp-body {
            grid-template-columns: 1fr;
            overflow: visible;
          }
          .pp-left { display: none; }
          .pp-mid { display: none; }
          .pp-right {
            overflow: visible;
            padding: 1.75rem 1.25rem 3rem;
          }
          .pp-mobile-header { display: block; }
          .pp-section-view { max-width: 100%; }
          .pp-section-h {
            font-size: clamp(1.5rem, 6vw, 2rem);
            margin-bottom: 1.2rem;
          }
          .pp-section-view p {
            font-size: 0.98rem;
            line-height: 1.78;
          }
          .pp-section-view ul li {
            font-size: 0.95rem;
            line-height: 1.65;
          }
          .pp-page-nav {
            flex-wrap: wrap;
            gap: 0.75rem;
            justify-content: space-between;
          }
          .pp-page-progress { order: 3; width: 100%; text-align: center; }
        }
        @media (max-width: 480px) {
          .pp-right { padding: 1.25rem 1rem 2.5rem; }
          .pp-page-btn { font-size: 0.84rem; }
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
          font-size: clamp(2.2rem, 3vw, 3rem);
          font-weight: 800; line-height: 1.06; letter-spacing: -0.03em;
          color: #fff; text-shadow: 0 0 50px rgba(255,255,255,0.1);
          margin-bottom: 0.85rem;
        }
        .pp-main-title span { color: rgba(255,255,255,0.2); }
        .pp-updated { font-size: 0.85rem; color: rgba(255,255,255,0.22); font-weight: 500; letter-spacing: 0.02em; }
        .pp-left-foot { font-size: 0.84rem; color: rgba(255,255,255,0.18); line-height: 1.75; }
        .pp-left-foot a { color: rgba(110,176,255,0.4); text-decoration: none; transition: color 0.15s; }
        .pp-left-foot a:hover { color: rgba(110,176,255,0.75); }

        /* MID — section list */
        .pp-mid {
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 1.75rem 0;
          display: flex; flex-direction: column; overflow-y: auto;
        }
        .pp-mid-label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.16); padding: 0 1.1rem 0.7rem;
        }
        .pp-mid-btn {
          display: flex; align-items: flex-start; gap: 9px;
          padding: 9px 1.1rem;
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
          font-family: 'Montserrat', sans-serif; font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.06em; color: rgba(255,255,255,0.16); min-width: 18px; padding-top: 2px;
        }
        .pp-mid-btn.active .pp-mid-num { color: rgba(110,176,255,0.5); }
        .pp-mid-text {
          font-family: 'Karla', sans-serif; font-size: 0.95rem; font-weight: 500;
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
          max-width: 760px;
        }

        .pp-eyebrow {
          display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1.6rem;
        }
        .pp-eyebrow-num {
          font-family: 'Montserrat', sans-serif; font-size: 0.74rem; font-weight: 700;
          letter-spacing: 0.1em; color: rgba(110,176,255,0.5);
          border: 1px solid rgba(110,176,255,0.18);
          background: rgba(110,176,255,0.06);
          border-radius: 4px; padding: 2px 7px;
        }
        .pp-eyebrow-line { flex: 1; height: 1px; background: rgba(255,255,255,0.06); }

        .pp-section-h {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(1.75rem, 2.5vw, 2.25rem);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.02em;
          color: #fff; margin-bottom: 1.5rem;
        }

        .pp-section-view p {
          font-size: 1.02rem; line-height: 1.85; color: rgba(255,255,255,0.56); margin-bottom: 0.95rem;
        }
        .pp-section-view p:last-child { margin-bottom: 0; }
        .pp-section-view ul { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1rem; padding: 0; }
        .pp-section-view ul li { display: flex; align-items: baseline; gap: 0.75rem; font-size: 1rem; line-height: 1.72; color: rgba(255,255,255,0.5); }
        .pp-section-view ul li::before {
          content: ''; display: inline-block; width: 4px; height: 4px; border-radius: 50%;
          background: rgba(255,255,255,0.13); flex-shrink: 0; margin-top: 0.55em;
        }
        .pp-section-view a { color: rgba(110,176,255,0.72); text-decoration: none; transition: color 0.15s; }
        .pp-section-view a:hover { color: rgba(110,176,255,1); }
        .pp-section-view code {
          font-family: 'Courier New', monospace; font-size: 0.92rem;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 4px; padding: 1px 6px; color: rgba(255,255,255,0.52);
        }
        .pp-sub-label {
          font-family: 'Montserrat', sans-serif !important;
          font-size: 0.78rem !important; font-weight: 700 !important;
          letter-spacing: 0.09em !important; text-transform: uppercase !important;
          color: rgba(255,255,255,0.24) !important;
          margin-top: 1.35rem !important; margin-bottom: 0.5rem !important;
        }

        /* prev / next */
        .pp-page-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 3rem; padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          max-width: 760px;
        }
        .pp-page-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Karla', sans-serif; font-size: 0.92rem; font-weight: 600;
          color: rgba(255,255,255,0.38); background: transparent; border: none;
          cursor: pointer; padding: 0; transition: color 0.15s;
        }
        .pp-page-btn:hover { color: rgba(255,255,255,0.65); }
        .pp-page-btn:disabled { opacity: 0.15; cursor: default; }
        .pp-page-progress {
          font-family: 'Montserrat', sans-serif; font-size: 0.76rem; font-weight: 700;
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
              <p className="pp-updated">Last updated: May 5, 2026</p>
            </div>
            <div className="pp-left-foot">
              Questions?<br />
              <a href="mailto:help@dynoweb.app">help@dynoweb.app</a>
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
            {/* Mobile-only header: title + section jump select */}
            <header className="pp-mobile-header">
              <h1 className="pp-mobile-title">Privacy <span>Policy</span></h1>
              <p className="pp-mobile-updated">Last updated: May 5, 2026</p>
              <select
                className="pp-mobile-select"
                value={activeId}
                onChange={(e) => goTo(e.target.value)}
                aria-label="Jump to a section"
              >
                {sections.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.number}. {s.title}
                  </option>
                ))}
              </select>
            </header>

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
