import { Button, Card } from './ui';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      aria-labelledby="hero-title"
      style={{ 
        padding: '4rem 0',
        textAlign: 'center',
      }}
    >
      <div className="container">
        <h1 
          id="hero-title"
          style={{ 
            marginBottom: '1.5rem',
            lineHeight: 1.1,
          }}
        >
          Analyze Movie Reviews Instantly
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', 
          color: '#333',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
        }}>
          AI-powered sentiment analysis using Bidirectional LSTM neural network.
          Get instant sentiment predictions with confidence scores.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Button size="lg" onClick={() => document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Analyzing
          </Button>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
            How It Works
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Card variant="outlined" padding="md" style={{ minWidth: '180px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00cc66', lineHeight: 1 }}>88%</div>
            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#666' }}>Accuracy</div>
          </Card>
          <Card variant="outlined" padding="md" style={{ minWidth: '180px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000', lineHeight: 1 }}>Real-time</div>
            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#666' }}>Processing</div>
          </Card>
          <Card variant="outlined" padding="md" style={{ minWidth: '180px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ff3333', lineHeight: 1 }}>Free</div>
            <div style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: '#666' }}>To Use</div>
          </Card>
        </div>
      </div>
    </section>
  );
}