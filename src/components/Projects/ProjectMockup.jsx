import { useState } from 'react'
import { FiSearch, FiTerminal, FiStar, FiExternalLink, FiPlay, FiBook, FiCheck, FiCode } from 'react-icons/fi'
import './ProjectMockup.css'

export default function ProjectMockup({ project }) {
  const [imgError, setImgError] = useState(false)

  if (project.image && !imgError) {
    return (
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-real-image"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        <div className="project-image-overlay" />
      </div>
    )
  }

  switch (project.theme) {
    case 'blue-featured':
      return (
        <div className="mockup-preview blue-featured">
          <div className="mockup-header-search">
            <span className="search-pill">
              <FiSearch size={10} /> Type to search project...
            </span>
            <div className="header-links">
              <span>Help</span>
              <span>Docs</span>
              <span>API</span>
            </div>
          </div>

          <div className="mockup-hero-blue">
            <div className="featured-flag">
              <FiStar className="star-gold" size={11} /> Featured
            </div>
            <div className="hero-pkg-name">urbanthread 1.0</div>
            <p className="hero-pkg-desc">
              Production-grade e-commerce backend with Django REST, Celery, and SSLCommerz
            </p>
            <div className="pip-box">
              <code>$ docker compose up -d</code>
            </div>
          </div>

          <div className="mockup-sub-white">
            <div className="mockup-sub-tabs">
              <span className="active-tab">Architecture</span>
              <span>API Endpoints</span>
              <span>Release Notes</span>
            </div>
            <div className="mockup-badge-cloud">
              <span className="mini-badge green">DRF</span>
              <span className="mini-badge purple">PostgreSQL</span>
              <span className="mini-badge blue">Celery</span>
              <span className="mini-badge red">Redis</span>
              <span className="mini-badge teal">SSLCommerz</span>
            </div>
          </div>
        </div>
      )

    case 'dark-code':
      return (
        <div className="mockup-preview dark-code">
          <div className="code-split-left">
            <div className="code-split-tag">Channels ASGI Client</div>
            <h4 className="code-split-title">
              Build Scalable Realtime WebSocket Systems
            </h4>
            <p className="code-split-desc">
              Low-latency messaging with Redis channels, typing indicators, and room broadcasts.
            </p>
            <div className="code-split-actions">
              <span className="btn-mini primary"><FiPlay size={10} /> Connect</span>
              <span className="btn-mini outline"><FiCode size={10} /> ws://api</span>
            </div>
          </div>

          <div className="code-split-right">
            <div className="mini-editor-box">
              <div className="mini-editor-dots">
                <span className="d red" />
                <span className="d yellow" />
                <span className="d green" />
              </div>
              <pre>
                <code>
{`from channels import Layer
client = Layer("ws/chat")
async with client.connect():
  await client.send({
    "room": "backend",
    "status": "online"
  })`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )

    case 'purple-analyzer':
      return (
        <div className="mockup-preview purple-analyzer">
          <div className="analyzer-left">
            <div className="analyzer-tag">Compiler Theory Suite</div>
            <h4 className="analyzer-title">
              Audit & Analyze <span className="highlight-purple">Any Context-Free Grammar</span>
            </h4>
            <p className="analyzer-desc">
              FIRST/FOLLOW calculator, LL(1) &amp; LR(0) parsers, and TAC code generation.
            </p>
            <div className="analyzer-input-box">
              <span className="input-placeholder">E -&gt; E + T | T</span>
              <span className="btn-mini purple">Parse</span>
            </div>
          </div>

          <div className="analyzer-right">
            <div className="grade-badge">AST: OK</div>
            <div className="matrix-visual">
              <div className="matrix-row active"><span>LL(1)</span><span className="val valid">VALID</span></div>
              <div className="matrix-row"><span>LR(0)</span><span className="val">READY</span></div>
              <div className="matrix-row"><span>AMBIGUITY</span><span className="val none">NONE</span></div>
            </div>
          </div>
        </div>
      )

    case 'navy-portal':
      return (
        <div className="mockup-preview navy-portal">
          <div className="portal-header">
            <span className="portal-logo">DIU Student Portal</span>
            <span className="portal-status">Verified Platform</span>
          </div>
          <div className="portal-body">
            <h4 className="portal-title">Class Representative Reviews</h4>
            <div className="portal-search-bar">
              <FiSearch size={11} /> Search CR by batch or section (e.g. 60_A)...
            </div>
            <div className="portal-card-preview">
              <div className="cr-info">
                <span className="cr-avatar">CR</span>
                <div>
                  <span className="cr-name">Batch 60 Representative</span>
                  <span className="cr-meta">CSE Department • Savar Campus</span>
                </div>
              </div>
              <div className="cr-rating">
                <span className="stars">★★★★★</span>
                <span className="score">4.9</span>
              </div>
            </div>
          </div>
        </div>
      )

    case 'dark-editorial':
      return (
        <div className="mockup-preview dark-editorial">
          <div className="editorial-header">
            <span className="editorial-brand">LearnLog Developer Journal</span>
            <span className="editorial-meta">PythonAnywhere Live</span>
          </div>
          <div className="editorial-article-card">
            <span className="article-category">Backend Architecture</span>
            <h5 className="article-title">
              Designing Scalable Microservices with Django, Celery &amp; Redis
            </h5>
            <p className="article-excerpt">
              Practical strategies for message brokers, background task queues, and database indexing.
            </p>
            <div className="article-footer">
              <span>By Naimur Rahman</span>
              <span>• 5 min read</span>
              <span className="comment-pill">💬 28 comments</span>
            </div>
          </div>
        </div>
      )

    case 'cyan-minimal':
    default:
      return (
        <div className="mockup-preview cyan-minimal">
          <div className="dashboard-topbar">
            <span className="dashboard-time">12:45:00 PM</span>
            <span className="dashboard-weather">28°C Savar, Dhaka ☀️</span>
          </div>
          <div className="dashboard-widgets">
            <div className="widget-todo">
              <div className="widget-header">Tasks (Vanilla JS)</div>
              <div className="todo-item checked"><FiCheck size={10} /> Optimize SQL query indices</div>
              <div className="todo-item checked"><FiCheck size={10} /> Implement JWT refresh tokens</div>
              <div className="todo-item"><span className="checkbox-empty" /> Configure Docker healthcheck</div>
            </div>
            <div className="widget-notes">
              <div className="widget-header">Scratchpad</div>
              <p>Zero dependencies. LocalStorage synced. Framework-free.</p>
            </div>
          </div>
        </div>
      )
  }
}
