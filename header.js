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




        // Função para criar um pop-up com um botão de contagem regressiva
function criarPopupCountdown() {
    // Cria o contêiner do pop-up
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '50%';
    popupContainer.style.left = '50%';
    popupContainer.style.transform = 'translate(-50%, -50%)';
    popupContainer.style.backgroundColor = 'white';
    popupContainer.style.border = '2px solid #444';
    popupContainer.style.borderRadius = '8px';
    popupContainer.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    popupContainer.style.zIndex = '1000'; // Certifica que o pop-up esteja acima de outros elementos
    popupContainer.style.padding = '20px';
    popupContainer.style.textAlign = 'center';
    document.body.appendChild(popupContainer);

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
    popupContainer.appendChild(botao);

    // Adiciona um evento de clique para fechar o pop-up manualmente
    botao.onclick = () => {
        clearInterval(intervalo);
        popupContainer.style.display = 'none'; // Esconde o pop-up
    };

    // Função para atualizar a contagem
    const intervalo = setInterval(() => {
        contador--;
        botao.textContent = `Redirecionar em ${contador} segundos`;

        if (contador <= 0) {
            clearInterval(intervalo);
            popupContainer.style.display = 'none'; // Esconde o pop-up
            // Redireciona para a URL especificada
            window.location.href = 'https://www.exemplo.com'; // Substitua pelo seu link
        }
    }, 1000); // Atualiza a cada segundo
}

// Chama a função para criar o pop-up
window.onload = criarPopupCountdown;

