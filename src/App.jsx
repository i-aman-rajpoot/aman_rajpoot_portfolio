import { Fragment, useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, BarChart3, BrainCircuit, Coffee,
  BriefcaseBusiness, Check, Code2, Database, Download, Github, Instagram,
  Layers3, Linkedin, Mail, Menu, Send, Sparkles, Terminal, Workflow, X, Youtube
} from 'lucide-react'

const PROFILE = {
  email: 'amanrajpoot101@gmail.com',
  resumePath: '/resume.pdf', // Add your resume PDF to the public/ folder and name it resume.pdf.
  links: {
    linkedin: 'https://www.linkedin.com/in/i-aman-rajpoot/',
    github: 'https://github.com/i-aman-rajpoot',
    instagram: 'https://www.instagram.com/i.aman.rajpoot',
    youtube: 'https://www.youtube.com/@i.aman.rajpoot',
    whatsapp: 'https://wa.me/919873341139',
  },
}

const PROJECTS = [
  {
    number: '01',
    type: 'AUTOMATION · PYTHON',
    title: 'Tentative Disbursal Summary',
    description: 'A reporting workflow designed to reduce repetitive reporting work by combining data sources, Excel, Python, and workflow automation.',
    tags: ['Python', 'Excel', 'Power Automate', 'OneDrive'],
    icon: Workflow,
    url: '', // Add your live demo URL.
    repo: '', // Add your GitHub repository URL.
    status: 'Add your project link',
  },
  {
    number: '02',
    type: 'PORTFOLIO ANALYTICS',
    title: 'Peak Outstanding Analysis',
    description: 'A Python-based analytics project to investigate outstanding exposure, identify peaks, and make portfolio trends easier to understand.',
    tags: ['Python', 'Pandas', 'Data Analysis'],
    icon: BarChart3,
    url: '',
    repo: '',
    status: 'Add your project link',
  },
  {
    number: '03',
    type: 'DATA ENGINEERING · ETL',
    title: 'PostgreSQL → SQL Server ETL',
    description: 'An ETL workflow covering source-to-target data movement, type handling, duplicate-key considerations, and incremental loading.',
    tags: ['PostgreSQL', 'SQL Server', 'SSIS', 'ETL'],
    icon: Database,
    url: '',
    repo: '',
    status: 'Add your project link',
  },
  {
    number: '04',
    type: 'GENERATIVE AI · TEXT TO SQL',
    title: 'AI SQL Assistant',
    description: 'A natural-language analytics concept that translates business questions into SQL and displays query results from a defined database schema.',
    tags: ['Python', 'LLM', 'SQL', 'Streamlit'],
    icon: BrainCircuit,
    url: '',
    repo: '',
    status: 'Add your project link',
  },
  {
    number: '05',
    type: 'WEB APP · EDUCATION',
    title: 'Student Registration App',
    description: 'A web application for collecting student details and persisting records in a PostgreSQL-backed database.',
    tags: ['Streamlit', 'Python', 'PostgreSQL', 'Supabase'],
    icon: Layers3,
    url: '',
    repo: '',
    status: 'Add your project link',
  },
  {
    number: '06',
    type: 'SAAS · WEB DEVELOPMENT',
    title: 'EduGatr',
    description: 'An education-platform project exploring accounts, dashboards, and a modular Django application structure.',
    tags: ['Django', 'JavaScript', 'Vercel'],
    icon: Code2,
    url: '',
    repo: '',
    status: 'Add your project link',
  },
]

const SKILLS = [
  { group: 'Analytics & BI', icon: BarChart3, items: ['Power BI', 'DAX', 'Excel', 'Power Query', 'Metabase', 'KPI Reporting'] },
  { group: 'Programming', icon: Terminal, items: ['Python', 'Pandas', 'NumPy', 'JavaScript', 'Streamlit', 'React'] },
  { group: 'Data & ETL', icon: Database, items: ['SQL', 'PostgreSQL', 'SQL Server', 'MySQL', 'SSIS', 'Data Modelling'] },
  { group: 'AI & Delivery', icon: BrainCircuit, items: ['LLM Integration', 'Machine Learning', 'GitHub', 'Vercel', 'Netlify', 'Automation'] },
]

