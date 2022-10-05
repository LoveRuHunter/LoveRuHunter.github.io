let swap = document.querySelector('.swap');
let Button = document.querySelector('.theme-button')
Button.onclick = function() {
    swap.classList.toggle('Скрыть');
    swap.classList.toggle('Показать всё');
    console.log(swap.textContent)
};