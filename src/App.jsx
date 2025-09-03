import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import { Contact } from "lucide-react";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HomePage />
      <About></About>
      <Services></Services>

      <Footer></Footer>
    </>
  );
}

export default App;
