import { Card, Badge } from './ui';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Enter Review',
    description: 'Type or paste any movie review in English. The analyzer accepts reviews of any length - from a single sentence to a full paragraph.',
    icon: '✍️',
  },
  {
    number: '02',
    title: 'AI Processing',
    description: 'Our Bidirectional LSTM neural network processes your text through tokenization, embedding layers, and dual-directional sequence analysis to understand context and sentiment.',
    icon: '🧠',
  },
  {
    number: '03',
    title: 'Get Results',
    description: 'Receive instant sentiment classification (Positive/Negative) with a confidence score indicating how certain the model is about its prediction.',
    icon: '📊',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" style={{ padding: '4rem 0', backgroundColor: '#f5f5f5' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 id="how-it-works-title" style={{ marginBottom: '1rem' }}>
            How It Works
          </h2>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
            Three simple steps to analyze any movie review with AI
          </p>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem',
        }}>
          {steps.map((step, _index) => (
            <Card 
              key={step.number}
              padding="lg"
              variant="elevated"
              style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
              }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '-12px', 
                left: '1.5rem',
                backgroundColor: '#fff',
                padding: '0 0.5rem',
              }}>
                <Badge variant="info" size="md">
                  STEP {step.number}
                </Badge>
              </div>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                height: '100%',
              }}>
                <div style={{ 
                  fontSize: '3.5rem', 
                  lineHeight: 1, 
                  marginBottom: '1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: '3px solid #000',
                  boxShadow: '4px 4px 0 #000',
                }}>
                  {step.icon}
                </div>

                <h3 style={{ 
                  marginBottom: '1rem',
                  fontSize: '1.25rem',
                }}>
                  {step.title}
                </h3>

                <p style={{ 
                  color: '#333', 
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          backgroundColor: '#fff', 
          border: '3px solid #000',
          boxShadow: '4px 4px 0 #000',
          textAlign: 'center',
        }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
            Technical Details
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem',
            textAlign: 'left',
          }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: '#666' }}>
                Architecture
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#333', margin: 0 }}>
                Embedding (10k, 128) → Bi-LSTM (64) → Bi-LSTM (32) → Dense (64) → Dropout (0.5) → Sigmoid
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: '#666' }}>
                Training Data
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#333', margin: 0 }}>
                IMDB 50K Movie Reviews (25K positive, 25K negative) • 80/20 train/test split
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: '#666' }}>
                Performance
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#333', margin: 0 }}>
                Test Accuracy: 88.34% • Test Loss: 0.2782 • Max Sequence Length: 200 tokens
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', color: '#666' }}>
                Deployment
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#333', margin: 0 }}>
                AWS Lambda (Container) • API Gateway HTTP API • Netlify CDN Frontend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}