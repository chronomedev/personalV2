<?php


    try{
        $koneksi = new PDO('mysql:host=localhost;dbname=kumy', 'root', '');
        $koneksi->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch(PDOException $e){
        
        $data_respon = array(
            "sukses" => 0,
            "msg" => "Ooops something wrong gagal koneksi ke database"
        );

    }














?>