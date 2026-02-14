// Seleciona todos os números animados
const numbers = document.querySelectorAll(".number");

// Função para animar
function animateNumbers() {
    numbers.forEach(num => {
        const target = +num.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                num.innerText = target;
                clearInterval(interval);
            } else {
                num.innerText = Math.floor(count);
            }
        }, 20);
    });
}

// Ativa ao rolar
window.addEventListener("scroll", () => {
    const stats = document.querySelector(".stats");
    const position = stats.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen) {
        animateNumbers();
    }
});
