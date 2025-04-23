/**
 * @author Clayton Allen
 * @description This file is used to avoid inline calls on 
 * project1 data. This file is using an AJAX call.
 * 
 * @documentation https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 * Used this for server interaction. 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 * Used this method within my XML 
 * @Methods used from this open(). This will be used to begin a link between the
 * javascript file and the php file. 
 * setRequestHeader() Will be used to establish security.
 * send() will be used to send and encode the email data.
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
        const form = document.getElementById("delete-data-form");  
        /**
         * Below is an event listener that will trigger when the
         * submit button is pressed. 
         */
        form.addEventListener("submit", function(event){
            event.preventDefault();
            /**
             * @constant email will grab the email from the html form. 
             * @constant responseMessage is initiallizing the response on the webform
             * to let the user know the status of there data. i.e.
             * "Successfully Deleted", "Error Occured"
             * @constant xhr shortened accronym for Xml-Https-Request
             * */

            const email = document.getElementById("email-id").value;
            const responseMessage = document.getElementById("ResponseMessage");
            console.log("before");
            const xhr = new XMLHttpRequest();
            /**
             * This is the process to send the data from the client side to the
             * server using an AJAX request.  
             */
            xhr.open("POST", "delete-data.php"); 
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //application/x-www-form-urlencoded is the default value for requestHeaders
            xhr.send("email=" + encodeURIComponent(email));  
            console.log("-after");
            xhr.onload = function() {
                //checks status code to ensure communication has been establi c  shed client side to server end
                //Triple equals matches value and type. Its 'Strict' equality. 
                if (xhr.status === 200) {
                    console.log("xhr.status === 200"); //this is good
                    responseMessage.textContent = xhr.responseText;
                }
                //Error handling if a the connection is not establish.
                else{
                    console.log("Error: Could not connect to SQL Server on CSN Linux");
                    responseMessage.textContent = "We cannot establish connection at this time";
                }
            }

        });
    });
}
//Call function
delete_data();
