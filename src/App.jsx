import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./components/Cursor";
import AnimatedRoutes from "./components/AnimatedRoutes"
import AnimatedOrbs from "./components/AnimatedOrbs";
import SplashCursor from "./components/SplashCursor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnimatedOrbs />
        <SplashCursor />
        <Cursor />
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

