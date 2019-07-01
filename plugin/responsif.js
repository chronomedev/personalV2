// Script untuk mengatur responsifitas Website
// Script that handles the websites HTML DOM elements
//2019 hsd 
$(document).ready(function() {
    $(window).on('resize', function() {
        if ($(window).width() < 750) {
            $('#eins').hide();
            kelasDOM.bagian1Show();    
        } else {
            kelasDOM.bagian1Hide();
            $('#eins').show();

        }
    });
});


