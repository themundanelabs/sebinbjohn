import React from 'react';

const AboutSection = ({ data }) => {
  return (
    <section 
      id="about"
      style={{
        padding: '160px 7.6923%',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr',
        gap: window.innerWidth > 768 ? '80px' : '40px',
        alignItems: 'start'
      }}>
        {/* Left - Title */}
        <div className="fade-in">
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
              marginBottom: '40px'
            }}
          />
        </div>

        {/* Right - Content */}
        <div className="fade-in" style={{ paddingTop: '20px' }}>
          <div className="body-large" style={{ 
            marginBottom: '40px',
            color: 'var(--text-primary)',
            lineHeight: '1.6'
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
                  lineHeight: '1.7'
                }}
              >
                {paragraph}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '60px',
            padding: '30px',
            background: 'rgba(0, 255, 209, 0.05)',
            border: '1px solid rgba(0, 255, 209, 0.2)'
          }}>
            <div className="heading-3" style={{ 
              marginBottom: '20px',
              color: 'var(--brand-primary)'
            }}>
              CORE PHILOSOPHY
            </div>
            <div className="body-medium" style={{ 
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              lineHeight: '1.6'
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