// html element class
// kelas elemen html
// 2019 Hansrenee Willysandro / HSD

var kelasDOM = new function () {


    this.bagian1Hide = function () {
        document.getElementById('resp1').innerHTML = "";
        //console.log("woi hideeee");
    };

    this.writeDOM = function (elemen, isi) {
        document.getElementById(elemen).innerHTML = isi;
    };
}

// parallax effecs
var image = document.getElementsByClassName('kelas_gambar');
new simpleParallax(image, { scale: 1.5 });