import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      padding: '3rem 0 2rem',
      backgroundColor: '#1a1a1a',
      color: '#fff',
      borderTop: '3px solid #000',
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              marginBottom: '1rem',
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                backgroundColor: '#fff',
                color: '#000',
                fontSize: '1.25rem',
                fontWeight: 800,
                border: '3px solid #fff',
                boxShadow: '4px 4px 0 #fff',
              }}>
                🎬
              </span>
              <span style={{
                fontSize: '1.125rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Movie Sentiment
              </span>
            </div>
            <p style={{ color: '#ccc', fontSize: '0.875rem', lineHeight: 1.7 }}>
              AI-powered movie review sentiment analysis using Bidirectional LSTM neural network.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 style={{ 
              fontSize: '0.875rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              marginBottom: '1rem',
              color: '#ffcc00',
            }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
              <li>
                <Link to="#analyzer" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms ease', fontSize: '0.875rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Sentiment Analyzer
                </Link>
              </li>
              <li>
                <Link to="#how-it-works" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms ease', fontSize: '0.875rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="#tutorial" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms ease', fontSize: '0.875rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Tutorial & Guide
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 style={{ 
              fontSize: '0.875rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              marginBottom: '1rem',
              color: '#ffcc00',
            }}>
              Technical
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', fontSize: '0.875rem', color: '#ccc' }}>
              <li>Model: Bi-LSTM (TensorFlow)</li>
              <li>Backend: AWS Lambda + API Gateway</li>
              <li>Frontend: React + Vite + TypeScript</li>
              <li>Hosting: Netlify CDN</li>
            </ul>
          </div>

          <div>
            <h4 style={{ 
              fontSize: '0.875rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              marginBottom: '1rem',
              color: '#ffcc00',
            }}>
              Resources
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none' }}>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms ease', fontSize: '0.875rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#docs" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms ease', fontSize: '0.875rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#privacy" style={{ color: '#fff', textDecoration: 'none', borderBottom: '1px solid transparent', transition: 'border-color 150ms ease', fontSize: '0.875rem' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #333', 
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#888', fontSize: '0.875rem', margin: 0 }}>
            &copy; {currentYear} Movie Sentiment Analyzer. Built with React, TensorFlow, and AWS.
          </p>
          <p style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
            Version 1.0.0 • Deployed on AWS Lambda • Frontend on Netlify
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '1.5rem', transition: 'color 150ms ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '1.5rem', transition: 'color 150ms ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
              aria-label="Twitter"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#888', fontSize: '1.5rem', transition: 'color 150ms ease' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}