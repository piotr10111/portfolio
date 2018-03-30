(function() {

        // Menu scroll effect
        window.addEventListener('scroll', () => {

            const header = document.querySelector('.header'),
                positionY = window.pageYOffset || document.documentElement.scrollTop;

            if (positionY > 250) {
                header.classList.add('opacity');
            } else {
                header.classList.remove('opacity');
            }

        });

        // Second section container -> width++
        window.addEventListener('scroll', () => {

            const section = document.querySelector('.section__about');
            const offset = window.pageYOffset;
            const max_width = 1250;
            let x = section.offsetWidth;

            if (window.innerWidth >= 1440) {

                if (offset > 100) {
                    section.style.width = x + 'px';
                    x = x + 100;
                } else {
                    return
                }

                if (x >= 1250) {
                    section.style.width = max_width + 'px';
                }
            }
        });

        // Hamburger menu
        const button = document.querySelector('.header__button');
        button.addEventListener('click', (event) => {

            (event ? event : event = window.event);
            event.preventDefault();

            button.classList.toggle('header__button--close');
            document.querySelector('.nav__list').classList.toggle('nav__list--block');

        });

        // Detect when an element is in the viewport
        
        const skills = document.querySelectorAll( '.skills--item' );
        const images = document.querySelectorAll( '.portfolio--item' );
        if( window.innerWidth > 850 ) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {

                if (entry.intersectionRatio > 0 ) {
                    entry.target.classList.add('fadeInDown');
                }
         
            });
        });
     

            skills.forEach(image => {
                observer.observe(image);
            })
           
            images.forEach(image => {
                observer.observe(image);
            })

        }
 

        // Menu hide

        
        
}())







