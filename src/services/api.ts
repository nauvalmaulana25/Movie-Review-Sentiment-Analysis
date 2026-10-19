import type { PredictRequest, PredictResponse, HealthResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://2jgdfrrhxf.execute-api.ap-southeast-1.amazonaws.com';

export class ApiError extends Error {
  public status: number;
  public response?: Response;

  constructor(message: string, status: number, response?: Response) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.response = response;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let message = 'An error occurred';
    try {
      const errorData = await response.json();
      message = errorData.detail || errorData.message || message;
    } catch {
      message = `HTTP Error: ${response.status}`;
    }
    throw new ApiError(message, response.status, response);
  }
  return response.json();
}

export async function analyzeSentiment(review: string): Promise<PredictResponse> {
  const payload: PredictRequest = { review };
  
  const response = await fetch(`${API_BASE_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<PredictResponse>(response);
}

export async function checkHealth(): Promise<HealthResponse> {
  const response = await fetch(`${API_BASE_URL}/health`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return handleResponse<HealthResponse>(response);
}