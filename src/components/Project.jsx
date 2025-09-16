import React from 'react'
import '../styles/Project.css'
import placeholder from '../assets/todo.png'
import placeholder1 from '../assets/landingpage.png'
import placeholder3 from '../assets/clone.png'

const projects = [
  {
    title: 'Todo-App',
    tagline: 'React based app',
    description: 'Simple todo-app using react',
    techStack: ['React', 'Node'],
    live: 'https://todoapp-theshuklajii.netlify.app',
    github: '',
    screenshot: placeholder,
  },
  {
    title: 'Landing Page',
    tagline: 'Devconnect',
    description: 'Landing page for devs to collaborate',
    techStack: ['HTML', 'CSS'],
    live: '',
    github: '',
    screenshot: placeholder1,
  },
  {
    title: 'Netfilx-Clone',
    tagline: 'clone of netlify using html css',
    description: 'Simple clone of netflix',
    techStack: ['HTML', 'CSS'],
    live: 'https://www.netflix.com/in/',
    github: '',
    screenshot: placeholder3,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(
          ({ title, tagline, description, techStack, live, github, screenshot }, i) => (
            <article key={i} className="project-card" tabIndex={0} aria-label={`Project: ${title}`}>
              <div className="project-image-wrapper">
                <img src={screenshot} alt={`${title} screenshot`} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{title}</h3>
                <p className="tagline">{tagline}</p>
                <p className="description">{description}</p>
                <div className="tech-stack" aria-label="Tech stack">
                  {techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} GitHub repository`}
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${title} live demo`}
                      className="project-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  )
}
