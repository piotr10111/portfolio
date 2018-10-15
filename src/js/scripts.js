'use strict';

(function () {
    // Menu scroll effect

    window.addEventListener('scroll', function () {

        var header = document.querySelector('.header'),
            positionY = window.pageYOffset || document.documentElement.scrollTop;

        if (positionY > 250) {
            header.classList.add('opacity');
        } else {
            header.classList.remove('opacity');
        }
    });

    // Second section container -> width++
    window.addEventListener('scroll', function () {

        var section = document.querySelector('.section__about');
        var offset = window.pageYOffset;
        var max_width = 1250;
        var x = section.offsetWidth;

        if (window.innerWidth >= 1440) {

            if (offset > 100) {
                section.style.width = x + 'px';
                x = x + 100;
            } else {
                return;
            }

            if (x >= 1250) {
                section.style.width = max_width + 'px';
            }
        }
    });

    // Hamburger menu
    var button = document.querySelector('.header__button');
    button.addEventListener('click', function (event) {
        event ? event : event = window.event;
        event.preventDefault();
        button.classList.toggle('.header__button--close');
    });

    // Detect when an element is in the viewport

    var skills = document.querySelectorAll('.skills--item');
    var images = document.querySelectorAll('.portfolio--item');
    if (window.innerWidth > 850) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {

                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('fadeInDown');
                }
            });
        });

        skills.forEach(function (image) {
            observer.observe(image);
        });

        images.forEach(function (image) {
            observer.observe(image);
        });
    }

    // Menu hide after link clicked
    if (window.innerWidth <= 850) {
        var hide = function hide() {
            var ul = document.querySelector('.nav__list');
            ul.classList.toggle('nav__list--block');

            var button = document.querySelector('.header__button');
            button.classList.toggle('header__button--close');
        };

        var links = Array.from(document.querySelectorAll('.clicked'));
        links.forEach(function (link) {
            return link.addEventListener('click', hide);
        });
    }

    // Smooth Scroll
    new ScrollMenu('.scroll', {
        duration: 900,
        //activeOffset: 100,
        scrollOffset: 0
    });
})();