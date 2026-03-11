import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <a href="#hero" className="logo" onClick={handleNavClick}>
          Karo <span>Pitch</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`} id="nav-links">
          <a href="#hero" onClick={handleNavClick}>
            Home
          </a>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
          <a href="#how-it-works" onClick={handleNavClick}>
            How It Works
          </a>
          <a href="#startups" onClick={handleNavClick}>
            Startups
          </a>
          <a href="#investors" onClick={handleNavClick}>
            Investors
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
        <div className="navbar-actions">
          <a href="#apply" className="btn btn-primary">
            Apply to Pitch
          </a>
          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            id="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={toggle}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container hero-grid">
      <div className="hero-text">
        <p className="eyebrow">For early-stage founders across India</p>
        <h1>Pitch Your Startup to India’s Top Investors</h1>
        <p className="hero-subtext">
          Karo Pitch is a platform where early-stage founders from across India can present their
          startups directly to investors. Gain access to funding, mentorship, and opportunities to
          scale your business.
        </p>
        <div className="hero-actions">
          <a href="#apply" className="btn btn-primary">
            Apply to Pitch
          </a>
          <a href="#startups" className="btn btn-secondary">
            Explore Startups
          </a>
        </div>
        <p className="hero-footnote">
          Backed by the KaroStartup community of founders, mentors, and investors.
        </p>
      </div>
      <div className="hero-card">
        <div className="hero-stat">
          <h3>Pan-India Founders</h3>
          <p>Curated pitch sessions with startups from metros and tier-2/3 cities.</p>
        </div>
        <div className="hero-stat">
          <h3>Investor Network</h3>
          <p>Connect with angel investors, syndicates, and early-stage funds.</p>
        </div>
        <div className="hero-stat">
          <h3>Mentorship Focus</h3>
          <p>Beyond capital, get guidance to refine your product and GTM.</p>
        </div>
      </div>
    </div>
  </section>
);

const TrustedBy = () => (
  <section className="trusted">
    <div className="container">
      <p className="section-eyebrow">Trusted Network</p>
      <h2>Trusted by startup founders, mentors, and investors across India.</h2>
      <div className="logo-row">
        <div className="logo-pill">Startup India</div>
        <div className="logo-pill">AngelList</div>
        <div className="logo-pill">100X VC</div>
        <div className="logo-pill">Indian Angel Network</div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section alt-bg">
    <div className="container two-column">
      <div>
        <p className="section-eyebrow">About Karo Pitch</p>
        <h2>Empowering the Next Generation of Indian Entrepreneurs</h2>
      </div>
      <div className="section-body">
        <p>
          Karo Pitch is an initiative by KaroStartup that helps early-stage founders connect with
          investors and mentors.
        </p>
        <p>
          Many startups in India struggle to find the right network and funding opportunities. Karo
          Pitch bridges this gap by giving founders a platform to present their startup ideas
          directly to investors through curated pitch sessions.
        </p>
        <p>
          The goal is to empower entrepreneurs across Bharat and create equal opportunities for
          startups from every region.
        </p>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="section">
    <div className="container">
      <p className="section-eyebrow">How It Works</p>
      <h2>Simple Steps to Raise Funding</h2>
      <div className="steps-grid">
        <div className="step-card">
          <span className="step-number">01</span>
          <h3>Apply with your startup</h3>
          <p>Submit your startup details and pitch deck through the Karo Pitch application.</p>
        </div>
        <div className="step-card">
          <span className="step-number">02</span>
          <h3>Get shortlisted</h3>
          <p>Our team reviews applications and shortlists promising startups from across India.</p>
        </div>
        <div className="step-card">
          <span className="step-number">03</span>
          <h3>Pitch to investors</h3>
          <p>Selected founders present their startup to investors in curated pitch sessions.</p>
        </div>
        <div className="step-card">
          <span className="step-number">04</span>
          <h3>Access capital & mentorship</h3>
          <p>Get funding opportunities and mentorship to grow and scale your startup.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhoCanApply = () => (
  <section className="section alt-bg">
    <div className="container two-column">
      <div>
        <p className="section-eyebrow">Who Can Apply</p>
        <h2>Startups from Any Industry</h2>
      </div>
      <div className="section-body">
        <p>Karo Pitch welcomes founders building innovative startups across multiple industries.</p>
        <ul className="tag-list">
          <li>D2C Brands</li>
          <li>Consumer Startups</li>
          <li>SaaS Platforms</li>
          <li>AgriTech Startups</li>
          <li>Manufacturing Businesses</li>
          <li>Bharat-focused Startups</li>
        </ul>
      </div>
    </div>
  </section>
);

const Investors = () => (
  <section id="investors" className="section">
    <div className="container two-column">
      <div>
        <p className="section-eyebrow">For Investors</p>
        <h2>Meet Investors Looking for the Next Big Startup</h2>
      </div>
      <div className="section-body">
        <p>
          Karo Pitch connects founders with experienced investors, venture capitalists, and angel
          investors who are actively looking for promising startups.
        </p>
        <p>
          This platform allows entrepreneurs to showcase their ideas, gain mentorship, and secure
          funding to grow their businesses.
        </p>
      </div>
    </div>
  </section>
);

const FeaturedStartups = () => (
  <section id="startups" className="section alt-bg">
    <div className="container">
      <p className="section-eyebrow">Featured Startups</p>
      <h2>Startups That Have Pitched</h2>
      <div className="card-grid">
        <article className="startup-card">
          <h3>EcoKart</h3>
          <p>Eco-friendly lifestyle products designed for sustainable living.</p>
        </article>
        <article className="startup-card">
          <h3>FarmLink</h3>
          <p>Digital marketplace connecting farmers directly with buyers.</p>
        </article>
        <article className="startup-card">
          <h3>HealthTrack AI</h3>
          <p>AI-powered health monitoring platform for preventive healthcare.</p>
        </article>
        <article className="startup-card">
          <h3>BuildMate</h3>
          <p>A platform helping contractors manage construction projects efficiently.</p>
        </article>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section">
    <div className="container">
      <p className="section-eyebrow">Testimonials</p>
      <h2>What Founders Say</h2>
      <div className="testimonial-grid">
        <figure className="testimonial-card">
          <blockquote>
            “Karo Pitch helped us connect with investors and gain valuable mentorship.”
          </blockquote>
          <figcaption>Founder, Early-stage Startup</figcaption>
        </figure>
        <figure className="testimonial-card">
          <blockquote>“The platform gave our startup the visibility we needed to scale.”</blockquote>
          <figcaption>Co-founder, Growth-stage Startup</figcaption>
        </figure>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="apply" className="section cta">
    <div className="container cta-inner">
      <div className="cta-text">
        <p className="section-eyebrow">Call to Action</p>
        <h2>Ready to Pitch Your Startup?</h2>
        <p>
          Take the next step in your entrepreneurial journey and present your startup to investors
          looking for the next big opportunity.
        </p>
      </div>
      <div className="cta-actions">
        <a href="#contact" className="btn btn-primary">
          Apply Now
        </a>
        <a href="#contact" className="btn btn-secondary">
          Partner With Us
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section contact">
    <div className="container">
      <h2>Contact Karo Pitch</h2>
      <p>
        Share your details at
        {' '}
        <a href="mailto:hello@karopitch.in">hello@karopitch.in</a>
        {' '}
        and our team will get back to you.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <a href="#hero" className="logo">
          Karo <span>Pitch</span>
        </a>
        <p>Helping Indian founders pitch, raise, and grow.</p>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#about">About</a>
          <a href="#hero">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#startups">Startup Stories</a>
          <a href="#how-it-works">Funding Tips</a>
          <a href="#hero">Community</a>
        </div>
        <div className="footer-column">
          <h4>Social Media</h4>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>© 2026 Karo Pitch. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <TrustedBy />
      <About />
      <HowItWorks />
      <WhoCanApply />
      <Investors />
      <FeaturedStartups />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;

