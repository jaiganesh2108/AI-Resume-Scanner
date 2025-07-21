import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResultPage() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('result');
    if (stored) {
      setResult(JSON.parse(stored));
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#f9f5ff',
          borderRadius: '1rem',
          padding: '2.5rem 2rem',
          maxWidth: '700px',
          width: '100%',
          boxShadow: '0 10px 30px rgba(124, 58, 237, 0.15)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.75rem',
            color: '#7B3FE4',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Match Score: {result?.score}%
        </h2>

        <h3
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.25rem',
            color: '#4b5563',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Resume Preview:
        </h3>

        <pre
          style={{
            backgroundColor: '#ffffff',
            padding: '1.25rem',
            border: '2px solid #D8B4FE',
            borderRadius: '0.75rem',
            maxHeight: '350px',
            overflowY: 'auto',
            fontFamily: "'Inter', monospace",
            fontSize: '0.95rem',
            color: '#4b5563',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.5',
            marginBottom: '2rem',
          }}
        >
          {result?.parsed_text}
        </pre>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => navigate('/upload')}
            style={{
              padding: '0.9rem 2rem',
              background: 'linear-gradient(to right, #7B3FE4, #C084FC)',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              fontFamily: "'Orbitron', sans-serif",
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(124, 58, 237, 0.3)';
            }}
          >
            Try Another
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
