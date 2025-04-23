/**
 * @author1 Clayton Allen
 * @description I will primarily be working on the client side of
 * Better passwords. I am creating a js function that will check to 
 * see if a users new password is valid.
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * @author2 
 */

function password_validation() {
    document.addEventListener("DOMContentLoaded", () => {
        const password_input = document.getElementById("pw-id");
        const password_status = document.getElementById("pw-status");

        password_input.addEventListener("input", () => {
            const password = password_input.value;
            let messages = []; //array object for all messages that can be displayed for errors in password strength.

            if(password < 8) messages.push("Password must be at least 8 charcters");
            if(!/[a-z]/.test(password)) messages.push("Password must have at least one lowercase letter"); //regex explenation [a-z] all lowercase letters in regex
            if(!/[A-Z]/.test(password)) messages.push("Password must have at least one uppercase letter"); //regex explenation [A-Z] all uppercase letters in regex
            //regex explenation all of the special charcters when you press shift for 1 through 9 on your keyboard
            if(!/[!@#$%^&*(]/.test(password)) messages.push("Password must have at least one special charcter from *shift 1-9 on keyboard");
            //Triple equals still means strict equality, meaning it will match type and value. 
            //messages.lenght (int) to 0 (int). I know I could probably use == here
            //but I just want as much review as possible when writing ===. 
            if (messages.length === 0){
                password_status = "Password has met all criteria";
                password_status.style.color = "green"; //changes the text to green. CSS
            }
            else {
                /**
                 * Password_Status.innerHTML = messages.join("<br>");
                 * Will essentially display all errors that are caught in the array if true,
                 * and display it in a way that all are displayed in a line break.
                 * So each error will be displayed on a new line. 
                 */
                password_status.innerHTML = messages.join("<br>"); 
                password_status.style.color = "red"; //changes text to green.
            }
        });

    });
}