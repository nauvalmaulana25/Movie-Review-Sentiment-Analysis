import { useState, useCallback } from 'react';
import { useSentimentAnalysis } from '../hooks/useSentimentAnalysis';
import { TextArea, Button, Card } from './ui';

export function SentimentAnalyzer() {
  const [review, setReview] = useState('');
  const { analyze, loading, error, clearError } = useSentimentAnalysis();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (review.trim()) {
      analyze(review);
    }
  }, [review, analyze]);

  const handleClear = useCallback(() => {
    setReview('');
    clearError();
  }, [clearError]);

  const maxLength = 5000;

  return (
    <section 
      id="analyzer" 
      aria-labelledby="analyzer-title"
      style={{ padding: '4rem 0' }}
    >
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 id="analyzer-title" style={{ marginBottom: '1rem' }}>
              Sentiment Analyzer
            </h2>
            <p style={{ color: '#666', fontSize: '1rem' }}>
              Enter a movie review below and click <strong>ANALYZE</strong> to get the sentiment prediction.
            </p>
          </header>

          <Card padding="lg">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <TextArea
                label="Movie Review"
                placeholder="Type or paste your movie review here... (e.g., 'This movie was absolutely fantastic! Great acting and plot.')"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                maxLength={maxLength}
                showCharCount={true}
                helperText="Minimum 10 characters. Maximum 5000 characters."
                error={error || undefined}
                rows={6}
                required
                aria-describedby="review-help"
              />

              {error && (
                <div
                  role="alert"
                  style={{
                    padding: '1rem',
                    backgroundColor: '#fff0f0',
                    border: '3px solid #ff3333',
                    color: '#ff3333',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.875rem',
                  }}
                >
                  {error}
                </div>
              )}

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button
                  type="submit"
                  size="lg"
                  fullWidth={true}
                  loading={loading}
                  disabled={!review.trim() || loading}
                  style={{ flex: 1, minWidth: '200px' }}
                >
                  {loading ? 'ANALYZING...' : 'ANALYZE SENTIMENT'}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={handleClear}
                  disabled={!review.trim() && !error}
                  style={{ flex: 1, minWidth: '200px' }}
                >
                  CLEAR
                </Button>
              </div>

              <p id="review-help" style={{ 
                fontSize: '0.75rem', 
                color: '#999', 
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Powered by Bidirectional LSTM • TensorFlow 2.16 • Deployed on AWS Lambda
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}