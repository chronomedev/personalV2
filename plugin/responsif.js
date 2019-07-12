// Script untuk mengatur responsifitas Website
// Script that handles the websites HTML DOM elements
//2019 hsd 
$(document).ready(function() {
    var dom_baris1 = document.getElementById('uno').innerHTML;
    var dom_barisduo = document.getElementById('duo').innerHTML;
    var dom_baris2 = document.getElementById('resp2').innerHTML;
    var dom_baris3 = document.getElementById('resp3').innerHTML;
    console.log(dom_baris2);
    $(window).on('resize', function() {
        if ($(window).width() < 585) {
            // $('#eins').hide();
            // kelasDOM.bagian1Show();
            kelasDOM.writeDOM('uno', dom_barisduo);
            kelasDOM.writeDOM('duo', dom_baris1);
            kelasDOM.writeDOM('resp2', dom_baris3);
            kelasDOM.writeDOM('resp3',dom_baris2);
        } else {
            kelasDOM.writeDOM('uno', dom_baris1);
            kelasDOM.writeDOM('duo', dom_barisduo);
            kelasDOM.writeDOM('resp2', dom_baris2);
            kelasDOM.writeDOM('resp3',dom_baris3);
        }
    });
});


