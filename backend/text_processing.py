import nltk
import string
from nltk.corpus import stopwords

nltk.download('stopwords')

def preprocess_text(text: str) -> str:
    text = text.lower()
    text = text.translate(str.maketrans('', '', string.punctuation))
    
    stop_words = set(stopwords.words('portuguese'))
    words = text.split()
    filtered_words = [w for w in words if w not in stop_words]

    return " ".join(filtered_words)