import { useLang } from '../i18n/LangContext'
import { Reveal } from './Reveal'

export function Education() {
  const { t } = useLang()

  return (
    <section id="education">
      <Reveal className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">{t('edu_title')}</h2>
          <span className="sec-index">{t('edu_index')}</span>
        </div>
        <div className="edu">
          <div className="edu-card">
            <div className="edu-date">2022 — 2026</div>
            <div className="edu-title">{t('e1_title')}</div>
            <div className="edu-org">ENSIM — Le Mans Université, Le Mans</div>
            <div className="edu-spec">{t('e1_spec')}</div>
          </div>
          <div className="edu-card">
            <div className="edu-date">2020 — 2022</div>
            <div className="edu-title">{t('e2_title')}</div>
            <div className="edu-org">ENSUP — ENSITECH, Cergy</div>
            <div className="edu-spec">{t('e2_spec')}</div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
