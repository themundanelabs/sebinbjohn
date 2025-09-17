import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="dark-transition"
      style={{
        background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '16px 7.6923%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '80px',
        zIndex: 10,
        boxSizing: 'border-box',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}
    >
      <div 
        className="dark-transition"
        style={{
          fontSize: '24px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}
        onClick={() => scrollToSection('hero')}
      >
        PORTFOLIO
      </div>

      <nav style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '32px',
        '@media (max-width: 768px)': {
          display: 'none'
        }
      }}>
        {['about', 'skills', 'experience', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '400',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;