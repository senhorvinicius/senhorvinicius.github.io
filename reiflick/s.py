import os
import re

def editar_arquivos_html(diretorio=".", codigo_adicional=""):
    for root, _, files in os.walk(diretorio):
        for file in files:
            if file.endswith(".html"):
                caminho_arquivo = os.path.join(root, file)
                print(f"Processando arquivo: {caminho_arquivo}")
                
                with open(caminho_arquivo, 'r', encoding='utf-8') as f:
                    conteudo = f.read()

                # Inserir o código logo abaixo do headerContainer
                conteudo_editado = re.sub(
                    r'(<div[^>]*id="headerContainer"[^>]*>)',
                    r'\1\n' + codigo_adicional,
                    conteudo
                )

                # Salvar as mudanças no arquivo
                with open(caminho_arquivo, 'w', encoding='utf-8') as f:
                    f.write(conteudo_editado)

# Trecho de código a ser inserido abaixo do headerContainer
codigo_novo = """
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #333;
        }

        .fixed-button {
            position: fixed;
            top: 20px;
            left: 20px;
            padding: 15px 25px;
            background-color: #1abc9c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            z-index: 1000;
            transition: background-color 0.3s;
        }

        .fixed-button:hover {
            background-color: #16a085;
        }

        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
        }

        .checkout-form-container {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 30px;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 100%;
            max-width: 400px;
            background-color: #fff;
            z-index: 1001;
        }

        .checkout-form h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #333;
            text-align: center;
        }

        .checkout-form input[type="submit"] {
            background-color: #1abc9c;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            transition: background-color 0.3s;
        }

        .checkout-form input[type="submit"]:hover {
            background-color: #16a085;
        }
    </style>
    <button class="fixed-button" id="ctaButton" onclick="toggleForm()">Assinar Agora</button>
    <div class="overlay" id="overlay" onclick="toggleForm()"></div>
    <div class="checkout-form-container" id="checkoutFormContainer">
        <form class="checkout-form" id="checkoutForm" onsubmit="return false;">
            <h1>Liberação IMEDIATA</h1>
            <input type="submit" value="Pagar e Liberar" onclick="prePopulateCheckout();">
        </form>
    </div>
"""

# Executar a função para editar os arquivos HTML
editar_arquivos_html(diretorio=".", codigo_adicional=codigo_novo)

