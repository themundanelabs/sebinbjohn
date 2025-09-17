import React, { useState } from 'react';

const ContactSection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Message sent! (This is a mock submission)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact"
      style={{
        padding: '160px 7.6923%',
        background: 'var(--bg-secondary)',
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
            LET'S BUILD SOMETHING
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
            Ready to tackle complex challenges? Let's discuss how we can work together.
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          {/* Contact Info */}
          <div className="fade-in">
            <h3 className="heading-2" style={{ 
              color: 'var(--text-primary)',
              marginBottom: '40px'
            }}>
              GET IN TOUCH
            </h3>

            <div style={{ display: 'grid', gap: '30px', marginBottom: '50px' }}>
              <div>
                <div className="body-small" style={{ 
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  PHONE
                </div>
                <div className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {data.phone}
                </div>
              </div>

              <div>
                <div className="body-small" style={{ 
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  LINKEDIN
                </div>
                <a 
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-medium"
                  style={{ 
                    color: 'var(--brand-primary)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-active)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--brand-primary)'}
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div style={{
              padding: '30px',
              background: 'rgba(0, 255, 209, 0.05)',
              border: '1px solid rgba(0, 255, 209, 0.2)'
            }}>
              <div className="heading-3" style={{ 
                color: 'var(--brand-primary)',
                marginBottom: '15px'
              }}>
                AVAILABILITY
              </div>
              <div className="body-medium" style={{ 
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                Currently available for strategic consulting and interim leadership roles. 
                Response time: 24-48 hours.
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '30px' }}>
              <div>
                <label 
                  className="body-small"
                  style={{ 
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>

              <div>
                <label 
                  className="body-small"
                  style={{ 
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>

              <div>
                <label 
                  className="body-small"
                  style={{ 
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0px',
                    color: 'var(--text-primary)',
                    fontSize: '16px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ justifySelf: 'start' }}>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: '100px',
        paddingTop: '40px',
        borderTop: '1px solid var(--border-subtle)',
        textAlign: 'center'
      }}>
        <div className="body-small" style={{ color: 'var(--text-muted)' }}>
          © 2025 • Built with precision and purpose
        </div>
      </div>
    </section>
  );
};

export default ContactSection;