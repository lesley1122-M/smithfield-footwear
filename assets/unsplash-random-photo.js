$(document).ready(function() {
    const unsplashAccessToken = 'faCtH-n91ioF_1e7k_cSgHheUyGxnGdtvHOQ7TmnEGw';
    const imageElement = $('.image-with-text__media img');
    
    function getRandomPhoto() {
      $.ajax({
        url: `https://api.unsplash.com/photos/random/?client_id=${unsplashAccessToken}`,
        method: 'GET',
        success: function(data) {
          const photoUrl = data.urls.regular;
  
          // Hide the original image with a smooth fade-out
          imageElement.fadeOut(100, function() {
            // Load the new image source and fade it in when it's fully loaded
            imageElement.removeAttr('srcset').attr('src', photoUrl).on('load', function() {
              imageElement.fadeTo(100, 1); // Fade in to full opacity
            });
          });
        },
        error: function() {
          console.error('Failed to fetch a random image from Unsplash.');
        }
      });
    }
  
    // Call the function to load a random image from Unsplash on page load or refresh
    getRandomPhoto();
  });
  