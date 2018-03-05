(function() {
    
    // Menu scroll effect
    window.addEventListener( 'scroll', () => {

        const header = document.querySelector( '.header' ),
              positionY = window.pageYOffset || document.documentElement.scrollTop;

        if( window.innerWidth > 1023 ) {    

            if( positionY > 250 ) {
                header.classList.add( 'opacity' );
            } else {
                header.classList.remove( 'opacity' );
            }
        }

    } );

    // Second section container -> width++
    window.addEventListener( 'scroll', () => {

        const section = document.querySelector( '.section__offer' );
        const offset = window.pageYOffset;
        const max_width = 1250;
        let x = section.offsetWidth;

        if( offset > 100 ) {
            section.style.width = x + 'px';
            x = x + 1;
        } else {return}
        
        if ( x >= 1250 ) {
            section.style.width = max_width + 'px';
        } 
        console.log(x);

    } );
      
    
}())
