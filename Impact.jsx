/* ============================================================
   SELECTED IMPACT
   Editorial metrics strip. Edit numbers and labels in IMPACT.
   ============================================================ */

const IMPACT = [
  { n: '446K+', label: 'Combined audience scaled', sub: 'across IG + TikTok for a beauty creator brand' },
  { n: '19,017%', label: 'TikTok growth in one week', sub: 'reel & hashtag strategy for AD Art Show' },
  { n: '$85K+', label: 'Revenue driven', sub: 'launch of an online beauty academy' },
  { n: '195', label: 'Brand partnerships managed', sub: 'end-to-end creator & campaign operations' },
  { n: '+40%', label: 'Engagement lift', sub: 'Rutgers Center for Women in Business socials' },
  { n: '5,000+', label: 'Stakeholders reached', sub: 'internal campaigns at ServiceNow TPSM' },
];

function Impact() {
  return (
    <section id="impact">
      <div className="shell">
        <div className="s-head">
          <Reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 18 }}>02 · Selected impact</div>
              <h2 className="serif">
                The numbers, <em>but make it</em> editorial.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="lede">
              A snapshot of the outcomes behind four years of building creator brands, enterprise marketing programs, and student organizations- measured in growth, revenue, and reach.
            </p>
          </Reveal>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--line-strong)',
        }} className="impact-grid">
          {IMPACT.map((it, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div className="impact-cell lift" style={{
                padding: 'clamp(28px, 3vw, 44px) clamp(20px, 2vw, 32px)',
                borderBottom: '1px solid var(--line-strong)',
                borderRight: ((i + 1) % 3 !== 0) ? '1px solid var(--line)' : 'none',
                minHeight: 240,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                cursor: 'default',
              }}>
                <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>
                  / 0{i + 1}
                </div>
                <div>
                  <div className="serif" style={{
                    fontSize: 'clamp(48px, 6vw, 88px)',
                    lineHeight: 0.95,
                    letterSpacing: '-0.03em',
                    color: 'var(--ink)',
                  }}>
                    {it.n}
                  </div>
                  <div style={{ fontSize: 14, marginTop: 14, color: 'var(--ink)', fontWeight: 500 }}>
                    {it.label}
                  </div>
                  <div style={{ fontSize: 13, marginTop: 6, color: 'var(--ink-mute)', lineHeight: 1.45 }}>
                    {it.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .impact-grid { grid-template-columns: repeat(2, 1fr) !important; } .impact-cell { border-right: 1px solid var(--line) !important; } }
        @media (max-width: 560px) { .impact-grid { grid-template-columns: 1fr !important; } .impact-cell { border-right: none !important; } }
      `}</style>
    </section>
  );
}

Object.assign(window, { Impact });
