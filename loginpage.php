
<?php
/**
 * @Author Clayton Allen
 * @Description Compares a hashed correct password and whatever password the user
 * types and is sent here.
 * 
 */ 
$password = $_POST['password'];
$hashed_pass = '$2y$10$ViIleDzZvM5nXXfScjwGz.D4GH.CqNabTJ9uoIqydR5.SjmzWuxNi';

    if(password_verify($password, $hashed_pass)){
        echo "correct";
    }
    else{
        echo "incorrect password inputed";
    }

?>