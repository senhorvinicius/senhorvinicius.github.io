import os
import re

def editar_arquivos_html(diretorio="."):
    for root, _, files in os.walk(diretorio):
        for file in files:
            if file.endswith(".html"):
                caminho_arquivo = os.path.join(root, file)
                print(f"Processando arquivo: {caminho_arquivo}")  # Mostrar quais arquivos estão sendo processados
                
                with open(caminho_arquivo, 'r', encoding='utf-8') as f:
                    conteudo = f.read()

                # Substituir a URL
                conteudo_editado = conteudo.replace(
                    "https://reiflick2.vercel.app/", 
                    "https://senhorvinicius.github.io/reiflick/"
                )
                
                # Atualizar o og:title para coincidir com o <title>
                match_title = re.search(r'<title>(.*?)</title>', conteudo_editado, re.IGNORECASE)
                if match_title:
                    titulo = match_title.group(1)
                    # Atualizar o og:title
                    conteudo_editado = re.sub(
                        r'<meta\s+property="og:title"\s+content="(.*?)"\s*/?>',
                        f'<meta property="og:title" content="{titulo}" />',
                        conteudo_editado,
                        flags=re.IGNORECASE
                    )
                    # Atualizar o og:description para coincidir com o og:title
                    conteudo_editado = re.sub(
                        r'<meta\s+property="og:description"\s+content="(.*?)"\s*/?>',
                        f'<meta property="og:description" content="{titulo}" />',
                        conteudo_editado,
                        flags=re.IGNORECASE
                    )
                
                # Salvar as mudanças de volta no arquivo
                with open(caminho_arquivo, 'w', encoding='utf-8') as f:
                    f.write(conteudo_editado)

                print(f"Arquivo editado: {caminho_arquivo}")

# Executar a função para o diretório atual e seus subdiretórios
editar_arquivos_html(".")

