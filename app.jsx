/* ============================================================
   APP ENTRY — assembles all sections and exposes Tweaks
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "blush-ink",
  "type": "instrument-geist",
  "headline": 1,
  "dark": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tokens to <html> so CSS variables flip globally.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', t.dark ? 'dark' : 'light');
    if (t.palette && t.palette !== 'blush-ink') {
      root.setAttribute('data-palette', t.palette);
    } else {
      root.removeAttribute('data-palette');
    }
    if (t.type && t.type !== 'instrument-geist') {
      root.setAttribute('data-type', t.type);
    } else {
      root.removeAttribute('data-type');
    }
  }, [t.palette, t.type, t.dark]);

  // Marquee taglines — calibrated to the brand voice.
  const tagline = [
    'Brand storytelling',
    'Creator operations',
    'AI-powered workflows',
    'Performance analytics',
    'Editorial brand voice',
    'Go-to-market strategy',
    'Beauty · Fashion · Media · Tech',
  ];

  return (
    <>
      <Nav />
      <main>
        <Hero headlineIndex={t.headline} />
        <Marquee items={tagline} />
        <About />
        <Impact />
        <Experience />
        <Projects />
        <AIWorkflow />
        <Industries />
        <Resume />
        <Contact />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakSelect
          label="Color world"
          value={t.palette}
          options={[
            { value: 'blush-ink', label: 'Blush + Ink (default)' },
            { value: 'cream-cocoa', label: 'Cream + Cocoa' },
            { value: 'bone-oxblood', label: 'Bone + Oxblood' },
            { value: 'monochrome', label: 'Monochrome' },
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakToggle
          label="Dark mode"
          value={t.dark}
          onChange={(v) => setTweak('dark', v)}
        />

        <TweakSection label="Typography" />
        <TweakSelect
          label="Type pairing"
          value={t.type}
          options={[
            { value: 'instrument-geist', label: 'Instrument Serif + Geist (default)' },
            { value: 'cormorant-dm', label: 'Cormorant + DM Sans' },
            { value: 'fraunces-manrope', label: 'Fraunces + Manrope' },
          ]}
          onChange={(v) => setTweak('type', v)}
        />

        <TweakSection label="Hero headline" />
        <TweakSelect
          label="Variant"
          value={String(t.headline)}
          options={[
            { value: '0', label: '01 — Confident & strategic' },
            { value: '1', label: '02 — Editorial & poetic' },
            { value: '2', label: '03 — Sharp & impact-led' },
            { value: '3', label: '04 — Playful & polished' },
          ]}
          onChange={(v) => setTweak('headline', parseInt(v, 10))}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
