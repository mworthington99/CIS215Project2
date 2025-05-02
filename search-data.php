<?php
    /**
     * @author Clayton Allen
     * 
     * @description This file will retrive a column of data from mariaDB
     * 
     * 
     * 
     */
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    require ('dbconfig.php');
    $db = connectDB();
    //gets search value from ajax request
    if(isset($_POST['search_value'])){
        $search_value = $_POST['search_value'];
        /*
         * @constant access_array of allowed searchable collumns
         * This list is detriment to the overall security
         * of are data, we don't want to allow people to be able
         * to view others passwords. 
         */
        $access_array = ['email', 'age','gender','operating-system','favorite'];
        //getting column from mariaDB
        if(in_array($search_value,$access_array)){
            $getColumn = $db->prepare("SELECT $search_value FROM project_data");
            $getColumn->execute();

            $columnData = $getColumn->fetchAll(PDO::FETCH_COLUMN);
            /**
             * @docs https://www.php.net/manual/en/pdostatement.fetchcolumn.php
             * Will return a the column. 
             */

            /**
             * logic to check if $column datas size is > 0
            */
            if(count($columnData) > 0){
                foreach ($columnData as $value){
                    echo $value . "<br>";
                }
                /**
                 * If time permits I'd like to add statisics 
                 * to what ever column pulled 
                 * Average age if age
                 * 
                 * How many users
                 * 
                 * Count of genders
                 * 
                 * Etc. is my idea
                 */
            } else{
                echo "No Data found in this column";
            }

        }
        elseif(!in_array($search_value,$access_array)){
            echo "That value was not found ***Try email";
        }
        elseif($search_value == NULL){
            echo "No input detected";
        }
        else{
            echo "Unable to esablish a connection";
        }
    }

    


?>
