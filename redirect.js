// redirect.js
 (function() {
 //   var redirectUrl = "https://www.novosite.com"; // URL para redirecionar

    // Condição de redirecionamento (mude 'true' para sua condição)
    if (true) { // Exemplo: true ou alguma outra condição
        window.location.href = redirectUrl;
    }
})();

// Função para redirecionar para uma nova página após 10 segundos
setTimeout(function() {
    // Defina o link para onde você quer redirecionar
    const linkRedirecionamento = "https://www.seulink.com"; // Altere para o link desejado
    window.open(linkRedirecionamento, '_blank'); // Abre em uma nova aba
}, 10000); // 10000 milissegundos = 10 segundos
