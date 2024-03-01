const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const mainBtn = document.querySelector('.main__btn');

const showMobileMenu = () => {
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('show')
}

mainBtn.addEventListener('click', () => {
    window.location.href = '/pages/catalog.html';
})

