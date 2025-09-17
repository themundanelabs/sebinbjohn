import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

const SkillsSection = ({ data }) => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <section 
      id="skills"
      style={{
        padding: isMobile ? '80px 20px' : '160px 7.6923%',
        background: 'var(--bg-secondary)',
        position: 'relative'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto'
      }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: isMobile ? '60px' : '100px' }}>
          <h2 className="display-medium" style={{ 
            marginBottom: '30px',
            color: 'var(--brand-primary)'
          }}>
            EXPERTISE
          </h2>
          <div 
            style={{
              width: '60px',
              height: '2px',
              background: 'var(--brand-primary)',
              margin: '0 auto 40px'
            }}
          />
          <div className="body-large" style={{ 
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Multi-disciplinary expertise spanning technology, strategy, and execution
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {data.categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="fade-in dark-hover"
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                padding: isMobile ? '30px 20px' : '40px',
                transition: 'all 0.4s ease'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '30px'
              }}>
                <div style={{
                  width: '4px',
                  height: '40px',
                  background: 'var(--brand-primary)',
                  marginRight: '20px'
                }} />
                <h3 className="heading-2" style={{ color: 'var(--text-primary)' }}>
                  {category.name}
                </h3>
              </div>

              <div style={{ display: 'grid', gap: '15px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      flexDirection: isMobile ? 'column' : 'row',
                      textAlign: isMobile ? 'center' : 'left',
                      gap: isMobile ? '5px' : '0'
                    }}
                  >
                    <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                      {skill.name}
                    </span>
                    <div style={{
                      fontSize: '12px',
                      color: 'var(--brand-primary)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {skill.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;