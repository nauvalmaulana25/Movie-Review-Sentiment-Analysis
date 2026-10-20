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
        <a 
          href="/" 
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
            Movie Sentiment Analyzer
          </span>
        </a>
      </div>
    </header>
  );
}