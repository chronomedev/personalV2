<?php

    //session manager class
    //Copyright 2019 HSD

    class game_session{
        
        public function getCountPlayer(){
            $data_mentah = $this->query->query('select count(*) from game.session');
            echo var_dump($data_mentah);
    
        }   
        public function generateSessionID(){

        }

        public function createSession(){
            $state = 'insert into game.session()values()';
        }

        public function destroySession($session_id){
            state = "delete from game.session where session_id = $session_id";
        }

        //public function 


    }


?>