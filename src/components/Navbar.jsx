import React, { useEffect, useState } from "react";
import "./Navbar.css";
import WhoamiBar from "./WhoamiBar";
import { NavLink } from "react-router-dom";
import { registerHintSetter } from "./hintBus";   
import { markEggUsed } from "./easterEggState";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/journey" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [whoamiOpen, setWhoamiOpen] = useState(false);
  const [logoHint, setLogoHint] = useState(false);

  useEffect(() => {
    registerHintSetter(setLogoHint);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();

    markEggUsed();

    if (document.body.classList.contains("fire-mode")) return;

    document.body.classList.add("fire-mode");
    setWhoamiOpen(true);

    setTimeout(() => {
      document.body.classList.remove("fire-mode");
      setWhoamiOpen(false);
    }, 10000);
  };

  return (
    <>
      <nav className="nav">
        <NavLink
          to="/"
          className="logo"
          onClick={handleLogoClick}
          data-logo-anchor
        >
          <h2 className={`logo-text ${logoHint ? "logo-hint" : ""}`}>
            Pinak Mukherjee
          </h2>
          {logoHint && <span className="logo-tooltip">click for whoami</span>}
        </NavLink>

        <ul className="nav-items">
          {links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="fire-bar" />
      </nav>

      <WhoamiBar open={whoamiOpen} />
    </>
  );
}

export default Navbar;
