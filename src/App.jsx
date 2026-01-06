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
    summary: "Passionate Full Stack Developer with a strong foundation in both frontend and backend development. Skilled in building scalable applications using Node.js, Python, React, and Angular. Committed to writing clean, efficient code and delivering user-friendly interfaces.",
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
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" // I'll use placeholders for now but will replace with generated ones in a bit
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

  // Replace with locally generated image paths for the final version
  const images = {
    profile: "/akshay_profile.png", // I will move the generated image to public
    prohire: "/project_prohire.png",
    projectFair: "/project_fair.png",
    journal: "/project_journal.png",
    weather: "/project_weather.png"
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gradient"
            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
          >
            AKSHAY.PS
          </motion.h1>

          <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ fontWeight: 500, color: 'var(--text-secondary)' }} className="nav-hover">
                {item}
              </a>
            ))}
          </div>

          <button className="bg-gradient" style={{ padding: '0.6rem 1.2rem', borderRadius: '12px', border: 'none', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
            Resume
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '1rem', letterSpacing: '2px' }}>HELLO, I AM</h2>
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Building <span className="text-gradient">Digital Experiences</span> That Matter.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              {profileData.summary}
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button className="bg-gradient" style={{ padding: '1rem 2rem', borderRadius: '16px', border: 'none', color: 'white', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Projects <ChevronRight size={20} />
              </button>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="#" className="glass-card" style={{ padding: '12px', borderRadius: '12px' }}><Github size={24} /></a>
                <a href="#" className="glass-card" style={{ padding: '12px', borderRadius: '12px' }}><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div className="glass-card animate-float" style={{ padding: '20px', borderRadius: '40px', position: 'relative', zIndex: 2 }}>
              <div style={{ borderRadius: '30px', overflow: 'hidden', height: '500px', background: '#222' }}>
                <img
                  src={images.profile}
                  alt="Akshay PS"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" }}
                />
              </div>
            </div>
            {/* Background Orbs */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '250px', height: '250px', background: 'var(--accent-secondary)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-secondary" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <SkillCard title="Frontend" icon={<Layout size={32} />} skills={profileData.skills.programming.slice(0, 5)} />
            <SkillCard title="Backend" icon={<Terminal size={32} />} skills={profileData.skills.frameworks} />
            <SkillCard title="Database" icon={<Database size={32} />} skills={profileData.skills.databases} />
            <SkillCard title="Tools" icon={<Code2 size={32} />} skills={profileData.skills.tools} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title">Selected <span className="text-gradient">Works</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {profileData.projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Let's Work <span className="text-gradient">Together</span></h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <ContactInfo icon={<Mail className="text-gradient" />} text={profileData.email} />
                <ContactInfo icon={<Phone className="text-gradient" />} text={profileData.phone} />
                <ContactInfo icon={<MapPin className="text-gradient" />} text={profileData.location} />
              </div>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="text" placeholder="Your Name" className="glass-card" style={{ padding: '1rem', border: '1px solid var(--glass-border)', color: 'white' }} />
              <input type="email" placeholder="Your Email" className="glass-card" style={{ padding: '1rem', border: '1px solid var(--glass-border)', color: 'white' }} />
              <textarea placeholder="Your Message" rows="5" className="glass-card" style={{ padding: '1rem', border: '1px solid var(--glass-border)', color: 'white', resize: 'none' }}></textarea>
              <button className="bg-gradient" style={{ padding: '1rem', borderRadius: '12px', border: 'none', color: 'white', fontWeight: 600, cursor: 'pointer' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          © 2026 Akshay PS. Built with Passion & Speed.
        </p>
      </footer>

      <style>{`
        .scrolled { padding: 1rem 0 !important; }
        .nav-hover:hover { color: var(--text-primary) !important; }
        input:focus, textarea:focus { outline: none; border-color: var(--accent-primary) !important; }
        @media (max-width: 968px) {
            #about .container, #contact .container .glass-card { grid-template-columns: 1fr !important; }
            #about .container { text-align: center; }
            #about .container div { display: flex; flex-direction: column; align-items: center; }
            h1 { fontSize: 3rem !important; }
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
  // Determine image based on title for local images
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
