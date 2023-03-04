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



const addActiveClass = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const currentLink = document.querySelector(`.nav-item a[href='#${entry.target.id}']`);
            if (currentLink?.getAttribute("data-link") == entry.target.id)
                currentLink.classList.add("active");
            resetLinks()
        }
        else if (!entry.isIntersecting) {
            const currentLink2 = document.querySelector(`.nav-item a[href='#${entry.target.id}']`)
            if (currentLink2?.classList)
                currentLink2.classList.remove("active")
        }
    });
};

const options = {
    threshold: 0.6,
};

const observer = new IntersectionObserver(addActiveClass, options);

const section = document.querySelectorAll('section');
section.forEach((section) => {
    observer.observe(section);
})
