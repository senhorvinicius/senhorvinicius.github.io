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

        // Adiciona a meta tag do Google AdSense ao cabeçalho
        var adsenseMeta = document.createElement('meta');
        adsenseMeta.name = "google-adsense-account";
        adsenseMeta.content = "ca-pub-1400042570017638";
        document.head.appendChild(adsenseMeta);

        // Adiciona a funcionalidade do botão
        document.getElementById('ad-button').addEventListener('click', function() {
            window.open('https://www.linkparaanuncio.com', '_blank'); // Altere o link para o URL desejado
        });
    });
})();
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
            window.open('https://wa.me/5516997235877?text=oi%20quero%20anunciar%20no%20site', '_blank'); // Altere o link para o URL desejado
        });
    });
})();
