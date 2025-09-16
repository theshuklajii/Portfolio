
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'

const socialLinks = {
  github: 'https://github.com/theshuklajii',
  linkedin: 'https://www.linkedin.com/in/theshuklajii',
  instagram: 'https://www.instagram.com/the.shuklajii?igsh=MWU1MmY5cjdzY3Fheg==',
}

export default function Contact() {
  const form = useRef()
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus(null)

    // name and email validation
    const name = form.current["from_name"].value.trim();
    const email = form.current["from_email"].value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setStatus({ success: false, message: "Please enter your name." });
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus({ success: false, message: "Please enter a valid email address." });
      return;
    }

    const serviceID = 'service_1905'
    const templateID = 'template_ugqqk2l'
    const userID = '703fYIqZz9CTLJh10'

    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          setStatus({ success: true, message: 'Message sent successfully!' })
          form.current.reset()
        },
        (error) => {
          setStatus({ success: false, message: 'Failed to send message. Please try again later.' })
        }
      )
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="from_name" required placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="from_email" required placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Your message" />

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
        {status && (
          <p className={`form-status ${status.success ? 'success' : 'error'}`} role="alert">
            {status.message}
          </p>
        )}
      </form>
      <div className="social-links" aria-label="Social media links">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.07 2.07 0 11.001-4.139 2.07 2.07 0 01-.001 4.139zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.5a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        </a>
      </div>
      <p className='footer'>© 2025 Sudhanshu Shukla. || All rights reserved.</p>
    </section>
  )
}