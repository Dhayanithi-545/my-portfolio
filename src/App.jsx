import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  Sun, Moon, ArrowUpRight, LucideGithub, LucideLinkedin, Mail, MapPin,
  Send, CheckCircle, AlertCircle, Loader2, ExternalLink, Lock,
} from 'lucide-react';

// ── Assets ────────────────────────────────────────────────────────────────────
import photo      from './assets/dhayanithi.png';
import newsBg     from './assets/news.svg';
import binaryBg   from './assets/binary-black.svg';
import beebotImg  from './assets/beebot.png';
import resumeImg  from './assets/resume-labs.png';
import timesImg   from './assets/timesofworld.png';
import giftyImg   from './assets/gifty.png';
import portalImg  from './assets/research-portal.jpg';
import arushiImg  from './assets/arushi.jpg';
import bakesImg   from './assets/sribakes.jpg';

// ── Data ──────────────────────────────────────────────────────────────────────
// Roles currently running in parallel — rendered as the masthead "wire" strip.
const NOW = [
  { label: 'AI Engineer',  org: 'Montra Electric', href: 'https://montraelectric.com' },
  { label: 'Co-Founder',   org: 'Digvian',         href: 'https://digvian.com' },
  { label: 'Founder',      org: 'BeeBot AI',       href: 'https://beebot-ai.vercel.app' },
  { label: 'Freelance',    org: 'Available',       href: '#contact' },
];

const EXPERIENCE = [
  {
    role: 'AI Engineer',
    company: 'Montra Electric',
    companyUrl: 'https://montraelectric.com',
    period: 'Present',
    location: 'Chennai, India',
    kicker: 'Internship · Murugappa Group · Electric commercial vehicles',
    description:
      'Building AI-powered applications and automations at one of India’s leading electric commercial vehicle manufacturers — taking manual internal workflows and turning them into systems that run themselves.',
    highlights: [
      'Developing production AI applications grounded on internal business data and processes',
      'Designing automations that strip repetitive manual steps out of day-to-day operations',
      'Working end to end — data plumbing, model orchestration, and the interfaces people actually use',
    ],
    tech: ['Python', 'LLM Orchestration', 'RAG', 'Automation'],
  },
  {
    role: 'Co-Founder',
    company: 'Digvian',
    companyUrl: 'https://digvian.com',
    period: 'Present',
    location: 'Chennai, India',
    kicker: 'AI-first digital studio',
    description:
      'Co-founded Digvian, a studio that covers the whole build instead of a slice of it — websites and SaaS products, AI integrations and chatbots, branding and UI/UX, and the digital marketing that puts the work in front of people. One team where clients would otherwise hire four.',
    highlights: [
      'Web and SaaS development — performance-first, SEO-focused builds on React, Next.js, and TypeScript',
      'AI solutions — custom integrations, chatbots, and workflow automation wired into client systems',
      'Growth and brand — SEO, paid media, and UI/UX design delivered inside the same engagement',
    ],
    tech: ['Next.js', 'TypeScript', 'AI Integrations', 'Digital Marketing'],
  },
  {
    role: 'Founder and Lead Developer',
    company: 'BeeBot AI',
    companyUrl: 'https://beebot-ai.vercel.app',
    linkedIn: 'https://linkedin.com/company/beebotai/',
    period: 'Jan 2026 — Present',
    location: 'Chennai, India',
    description:
      'Founded and architected BeeBot AI, a plug-and-play AI customer service platform for businesses. Built the full product stack: RAG pipeline, MERN backend, Python AI microservice, and a multi-tenant admin dashboard.',
    highlights: [
      'Designed a RAG architecture that grounds LLM responses on business-specific FAQs and policies, eliminating hallucinations entirely',
      'Built a multi-tenant system supporting independent deployments per business with isolated data contexts',
      'Led the product from zero — concept, design, development, and production deployment',
    ],
    tech: ['MERN', 'Python', 'RAG', 'Vector DB'],
  },
];

const FEATURED = [
  {
    title: 'BeeBot AI', year: '2026',
    desc: 'A plug-and-play AI customer service agent for businesses. Trained on business-specific data via RAG for guided selling and round-the-clock automated support that actually knows what it is talking about.',
    tech: ['MERN', 'Python', 'RAG', 'Vector DB'],
    img: beebotImg,
    live: 'https://beebot-ai.vercel.app',
    github: 'https://github.com/BeeBot-AI/',
    linkedIn: 'https://linkedin.com/company/beebotai/',
  },
  {
    title: 'Resume Labs', year: '2025',
    desc: 'An AI-powered resume builder with real-time preview under 100ms latency. A CDN-optimised image pipeline slashed load times from 2.1 seconds down to 0.3 seconds.',
    tech: ['React', 'Node.js', 'MongoDB', 'ImageKit'],
    img: resumeImg,
    live: 'https://resume-labs.vercel.app',
    github: 'https://github.com/Dhayanithi-545/resume-builder',
  },
  {
    title: 'Gifty AI', year: '2026',
    desc: 'An AI gift-recommendation agent. Feed it contact profiles as JSON and it extracts personal signals, searches live product listings, then returns ranked gift picks — each with its reasoning, a confidence score, a risk flag, and a personalised message you can edit before sending.',
    tech: ['React', 'FastAPI', 'Groq', 'Serper'],
    img: giftyImg,
    live: 'https://gifty-dhaya.vercel.app',
  },
  {
    title: 'Times of World', year: '2025',
    desc: 'An AI news aggregator that processes over 500 articles daily with personalised recommendations, cutting content discovery time by 70% for readers who want to stay informed without the scroll fatigue.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Inngest'],
    img: timesImg,
    live: 'https://timesofworld.vercel.app',
    github: 'https://github.com/Dhayanithi-545/Times-of-World',
  },
];

