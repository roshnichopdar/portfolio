/* ============================================================
   PROJECTS / CASE STUDIES
   Ordered most-recent → oldest. Edit PROJECTS to add/remove.
   Swap placeholders with <img src="assets/your-image.jpg" /> when ready.
   ============================================================ */

const PROJECTS = [
  {
    id: 'athletifreak',
    when: '2025–2026',
    industry: 'DTC · Global Expansion',
    title: 'ATHLETIFREAK: India Expansion GTM',
    summary: 'Consumer insights, cultural positioning, and AI-streamlined campaign ops for an international launch.',
    challenge: 'ATHLETIFREAK needed to bring a US-born athletic brand into the Indian market without losing voice or speed.',
    approach: 'Provided localized brand messaging and go-to-market recommendations. Built Klaviyo email flows with AI-assisted segmentation. Orchestrated campaign operations through Monday.com workflow automations.',
    metrics: [
      ['1', 'International market entry'],
      ['↓', 'Campaign turnaround time'],
      ['↑', 'Email engagement & CTR'],
    ],
    tag: 'GTM',
    label: 'Localization & campaign',
    image: 'assets/athletifreak.jpeg',
    imagePosition: 'center 50%',
  },
  {
    id: 'rutgers-cwb',
    when: '2024–2025',
    industry: 'Digital · Higher Ed',
    title: 'Rutgers Center for Women in Business',
    summary: 'Weekly multi-channel campaigns and event-driven content that compounded engagement and giving.',
    challenge: 'CWB wanted to grow donor and student engagement around Rutgers Giving Day without expanding headcount.',
    approach: 'Built a weekly content rhythm informed by analytics. Used AI-powered design tools to accelerate visual production and keep brand voice consistent across formats.',
    metrics: [
      ['+40%', 'Community engagement'],
      ['+20%', 'IG followers (6 mo)'],
      ['+15% YoY', 'Donor engagement'],
    ],
    tag: 'Brand growth',
    label: 'Giving Day campaign',
    image: 'assets/rutgers-cwb.png',
    imagePosition: 'center center',
  },
  {
    id: 'servicenow',
    when: '2024',
    industry: 'Enterprise · Product Marketing',
    title: 'ServiceNow: TPSM Content Engine',
    summary: 'Centralized the Employee Workflow Content Catalog and got 5,000+ internal stakeholders to actually use it.',
    challenge: 'Technical Product & Solutions Marketing materials were scattered across systems. Reps couldn’t find them, leadership couldn’t measure them.',
    approach: 'Designed a phase-by-phase content catalog covering planning → launch. Spearheaded adoption of Microsoft Loop for centralized documentation. Built positioning materials for Applicant Tracking & Talent Development.',
    metrics: [
      ['3', 'High-impact projects shipped'],
      ['5K+', 'Internal stakeholders reached'],
      ['1', 'New AI-collab tool adopted org-wide'],
    ],
    tag: 'Case study',
    label: 'Internal program / case study',
    image: 'assets/servicenow.png',
    imagePosition: 'center 30%',
  },
  {
    id: 'rams',
    when: '2022–2025',
    industry: 'Leadership · Org Building',
    title: 'Rutgers Association of Marketing & Strategy',
    summary: 'Grew a student org from 20 members to 100+ as President while running a campus speaker and events series.',
    challenge: 'Build a real marketing community at Rutgers Business School, recruiting pipeline included.',
    approach: 'Directed an executive board, ran 10 events per semester, secured distinguished speakers, and built a recruiting network with marketing teams and agencies.',
    metrics: [
      ['100+', 'Active members'],
      ['10', 'Events per semester'],
      ['1', 'Recruiting network built from scratch'],
    ],
    tag: 'Leadership',
    label: 'Speaker series',
    image: 'assets/rams.jpg',
    imagePosition: 'center 30%',
  },
  {
    id: 'mvvo',
    when: '2023',
    industry: 'Events · Culture',
    title: 'AD Art Show: TikTok Strategy',
    summary: 'A one-week reel and hashtag plan that turned a near-empty TikTok into the campaign’s discovery engine.',
    challenge: 'AD Art Show was launching to an audience that didn’t know it existed yet.',
    approach: 'Designed a daily reel cadence around the show’s artists, coordinated with TikTok’s Global Head of Creative Lab to amplify, and structured hashtag use around culture-led keywords.',
    metrics: [
      ['+19,017%', 'TikTok growth (one week)'],
      ['6 → 1,147', 'Followers'],
      ['↑', 'Ticket sales'],
    ],
    tag: 'Campaign',
    label: 'Reel + hashtag system',
    image: 'assets/mvvo.png',
    imagePosition: 'center 30%',
  },
  {
    id: 'retouch-by-riya',
    when: '2021–2024',
    industry: 'Beauty · Creator Economy',
    title: 'Retouch By Riya',
    summary: 'Backend operations and brand strategy for a beauty creator scaling from bedroom studio to seven-figure influence.',
    challenge: 'A solo beauty creator with a growing inbox of partnership requests and zero infrastructure to manage them. Brand value was being left on the table.',
    approach: 'Built end-to-end creator operations (CRM, invoicing, campaign tracking, listserv) and a content engine on top. Negotiated and shipped 195 brand partnerships. Designed and launched an online beauty academy with paid curriculum.',
    metrics: [
      ['300K+', 'Instagram followers'],
      ['146K+', 'TikTok followers'],
      ['195', 'Brand partnerships'],
      ['$85K+', 'Academy revenue'],
    ],
    tag: 'Creator economy',
    label: 'Editorial campaign / hero',
    image: 'assets/retouch-by-riya-analytics.png',
    imagePosition: 'center top',
  },
];

