import { FiArrowUpRight } from "react-icons/fi";
import { useLang } from "../i18n/LangContext";
import { Reveal } from "./Reveal";

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projects">
      <Reveal className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">{t("proj_title")}</h2>
          <span className="sec-index">03 / build</span>
        </div>
        <div className="proj-grid">
          <div className="proj">
            <div className="proj-head">
              <span className="proj-title">Canoaicli</span>
              <a
                className="proj-arrow"
                href="https://pypi.org/project/canoaicli/"
                target="_blank"
                rel="noopener"
              >
                <FiArrowUpRight />
              </a>
            </div>
            <p className="proj-desc">{t("p1_desc")}</p>
            <div className="tags">
              <span className="tag">CLI</span>
              <span className="tag">Multi-LLM</span>
              <span className="tag">PyPI</span>
            </div>
          </div>
          <div className="proj">
            <div className="proj-head">
              <span className="proj-title">AI Job Assistant</span>
              <a
                className="proj-arrow"
                href="https://github.com/carellihoula/AIJobAssistant"
                target="_blank"
                rel="noopener"
              >
                <FiArrowUpRight />
              </a>
            </div>
            <p className="proj-desc">{t("p2_desc")}</p>
            <div className="tags">
              <span className="tag">{t("tag_agents3")}</span>
              <span className="tag">OCR</span>
              <span className="tag">Matching</span>
            </div>
          </div>
          <div className="proj wide">
            <div className="proj-head">
              <span className="proj-title">RAG Q&amp;A</span>
              <a
                className="proj-arrow"
                href="https://ragqa.duckdns.org"
                target="_blank"
                rel="noopener"
              >
                <FiArrowUpRight />
              </a>
            </div>
            <p className="proj-desc">{t("p3_desc")}</p>
            <div className="tags">
              <span className="tag">RAG</span>
              <span className="tag">Vector DB</span>
              <span className="tag">LLM</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
