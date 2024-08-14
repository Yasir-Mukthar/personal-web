import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";



import { motion, useScroll } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();

 

  return (
    <>
    
      
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
     

      <Footer/>
      <ToastContainer />
     
    </>
  );
}

export default App;
