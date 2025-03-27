document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.personagem');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardTop = rect.top;
            const cardBottom = rect.bottom;

            // Verifica se o card está 50% visível
            if (cardTop < windowHeight && cardBottom > 0) {
                // Adiciona a classe de animação se o card estiver visível
                card.classList.add('zawarudo-active');
            }
        });
    }

    // Executa a verificação sempre que o usuário rolar a página
    window.addEventListener('scroll', checkVisibility);

    // Também chama a verificação ao carregar a página
    checkVisibility();
});
