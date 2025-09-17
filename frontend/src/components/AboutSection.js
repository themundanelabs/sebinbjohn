import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const AboutSection = ({ data }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section 
      id="about"
      style={{
        padding: isMobile ? '80px 20px' : '160px 7.6923%',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
        gap: isMobile ? '40px' : '80px',
        alignItems: 'start'
      }}>
        {/* Left - Title */}
        <div className="fade-in" style={{ textAlign: isMobile ? 'center' : 'left' }}>
          <h2 className="display-medium" style={{ 
            marginBottom: '30px',
            color: 'var(--brand-primary)'
          }}>
            ABOUT
          </h2>
          <div 
            style={{
              width: '60px',
              height: '2px',
              background: 'var(--brand-primary)',
              marginBottom: '40px',
              margin: isMobile ? '0 auto 40px auto' : '0 0 40px 0'
            }}
          />
        </div>

        {/* Right - Content */}
        <div className="fade-in" style={{ paddingTop: isMobile ? '0' : '20px' }}>
          <div className="body-large" style={{ 
            marginBottom: '40px',
            color: 'var(--text-primary)',
            lineHeight: '1.6',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            {data.intro}
          </div>

          <div style={{ display: 'grid', gap: '30px' }}>
            {data.paragraphs.map((paragraph, index) => (
              <div 
                key={index}
                className="body-medium" 
                style={{ 
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                  textAlign: isMobile ? 'center' : 'left'
                }}
              >
                {paragraph}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '60px',
            padding: isMobile ? '20px' : '30px',
            background: 'rgba(0, 255, 209, 0.05)',
            border: '1px solid rgba(0, 255, 209, 0.2)'
          }}>
            <div className="heading-3" style={{ 
              marginBottom: '20px',
              color: 'var(--brand-primary)',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              CORE PHILOSOPHY
            </div>
            <div className="body-medium" style={{ 
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              lineHeight: '1.6',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              "{data.philosophy}"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;