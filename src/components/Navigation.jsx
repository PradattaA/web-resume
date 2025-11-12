function Navigation() {
  return (
    <nav className="floating-nav">
      <a href="" className="nav-item" title="Intro">
        <i className="fas fa-user nav-icon"></i>
      </a>
      <a href="#summary" className="nav-item" title="Summary">
        <i className="fas fa-file-alt nav-icon"></i>
      </a>
      <a href="#skills" className="nav-item" title="Skills & Technology">
        <i className="fas fa-code nav-icon"></i>
      </a>
      <a href="#experience" className="nav-item" title="Experience">
        <i className="fas fa-briefcase nav-icon"></i>
      </a>
      <a href="#education" className="nav-item" title="Education">
        <i className="fas fa-graduation-cap nav-icon"></i>
      </a>
      <a href="#languages" className="nav-item" title="Languages & Interests">
        <i className="fas fa-language nav-icon"></i>
      </a>
    </nav>
  )
}

export default Navigation
