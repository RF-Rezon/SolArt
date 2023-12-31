import React from 'react';

import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import HowWeWorks from '../Components/HowWeWorks/HowWeWorks';
import MeetOurTeam from '../Components/MeetOurTeam/MeetOurTeam';
import OurProjects from '../Components/OurProjects/OurProjects';
import ProjectSucced from '../Components/ProjectSucced/ProjectSucced';
import Services from '../Components/Services/Services';
import VideoFeedBack from '../Components/VIdeoFeedBack/VideoFeedBack';
import WhatWeDone from '../Components/WhatWeDone/WhatWeDone';
import AboutCompany from './../Components/AboutCompany/AboutCompany';

const HomePage = () => {
  return (
    <div className="text-[1.38rem] text-white mx-auto">
      <Header />
      <Services />
      <AboutCompany />
      <OurProjects />
      <HowWeWorks />
      <WhatWeDone />
      <MeetOurTeam />
      <VideoFeedBack />
      <ProjectSucced />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
