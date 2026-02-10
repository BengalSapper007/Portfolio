import React, { useEffect, useRef } from "react";
import "./Cursor.css";
import { isEggUsed } from "./easterEggState";
import { showWhoamiHint } from "./hintBus";

// ────────────────────────────────────────────────
//  TUNABLE PARAMETERS – change these to adjust feel
// ────────────────────────────────────────────────
const LEADER_SENSITIVITY   = 0.65;   // 0.35–0.65   higher = snappier main dot
const TRAIL_SENSITIVITY    = 0.22;   // 0.20–0.45   lower = more trailing effect
const TRAIL_COUNT          = 8      // number of ghost dots
const IDLE_PULL_SPEED      = 0.03;   // how fast it returns to logo when idle
const IDLE_TIMEOUT_MS      = 4000;   // ms before idle behavior starts
// ────────────────────────────────────────────────

function Cursor() {
  const dotsRef = useRef([]);

  useEffect(() => {
    const dots = dotsRef.current;

    const positions = Array.from({ length: TRAIL_COUNT }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let lastMoveTime = Date.now();
    let hintTriggeredThisIdle = false;

    const handleMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      lastMoveTime = Date.now();
      hintTriggeredThisIdle = false;
    };

    const animate = () => {
      const now = Date.now();

      // Idle behavior: slowly move toward logo
      if (!isEggUsed() && now - lastMoveTime > IDLE_TIMEOUT_MS) {
        const logoEl = document.querySelector("[data-logo-anchor]");
        if (logoEl) {
          const rect = logoEl.getBoundingClientRect();
          const logoCenterX = rect.left + rect.width / 2;
          const logoCenterY = rect.top + rect.height / 2;

          targetX += (logoCenterX - targetX) * IDLE_PULL_SPEED;
          targetY += (logoCenterY - targetY) * IDLE_PULL_SPEED;
        }
      }

      // Leader dot chases mouse/target quickly
      positions[0].x += (targetX - positions[0].x) * LEADER_SENSITIVITY;
      positions[0].y += (targetY - positions[0].y) * LEADER_SENSITIVITY;

      // Trail dots follow the previous one more slowly
      for (let i = 1; i < TRAIL_COUNT; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * TRAIL_SENSITIVITY;
        positions[i].y += (positions[i - 1].y - positions[i].y) * TRAIL_SENSITIVITY;
      }

      // Apply positions to DOM elements
      positions.forEach((pos, i) => {
        const dot = dots[i];
        if (dot) {
          dot.style.transform = `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`;
          // -4px offset assumes your dot is ~8×8px – adjust if needed
        }
      });

      // Hint logic when leader dot is over logo
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
      {/* Main visible dot – usually styled bigger/brighter in CSS */}
      <div className="trail-dot trail-main" />

      {/* Ghost trail dots */}
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