<?php

//player class in php 
//kelas pemain dalam server
//2019 HSDev
namespace pemain;

class pemain{

    public function __construct($koneksi)
    {
        $this->koneksi = $koneksi;
    }

    public function retreivePlayer(){
        $data_mentah = $this->koneksi->query('select * from master.pemain;');
        echo var_dump($data_mentah);
        

    }


    public function newPlayer($nama_pemain){
        $komenSQL = $this->koneksi->prepare('insert into master.pemain(nama_pemain)values(?)');
        $komenSQL->execute([$nama_pemain]);
        return true;
        
    }

    public function getHighScore($player_id){
        $data_mentah = $this->query("select score from master.pemain where player_id = $player_id");
        echo var_dump($data_mentah);
    }

    public function getPlayerSession(){
        if($_SESSION['player_session']!=null){
            return true;
        } else {
            return false;
        }
    }

    //public function 


    
}


?>