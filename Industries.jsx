/* ============================================================
   INDUSTRIES I'M INTERESTED IN
   Editorial list with hover scaling — "the rooms I want to be in."
   Edit INDUSTRIES below.
   ============================================================ */

const INDUSTRIES = [
  { name: 'Beauty', note: 'Where I learned to operate.' },
  { name: 'Fashion', note: 'Where editorial meets commerce.' },
  { name: 'Editorial & Media', note: 'Voice, taste, point of view.' },
  { name: 'Luxury Consumer Brands', note: 'Brands that earn their price tag.' },
  { name: 'Consumer Tech', note: 'Where storytelling becomes adoption.' },
  { name: 'Lifestyle & Wellness', note: 'Building habit and ritual.' },
  { name: 'Creator Economy', note: 'Operations for the new media.' },
  { name: 'Brand Partnerships', note: 'Where two voices become one.' },
];

function Industries() {
  return (
    <section id="industries">
      <div className="shell">
        <div className="s-head">
          <Reveal>
            <div>
              <div className="kicker" style={{ marginBottom: 18 }}>06 · Where I want to play</div>
              <h2 className="serif">
                The <em>rooms</em> I want to be in.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="lede">
              I'm building toward roles in marketing strategy, brand partnerships, creator operations, and digital strategy across the industries below, in order of obsession.
            </p>
          </Reveal>
        </div>

        <ul style={{ listStyle: 'none', borderTop: '1px solid var(--line-strong)' }}>
          {INDUSTRIES.map((it, i) => (
            <Reveal key={it.name} delay={(i % 3) + 1}>
              <IndustryRow {...it} index={i + 1} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IndustryRow({ name, note, index }) {
  const [hover, setHover] = useState(false);
  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderBottom: '1px solid var(--line-strong)',
        padding: 'clamp(20px, 3vw, 36px) 0',
        display: 'grid',
        gridTemplateColumns: '80px 1fr 1fr 80px',
        gap: 'clamp(16px, 2vw, 32px)',
        alignItems: 'center',
        position: 'relative',
        transition: 'background 300ms ease',
        background: hover ? 'var(--blush)' : 'transparent',
        cursor: 'default',
      }}
      className="ind-row"
    >
      <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>
        /0{index}
      </div>
      <div className="serif" style={{
        fontSize: 'clamp(36px, 5.4vw, 80px)',
        lineHeight: 1,
        letterSpacing: '-0.02em',
        transform: hover ? 'translateX(8px)' : 'translateX(0)',
        transition: 'transform 500ms cubic-bezier(.2,.7,.2,1)',
        fontStyle: hover ? 'italic' : 'normal',
        color: hover ? 'var(--accent)' : 'var(--ink)',
      }}>
        {name}
      </div>
      <div style={{
        fontSize: 14,
        color: 'var(--ink-soft)',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        opacity: hover ? 1 : 0.6,
        transition: 'opacity 300ms ease',
      }}>
        {note}
      </div>
      <div className="mono-sm" style={{
        color: 'var(--ink-mute)',
        textAlign: 'right',
        opacity: hover ? 1 : 0,
        transition: 'opacity 300ms ease',
      }}>
        Let’s talk →
      </div>

      <style>{`
        @media (max-width: 720px) {
          .ind-row { grid-template-columns: 50px 1fr !important; row-gap: 4px !important; }
          .ind-row > :nth-child(3), .ind-row > :nth-child(4) { grid-column: 2 !important; }
        }
      `}</style>
    </li>
  );
}

Object.assign(window, { Industries });
