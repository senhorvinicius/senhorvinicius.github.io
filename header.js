nh// header.js

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

// header.js

// Função para criar a header
function criarHeader() {
    // Cria o elemento da header
    const header = document.createElement('header');
    header.style.backgroundColor = '#444'; // Cor de fundo da header
    header.style.color = '#fff'; // Cor do texto
    header.style.padding = '10px 20px'; // Padding
    header.style.display = 'flex'; // Usa flexbox para alinhar
    header.style.alignItems = 'center'; // Centraliza verticalmente
    header.style.justifyContent = 'space-between'; // Espaço entre os itens
    header.style.position = 'relative'; // Para posicionamento do popup se necessário
    header.style.zIndex = '1000'; // Garante que a header fique sobre outros elementos

    // Título da header
    const titulo = document.createElement('h1');
    titulo.innerText = 'Meu Catálogo de PDFs';
    titulo.style.margin = '0'; // Remove margens
    titulo.style.fontSize = '24px'; // Tamanho da fonte

    // Cria a barra de navegação
    const nav = document.createElement('nav');

    // Cria os links de navegação
    const links = [
        { texto: 'Home', url: 'index.html' },   // Substitua pelo URL desejado
        { texto: 'Sobre', url: 'sobre.html' },   // Substitua pelo URL desejado
        { texto: 'Contato', url: 'contato.html' } // Substitua pelo URL desejado
    ];

    links.forEach(linkInfo => {
        const link = document.createElement('a');
        link.innerText = linkInfo.texto;
        link.href = linkInfo.url; // Link para onde irá
        link.style.color = '#fff'; // Cor do link
        link.style.marginLeft = '20px'; // Espaço entre os links
        link.style.textDecoration = 'none'; // Remove underline
        link.onmouseover = () => link.style.textDecoration = 'underline'; // Efeito hover
        link.onmouseout = () => link.style.textDecoration = 'none'; // Efeito hover

        nav.appendChild(link); // Adiciona o link à nav
    });

    // Adiciona o título e a nav à header
    header.appendChild(titulo);
    header.appendChild(nav);

    // Adiciona a header à headerContainer
    const headerContainer = document.getElementById('headerContainer');
    if (headerContainer) {
        headerContainer.appendChild(header);
    } else {
        console.error('headerContainer não encontrado no DOM.');
    }
}

// Chama a função para criar a header
criarHeader();

