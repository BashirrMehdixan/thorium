const searchBox = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const searchInp = document.querySelector('.desk-input');
const currentLang = document.querySelector('.current');
const langs = document.querySelector('.languages');
const icon = document.querySelector('.language .icon');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('nav');
const sectionNav = document.querySelector('.section-nav');
const upIcon = document.querySelector('.up-icon');
const stickyIcons = document.querySelector('.contact-links');
const footer = document.querySelector('footer');
const servicesSection = document.querySelector('.services-section');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchBox.classList.toggle('active');
    searchInp.classList.toggle('active');
});

document.addEventListener('click', e => {
    if (!e.target.classList.contains('search-btn') && !e.target.classList.contains('nav-search')) {
        searchBox.classList.remove('active');
        searchInp.classList.remove('active');
    }
});

currentLang.addEventListener('click', (e) => {
    langs.classList.toggle('active');
    icon.classList.toggle('active');
});

openNav.addEventListener('click', (e) => {
    navBar.classList.add('active');
    closeNav.style.display = 'block';
    openNav.style.display = 'none';
});

closeNav.addEventListener('click', (e) => {
    navBar.classList.remove('active');
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
});

window.onscroll = function () {
    if (window.scrollY > 300) {
        upIcon.classList.add('show');
        stickyIcons.classList.add('active');
    } else {
        upIcon.classList.remove('show');
        stickyIcons.classList.remove('active');
    }
};

Fancybox.bind("[data-fancybox]");

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
};

const observerFooter = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            stickyIcons.style.display = 'none';
        } else {
            stickyIcons.style.display = 'block';
        }
    });
}, options);

observerFooter.observe(footer);

AOS.init();