/* ============================================================
   SHARED COMPONENTS
   - Nav, Marquee, Reveal wrapper, Placeholder image, Footer
   Edit nav links / footer copy here.
   ============================================================ */

const { useState, useEffect, useRef } = React;

/* Intersection-Observer based reveal-on-scroll wrapper.
   Wrap any element in <Reveal> to fade + rise as it enters. */
function Reveal({ children, delay = 0, as: As = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [state, setState] = useState({ shown: false, instant: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If element is already in (or above) viewport on mount, reveal immediately
    // without a fade transition (it would feel laggy for above-the-fold content).
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      setState({ shown: true, instant: true });
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setState({ shown: true, instant: false }); io.disconnect(); } },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      data-delay={delay || undefined}
      data-instant={state.instant ? '' : undefined}
      className={`reveal ${state.shown ? 'in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}

/* Top nav. Edit links + brand here. */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['Work', '#work'],
    ['About', '#about'],
    ['AI Workflow', '#ai'],
    ['Contact', '#contact'],
  ];
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-brand">
        Roshni Chopdar<span className="dot">.</span>
      </a>
      <div className="nav-links">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </div>
      <a href="#contact" className="nav-cta">Let's talk</a>
    </nav>
  );
}

/* Editorial ticker marquee — used between sections for rhythm. */
function Marquee({ items }) {
  const set = (
    <>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="dot">✦</span>
        </React.Fragment>
      ))}
    </>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {set}{set}
      </div>
    </div>
  );
}

/* Striped editorial image placeholder. Swap for a real <img> when ready. */
function Placeholder({ label, style, className = '' }) {
  return (
    <div className={`ph ${className}`} style={style}>
      <span className="ph-label">{label}</span>
    </div>
  );
}

/* Footer */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: 'clamp(40px, 5vw, 64px) var(--gutter)' }}>
      <div className="shell" style={{ padding: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'end' }}>
          <div>
            <div className="serif" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1, letterSpacing: '-0.02em' }}>
              Roshni Chopdar<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div className="mono" style={{ marginTop: 14, color: 'var(--ink-mute)' }}>
              Marketer · Strategist · Operator
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="mono-sm" style={{ color: 'var(--ink-mute)' }}>© 2026. Designed with intention.</div>
            <div className="mono-sm" style={{ color: 'var(--ink-mute)', marginTop: 6 }}>Edison, NJ → Open to NYC</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Reveal, Nav, Marquee, Placeholder, Footer });
