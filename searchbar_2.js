/**
 * @author Clayton Allen
 * @description This file will use @function search_data to display
 * a table of requested data. 
 * @constant form create form data for ajax call
 * @constant userInput 
 * @constant userInputValue
 * @constant searchResult
 */
//Function will only be called when asscioated button is clicked.
document.getElementById("searchDataButton").addEventListener("click", search_data);
async function search_data(event){
    event.preventDefault();
    const form = new FormData();
    const userInput = document.getElementById("searchInput"); //gets search input
    const userInputValue = userInput.value; //converts search input
    const searchResult = document.getElementById("searchResults"); //place holder
    
    form.append('userInputValue', userInputValue); //fills form data to be transmitted
    //sends 
    const response = await fetch('search-data.php',{method: 'POST', body: form});
    //recieves 
    const result = await response.text();
    /**
     * will populate table into @file project1data.php
     */
    searchResult.innerHTML = result;
    
}