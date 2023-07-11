import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/common/layout';
import HeaderSection from '../components/headerSection';
import ProjectsSection from '../components/projectsSection';
import SkillsSection from '../components/skillsSection';
import TestimonialSection from '../components/testimonialSection';
import AboutSection from '../components/aboutSection';
import { useInView, InView } from 'react-intersection-observer';
import { scroller } from 'react-scroll'

// Step 2: Define your component
const IndexPage = () => {
  
  
  useEffect(()=>{
    const scrollEasingFunction = "easeInOutCubic";
    const scrollDuration = 750;
    console.log("enter homepage");
    let sectionId = localStorage.getItem("mPortfolio_HomePageSectionId");
    let offset = parseInt(localStorage.getItem("mPortfolio_HomePageSectionOffset"));
    if(sectionId){
      console.log("scroll to section")
      let scrollOptions = {
        duration: scrollDuration,
        smooth: scrollEasingFunction,
        offset: offset
      };
      scroller.scrollTo(sectionId, scrollOptions);
      localStorage.removeItem("mPortfolio_HomePageSectionId");
      localStorage.removeItem("mPortfolio_HomePageSectionOffset");
    };
  },[]);

  return (
    <main id='websiteContainer'>
      <Layout>
      <HeaderSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialSection />
      <AboutSection />
      </Layout>
    </main>
  )

}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Mandeep Baghel</title>

// Step 3: Export your component
export default IndexPage