/**
 * @author Clayton Allen
 * @function searchData - The search data function will pull specific data fields from mySql Table located on csnlinux
 * using a MariaDB (Did some research and it is an opensource MySQL data base that GCCs technology dept. must have acquired)
 * @docs
 * mySQL function documentation for SQL Statements https://mariadb.com/kb/en/sql-statements/
 * @constant searchButton Will trigger an AJAX request when clicked to search data and display it.
 * 
 */
function searchData() {
    const searchButton = document.querySelector('button[onclick="searchData()"]'); //
    //prefer to have this event handler to ensure the DOM is loaded
    document.addEventListener("DOMContentLoaded", function() {
        const keyword = document.getElementById('searchInput').value;
        fetch('search-data.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'keyword=' + encodeURIComponent(keyword)

        })
        .then()
    });
}