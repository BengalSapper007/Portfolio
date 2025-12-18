Pinak Mukherjee – Portfolio
A responsive, production‑ready developer portfolio showcasing cybersecurity, backend engineering, coaching, and fire performance – built as a real‑world React SPA and deployed on Netlify.

Live site: https://pinak-mukherjee.netlify.app
Repository: https://github.com/BengalSapper007/Portfolio

Features
Responsive UI, mobile‑first
Custom navigation bar with animated hover states, mobile hamburger menu, and smooth scrolling across all sections.

Terminal‑style whoami easter egg
Clicking the logo triggers a timed “fire mode” animation and a whoami bar that adapts cleanly on small screens.

Structured journey, projects, and education
Interactive panels for experience, projects, and education using chips with institution logos and detailed write‑ups.

React Router SPA with safe refresh
All routes (/, /about, /skills, /journey, /gallery, /contact) handled client‑side with Netlify redirects configured to avoid 404s on reload.

Netlify CI‑style deployment
GitHub → Netlify pipeline with automatic builds on push using npm run build.

Tech Stack
Framework: React

Routing: React Router

Styling: Custom CSS (flexbox, media queries, animations)

Deployment: Netlify (continuous deployment from GitHub)

Tooling: Git, GitHub, Cloudinary for hosted assets

Getting Started
Prerequisites
Node.js (LTS) and npm

Git

Clone and install
bash
git clone https://github.com/BengalSapper007/Portfolio.git
cd Portfolio
npm install
Run locally
bash
npm start
The app will run at http://localhost:3000.

Build for production
bash
npm run build
This creates an optimized production build in the build directory.

Deployment (Netlify)
This project is configured for Netlify continuous deployment from the main branch.

Netlify build settings:

Build command: npm run build

Publish directory: build

For React Router support, the public/_redirects file contains:

text
/* /index.html 200
This ensures all routes are served through index.html so refresh and deep links work correctly.

Project Structure
text
src/
  components/
    Navbar/
      Navbar.jsx
      Navbar.css
    WhoamiBar/
      WhoamiBar.jsx
      WhoamiBar.css
    ...
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Journey.jsx
    Gallery.jsx
    Contact.jsx
  data/
    education.js
    experience.js
    projects.js
  App.jsx
  index.jsx
public/
  _redirects
Key pieces:

Navbar – Fixed, fire‑themed nav with React Router links, mobile hamburger, and active state styling.

WhoamiBar – Animated terminal bar with cursor blink and responsive wrapping on narrow viewports.

Journey / Education – Panel shell with clickable chips, institution logos, and detail text.

Customization
Update experience, education, and project content in src/data/*.js.

Swap institution logos by changing the logo URLs in education.js.

Tweak colors, gradients, and animations via the .css files to match your branding.

Roadmap
Hook contact section to a backend or email service.

Add light/dark theme toggle.

Integrate basic analytics to understand visitor interactions.

License
This portfolio is primarily for personal use and showcasing work.
If you intend to reuse or adapt parts of it, please attribute the original author: Pinak Mukherjee.
