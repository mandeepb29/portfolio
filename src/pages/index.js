// Step 1: Import React
import * as React from 'react'
import Layout from '../components/common/layout';
import HeaderSection from '../components/headerSection';
import ProjectsSection from '../components/projectsSection';
import SkillsSection from '../components/skillsSection';
import TestimonialSection from '../components/testimonialSection';
import AboutSection from '../components/aboutSection';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <HeaderSection />
        <ProjectsSection />
        <SkillsSection></SkillsSection>
        <TestimonialSection></TestimonialSection>
        <AboutSection></AboutSection>
      </Layout>      
    </main>
  )

}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Mandeep Baghel</title>

// Step 3: Export your component
export default IndexPage