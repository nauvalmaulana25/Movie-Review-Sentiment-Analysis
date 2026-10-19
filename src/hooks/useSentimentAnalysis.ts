import { useState, useCallback } from 'react';
import { analyzeSentiment, ApiError } from '../services/api';
import type { SentimentResult } from '../types';

interface UseSentimentAnalysisReturn {
  analyze: (review: string) => Promise<void>;
  result: SentimentResult | null;
  loading: boolean;
  error: string | null;
  clearResult: () => void;
  clearError: () => void;
}

export function useSentimentAnalysis(): UseSentimentAnalysisReturn {
  const [result, setResult] = useState<SentimentResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearResult = useCallback(() => {
    setResult(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const analyze = useCallback(async (review: string) => {
    if (!review.trim()) {
      setError('Please enter a movie review to analyze.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await analyzeSentiment(review);
      
      setResult({
        sentiment: response.sentiment,
        confidence: response.confidence,
        modelType: response.model_type,
        inputText: review,
      });
    } catch (err: unknown) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    analyze,
    result,
    loading,
    error,
    clearResult,
    clearError,
  };
}