import { useLang } from '../i18n/LangContext'

export function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">AI Software Engineer</div>
          <h1 className="name">
            Carel Lihoula
            <br />
            <span className="accent">Ntsoumou</span>
          </h1>
          <div className="role" dangerouslySetInnerHTML={{ __html: t('hero_role') }} />
          <p className="pitch" dangerouslySetInnerHTML={{ __html: t('hero_pitch') }} />
          <div className="cta-row">
            <a className="btn primary" href="#contact">
              {t('cta_contact')}
            </a>
            <a className="btn ghost" href="https://github.com/carellihoula" target="_blank" rel="noopener">
              {t('cta_github')}
            </a>
          </div>
          <div className="meta-row">
            <span>
              <span className="dot2" /> <span>{t('meta_location')}</span>
            </span>
            <span>
              <span className="dot2" /> <span>{t('meta_lang')}</span>
            </span>
            <span>
              <span className="dot2" /> <span>{t('meta_available')}</span>
            </span>
          </div>
        </div>

        <div className="schematic" aria-hidden="true">
          <svg viewBox="0 0 400 400">
            <path className="node-line flow" d="M 200 200 L 90 90" />
            <path className="node-line flow" d="M 200 200 L 310 90" />
            <path className="node-line flow" d="M 200 200 L 60 220" />
            <path className="node-line flow" d="M 200 200 L 340 220" />
            <path className="node-line flow" d="M 200 200 L 150 340" />
            <path className="node-line flow" d="M 200 200 L 250 340" />

            <circle className="pulse" r="3" cx="90" cy="90" style={{ animationDelay: '0s' }} />
            <circle className="pulse" r="3" cx="310" cy="90" style={{ animationDelay: '0.5s' }} />
            <circle className="pulse" r="3" cx="60" cy="220" style={{ animationDelay: '1s' }} />
            <circle className="pulse" r="3" cx="340" cy="220" style={{ animationDelay: '1.5s' }} />
            <circle className="pulse" r="3" cx="150" cy="340" style={{ animationDelay: '2s' }} />
            <circle className="pulse" r="3" cx="250" cy="340" style={{ animationDelay: '2.5s' }} />

            <g>
              <rect className="node" x="52" y="72" width="76" height="36" rx="2" />
              <text className="node-label" x="90" y="94" textAnchor="middle">
                RAG
              </text>
            </g>
            <g>
              <rect className="node" x="272" y="72" width="76" height="36" rx="2" />
              <text className="node-label" x="310" y="94" textAnchor="middle">
                FINE-TUNING
              </text>
            </g>
            <g>
              <rect className="node" x="16" y="202" width="88" height="36" rx="2" />
              <text className="node-label" x="60" y="224" textAnchor="middle">
                {t('node_agents')}
              </text>
            </g>
            <g>
              <rect className="node" x="296" y="202" width="88" height="36" rx="2" />
              <text className="node-label" x="340" y="224" textAnchor="middle">
                CLOUD
              </text>
            </g>
            <g>
              <rect className="node" x="106" y="322" width="88" height="36" rx="2" />
              <text className="node-label" x="150" y="344" textAnchor="middle">
                WORKFLOWS
              </text>
            </g>
            <g>
              <rect className="node" x="206" y="322" width="88" height="36" rx="2" />
              <text className="node-label" x="250" y="344" textAnchor="middle">
                {t('node_deploy')}
              </text>
            </g>

            <circle className="node-core" cx="200" cy="200" r="42" />
            <text className="node-core-label" x="200" y="196" textAnchor="middle">
              CLN
            </text>
            <text className="node-label" x="200" y="212" textAnchor="middle" fill="var(--text-dim)">
              orchestrator
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
