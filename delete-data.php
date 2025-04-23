<?php

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    require ('dbconfig.php');
    $db = connectDB();

    if($db->connect_error){
        
    }


?>