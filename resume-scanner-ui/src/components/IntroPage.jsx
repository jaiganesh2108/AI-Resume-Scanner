import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#7B3FE4',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        borderRadius: '70px',
      }}
    >
      <div
        style={{
          backgroundColor: '#f9f5ff',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(124, 58, 237, 0.15)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <h1
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '2rem',
            color: '#7B3FE4',
            marginBottom: '1rem',
          }}
        >
          AI Resume Scanner
        </h1>

        <p style={{ color: '#4b5563', marginBottom: '2rem' }}>
          Unlock your career potential with our AI-powered resume scanner.
          Match your skills to job descriptions with precision.
        </p>

        <button
          onClick={() => navigate('/upload')}
          style={{
            padding: '0.75rem 2rem',
            background: 'linear-gradient(to right, #7B3FE4, #C084FC)',
            color: '#fff',
            border: 'none',
            borderRadius: '0.5rem',
            fontWeight: 'bold',
            fontSize: '1rem',
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
          Get Started
        </button>
      </div>
    </div>
  );
}

export default IntroPage;
