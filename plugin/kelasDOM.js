// html element class
// kelas elemen html
// 2019 Hansrenee Willysandro / HSD

var kelasDOM = new function(){
    // this.bagian1Show = function(){
    //     document.getElementById('resp1').innerHTML = "<center><div class='center_content'><h1>Hansrenee Development System</h1><h4>Welcome to the official site of Hansrenee</h4></div></center>"
    // };

    this.bagian1Hide = function(){
        document.getElementById('resp1').innerHTML = "";
        //console.log("woi hideeee");
    };

    this.writeDOM = function(elemen, isi){
        document.getElementById(elemen).innerHTML = isi;
    };




}