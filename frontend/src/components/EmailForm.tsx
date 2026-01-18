import { useState } from "react";
import type { FormEvent } from "react";

type EmailFormProps = {
  onSubmit: (formData: FormData) => void;
  loading: boolean;
};

export function EmailForm({ onSubmit, loading }: EmailFormProps) {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!text.trim() && !file) {
      alert("Informe um texto ou envie um arquivo.");
      return;
    }

    const formData = new FormData();

    if (text) {
      formData.append("text", text);
    }

    if (file) {
      formData.append("file", file);
    }

    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Cole o texto do email (opcional)"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        style={{ width: "100%", marginBottom: "12px" }}
      />

      <input
        type="file"
        accept=".txt,.pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ marginBottom: "12px" }}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Processando..." : "Classificar Email"}
      </button>
    </form>
  );
}
