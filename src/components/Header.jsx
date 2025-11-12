function Header() {
  return (
    <header className="header header--split" id="header">
      <div className="header-grid">
        <div className="header-left">
          <div className="profile-section">
            <div className="profile-picture">
              <img src="/profile-photo.png" alt="Pradatta Adhikary" className="profile-img" />
            </div>
            <div className="profile-text">
              <h1 className="name name--primary">PRADATTA ADHIKARY</h1>
              <h2 className="role-title">Senior Software Engineer</h2>
            </div>
          </div>
        </div>
        <div className="header-right">
          <ul className="contact-list">
            <li className="contact-row">
              <i className="fas fa-map-marker-alt contact-icon" aria-hidden="true"></i>
              <span>London, United Kingdom</span>
            </li>
            <li className="contact-row">
              <i className="fas fa-phone contact-icon" aria-hidden="true"></i>
              <span>+44 (0) 7899748525</span>
            </li>
            <li className="contact-row">
              <i className="fas fa-envelope contact-icon" aria-hidden="true"></i>
              <a href="mailto:contact@pradatta.dev" className="contact-link">contact@pradatta.dev</a>
            </li>
            <li className="contact-row">
              <i className="fab fa-linkedin contact-icon" aria-hidden="true"></i>
              <a href="https://linkedin.com/in/pradattaadhikary" target="_blank" rel="noopener noreferrer" className="contact-link">linkedin.com/in/pradattaadhikary</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