// Freelance and commissioned builds — shipped for real clients, live in production.
const CLIENT = [
  {
    client: 'Urban Transport Research Centre',
    title: 'Research portal and public data repository',
    sector: 'Government-sponsored research centre',
    year: '2026',
    // Client is under NDA — no name, no links, and the preview is blurred.
    confidential: true,
    desc: 'The public web portal for a government-sponsored urban transport research centre. Publishes the centre’s research programmes, laboratory and traffic-monitoring facilities, faculty and research team profiles, and a download library of datasets, software, and newsletters for external researchers.',
    tech: ['React', 'Vite', 'Vercel'],
    img: portalImg,
  },
  {
    client: 'Arushi Sewa Sansthan',
    title: 'Donation and volunteering platform',
    sector: 'Non-profit · Delhi',
    year: '2026',
    desc: 'A full platform for a Delhi NGO running community kitchens, doorstep meals for elderly citizens, and coaching for underprivileged students. Live donation campaigns with progress tracking, volunteer sign-up, an impact dashboard, programme pages, team profiles, and a blog.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    img: arushiImg,
    live: 'https://arushi-ngo-frontend.vercel.app',
  },
  {
    client: 'Sri Bakes',
    title: 'Custom cake studio storefront',
    sector: 'Home bakery · Chennai',
    year: '2026',
    desc: 'A storefront for a Chennai home bakery. Category-wise cake galleries, a custom-quote form that captures event, flavour, weight and delivery details up front, and direct WhatsApp handoff for the conversations that actually close the order.',
    tech: ['React', 'Tailwind CSS', 'WhatsApp'],
    img: bakesImg,
    live: 'https://sribakeschennai.com',
  },
];

const OTHER = [
  {
    title: 'Retail Sales Prediction Pipeline', year: '2026',
    desc: 'An MLOps framework for retail sales forecasting with Airflow-orchestrated ETL, MLflow experiment tracking, and live model performance monitoring.',
    tech: ['Python', 'Apache Airflow', 'MLflow', 'Scikit-learn'],
    github: 'https://github.com/Dhayanithi-545/RetailSalesPrediction',
  },
  {
    title: 'Pepper', year: '2025',
    desc: 'A lightweight local AI agent that bridges LLM reasoning with Python tool execution in under 500ms, built for rapid automation prototyping.',
    tech: ['Python', 'PyTorch', 'Transformers'],
    github: 'https://github.com/Dhayanithi-545/Pepper',
  },
];

const SKILLS = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'] },
  { label: 'Frontend',  items: ['React.js', 'Next.js', 'Tailwind CSS', 'ShadCN UI', 'HTML/CSS'] },
  { label: 'Backend',   items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs'] },
  { label: 'AI and ML', items: ['PyTorch', 'Transformers', 'RAG', 'LLM Agents', 'Scikit-learn', 'Hugging Face', 'Vector DB'] },
  { label: 'MLOps',     items: ['MLflow', 'Apache Airflow', 'Pipeline Automation', 'Model Monitoring'] },
  { label: 'Data',      items: ['MongoDB', 'MySQL', 'Supabase', 'SQLite', 'Pandas'] },
  { label: 'Tools',     items: ['Git', 'JWT', 'OAuth2', 'Vercel', 'Netlify', 'Figma', 'n8n', 'Linux'] },
];

const SOCIALS = [
  { label: 'GitHub',   tooltip: 'Repositories', Icon: LucideGithub,   href: 'https://github.com/Dhayanithi-545',                                       isMailto: false },
  { label: 'LinkedIn', tooltip: 'Profile',       Icon: LucideLinkedin, href: 'https://www.linkedin.com/in/dhayanithi-anandan-69199a322/',               isMailto: false },
  { label: 'Email',    tooltip: 'Send a mail',   Icon: Mail,           href: 'mailto:dhayanithianandan@gmail.com',                                       isMailto: true  },
];

const HACKATHONS = [
  {
    event: 'NXTGEN Hackathon, SRM University', project: 'ResQMap',
    desc: 'A React Native emergency response app with AI travel guidance, selectable emergency spots, and one-tap SOS calling.',
  },
  {
    event: 'PromptRepo Hackathon', project: 'Camlet',
    desc: 'A student budget tracker built as Team Lead in an inter-university competition.',
  },
  {
    event: 'Smart India Hackathon (SIH)', project: 'Buddy',
    desc: 'An AI platform that generates personalised courses, quizzes, and flashcards for students.',
  },
];

// ── Global styles injected once ───────────────────────────────────────────────
const GLOBAL_CSS = `
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

  .proj-img-wrap:hover .proj-img { transform: scale(1.03); }
  .proj-img {
    transition: transform 600ms ease;
    width: 100%; height: 100%;
    object-fit: cover; object-position: top;
    display: block;
  }

  .about-row {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  }
  @media (min-width: 640px) {
    .about-row { flex-direction: row; }
  }

  .skills-row {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  /* ── "Now" wire strip ──────────────────────────────────────────────── */
  .now-wire {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0 4px;
  }
  .now-item {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    padding: 3px 8px;
    text-decoration: none;
    border-radius: 2px;
    transition: background-color 180ms ease, color 180ms ease;
  }

  /* ── Client work: image beside copy, stacking on small screens ─────── */
  .client-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
    align-items: start;
  }
  @media (min-width: 620px) {
    .client-row { grid-template-columns: minmax(0, 0.82fr) minmax(0, 1fr); gap: 24px; }
  }

  @media (max-width: 640px) {
    .port-main { padding: 48px 20px 108px !important; }
    .contact-grid { grid-template-columns: 1fr !important; }
    .now-wire { gap: 0 2px; }
  }

  /* ── Long headings must never overflow their column ────────────────── */
  h1, h2, h3 { overflow-wrap: break-word; min-width: 0; }

  /* ── Experience / client meta: right-aligned on desktop, left when it
        wraps under the role on narrow screens ─────────────────────────── */
  .exp-meta { text-align: right; }
  @media (max-width: 560px) {
    .exp-meta { text-align: left; width: 100%; }
    /* Drop the pillar and wire separators once those rows wrap — orphaned
       bars and dots read as debris rather than as a masthead rule. */
    .pillar-sep, .now-sep { display: none; }
  }

  /* ── Visible focus ring — never animated, always present ──────────── */
  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
    border-radius: 2px;
  }

  /* ── Honour reduced-motion ────────────────────────────────────────── */
  @media (prefers-reduced-motion: reduce) {
    .proj-img, .now-item, .client-img { transition-duration: 1ms !important; }
    .proj-img-wrap:hover .proj-img { transform: none; }
  }

  /* drop-cap in light mode */
  .drop-cap-text::first-letter {
    float: left;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 3.8em;
    font-weight: 900;
    line-height: 0.75;
    padding-right: 7px;
    padding-top: 5px;
    color: #0c0a09;
  }

  /* Mouse focus on fields stays quiet; keyboard focus keeps the ring above. */
  input:focus:not(:focus-visible),
  textarea:focus:not(:focus-visible) {
    outline: none;
  }
`;

