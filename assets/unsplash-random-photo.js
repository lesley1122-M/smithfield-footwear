$(document).ready(function() {
    const unsplashAccessToken = 'faCtH-n91ioF_1e7k_cSgHheUyGxnGdtvHOQ7TmnEGw';
    const imageElement = $('.image-with-text__media img');
    function getRandomPhoto() {
      $.ajax({
        url: `https://api.unsplash.com/photos/random/?client_id=${unsplashAccessToken}`,
        method: 'GET',
        success: function(data) {
          const photoUrl = data.urls.regular;
  
          imageElement.fadeOut(100, function() {
            imageElement.removeAttr('srcset').attr('src', photoUrl).on('load', function() {
              imageElement.fadeTo(100, 1); 
            });
          });
        },
        error: function() {
          console.error('Failed to fetch a random image from Unsplash.');
        }
      });
    }
    getRandomPhoto();
  });
  