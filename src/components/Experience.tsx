import { useLang } from '../i18n/LangContext'
import { Reveal } from './Reveal'

export function Experience() {
  const { t } = useLang()

  return (
    <section id="exp">
      <Reveal className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">{t('exp_title')}</h2>
          <span className="sec-index">02 / log --graph</span>
        </div>
        <div className="log">
          <div className="log-entry">
            <div className="log-hash">commit 8f1e2a — HEAD</div>
            <div className="log-top">
              <span className="log-role">Agentic AI Engineer</span>
              <span className="log-co">@ Nickel</span>
              <span className="log-date">{t('d1_date')}</span>
            </div>
            <div className="log-loc">{t('d1_loc')}</div>
            <ul className="log-list">
              <li>{t('d1_l1')}</li>
              <li>{t('d1_l2')}</li>
            </ul>
            <div className="tags">
              <span className="tag">{t('tag_agents')}</span>
              <span className="tag">{t('tag_auto')}</span>
              <span className="tag">IA Skills</span>
            </div>
          </div>

          <div className="log-entry">
            <div className="log-hash">commit c92d40</div>
            <div className="log-top">
              <span className="log-role">{t('d2_role')}</span>
              <span className="log-co">@ INRIA — SAIRPICO</span>
              <span className="log-date">{t('d2_date')}</span>
            </div>
            <div className="log-loc">{t('d2_loc')}</div>
            <ul className="log-list">
              <li>{t('d2_l1')}</li>
              <li>{t('d2_l2')}</li>
              <li>{t('d2_l3')}</li>
            </ul>
            <div className="tags">
              <span className="tag">{t('tag_research')}</span>
              <span className="tag">Desktop App</span>
              <span className="tag">Pipelines</span>
            </div>
          </div>

          <div className="log-entry">
            <div className="log-hash">commit 5b7a19</div>
            <div className="log-top">
              <span className="log-role">{t('d3_role')}</span>
              <span className="log-co">@ HomeTeacher</span>
              <span className="log-date">{t('d3_date')}</span>
            </div>
            <div className="log-loc">{t('d3_loc')}</div>
            <ul className="log-list">
              <li>{t('d3_l1')}</li>
              <li>{t('d3_l2')}</li>
              <li>{t('d3_l3')}</li>
            </ul>
            <div className="tags">
              <span className="tag">EdTech</span>
              <span className="tag">{t('tag_agents2')}</span>
              <span className="tag">{t('tag_deploy')}</span>
            </div>
          </div>

          <div className="log-entry">
            <div className="log-hash">commit 0e3f88</div>
            <div className="log-top">
              <span className="log-role">{t('d4_role')}</span>
              <span className="log-co">@ Obera Sécurité Privée</span>
              <span className="log-date">{t('d4_date')}</span>
            </div>
            <div className="log-loc">{t('d4_loc')}</div>
            <ul className="log-list">
              <li>{t('d4_l1')}</li>
              <li>{t('d4_l2')}</li>
            </ul>
            <div className="tags">
              <span className="tag">API REST</span>
              <span className="tag">Python</span>
              <span className="tag">{t('tag_internal')}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
