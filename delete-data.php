<?php
    /**
     * @author Clayton Allen
     * 
     * @description 
     * 
     * 
     * 
     */
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    require ('dbconfig.php');
    $db = connectDB();
      
    if (isset($_POST['email'])){
        $email = $_POST['email'];

        //will successfully delete the row of data of mysql table project_data
        $deleteRow = $db->prepare("DELETE FROM project_data WHERE email = :email");
        $deleteRow->bindParam(':email', $email, PDO::PARAM_STR);

        //simple logic handling
        if($deleteRow->execute()){
            if($deleteRow->rowCount() > 0){
                echo "Data has been successfully deleted";
            }
            else{
                echo "No record found for this email";
            }

        }
        //calls if deleteRow does not execute
        else{
            echo "We cannot delete the data at this time";
        }
        
    }
    else{
        echo "No email provided";
    }
 


?>