document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Funcionalidade Voltar ao Topo
    const scrollButton = document.getElementById('scrollToTopBtn');

    // Exibe o botão quando o usuário rola 300px para baixo
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };

    // Rola para o topo quando o botão é clicado
    scrollButton.addEventListener('click', () => {
        // Rola suavemente para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Site CONVIVA SP (DE Adamantina) carregado com sucesso!');
});