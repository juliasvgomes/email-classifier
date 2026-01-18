from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pypdf import PdfReader

from text_processing import preprocess_text
from ai_service import classify_and_generate_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/process-email")
async def process_email(
    text: str = Form(None),
    file: UploadFile = File(None)
):
    email_text = ""

    if text:
        email_text = text

    elif file:
        if file.filename.endswith(".txt"):
            email_text = (await file.read()).decode("utf-8")

        elif file.filename.endswith(".pdf"):
            reader = PdfReader(file.file)
            email_text = " ".join(page.extract_text() for page in reader.pages)

    processed_text = preprocess_text(email_text)
    categoria, resposta = classify_and_generate_response(processed_text)

    return {
        "categoria": categoria,
        "resposta": resposta
    }
