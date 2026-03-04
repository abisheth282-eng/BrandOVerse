import './App.css';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState('Home');

  const services = [
    {
      href: '/adshoot.html',
      title: 'Ad Shoot',
      description:
        'We create high-impact commercial advertisements with cinematic visuals, strategic storytelling and professional production quality.',
      image: '/images/adshoot.png',
      imageAlt: 'Ad Shoot',
    },
    {
      href: '/dance.html',
      title: 'Dance Choreography',
      description:
        'Professional choreography for stage shows, cultural events, weddings, competitions and corporate performances.',
    },
    {
      href: '/editing.html',
      title: 'Editing',
      description:
        'Premium video editing services including color grading, cinematic cuts, sound design and visual enhancements.',
    },
    {
      href: '/prewedding.html',
      title: 'Pre-Wedding Shoot',
      description:
        'Romantic, cinematic and storytelling-based pre-wedding photography and videography that captures emotions beautifully.',
    },
    {
      href: '/logistics.html',
      title: 'Movie Logistics',
      description:
        'Complete production logistics support including location management, crew coordination, equipment handling and on-ground execution.',
    },
    {
      href: '/studio.html',
      title: 'Dance Studio',
      description:
        'Professional dance training studio offering training in multiple styles with expert instructors and rehearsal space.',
    },
    {
      href: '/babyshoot.html',
      title: 'Baby Shoot',
      description:
        'Soft, safe and beautifully themed baby photography sessions capturing adorable moments with premium props and styling.',
    },
    {
      href: '/flashshoot.html',
      title: 'Flash Shoot',
      description:
        'Quick turnaround professional photoshoots for events, branding campaigns and portfolio creation.',
    },
    {
      href: '/logo.html',
      title: 'Logo Designs',
      description:
        'Custom logo designs crafted with strategic branding principles to reflect your business identity and vision.',
    },
    {
      href: '/motion.html',
      title: 'Motion Graphics & 3D Animations',
      description:
        'High-quality motion graphics, title animations and 3D visual effects for ads, films, and digital campaigns.',
    },
  ];

  return (
    <>
      <div id="intro">
        <img src="/images/bov-logo.png" alt="BrandOverse Logo" />
      </div>

      <nav>
        <div className="nav-logo">
          <img src="/images/bov-logo.png" alt="BrandOverse Logo" />
        </div>
        <ul>
          <li>
            <button
              type="button"
              className={activeNav === 'Home' ? 'active' : ''}
              onClick={() => setActiveNav('Home')}
            >
              Home
            </button>
          </li>
          <li>
            <a
              href="#services"
              className={activeNav === 'Services' ? 'active' : ''}
              onClick={() => setActiveNav('Services')}
            >
              Services
            </a>
          </li>
          <li>
            <button
              type="button"
              className={activeNav === 'Login' ? 'active' : ''}
              onClick={() => setActiveNav('Login')}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BrandOverse</h1>
          <p>Premium branding, photography, choreography and creative event excellence.</p>
          <button className="btn" type="button">
            Explore Services
          </button>
        </div>

        <div className="hero-image">
          <img src="/images/camera.png" alt="Floating camera" />
        </div>
      </section>

      <section className="services" id="services">
        <h2>Our Premium Services</h2>
        <div className="service-container">
          {services.map((service) => (
            <a href={service.href} className="service-card" key={service.title}>
              {service.image ? (
                <div className="service-image">
                  <img src={service.image} alt={service.imageAlt || service.title} />
                </div>
              ) : null}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer>
        (c) {new Date().getFullYear()} BrandOverse | Premium Event Platform
      </footer>
    </>
  );
}

export default App;
