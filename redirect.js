// redirect.js
 (function() {
 //   var redirectUrl = "https://www.novosite.com"; // URL para redirecionar

    // Condição de redirecionamento (mude 'true' para sua condição)
    if (true) { // Exemplo: true ou alguma outra condição
        window.location.href = redirectUrl;
    }
})();



// Função para redirecionar o usuário ao tentar fechar a aba
window.addEventListener('beforeunload', function (event) {
    // Defina o link para onde você quer redirecionar
    const linkRedirecionamento = "https://www.seulink.com"; // Altere para o link desejado

    // Exibir um aviso ao usuário
    event.preventDefault(); // Para alguns navegadores
    event.returnValue = ''; // Para outros navegadores

    // Não é possível redirecionar diretamente aqui, pois isso é bloqueado por motivos de segurança.
    // window.location.href = linkRedirecionamento; // Comentado porque não funcionará aqui.
});

// O redirecionamento pode ser implementado em outro evento, se necessário.
