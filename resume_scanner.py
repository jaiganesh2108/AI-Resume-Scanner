import spacy
import PyPDF2
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

nlp = spacy.load("en_core_web_sm")

def extract_text_from_pdf(pdf_file):
    reader = PyPDF2.PdfReader(pdf_file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

def preprocess(text):
    doc = nlp(text.lower())
    return " ".join([token.lemma_ for token in doc if token.is_alpha and not token.is_stop])

def process_resume(resume_file,job_description):
    resume_text = extract_text_from_pdf(resume_file)
    resume_clean = preprocess(resume_text)
    jd_clean = preprocess(job_description)

    tfidf = TfidfVectorizer()
    vectors = tfidf.fit_transform([resume_clean,jd_clean])
    score = cosine_similarity(vectors[0:1],vectors[1:2])[0][0]

    return round(score * 100, 2), resume_text 