import { Link } from 'react-router-dom';
import { Badge } from './ui';

export function Header() {
  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      backgroundColor: '#fff',
      borderBottom: '3px solid #000',
      boxShadow: '0 4px 0 #000',
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
          aria-label="Movie Sentiment Analyzer - Home"
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            backgroundColor: '#000',
            color: '#fff',
            fontSize: '1.5rem',
            fontWeight: 800,
            border: '3px solid #000',
            boxShadow: '4px 4px 0 #000',
          }}>
            🎬
          </span>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: '#1a1a1a',
          }}>
            Movie Sentiment
          </span>
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} aria-label="Main navigation">
          <Link
            to="#analyzer"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#1a1a1a',
              borderBottom: '2px solid transparent',
              transition: 'border-color 150ms ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
          >
            Analyzer
          </Link>
          <Link
            to="#how-it-works"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#1a1a1a',
              borderBottom: '2px solid transparent',
              transition: 'border-color 150ms ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
          >
            How It Works
          </Link>
          <Link
            to="#tutorial"
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#1a1a1a',
              borderBottom: '2px solid transparent',
              transition: 'border-color 150ms ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = '#000'}
            onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
          >
            Tutorial
          </Link>
        </nav>

        <Badge variant="info" size="sm">
          Bi-LSTM Model
        </Badge>
      </div>
    </header>
  );
}