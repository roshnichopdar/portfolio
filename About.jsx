/* ============================================================
   ABOUT ME
   Edit the narrative paragraphs in ABOUT_COPY below.
   ============================================================ */

const ABOUT_COPY = {
  kicker: '01 · About',
  title: <>Strategy with <em>taste</em>. Operations with rigor.</>,
  paragraphs: [
    "I'm Roshni, a marketer shaped by two worlds: the fast-moving creator economy and the operational discipline of enterprise technology. I spent four years scaling a beauty creator from a bedroom studio to 446K+ followers and a $85K academy launch, then sharpened that instinct inside ServiceNow's product marketing org, where I learned how positioning, enablement, and messaging move at scale.",
    "What I love is the seam where culture meets systems: the place where a brand voice has to survive a Klaviyo flow, a TikTok algorithm shift, and a 9am stand-up all in the same week. That seam is where I build.",
    "Today, I'm interested in the intersection of brand storytelling, creator operations, performance analytics, and AI-powered workflows. I use AI not as a shortcut, but as a force multiplier- helping teams move faster while making more thoughtful decisions.",
  ],
  sidebar: [
    ['Based in', 'Edison, NJ'],
    ['Open to', 'New Jersey & New York'],
    ['Education', 'Rutgers University, ’25'],
    ['Studying', 'IT & Informatics + Business Admin'],
    ['Languages', 'English · Hindi · Urdu · Oriya · Spanish'],
    ['Most recent', 'Marketing Coordinator at ATHLETIFREAK'],
  ],
};

function About() {
  return (
    <section id="about" style={{ background: 'var(--paper-warm)' }}>
      <div className="shell">
        <Reveal>
          <div className="kicker" style={{ marginBottom: 40 }}>{ABOUT_COPY.kicker}</div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: 'clamp(40px, 6vw, 100px)', alignItems: 'start' }} className="about-grid">
          <div>
            <Reveal>
              <h2 className="serif" style={{
                fontSize: 'clamp(40px, 5.6vw, 80px)',
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                marginBottom: 40,
                maxWidth: '14ch',
              }}>
                {ABOUT_COPY.title}
              </h2>
            </Reveal>
            {ABOUT_COPY.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i + 1}>
                <p style={{
                  fontSize: 'clamp(16px, 1.2vw, 19px)',
                  lineHeight: 1.65,
                  color: 'var(--ink-soft)',
                  marginBottom: 22,
                  maxWidth: '64ch',
                  textWrap: 'pretty',
                }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Bio sidebar — index-card style */}
          <Reveal delay={2}>
            <div style={{
              border: '1px solid var(--line)',
              background: 'var(--paper)',
              padding: 'clamp(24px, 3vw, 36px)',
            }}>
              <div className="mono-sm" style={{ color: 'var(--ink-mute)', marginBottom: 22 }}>The vitals</div>
              {ABOUT_COPY.sidebar.map(([k, v], i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 18,
                  padding: '14px 0',
                  borderTop: i === 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                }}>
                  <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>{k}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink)' }}>{v}</div>
                </div>
              ))}
              <div style={{ marginTop: 24, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 22, color: 'var(--ink-soft)', lineHeight: 1.3 }}>
                “I build the seam between<br /> brand voice and the systems<br /> that carry it.”
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { About });
