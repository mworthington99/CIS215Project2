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
function delete_data(){
    /**
     * Best practice to ensure DOMContent is loaded to ensure html is loaded.
     * Even though it should be loaded already given the script tag is called
     * on @line 244 in @file project1data.php
     */
    document.addEventListener("DOMContentLoaded", function(){   
        const form = document.getElementById('delete-data-form');  
        /**
         * Below is an event listener that will trigger when the
         * submit button is pressed. 
         */
        form.addEventListener("submit", function(event){
            /**
             * @constant email will grab the email from the html form. 
             * @constant responseMessage is initiallizing the response on the webform
             * to let the user know the status of there data. i.e.
             * "Successfully Deleted", "Error Occured"
             * @constant xhr shortened accronym for Xml-Https-Request
             * */

            const email = documenty.getElementById('email-id');
            const responseMessage = document.getElementById("ResponseMessage");

            const xhr = new XMLHttpRequest();
            xhr.open("POST", "delete_data.php");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");     
            xhr.send("email=" + encodeURIComponent(email));

            xhr.onload = function() {
                if (xhr.status === 200) {
                    responseMessage.textContent = xhr.responseText;
                }else{
                    responseMessage.textContent = "Error: Could not connect to SQL Server CSN Linux"
                }
            }

        });
    });
}