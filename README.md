# 🧠 AI Resume Scanner

An AI-powered resume scanner built using **React (Vite)** and **Python Flask** that helps match your resume to a job description using **NLP** and **cosine similarity**.  

💡 Features a modern **glassmorphism UI** with a **neon purple theme**.

---

## 🗂️ Project Structure

```
ai-resume-scanner/
├── backend/
│   ├── app.py
│   └── resume_scanner.py
│
└── resume-scanner-ui/
    ├── src/
    │   ├── components/
    │   │   ├── IntroPage.jsx
    │   │   ├── UploadPage.jsx
    │   │   └── ResultPage.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    └── vite.config.js
```

---

## 🛠 Tech Stack

| Frontend                | Backend                  | Machine Learning         |
|-------------------------|--------------------------|---------------------------|
| React (Vite)            | Python + Flask + CORS    | spaCy (NLP), Scikit-Learn |
| Axios (API requests)    | PyPDF2 (PDF parsing)     | TfidfVectorizer + Cosine  |
| Glassmorphism CSS UI    | REST API (Flask route)   | Text preprocessing        |

---

## ⚙️ Setup Instructions

### ✅ 1. Clone the Repo

```bash
git clone https://github.com/jaiganesh2108/ai-resume-scanner.git
cd ai-resume-scanner
```

---

### 🧪 2. Start Backend (Flask API)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python app.py
```

The backend will run at: `http://localhost:5000`

---

### 🌐 3. Start Frontend (Vite + React)

```bash
cd resume-scanner-ui
npm install
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 💡 Features

- ✅ Resume upload (PDF parsing using PyPDF2)
- ✅ Job description text box
- ✅ Score calculation using cosine similarity
- ✅ Stylish glass UI (neon purple)
- ✅ Result page with resume preview

---

## ✨ Future Enhancements

- [ ] Skill extraction using Named Entity Recognition (NER)
- [ ] Highlight matched keywords in resume
- [ ] PDF generation of match report
- [ ] User login with history of scans

---

## 🤝 Contributing

Pull requests are welcome! If you have suggestions, feel free to open an issue or submit a PR.

---

## 🧑‍💻 Author

Made with ❤️ by [Jai Ganesh H](https://github.com/jaiganesh2108)

---

## 📄 License

This project is licensed under the MIT License.
