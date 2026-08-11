import { useLang } from '../i18n/LangContext'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <div className="wrap">{t('foot_note')}</div>
    </footer>
  )
}