// ── Tag ───────────────────────────────────────────────────────────────────────
const Tag = ({ dark, children }) => (
  <span style={{
    fontFamily: dark ? "'JetBrains Mono', 'Courier New', monospace" : "'Lora', Georgia, serif",
    fontSize: '11px',
    fontWeight: dark ? 500 : 600,
    letterSpacing: '0.04em',
    padding: '3px 10px',
    borderRadius: '3px',
    border: dark ? '1px solid rgba(52,211,153,0.22)' : '1px solid #9ca3af',
    background: dark ? 'rgba(6,78,59,0.16)' : 'rgba(255,255,255,0.72)',
    color: dark ? '#6ee7b7' : '#1c1917',
    display: 'inline-block',
  }}>
    {children}
  </span>
);

// ── Rule ──────────────────────────────────────────────────────────────────────
const Rule = ({ dark }) => (
  <div style={{ margin: '52px 0' }}>
    {dark
      ? <div style={{ borderTop: '1px solid #27272a' }} />
      : <>
          <div style={{ borderTop: '3px solid #1c1917', marginBottom: '2px' }} />
          <div style={{ borderTop: '1px solid #44403c' }} />
        </>
    }
  </div>
);

// ── Section Label ─────────────────────────────────────────────────────────────
const SectionLabel = ({ dark, children }) => (
  <div style={{ marginBottom: '36px' }}>
    {dark ? (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#4ade80', fontSize: '13px' }}>{'>'}</span>
        <h2 style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
          color: '#a1a1aa', margin: 0, fontWeight: 500,
        }}>{children}</h2>
        <div style={{ flex: 1, borderTop: '1px solid #27272a' }} />
      </div>
    ) : (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ flex: 1, borderTop: '2px solid #44403c' }} />
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '10px', letterSpacing: '0.38em', textTransform: 'uppercase',
          color: '#1c1917', margin: 0, fontWeight: 900,
        }}>{children}</h2>
        <div style={{ flex: 1, borderTop: '2px solid #44403c' }} />
      </div>
    )}
  </div>
);

// ── "Now" wire strip ──────────────────────────────────────────────────────────
// The masthead's live ticker: every role currently running, each one linked.
const NowWire = ({ dark }) => {
  const disp = "'Playfair Display', Georgia, serif";
  const ser  = "'Lora', Georgia, serif";
  const mono = "'JetBrains Mono', 'Courier New', monospace";

  const hoverBg = dark ? 'rgba(6,78,59,0.22)' : 'rgba(28,25,23,0.06)';

  return (
    <div style={{
      marginTop: dark ? '22px' : '14px',
      paddingTop: '10px',
      borderTop: dark ? '1px solid #27272a' : '1px solid #d6d3d1',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: dark ? 'flex-start' : 'center',
        gap: '8px', marginBottom: '6px',
      }}>
        <span style={{
          display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%',
          background: dark ? '#4ade80' : '#1c1917', flexShrink: 0,
        }} />
        <span style={{
          fontFamily: dark ? mono : disp,
          fontSize: '8px', fontWeight: 700,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          color: dark ? '#4ade80' : '#57534e',
        }}>
          {dark ? 'currently' : 'Currently'}
        </span>
      </div>

      <div className="now-wire" style={{ justifyContent: dark ? 'flex-start' : 'center' }}>
        {NOW.map(({ label, org, href }, i) => {
          const external = href.startsWith('http');
          return (
            <React.Fragment key={org}>
              <a
                href={href}
                className="now-item"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                style={{ color: dark ? '#a1a1aa' : '#44403c' }}
                onMouseEnter={e => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.color = dark ? '#4ade80' : '#0c0a09'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = dark ? '#a1a1aa' : '#44403c'; }}
              >
                <span style={{
                  fontFamily: dark ? mono : disp,
                  fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: dark ? '#52525b' : '#78716c',
                }}>{label}</span>
                <span style={{
                  fontFamily: dark ? mono : ser,
                  fontSize: '13px', fontWeight: dark ? 500 : 600,
                }}>{org}</span>
              </a>
              {i < NOW.length - 1 && (
                <span className="now-sep" aria-hidden="true" style={{ color: dark ? '#3f3f46' : '#d6d3d1', fontSize: '11px' }}>
                  {dark ? '/' : '·'}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// ── Floating Dock ─────────────────────────────────────────────────────────────
const FloatingDock = ({ dark, onToggle, visible }) => {
  const iconBg   = dark ? 'rgba(39,39,42,0.82)'  : 'rgba(231,229,228,0.82)';
  const iconHover= dark ? 'rgba(63,63,70,0.9)'   : 'rgba(209,207,205,0.9)';
  const iconClr  = dark ? '#a1a1aa' : '#57534e';
  const iconClrH = dark ? '#4ade80' : '#0c0a09';
  const divClr   = dark ? 'rgba(63,63,70,0.6)' : 'rgba(120,113,108,0.3)';

  const itemStyle = (hovered) => ({
    position: 'relative',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: '44px', height: '44px', borderRadius: '12px',
    background: hovered ? iconHover : iconBg,
    color: hovered ? iconClrH : iconClr,
    border: 'none', cursor: 'pointer', textDecoration: 'none',
    backdropFilter: 'blur(10px)',
    transition: 'background 180ms ease, color 180ms ease, transform 180ms ease, width 160ms cubic-bezier(.25,1,.5,1), height 160ms cubic-bezier(.25,1,.5,1)',
    flexShrink: 0,
  });

  return (
    <div style={{
      position: 'fixed', bottom: '20px', left: '50%',
      transform: `translateX(-50%) translateY(${visible ? '0' : 'calc(100% + 28px)'})`,
      transition: 'transform 300ms cubic-bezier(.4,0,.2,1)',
      zIndex: 50,
      display: 'flex', alignItems: 'center', gap: '6px',
      padding: '8px 12px',
      borderRadius: '18px',
      background: dark ? 'rgba(15,15,15,0.72)' : 'rgba(253,248,240,0.82)',
      backdropFilter: 'blur(14px)',
      boxShadow: dark
        ? 'rgba(255,255,255,0.06) 0 0 0 1px inset, 0 8px 32px rgba(0,0,0,0.5)'
        : 'rgba(0,0,0,0.10) 0 0 0 1px inset, 0 8px 32px rgba(0,0,0,0.12)',
    }}>
      {SOCIALS.map(({ label, tooltip, Icon, href, isMailto }) => (
        <DockItem key={label} tooltip={tooltip} itemStyle={itemStyle}>
          <a href={href} target={isMailto ? undefined : '_blank'}
            rel={isMailto ? undefined : 'noopener noreferrer'}
            aria-label={label}
            style={{ ...itemStyle(false), textDecoration: 'none' }}
            onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: iconHover, color: iconClrH, transform: 'translateY(-6px) scale(1.12)' }) }}
            onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: iconBg,    color: iconClr,  transform: 'translateY(0) scale(1)' }) }}
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
          <span style={{
            position: 'absolute', bottom: 'calc(100% + 10px)', left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            background: 'rgba(15,15,15,0.85)', color: '#fff',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '10px',
            fontWeight: 500, letterSpacing: '0.04em',
            padding: '4px 9px', borderRadius: '6px', whiteSpace: 'nowrap',
            backdropFilter: 'blur(6px)',
            opacity: 0, transition: 'opacity 120ms ease',
          }}
          className="dock-tt">{tooltip}</span>
        </DockItem>
      ))}

      <div style={{ width: '1px', height: '26px', background: divClr, margin: '0 2px', flexShrink: 0 }} />

      <DockItem tooltip={dark ? 'Light mode' : 'Dark mode'} itemStyle={itemStyle}>
        <button onClick={onToggle}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          style={{ ...itemStyle(false) }}
          onMouseEnter={e => { Object.assign(e.currentTarget.style, { background: iconHover, color: iconClrH, transform: 'translateY(-6px) scale(1.12)' }) }}
          onMouseLeave={e => { Object.assign(e.currentTarget.style, { background: iconBg,    color: iconClr,  transform: 'translateY(0) scale(1)' }) }}
        >
          {dark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
        </button>
        <span style={{
          position: 'absolute', bottom: 'calc(100% + 10px)', left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          background: 'rgba(15,15,15,0.85)', color: '#fff',
          fontFamily: "'JetBrains Mono', monospace", fontSize: '10px',
          fontWeight: 500, letterSpacing: '0.04em',
          padding: '4px 9px', borderRadius: '6px', whiteSpace: 'nowrap',
          backdropFilter: 'blur(6px)',
          opacity: 0, transition: 'opacity 120ms ease',
        }}
        className="dock-tt">{dark ? 'Light mode' : 'Dark mode'}</span>
      </DockItem>
    </div>
  );
};

