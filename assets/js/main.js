const searchBox = document.querySelector('.search');
const searchBtn = document.querySelector('.search-btn');
const searchInp = document.querySelector('.desk-input');

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
})

const currentLang = document.querySelector('.current');
const langs = document.querySelector('.languages');
const icon = document.querySelector('.language .icon');

currentLang.addEventListener('click', (e) => {
    langs.classList.toggle('active');
    icon.classList.toggle('active');
})

const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const navBar = document.querySelector('nav');
const sectionNav = document.querySelector('.section-nav');

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

const upIcon = document.querySelector('.up-icon');
const stickyIcons = document.querySelector('.contact-links');
window.onscroll = function () {
    if (sectionNav) {
        if (window.scrollY > 50) {
            sectionNav.style.backgroundColor = "#fff";
        } else {
            sectionNav.style.backgroundColor = "transparent";
        }
    }

    if (window.scrollY > 300) {
        upIcon.classList.add('show');
        stickyIcons.classList.add('active');
    } else {


    }

    if (window.scrollY != 0) {
        if (window.scrollY > 5264) {
            stickyIcons.classList.remove('active');

        } else {
            stickyIcons.classList.add('active');
        }
    } else {
        stickyIcons.classList.remove('active');
    }
};



const videos = document.querySelectorAll('video');
videos.forEach(video => {
    video.addEventListener('mouseenter', function () {
        videos.forEach(v => {
            if (v !== video) {
                v.pause();
                v.nextElementSibling.style.display = 'block';
            }
        });
        video.play();
    });

    video.addEventListener('mouseleave', function () {
        videos.forEach(v => {
            v.nextElementSibling.style.display = 'none';
            v.play();
        });
    });
});



AOS.init();