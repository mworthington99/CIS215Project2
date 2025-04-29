/**
 * @author Clayton Allen
 * @description This file is reworked.
 * It is now simple and faster.
 * This file will facilatate the process of deleting
 * a users data off of MariaDB
 * It uses an DOMContentLoaded event listner.
 * It then declares 3 constants.
 * @constant emailInput
 * This constant retrieves whatever email the user types
 * @constant email 
 * This is a constant to retrieve the value of that email
 * for smoother processing
 * @constant responseMessage 
 * This is for the placeholder div in project1data.php
 * This will provide the user with a response message
 * There is not a lot of error handling done here because
 * we did not cover catch in class. 
 * 
 *  @method fetch
 * We use fetch to establish the communication between 
 * the client side and the server side/
 * 
 * 
 * 
 * 
 */
console.log("delete-data.js loaded!")
function delete_data(){
    /**
     * Best practice to ensure DOMContent is loaded to ensure html is loaded.
     * Even though it should be loaded already given the script tag is called
     * on @line 244 in @file project1data.php
     */
    document.addEventListener("DOMContentLoaded", function(){   
        const form = document.getElementById("delete-data-form"); //gets the form ID
        /**
         * @event
         * Adds an event listener on the action of the submit button being clicked
         * @constant emailInput - gets email element
         * @constant responseMessage - gets response message placeholder ID.
         * @constant email gets the value of the email. Avoids null values. 
         */
        form.addEventListener("submit", function (event){
            event.preventDefault(); 

            const emailInput = document.getElementById("email-id");
            const responseMessage = document.getElementById("ResponseMessage");

            const email = emailInput.value;
            /**
             * @method fetch
             * @description Manually prepare and encrypt the data being sent using a fetch statement. 
             */
            fetch("delete-data.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "email=" + encodeURIComponent(email)
            })
            /**Server Responses */
            .then(response => response.text()) 
            .then(data => {
                responseMessage.textContent = data;  
            })
        });
    });
}

//Call function
delete_data();
