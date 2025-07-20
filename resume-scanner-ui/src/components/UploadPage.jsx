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
    <div className="glass-card" style={{ animation: 'fadeIn 1s ease-in-out' }}>
      <img src="https://via.placeholder.com/80?text=📄" alt="Upload Icon" className="logo" />
      <h2 style={{ fontFamily: "'Orbitron', sans-serif" }}>Upload Resume and Paste Job Description</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResumeFile(e.target.files[0])}
          required
          style={{
            padding: '0.75em',
            border: '2px solid #D8B4FE',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#F3E8FF',
            fontFamily: "'Inter', sans-serif",
            margin: '1em 0',
            transition: 'all 0.3s ease',
          }}
        />
        <textarea
          rows="10"
          placeholder="Paste job description here"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          required
          style={{
            padding: '1em',
            border: '2px solid #D8B4FE',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#F3E8FF',
            fontFamily: "'Inter', sans-serif",
            margin: '1em 0',
            transition: 'all 0.3s ease',
            resize: 'vertical',
            minHeight: '150px',
          }}
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(45deg, #7B3FE4, #D8B4FE)',
            boxShadow: '0 0 15px #C084FC',
            transition: 'all 0.3s ease',
            fontFamily: "'Orbitron', sans-serif",
            padding: '0.9em 2em',
            borderRadius: '10px',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 0 25px #C084FC';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 15px ';
          }}
        >
          Scan
        </button>
      </form>
    </div>
  );
}

export default UploadPage;