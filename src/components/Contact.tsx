import { FiMapPin, FiMail, FiPhone, FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useLang } from "../i18n/LangContext";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();

  return (
    <Reveal as="section" id="contact">
      <div className="wrap">
        <div className="location-badge">
          <FiMapPin />
          {t("meta_location")}
        </div>
        <div
          className="contact-title"
          dangerouslySetInnerHTML={{ __html: t("contact_title") }}
        />
        <p className="contact-sub">{t("contact_sub")}</p>
        <div className="contact-links">
          <a
            className="clink"
            href="https://github.com/carellihoula"
            target="_blank"
            rel="noopener"
          >
            <FiGithub /> github.com/carellihoula
          </a>
          <a
            className="clink"
            href="https://www.linkedin.com/in/carel-ntsoumou-lihoula-a85ba6204/"
            target="_blank"
            rel="noopener"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a className="clink" href="mailto:carellihoula10@gmail.com">
            <FiMail /> carellihoula10@gmail.com
          </a>
          <a className="clink" href="tel:+33755738668">
            <FiPhone /> +33 7 55 73 86 68
          </a>
        </div>
      </div>
    </Reveal>
  );
}
