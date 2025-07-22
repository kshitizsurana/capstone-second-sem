import React from 'react';
// import Navbar from '../components/Navbar';
import AboutHero from '../components/Hero';
import CompanyHistory from '../components/CompanyHistory';
import MissionVision from '../components/MissionVision';
import TeamCarousel from '../components/TeamCarousel';

const About = ({ setPage }) => {
  return (
    <div>
      {/* <Navbar setPage={setPage} currentPage="about" /> */}
      <AboutHero />
      <CompanyHistory />
      <MissionVision />
      <TeamCarousel />
    </div>
  );
};

export default About;
