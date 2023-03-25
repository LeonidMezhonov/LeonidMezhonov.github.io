const toTop = document.querySelector('#back_to_top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});