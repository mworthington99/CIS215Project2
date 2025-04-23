<?php
    /**
     * @author Clayton Allen
     * 
     * @description 
     * This php file will link with the mySQL and delete a complete data entry based off of 
     * the specified email provided. 
     * 
     * 
     */
    //error handling, helpful for debugging 
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    require ('dbconfig.php');
    $db = connectDB();
      
    if (isset($_POST['email'])){
        $email = $_POST['email'];

        //will successfully delete the row of data of mysql table project_data
        $deleteRow = $db->prepare("DELETE FROM project_data WHERE email = :email");
        $deleteRow->bindParam(':email', $email, PDO::PARAM_STR);

        //simple logic handling. 
        //checks if data was deleted.
        if($deleteRow->execute()){
            //checks what row index is being delete and ensuring its null
            if($deleteRow->rowCount() > 0){
                echo "Data has been successfully deleted";
            }
            //if record is not found for this email, it will tell you
            else{
                echo "No record found for this email";
            }

        }
        //triggers if deleteRow does not execute/isn't connected
        else{
            echo "We cannot delete the data at this time";
        }
        
    }
    //null feild
    else{
        echo "No email provided";
    }
 


?>