<?php

    //session manager class
    //Copyright 2019 HSD

    class game_session{
        
        public function getCountPlayer(){
            $data_mentah = $this->query->query('select count(*) from game.session');
            echo var_dump($data_mentah);
    
        }   


        public function createSession(){
            $state = 'insert'
        }

        public function destroySession(){

        }

        //public function 


    }


?>