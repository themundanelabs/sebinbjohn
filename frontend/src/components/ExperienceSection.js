import React, { useState } from 'react';

const ExperienceSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="experience"
      style={{
        padding: '160px 7.6923%',
        background: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto'
      }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h2 className="display-medium" style={{ 
            marginBottom: '30px',
            color: 'var(--brand-primary)'
          }}>
            EXPERIENCE
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
            Key roles and achievements across startups and enterprises
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '300px 1fr' : '1fr',
          gap: window.innerWidth > 768 ? '60px' : '40px',
          alignItems: 'start'
        }}>
          {/* Timeline Navigation */}
          <div className="fade-in">
            {data.roles.map((role, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{
                  padding: '20px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  background: activeIndex === index ? 'rgba(0, 255, 209, 0.1)' : 'transparent',
                  border: activeIndex === index ? '1px solid var(--brand-primary)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  borderLeft: activeIndex === index ? '4px solid var(--brand-primary)' : '4px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeIndex !== index) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeIndex !== index) {
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                <div className="heading-3" style={{ 
                  color: activeIndex === index ? 'var(--brand-primary)' : 'var(--text-primary)',
                  marginBottom: '8px',
                  fontSize: '16px'
                }}>
                  {role.title}
                </div>
                <div className="body-small" style={{ 
                  color: 'var(--text-muted)',
                  fontSize: '14px'
                }}>
                  {role.company} • {role.period}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Details */}
          <div className="fade-in">
            {data.roles[activeIndex] && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                padding: '50px',
                minHeight: '400px'
              }}>
                <div style={{ marginBottom: '30px' }}>
                  <h3 className="heading-1" style={{ 
                    color: 'var(--text-primary)',
                    marginBottom: '10px'
                  }}>
                    {data.roles[activeIndex].title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <span className="body-medium" style={{ color: 'var(--brand-primary)' }}>
                      {data.roles[activeIndex].company}
                    </span>
                    <span className="body-small" style={{ color: 'var(--text-muted)' }}>
                      {data.roles[activeIndex].period}
                    </span>
                  </div>
                </div>

                <div className="body-medium" style={{ 
                  color: 'var(--text-secondary)',
                  marginBottom: '30px',
                  lineHeight: '1.6'
                }}>
                  {data.roles[activeIndex].description}
                </div>

                <div>
                  <h4 className="heading-3" style={{ 
                    color: 'var(--text-primary)',
                    marginBottom: '20px'
                  }}>
                    Key Achievements
                  </h4>
                  <div style={{ display: 'grid', gap: '15px' }}>
                    {data.roles[activeIndex].achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '15px'
                        }}
                      >
                        <div style={{
                          width: '6px',
                          height: '6px',
                          background: 'var(--brand-primary)',
                          borderRadius: '50%',
                          marginTop: '8px',
                          flexShrink: 0
                        }} />
                        <span className="body-medium" style={{ 
                          color: 'var(--text-secondary)',
                          lineHeight: '1.5'
                        }}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;