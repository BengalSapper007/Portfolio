import React, { useState } from "react";
import "./Journey.css";
import { ScrollProgressContainer , ScrollProgress } from "./animate-ui/primitives/animate/scroll-progress";

/* =======================
   DATA
======================= */

const experiences = [
  {
    id: "xp-1",
    title: "Coach · Shotokan Karate Do Association",
    subtitle: "6/2023 – 1/2025 · Part-Time",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765468356/image_2025-12-11_212234589_aseclj.png",
    detailTitle: "WHAT I DID",
    detail: [
      "Guided students through kata refinement and high-intensity kumite drills.",
      "Mentored children and young adults for grading exams and national tournaments.",
      "Cultivated confidence and resilience through traditional martial arts discipline."
    ],
    metaTitle: "Location",
    meta: ["Chennai, Tamil Nadu, India"]
  },
  {
    id: "xp-2",
    title: "Assistant Coach · Esaan Silambalaya",
    subtitle: "1/2024 – Present · Part-Time",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765468437/image_2025-12-11_212355698_uosi1i.png",
    detailTitle: "WHAT I DID",
    detail: [
      "Instructed weapon handling and precise stances in traditional Silambam.",
      "Managed student sparring and competition preparation."
    ],
    metaTitle: "Location",
    meta: ["Chennai, Tamil Nadu, India"]
  },
  {
    id: "xp-3",
    title: "Software Engineer Intern · Wipro",
    subtitle: "6/2025 – 7/2025 · Internship",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765468255/image_2025-12-11_212053879_nqbixz.png",
    detailTitle: "WHAT I DID",
    detail: [
      "Developed monolithic and microservices-based Java applications.",
      "Collaborated with engineers to debug production issues."
    ],
    metaTitle: "Location",
    meta: ["Chennai, Tamil Nadu, India"]
  }
];

const projects = [
  {
    id: "pr-1",
    title: "Online Threat Identification System",
    summary: "Browser extension for detecting hate and harmful content.",
    detail: [
      "Classifies text as Positive, Neutral, or Hate using trained models.",
      "Focuses on online safety and moderation workflows.",
      "Packaged as a lightweight, usable browser extension."
    ],
    tech: [
      "Built with Python, NLP, TF-IDF, and Logistic Regression.",
      "Processed 10k+ labeled samples with 90.75% accuracy.",
      "Future implementation: Emotion-aware chat assistants."
    ]
  },
  {
    id: "pr-2",
    title: "MoodScrybe – Emotion Detector",
    summary: "NLP pipeline that tags messages with one of six emotions.",
    detail: [
      "Uses NLTK preprocessing and TF-IDF features.",
      "Achieved ~90% validation accuracy on a 10k+ dataset.",
      "Designed for integration with analytics dashboards."
    ],
    tech: [
      "Logistic Regression and classic ML models.",
      "End-to-end NLP pipeline for emotion tagging."
    ]
  },
  {
  id: "pr-3",
  title: "Research Assistant — AI-Powered Browser Extension",
  summary:
    "AI-powered browser extension for real-time research summarization and intelligent note-taking.",
  detail: [
    "Built an AI-powered browser extension to assist users with real-time summarization while browsing web content.",
    "Developed a Spring Boot backend to process webpage context and interact with Gemini LLM APIs.",
    "Engineered intelligent prompts to generate concise, technical, and study-ready research notes.",
    "Designed a sidebar-based extension UI for creating, editing, and saving research notes without leaving the webpage.",
    "Enabled seamless communication between content scripts, background services, and backend REST APIs.",
    "Applied layered architecture (Controller → Service → Repository) for clean and maintainable backend code.",
    "Planned enhancements include structured note schemas, Markdown/PDF export, research history tracking, and AI microservice separation."
  ],
  tech: [
    "Spring Boot, Java, REST APIs",
    "Gemini API (LLM Integration)",
    "Chrome Extension APIs",
    "JWT Authentication",
    "Layered Backend Architecture"
  ]
},
{
  id: "pr-4",
  title: "FitMind — AI-Driven Fitness Recommendation System",
  summary:
    "AI-driven backend system for personalized fitness recommendations using health data.",
  detail: [
    "Built a Spring Boot backend for logging daily health metrics including steps, calories, hydration, and workout duration.",
    "Engineered an AI recommendation engine using LLM APIs to generate personalized fitness guidance.",
    "Implemented JWT-based authentication and role-based access control for security and data protection.",
    "Used MySQL for structured user and health data storage.",
    "Used MongoDB for unstructured recommendation logs and analytical insights.",
    "Applied layered architecture (Controller → Service → Repository) for clean backend separation.",
    "Planned enhancements include Docker deployment, Redis caching, and ML inference as a separate microservice."
  ],
  tech: [
    "Spring Boot, Spring Security, Java",
    "REST APIs, JWT Authentication",
    "MySQL & MongoDB",
    "LLM-based Recommendation Engine",
    "Layered Backend Architecture"
  ]
},
{
  id: "pr-5",
  title: "CodeSync — Real-Time Collaborative Online IDE",
  summary:
    "Real-time collaborative online IDE with live multi-user code editing and execution.",
  detail: [
    "Built a real-time collaborative code editor supporting multi-user live editing using WebSockets.",
    "Implemented persistent, room-based collaboration with password-protected access and ownership controls.",
    "Developed a VS Code–style file explorer with real-time file and folder synchronization.",
    "Added multi-cursor support, user presence indicators, and in-room chat features.",
    "Enabled in-browser execution for JavaScript and TypeScript with safe fallback handling for other languages.",
    "Implemented secure session-based authentication and protected editor routes."
  ],
  tech: [
    "Vite, React, Tailwind CSS",
    "WebSockets & Real-Time Synchronization",
    "Node.js Backend",
    "Database-Backed Authentication",
    "In-Browser Code Execution"
  ]
}
];

