import React from "react";
import "./About.css";
import { ImageZoom , Image } from "./animate-ui/primitives/effects/image-zoom";

function About() {
  return (
    <div className="aboutPage">
      <section className="aboutHero">
        <div className="aboutHero-photo">
          <div className="aboutHero-ring" />
          <ImageZoom>
            <Image
              src="https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765459177/Gemini_Generated_Image_psbge9psbge9psbg_bogfg5.png"
              alt="Pinak Mukherjee"
            />
          </ImageZoom>
        </div>

        <div className="aboutHero-text">
          <span className="aboutHero-tag">Open to work</span>
          <h1 className="aboutHero-name">Pinak Mukherjee</h1>
          <p className="aboutHero-sub">
            B.Tech CSE (Cybersecurity), SRM University · Ex‑Intern at Wipro
          </p>
          <p className="aboutHero-line">
            Cybersecurity, backend systems, and impact‑driven tech, grounded in
            16+ years of martial arts discipline and creative work.
          </p>
        </div>
      </section>

      <section className="aboutBody">
        <header className="aboutBody-head">
          <h2>About Me</h2>
          <div className="aboutBody-underline" />
          <p>
            A quick snapshot of the mix of security, systems, teaching, and
            performance that shapes how problems get solved.
          </p>
        </header>

        <article className="aboutBody-card">
          <h3>Professional Summary</h3>
          <p>
            Cybersecurity‑focused 3rd‑year B.Tech student working across secure
            systems, backend services, and applied research. Day‑to‑day work
            revolves around Java, Spring Boot, and MySQL, with growing depth in
            healthcare technology, threat analysis, and security auditing.
          </p>
          <p>
            Outside the terminal, long‑term martial arts training, Silambam
            coaching, fire performance, and poetry add structure, resilience,
            and storytelling to how projects are designed and led.
          </p>
        </article>
      </section>
    </div>
  );
}

export default About;
