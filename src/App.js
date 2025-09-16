import { Hero, Nav, Projects, Story, Work, Testimonials, Contact } from "./Components/index";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      offset: 120,
    });
  }, []);


  return (
    <div className="overflow-x-hidden">
      

      <Nav />
      <Hero />
      <Story />
      <Work />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
