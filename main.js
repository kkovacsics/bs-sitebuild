'use strict';

$('[data-toggle="tooltip"]').tooltip();

let last_known_scroll_position = 0;
let ticking = false;

const navbar = document.querySelector('.navbar');
function doSomething(scroll_pos) {
    if (scroll_pos > 0) {
        navbar.classList.add('nav-bg');
    } else {
        navbar.classList.remove('nav-bg');
    }
}

document.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});