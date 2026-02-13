import React, { useState } from "react";
import "./SkillsLanguages.css";

const skills = [
  { 
    id: "java", 
    label: "Java", 
    detail: "I strengthened my Java skills while building backend modules for microservices projects like my JWT auth service and fitness recommendation app. Working with real business logic taught me clean architecture, object-oriented design, and writing reliable, scalable code." 
  },
  { 
    id: "spring-boot", 
    label: "Spring Boot", 
    detail: "I learned Spring Boot while developing APIs for my fitness recommendation system and authentication microservice. Real deployment scenarios helped me master dependency injection, modular REST layers, and building production-ready services with minimal configuration." 
  },
  { 
    id: "spring-mvc", 
    label: "Spring MVC", 
    detail: "I used Spring MVC while structuring early web projects with proper controller–service–repository layers. It taught me how to handle request flows cleanly, manage form data, and maintain a backend that stays organized and easy to extend." 
  },
  { 
    id: "mysql", 
    label: "MySQL", 
    detail: "I worked with MySQL while designing databases for my activity tracker, event management system, and authentication service. Creating real schemas taught me efficient table design, writing optimized queries, and handling large datasets smoothly." 
  },
  { 
    id: "mongo", 
    label: "MongoDB", 
    detail: "I learned MongoDB during my AI-driven fitness recommendation project where I stored unstructured activity logs and model outputs. Working with NoSQL taught me flexible schema design, fast document queries, and handling dynamic data that changes frequently." 
  },
  { 
    id: "html", 
    label: "HTML", 
    detail: "I built my fundamentals in HTML while creating the frontends for my portfolio and event management platform. It helped me structure clean, semantic layouts that served as the foundation for everything I styled or made dynamic later." 
  },
  { 
    id: "css", 
    label: "CSS", 
    detail: "I improved my CSS skills while designing responsive UIs for my React apps and portfolio projects. Through real design challenges, I learned how to create modern, polished layouts that stay consistent across screens and devices." 
  },
  { 
    id: "js", 
    label: "JavaScript", 
    detail: "I grew comfortable with JavaScript while adding interactive features like validations, animations, and dynamic content to my web apps. Working directly on user-facing components showed me how JS shapes real-time behavior and smooth user experiences." 
  },
  { 
    id: "react", 
    label: "React", 
    detail: "I learned React while building the real-time frontend for my chat application and other interactive dashboards. It helped me understand component-based design, state handling, and creating fast, fluid interfaces that users enjoy." 
  },
  { 
    id: "rest", 
    label: "REST APIs", 
    detail: "I worked with REST APIs extensively while connecting my frontends to backend microservices and integrating external AI model endpoints. Building and consuming APIs taught me clean data flow, structured responses, and how to design scalable systems." 
  },
  { 
    id: "git", 
    label: "Git & GitHub", 
    detail: "I became comfortable with Git & GitHub while managing multiple full-stack projects simultaneously. Version control helped me maintain clean commit histories, handle branching strategies, and collaborate efficiently across evolving codebases." 
  }
];


const languages = [
  { 
    id: "bengali", 
    name: "Bengali", 
    level: "Native", 
    detail: "Bengali is the language I grew up with — the one that shaped my voice, my humor, and the way I naturally express myself. It’s also where my love for art began, deeply inspired by Rabindranath Tagore’s writings that still guide the way I feel and create." 
  },
  { 
    id: "english", 
    name: "English", 
    level: "Fluent", 
    detail: "English became my primary academic and professional language, but also the medium where I discovered my love for poetry. It helps me express emotions with clarity and rhythm, making it a space where both my creativity and communication thrive." 
  },
  { 
    id: "hindi", 
    name: "Hindi", 
    level: "Fluent", 
    detail: "Hindi has always been a natural part of my day-to-day life, helping me connect easily with people from different backgrounds. Its warmth and informality make conversations feel lively, familiar, and effortlessly expressive." 
  },
  { 
    id: "tamil", 
    name: "Tamil", 
    level: "Intermediate", 
    detail: "I picked up Tamil while living and studying in Tamil Nadu, learning it through real conversations and cultural experiences. I may not be perfect, but I understand enough to feel connected to the environment and the people around me." 
  },
  { 
    id: "german", 
    name: "German", 
    level: "Basic", 
    detail: "German started as a compulsory course in my 2nd semester, but I ended up genuinely enjoying the language. I’ve kept in touch with it ever since, slowly building a foundation I plan to strengthen overtime." 
  }
];


function SkillsLanguagesPage() {
  const [openPanel, setOpenPanel] = useState(null);
  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [selectedLangId, setSelectedLangId] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel((prev) => (prev === panel ? null : panel));
    if (panel !== "skills") setSelectedSkillId(null);
    if (panel !== "languages") setSelectedLangId(null);
  };

  const selectedSkill = skills.find((s) => s.id === selectedSkillId) || null;
  const selectedLang = languages.find((l) => l.id === selectedLangId) || null;

  return (
    <section className="skills-lang-page">
      <header className="skills-lang-header">
        <h2>Skills & Languages</h2>
        <div className="xp-underline" />
        <p>Choose a category, then click a specific item to see how it impacts me.</p>
      </header>

      <div className="chooser-row">
        <div
          className={`chooser-card ${
            openPanel === "skills" ? "chooser-active" : ""
          }`}
          onClick={() => togglePanel("skills")}
        >
          <h3>Technical Skills</h3>
          <p>Technologies, tools, and frameworks used in projects.</p>
        </div>

        <div
          className={`chooser-card ${
            openPanel === "languages" ? "chooser-active" : ""
          }`}
          onClick={() => togglePanel("languages")}
        >
          <h3>Languages</h3>
          <p>Spoken languages and proficiency levels.</p>
        </div>
      </div>

      <div className="panel-area">
        {openPanel === "skills" && (
          <>
            <div className="panel panel-skills">
              <h4>Technical Skills</h4>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <button
                    key={skill.id}
                    className={`skill-pill ${
                      selectedSkillId === skill.id ? "pill-active" : ""
                    }`}
                    onClick={() =>
                      setSelectedSkillId((prev) =>
                        prev === skill.id ? null : skill.id
                      )
                    }
                  >
                    🎓 {skill.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedSkill && (
              <div className="detail-panel">
                <h5>{selectedSkill.label}</h5>
                <p>{selectedSkill.detail}</p>
              </div>
            )}
          </>
        )}

        {openPanel === "languages" && (
          <>
            <div className="panel panel-languages">
              <h4>Languages</h4>
              <div className="lang-modern-grid">
                {languages.map((lang) => (
                  <button
                    key={lang.id}
                    className={`lang-card ${
                      selectedLangId === lang.id ? "pill-active" : ""
                    }`}
                    onClick={() =>
                      setSelectedLangId((prev) =>
                        prev === lang.id ? null : lang.id
                      )
                    }
                  >
                    <div className="lang-card-main">
                      <span className="lang-dot" />
                      <span className="lang-name">{lang.name}</span>
                    </div>
                    <span className="lang-chip">{lang.level}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedLang && (
              <div className="detail-panel">
                <h5>{selectedLang.name}</h5>
                <p>{selectedLang.detail}</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default SkillsLanguagesPage;
