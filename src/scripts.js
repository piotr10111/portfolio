(function() {
 
    window.addEventListener( 'scroll', function() {
        const section = document.querySelector( '.section__offer' );
        let x = section.offsetWidth;
        const offset = window.pageYOffset;
        const max_width = 1250;

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
