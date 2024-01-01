import React from 'react';
import AboutCompany from '../Components/AboutCompany/AboutCompany';
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


const HomePage = () => {
  return (
    <div className=' w-full h-[576.38rem] bg-white overflow-hidden'>
      <div className=''>
      <div className='bg-white text-[1.38rem] text-white relative left-[12%]'>
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
      </div>
    </div>
  );
};

export default HomePage;
