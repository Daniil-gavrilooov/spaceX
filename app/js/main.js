let burgerBtn = document.querySelector('.header__burger-btn')
let burgerMenu = document.querySelector('.header__burger-menu')
let menuItem = document.querySelectorAll('.header__menu-item')

burgerBtn.onclick = function () {
    this.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
}

menuItem.forEach(item => item.onclick = function() {
    burgerBtn.classList.remove('header__burger-btn--active')
    burgerMenu.classList.remove('header__burger-menu--active')
})