const EXPERIENCE = [
  {
    date: 'PROFESSIONAL EXPERIENCE',
    title: 'Data Analytics · BFSI / FinTech',
    place: 'Experience across reporting, portfolio monitoring, and analytics workflows',
    detail: 'MIS reporting, data quality, business performance tracking, Python automation, SQL analysis, and stakeholder-ready insights.',
  },
  {
    date: 'SELECTED WORK',
    title: 'Automation & Data Engineering',
    place: 'Practical, business-focused implementations',
    detail: 'Automated reporting workflows, portfolio analysis, database ETL, and interactive data applications.',
  },
]

const HEADLINES = [
  {
    text: 'Turning data into decisions. Building ideas into impact.',
    parts: [
      { text: 'Turning data into ' },
      { text: 'decisions.', className: 'gradient-text' },
      { isBreak: true },
      { text: 'Building ideas into ' },
      { text: 'impact.', className: 'gradient-warm' },
    ],
  },
  {
    text: 'Where mathematics meets code to solve complex business problems.',
    parts: [
      { text: 'Where ' },
      { text: 'mathematics', className: 'gradient-text' },
      { text: ' meets ' },
      { text: 'code', className: 'gradient-warm' },
      { text: ' to solve complex business problems.' },
    ],
  },
  {
    text: 'Good questions lead to great insights. Let’s connect.',
    parts: [
      { text: 'Good questions lead to ' },
      { text: 'great insights.', className: 'gradient-text' },
      { text: ' ' },
      { text: 'Let’s connect.', className: 'gradient-warm' },
    ],
  },
].map((headline) => ({
  ...headline,
  length: headline.parts.reduce((length, part) => length + (part.text?.length ?? 0), 0),
}))

function ExternalLink({ href, children, className = '', ...props }) {
  if (!href) return <span className={`disabled-link ${className}`} title="Add your project URL in src/App.jsx" {...props}>{children}</span>
  return <a href={href} className={className} target="_blank" rel="noreferrer" {...props}>{children}</a>
}

function WhatsAppIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.4 11.8a8.3 8.3 0 0 1-12.3 7.3L3 20.3l1.2-4.9a8.3 8.3 0 1 1 16.2-3.6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.4 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.1-.6 1.5-.4.4-1 .7-1.6.7-.5 0-1.2-.1-2.1-.5-1-.4-2.2-1.2-3.3-2.4-1.1-1.2-1.7-2.4-1.9-3.4-.2-.9 0-1.6.4-2.2.3-.4.7-.7 1.2-.8Z" fill="currentColor" />
    </svg>
  )
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState('idle')
  const [typedChars, setTypedChars] = useState(0)
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedChars(HEADLINES[0].length)
      return undefined
    }

    let timeoutId
    let currentHeadline = 0
    let currentChar = 0
    let deleting = false

    const animateHeadline = () => {
      const { length } = HEADLINES[currentHeadline]
      if (!deleting && currentChar < length) {
        currentChar += 1
        setTypedChars(currentChar)
        timeoutId = window.setTimeout(animateHeadline, currentChar === length ? 1500 : 42)
      } else if (!deleting) {
        deleting = true
        timeoutId = window.setTimeout(animateHeadline, 25)
      } else if (currentChar > 0) {
        currentChar -= 1
        setTypedChars(currentChar)
        timeoutId = window.setTimeout(animateHeadline, 22)
      } else {
        deleting = false
        currentHeadline = (currentHeadline + 1) % HEADLINES.length
        setHeadlineIndex(currentHeadline)
        timeoutId = window.setTimeout(animateHeadline, 300)
      }
    }

    timeoutId = window.setTimeout(animateHeadline, 180)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'resume', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleSection) setActiveSection(visibleSection.target.id)
      },
      { rootMargin: '-100px 0px -55% 0px', threshold: [0, 0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  function handleContactSubmit(event) {
    // Netlify detects the static HTML form attributes at build/deploy time.
    // The browser submits the form normally so Netlify can store the submission.
    setFormState('sending')
    const form = event.currentTarget
    if (!form.checkValidity()) {
      setFormState('idle')
      return
    }
    // This listener is informational only; Netlify handles the actual form POST.
    // Do not preventDefault here.
    window.setTimeout(() => setFormState('submitted'), 1200)
  }

  let remainingChars = typedChars
  let cursorPlaced = false
  const renderedHeadline = HEADLINES[headlineIndex].parts.map((part, index) => {
    if (part.isBreak) return <br key={`break-${index}`} />

    const visibleText = part.text.slice(0, remainingChars)
    remainingChars = Math.max(0, remainingChars - visibleText.length)
    const text = <span className={part.className} key={`part-${index}`}>{visibleText}</span>
    if (!cursorPlaced && remainingChars === 0) {
      cursorPlaced = true
      return <Fragment key={`cursor-${index}`}>{text}<span className="typing-cursor" /></Fragment>
    }
    return text
  })

  return (
    <>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label="Aman Rajpoot home">
          <img className="brand-mark" src="/Professional%20Portrait%20Avatar%20Badge.png" alt="" />
          <span>AMAN<span className="brand-muted">RAJPOOT</span></span>
        </a>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {['About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={activeSection === item.toLowerCase() ? 'nav-active' : ''}
              aria-current={activeSection === item.toLowerCase() ? 'location' : undefined}
              onClick={() => {
                setActiveSection(item.toLowerCase())
                closeMenu()
              }}
            >
              {item}
            </a>
          ))}
          <a
            className={`nav-cta${activeSection === 'contact' ? ' nav-active' : ''}`}
            href="#contact"
            aria-current={activeSection === 'contact' ? 'location' : undefined}
            onClick={() => {
              setActiveSection('contact')
              closeMenu()
            }}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> OPEN TO MEANINGFUL OPPORTUNITIES</div>
            <h1 aria-label={HEADLINES[headlineIndex].text}>
              <span aria-hidden="true">
                {renderedHeadline}
                {!cursorPlaced && <span className="typing-cursor" />}
              </span>
            </h1>
            <p className="hero-description">
              I'm Aman Rajpoot — a data analytics professional working across business intelligence, Python automation, data engineering, and AI-powered applications.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href={PROFILE.resumePath} download>Download résumé <Download size={16} /></a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <ExternalLink href={PROFILE.links.linkedin} aria-label="LinkedIn"><Linkedin size={17} /></ExternalLink>
              <ExternalLink href={PROFILE.links.github} aria-label="GitHub"><Github size={17} /></ExternalLink>
              <ExternalLink href={PROFILE.links.instagram} aria-label="Instagram"><Instagram size={17} /></ExternalLink>
              <ExternalLink href={PROFILE.links.youtube} aria-label="YouTube"><Youtube size={17} /></ExternalLink>
              <ExternalLink href={PROFILE.links.whatsapp} aria-label="WhatsApp"><WhatsAppIcon /></ExternalLink>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={17} /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Analytics and code illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="electron-orbit" aria-hidden="true" />
            <div className="visual-core">
              <div className="core-glow" />
              <div className="core-icon"><Sparkles size={37} strokeWidth={1.3} /></div>
              <span className="core-label">DATA × INTELLIGENCE</span>
            </div>
            <div className="float-card float-card-top"><span className="float-icon purple"><BarChart3 size={17} /></span><span><b>Insights</b><small>From raw data</small></span><span className="mini-bars"><i /><i /><i /><i /><i /></span></div>
            <div className="float-card float-card-bottom"><span className="float-icon green"><Code2 size={17} /></span><span><b>Automation</b><small>Less manual work</small></span><span className="float-check"><Check size={14} /></span></div>
            <div className="float-card visual-tag-card tag-left">
              <span className="float-icon purple"><Terminal size={16} /></span>
              <span><b>SQL / Python</b><small>Data workflows</small></span>
            </div>
            <div className="float-card visual-tag-card tag-right">
              <span className="float-icon green"><BrainCircuit size={16} /></span>
              <span><b>BI / AI</b><small>Smarter decisions</small></span>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" />SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
        </section>

        <section className="ticker" aria-label="Core disciplines">
          <div className="ticker-track">
            {['DATA ANALYTICS', 'BUSINESS INTELLIGENCE', 'PYTHON AUTOMATION', 'DATA ENGINEERING', 'AI APPLICATIONS', 'DATA ANALYTICS', 'BUSINESS INTELLIGENCE', 'PYTHON AUTOMATION', 'DATA ENGINEERING', 'AI APPLICATIONS'].map((item, i) => (
              <span key={`${item}-${i}`}>{item}<i>✳</i></span>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity meets <span className="gradient-text">practical impact.</span></>} copy="I enjoy solving real business problems with data, thoughtful automation, and useful technology." />
          <div className="about-grid">
            <div className="about-main">
              <span className="big-quote">“</span>
              <p className="about-statement">I bridge the gap between <span>business questions</span> and <span>data-driven answers.</span></p>
              <p className="body-copy">My work spans recurring MIS, portfolio monitoring, SQL analytics, Python-powered reporting, and building interactive applications. I focus on solutions that are understandable, repeatable, and useful to the people making decisions.</p>
              <p className="body-copy">This portfolio brings together selected projects, technical experiments, and the tools I use to turn ideas into working solutions.</p>
            </div>
            <div className="about-side">
              <div className="principle-card"><span className="principle-number">01</span><div><h3>Business first</h3><p>Start with the question, define the metric, then build the right solution.</p></div><BarChart3 size={20} /></div>
              <div className="principle-card"><span className="principle-number">02</span><div><h3>Automate the repeatable</h3><p>Reduce manual effort and make reporting more consistent.</p></div><Workflow size={20} /></div>
              <div className="principle-card"><span className="principle-number">03</span><div><h3>Keep learning</h3><p>Explore modern data, web, and AI tools through practical projects.</p></div><BrainCircuit size={20} /></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Tools for the <span className="gradient-text">whole data journey.</span></>} copy="From querying source systems to communicating insights and shipping applications." />
          <div className="skills-grid">
            {SKILLS.map(({ group, icon: Icon, items }, index) => (
              <article className="skill-card" key={group}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div>
                <h3>{group}</h3>
                <div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block projects-section" id="projects">
          <div className="projects-heading-row">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built to <span className="gradient-text">solve problems.</span></>} copy="A growing collection of analytics, automation, data engineering, and application projects." />
            <a href={PROFILE.links.github} className="text-link" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-grid">
            {PROJECTS.map(({ number, type, title, description, tags, icon: Icon, url, repo, status }) => (
              <article className="project-card" key={number}>
                <div className="project-topline"><span>{type}</span><span className="project-number">{number}</span></div>
                <div className="project-art"><div className="project-art-grid" /><div className="project-art-orb" /><Icon size={40} strokeWidth={1.15} /><span className="project-art-code">&lt;/&gt;</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <ExternalLink href={url} className="project-link">{url ? 'Live demo' : status} <ArrowUpRight size={14} /></ExternalLink>
                  {repo && <ExternalLink href={repo} className="project-link muted-link">Source code <Github size={14} /></ExternalLink>}
                </div>
              </article>
            ))}
          </div>
          <p className="project-note"><Sparkles size={15} /> Add your real deployment and repository URLs in <code>src/App.jsx</code>. Empty project links are intentionally disabled.</p>
        </section>

        <section className="section-wrap section-block resume-section" id="resume">
          <SectionHeading eyebrow="EXPERIENCE & DIRECTION" title={<>A practical mindset. <span className="gradient-text">Continuous growth.</span></>} copy="A snapshot of the work I enjoy and the problems I like solving." />
          <div className="resume-layout">
            <div className="timeline">
              {EXPERIENCE.map((item, index) => (
                <div className="timeline-item" key={item.title}>
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-content"><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><span className="timeline-place">{item.place}</span><p>{item.detail}</p></div>
                </div>
              ))}
            </div>
            <aside className="resume-card">
              <div className="resume-card-icon"><BriefcaseBusiness size={25} /></div>
              <span className="eyebrow">YOUR NEXT TEAMMATE?</span>
              <h3>Let's build something that matters.</h3>
              <p>For a complete view of my experience, projects, and education, download my résumé.</p>
              <a className="button button-primary full-button" href={PROFILE.resumePath} download>Download résumé <Download size={16} /></a>
              <span className="resume-file-note">PDF · Add your résumé as public/resume.pdf</span>
            </aside>
          </div>
        </section>

        <section className="section-wrap section-block contact-section" id="contact">
          <div className="contact-copy">
            <SectionHeading eyebrow="GET IN TOUCH" title={<>Have a good question? <span className="gradient-text">Let's talk.</span></>} copy="Open to conversations about analytics, BI, automation, AI projects, and relevant professional opportunities." />
            <a className="contact-email" href={`mailto:${PROFILE.email}`}><Mail size={18} />{PROFILE.email}<ArrowUpRight size={16} /></a>
            <div className="contact-socials">
              <ExternalLink href={PROFILE.links.linkedin}><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></ExternalLink>
              <ExternalLink href={PROFILE.links.github}><Github size={17} /> GitHub <ArrowUpRight size={13} /></ExternalLink>
              <ExternalLink href={PROFILE.links.instagram}><Instagram size={17} /> Instagram <ArrowUpRight size={13} /></ExternalLink>
              <ExternalLink href={PROFILE.links.youtube}><Youtube size={17} /> YouTube <ArrowUpRight size={13} /></ExternalLink>
              <ExternalLink href={PROFILE.links.whatsapp}><WhatsAppIcon /> WhatsApp <ArrowUpRight size={13} /></ExternalLink>
            </div>
          </div>
          <form
            className="contact-form"
            name="portfolio-contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success.html"
            onSubmit={handleContactSubmit}
          >
            <input type="hidden" name="form-name" value="portfolio-contact" />
            <p className="hidden-field"><label>Leave this field empty: <input name="bot-field" /></label></p>
            <div className="form-row">
              <label>Your name<input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required /></label>
              <label>Email address<input name="email" type="email" placeholder="jane@example.com" autoComplete="email" required /></label>
            </div>
            <label>What would you like to discuss?
              <select name="subject" defaultValue="" required>
                <option value="" disabled>Select a topic</option>
                <option>Job opportunity</option><option>Project collaboration</option><option>Freelance / consulting</option><option>Something else</option>
              </select>
            </label>
            <label>Your message<textarea name="message" rows="5" placeholder="Tell me a little about it..." required minLength={10} /></label>
            <button className="button button-primary submit-button" type="submit" disabled={formState === 'sending'}>{formState === 'sending' ? 'Sending…' : 'Send message'} <Send size={16} /></button>
            <p className="form-privacy">Your message is submitted securely through Netlify Forms. Email notifications must be enabled in your Netlify site settings.</p>
          </form>
        </section>

        <section className="section-wrap coffee-section" aria-labelledby="coffee-heading">
          <div className="coffee-card">
            <div className="coffee-copy">
              <span className="coffee-eyebrow"><Coffee size={15} /> A LITTLE FUEL GOES A LONG WAY</span>
              <h2 id="coffee-heading">Enjoying the work? <span>Buy me a coffee.</span></h2>
              <p>If something here sparked an idea or helped with your next step, you can fuel the next project with a coffee. Every cup keeps the curiosity brewing.</p>
              <a className="button coffee-button" href="https://buymeacoffee.com/amanrajpoot" target="_blank" rel="noreferrer">
                Buy me a coffee <Coffee size={17} />
              </a>
              <span className="coffee-note">A small gesture. A big boost. Thank you!</span>
            </div>
            <div className="coffee-art">
              <img
                className="coffee-sticker"
                src="/Coffee%20Fuels%20Productivity%20Sticker%20Portrait.png"
                alt="Coffee is the secret of my productivity"
              />
              <a
                className="coffee-qr-card"
                href="https://buymeacoffee.com/amanrajpoot"
                target="_blank"
                rel="noreferrer"
                aria-label="Scan the Buy Me a Coffee QR code or open the support page"
              >
                <img src="/buymeacoffee_QR.png" alt="Buy Me a Coffee QR code" />
                <span>Scan to support <ArrowUpRight size={13} /></span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#home" className="brand footer-brand"><img className="brand-mark" src="/Professional%20Portrait%20Avatar%20Badge.png" alt="" /><span>AMAN<span className="brand-muted">RAJPOOT</span></span></a>
        <p>Designed with curiosity. Built around data.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="footer-copy">© {new Date().getFullYear()} Aman Rajpoot</span>
      </footer>
    </>
  )
}

export default App