export interface PredictRequest {
  review: string;
}

export interface PredictResponse {
  sentiment: 'Positive' | 'Negative';
  confidence: number;
  model_type: string;
}

export interface HealthResponse {
  status: string;
  model_loaded: boolean;
  model_type: string;
}

export interface SentimentResult {
  sentiment: 'Positive' | 'Negative';
  confidence: number;
  modelType: string;
  inputText: string;
}

export type SentimentType = 'Positive' | 'Negative';

export interface ApiError {
  message: string;
  status: number;
}