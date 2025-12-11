import React, { useEffect, useState } from "react";
import "./WhoamiBar.css";

function WhoamiBar({ open }) {
  const [text, setText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const full =
    "whoami: Pinak Mukherjee – architecting secure systems by day, igniting fire and stories by night.";

  useEffect(() => {
    if (!open || hasTyped) return;

    let i = 0;
    setText("");
    const id = setInterval(() => {
      i += 1;
      setText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setHasTyped(true);
      }
    }, 25);

    return () => {
      clearInterval(id);
    };
  }, [open, hasTyped, full]);

  return (
    <div className={`whoami-bar ${open ? "whoami-open" : ""}`}>
      <div className="whoami-inner">
        <span className="whoami-prompt">$</span>
        <span className="whoami-text">{text}</span>
        <span className="whoami-cursor" />
      </div>
    </div>
  );
}

export default WhoamiBar;
