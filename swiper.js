let Button = document.querySelector('.swiper-look-more--button') // кнопка скрытия=раскрытия
let RepairMenuItems = document.querySelectorAll('.swiper-slide__hidden') // коллекция всех элементов с классом swiper-slide__hidden
let ArrowOfButton = document.querySelector('.swiper-look-more--img') // иконка стрелки

Button.onclick = function() {
    let lessText = 'Скрыть' // текст кнопки, когда скрыть
    let moreText = 'Показать все' // текст кнопки когда показать все

    //  .innerHtml - посмотреть/поменять текст внутри тега

    if (Button.innerHTML === lessText) { // проверка на то, в каком состоянии у нас кнопка в зависимости от текста (Если у кнопки сейчас Скрыть)
        Button.innerHTML = moreText; // меняем текст кнопки на Показать
        RepairMenuItems.forEach((element) => {
            element.style.display = 'none' // к каждому нужному элементу добавляем стиль скрытия
        })
        // эквивалент:
        // for(let i = 0; i <= RepairMenuItems.length; i++) {
        //     RepairMenuItems[i].style.display = 'none'
        // }
        ArrowOfButton.classList.add('swap') // добавляем стрелки класс, который отвечает за ее поворот
    } else { // если текст у кнопки Показать все
        Button.innerHTML = lessText; // меняем текст на Скрыть
        RepairMenuItems.forEach((element) => { // добавляем видимость нужным элементам
            element.style.display = 'block'
        })
        ArrowOfButton.classList.remove('swap') // удаляем поворот у икноки
    }

};
// const slider = document.querySelector('.swiper-brand');
// let mySwiper;
//
// function mobileSlider() {
//     if (window.innerWidth <= 320 && slider.dataset.mobile === 'false') {
//         mySwiper = new Swiper(slider, {
//             slidesPerView: 9,
//             spaceBetween: 10,
//             loop: true,
//             slideClass: 'card',
//
//         });
//
//         slider.dataset.mobile = 'true';
//     }
//
//     if (window.innerWidth > 320) {
//         slider.dataset.mobile = 'false';
//         if (slider.classList.contains('swiper-container-initialized')) {
//             mySwiper.destroy();
//         }
//     }
// }
//
// mobileSlider()
//
// window.addEventListener('resize', () => {
//     mobileSlider();
// });
new Swiper('.swiper-slide', {
navigation: {
    nextE1: '.swiper-button-next',
    prevE1: '.swiper-button-prev'
},
});