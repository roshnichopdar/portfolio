/* ============================================================
   EXPERIENCE
   Vertical editorial timeline with hover detail.
   Edit JOBS below to add/remove roles.
   ============================================================ */

const JOBS = [
  {
    company: 'AWS (Amazon Web Services)',
    role: 'AWSI Operations Analyst',
    when: 'Sep 2026–Present',
    where: 'New York, NY',
    note: 'Support AWS Infrastructure (AWSI) business operations through data analysis, reporting, process improvement, and cross-functional coordination. Partner with stakeholders to improve operational efficiency, maintain data accuracy, and deliver insights that support informed business decisions.',
    tags: ['AWS', 'Business Operations', 'Data Analysis', 'Process Improvement', 'Automation', 'Cross-Functional Collaboration'],
  },
  {
    company: 'ATHLETIFREAK',
    role: 'Marketing Coordinator',
    when: 'Aug 2025–Feb 2026',
    where: 'Basking Ridge, NJ',
    note: 'Integrated digital, social, and in-person campaigns. Built Klaviyo email flows, AI-assisted segmentation, and contributed go-to-market strategy for international expansion into India.',
    tags: ['Klaviyo', 'Shopify', 'Monday.com', 'AI Workflows', 'GTM'],
  },
  {
    company: 'Rutgers Center for Women in Business',
    role: 'Social Media Marketing Intern',
    when: 'Nov 2024–May 2025',
    where: 'Piscataway, NJ',
    note: 'Directed weekly multi-channel campaigns and produced campaign content for Rutgers Giving Day. Lifted engagement +40%, IG followers +20%, donor engagement +15% YoY.',
    tags: ['Analytics', 'Content', 'Brand', 'Generative AI'],
  },
  {
    company: 'ServiceNow',
    role: 'Technical Product & Solutions Marketing Co-Op',
    when: 'Jul 2024–Dec 2024',
    where: 'Manhattan, NY',
    note: 'Built positioning, messaging, and enablement for TPSM & Center of Excellence teams. Delivered 3 high-impact projects including video campaigns viewed by 5,000+ internal stakeholders. Spearheaded adoption of Microsoft Loop.',
    tags: ['Product Marketing', 'GTM', 'Enablement', 'Microsoft Loop'],
  },
  {
    company: 'Retouch By Riya',
    role: 'Social Media Manager (Beauty Influencer)',
    when: 'Jun 2021–Jul 2024',
    where: 'Dallas, TX',
    note: 'Scaled @retouchbyriya to 300K+ on IG and 146K+ on TikTok. Managed 195 brand partnerships end-to-end. Launched a beauty academy that generated $85K+ in revenue.',
    tags: ['Creator Economy', 'Beauty', 'Partnerships', 'CRM', 'Operations'],
  },
  {
    company: 'MvVO Art (AD Art Show)',
    role: 'Social Media Marketing Intern',
    when: 'Jul 2023–Oct 2023',
    where: 'Brooklyn, NY',
    note: 'Reel & hashtag strategy that grew TikTok from 6 → 1,147 followers in a single week. Coordinated campaigns with TikTok’s Global Head of Creative Lab.',
    tags: ['Campaigns', 'TikTok', 'Events'],
  },
  {
    company: 'GEZ: Girls Empowerment Zone',
    role: 'NJ Ambassador / Intern',
    when: 'Apr 2021–Jun 2022',
    where: 'Philadelphia, PA',
    note: 'Grew social audience by 50% and doubled the Teen Tea Room podcast’s listener count in three months.',
    tags: ['Community', 'Podcast', 'Growth'],
  },
];

function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--paper-warm)' }}>
      <div className="shell">
        <div className="s-head">
          <Reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 18 }}>03 · Experience</div>
              <h2 className="serif">
                A career built across <em>creator economy</em>, enterprise, and editorial.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="lede">
              Seven roles, three industries, one through-line: turn brand intent into systems that actually ship and audiences that actually grow.
            </p>
          </Reveal>
        </div>

        <div style={{ borderTop: '1px solid var(--line-strong)' }}>
          {JOBS.map((j, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <ExpRow {...j} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpRow({ company, role, when, where, note, tags, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div
      onClick={() => setOpen(o => !o)}
      style={{
        borderBottom: '1px solid var(--line-strong)',
        padding: 'clamp(22px, 3vw, 36px) 0',
        cursor: 'pointer',
        transition: 'background 300ms ease',
        position: 'relative',
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'color-mix(in oklab, var(--paper) 60%, transparent)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '60px 1.2fr 1.4fr 1fr 40px',
        gap: 'clamp(16px, 2vw, 32px)',
        alignItems: 'center',
      }} className="exp-row">
        <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>
          /0{index + 1}
        </div>
        <div className="serif" style={{ fontSize: 'clamp(22px, 2.4vw, 34px)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
          {company}
        </div>
        <div style={{ fontSize: 14, color: 'var(--ink)' }}>{role}</div>
        <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>
          {when} <br /> {where}
        </div>
        <div style={{ textAlign: 'right', fontSize: 18, color: 'var(--ink-soft)', transition: 'transform 300ms ease', transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>
          +
        </div>
      </div>

      {/* Expandable detail */}
      <div style={{
        maxHeight: open ? 280 : 0,
        opacity: open ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height 600ms cubic-bezier(.2,.7,.2,1), opacity 400ms ease, margin-top 400ms ease',
        marginTop: open ? 22 : 0,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '60px 1fr',
          gap: 'clamp(16px, 2vw, 32px)',
        }} className="exp-detail">
          <div />
          <div style={{ maxWidth: '78ch' }}>
            <p style={{ fontSize: 'clamp(15px, 1.1vw, 17px)', lineHeight: 1.65, color: 'var(--ink-soft)' }}>
              {note}
            </p>
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tags.map(t => (
                <span key={t} className="mono-sm" style={{
                  padding: '6px 10px',
                  border: '1px solid var(--line-strong)',
                  borderRadius: 999,
                  color: 'var(--ink-soft)',
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .exp-row { grid-template-columns: 40px 1fr 30px !important; row-gap: 6px !important; }
          .exp-row > :nth-child(3), .exp-row > :nth-child(4) { grid-column: 2 !important; }
          .exp-detail { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

Object.assign(window, { Experience });
