import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="glass-card" style={{ animation: 'fadeIn 1s ease-in-out' }}>
      <img src="https://via.placeholder.com/100?text=AI" alt="AI Resume Scanner Logo" className="logo" />
      <h1 style={{ fontFamily: "'Orbitron', sans-serif" }}>AI Resume Scanner</h1>
      <p style={{ maxWidth: '500px', margin: '1em auto' }}>
        Unlock your career potential with our AI-powered resume scanner. Match your skills to job descriptions with precision.
      </p>
      <button
        onClick={() => navigate('/upload')}
        style={{
          background: 'linear-gradient(45deg, #7B3FE4, #D8B4FE)',
          boxShadow: '0 0 15px #C084FC',
          transition: 'all 0.3s ease',
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
        Get Started
      </button>
    </div>
  );
}

export default IntroPage;