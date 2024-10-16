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

/////////////////////

// Aguarda 10 segundos antes de mostrar o pop-up
setTimeout(() => {
    // Cria o pop-up
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '20px'; // Distância do topo
    popup.style.left = '50%'; // Centraliza horizontalmente
    popup.style.transform = 'translateX(-50%)'; // Centraliza
    popup.style.backgroundColor = '#fff';
    popup.style.border = '2px solid #444';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    popup.style.padding = '20px';
    popup.style.zIndex = '1000'; // Coloca acima de outros elementos
    popup.innerHTML = `
        <h1>Seu Título Aqui</h1>
        <p>Conteúdo do pop-up em HTML pode ser inserido aqui.</p>
        <button id="closePopup" style="background-color: #ff4444; color: white; border: none; border-radius: 5px; padding: 10px; cursor: pointer;">Pular Propaganda</button>
    `;

    // Adiciona o pop-up ao headerContainer
    const headerContainer = document.getElementById('headerContainer');
    headerContainer.appendChild(popup);

    // Inicia o countdown de 10 segundos
    let countdown = 10;
    const countdownDisplay = document.createElement('div');
    countdownDisplay.style.marginTop = '10px'; // Espaço entre o conteúdo e o countdown
    countdownDisplay.innerText = `Fechar em ${countdown} segundos`;
    popup.appendChild(countdownDisplay);

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownDisplay.innerText = `Fechar em ${countdown} segundos`;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            popup.remove(); // Remove o pop-up após 10 segundos
        }
    }, 1000);

    // Adiciona a ação de fechar ao botão
    document.getElementById('closePopup').onclick = () => {
        clearInterval(countdownInterval); // Para o countdown
        popup.remove(); // Remove o pop-up ao clicar no botão
    };
}, 10000);
