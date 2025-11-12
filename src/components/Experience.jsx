import experiencesData from '../data/experiences.json'
import { parseMarkdownBold } from '../utils/textUtils.jsx'
import { calculatePeriod } from '../utils/dateUtils.jsx'

function Experience() {
  return (
    <div className="experience-section" id="experience">
      <section className="section">
        <h2 className="section-title">EXPERIENCE</h2>
        
        {experiencesData.map((experience) => (
          <div key={experience.id} className="experience-item-full">
            <div className="experience-left">
              <div className="company-info">
                <img 
                  src={`${import.meta.env.BASE_URL}${experience.logo.startsWith('/') ? experience.logo.slice(1) : experience.logo}`} 
                  alt={`${experience.company} logo`}
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="company">{experience.company}</div>
              </div>
              <div className="location">{experience.location}</div>
              <div className="period">
                {calculatePeriod(
                  experience.startMonth,
                  experience.startYear,
                  experience.endMonth,
                  experience.endYear,
                  experience.isCurrent
                )}
              </div>
            </div>
            <div className="experience-right">
              <h3 className="position-title">{experience.position}</h3>
              <ul className="achievements">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>
                    {parseMarkdownBold(achievement)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Experience
