import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      <header 
        className="dark-transition"
        style={{
          background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: isMobile ? '16px 20px' : '16px 7.6923%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
          top: 0,
          width: '100%',
          height: isMobile ? '70px' : '80px',
          zIndex: 20,
          boxSizing: 'border-box',
          backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}
      >
        <div 
          className="dark-transition"
          style={{
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            cursor: 'pointer'
          }}
          onClick={() => scrollToSection('hero')}
        >
          PORTFOLIO
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
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
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{
              width: '25px',
              height: '2px',
              background: 'var(--brand-primary)',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none'
            }} />
            <div style={{
              width: '25px',
              height: '2px',
              background: 'var(--brand-primary)',
              transition: 'all 0.3s ease',
              opacity: mobileMenuOpen ? 0 : 1
            }} />
            <div style={{
              width: '25px',
              height: '2px',
              background: 'var(--brand-primary)',
              transition: 'all 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'
            }} />
          </button>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px'
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {['about', 'skills', 'experience', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '24px',
                fontWeight: '400',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                transition: 'color 0.3s ease',
                padding: '20px'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;