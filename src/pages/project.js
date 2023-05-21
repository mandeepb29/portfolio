// Step 1: Import React
import * as React from 'react'
import Layout from '../components/common/layout';

// Step 2: Define your component
const ProjectPage = () => {
  return (
    <Layout pageTitle="Zeit Labs">
     <p>This was the startup's website were I worked at of 2 years of college.</p>
  </Layout>
  )
}


export const Head = () => <title>Work - Zeit Labs</title>
// Step 3: Export your component
export default ProjectPage