function Projects() {
  return (
    <section id="work">
      <div className="shell">
        <div className="s-head">
          <Reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 18 }}>04 · Selected work</div>
              <h2 className="serif">
                Six projects, <em>one operating</em> philosophy.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="lede">
              Experience across DTC expansion, higher-ed marketing, enterprise product, org-building, culture, and the creator economy. Each one made something work better than I found it.
            </p>
          </Reveal>
        </div>

        {/* Grid of projects — uniform treatment, no featured/pinned */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(24px, 3vw, 40px)',
        }} className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) + 1}>
              <CaseCard p={p} index={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function DetailRow({ label, body }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: 16, alignItems: 'start' }}>
      <div className="mono-sm" style={{ color: 'var(--ink-mute)', paddingTop: 4 }}>{label}</div>
      <div style={{ fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}

/* Card media — uses a real image if p.image is set, else striped placeholder.
   Drop new project shots into /assets and set `image:` on the project. */
function CardMedia({ p }) {
  if (p.image) {
    return (
      <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', borderBottom: '1px solid var(--line)', background: 'var(--blush)' }}>
        <img
          src={p.image}
          alt={p.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: p.imagePosition || 'center',
            display: 'block',
          }}
        />
      </div>
    );
  }
  return <Placeholder label={p.label} style={{ aspectRatio: '16 / 10' }} />;
}

function CaseCard({ p, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: '1px solid var(--line-strong)',
        background: 'var(--paper)',
        transition: 'transform 500ms cubic-bezier(.2,.7,.2,1), border-color 300ms',
        transform: hovered ? 'translateY(-4px)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CardMedia p={p} />
      <div style={{ padding: 'clamp(20px, 2.2vw, 28px)', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>
            /{String(index).padStart(2, '0')} · {p.when}
          </div>
          <div className="mono-sm" style={{ color: 'var(--accent)' }}>{p.tag}</div>
        </div>
        <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>{p.industry}</div>
        <h3 className="serif" style={{ fontSize: 'clamp(24px, 2.4vw, 34px)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
          {p.title}
        </h3>
        <p style={{ fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{p.summary}</p>

        <div style={{
          marginTop: 'auto',
          paddingTop: 18,
          borderTop: '1px solid var(--line)',
          display: 'grid',
          gridTemplateColumns: `repeat(${p.metrics.length}, 1fr)`,
          gap: 12,
        }}>
          {p.metrics.map(([n, l], i) => (
            <div key={i}>
              <div className="serif" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</div>
              <div className="mono-sm" style={{ color: 'var(--ink-mute)', marginTop: 6, fontSize: 9 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Expandable detail */}
        <div style={{
          marginTop: 14,
          maxHeight: hovered ? 220 : 0,
          opacity: hovered ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 500ms ease, opacity 400ms ease',
        }}>
          <div style={{ paddingTop: 14, borderTop: '1px dashed var(--line)' }}>
            <DetailRow label="Challenge" body={p.challenge} />
            <div style={{ height: 10 }} />
            <DetailRow label="Approach" body={p.approach} />
          </div>
        </div>
      </div>
    </article>
  );
}

Object.assign(window, { Projects });
