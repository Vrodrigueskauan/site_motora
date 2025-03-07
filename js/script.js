let index = 0;
const images = document.querySelectorAll(".fade-images img");
function changeImage() {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
}
setInterval(changeImage, 2000);

window.addEventListener("scroll", function() {
    // Pegando a posição do scroll (quanto mais você rolar, maior será o valor)
    let scrollPosition = window.scrollY;
    
    // Definindo as cores de início e fim
    let startColor = { r: 255, g: 255, b: 224 }; // Cor inicial (bege claro)
    let endColor = { r: 244, g: 225, b: 161 }; 

    // Calculando a porcentagem da rolagem
    let scrollPercentage = scrollPosition / (document.documentElement.scrollHeight - window.innerHeight);

    // Interpolando as cores com base na rolagem
    let r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPercentage);
    let g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPercentage);
    let b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPercentage);

    // Atualizando o fundo da página com a cor interpolada
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
