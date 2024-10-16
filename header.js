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


        // Função para criar e mostrar o pop-up
function criarPopup() {
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '999';
    overlay.style.display = 'none'; // Inicialmente escondido
    document.body.appendChild(overlay);

    // Criar pop-up
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#fff';
    popup.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.zIndex = '1000';
    popup.style.width = '400px';
    popup.style.display = 'none'; // Inicialmente escondido
    document.body.appendChild(popup);

    // Conteúdo HTML do pop-up
    popup.innerHTML = `
        <h2>Bem-vindo ao nosso site!</h2>
        <p>Este pop-up contém conteúdo em HTML. Você pode personalizá-lo como desejar.</p>
        <div>
            <h3>Conteúdo Adicional:</h3>
            <p>Aqui estão algumas informações que você pode querer ver:</p>
            <ul>
                <li><strong>Informação 1:</strong> Detalhe interessante sobre o site.</li>
                <li><strong>Informação 2:</strong> Outra informação relevante para os visitantes.</li>
                <li><strong>Informação 3:</strong> Dicas e truques para navegar no site.</li>
            </ul>
        </div>
        <img src="https://via.placeholder.com/150" alt="Imagem Exemplo" style="width: 100%; margin: 10px 0; border-radius: 5px;">
        <p>Clique no botão abaixo para fechar.</p>
        <button id="skipButton" style="background-color: #007BFF; color: white; border: none; padding: 15px 30px; font-size: 16px; cursor: pointer; border-radius: 5px;">Pular Propaganda</button>
    `;

    // Exibir o pop-up após 10 segundos
    setTimeout(() => {
        overlay.style.display = 'block'; 
        popup.style.display = 'block'; 
    }, 10000);

    // Fechar o pop-up ao clicar no botão
    document.getElementById('skipButton').addEventListener('click', () => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
}

// Executar a função para criar o pop-up ao carregar a página
window.onload = criarPopup;

