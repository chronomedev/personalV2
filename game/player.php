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
        $komenSQL = $this->query->prepare('insert into master.pemain(nama_pemain)values(?)');
        $komenSQL->execute([$nama_pemain]);
        return true;
        
    }

    public function getHighScore(){

    }

    //public function 


    
}


?>