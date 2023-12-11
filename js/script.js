const toTopButton = document.querySelector('#toTopButton')

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        toTopButton.style.display = "flex";
    } else {
        toTopButton.style.display = "none";
    }
})