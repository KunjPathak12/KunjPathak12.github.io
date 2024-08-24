// src/Pages/Home.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Intro from '../Components/Intro';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Certifications from '../Components/Certifications';
// import Awards from '../Components/Awards';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        {/* <Awards /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
