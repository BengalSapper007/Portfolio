import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import SkillsLanguagesPage from './components/SkillsLanguages';
import ExperienceProjectsEducationPage from './components/Journey';
import Journey from './components/Journey';
import GalleryPage from './components/GalleryPage';
import Contacts from './components/Contact';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Cursor />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/"Component={Home}/>
          <Route path="/about"Component={About}/>
          <Route path="/skills"Component={SkillsLanguagesPage}/>
          <Route path="/journey"Component={Journey}/>
          <Route path="/gallery"Component={GalleryPage}/>
          <Route path="/contact"Component={Contacts}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
