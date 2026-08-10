import { useLang } from "../i18n/LangContext";
import { Reveal } from "./Reveal";

const SKILL_GROUPS: { legend: string; skills: string[] }[] = [
  {
    legend: "IA & LLM",
    skills: [
      "AI Agents",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "CrewAI",
      "OpenAI API",
      "Claude Code",
      "Codex",
      "Antigravity",
      "Gemini CLI",
      "Copilot Studio",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Fine-tuning",
      "Pandas",
      "NumPy",
      "Streamlit",
    ],
  },
  {
    legend: "__skill_lang",
    skills: ["Python", "C / C++", "TypeScript", "SQL"],
  },
  {
    legend: "Cloud & DevOps",
    skills: [
      "AWS Lambda",
      "API Gateway",
      "S3",
      "EC2",
      "Docker",
      "Git",
      "CI/CD",
    ],
  },
  {
    legend: "Backend",
    skills: ["FastAPI", "Flask", "Django", "Node.js", "Celery"],
  },
  {
    legend: "__skill_db",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    legend: "Frontend",
    skills: [
      "ReactJS",
      "Next.js",
      "Tailwind",
      "shadcn/ui",
      "Chakra UI",
      "Material UI",
    ],
  },
];

export function Skills() {
  const { t } = useLang();

  return (
    <section id="skills">
      <Reveal className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">{t("skills_title")}</h2>
          <span className="sec-index">04 / stack</span>
        </div>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-panel" key={group.legend}>
              <div className="legend">
                {group.legend === "__skill_lang"
                  ? t("skill_lang")
                  : group.legend === "__skill_db"
                    ? t("skill_db")
                    : group.legend}
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
