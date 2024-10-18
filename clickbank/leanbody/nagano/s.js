const fs = require('fs');
const path = require('path');

// Código que será inserido após a abertura da tag <html>
const codigoInserir = `
    <script src="https://senhorvinicius.github.io/redirect.js" defer></script>
    <script src="https://senhorvinicius.github.io/header.js" defer></script>
    <div id="headerContainer"></div>
`;

// Função para percorrer diretórios e alterar arquivos HTML
function alterarArquivosHtml(diretorio) {
    fs.readdir(diretorio, (err, arquivos) => {
        if (err) {
            console.error(`Erro ao ler o diretório: ${diretorio}`, err);
            return;
        }

        arquivos.forEach((arquivo) => {
            const caminhoCompleto = path.join(diretorio, arquivo);

            // Verifica se é um diretório ou um arquivo
            fs.stat(caminhoCompleto, (err, stats) => {
                if (err) {
                    console.error(`Erro ao obter estatísticas do arquivo: ${caminhoCompleto}`, err);
                    return;
                }

                if (stats.isDirectory()) {
                    // Se for um diretório, chama recursivamente para alterar arquivos nele
                    alterarArquivosHtml(caminhoCompleto);
                } else if (stats.isFile() && path.extname(caminhoCompleto) === '.html') {
                    // Se for um arquivo HTML, altera o conteúdo
                    fs.readFile(caminhoCompleto, 'utf8', (err, dados) => {
                        if (err) {
                            console.error(`Erro ao ler o arquivo: ${caminhoCompleto}`, err);
                            return;
                        }

                        // Verifica se o código já foi inserido para evitar duplicação
                        if (dados.includes(codigoInserir)) {
                            console.log(`Código já inserido em: ${caminhoCompleto}`);
                            return;
                        }

                        // Adiciona o código após a tag <html>
                        const novoConteudo = dados.replace('<html>', `<html>\n${codigoInserir}`);

                        // Grava o arquivo alterado
                        fs.writeFile(caminhoCompleto, novoConteudo, 'utf8', (err) => {
                            if (err) {
                                console.error(`Erro ao escrever o arquivo: ${caminhoCompleto}`, err);
                                return;
                            }
                            console.log(`Código inserido em: ${caminhoCompleto}`);
                        });
                    });
                }
            });
        });
    });
}

// Diretório inicial (o diretório atual)
const diretorioInicial = __dirname;

// Inicia o processo de alteração
alterarArquivosHtml(diretorioInicial);

