import './App.css'
import Navigation from './components/Navigation'
import MobileNav from './components/MobileNav'
import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import Interests from './components/Interests'
import Footer from './components/Footer'

function Resume() {
  // Calculate years of experience since 2012
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2012 - 1;
  
  return (
    <>
      <Navigation />
      <MobileNav />

      <div className="resume-container">
        <Header />
        <Summary yearsOfExperience={yearsOfExperience} />
        <Skills yearsOfExperience={yearsOfExperience} />
        <Experience />

        {/* Bottom Section with Education, Language Skills, and Interests */}
        <div className="bottom-section">
          <div className="bottom-content">
            <Education />
            <div className="bottom-row" id="languages">
              <Languages />
              <Interests />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Resume
