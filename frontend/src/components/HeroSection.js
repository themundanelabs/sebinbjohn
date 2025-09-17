import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = ({ scrollY }) => {
  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 7.6923% 0',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax background pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0, 255, 209, 0.02) 1px, rgba(0, 255, 209, 0.02) 7.6923%),
            repeating-linear-gradient(-90deg, rgba(0, 255, 209, 0.02), rgba(0, 255, 209, 0.02) 1px, transparent 1px, transparent 7.6923%)
          `,
          backgroundSize: '100% 100%',
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.3
        }}
      />

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '60px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Left side - Content */}
        <div style={{ flex: 1, zIndex: 3 }}>
          <div 
            className="fade-in"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <h1 className="display-huge" style={{ marginBottom: '20px' }}>
              TECH
              <br />
              <span style={{ color: 'var(--brand-primary)' }}>ENTREPRENEUR</span>
            </h1>
            
            <div className="body-large" style={{ 
              marginBottom: '40px',
              maxWidth: '500px',
              lineHeight: '1.6',
              color: 'var(--text-secondary)'
            }}>
              Ops Strategist • Startup Builder • Growth-Obsessed Consultant
            </div>

            <div className="body-medium" style={{ 
              marginBottom: '50px',
              maxWidth: '480px',
              color: 'var(--text-muted)',
              lineHeight: '1.7'
            }}>
              Building tech and companies that make sense — and make a difference. 
              From chaos to clarity, vision to execution.
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                EXPLORE WORK
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>

        {/* Right side - 3D Spline */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{ 
            width: '700px', 
            height: '700px', 
            overflow: 'visible', 
            position: 'relative',
            transform: `translateY(${scrollY * -0.05}px)`
          }}>
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        color: 'var(--text-muted)',
        fontSize: '14px'
      }}>
        <span>SCROLL</span>
        <div style={{
          width: '1px',
          height: '30px',
          background: 'var(--brand-primary)',
          opacity: 0.6
        }} />
      </div>
    </section>
  );
};

export default HeroSection;