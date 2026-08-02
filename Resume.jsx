/* ============================================================
   RESUME DOWNLOAD
   PDF lives at assets/Resume_RoshniChopdar.pdf. Swap by replacing
   that file (keep the filename) or edit the href below.
   ============================================================ */

function Resume() {
  return (
    <section id="resume" style={{ background: 'var(--blush)' }}>
      <div className="shell">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 80px)',
          alignItems: 'center',
        }} className="resume-grid">
          <Reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 24 }}>07 · The full document</div>
              <h2 className="serif" style={{
                fontSize: 'clamp(40px, 6vw, 84px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                marginBottom: 24,
              }}>
                The <em style={{ color: 'var(--accent)' }}>resume</em>, for the people who need it.
              </h2>
              <p style={{ fontSize: 'clamp(15px, 1.1vw, 17px)', color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: '54ch', marginBottom: 32 }}>
                One page. Every role, every metric, every certification.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="assets/Resume_RoshniChopdar.pdf" download className="mono" style={{
                  padding: '14px 22px',
                  borderRadius: 999,
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'transform 300ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Download PDF ↓
                </a>
                <a href="assets/Resume_RoshniChopdar.pdf" target="_blank" rel="noopener" className="mono" style={{
                  padding: '14px 22px',
                  borderRadius: 999,
                  border: '1px solid var(--ink)',
                }}>
                  Open in new tab ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* Document mock — a designed summary card, since embedding the raw
              PDF via iframe/plugin isn't reliably supported cross-browser.
              Edit the fields below to keep it in sync with your resume. */}
          <Reveal delay={2}>
            <div style={{
              position: 'relative',
              padding: 'clamp(24px, 3vw, 40px)',
              background: 'var(--paper)',
              border: '1px solid var(--line-strong)',
              boxShadow: '0 24px 60px -32px rgba(20,17,15,0.35)',
              transform: 'rotate(-1.5deg)',
              transition: 'transform 600ms cubic-bezier(.2,.7,.2,1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-1.5deg)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', borderBottom: '1px solid var(--line)', paddingBottom: 16, marginBottom: 18 }}>
                <div>
                  <div className="serif" style={{ fontSize: 26, lineHeight: 1, letterSpacing: '-0.02em' }}>Roshni Chopdar</div>
                  <div className="mono-sm" style={{ color: 'var(--ink-mute)', marginTop: 6 }}>Marketing · Strategy · Operations</div>
                </div>
                <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>PDF · 1 page</div>
              </div>
              {[
                ['Education', 'Rutgers University ’25, IT & Informatics + Business'],
                ['Most recent', 'Marketing Coordinator, ATHLETIFREAK'],
                ['Prior', 'ServiceNow · Rutgers CWB · Retouch By Riya'],
                ['Tools', 'Klaviyo · Shopify · Copilot · Monday · Adobe · Canva'],
                ['Certs', 'GenAI for Marketing w/ Copilot · Pinterest Media Buyer · Prompt Engineering'],
              ].map(([k, v], i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1fr',
                  gap: 14,
                  padding: '10px 0',
                  borderBottom: i < 4 ? '1px dashed var(--line)' : 'none',
                }}>
                  <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>{k}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--ink)' }}>{v}</div>
                </div>
              ))}
              <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between' }}>
                <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>roshnichopdar@gmail.com</div>
                <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>908.421.2105</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Resume });
