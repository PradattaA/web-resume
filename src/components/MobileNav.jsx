import { useState, useEffect } from 'react'

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector('.mobile-nav-toggle')
      if (button) {
        const scrollY = window.scrollY
        const initialTop = 300 // Position below contact section
        const headerHeight = 340 // Approximate header height
        const maxTop = Math.min(initialTop + scrollY, headerHeight)
        button.style.top = `${maxTop}px`
      }
    }

    // Set initial position
    const button = document.querySelector('.mobile-nav-toggle')
    if (button) {
      button.style.top = '300px'
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (href) => {
    setIsOpen(false)
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Burger Button */}
      <button 
        className={`mobile-nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-nav-menu">
          <a href="#header" onClick={() => handleNavClick('#header')} className="mobile-nav-item">
            <i className="fas fa-user"></i>
            <span>Intro</span>
          </a>
          <a href="#summary" onClick={() => handleNavClick('#summary')} className="mobile-nav-item">
            <i className="fas fa-file-alt"></i>
            <span>Summary</span>
          </a>
          <a href="#skills" onClick={() => handleNavClick('#skills')} className="mobile-nav-item">
            <i className="fas fa-code"></i>
            <span>Skills</span>
          </a>
          <a href="#experience" onClick={() => handleNavClick('#experience')} className="mobile-nav-item">
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </a>
          <a href="#education" onClick={() => handleNavClick('#education')} className="mobile-nav-item">
            <i className="fas fa-graduation-cap"></i>
            <span>Education</span>
          </a>
          <a href="#languages" onClick={() => handleNavClick('#languages')} className="mobile-nav-item">
            <i className="fas fa-language"></i>
            <span>Languages</span>
          </a>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
