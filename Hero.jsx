/* ============================================================
   HERO
   Headline rotation is exposed via Tweaks (headline variant key).
   Edit headlines and subhead here.
   ============================================================ */

const HERO_HEADLINES = [
  {
    // Confident & strategic
    pre: 'A marketer working at the',
    main: 'intersection',
    mainItalic: 'of culture, beauty,',
    rest: 'and intelligent systems.',
  },
  {
    // Editorial & poetic
    pre: 'brand stories,',
    main: 'sharpened',
    mainItalic: 'by analytics,',
    rest: 'operations, accelerated by AI.',
  },
  {
    // Sharp & impact-led
    pre: 'I scale consumer brands through',
    main: 'creative',
    mainItalic: 'strategy, creator',
    rest: 'operations, and AI-driven workflows.',
  },
  {
    // Playful & polished
    pre: 'Half strategist, half operator,',
    main: 'wholly',
    mainItalic: 'obsessed',
    rest: 'with brands that move culture.',
  },
];

function Hero({ headlineIndex = 0 }) {
  const h = HERO_HEADLINES[headlineIndex] || HERO_HEADLINES[0];
  return (
    <section id="top" style={{ paddingTop: 'clamp(140px, 16vw, 220px)', paddingBottom: 'clamp(60px, 7vw, 110px)' }}>
      <div className="shell">
        {/* Meta strip */}
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(40px, 5vw, 72px)', flexWrap: 'wrap', gap: 16 }}>
            <div className="mono" style={{ color: 'var(--ink-mute)' }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 10, verticalAlign: 'middle' }} />
              Available for full-time · Class of 2025
            </div>
            <div className="mono" style={{ color: 'var(--ink-mute)' }}>
              PORTFOLIO
            </div>
          </div>
        </Reveal>

        {/* Main editorial headline */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 'var(--gutter)', alignItems: 'end' }} className="hero-grid">
          <Reveal>
            <h1 className="serif" style={{
              fontSize: 'clamp(56px, 11vw, 168px)',
              lineHeight: 0.93,
              letterSpacing: '-0.035em',
              fontWeight: 400,
              fontFeatureSettings: '"ss01"',
            }}>
              <span style={{ display: 'block', fontSize: '0.42em', letterSpacing: '-0.01em', color: 'var(--ink-mute)', marginBottom: '0.4em', fontFamily: 'var(--font-body)', fontWeight: 300 }}>
                {h.pre}
              </span>
              <span>{h.main} </span>
              <span className="serif-italic" style={{ color: 'var(--accent)' }}>{h.mainItalic}</span>
              <span> {h.rest}</span>
            </h1>
          </Reveal>

          {/* Right column: portrait placeholder + intro paragraph */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Reveal delay={2}>
              {/* Headshot — swap src in /assets to update */}
              <div style={{
                position: 'relative',
                aspectRatio: '3 / 4',
                width: '100%',
                overflow: 'hidden',
                border: '1px solid var(--line)',
                background: 'var(--blush)',
              }}>
                <img
                  src="roshni-headshot.jpeg"
                  alt="Roshni Chopdar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    display: 'block',
                  }}
                />
              </div>
            </Reveal>
            <Reveal delay={3}>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-soft)', maxWidth: '36ch' }}>
                Turning ideas into marketing people remember.
              </p>
              <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#work" className="mono" style={{ padding: '12px 18px', border: '1px solid var(--ink)', borderRadius: 999, background: 'var(--ink)', color: 'var(--paper)' }}>
                  View work →
                </a>
                <a href="#contact" className="mono" style={{ padding: '12px 18px', border: '1px solid var(--ink)', borderRadius: 999 }}>
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Lower meta row — by-the-numbers ribbon */}
        <Reveal delay={2}>
          <div style={{
            marginTop: 'clamp(60px, 8vw, 110px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--gutter)',
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
          }} className="hero-stats">
            {[
              ['446K+', 'Combined followers scaled across creator brands'],
              ['195', 'Brand partnerships managed end-to-end'],
              ['$85K+', 'Revenue from beauty academy launch'],
              ['5K+', 'Internal stakeholders reached at ServiceNow'],
            ].map(([n, label], i) => (
              <div key={i}>
                <div className="serif" style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</div>
                <div className="mono-sm" style={{ color: 'var(--ink-mute)', marginTop: 10, maxWidth: '22ch' }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Hero, HERO_HEADLINES });
