import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./Home";
import About from "./About";
import SkillsLanguagesPage from "./SkillsLanguages";
import Journey from "./Journey";
import GalleryPage from "./GalleryPage";
import Contacts from "./Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillsLanguagesPage />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
