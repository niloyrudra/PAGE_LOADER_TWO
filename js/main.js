var $body = $('body');

var loading = [

    { elements: $body, properties: { width: '20%' } },
    { elements: $body, properties: { width: '30%' } },
    { elements: $body, properties: { width: '50%' } },
    { elements: $body, properties: { width: '70%' } },
    { elements: $body, properties: { width: '100%' } },
    { elements: $body, properties: { height: '100%' }, 
        options: { 
            complete: function() {
                $( 'html' ).css( { background: 'white' } );

                $( '.overlap-layer, .overlap-layer-two, .overlap-layer-three' ).velocity( { translateX: "0px" }, { duration: 500 } );

                $( '.overlap-layer' ).velocity( { translateX: "100%" }, { delay: 0, duration: 700 } );
                $( '.overlap-layer-two' ).velocity( { translateX: "100%" }, { delay: 300, duration: 1300 } );
                $( '.overlap-layer-three' ).velocity( { translateX: "100%" }, { delay: 1250, duration: 500 } );

                $( '.wrapper' ).velocity( 'transition.slideUpIn',{delay: 2000} );
                $( 'img' ).velocity( 'transition.flipYIn', {delay: 2100} );

            } 
        }

    }

];

$.Velocity.RunSequence( loading );