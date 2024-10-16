// header.js
(function() {
    var headerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                    <li><a href="contato.html">Contato</a></li>
                    <li><a href="https://www.novosite.com">Outro Site</a></li>
                </ul>
                <button id="ad-button">Anuncie Aqui</button>
            </nav>
           
        </header>
    `;

    // Adiciona o cabeçalho ao contêiner
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('headerContainer').innerHTML = headerHTML;

        // Adiciona a tag do Google Analytics ao cabeçalho
        var gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-68NNQZD8FS";
        document.head.appendChild(gtagScript);
        
        var gtagInit = document.createElement('script');
        gtagInit.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-68NNQZD8FS');
        `;
        document.head.appendChild(gtagInit);

        // Adiciona a funcionalidade do botão
        document.getElementById('ad-button').addEventListener('click', function() {
            window.open('https://www.linkparaanuncio.com', '_blank'); // Altere o link para o URL desejado
        });
    });
})();

// Função para criar o botão de contagem regressiva
function criarBotaoCountdown() {
    const headerContainer = document.getElementById('headerContainer');

    // Cria o botão
    const botao = document.createElement('button');
    botao.style.backgroundColor = '#4CAF50'; // Cor de fundo
    botao.style.color = 'white'; // Cor do texto
    botao.style.border = 'none'; // Sem borda
    botao.style.padding = '15px 32px'; // Espaçamento
    botao.style.textAlign = 'center'; // Centraliza texto
    botao.style.textDecoration = 'none'; // Sem sublinhado
    botao.style.display = 'inline-block'; // Exibe como bloco inline
    botao.style.fontSize = '16px'; // Tamanho da fonte
    botao.style.margin = '4px 2px'; // Margem
    botao.style.cursor = 'pointer'; // Cursor pointer
    botao.style.borderRadius = '8px'; // Bordas arredondadas
    botao.id = 'botaoCountdown'; // ID do botão

    // Adiciona o texto inicial
    let contador = 10;
    botao.textContent = `Redirecionar em ${contador} segundos`;
    headerContainer.appendChild(botao);

    // Função para atualizar a contagem
    const intervalo = setInterval(() => {
        contador--;
        botao.textContent = `Redirecionar em ${contador} segundos`;

        if (contador <= 0) {
            clearInterval(intervalo);
            // Redireciona para a URL especificada
            window.location.href = 'https://www.exemplo.com'; // Substitua pelo seu link
        }
    }, 1000); // Atualiza a cada segundo
}

// Chama a função para criar o botão
criarBotaoCountdown();
