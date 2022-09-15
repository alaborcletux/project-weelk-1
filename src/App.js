import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Milestone from "./components/Milestones";
import Project from "./components/Project";
import ContactMe from "./components/ContactMe";


function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Services />
      <Milestone />
      <Project />
      <ContactMe />
      
    </div>
  );
}
export default App;
