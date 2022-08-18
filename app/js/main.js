let burgerBtn = document.querySelector('.header__burger-btn')
let burgerMenu = document.querySelector('.header__burger-menu')

burgerBtn.onclick = function () {
    this.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
}