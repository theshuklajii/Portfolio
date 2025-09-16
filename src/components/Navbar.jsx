import React, { useState, useEffect, useRef } from 'react'
import '../styles/Navbar.css'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Initialize darkMode based on whether body has 'light' class or not
  const [darkMode, setDarkMode] = useState(() => !document.body.classList.contains('light'))
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Toggle 'light' class on body based on darkMode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light') // dark mode: remove 'light' class
    } else {
      document.body.classList.add('light')    // light mode: add 'light' class
    }
  }, [darkMode])

  // Close mobile menu on outside click or ESC key
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    function handleEscKey(event) {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isMobileMenuOpen])

  // Scroll-based active link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
      const scrollY = window.pageYOffset

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 70 // adjust for navbar height
        const sectionId = current.getAttribute('id')
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink?.classList.add('active')
        } else {
          navLink?.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', scrollActive)
    scrollActive() // initialize on mount

    return () => window.removeEventListener('scroll', scrollActive)
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="Primary navigation">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
          Sudhanshu Shukla
        </a>

        {/* Hamburger button */}
        <button
          ref={buttonRef}
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          type="button"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <ul
          ref={menuRef}
          id="primary-navigation"
          className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}
          role="menu"
        >
          <li className="nav-item" role="none">
            <a href="#home" className="nav-link" onClick={closeMobileMenu} role="menuitem" tabIndex={isMobileMenuOpen ? 0 : -1}>
              Home
            </a>
          </li>
          <li className="nav-item" role="none">
            <a href="#about" className="nav-link" onClick={closeMobileMenu} role="menuitem" tabIndex={isMobileMenuOpen ? 0 : -1}>
              About
            </a>
          </li>
          <li className="nav-item" role="none">
            <a href="#education" className="nav-link" onClick={closeMobileMenu} role="menuitem" tabIndex={isMobileMenuOpen ? 0 : -1}>
              Education
            </a>
          </li>
          <li className="nav-item" role="none">
            <a href="#skills" className="nav-link" onClick={closeMobileMenu} role="menuitem" tabIndex={isMobileMenuOpen ? 0 : -1}>
              Skills
            </a>
          </li>
          <li className="nav-item" role="none">
            <a href="#projects" className="nav-link" onClick={closeMobileMenu} role="menuitem" tabIndex={isMobileMenuOpen ? 0 : -1}>
              Projects
            </a>
          </li>
          <li className="nav-item" role="none">
            <a href="#contact" className="nav-link" onClick={closeMobileMenu} role="menuitem" tabIndex={isMobileMenuOpen ? 0 : -1}>
              Contact
            </a>
          </li>
        </ul>
        
        {/* Dark mode toggle button */}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  )
}