import React from "react";
import "./Contact.css";

// Import the PreviewLinkCard parts
// Adjust path if your shadcn alias is different (e.g. @/components/ui/...)
import {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardPortal,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
} from "@/components/animate-ui/primitives/radix/preview-link-card";

function Contacts() {
  return (
    <section className="contact-page" id="contact">
      <header className="contact-top">
        <p className="contact-kicker">Reach out</p>
        <h2>Let’s Build Something</h2>
        <p className="contact-lead">
          Security, systems, coaching, or something completely unexpected – a
          good message always gets a reply.
        </p>
      </header>

      <div className="contact-stack">
        <article className="contact-panel contact-panel-main">
          <h3>Primary Channels</h3>

          <div className="channel-row">
            <div className="channel-label">Email</div>
            <a
              href="mailto:pmukherjee1062@gmail.com"
              className="channel-value"
            >
              pmukherjee1062@gmail.com
            </a>
          </div>

          <div className="channel-row">
            <div className="channel-label">Phone</div>
            <a href="tel:+918961948418" className="channel-value">
              +91 89619 48418
            </a>
          </div>

          <div className="channel-row">
            <div className="channel-label">Base</div>
            <span className="channel-value">Chennai, Tamil Nadu, India</span>
          </div>
        </article>

        <article className="contact-panel contact-panel-social">
          <h3>Social Links</h3>
          <p className="contact-note">
            Best for ongoing work, opportunities, and sharing builds.
          </p>

          {/* GitHub with preview */}
          <div className="social-row">
            <span className="social-tag">GitHub</span>
            <PreviewLinkCard href="https://github.com/BengalSapper007">
              <PreviewLinkCardTrigger>
                github.com/BengalSapper007
              </PreviewLinkCardTrigger>
              <PreviewLinkCardPortal>
                <PreviewLinkCardContent
                className="z-[99999] !important">
                  <PreviewLinkCardImage alt="GitHub profile preview" />
                </PreviewLinkCardContent>
              </PreviewLinkCardPortal>
            </PreviewLinkCard>
          </div>

          {/* LinkedIn with preview */}
          <div className="social-row">
            <span className="social-tag">LinkedIn</span>
            <PreviewLinkCard href="https://www.linkedin.com/in/pinak-mukherjee-06799a284/">
              <PreviewLinkCardTrigger>
                linkedin.com/in/pinak-mukherjee
              </PreviewLinkCardTrigger>
              <PreviewLinkCardPortal>
                <PreviewLinkCardContent
                className="z-[99999] !important">
                  <PreviewLinkCardImage
                  src="https://res.cloudinary.com/dpqbuo3tv/image/upload/v1770703497/Screenshot_2026-02-10_113108_wtxrec.png"
                  alt="LinkedIn profile preview" />
                </PreviewLinkCardContent>
              </PreviewLinkCardPortal>
            </PreviewLinkCard>
          </div>

          {/* Instagram with preview */}
          <div className="social-row">
            <span className="social-tag">Instagram</span>
            <PreviewLinkCard href="https://www.instagram.com/p_i_n_a_k_007">
              <PreviewLinkCardTrigger>
                @p_i_n_a_k_007
              </PreviewLinkCardTrigger>
              <PreviewLinkCardPortal>
                <PreviewLinkCardContent
                className="z-[99999] !important">
                  <PreviewLinkCardImage 
                  src="https://res.cloudinary.com/dpqbuo3tv/image/upload/v1770703558/Screenshot_2026-02-10_113039_stiz0x.png"
                  alt="Instagram profile preview" 
                  className="w-full object-cover rounded-md"  // ← key fix
                  />
                </PreviewLinkCardContent>
              </PreviewLinkCardPortal>
            </PreviewLinkCard>
          </div>
        </article>

        <article className="contact-panel contact-panel-cta">
          <h3>What to Reach Out For</h3>

          <div className="cta-chips">
            <span className="cta-chip">Security & backend</span>
            <span className="cta-chip">Healthcare / impact systems</span>
            <span className="cta-chip">Martial arts coaching & refereeing</span>
            <span className="cta-chip">Creative collabs</span>
          </div>

          <p className="cta-foot">
            Typically replies arrive within 24 hours on weekdays. For anything
            time‑critical, a call or text works best.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Contacts;