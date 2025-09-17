import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

// Lazy load Spline with error handling
const Spline = React.lazy(() => 
  import('@splinetool/react-spline').catch(() => {
    // If Spline fails to load, return a dummy component
    return { default: () => null };
  })
);

const HeroSection = ({ scrollY }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [splineError, setSplineError] = useState(false);

  return (
    <section 
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '80px 20px 0' : '80px 7.6923% 0',
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
        display: 'grid', 
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        alignItems: 'center', 
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: isMobile ? '40px' : '60px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Content */}
        <div style={{ 
          zIndex: 3,
          order: isMobile ? 2 : 1,
          textAlign: isMobile ? 'center' : 'left'
        }}>
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
              maxWidth: isMobile ? '100%' : '500px',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              margin: isMobile ? '0 auto 40px auto' : '0 0 40px 0'
            }}>
              Ops Strategist • Startup Builder • Growth-Obsessed Consultant
            </div>

            <div className="body-medium" style={{ 
              marginBottom: '50px',
              maxWidth: isMobile ? '100%' : '480px',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
              margin: isMobile ? '0 auto 50px auto' : '0 0 50px 0'
            }}>
              Building tech and companies that make sense — and make a difference. 
              From chaos to clarity, vision to execution.
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '20px', 
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <button 
                className="btn-primary"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                style={{ width: isMobile ? '100%' : 'auto' }}
              >
                EXPLORE WORK
              </button>
              <button 
                className="btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                style={{ width: isMobile ? '100%' : 'auto' }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>

        {/* Profile Image + 3D Background */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          order: isMobile ? 1 : 2,
          height: isMobile ? '300px' : '600px'
        }}>
          {/* 3D Spline Background - Temporarily disabled for testing */}
          {false && !isMobile && (
            <div style={{ 
              position: 'absolute',
              width: '700px', 
              height: '700px', 
              overflow: 'visible',
              transform: `translateY(${scrollY * -0.05}px)`,
              opacity: 0.6,
              zIndex: 1
            }}>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          )}
          
          {/* Professional Photo */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            width: isMobile ? '200px' : '320px',
            height: isMobile ? '200px' : '320px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--brand-primary)',
            boxShadow: '0 0 40px rgba(0, 255, 209, 0.3)',
            transform: `translateY(${scrollY * -0.02}px)`
          }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_mindful-builder/artifacts/r7m4byyl_selfImage.jpg"
              alt="Professional Portrait"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </div>
          
          {/* Glowing ring effect */}
          <div style={{
            position: 'absolute',
            width: isMobile ? '220px' : '340px',
            height: isMobile ? '220px' : '340px',
            borderRadius: '50%',
            border: '2px solid rgba(0, 255, 209, 0.2)',
            zIndex: 1,
            animation: 'pulse 3s ease-in-out infinite'
          }} />
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