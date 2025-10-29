import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import ServicePage from "./pages/ServicePage";
import ProjectsPage from "./pages/ProjectsPage";
import LandingPage from "./pages/LandingPage";


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
