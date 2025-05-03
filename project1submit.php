<!DOCTYPE html>
<html>
    <head>
        <title>PHP Questions: Submit</title>
        <script src="background_color.js" defer></script>
    </head>
<body>

<?php
/**
 * Note: I created my SQL table in PuTTY using the following command:
 * 
 * CREATE TABLE project_data (id INT PRIMARY KEY AUTO_INCREMENT, email VARCHAR(320), age INT, gender CHAR(2), version INT, favorite VARCHAR(120));
 */

# Retrieved the hashed password as discussed in classes.
# Password: CIS215php!
$hashed_pass = '$2y$10$ViIleDzZvM5nXXfScjwGz.D4GH.CqNabTJ9uoIqydR5.SjmzWuxNi';
require ('dbconfig.php');
$db = connectDB();


/**
 * Validate returns an empty string if there were no errors, and a message about the worst error if there was one in validation.
 */
function validate(){
    global $hashed_pass;
    # The most important piece is the password:
    if(!password_verify($_POST["pw-name"], $hashed_pass)){
        return "Error: Incorrect Password.";
    }
    # Next, let's make sure everything was filled in:
    if(($_POST["email-name"] == NULL) or ($_POST["age"] == NULL) or ($_POST["gender"] == "") or ($_POST["version"] == NULL) or ($_POST["favorite"] == NULL) or ($_POST["operating-system"] == NULL)){
        return "Error: You have not filled in all questions.";
    }
    # Now, let's make sure the results make sense.

    # Email format validation only
    if(!filter_var($_POST["email-name"], FILTER_VALIDATE_EMAIL)){
        return "Please enter a valid email address.";
    }


    # Age
    $age_list = ["0"];
    for($i=13;$i<65;$i=$i + 5){
        $age_list []= $i;
    }
    $age_list []= "68";
    if(!in_array($_POST["age"], $age_list)){
        return "Please select one of the radio buttons to indicate your age.";
    }

    # Gender
    if(strlen($_POST["gender"]) != 2){
        return "Please select a gender from the gender dropdown.";
    }

    # Version
    if(!is_numeric($_POST["version"])){
        return "Please enter a number for Version.";
    } else if($_POST["version"] < 0 || $_POST["version"] > 8){
        return "Please enter a valid PHP Version.";
    }

    # Favorite
    if(strlen($_POST["favorite"]) > 120){
        return "Please keep your character count below 120 for your favorite part of PHP.";
    }
    return "";

    # user created password
    if(!$_POST(["userpw-name"])) {
        return "Please enter a password.";
    }
    return "";

    # only validates the other textbox if it is not empty
    if(!empty($_POST["other-gender"]) && strlen($_POST["other-gender"]) > 20) {
        return "Please keep your answer to less than 20 characters.";
    }
    return "";
}

/**
 * Sanitize returns sanitized data in the form of an array
 */
function sanitize(){
    $email = filter_var($_POST["email-name"], FILTER_VALIDATE_EMAIL);
    $age = (int)$_POST["age"];
    $gender = htmlentities($_POST["gender"]);
    $version = (int)$_POST["version"];
    $favorite = htmlentities($_POST["favorite"]);
    $hashed_user = password_hash($_POST["userpw-name"], PASSWORD_DEFAULT);
    $os = htmlentities($_POST["operating-system"]);
    if (!empty($_POST["other-gender"])) {
        $other = htmlentities($_POST["other-gender"]);
        return array($email, $age, $gender, $version, $favorite, $hashed_user, $os, $other);
    } else {
        return array($email, $age, $gender, $version, $favorite, $hashed_user, $os);
    }
}

/**
 * Add Data adds sanitized data into SQL safely
 * 
 * Error with sanatize function need to add variable for new password.
 */
function add_data(){
    global $db;
    $sanitized_data = sanitize();
    try {
        if (count($sanitized_data) == 8) {
            $prep_insert = $db->prepare("INSERT INTO project_data (email, age, gender, version, favorite, password, os, gender_other) values (?,?,?,?,?,?,?,?)");
        } else {
            $prep_insert = $db->prepare("INSERT INTO project_data (email, age, gender, version, favorite, password, os) values (?,?,?,?,?,?,?)");
        }
        $prep_insert->execute($sanitized_data);
    } catch (PDOException $e) {
        print("Database error: " . $e->getMessage());
    }
}


if(validate()==""){
    print("<div>Thanks for your submission!</div>");
    print("<div><a href='project1data.php'>View data page here</a></div>");
    add_data();
} else{
    print("<div>We could not take your data at this time</div>");
    print(validate());
    print("<div><a href='project1sol.php'>Try submitting again here</a></div>");
}

?>
<br>
<input type = "color" id = "colorPicker"/>
<button onclick = "backgroundColor()">Change Background Color</button>

<input type = "color" id = "colorPicker"/>
<button onclick = "fontColor()">Change Font Color</button>

</body></html>