(function() {

    document.addEventListener( 'DOMContentLoaded', function () {

        var main = new Splide( '#productMediaSlider', {
            type        : 'fade',
            cover       : true,
            rewind      : true,
            pagination  : false,
            heightRatio : 1,
            arrows      : false
        } );
      
        var thumbnails = new Splide( '#productMediaSlider-thumbs', {
          fixedWidth  : 80,
          fixedHeight : 80,
          gap         : 10,
          drag        : false,
          rewind      : false,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows      : false,
          breakpoints : {
            600: {
              fixedWidth : 44,
              fixedHeight: 44,
            },
          },
        } );
      
        main.sync( thumbnails );
        main.mount();
        thumbnails.mount();
      } );


})();