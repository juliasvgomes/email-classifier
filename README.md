# Email Classifier

[![Frontend](https://img.shields.io/badge/Frontend-React-blue?logo=react)](https://email-classifier-sage-gamma.vercel.app)  
[![Backend](https://img.shields.io/badge/Backend-FastAPI-green?logo=fastapi)](https://email-classifier-dz6s.onrender.com)  

Um sistema que classifica emails corporativos como **Produtivo** ou **Improdutivo** e gera respostas automáticas.  

Possui **backend** em FastAPI (Python) e **frontend** em React.

---

## 🌐 Deploy Online
Backend: Render: https://email-classifier-dz6s.onrender.com

Frontend: Vercel: https://email-classifier-dz6s.onrender.com/

## 📝 Funcionalidades

- Upload de arquivos de email (.txt, .pdf) ou inserção de texto direto.
- Classificação automática do email:
  - **Produtivo**: exige ação, resposta ou acompanhamento.
  - **Improdutivo**: não exige ação imediata.
- Geração de resposta automática adequada.
- Interface web simples, responsiva e intuitiva.
- Deploy online: **Backend Render**, **Frontend Vercel**.

---

## 🖥️ Tecnologias Utilizadas

### Backend
- Python 3.10+
- FastAPI
- Uvicorn

### Frontend
- React
- Fetch API para comunicação com o backend

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- Python 3.10+
- pip e venv

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Mac/Linux
pip install -r requirements.txt
cp .env.example .env  # configure a API key, se necessário
python -m uvicorn main:app --reload
```
API local: http://127.0.0.1:8000/docs

### Frontend
```bash
Copiar código
cd frontend
npm install
npm run dev
```
Frontend local: http://localhost:5173