// Wrapper to show tooltip on hover
const DockItem = ({ children, tooltip: _t, itemStyle: _s }) => {
  const ref = useRef(null);
  const showTip = () => { const tt = ref.current?.querySelector('.dock-tt'); if (tt) tt.style.opacity = '1'; };
  const hideTip = () => { const tt = ref.current?.querySelector('.dock-tt'); if (tt) tt.style.opacity = '0'; };
  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}
      onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
    </div>
  );
};

// ── Contact Form ──────────────────────────────────────────────────────────────
const ContactForm = ({ dark }) => {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('success'); setForm({ name: '', email: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const mono  = "'JetBrains Mono', monospace";
  const serif = "'Lora', Georgia, serif";
  const disp  = "'Playfair Display', Georgia, serif";

  const inputBase = (field) => ({
    width: '100%',
    padding: '10px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `2px solid ${errors[field] ? '#ef4444' : dark ? '#3f3f46' : '#a8a29e'}`,
    outline: 'none',
    fontFamily: dark ? mono : serif,
    fontSize: '14px',
    color: dark ? '#e4e4e7' : '#1c1917',
    transition: 'border-color 200ms ease',
    boxSizing: 'border-box',
  });

  const labelBase = {
    display: 'block',
    fontFamily: dark ? mono : disp,
    fontSize: '9px',
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '6px',
    color: dark ? '#71717a' : '#57534e',
  };

  const errBase = {
    fontFamily: dark ? mono : serif,
    fontSize: '11px',
    color: '#ef4444',
    marginTop: '4px',
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <label style={labelBase}>Your Name</label>
          <input type="text" placeholder="e.g. Tony Stark"
            value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            style={inputBase('name')} />
          {errors.name && <p style={errBase}>{errors.name}</p>}
        </div>
        <div>
          <label style={labelBase}>Email Address</label>
          <input type="email" placeholder="you@example.com"
            value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            style={inputBase('email')} />
          {errors.email && <p style={errBase}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label style={labelBase}>Subject</label>
        <input type="text" placeholder="What is this about?"
          value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
          style={inputBase('subject')} />
        {errors.subject && <p style={errBase}>{errors.subject}</p>}
      </div>

      <div>
        <label style={labelBase}>Message</label>
        <textarea rows={5}
          placeholder="Tell me what you have in mind — a project, a collab, or just a hello."
          value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          style={{ ...inputBase('message'), resize: 'none', lineHeight: 1.7 }} />
        {errors.message && <p style={errBase}>{errors.message}</p>}
      </div>

      {status === 'success' && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 16px', borderRadius: '4px',
          background: dark ? 'rgba(6,78,59,0.28)' : '#f0fdf4',
          border: dark ? '1px solid #14532d' : '1px solid #bbf7d0',
          color: dark ? '#4ade80' : '#15803d',
          fontFamily: dark ? mono : serif, fontSize: '13px',
        }}>
          <CheckCircle size={16} style={{ flexShrink: 0 }} />
          Message sent! I will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '12px 16px', borderRadius: '4px',
          background: dark ? 'rgba(127,29,29,0.2)' : '#fef2f2',
          border: dark ? '1px solid #7f1d1d' : '1px solid #fecaca',
          color: dark ? '#f87171' : '#dc2626',
          fontFamily: dark ? mono : serif, fontSize: '13px',
        }}>
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          Something went wrong. Try emailing me directly at dhayanithianandan@gmail.com
        </div>
      )}

      <div>
        <button type="submit" disabled={status === 'loading'}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 28px',
            background: dark ? '#4ade80' : '#1c1917',
            color: dark ? '#052e16' : '#fdf8f0',
            border: 'none', borderRadius: '2px',
            fontFamily: dark ? mono : disp,
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            opacity: status === 'loading' ? 0.6 : 1,
            transition: 'background 200ms ease, opacity 200ms ease',
          }}>
          {status === 'loading'
            ? <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending</>
            : <><Send size={15} /> Send Message</>
          }
        </button>
      </div>
    </form>
  );
};

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  // Read from localStorage synchronously — prevents flash on load
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark'; } catch { return false; }
  });

  // Apply class once on mount with NO transition
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleDark = () => {
    // Only add transition class during deliberate toggle
    document.documentElement.classList.add('theme-transitioning');
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 420);
  };

  // ── Scroll-hide dock ────────────────────────────────────────────────────
  const [dockVisible, setDockVisible] = useState(true);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      if (cur < 10) { setDockVisible(true); }          // always show near top
      else if (cur > last + 6) { setDockVisible(false); } // scrolling down
      else if (last > cur + 4) { setDockVisible(true); }  // scrolling up
      last = cur;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Font references ─────────────────────────────────────────────────────
  const disp = "'Playfair Display', Georgia, serif";
  const ser  = "'Lora', Georgia, serif";
  const mono = "'JetBrains Mono', 'Courier New', monospace";

  // ── Text colour tokens ──────────────────────────────────────────────────
  const c = {
    heading:  dark ? '#f4f4f5'  : '#0c0a09',
    heading2: dark ? '#e4e4e7'  : '#1c1917',
    body:     dark ? '#d4d4d8'  : '#292524',
    body2:    dark ? '#a1a1aa'  : '#44403c',
    muted:    dark ? '#71717a'  : '#78716c',
    accent:   dark ? '#4ade80'  : '#1c1917',
    link:     dark ? '#4ade80'  : '#1c1917',
  };

  const borderL      = { borderLeft: dark ? '1px solid #27272a' : '3px solid #1c1917', paddingLeft: '20px' };
  const borderLMuted = { borderLeft: dark ? '1px solid #18181b' : '2px solid #a8a29e', paddingLeft: '20px' };

  return (
    <>
      {/* Inject global styles once */}
      <style>{GLOBAL_CSS}</style>

      <div style={{ minHeight: '100vh', color: c.body, position: 'relative' }}>

        {/* ── Layered backgrounds ──────────────────────────────────────── */}
        {/* Light: newsprint texture */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: -1,
          backgroundImage: `url(${newsBg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: dark ? 0 : 1, transition: 'opacity 350ms ease',
          pointerEvents: 'none',
        }} />
        {/* Light: warm amber wash */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'rgba(253,248,240,0.84)',
          opacity: dark ? 0 : 1, transition: 'opacity 350ms ease',
          pointerEvents: 'none',
        }} />
        {/* Dark: solid base */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: -1,
          background: '#09090b',
          opacity: dark ? 1 : 0, transition: 'opacity 350ms ease',
          pointerEvents: 'none',
        }} />
        {/* Dark: binary texture */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: -1,
          backgroundImage: `url(${binaryBg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: dark ? 1 : 0, transition: 'opacity 350ms ease',
          pointerEvents: 'none',
        }} />
        {/* Dark: scrim for readability */}
        <div style={{
          position: 'fixed', inset: 0, zIndex: -1,
          background: 'rgba(9,9,11,0.78)',
          opacity: dark ? 1 : 0, transition: 'opacity 350ms ease',
          pointerEvents: 'none',
        }} />

        <FloatingDock dark={dark} onToggle={toggleDark} visible={dockVisible} />

        <main className="port-main" style={{
          position: 'relative', zIndex: 10,
          maxWidth: '740px', margin: '0 auto',
          padding: '64px 40px 112px',
        }}>

          {/* ══ MASTHEAD ═══════════════════════════════════════════════ */}
          {!dark ? (
            <header style={{ marginBottom: '56px', textAlign: 'center' }}>
              {/* Top dateline */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily: disp, fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: '#78716c', marginBottom: '12px',
              }}>
                <span>Chennai, India</span>
                <span style={{ color: '#a8a29e', fontWeight: 400 }}>Est. 2024</span>
                <span>{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>

              {/* Name block */}
              <div style={{ borderTop: '4px solid #1c1917', borderBottom: '1px solid #44403c', padding: '20px 0 16px' }}>
                <p style={{ fontFamily: ser, fontStyle: 'italic', fontSize: '10px', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#78716c', marginBottom: '10px' }}>
                  Portfolio of
                </p>
                <h1 style={{
                  fontFamily: disp,
                  fontSize: 'clamp(2rem, 11vw, 5.2rem)',
                  fontWeight: 900, color: '#0c0a09',
                  lineHeight: 0.9, letterSpacing: '-0.02em',
                  textTransform: 'uppercase', margin: 0,
                }}>
                  Dhayanithi<br />Anandan
                </h1>
              </div>

              {/* Tagline */}
              <div style={{ borderBottom: '2px solid #1c1917', padding: '10px 0 12px' }}>
                <p style={{ fontFamily: ser, fontStyle: 'italic', color: '#44403c', fontSize: '16px', letterSpacing: '0.15em', margin: 0 }}>
                  AI Engineer · Co-Founder · Freelance Developer
                </p>
              </div>

              {/* Pillars */}
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 0, marginTop: '12px' }}>
                {['AI and Automation', 'Full-Stack', 'Machine Learning', 'Open to Freelance'].map((label, i, arr) => (
                  <React.Fragment key={label}>
                    <span style={{ fontFamily: disp, fontWeight: 700, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#78716c', padding: '0 10px' }}>
                      {label}
                    </span>
                    {i < arr.length - 1 && <span className="pillar-sep" aria-hidden="true" style={{ color: '#d6d3d1' }}>|</span>}
                  </React.Fragment>
                ))}
              </div>

              <NowWire dark={false} />
            </header>
          ) : (
            <header style={{ marginBottom: '56px' }}>
              <p style={{ fontFamily: mono, fontSize: '11px', color: '#4ade80', letterSpacing: '0.25em', marginBottom: '20px' }}>
                {'// DHAYANITHI_ANANDAN.portfolio'}
              </p>
              <h1 style={{
                fontFamily: disp,
                fontSize: 'clamp(2.2rem, 7vw, 3.6rem)',
                fontWeight: 900, color: '#f4f4f5',
                lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '12px',
              }}>
                Dhayanithi Anandan
              </h1>
              <p style={{ fontFamily: ser, color: '#a1a1aa', fontSize: '15px', letterSpacing: '0.15em', marginBottom: '20px' }}>
                AI Engineer · Co-Founder · Freelance Developer
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['AI and Automation', 'Full-Stack', 'Machine Learning', 'Open to Freelance'].map(tag => (
                  <span key={tag} style={{
                    fontFamily: mono, fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: '3px',
                    border: '1px solid rgba(52,211,153,0.22)',
                    color: 'rgba(74,222,128,0.65)', background: 'rgba(6,78,59,0.14)',
                  }}>{tag}</span>
                ))}
              </div>

              <NowWire dark={true} />
            </header>
          )}

          {/* ══ ABOUT ══════════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <div className="about-row">
              {/* Photo */}
              <div style={{ flexShrink: 0, margin: '0 auto' }}>
                {dark ? (
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <img src={photo} alt="Dhayanithi Anandan" style={{
                      width: '148px', height: '148px', borderRadius: '50%',
                      objectFit: 'cover', objectPosition: 'top', display: 'block',
                      boxShadow: '0 0 0 2px #14532d, 0 0 36px rgba(74,222,128,0.12)',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: '5px', right: '5px',
                      width: '13px', height: '13px', borderRadius: '50%',
                      background: '#4ade80', boxShadow: '0 0 0 2px #09090b',
                    }} title="Available for projects" />
                  </div>
                ) : (
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{
                      position: 'absolute', top: '6px', left: '6px',
                      width: '100%', height: '100%',
                      background: '#1c1917', borderRadius: '2px', zIndex: 0,
                    }} />
                    <img src={photo} alt="Dhayanithi Anandan" style={{
                      position: 'relative', zIndex: 1,
                      width: '180px', height: '180px', borderRadius: '2px',
                      objectFit: 'cover', objectPosition: 'top', display: 'block',
                      border: '2px solid #1c1917',
                      filter: 'grayscale(100%) contrast(1.08)',
                    }} />
                    <div style={{
                      position: 'absolute', zIndex: 2, bottom: '-10px', right: '-10px',
                      background: '#1c1917', color: '#fdf8f0',
                      fontFamily: disp, fontSize: '8px', fontWeight: 900,
                      letterSpacing: '0.25em', textTransform: 'uppercase',
                      padding: '4px 8px',
                    }}>Available</div>
                  </div>
                )}
              </div>

              {/* Bio */}
              <div style={{ flex: 1 }}>
                <p className={!dark ? 'drop-cap-text' : ''} style={{
                  fontFamily: ser, lineHeight: 1.78, fontSize: '16px',
                  color: dark ? '#d4d4d8' : '#292524', marginBottom: '16px',
                }}>
                  Building AI-powered systems that ship to production and stay there. RAG architectures,
                  MLOps pipelines, agents, and the full-stack web applications around them. Currently an{' '}
                  <a href="https://montraelectric.com" target="_blank" rel="noopener noreferrer"
                    style={{ color: c.link, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    AI Engineer at Montra Electric
                  </a>
                  , building AI applications and automations for India’s leading electric commercial
                  vehicle manufacturer.
                </p>
                <p style={{ fontFamily: ser, lineHeight: 1.75, fontSize: '14px', color: dark ? '#a1a1aa' : '#44403c', marginBottom: '16px' }}>
                  Alongside that: co-founder of{' '}
                  <a href="https://digvian.com" target="_blank" rel="noopener noreferrer"
                    style={{ color: c.link, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                    Digvian
                  </a>
                  , a studio shipping web, AI, and marketing work end to end — plus freelance builds for
                  clients from a government research centre to a Delhi NGO to a neighbourhood bakery.
                  Several things at once is the normal state, and there is room for more.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: c.muted }}>
                  <MapPin size={13} style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: dark ? mono : ser, fontSize: '13px' }}>Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </section>

          {/* <Rule dark={dark} /> */}

          {/* ══ EXPERIENCE ═════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <SectionLabel dark={dark}>Experience</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
              {EXPERIENCE.map((exp) => (
                <div key={exp.company} style={borderL}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ minWidth: 0 }}>
                      <h3 style={{ fontFamily: disp, fontWeight: 700, fontSize: '19px', color: c.heading2, margin: '0 0 4px' }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                          style={{ fontFamily: dark ? mono : ser, fontStyle: dark ? 'normal' : 'italic', fontSize: '14px', color: c.link, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                          {exp.company}
                        </a>
                        {exp.linkedIn && (
                          <a href={exp.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${exp.company} on LinkedIn`}
                            style={{ color: c.muted, transition: 'color 150ms' }}
                            onMouseEnter={e => e.currentTarget.style.color = c.accent}
                            onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                            <LucideLinkedin size={13} />
                          </a>
                        )}
                      </div>
                      {exp.kicker && (
                        <p style={{
                          fontFamily: dark ? mono : ser,
                          fontStyle: dark ? 'normal' : 'italic',
                          fontSize: '11px', color: c.muted, marginTop: '5px',
                        }}>{exp.kicker}</p>
                      )}
                    </div>
                    <div className="exp-meta" style={{ flexShrink: 0 }}>
                      <span style={{ fontFamily: dark ? mono : ser, fontStyle: 'italic', fontSize: '12px', color: c.muted }}>{exp.period}</span>
                      <p style={{ fontFamily: ser, fontStyle: 'italic', fontSize: '11px', color: c.muted, marginTop: '2px' }}>{exp.location}</p>
                    </div>
                  </div>

                  <p style={{ fontFamily: ser, lineHeight: 1.78, fontSize: '15px', color: c.body, marginBottom: '16px' }}>{exp.description}</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {exp.highlights.map((h) => (
                      <li key={h} style={{ display: 'flex', gap: '10px', fontFamily: ser, lineHeight: 1.7, fontSize: '14px', color: c.body }}>
                        <span style={{ flexShrink: 0, marginTop: '2px', color: c.accent, fontWeight: 700 }}>{dark ? '›' : '·'}</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '14px' }}>
                      {exp.tech.map((t) => <Tag key={t} dark={dark}>{t}</Tag>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* <Rule dark={dark} /> */}

          {/* ══ WORK ════════════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <SectionLabel dark={dark}>Selected Work</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
              {FEATURED.map((p) => (
                <div key={p.title}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontFamily: disp, fontWeight: 700, fontSize: '22px', color: c.heading2, margin: '0 0 3px' }}>{p.title}</h3>
                      <span style={{ fontFamily: dark ? mono : ser, fontStyle: 'italic', fontSize: '13px', color: c.muted }}>{p.year}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '4px' }}>
                      {p.linkedIn && (
                        <a href={p.linkedIn} target="_blank" rel="noopener noreferrer" title="LinkedIn"
                          style={{ color: c.muted, transition: 'color 150ms' }}
                          onMouseEnter={e => e.currentTarget.style.color = c.accent}
                          onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                          <LucideLinkedin size={15} />
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" title="Repository"
                          style={{ color: c.muted, transition: 'color 150ms' }}
                          onMouseEnter={e => e.currentTarget.style.color = c.accent}
                          onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                          <LucideGithub size={15} />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" title="Live site"
                          style={{ color: c.muted, transition: 'color 150ms' }}
                          onMouseEnter={e => e.currentTarget.style.color = c.accent}
                          onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project image — 16:7 wide */}
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="proj-img-wrap"
                    style={{ display: 'block', marginBottom: '16px', textDecoration: 'none' }}>
                    <div style={{
                      overflow: 'hidden', aspectRatio: '16/7',
                      border: dark ? '1px solid #27272a' : '2px solid #1c1917',
                      borderRadius: dark ? '8px' : '2px',
                      boxShadow: dark ? '0 8px 32px rgba(0,0,0,0.5)' : '5px 5px 0px 0px rgba(28,25,23,0.85)',
                    }}>
                      <img src={p.img} alt={`${p.title} preview`} className="proj-img" />
                    </div>
                    {!dark && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '7px', color: '#78716c', fontSize: '11px', fontFamily: ser, fontStyle: 'italic' }}>
                        <ExternalLink size={11} />
                        <span>Click to visit the live site</span>
                      </div>
                    )}
                  </a>

                  <p style={{ fontFamily: ser, lineHeight: 1.78, fontSize: '15px', color: c.body, marginBottom: '14px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.tech.map((t) => <Tag key={t} dark={dark}>{t}</Tag>)}
                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* ══ CLIENT WORK ═════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <SectionLabel dark={dark}>Client and Freelance Work</SectionLabel>

            <p style={{
              fontFamily: ser, lineHeight: 1.75, fontSize: '14px',
              color: dark ? '#a1a1aa' : '#44403c', marginBottom: '36px',
            }}>
              Commissioned builds, live in production and in daily use — a government research
              centre, a Delhi non-profit, and a neighbourhood bakery. Different worlds, same brief:
              make it fast, make it clear, make it work on a phone. Some clients are under NDA, so a
              few previews here are blurred and unlinked.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
              {CLIENT.map((p) => (
                <div key={p.client} className="client-row">
                  {/* Screenshot — a plain frame when the client is under NDA,
                      a link to the live site otherwise. */}
                  {(() => {
                    const frame = (
                      <div style={{
                        overflow: 'hidden', aspectRatio: '16/10',
                        border: dark ? '1px solid #27272a' : '2px solid #1c1917',
                        borderRadius: dark ? '6px' : '2px',
                        boxShadow: dark ? '0 6px 24px rgba(0,0,0,0.45)' : '4px 4px 0px 0px rgba(28,25,23,0.85)',
                      }}>
                        <img
                          src={p.img}
                          alt={p.confidential
                            ? 'Blurred preview — client under NDA'
                            : `${p.client} website`}
                          className="proj-img"
                        />
                      </div>
                    );

                    return p.confidential ? (
                      <div>
                        {frame}
                        <p style={{
                          display: 'flex', alignItems: 'center', gap: '5px', marginTop: '7px',
                          fontFamily: dark ? mono : ser,
                          fontStyle: dark ? 'normal' : 'italic',
                          fontSize: '10px', letterSpacing: '0.04em',
                          color: c.muted,
                        }}>
                          <Lock size={10} style={{ flexShrink: 0 }} />
                          Preview blurred · client under NDA
                        </p>
                      </div>
                    ) : (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="proj-img-wrap"
                        aria-label={`${p.client} — open the live site`}
                        style={{ display: 'block', textDecoration: 'none' }}>
                        {frame}
                      </a>
                    );
                  })()}

                  {/* Copy */}
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontFamily: disp, fontWeight: 900, fontSize: '18px', color: c.heading2, margin: '0 0 3px' }}>
                          {p.client}
                        </h3>
                        <p style={{
                          fontFamily: dark ? mono : ser, fontStyle: dark ? 'normal' : 'italic',
                          fontSize: '11px', letterSpacing: '0.04em', color: c.muted,
                        }}>{p.sector}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0, marginTop: '3px' }}>
                        {p.confidential ? (
                          <Lock size={13} style={{ color: c.muted }} aria-label="Client under NDA" />
                        ) : (
                          <>
                            {p.github && (
                              <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.client} repository`}
                                style={{ color: c.muted, transition: 'color 150ms' }}
                                onMouseEnter={e => e.currentTarget.style.color = c.accent}
                                onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                                <LucideGithub size={14} />
                              </a>
                            )}
                            <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.client} live site`}
                              style={{ color: c.muted, transition: 'color 150ms' }}
                              onMouseEnter={e => e.currentTarget.style.color = c.accent}
                              onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                              <ArrowUpRight size={15} />
                            </a>
                          </>
                        )}
                      </div>
                    </div>

                    <p style={{
                      fontFamily: disp, fontWeight: 700, fontSize: '14px',
                      color: c.body2, marginBottom: '9px', lineHeight: 1.4,
                    }}>{p.title}</p>

                    <p style={{ fontFamily: ser, lineHeight: 1.72, fontSize: '14px', color: c.body, marginBottom: '12px' }}>{p.desc}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                      {p.tech.map((t) => <Tag key={t} dark={dark}>{t}</Tag>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ══ ALSO NOTABLE ════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <SectionLabel dark={dark}>Also Notable</SectionLabel>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {OTHER.map((p) => (
                <div key={p.title}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ fontFamily: disp, fontWeight: 700, fontSize: '17px', color: c.heading2, margin: 0 }}>{p.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '16px', flexShrink: 0 }}>
                      <span style={{ fontFamily: dark ? mono : ser, fontStyle: 'italic', fontSize: '12px', color: c.muted }}>{p.year}</span>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} repository`}
                          style={{ color: c.muted, transition: 'color 150ms' }}
                          onMouseEnter={e => e.currentTarget.style.color = c.accent}
                          onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                          <LucideGithub size={14} />
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`}
                          style={{ color: c.muted, transition: 'color 150ms' }}
                          onMouseEnter={e => e.currentTarget.style.color = c.accent}
                          onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p style={{ fontFamily: ser, lineHeight: 1.75, fontSize: '14px', color: dark ? '#a1a1aa' : '#44403c', marginBottom: '10px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {p.tech.map((t) => <Tag key={t} dark={dark}>{t}</Tag>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <Rule dark={dark} /> */}

          {/* ══ SKILLS ══════════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <SectionLabel dark={dark}>Skills</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {SKILLS.map(({ label, items }) => (
                <div key={label} className="skills-row">
                  <span style={{
                    fontFamily: dark ? mono : disp, fontSize: '10px', letterSpacing: '0.2em',
                    textTransform: 'uppercase', fontWeight: 700, flexShrink: 0,
                    width: '100px', paddingTop: '2px',
                    color: dark ? '#71717a' : '#57534e',
                    fontStyle: dark ? 'normal' : 'italic',
                  }}>{label}</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', flex: 1 }}>
                    {items.map((item) => <Tag key={item} dark={dark}>{item}</Tag>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <Rule dark={dark} /> */}

          {/* ══ EDUCATION ═══════════════════════════════════════════════ */}
          <section style={{ marginBottom: '56px' }}>
            <SectionLabel dark={dark}>Education and Competitions</SectionLabel>

            <div style={{ ...borderL, marginBottom: '36px' }}>
              <h3 style={{ fontFamily: disp, fontWeight: 700, fontSize: '17px', color: c.heading2, margin: '0 0 4px' }}>
                Software Product Engineering
              </h3>
              <p style={{ fontFamily: ser, lineHeight: 1.7, fontSize: '14px', fontWeight: 600, color: dark ? '#d4d4d8' : '#292524', marginBottom: '2px' }}>
                Vels Institute of Science, Technology and Advanced Studies
              </p>
              <p style={{ fontFamily: dark ? mono : ser, fontStyle: 'italic', fontSize: '13px', color: c.muted }}>
                B.Tech · Chennai · 2024 to 2028
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {HACKATHONS.map((h) => (
                <div key={h.event} style={borderLMuted}>
                  <p style={{ fontFamily: dark ? mono : disp, fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px', color: dark ? '#52525b' : '#78716c' }}>
                    {h.event}
                  </p>
                  <p style={{ fontFamily: disp, fontWeight: 700, fontSize: '16px', color: c.heading2, margin: '0 0 4px' }}>{h.project}</p>
                  <p style={{ fontFamily: ser, lineHeight: 1.72, fontSize: '13px', color: dark ? '#a1a1aa' : '#44403c' }}>{h.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* <Rule dark={dark} /> */}

          {/* ══ CONTACT ═════════════════════════════════════════════════ */}
          <section id="contact" style={{ marginBottom: '80px', scrollMarginTop: '32px' }}>
            <SectionLabel dark={dark}>Get in Touch</SectionLabel>

            <div style={{ marginBottom: '36px' }}>
              <p style={{ fontFamily: disp, fontWeight: 700, fontSize: '18px', color: c.heading2, marginBottom: '10px' }}>
                Taking on freelance projects, collaborations, and anything interesting.
              </p>
              <p style={{ fontFamily: ser, lineHeight: 1.75, fontSize: '15px', color: dark ? '#a1a1aa' : '#44403c' }}>
                Websites, AI applications, automations, or the whole build end to end — solo, or through{' '}
                <a href="https://digvian.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: c.link, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                  Digvian
                </a>
                {' '}when a project needs a full team. Running several things at once is already the norm here,
                so there is room for one more. Tell me what you have in mind.
              </p>
            </div>

            <div style={{
              padding: '32px', marginBottom: '32px',
              borderRadius: dark ? '8px' : '2px',
              background: dark ? 'rgba(24,24,27,0.6)' : 'rgba(255,255,255,0.55)',
              border: dark ? '1px solid #27272a' : '2px solid #d6d3d1',
              boxShadow: dark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 2px 16px rgba(28,25,23,0.05)',
            }}>
              <ContactForm dark={dark} />
            </div>

          <Rule dark={dark} />


            <p style={{ fontFamily: ser, lineHeight: 1.7, fontSize: '14px', color: dark ? '#a1a1aa' : '#44403c' }}>
              Prefer email directly?{' '}
              <a href="mailto:dhayanithianandan@gmail.com"
                style={{ fontFamily: dark ? mono : ser, fontWeight: 700, color: c.link, textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                dhayanithianandan@gmail.com
              </a>
            </p>
            

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '24px' }}>
              {SOCIALS.map(({ label, Icon, href, isMailto }) => (
                <a key={label} href={href}
                  target={isMailto ? undefined : '_blank'}
                  rel={isMailto ? undefined : 'noopener noreferrer'}
                  style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: dark ? mono : ser, fontSize: '13px', fontWeight: 500, color: c.muted, textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseEnter={e => e.currentTarget.style.color = c.accent}
                  onMouseLeave={e => e.currentTarget.style.color = c.muted}>
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </section>
          

          {/* ══ FOOTER ══════════════════════════════════════════════════ */}
          <p style={{
            fontFamily: dark ? mono : ser,
            fontSize: '12px', textAlign: dark ? 'left' : 'center',
            color: dark ? '#3f3f46' : '#a8a29e',
            fontStyle: dark ? 'normal' : 'italic',
            letterSpacing: dark ? '0.05em' : '0.15em',
          }}>
            {dark ? '// © 2026 Dhayanithi Anandan — Chennai' : '— Chennai, 2026 —'}
          </p>
        </main>
      </div>
    </>
  );
}