/* ============================================================
   AI + MARKETING WORKFLOW
   Stack grid + workflow diagram. Edit STACK and WORKFLOW.
   ============================================================ */

const STACK = [
  { name: 'Microsoft Copilot', use: 'Content drafting, summarization, deck outlines' },
  { name: 'Klaviyo (AI)', use: 'Predictive segmentation, send-time, subject testing' },
  { name: 'Shopify', use: 'Commerce data into Klaviyo & campaign loops' },
  { name: 'Canva AI', use: 'Variant generation for social creative at scale' },
  { name: 'CapCut', use: 'Short-form video editing & captioning' },
  { name: 'Adobe Creative Suite', use: 'Editorial-grade brand assets' },
  { name: 'Monday.com', use: 'Cross-functional campaign ops with automations' },
  { name: 'Microsoft Loop', use: 'Live, AI-collab documentation' },
  { name: 'Meta Business Suite', use: 'Cross-platform publishing & performance' },
  { name: 'TikTok / YouTube / Google Analytics', use: 'Audience, content, and funnel performance' },
  { name: 'Mailchimp', use: 'Audience growth & list operations' },
  { name: 'Prompt Engineering', use: 'Repeatable prompt patterns for brand voice' },
];

const WORKFLOW = [
  {
    step: '01',
    title: 'Listen',
    body: 'Pull signal from analytics dashboards (Meta, TikTok, GA, Shopify) into a single weekly read.',
    tools: ['GA4', 'Meta', 'TikTok'],
  },
  {
    step: '02',
    title: 'Frame',
    body: 'Translate signal into a creative brief. Copilot drafts; I edit for voice and strategy.',
    tools: ['Copilot', 'Loop'],
  },
  {
    step: '03',
    title: 'Make',
    body: 'Generate variants in Canva AI / Adobe, cut short-form in CapCut, write copy with prompt patterns.',
    tools: ['Canva AI', 'Adobe', 'CapCut'],
  },
  {
    step: '04',
    title: 'Ship',
    body: 'Schedule via Meta Business Suite & Klaviyo with AI-assisted segmentation, send-time, and subject tests.',
    tools: ['Klaviyo', 'Meta', 'Monday'],
  },
  {
    step: '05',
    title: 'Compound',
    body: 'Feed performance back into the brief library so every campaign starts smarter than the last.',
    tools: ['Loop', 'Monday'],
  },
];

function AIWorkflow() {
  return (
    <section id="ai" style={{ background: 'var(--ink-fixed)', color: 'var(--paper-fixed)' }}>
      {/* Fixed-inverse section regardless of dark/light tweak. */}
      <div className="shell">
        <div className="s-head" style={{ color: 'var(--paper-fixed)' }}>
          <Reveal>
            <div>
              <div className="kicker" style={{ color: 'rgba(246,239,233,0.55)', marginBottom: 18 }}>
                05 · AI × Marketing
              </div>
              <h2 className="serif" style={{ color: 'var(--paper-fixed)' }}>
                AI as <em style={{ color: 'var(--accent-soft)' }}>leverage</em>, not a gimmick.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="lede" style={{ color: 'rgba(246,239,233,0.7)' }}>
              Every role I’ve held in the last three years has involved AI, for content velocity, segmentation, ideation, or operations. Here’s the actual stack and the actual loop.
            </p>
          </Reveal>
        </div>

        {/* Workflow Diagram */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 0,
          border: '1px solid rgba(246,239,233,0.18)',
          marginBottom: 80,
        }} className="wf-grid">
          {WORKFLOW.map((w, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <div className="wf-cell" style={{
                padding: 'clamp(22px, 2.4vw, 32px)',
                borderRight: i < WORKFLOW.length - 1 ? '1px solid rgba(246,239,233,0.18)' : 'none',
                minHeight: 240,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                position: 'relative',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div className="mono-sm" style={{ color: 'rgba(246,239,233,0.5)' }}>{w.step}</div>
                  <div className="mono-sm" style={{ color: 'var(--accent-soft)' }}>→</div>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: 'clamp(28px, 2.6vw, 38px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--paper-fixed)' }}>
                    {w.title}
                  </div>
                  <p style={{ fontSize: 13.5, color: 'rgba(246,239,233,0.7)', marginTop: 14, lineHeight: 1.55 }}>
                    {w.body}
                  </p>
                  <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {w.tools.map(t => (
                      <span key={t} className="mono-sm" style={{
                        padding: '4px 8px',
                        border: '1px solid rgba(246,239,233,0.25)',
                        borderRadius: 999,
                        color: 'rgba(246,239,233,0.8)',
                        fontSize: 9,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tool stack grid */}
        <Reveal>
          <div className="mono" style={{ color: 'rgba(246,239,233,0.55)', marginBottom: 24 }}>
            ── Stack
          </div>
        </Reveal>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          borderTop: '1px solid rgba(246,239,233,0.18)',
        }} className="stack-grid">
          {STACK.map((t, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <div className="stack-cell" style={{
                padding: '20px 22px',
                borderBottom: '1px solid rgba(246,239,233,0.18)',
                borderRight: ((i + 1) % 4 !== 0) ? '1px solid rgba(246,239,233,0.18)' : 'none',
                minHeight: 110,
              }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--paper-fixed)' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 12.5, color: 'rgba(246,239,233,0.6)', marginTop: 6, lineHeight: 1.45 }}>
                  {t.use}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .wf-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .wf-cell { border-right: 1px solid rgba(246,239,233,0.18) !important; border-bottom: 1px solid rgba(246,239,233,0.18) !important; }
          .stack-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stack-cell { border-right: 1px solid rgba(246,239,233,0.18) !important; }
          .stack-cell:nth-child(2n) { border-right: none !important; }
        }
        @media (max-width: 560px) {
          .wf-grid { grid-template-columns: 1fr !important; }
          .stack-grid { grid-template-columns: 1fr !important; }
          .stack-cell { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { AIWorkflow });
