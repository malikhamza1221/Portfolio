import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Resume from './Resume'
import ServicePage from './ServicePage'
import ProjectsPage from './ProjectsPage'
import Contact from './Contact'

const LandingPage = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Resume/>
      <ServicePage/>
      <ProjectsPage/>
      <Contact/>
      
    </div>
  )
}

export default LandingPage
