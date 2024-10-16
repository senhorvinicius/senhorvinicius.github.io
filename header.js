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



// Função para criar um botão com contagem regressiva
function criarBotaoCountdown() {
    // Cria o contêiner do botão
    const botao = document.createElement('button');
    botao.style.position = 'fixed';
    botao.style.top = '20px'; // Posição no topo
    botao.style.left = '50%'; // Centraliza horizontalmente
    botao.style.transform = 'translateX(-50%)'; // Ajusta a posição para o centro
    botao.style.backgroundColor = '#FF5733'; // Cor de fundo
    botao.style.color = 'white'; // Cor do texto
    botao.style.border = 'none'; // Sem borda
    botao.style.padding = '15px 30px'; // Espaçamento
    botao.style.textAlign = 'center'; // Centraliza texto
    botao.style.textDecoration = 'none'; // Sem sublinhado
    botao.style.display = 'none'; // Inicialmente escondido
    botao.style.fontSize = '18px'; // Tamanho da fonte
    botao.style.margin = '4px 2px'; // Margem
    botao.style.cursor = 'pointer'; // Cursor pointer
    botao.style.borderRadius = '25px'; // Bordas arredondadas
    botao.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Sombra
    botao.style.transition = 'background-color 0.3s, transform 0.3s'; // Transições
    document.body.appendChild(botao);

    // Efeito de hover
    botao.onmouseover = () => {
        botao.style.backgroundColor = '#FF4C20'; // Cor ao passar o mouse
        botao.style.transform = 'scale(1.05)'; // Aumenta o botão ao passar o mouse
    };
    botao.onmouseout = () => {
        botao.style.backgroundColor = '#FF5733'; // Cor original
        botao.style.transform = 'scale(1)'; // Tamanho original
    };

    // Variável de contagem
    let contador = 10;
    
    // Atualiza o texto do botão
    function atualizarTextoBotao() {
        botao.textContent = `Abrir nova guia em ${contador} segundos`;
    }

    // Função para mostrar o botão
    function mostrarBotao() {
        botao.style.display = 'block'; // Mostra o botão
        atualizarTextoBotao(); // Atualiza o texto
        const intervalo = setInterval(() => {
            contador--;
            atualizarTextoBotao();

            if (contador <= 0) {
                clearInterval(intervalo);
                botao.style.display = 'none'; // Esconde o botão após 10 segundos
                // Abrir a nova guia após 10 segundos
                window.open('https://www.exemplo.com', '_blank'); // Substitua a URL aqui
            }
        }, 1000); // Atualiza a cada segundo
    }

    // Apresenta o botão após 10 segundos do carregamento
    setTimeout(() => {
        contador = 10; // Reinicia o contador
        mostrarBotao(); // Mostra o botão
    }, 10000); // 10 segundos após o carregamento
}

// Chama a função para criar o botão
window.onload = criarBotaoCountdown;
