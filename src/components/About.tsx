import { useLang } from "../i18n/LangContext";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="about">
      <Reveal className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">{t("about_title")}</h2>
          <span className="sec-index">{t("about_index")}</span>
        </div>
        <p
          className="about-body"
          dangerouslySetInnerHTML={{ __html: t("about_body") }}
        />
        <div className="facts">
          <div className="fact">
            <div className="k">{t("fact1_k")}</div>
            <div className="v">Agentic AI Engineer @ Nickel</div>
          </div>
          <div className="fact">
            <div className="k">{t("fact2_k")}</div>
            <div className="v">{t("eyebrow_role")}</div>
          </div>
          <div className="fact">
            <div className="k">{t("fact3_k")}</div>
            <div className="v">{t("fact3_v")}</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
