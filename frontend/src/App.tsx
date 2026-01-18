import { useState } from "react";
import { EmailForm } from "./components/EmailForm";
const API_URL = import.meta.env.VITE_API_URL;

type Result = {
  categoria: string;
  resposta: string;
};

function App() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/process-email`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch {
      alert("Erro ao processar o email");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>Classificador de Emails</h1>

      <EmailForm onSubmit={handleSubmit} loading={loading} />

      {result && (
        <div className="result">
          <strong>Categoria:</strong>
          <p>{result.categoria}</p>

          <strong>Resposta sugerida:</strong>
          <p>{result.resposta}</p>
        </div>
      )}
    </div>
  );
}

export default App;
