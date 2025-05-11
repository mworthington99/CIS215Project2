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
    if(isset($_POST['userInputValue'])){
        $search_value = $_POST['userInputValue'];
        /*
         * @constant access_array of allowed searchable collumns
         * This list is detriment to the overall security
         * of are data, we don't want to allow people to be able
         * to view others passwords. 
         */
        $access_array = ['email', 'age','gender','os','favorite'];
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
                /**Formatting data to table */
                echo "<table border='1'>";
                echo "<tr><th>". $search_value . "</th></tr>";
                foreach ($columnData as $value){
                    echo  "<tr><th> ". $value . "</th></tr>";
                }
                echo "</table>";
            } else{
                echo "No Data found in this column"; 
            
            }

        }
        elseif(!in_array($search_value,$access_array)){
            echo "
                <table border='1'>
                    <tr><th>Option menu</th></tr>
                    <tr><th>email</th></tr>
                    <tr><th>age</th></tr>
                    <tr><th>gender</th></tr>
                    <tr><th>os</th></tr>
                    <tr><th>favorite</th></tr>
                </table>";
        }
        elseif($search_value == NULL){
            echo "No input detected";
        }
        else{
            echo "Unable to esablish a connection";
        }
    }

    


?>
