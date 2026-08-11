import { FiAward, FiExternalLink } from 'react-icons/fi'
import { SiAnthropic, SiLangchain } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { useLang } from '../i18n/LangContext'
import { Reveal } from './Reveal'
import type { TranslationKey } from '../i18n/translations'

interface Cert {
  icon: IconType
  titleKey: TranslationKey
  issuer: string
  dateKey: TranslationKey
  id: string
  url: string
}

const CERTS: Cert[] = [
  {
    icon: SiAnthropic,
    titleKey: 'cert1_title',
    issuer: 'Anthropic',
    dateKey: 'cert1_date',
    id: '3jhkwfo9ze5y',
    url: 'https://verify.skilljar.com/c/3jhkwfo9ze5y',
  },
  {
    icon: SiAnthropic,
    titleKey: 'cert2_title',
    issuer: 'Anthropic',
    dateKey: 'cert2_date',
    id: 'thjraxsictra',
    url: 'https://verify.skilljar.com/c/thjraxsictra',
  },
  {
    icon: SiLangchain,
    titleKey: 'cert3_title',
    issuer: 'LangChain',
    dateKey: 'cert3_date',
    id: 'dumaze28d4',
    url: 'https://academy.langchain.com/certificates/dumaze28d4',
  },
  {
    icon: FiAward,
    titleKey: 'cert4_title',
    issuer: 'DeepLearning.AI',
    dateKey: 'cert4_date',
    id: '8e19c8c9-4a0d-4191-ba9f-8f84bae31aef',
    url: 'https://learn.deeplearning.ai/accomplishments/8e19c8c9-4a0d-4191-ba9f-8f84bae31aef',
  },
]

export function Certifications() {
  const { t } = useLang()

  return (
    <section id="certifications">
      <Reveal className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">{t('cert_title')}</h2>
          <span className="sec-index">{t('cert_index')}</span>
        </div>
        <div className="cert-grid">
          {CERTS.map((cert) => {
            const Icon = cert.icon
            return (
              <div className="cert-card" key={cert.id}>
                <div className="cert-issuer">
                  <span className="cert-icon">
                    <Icon />
                  </span>
                  {cert.issuer}
                </div>
                <div className="cert-title">{t(cert.titleKey)}</div>
                <div className="cert-meta">{t(cert.dateKey)}</div>
                <div className="cert-id">
                  {t('cert_id_label')} : {cert.id}
                </div>
                <a className="cert-link" href={cert.url} target="_blank" rel="noopener">
                  {t('cert_view')} <FiExternalLink />
                </a>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
