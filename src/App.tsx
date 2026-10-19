import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  HeroSection, 
  SentimentAnalyzer, 
  ResultCard, 
  HowItWorks, 
  Tutorial, 
  Footer 
} from './components';
import type { SentimentResult } from './types';

function App() {
  const [result, setResult] = useState<SentimentResult | null>(null);

  const handleAnalyzeAnother = () => {
    setResult(null);
  };

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <SentimentAnalyzer />
                {result && <ResultCard result={result} onAnalyzeAnother={handleAnalyzeAnother} />}
                <HowItWorks />
                <Tutorial />
              </>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;