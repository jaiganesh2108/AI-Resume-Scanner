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
    <div className="glass-card" style={{ animation: 'fadeIn 1s ease-in-out' }}>
      <img src="https://via.placeholder.com/80?text=📊" alt="Result Icon" className="logo" />
      <h2 style={{ fontFamily: "'Orbitron', sans-serif" }}>Match Score: {result?.score}%</h2>
      <h3 style={{ fontFamily: "'Orbitron', sans-serif", marginTop: '1em' }}>Resume Preview:</h3>
      <pre
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          padding: '1.5em',
          borderRadius: '12px',
          maxHeight: '350px',
          overflowY: 'auto',
          color: '#F3E8FF',
          border: '1px solid #D8B4FE',
          boxShadow: 'inset 0 0 10px rgba(123, 63, 228, 0.2)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.95em',
          margin: '1em 0',
        }}
      >
        {result?.parsed_text}
      </pre>
      <button
        onClick={() => navigate('/upload')}
        style={{
          background: 'linear-gradient(45deg, #7B3FE4, #D8B4FE)',
          boxShadow: '0 0 15px #C084FC',
          transition: 'all 0.3s ease',
          fontFamily: "'Orbitron', sans-serif",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 0 25px #C084FC';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 0 15px #C084FC';
        }}
      >
        Try Another
      </button>
    </div>
  );
}

export default ResultPage;