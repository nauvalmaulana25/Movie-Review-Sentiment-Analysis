import { useEffect } from 'react';
import { Button, Badge, Card } from './ui';
import type { SentimentResult } from '../types';

interface ResultCardProps {
  result: SentimentResult;
  onAnalyzeAnother: () => void;
}

export function ResultCard({ result, onAnalyzeAnother }: ResultCardProps) {
  const isPositive = result.sentiment === 'Positive';
  const confidencePercent = Math.round(result.confidence * 100);

  useEffect(() => {
    // Scroll to result on mount
    const resultElement = document.getElementById('result-card');
    if (resultElement) {
      resultElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, []);

  const getSentimentIcon = () => {
    return isPositive ? '😊' : '😞';
  };

  const getConfidenceLabel = () => {
    if (confidencePercent >= 90) return 'VERY HIGH';
    if (confidencePercent >= 75) return 'HIGH';
    if (confidencePercent >= 60) return 'MODERATE';
    return 'LOW';
  };

  const truncatedText = result.inputText.length > 200 
    ? result.inputText.slice(0, 200) + '...' 
    : result.inputText;

  return (
    <section id="result" aria-labelledby="result-title" style={{ padding: '2rem 0 4rem' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Card 
            id="result-card"
            padding="lg" 
            variant="elevated"
            style={{ 
              borderColor: isPositive ? '#00cc66' : '#ff3333',
              boxShadow: isPositive ? '8px 8px 0 #00cc66' : '8px 8px 0 #ff3333',
            }}
          >
            <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 id="result-title" style={{ 
                marginBottom: '1rem',
                color: isPositive ? '#00cc66' : '#ff3333',
              }}>
                Analysis Complete
              </h2>
              <div style={{ fontSize: '3rem', lineHeight: 1 }}>{getSentimentIcon()}</div>
            </header>

            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              <Badge 
                variant={isPositive ? 'positive' : 'negative'} 
                size="lg"
                style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}
              >
                {result.sentiment.toUpperCase()}
              </Badge>

              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 800, 
                  color: '#1a1a1a',
                  lineHeight: 1,
                  fontFamily: 'ui-monospace, Consolas, monospace',
                }}>
                  {confidencePercent}%
                </div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  color: '#666',
                  marginTop: '0.25rem',
                }}>
                  CONFIDENCE • {getConfidenceLabel()}
                </div>
              </div>
            </div>

            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#f5f5f5', 
              border: '3px solid #000',
              marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 800, 
                    color: '#1a1a1a',
                    fontFamily: 'ui-monospace, Consolas, monospace',
                  }}>
                    {result.modelType}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                    color: '#666',
                  }}>
                    MODEL TYPE
                  </div>
                </div>
                <div style={{ 
                  width: '1px', 
                  backgroundColor: '#000', 
                  minHeight: '40px',
                  alignSelf: 'center',
                }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 800, 
                    color: '#1a1a1a',
                    fontFamily: 'ui-monospace, Consolas, monospace',
                  }}>
                    {result.inputText.split(/\s+/).length}
                  </div>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    fontWeight: 700,
                    color: '#666',
                  }}>
                    WORDS
                  </div>
                </div>
              </div>

              <div style={{ 
                borderTop: '2px solid #000', 
                paddingTop: '1rem',
                marginTop: '0.5rem',
              }}>
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#333', 
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  margin: 0,
                }}>
                  {"\u201C"}{truncatedText}{"\u201D"}
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={onAnalyzeAnother}
                fullWidth={true}
                style={{ maxWidth: '300px' }}
              >
                ANALYZE ANOTHER REVIEW
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}