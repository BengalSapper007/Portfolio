import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-photo">
          <div className="home-hero-ring" />
          <img
            src="https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765459309/WhatsApp_Image_2025-12-03_at_00.11.39_1d5a7d74_ab9hpl.jpg"
            alt="Pinak Mukherjee performing fire act"
          />
        </div>

        <div className="home-hero-text">
          <span className="home-tag">Cybersecurity · Backend · Coaching</span>
          <h1>Pinak Mukherjee</h1>
          <p className="home-sub">
            Building secure, impact‑driven systems while coaching the next
            generation on and off the mat.
          </p>

          <div className="home-hero-actions">
            <button
              className="home-btn primary"
              onClick={() => navigate("/journey")}
            >
              View journey
            </button>
            <button
              className="home-btn ghost"
              onClick={() => navigate("/journey")}
            >
              See projects
            </button>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <article className="stat-card">
          <p className="stat-label">Years in martial arts</p>
          <p className="stat-value">16+</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Core stack</p>
          <p className="stat-value">Java · Spring Boot · MySQL</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Focus areas</p>
          <p className="stat-value">Cybersecurity · Healthcare tech</p>
        </article>
        <article className="stat-card">
          <p className="stat-label">Availability</p>
          <p className="stat-value">Open to collabs</p>
        </article>
      </section>

      {/* BENTO PREVIEW GRID */}
      <section className="home-bento">
        <header className="home-bento-head">
          <h2>Explore the portfolio</h2>
          <p>
            Jump into experience, projects, and the gallery to see how code,
            coaching, and creativity intersect.
          </p>
        </header>

        <div className="home-bento-grid">
          <article
            className="bento-tile bento-journey"
            onClick={() => navigate("/journey")}
          >
            <div className="bento-label">01 · Journey</div>
            <h3>Experience & Education</h3>
            <p>
              Coaching, internships, and academia woven into a single timeline.
            </p>
            <span className="bento-link">View journey →</span>
          </article>

          <article
            className="bento-tile bento-projects"
            onClick={() => navigate("/journey")}
          >
            <div className="bento-label">02 · Projects</div>
            <h3>Featured: MoodScrybe</h3>
            <p>
              NLP + ML pipeline reading emotion from text, designed for
              emotion‑aware assistants.
            </p>
            <span className="bento-link">See projects →</span>
          </article>

          <article
            className="bento-tile bento-gallery"
            onClick={() => navigate("/gallery")}
          >
            <div className="bento-label">03 · Beyond code</div>
            <h3>Martial arts, fire & words</h3>
            <p>
              National‑level karate, Silambam, fire performances, and a
              published poetry collection.
            </p>
            <span className="bento-link">Open gallery →</span>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
