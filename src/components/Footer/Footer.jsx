import { navLinks, socialLinks } from '../../data/portfolioData'
import { FiArrowUp, FiHeart } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-text">Naimur</span>
              <span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-tagline">
              Architecting production-grade backend systems, scalable APIs & real-time WebSocket applications.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-links">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Md Naimur Rahman. Made with{' '}
            <FiHeart className="heart-icon" size={14} /> and React.
          </p>

          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
