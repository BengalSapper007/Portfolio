import React from "react";
import "./AnimatedOrbs.css";

function AnimatedOrbs() {
  return (
    <div className="orbs-layer">
      <svg className="orb orb-1" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="orbGrad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9f43" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff75df" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#orbGrad1)" />
      </svg>

      <svg className="orb orb-2" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="orbGrad2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9a6bff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#020008" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#orbGrad2)" />
      </svg>

      <svg className="orb orb-3" viewBox="0 0 200 200">
        <defs>
          <radialGradient id="orbGrad3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff5c33" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#020008" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#orbGrad3)" />
      </svg>

      <svg className="orb orb-4" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="url(#orbGrad2)" />
      </svg>

      <svg className="orb orb-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="url(#orbGrad1)" />
      </svg>
    </div>
  );
}

export default AnimatedOrbs;
