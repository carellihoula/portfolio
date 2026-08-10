import { useLang } from '../i18n/LangContext'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { TranslationKey } from '../i18n/translations'

const NAV_ITEMS: { id: string; key: TranslationKey }[] = [
  { id: 'about', key: 'nav_about' },
  { id: 'exp', key: 'nav_exp' },
  { id: 'projects', key: 'nav_projects' },
  { id: 'skills', key: 'nav_skills' },
  { id: 'contact', key: 'nav_contact' },
]

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

export function Header() {
  const { lang, setLang, t } = useLang()
  const activeId = useScrollSpy(NAV_IDS)

  return (
    <header>
      <div className="wrap nav">
        <div className="logo">
          <span className="dot" /> CLN / v2026.1
        </div>
        <div className="nav-right">
          <div className="links">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={activeId === item.id ? 'active' : ''}>
                {t(item.key)}
              </a>
            ))}
          </div>
          <div className="lang-switch" role="group" aria-label="Langue / Language">
            <button type="button" className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>
              FR
            </button>
            <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
