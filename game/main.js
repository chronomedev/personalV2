//Main game script
// Based on Indonesian popular Tebak lima dasar Games
// 2019 HSD

pemain;
skor;

nama_pemain;
window.onload = function () {

    player = window.prompt("KUMY - Masukan nama mu di game!");

    if(player != null || player!=""){
        $.x
    }
    //ajax insert database/////

}

function checkPlayer(){
    $.ajax({
        url : 'player_management.php',
        type : 'POST',
        success : function(result){


        },
        error: function(){


        }

    });
}

function createPlayer(list_player){
    for(z = 0;z<list_player.Length;z++){
        pemain[z] = list_player[z];
        skor[z] = 0;
    }

}
    

function createRoom(){

}


function createGameSession(){

}

function retreiveTotalPlayers(){
    
}
