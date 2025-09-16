import React from 'react'
import '../styles/About.css'
import profilePhoto from '../assets/me.jpg'

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Sudhanshu Shukla, a passionate BCA student at MGKVP, currently pursuing my degree with a keen interest in software engineering. I specialize in the MERN stack and enjoy solving complex problems through code. I am eager to grow and contribute to innovative projects in the tech world.
          </p>
        </div>
        <div className="about-photo">
          <img src={profilePhoto} alt="Sudhanshu Shukla Profile" />
        </div>
      </div>
    </section>
  )
}