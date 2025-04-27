<!DOCTYPE html>
<html>
    <head>
        <title>PHP Questions: Update</title>
    </head>

    <body>
        <?php
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
        
        require ('dbconfig.php');
        $db = connectDB();
        
        /**
         * @author Matthew Worthington
         * Sanitizes user input to prevent SQL injection and XSS attacks
         * @return an array of the user's data
         */
        function sanitize() {
            $data = [
                filter_var($_POST['email'], FILTER_SANITIZE_EMAIL),
                filter_var($_POST['age'], FILTER_SANITIZE_NUMBER_INT),
                htmlentities($_POST['gender']),
                filter_var($_POST['version'], FILTER_SANITIZE_NUMBER_INT),
                htmlentities($_POST['favorite']),
                password_hash($_POST['userpw-name'], PASSWORD_DEFAULT),
                htmlentities($_POST['operating-system'])
            ];
            return $data;
        }

        /**
         * @author Matthew Worthington
         * @return boolean value of if data was updated or not
         * Updates user info in the database
         */
        function update_data() {
            global $db;
            try {
                $prep_update = $db->prepare("UPDATE project_data 
                                            SET email = ?, 
                                                age = ?, 
                                                gender = ?, 
                                                version = ?, 
                                                favorite = ?, 
                                                password = ?,
                                                os = ? 
                                            WHERE email = ?");
                $data = sanitize();
                // Add the email again as the WHERE clause parameter
                $data[] = $data[0];
                $prep_update->execute($data);
                return true;
            } catch (PDOException $e) {
                error_log("Update failed: " . $e->getMessage());
                return false;
            }
        }

        // Check if all required fields are present
        if (!isset($_POST['email']) || !isset($_POST['userpw-name'])) {
            print("<div class='error'>Missing required fields!</div>");
            exit;
        }

        $data = sanitize();
        $userEmail = $data[0];
        
        try {
            $pw_stmt = $db->prepare("SELECT password FROM project_data WHERE email = ?");
            $pw_stmt->execute([$userEmail]);
            $testPW = $pw_stmt->fetchColumn();
            
            if (!$testPW) {
                print("<div class='error'>User not found!</div>");
            } elseif (!password_verify($_POST["userpw-name"], $testPW)) {
                print("<div class='error'>Sorry, your password was incorrect!</div>");
            } else {
                if (update_data()) {
                    // Redirect to project1data.php with the necessary parameters
                    header("Location: project1data.php?from-update=true&email=" . urlencode($userEmail));
                    exit;
                } else {
                    print("<div class='error'>Failed to update data. Please try again.</div>");
                }
            }
        } catch (PDOException $e) {
            error_log("Database error: " . $e->getMessage());
            print("<div class='error'>An error occurred. Please try again later.</div>");
        }
        ?>
    </body>
</html>
