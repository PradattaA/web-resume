function Skills({ yearsOfExperience }) {
  return (
    <div className="main-content" id="skills">
      {/* Left Column - Professional Skills */}
      <div className="left-column">
        <section className="section skills-compact">
          <h2 className="section-title">PROFESSIONAL SKILLS</h2>
          <ul>
            <li>{yearsOfExperience}+ years of experience in Full-stack Engineering</li>
            <li>2 years of experience in Site Reliability Engineering</li>
            <li>Experience in managing teams in large cross functional organisation</li>
            <li>Experience in Lean Development</li>
            <li>Requirement Analysis</li>
            <li>Architecture Design for Micro Services.</li>
            <li>Experience in Monitoring/Observability tools like Rollbar, Splunk, Grafana, Kibana</li>
            <li>Relational Database & SQL.</li>
          </ul>
        </section>
      </div>

      {/* Right Column - Key Technology */}
      <div className="right-column">
        <section className="section">
          <h2 className="section-title">KEY TECHNOLOGY</h2>
          <ul className="tech-list">
            <li>Core Java</li>
            <li>Kotlin</li>
            <li>Spring Boot</li>
            <li>Algorithm and Data Structure</li>
            <li>Design Pattern</li>
            <li>Micro Service</li>
            <li>Payment Integration</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Skills
