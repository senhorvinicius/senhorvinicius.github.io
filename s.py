import os

# Obtém o diretório atual onde o script está sendo executado
diretorio = os.getcwd()

# Leia o conteúdo do arquivo codigo.txt
with open('codigo.txt', 'r') as codigo_file:
    codigo = codigo_file.read()

# Percorra todos os arquivos no diretório e subdiretórios
for pasta_atual, _, arquivos in os.walk(diretorio):
    for nome_arquivo in arquivos:
        # Verifique se o arquivo tem a extensão .html
        if nome_arquivo.endswith('.html'):
            # Crie o caminho completo para o arquivo
            caminho_arquivo = os.path.join(pasta_atual, nome_arquivo)

            # Abra o arquivo HTML para leitura
            with open(caminho_arquivo, 'r') as html_file:
                conteudo = html_file.readlines()

            # Adicione o código logo após a tag <html>
            for i, linha in enumerate(conteudo):
                if '<html' in linha:
                    conteudo.insert(i + 1, codigo + '\n')  # Adiciona o código após a linha que contém <html>
                    break  # Pare de procurar após encontrar a tag

            # Abra o arquivo HTML para escrita
            with open(caminho_arquivo, 'w') as html_file:
                html_file.writelines(conteudo)

            print(f'Código adicionado ao arquivo: {caminho_arquivo}')

print('Adição de código concluída!')

