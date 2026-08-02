/* ============================================================
   CONTACT
   Edit links and copy below. Email + LinkedIn from resume baked in.
   ============================================================ */

const CONTACTS = [
  { label: 'Email', value: 'roshnichopdar@gmail.com', href: 'mailto:roshnichopdar@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/roshnichopdar', href: 'https://www.linkedin.com/in/roshnichopdar/' },
  { label: 'Phone', value: '+1 (908) 421-2105', href: 'tel:+19084212105' },
  { label: 'Resume', value: 'PDF · 2026', href: 'assets/Resume_RoshniChopdar.pdf' },
];

function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--ink-fixed)', color: 'var(--paper-fixed)' }}>
      <div className="shell">
        <Reveal>
          <div className="kicker" style={{ color: 'rgba(246,239,233,0.55)', marginBottom: 28 }}>08 · Contact</div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="serif" style={{
            fontSize: 'clamp(56px, 11vw, 180px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            color: 'var(--paper-fixed)',
            marginBottom: 'clamp(20px, 3vw, 32px)',
            maxWidth: '14ch',
          }}>
            Let’s build <em style={{ color: 'var(--accent-soft)' }}>something</em> people remember.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p style={{
            fontSize: 'clamp(16px, 1.3vw, 20px)',
            color: 'rgba(246,239,233,0.75)',
            lineHeight: 1.55,
            maxWidth: '56ch',
            marginBottom: 'clamp(32px, 4vw, 48px)',
          }}>
            Open to full-time roles in marketing strategy, brand partnerships, creator operations, product marketing, and digital strategy. Based in New Jersey and New York.
          </p>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          borderTop: '1px solid rgba(246,239,233,0.25)',
        }} className="contact-grid">
          {CONTACTS.map((c, i) => (
            <Reveal key={i} delay={(i % 2) + 1}>
              <a href={c.href} target={c.href.startsWith('http') || c.href.endsWith('.pdf') ? '_blank' : undefined} rel="noopener"
                className="contact-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'clamp(20px, 3vw, 36px) clamp(8px, 1vw, 16px)',
                  borderBottom: '1px solid rgba(246,239,233,0.25)',
                  borderRight: i % 2 === 0 ? '1px solid rgba(246,239,233,0.25)' : 'none',
                  transition: 'background 280ms ease, color 280ms ease',
                  textDecoration: 'none',
                }}
              >
                <div>
                  <div className="mono-sm" style={{ color: 'rgba(246,239,233,0.55)', marginBottom: 10 }}>{c.label}</div>
                  <div className="serif" style={{
                    fontSize: 'clamp(20px, 2.4vw, 36px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.01em',
                    color: 'var(--paper-fixed)',
                  }}>
                    {c.value}
                  </div>
                </div>
                <div style={{ fontSize: 22, color: 'rgba(246,239,233,0.5)' }}>↗</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .contact-row:hover { background: rgba(246,239,233,0.04); }
        .contact-row:hover .serif { color: var(--accent-soft); }
        @media (max-width: 720px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-row { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { Contact });
