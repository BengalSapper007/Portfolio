import React, { useEffect, useRef } from "react";
import "./Cursor.css";
import { isEggUsed } from "./easterEggState";
import { showWhoamiHint } from "./hintBus";

const TRAIL_COUNT = 8;

function Cursor() {
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = dotsRef.current;

    const positions = Array.from({ length: TRAIL_COUNT }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastMoveTime = Date.now();
    let hintTriggeredThisIdle = false;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveTime = Date.now();
      hintTriggeredThisIdle = false;
    };

    const animate = () => {
      const now = Date.now();

      if (!isEggUsed() && now - lastMoveTime > 4000) {
        const logoEl = document.querySelector("[data-logo-anchor]");
        if (logoEl) {
          const rect = logoEl.getBoundingClientRect();
          const targetX = rect.left + rect.width / 2;
          const targetY = rect.top + rect.height / 2;
          mouseX += (targetX - mouseX) * 0.03;
          mouseY += (targetY - mouseY) * 0.03;
        }
      }

      positions[0].x += (mouseX - positions[0].x) * 0.25;
      positions[0].y += (mouseY - positions[0].y) * 0.25;

      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.25;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.25;
      }

      positions.forEach((pos, i) => {
        const dot = dots[i];
        if (dot) {
          dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        }
      });

      const logoEl = document.querySelector("[data-logo-anchor]");
      if (!isEggUsed() && logoEl) {
        const rect = logoEl.getBoundingClientRect();
        const p = positions[0];
        if (
          !hintTriggeredThisIdle &&
          p.x > rect.left &&
          p.x < rect.right &&
          p.y > rect.top &&
          p.y < rect.bottom
        ) {
          hintTriggeredThisIdle = true;
          showWhoamiHint();
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div className="trail-dot trail-main" />
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          className="trail-dot trail-ghost"
          ref={(el) => (dotsRef.current[i] = el)}
        />
      ))}
    </>
  );
}

export default Cursor;
