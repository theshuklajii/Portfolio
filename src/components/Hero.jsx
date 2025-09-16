import React, { useEffect, useState } from 'react'
import '../styles/Hero.css'
import placeholder from '../assets/resume.pdf'

const introText =
  "Hi, I'm Sudhanshu Shukla — a passionate BCA student and future software engineer specializing in MERN stack and problem-solving."

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    let timeoutId

    function type() {
      if (currentIndex <= introText.length) {
        setDisplayedText(introText.slice(0, currentIndex))
        currentIndex += 1
        timeoutId = setTimeout(type, 40)
      }
    }

    type()

    return () => clearTimeout(timeoutId)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <canvas id="particle-canvas" aria-hidden="true"></canvas>
      <div className="hero-content">
        <h1 className="hero-intro">
          {displayedText}
          <span className="cursor">|</span>
        </h1>
        <a
          href={placeholder}
          download="Sudhanshu_Shukla_Resume.pdf"
          className="btn btn-primary"
          aria-label="Download Resume"
        >
          Download Resume
        </a>
        <button
          className="scroll-down-btn"
          onClick={scrollToAbout}
          aria-label="Scroll down to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="scroll-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width="32"
            height="32"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  )
}