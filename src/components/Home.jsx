import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { ImageZoom, Image } from "./animate-ui/primitives/effects/image-zoom";
import { motion } from "motion/react";

function Home() {
  const navigate = useNavigate();

  // Animation Variants
  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const bentoContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const bentoItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="home">
      {/* HERO */}
      <section className="home-hero">
        <div className="home-hero-photo">
          <div className="home-hero-ring" />
          <ImageZoom>
            <Image
              src="https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765459309/WhatsApp_Image_2025-12-03_at_00.11.39_1d5a7d74_ab9hpl.jpg"
              alt="Pinak Mukherjee performing fire act"
            />
          </ImageZoom>
        </div>

        <motion.div
          className="home-hero-text"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span className="home-tag" variants={heroItem}>
            Cybersecurity · Backend · Coaching
          </motion.span>
          <motion.h1 variants={heroItem}>Pinak Mukherjee</motion.h1>
          <motion.p className="home-sub" variants={heroItem}>
            Building secure, impact‑driven systems while coaching the next
            generation on and off the mat.
          </motion.p>

          <motion.div className="home-hero-actions" variants={heroItem}>
            <motion.button
              className="home-btn primary cursor-target"
              onClick={() => navigate("/journey")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View journey
            </motion.button>
            <motion.button
              className="home-btn ghost cursor-target"
              onClick={() => navigate("/journey")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See projects
            </motion.button>
          </motion.div>
        </motion.div>
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

        <motion.div
          className="home-bento-grid cursor-target"
          variants={bentoContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.article
            className="bento-tile bento-journey"
            onClick={() => navigate("/journey")}
            variants={bentoItem}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bento-label">01 · Journey</div>
            <h3>Experience & Education</h3>
            <p>
              Coaching, internships, and academia woven into a single timeline.
            </p>
            <span className="bento-link">View journey →</span>
          </motion.article>

          <motion.article
            className="bento-tile bento-projects"
            onClick={() => navigate("/journey")}
            variants={bentoItem}
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bento-label">02 · Projects</div>
            <h3>Featured: MoodScrybe</h3>
            <p>
              NLP + ML pipeline reading emotion from text, designed for
              emotion‑aware assistants.
            </p>
            <span className="bento-link">See projects →</span>
          </motion.article>

          <motion.article
            className="bento-tile bento-gallery"
            onClick={() => navigate("/gallery")}
            variants={bentoItem}
            whileHover={{ scale: 1.02, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bento-label">03 · Beyond code</div>
            <h3>Martial arts, fire & words</h3>
            <p>
              National‑level karate, Silambam, fire performances, and a
              published poetry collection.
            </p>
            <span className="bento-link">Open gallery →</span>
          </motion.article>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;
