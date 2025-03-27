// Função para ativar animação no scroll (fade-in genérico)
function fadeInHaven() {
    let elements = document.querySelectorAll('.fade-in-haven');
    let windowHeight = window.innerHeight;

    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Adiciona a função ao evento de scroll
window.addEventListener('scroll', fadeInHaven);

// Executa uma vez ao carregar a página para ativar elementos visíveis
document.addEventListener('DOMContentLoaded', fadeInHaven);

// Função de animação ao rolar até a seção para a animação personalizada
document.addEventListener("DOMContentLoaded", function () {
    function fadeinhaven() {
        const elements = document.querySelectorAll(".fadeinhaven");
        elements.forEach(el => {
            const position = el.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight - 50) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeinhaven);
    fadeinhaven();
});

// Função para verificar a rolagem e mostrar/esconder o botão
window.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner');
    const button = document.querySelector('.button');
    
    const bannerRect = banner.getBoundingClientRect();
    const buttonVisible = bannerRect.bottom <= 0;

    if (buttonVisible) {
        button.classList.add('show'); // Mostra o botão quando não está na div banner
    } else {
        button.classList.remove('show'); // Oculta o botão quando estiver dentro da div banner
    }
});

// Criando o observador para a visibilidade dos cards de personagens
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quando a seção aparecer, aplicar as animações
            entry.target.querySelector('.texto').classList.add('fadeinTextFromLeft');
            entry.target.querySelector('.imagem').classList.add('fadeinImageFromRight');
            observer.unobserve(entry.target); // Parar de observar após a animação
        }
    });
}, {
    threshold: 0.25 // Quando 25% da seção estiver visível
});

// Seleciona a seção para ser observada
const section = document.querySelector('.tratamentos-deficiencias-motoras');
observer.observe(section);

// Criando o observador para os cards de personagens e animações baseadas na rolagem
const personagemObserver = new IntersectionObserver((entries, personagemObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona as animações específicas ao personagem
            if (entry.target.classList.contains('personagem1')) {
                entry.target.classList.add('anim-esquerda');
            } else if (entry.target.classList.contains('personagem2')) {
                entry.target.classList.add('anim-topo');
            } else if (entry.target.classList.contains('personagem3')) {
                entry.target.classList.add('anim-direita');
            } else if (entry.target.classList.contains('personagem4')) {
                entry.target.classList.add('anim-esquerda');
            } else if (entry.target.classList.contains('personagem5')) {
                entry.target.classList.add('anim-baixo');
            } else if (entry.target.classList.contains('personagem6')) {
                entry.target.classList.add('anim-direita');
            }
            personagemObserver.unobserve(entry.target); // Parar de observar após a animação
        }
    });
}, {
    threshold: 0.5 // 50% do personagem precisa estar visível
});

// Seleciona os personagens para serem observados
const personagens = document.querySelectorAll('.personagem');
personagens.forEach(personagem => {
    personagemObserver.observe(personagem);
});

function kingcrimson() {
    // Seleciona o h2 e os cards de personagem dentro da seção
    const elementos = document.querySelectorAll('.secao-personagens h2, .secao-personagens .personagem');
    
    // Cria o observer para detectar quando os elementos entram na viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('kingcrimson');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Quando 50% do elemento estiver visível
    });
    
    elementos.forEach(el => observer.observe(el));
}

// Chama a função quando o conteúdo for carregado
document.addEventListener('DOMContentLoaded', kingcrimson);


document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('.dados-deficiencias');
    const imagem = section.querySelector('.imagem-container');
    const texto = section.querySelector('.texto-container');
  
    // Cria o observer para detectar quando a seção está visível (50% visível)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imagem.classList.add('fadein-left');
          texto.classList.add('fadein-right');
          observer.disconnect(); // Para a observação após a animação
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(section);
  });
  