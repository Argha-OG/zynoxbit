import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/Home/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/pages/About/About.jsx";
import Services from "./components/pages/Services/Services.jsx";
import Career from "./components/pages/Career/Career.jsx";
import Projects from "./components/pages/Projects/Projects.jsx";
import Blog from "./components/pages/Blog/Blog.jsx";
import Login from "./components/pages/Auth/Login.jsx";
import Register from "./components/pages/Auth/Register.jsx";
import Construction from "./components/Construction/Construction.jsx";

import { Contact } from "lucide-react";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Construction />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Construction />} />
        <Route path="/blog" element={<Construction />} />
        <Route path="/login" element={<Construction />} />
        <Route path="/register" element={<Construction />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
