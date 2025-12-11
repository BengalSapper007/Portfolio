import React, { useState } from "react";
import "./Journey.css";

const experiences = [
  {
    id: "xp-1",
    org: "Shotokan Karate Do Association",
    role: "Coach",
    type: "Part-Time",
    period: "6/2023 - 1/2025",
    location: "Chennai, Tamil Nadu, India",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765468356/image_2025-12-11_212234589_aseclj.png",
    detail:
      "My journey as a coach began on the dojo floor—helping students refine their kata, pushing them through kumite drills, and guiding them with the same discipline I grew up learning. I worked with children and young adults, mentoring them through grading exams and the pressure of tournaments. Over time, I wasn’t just teaching techniques; I was helping them build confidence, focus, and resilience. This experience shaped my leadership style, teaching me how to connect, motivate, and bring out the best in every student."
  },
  {
    id: "xp-2",
    org: "Esaan Silambalaya",
    role: "Assistant Coach",
    type: "Part-Time",
    period: "1/2024 - Present",
    location: "Chennai, Tamil Nadu, India",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765468437/image_2025-12-11_212355698_uosi1i.png",
    detail:
      "Training at a Silambam academy gave me a completely different rhythm—rooted in tradition, movement, and precision. As an assistant coach, I helped students understand the flow of weapon handling, the patience behind every stance, and the discipline that this centuries-old martial art demands. Guiding students through sparring sessions, basics, and competition preparation taught me how to balance firmness with encouragement. Managing this role alongside academics strengthened my consistency, time management, and the satisfaction of watching students grow with every session."
  },
  {
  id: "xp-3",
  org: "Wipro",
  role: "Software Engineer",
  type: "Internship",
  period: "6/2025 - 7/2025",
  location: "Chennai, Tamil Nadu, India",
  logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765468255/image_2025-12-11_212053879_nqbixz.png",
  detail:
    "This internship is where I built my foundation in Java development—starting with simple command-line programs and gradually moving into monolithic applications before stepping into the world of full-fledged microservices. Working with real engineering teams, I learned how to structure services, debug production-level issues, and follow clean coding practices. Exposure to agile workflows, code reviews, and collaborative development gave me a strong understanding of how enterprise-level software is built, tested, and deployed."
  }
];


const projects = [
  {
    id: "pr-1",
    title: "Online Threat Identification System",
    summary: "Browser extension for detecting hate and harmful content.",
    detail:
      "Takes highlighted or typed text and classifies it as Positive, Neutral, or Hate using a trained model and confidence score. Focus on online safety, moderation workflows, and packaging ML into a usable extension.",
  },
  {
    id: "pr-2",
    title: "MoodScrybe – Emotion Detector",
    summary: "NLP pipeline that tags messages with one of six emotions.",
    detail:
      "Uses NLTK preprocessing, TF‑IDF features, and classic ML models. Logistic Regression reached around 90% validation accuracy on a 10k+ dataset, designed for emotion-aware assistants and analytics dashboards.",
  },
];

const education = [
  {
    id: "ed-1",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765470737/image_2025-12-11_220216014_iehvhc.png",
    institution: "SRM IST Chennai",
    level: "Bachelor of Technology - BTech",
    period: "2023 - 2027",
    detail:
      "B.Tech Computer Engineering with Cyber Security specialization: secure systems, networks, threat modelling, and applied research.",
  },
  {
    id: "ed-2",
    logo: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765470631/image_2025-12-11_220028152_ttdktj.png",
    institution: "Bala Vidya Mandir",
    level: "High School",
    period: "2018 - 2023",
    detail:
      "Higher secondary with a focus on science and mathematics, alongside national‑level martial arts and co‑curricular activities.",
  },
];


function Journey() {
  const [openSection, setOpenSection] = useState(null);
  const [selectedXpId, setSelectedXpId] = useState(null);
  const [selectedPrId, setSelectedPrId] = useState(null);
  const [selectedEdId, setSelectedEdId] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
    if (key !== "experience") setSelectedXpId(null);
    if (key !== "projects") setSelectedPrId(null);
    if (key !== "education") setSelectedEdId(null);
  };

  const selectedXp = experiences.find((x) => x.id === selectedXpId) || null;
  const selectedPr = projects.find((p) => p.id === selectedPrId) || null;
  const selectedEd = education.find((e) => e.id === selectedEdId) || null;

  return (
    <section className="journey-page">
      <header className="journey-header">
        <h2>Journey So Far</h2>
        <div className="journey-underline" />
        <p>
          Three pillars of the story so far – experience, projects, and
          education. Tap through to see what each one really meant.
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
          <p>Coaching, internships, and hands‑on work.</p>
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
          <>
            <section className="panel-shell">
              <div className="panel-header">
                <h4>Experience</h4>
                <p>Click a role to see how it shaped skills and mindset.</p>
              </div>
              <div className="xp-list">
                {experiences.map((item) => (
                  <button
                    key={item.id}
                    className={`xp-chip ${
                      selectedXpId === item.id ? "chip-active" : ""
                    }`}
                    onClick={() =>
                      setSelectedXpId((prev) =>
                        prev === item.id ? null : item.id
                      )
                    }
                  >
                    <div className="xp-chip-main">
                      <img
                        src={item.logo}
                        alt={item.org}
                        className="xp-chip-logo"
                      />
                      <div>
                        <h5>{item.org}</h5>
                        <p>{item.role}</p>
                      </div>
                    </div>
                    <span className="xp-chip-meta">
                      {item.period} · {item.location}
                    </span>
                    <span className="xp-chip-pill">{item.type}</span>
                  </button>
                ))}
              </div>
            </section>

            {selectedXp && (
              <div className="detail-panel">
                <h5>{selectedXp.org}</h5>
                <p>{selectedXp.detail}</p>
              </div>
            )}
          </>
        )}

        {openSection === "projects" && (
          <>
            <section className="panel-shell">
              <div className="panel-header">
                <h4>Projects</h4>
                <p>Click a project to reveal what runs under the hood.</p>
              </div>
              <div className="proj-list">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    className={`proj-chip ${
                      selectedPrId === project.id ? "chip-active" : ""
                    }`}
                    onClick={() =>
                      setSelectedPrId((prev) =>
                        prev === project.id ? null : project.id
                      )
                    }
                  >
                    <h5>{project.title}</h5>
                    <p>{project.summary}</p>
                  </button>
                ))}
              </div>
            </section>

            {selectedPr && (
              <div className="detail-panel">
                <h5>{selectedPr.title}</h5>
                <p>{selectedPr.detail}</p>
              </div>
            )}
          </>
        )}

        {openSection === "education" && (
          <>
            <section className="panel-shell">
              <div className="panel-header">
                <h4>Education</h4>
                <p>Click an institution to see the focus and takeaways.</p>
              </div>
              <div className="edu-list">
                {education.map((item) => (
                  <button
                    key={item.id}
                    className={`edu-chip ${
                      selectedEdId === item.id ? "chip-active" : ""
                    }`}
                    onClick={() =>
                      setSelectedEdId((prev) =>
                        prev === item.id ? null : item.id
                      )
                    }
                  >
                    <div className="edu-chip-badge">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="edu-chip-logo"
                      />
                    </div>
                    <div className="edu-chip-main">
                      <h5>{item.institution}</h5>
                      <p>{item.level}</p>
                      <span>{item.period}</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {selectedEd && (
              <div className="detail-panel">
                <h5>{selectedEd.institution}</h5>
                <p>{selectedEd.detail}</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Journey;
