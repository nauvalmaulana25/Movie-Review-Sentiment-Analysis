import { useState } from 'react';
import { Card } from './ui';

interface TutorialItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

const tutorials: TutorialItem[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>
          Welcome to the Movie Review Sentiment Analyzer! This tool uses a deep learning model to instantly classify movie reviews as <strong>Positive</strong> or <strong>Negative</strong> with a confidence score.
        </p>
        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>How to use:</h4>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <li>Navigate to the <strong>Analyzer</strong> section (or scroll down)</li>
          <li>Type or paste a movie review in the text area</li>
          <li>Click the <strong>ANALYZE SENTIMENT</strong> button</li>
          <li>View the result with sentiment badge and confidence score</li>
        </ol>
        <p style={{ fontSize: '0.875rem', color: '#666' }}>
          <strong>Tip:</strong> The analyzer works best with complete sentences. Try to write at least 10-20 words for the most accurate results.
        </p>
      </div>
    ),
  },
  {
    id: 'understanding-results',
    title: 'Understanding Results',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>After analysis, you'll see a result card with:</p>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <li><strong>Sentiment Badge:</strong> Green <span style={{ backgroundColor: '#00cc66', color: '#000', padding: '0.125rem 0.5rem', fontWeight: 800, fontSize: '0.75rem' }}>POSITIVE</span> or Red <span style={{ backgroundColor: '#ff3333', color: '#fff', padding: '0.125rem 0.5rem', fontWeight: 800, fontSize: '0.75rem' }}>NEGATIVE</span></li>
          <li><strong>Confidence Score:</strong> Percentage (50-100%) showing model certainty</li>
          <li><strong>Model Type:</strong> Currently using Bidirectional LSTM (Bi-LSTM)</li>
          <li><strong>Input Preview:</strong> Your review text (truncated if long)</li>
        </ul>
        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Confidence Levels:</h4>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem' }}>
          <li><strong>90-100%:</strong> Very High - Model is very certain</li>
          <li><strong>75-89%:</strong> High - Strong prediction</li>
          <li><strong>60-74%:</strong> Moderate - Decent confidence</li>
          <li><strong>50-59%:</strong> Low - Uncertain, review may be ambiguous</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'best-practices',
    title: 'Tips for Best Results',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Do:</h4>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Write complete sentences with clear opinions</li>
          <li>Include specific details (acting, plot, cinematography, etc.)</li>
          <li>Use natural language - write as you would on IMDB or Rotten Tomatoes</li>
          <li>Write at least 20-30 words for better context</li>
        </ul>
        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Don't:</h4>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Use only fragments or single words</li>
          <li>Write in languages other than English</li>
          <li>Include HTML tags or special formatting</li>
          <li>Submit empty or whitespace-only reviews</li>
        </ul>
        <div style={{ padding: '1rem', backgroundColor: '#fff8e1', border: '3px solid #ffcc00', borderLeftWidth: '8px' }}>
          <strong style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>Note:</strong>
          <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem' }}>
            Sarcasm, irony, and highly nuanced reviews may be misclassified. The model analyzes word patterns and sentiment signals, not deep semantic understanding.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'technical-details',
    title: 'Technical Details',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Model Architecture</h4>
        <pre style={{ 
          padding: '1rem', 
          backgroundColor: '#1a1a1a', 
          color: '#fff', 
          fontSize: '0.75rem', 
          overflow: 'auto',
          border: '3px solid #000',
          fontFamily: 'ui-monospace, Consolas, monospace',
        }}>
{`Sequential Model:
├── Embedding(10000, 128, input_length=200)
├── Bidirectional(LSTM(64, return_sequences=True))
├── Bidirectional(LSTM(32))
├── Dense(64, activation='relu')
├── Dropout(0.5)
└── Dense(1, activation='sigmoid')

Total Parameters: ~1.4M`}
        </pre>

        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Preprocessing Pipeline</h4>
        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Lowercase conversion</li>
          <li>HTML tag removal</li>
          <li>Non-alphabetic character removal</li>
          <li>Tokenization (NLTK)</li>
          <li>Stopword removal (English)</li>
          <li>Minimum word length filter ({'>'} 2 chars)</li>
          <li>Sequence padding/truncation to 200 tokens</li>
        </ol>

        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Training Configuration</h4>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>Optimizer: Adam</li>
          <li>Loss: Binary Cross-Entropy</li>
          <li>Batch Size: 64</li>
          <li>Epochs: 10 (with EarlyStopping patience=3)</li>
          <li>Validation Split: 0.2</li>
        </ul>

        <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Limitations</h4>
        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>English language only</li>
          <li>No sarcasm/irony detection</li>
          <li>Binary classification only (no neutral)</li>
          <li>Trained on IMDB data (may not generalize to all domains)</li>
        </ul>
      </div>
    ),
  },
];

export function Tutorial() {
  const [openId, setOpenId] = useState<string | null>('getting-started');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="tutorial" aria-labelledby="tutorial-title" style={{ padding: '4rem 0' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 id="tutorial-title" style={{ marginBottom: '1rem' }}>
            Tutorial & Guide
          </h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Learn how to get the most out of the sentiment analyzer
          </p>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
          {tutorials.map((tutorial) => (
            <Card 
              key={tutorial.id}
              padding="lg"
              variant={openId === tutorial.id ? 'elevated' : 'default'}
              style={{ 
                overflow: 'hidden',
                transition: 'box-shadow 150ms ease',
              }}
            >
              <button
                onClick={() => toggle(tutorial.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
                aria-expanded={openId === tutorial.id}
                aria-controls={`${tutorial.id}-content`}
              >
                <h3 style={{ 
                  margin: 0, 
                  fontSize: '1.125rem',
                  textTransform: 'none',
                }}>
                  {tutorial.title}
                </h3>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '24px',
                  height: '24px',
                  border: '3px solid #000',
                  backgroundColor: openId === tutorial.id ? '#000' : '#fff',
                  color: openId === tutorial.id ? '#fff' : '#000',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  transition: 'all 150ms ease',
                }}>
                  {openId === tutorial.id ? '−' : '+'}
                </span>
              </button>

              <div 
                id={`${tutorial.id}-content`}
                role="region"
                aria-labelledby={tutorial.id}
                style={{
                  maxHeight: openId === tutorial.id ? '1000px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 300ms ease, margin-top 150ms ease',
                  marginTop: openId === tutorial.id ? '1.5rem' : '0',
                  opacity: openId === tutorial.id ? 1 : 0,
                }}
              >
                {openId === tutorial.id && tutorial.content}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}