var links = document.querySelectorAll('.nav-item');

links.forEach(li => {
    li.addEventListener('click', () => {
        resetLinks();
        li.classList.add('active')
    })
});

function resetLinks() {
    links.forEach(li => {
        li.classList.remove('active')
    })
};