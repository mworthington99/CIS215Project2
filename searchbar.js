/**
 * @author Clayton Allen
 * @function searchData - The search data function will pull specific data fields from mySql Table located on csnlinux
 * using a MariaDB (Did some research and it is an opensource MySQL data base that GCCs technology dept. must have acquired)
 * @docs
 * mySQL function documentation for SQL Statements https://mariadb.com/kb/en/sql-statements/
 * 
 */
/**
 * @constant searchButton is a querySelector that will wait until the submit button for the search bar is clicked.
 * On click it will execute the rest of search data. 
 * 
 */
function searchData() {
    const searchButton = document.querySelector('button[onclick="searchData()"]'); 

    /**
     * @constant search_input Gets the input from user
     */
    const search_input = document.getElementById("searchInput");
    /**
     * @constant search_value Set @constant search_input to a readable value.
     */
    const search_value = search_input.value; 
    /**
     * @constant response is for the response message that will be communicated
     * back via php.
     */
    const response = document.getElementById("ResponseMessage");
    /**
     * This fetch statement will communicate with search-data.php
     * */
    fetch('search-data.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'search_value=' + encodeURIComponent(search_value)

    /**
     * This will ensure that the text in my html will be readable in plaintext when a response is sent by
     * my 
     */
    })
    .then(res => res.text())
    /**
     * This is what will facilitate the population of my placeholder in project1data.php with ID = "Response message" 
     * This response will generate from search-data.php 
     **/
    .then(data => {
        response.innerText = data; 
    });
}