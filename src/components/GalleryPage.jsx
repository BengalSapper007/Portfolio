import React, { useRef, useState } from "react";
import "./GalleryPage.css";
import { ImageZoom, Image } from "./animate-ui/primitives/effects/image-zoom";
import ScrollToTop from "./ScrollToTop";
import { AnimatePresence, motion } from "motion/react";

const galleryItems = [
  {
    id: 1,
    title: "National Level Karateka",
    img: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765387356/image_2025-12-10_221855277_r8p4mk.png",
    description:
      "I am a two-time national-level gold medallist in karate, with extensive experience of 16+ years competing and excelling at both national and regional tournaments. Building on my competitive background, I am dedicated to teaching and mentoring children, imparting foundational skills and discipline in martial arts. Alongside my coaching services, I continually challenge myself by participating in state-level and district-level competitions, consistently maintaining a strong presence on the podium. My dual role as an athlete and coach allows me to foster the next generation of martial artists while advancing my own expertise within the sport.",
  },
  {
    id: 2,
    title: "Silambam Instructor",
    img: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765387617/image_2025-12-10_222318404_mcwo9a.png",
    description:
      "I have actively competed in Silambam for over two years, participating in various state and district level tournaments and achieving consistent performance. Alongside my competitive experience, I provide coaching and training to students, helping them develop fundamental skills and an appreciation for this traditional martial art. My dual role as both competitor and coach allows me to contribute to the growth and preservation of Silambam while continuously enhancing my own expertise.",
  },
  {
    id: 3,
    title: "Fire Performer",
    img: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765459492/image_2025-12-11_185444436_jb1kuj.png",
    description:
      "Beside my academic pursuits and other activities, I have developed expertise in fire performance arts, delivering skillful and precise presentations. This discipline enhances my overall performance abilities and contributes a unique dimension to my artistic profile. My approach balances creativity with a strong commitment to safety and professionalism, engaging audiences effectively across various settings.",
  },
  {
    id: 4,
    title: "Karate Referee",
    img: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765387732/image_2025-12-10_222512875_hxpjg8.png",
    description:
      "Leveraging my extensive experience and knowledge in karate, I am a certified referee actively officiating at various state and district level tournaments. My role as a referee reflects my commitment to upholding the standards and fairness of the sport, ensuring competitions are conducted with integrity and professionalism.",
  },
  {
    id: 5,
    title: "Published Author",
    img: "https://res.cloudinary.com/dpqbuo3tv/image/upload/v1765459621/image_2025-12-11_185656775_szcnih.png",
    description: [
      "I am celebrating the publication of my first poetry book, Seasons Within, a work that embodies my passion for creative writing and personal expression. This collection draws deeply from lived experiences and moments of introspection, marking a meaningful milestone in my artistic journey.",
      "Through Seasons Within, I bring forth a tapestry of emotions and reflections, showcasing my commitment to crafting resonant poetic narratives.",
      "The book adds a rich literary dimension to my growing portfolio and stands as a testament to the creative path I continue to explore.",
      <span key="links">
        Ebook: <a href="https://ebooks.bookleafpub.com/product-page/seasons-within" target="_blank" rel="noopener noreferrer">Link</a><br />
        Paperback: <a href="https://www.amazon.in/Seasons-Within-Journey-Through-Time/dp/B0G3QLV18B/ref=sr_1_1?sr=8-1" target="_blank" rel="noopener noreferrer">Amazon</a>
      </span>,
    ],
  },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null);
  const detailRef = useRef(null);

  const selectedItem = galleryItems.find((item) => item.id === selectedId) ?? null;

  const handleSelect = (id) => {
    const nextId = selectedId === id ? null : id;
    setSelectedId(nextId);
  };


  return (
    <section className="gal" id="gallery">
      <ScrollToTop />
      <header className="gal-header">
        <h2>Gallery</h2>
        <div className="gal-underline" />
        <p>Click any card to read the full story below.</p>
      </header>
      <div className="gal-grid">
        {galleryItems.map((item) => {
          const isActive = selectedId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`gal-mini-card ${isActive ? "gal-mini-active" : ""}`}
              onClick={() => handleSelect(item.id)}
              aria-pressed={isActive}
              aria-label={`Select ${item.title}`}
            >
              <div className="gal-mini-thumb">
                <img
                  src={item.img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              </div>
              <span className="gal-mini-title">{item.title}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.article
            className="gal-detail"
            ref={detailRef}
            key={selectedItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="gal-detail-img">
              <ImageZoom>
                <Image
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="detail-img"
                  objectFit="contain"
                />
              </ImageZoom>
            </div>

            <div className="gal-detail-text">
              <h3>{selectedItem.title}</h3>

              <div className="gallery-description">
                {Array.isArray(selectedItem.description) ? (
                  selectedItem.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{selectedItem.description}</p>
                )}
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
}