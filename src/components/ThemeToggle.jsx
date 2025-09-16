import React from 'react'
import '../styles/ThemeToggle.css'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      aria-label="Toggle Dark/Light Mode"
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12.515h-1m15.364 4.95l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 7a5 5 0 000 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
          width="24"
          height="24"
        >
          <path d="M21.752 15.002A9 9 0 1112 3v0a7.5 7.5 0 009.752 12.002z" />
        </svg>
      )}
    </button>
  )
}
