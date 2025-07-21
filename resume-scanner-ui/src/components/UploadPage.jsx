import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('job_description', jobDesc);

    try {
      const res = await axios.post('http://localhost:5000/api/scan', formData);
      localStorage.setItem('result', JSON.stringify(res.data));
      navigate('/result');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Error scanning resume. Please try again.');
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#7B3FE4',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: '70px'
      }}
    >
      <div
        style={{
          backgroundColor: '#f9f5ff',
          borderRadius: '2rem',
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
          Upload Resume and Paste Job Description
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="file"
            accept=".pdf"
            required
            onChange={(e) => setResumeFile(e.target.files[0])}
            style={{
              padding: '0.75rem',
              border: '2px solid #D8B4FE',
              borderRadius: '0.5rem',
              backgroundColor: '#fff',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '1.25rem',
              cursor: 'pointer',
            }}
          />

          <textarea
            rows="10"
            placeholder="Paste job description here"
            value={jobDesc}
            required
            onChange={(e) => setJobDesc(e.target.value)}
            style={{
              padding: '1rem',
              border: '2px solid #D8B4FE',
              borderRadius: '.5rem',
              backgroundColor: '#ffffff',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '2rem',
              resize: 'vertical',
              color: '#4b5563',
              minHeight: '150px',
            }}
          />

          <button
            type="submit"
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
            Scan
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
