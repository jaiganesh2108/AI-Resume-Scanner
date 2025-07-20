from flask import Flask, request, jsonify
from flask_cors import CORS
from resume_scanner import process_resume

app = Flask(__name__)
CORS(app)

@app.route('/api/scan', methods=['POST'])
def scan_resume():
    resume = request.files['resume']
    jd = request.form['job_description']
    score, parsed_text = process_resume(resume, jd)
    return jsonify({
        'score': score,
        'parsed_text': parsed_text[:1000]
    })
if __name__ == '__main__':
    app.run(debug=True)