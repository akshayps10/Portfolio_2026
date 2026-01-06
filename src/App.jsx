import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Cpu,
  Download,
  Menu,
  X,
  ChevronRight,
  Globe,
  Terminal
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileData = {
    name: "Akshay PS",
    role: "Full Stack Developer",
    location: "Kannur, Kerala",
    email: "akshayps7309@gmail.com",
    phone: "+91 8301017309",
    summary: "Passionate Full Stack Developer with a strong foundation in both frontend and backend development. Skilled in building scalable applications using Node.js, Python, React, and Angular.",
    skills: {
      programming: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS", "Python"],
      frameworks: ["React", "Angular", "Node.js", "Express.js", "FastAPI", "Flask"],
      tools: ["Git", "GitHub", "Vercel", "Netlify", "Figma", "Postman", "VS Code"],
      databases: ["MongoDB", "MySQL"]
    },
    projects: [
      {
        title: "ProHire",
        description: "A professional hiring platform with automated workflows and real-time tracking.",
        tech: ["Angular", "Node.js", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Project Fair",
        description: "Scalable project management app with intuitive UI and dynamic dashboards.",
        tech: ["React", "MongoDB", "Node.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
      },
      {
        title: "Journal Spotlight",
        description: "Elegant journaling system with secure authentication and rich text editing.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
      },
      {
        title: "Weather App",
        description: "Real-time weather tracking with location-based search and interactive maps.",
        tech: ["React", "OpenWeatherMap API"],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2065&auto=format&fit=crop"
      }
    ]
  };

  const images = {
    profile: "/akshay_profile.png",
    prohire: "/project_prohire.png",
    projectFair: "/project_fair.png",
    journal: "/project_journal.png",
    weather: "/project_weather.png"
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gradient logo"
          >
            AKSHAY.PS
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button className="bg-gradient resume-btn desktop-resume">
            Resume
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
            >
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient resume-btn mobile-resume">
                Resume
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero-section">
        <div className="container hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h2 className="hero-subtitle">HELLO, I AM</h2>
            <h1 className="hero-title">
              Building <span className="text-gradient">Digital Experiences</span> That Matter.
            </h1>
            <p className="hero-description">
              {profileData.summary}
            </p>
            <div className="hero-actions">
              <button className="bg-gradient cta-btn">
                View Projects <ChevronRight size={20} />
              </button>
              <div className="social-links">
                <a href="https://github.com/akshayps10" className="glass-card social-icon"><Github size={24} /></a>
                <a href="https://linkedin.com/in/akshayps" className="glass-card social-icon"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-image-wrapper"
          >
            <div className="glass-card animate-float profile-card">
              <div className="profile-image-container">
                <img
                  src={images.profile}
                  alt="Akshay PS"
                  className="profile-image"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" }}
                />
              </div>
            </div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="skills-grid">
            <SkillCard title="Frontend" icon={<Layout size={32} />} skills={profileData.skills.programming.slice(0, 6)} />
            <SkillCard title="Backend" icon={<Terminal size={32} />} skills={profileData.skills.frameworks} />
            <SkillCard title="Database" icon={<Database size={32} />} skills={profileData.skills.databases} />
            <SkillCard title="Tools" icon={<Code2 size={32} />} skills={profileData.skills.tools} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Selected <span className="text-gradient">Works</span></h2>
          <div className="projects-grid">
            {profileData.projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="glass-card contact-card">
            <div className="contact-info">
              <h2 className="contact-title">Let's Work <span className="text-gradient">Together</span></h2>
              <p className="contact-description">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="contact-details">
                <ContactInfo icon={<Mail className="text-gradient" />} text={profileData.email} />
                <ContactInfo icon={<Phone className="text-gradient" />} text={profileData.phone} />
                <ContactInfo icon={<MapPin className="text-gradient" />} text={profileData.location} />
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" className="glass-card form-input" />
              <input type="email" placeholder="Your Email" className="glass-card form-input" />
              <textarea placeholder="Your Message" rows="5" className="glass-card form-input form-textarea"></textarea>
              <button type="submit" className="bg-gradient submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          © 2026 Akshay PS. Built with Passion & Speed.
        </p>
      </footer>

      <style>{`
        /* Navigation Styles */
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .resume-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 12px;
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .mobile-menu {
          display: none;
        }

        .desktop-nav, .desktop-resume {
          display: flex;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--accent-secondary);
          margin-bottom: 1rem;
          letter-spacing: 2px;
        }

        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .cta-btn {
          padding: 1rem 2rem;
          border-radius: 16px;
          border: none;
          color: white;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          padding: 12px;
          border-radius: 12px;
          transition: transform 0.3s;
        }

        .social-icon:hover {
          transform: translateY(-5px);
        }

        .hero-image-wrapper {
          position: relative;
        }

        .profile-card {
          padding: 20px;
          border-radius: 40px;
          position: relative;
          z-index: 2;
        }

        .profile-image-container {
          border-radius: 30px;
          overflow: hidden;
          height: 500px;
          background: #222;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
        }

        .orb-1 {
          top: -10%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: var(--accent-primary);
        }

        .orb-2 {
          bottom: -10%;
          left: -10%;
          width: 250px;
          height: 250px;
          background: var(--accent-secondary);
        }

        /* Skills Section */
        .skills-section {
          background: var(--bg-secondary);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        /* Contact Section */
        .contact-card {
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .contact-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .contact-description {
          color: var(--text-secondary);
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-input {
          padding: 1rem;
          border: 1px solid var(--glass-border);
          color: white;
          background: var(--glass-bg);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--accent-primary);
        }

        .form-textarea {
          resize: none;
        }

        .submit-btn {
          padding: 1rem;
          border-radius: 12px;
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* Footer */
        .footer {
          padding: 4rem 0;
          text-align: center;
          border-top: 1px solid var(--glass-border);
        }

        .footer-text {
          color: var(--text-secondary);
        }

        /* Tablet Responsive (768px - 1024px) */
        @media (max-width: 1024px) {
          .hero-container {
            gap: 3rem;
          }

          .hero-title {
            font-size: 3.5rem;
          }

          .hero-description {
            font-size: 1.1rem;
          }

          .profile-image-container {
            height: 400px;
          }

          .contact-card {
            padding: 3rem;
            gap: 3rem;
          }

          .contact-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        /* Mobile Responsive (up to 767px) */
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block;
          }

          .desktop-nav, .desktop-resume {
            display: none;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
            background: rgba(10, 10, 10, 0.95);
          }

          .mobile-nav-link {
            padding: 0.8rem;
            color: var(--text-secondary);
            text-align: center;
            border-radius: 8px;
            transition: all 0.3s;
          }

          .mobile-nav-link:hover {
            background: var(--glass-bg);
            color: var(--text-primary);
          }

          .mobile-resume {
            width: 100%;
            padding: 0.8rem;
          }

          .logo {
            font-size: 1.2rem;
          }

          .hero-section {
            padding-top: 100px;
            min-height: auto;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-content {
            text-align: center;
          }

          .hero-subtitle {
            font-size: 0.9rem;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .hero-description {
            font-size: 1rem;
            max-width: 100%;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 1.2rem;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
            font-size: 1rem;
            padding: 0.9rem 1.5rem;
          }

          .social-links {
            justify-content: center;
          }

          .profile-image-container {
            height: 350px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-card {
            grid-template-columns: 1fr;
            padding: 2rem;
            gap: 2.5rem;
          }

          .contact-title {
            font-size: 2rem;
          }

          .contact-description {
            font-size: 1rem;
          }
        }

        /* Small Mobile (up to 480px) */
        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .profile-image-container {
            height: 300px;
          }

          .profile-card {
            padding: 15px;
            border-radius: 30px;
          }

          .contact-card {
            padding: 1.5rem;
          }

          .orb {
            display: none;
          }

          .skills-grid {
            gap: 1.2rem;
          }
        }

        .scrolled {
          padding: 1rem 0 !important;
        }
      `}</style>
    </div>
  );
};

const SkillCard = ({ title, icon, skills }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass-card"
    style={{ padding: '2rem' }}
  >
    <div className="text-gradient" style={{ marginBottom: '1.5rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>{title}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
      {skills.map((skill, i) => (
        <span key={i} style={{ padding: '0.4rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tech, image, index }) => {
  const localImg = title === "ProHire" ? "/project_prohire.png" :
    title === "Project Fair" ? "/project_fair.png" :
      title === "Journal Spotlight" ? "/project_journal.png" :
        title === "Weather App" ? "/project_weather.png" : image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card"
      style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
        <img
          src={localImg}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
          className="project-img"
          onError={(e) => { e.target.src = image }}
        />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
          <a href="#" className="glass-card" style={{ padding: '8px', borderRadius: '50%' }}><Github size={18} /></a>
          <a href="#" className="glass-card" style={{ padding: '8px', borderRadius: '50%' }}><ExternalLink size={18} /></a>
        </div>
      </div>
      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {tech.map((t, i) => (
            <span key={i} style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>#{t}</span>
          ))}
        </div>
      </div>
      <style>{`.project-img:hover { transform: scale(1.1); }`}</style>
    </motion.div>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div className="glass-card" style={{ padding: '12px', borderRadius: '12px' }}>{icon}</div>
    <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{text}</span>
  </div>
);

export default App;
