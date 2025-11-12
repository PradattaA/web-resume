import { useState, useEffect } from 'react'
import languagesData from '../data/languages.json'

function Languages() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const languages = languagesData

  const handleLanguageClick = (index) => {
    setSelectedLanguage(selectedLanguage === index ? null : index)
  }

  // Close all languages when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const languageSection = e.target.closest('.bottom-languages')
      if (!languageSection && selectedLanguage !== null) {
        setSelectedLanguage(null)
      }
    }

    document.addEventListener('click', handleDocumentClick)
    return () => document.removeEventListener('click', handleDocumentClick)
  }, [selectedLanguage])

  const renderSkillDots = (level) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`skill-dot ${i < level ? 'filled' : 'empty'}`}
      ></span>
    ))
  }

  return (
    <section className="section bottom-languages">
      <h2 className="section-title">LANGUAGE</h2>
      <ul className="language-list">
        {languages.map((language, index) => (
          <li key={language.name} className={`language-item ${selectedLanguage === index ? 'expanded' : ''}`}>
            <div 
              className="language-header"
              onClick={() => handleLanguageClick(index)}
            >
              <span className="language-name">{language.name}</span>
              <span className="language-sample">{language.sample}</span>
            </div>
            
            <div className="language-skills">
              <div className="skill-row">
                <span className="skill-label">Speak</span>
                <div className="skill-dots">
                  {renderSkillDots(language.skills.speak)}
                </div>
              </div>
              <div className="skill-row">
                <span className="skill-label">Read</span>
                <div className="skill-dots">
                  {renderSkillDots(language.skills.read)}
                </div>
              </div>
              <div className="skill-row">
                <span className="skill-label">Write</span>
                <div className="skill-dots">
                  {renderSkillDots(language.skills.write)}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Languages
