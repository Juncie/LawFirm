window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav')
    nav.classList.toggle('navScroll', window.scrollY > 0)
})