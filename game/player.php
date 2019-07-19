<?php


//player class in php 
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
}


?>