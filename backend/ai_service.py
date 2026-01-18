def classify_and_generate_response(email_text: str):
    keywords_produtivo = [
        "cobrança", "problema", "erro", "urgente",
        "reclamação", "solicito", "verificação", "pagamento"
    ]

    text_lower = email_text.lower()

    if any(word in text_lower for word in keywords_produtivo):
        categoria = "Produtivo"
        resposta = (
            "Olá,"
            "Recebemos sua mensagem e já estamos verificando a situação. "
            "Em breve retornaremos com mais informações."
            "Atenciosamente,"
        )
    else:
        categoria = "Improdutivo"
        resposta = (
            "Olá,"
            "Agradecemos seu contato. "
            "Sua mensagem foi recebida com sucesso."
            "Atenciosamente,"
        )

    return categoria, resposta
