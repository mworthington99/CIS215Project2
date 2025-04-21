/**
 * @author Clayton Allen
 * @description This file is used to avoid inline calls on 
 * project1 data. This file is using an AJAX call.
 * 
 * @documentation https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
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

            const email = documenty.getElementById('email-id');
            const responseMessage = document.getElementById("Respons")

        });
    });
}