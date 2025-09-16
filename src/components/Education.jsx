import React from 'react'
import '../styles/Education.css'

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-card">
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p className="college-name">Mahatma Gandhi Kashi Vidyapith (MGKVP)</p>
        <p className="grad-year">Expected Graduation: 2026</p>
      </div>
      <div className="education-card">
        <h3>Senior Secondary (12th)</h3>
        <p className="college-name">Eminent English Medium School (CBSE)</p>
        <p className="grad-year">Passed: 2020</p>
      </div>
      <div className="education-card">
        <h3>High School(10th)</h3>
        <p className="college-name">Eminent English Medium School (CBSE)</p>
        <p className="grad-year">Passed: 2022</p>
      </div>
    </section>
  )
}
