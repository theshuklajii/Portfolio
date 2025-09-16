import React from 'react'
import '../styles/Skills.css'

const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'express.js', level: 'Intermediate' },
  { name: 'mongodb', level: 'Beginner' },
  { name: 'C/C++', level: 'Advanced' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid" role="list">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill-card" role="listitem" tabIndex={0} aria-label={`${name} skill, level ${level}`}>
            <div className="skill-logo" aria-hidden="true">
              <span>{name[0]}</span>
            </div>
            <div className="skill-name">{name}</div>
            <div className="skill-level">{level}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
