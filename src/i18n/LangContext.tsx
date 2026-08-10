import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type TranslationKey } from './translations'

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextValue | null>(null)

function detectInitialLang(): Lang {
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
    return 'en'
  }
  return 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations.page_title[lang]
  }, [lang])

  const t = useMemo(() => (key: TranslationKey) => translations[key][lang], [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LangProvider')
  return ctx
}