const education = [
  {
    id: "ed-1",
    title: "SRM IST Chennai",
    subtitle: "B.Tech Computer Engineering · 2023 – 2027",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765470737/image_2025-12-11_220216014_iehvhc.png",
    detailTitle: "FOCUS & LEARNING",
    detail: [
      "Secure systems, networks, and threat modelling.",
      "Hands-on exposure to applied cybersecurity research."
    ],
    metaTitle: "HIGHLIGHTS",
    meta: ["Cyber Security specialization", "Applied research"]
  },
  {
    id: "ed-2",
    title: "Bala Vidya Mandir",
    subtitle: "High School · 2018 – 2023",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765470631/image_2025-12-11_220028152_ttdktj.png",
    detailTitle: "FOCUS & LEARNING",
    detail: [
      "Strong foundation in science and mathematics.",
      "Active involvement in national-level martial arts."
    ],
    metaTitle: "HIGHLIGHTS",
    meta: ["Science stream", "Co-curricular excellence"]
  }
];

/* =======================
   COMPONENT
======================= */

function Journey() {
  const [openSection, setOpenSection] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [selectedPrId, setSelectedPrId] = useState(null);

  const toggleSection = (key) => {
    setOpenSection(prev => (prev === key ? null : key));
    setActiveId(null);
    setSelectedPrId(null);
  };

  const renderAccordion = (items, showLogo = false) =>
    items.map(item => (
      <React.Fragment key={item.id}>
        <button
          className={`proj-chip ${activeId === item.id ? "chip-active" : ""}`}
          onClick={() =>
            setActiveId(prev => (prev === item.id ? null : item.id))
          }
        >
          <div className="proj-chip-content">
            <h5>{item.title}</h5>
            <p>{item.subtitle}</p>
          </div>
          <span
            className={`accordion-arrow ${
              activeId === item.id ? "arrow-rotate" : ""
            }`}
          >
            ▾
          </span>
        </button>

        <div
          className={`accordion-wrapper ${
            activeId === item.id ? "is-open" : ""
          }`}
        >
          <div className="accordion-content">
            <div className="inline-detail-panel">

              {showLogo && item.logo && (
                <div className="accordion-brand">
                  <img src={item.logo} alt={item.title} />
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              )}

              <div className="detail-block">
                <div className="block-label">
                  <span className="detail-icon">💠</span>
                  <h6>{item.detailTitle}</h6>
                </div>
                <ul className="modern-list">
                  {item.detail.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {item.meta && (
                <div className="detail-block">
                  <div className="block-label">
                    <span className="detail-icon">💠</span>
                    <h6>{item.metaTitle}</h6>
                  </div>
                  <ul className="modern-list">
                    {item.meta.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </React.Fragment>
    ));

  return (
    <ScrollProgressContainer>
      <ScrollProgress />
    <section className="journey-page">
      <header className="journey-header">
        <h2>Journey So Far</h2>
        <div className="journey-underline" />
        <p>
          Three pillars of the story so far – experience, projects, and education.
        </p>
      </header>

      <div className="journey-chooser">
        <button
          className={`journey-card ${
            openSection === "experience" ? "journey-active" : ""
          }`}
          onClick={() => toggleSection("experience")}
        >
          <span className="journey-tag">01</span>
          <h3>Experience</h3>
          <p>Coaching, internships, and hands-on work.</p>
        </button>

        <button
          className={`journey-card ${
            openSection === "projects" ? "journey-active" : ""
          }`}
          onClick={() => toggleSection("projects")}
        >
          <span className="journey-tag">02</span>
          <h3>Projects</h3>
          <p>Systems, tools, and AI experiments.</p>
        </button>

        <button
          className={`journey-card ${
            openSection === "education" ? "journey-active" : ""
          }`}
          onClick={() => toggleSection("education")}
        >
          <span className="journey-tag">03</span>
          <h3>Education</h3>
          <p>Formal learning and qualifications.</p>
        </button>
      </div>

      <div className="journey-panels">
        {openSection === "experience" && (
          <section className="panel-shell">
            <div className="panel-header">
              <h4>Experience</h4>
              <p>Click a role to reveal how it shaped my skills and mindset.</p>
            </div>
            <div className="proj-list">{renderAccordion(experiences, true)}</div>
          </section>
        )}

        {openSection === "projects" && (
          <section className="panel-shell">
            <div className="panel-header">
              <h4>Projects</h4>
              <p>Click a project to reveal what runs under the hood.</p>
            </div>

            <div className="proj-list">
              {projects.map(project => (
                <React.Fragment key={project.id}>
                  <button
                    className={`proj-chip ${
                      selectedPrId === project.id ? "chip-active" : ""
                    }`}
                    onClick={() =>
                      setSelectedPrId(prev =>
                        prev === project.id ? null : project.id
                      )
                    }
                  >
                    <div className="proj-chip-content">
                      <h5>{project.title}</h5>
                      <p>{project.summary}</p>
                    </div>
                    <span
                      className={`accordion-arrow ${
                        selectedPrId === project.id ? "arrow-rotate" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    className={`accordion-wrapper ${
                      selectedPrId === project.id ? "is-open" : ""
                    }`}
                  >
                    <div className="accordion-content">
                      <div className="inline-detail-panel">
                        <div className="detail-block">
                          <div className="block-label">
                            <span className="detail-icon">💠</span>
                            <h6>OVERVIEW</h6>
                          </div>
                          <ul className="modern-list">
                            {project.detail.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="detail-block">
                          <div className="block-label">
                            <span className="detail-icon">💠</span>
                            <h6>TECH STACK</h6>
                          </div>
                          <ul className="modern-list">
                            {project.tech.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>
        )}

        {openSection === "education" && (
          <section className="panel-shell">
            <div className="panel-header">
              <h4>Education</h4>
              <p>Click an institution to see the focus and takeaways.</p>
            </div>
            <div className="proj-list">{renderAccordion(education, true)}</div>
          </section>
        )}
      </div>
    </section>
    </ScrollProgressContainer>
  );
}

export default Journey;
