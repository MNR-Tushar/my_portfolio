import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../../data/portfolioData'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Naimur</span>
          <span className="logo-bracket">/&gt;</span>
        </a>

        <div className={`navbar-menu ${isMobileOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`navbar-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <a
            href={personalInfo.githubUrl}
            className="navbar-icon-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub: MNR-Tushar"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            className="navbar-icon-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="LinkedIn: mdnaimurrahman36"
          >
            <FaLinkedinIn size={18} />
          </a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
