/**
 * @author Clayton Allen
 * @description This file is used to avoid inline calls on 
 * project1 data. This file is using an AJAX call.
 * 
 * @Methods 
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
