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


// Cria e adiciona o botão ao corpo da página
const button = document.createElement('button');
button.id = 'redirectButton';
button.innerText = 'Abrir página em 10 segundos';
document.body.appendChild(button);

// Cria e adiciona o contador ao corpo da página
const countdown = document.createElement('div');
countdown.id = 'countdown';
countdown.innerText = '10';
document.body.appendChild(countdown);

// Define o link para abrir após 10 segundos
const linkToOpen = 'https://www.exemplo.com'; // Substitua pelo link desejado

// Função que atualiza o countdown e abre a nova página
let timeLeft = 10;
const timer = setInterval(() => {
    timeLeft -= 1;
    countdown.innerText = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        // Abre a nova aba com o link especificado
        window.open(linkToOpen, '_blank');
        button.disabled = true; // Desativa o botão
        button.innerText = 'Página aberta!';
    }
}, 1000);

// Estiliza o botão
button.style.padding = '15px 30px';
button.style.fontSize = '18px';
button.style.backgroundColor = '#4CAF50'; // Cor do botão
button.style.color = 'white'; // Cor do texto
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.transition = 'background-color 0.3s';

button.onmouseover = () => {
    button.style.backgroundColor = '#45a049'; // Cor ao passar o mouse
};

button.onmouseout = () => {
    button.style.backgroundColor = '#4CAF50'; // Cor padrão
};
