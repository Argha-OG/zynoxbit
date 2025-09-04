import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Career from "./pages/Career/Career.jsx";
//import Projects from "./pages/Projects/Projects.jsx";
//import Blog from "./pages/Blog/Blog.jsx";
//import Login from "./pages/Auth/Login.jsx";
//import Register from "./pages/Auth/Register.jsx";

import { Contact } from "lucide-react";

function App() {
  return (
    <>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
