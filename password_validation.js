/**
 * @author1 Clayton Allen
 * @description I will primarily be working on the client side of
 * Better passwords. I am creating a js function that will check to 
 * see if a users new password is valid. 
 * 
 * @function password_validation() Will check to ensure a user meets 
 * 4 conditions:
 * password length being greated than 8.
 * password contains at least 1 lower case letter.
 * password contains at least 1 upper case letter.
 * password contains at least 1 special charcter that I personally specified for
 * project simplicity being shift 1 through 9. 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * For any ajax requests 
 * @author2 
 */

function password_validation() {
    

    const password_input = document.getElementById("userpw-id");
    const password_status = document.getElementById("pw-status");
    
    password_input.addEventListener("input", () => {
        const password = password_input.value;
        let messages = []; //array object for all messages that can be displayed for errors in password strength.

        if(password.length < 8) messages.push("Password must be at least 8 charcters");
        if(!/[a-z]/.test(password)) messages.push("Password must have at least one lowercase letter"); //regex explenation [a-z] all lowercase letters in regex
        if(!/[A-Z]/.test(password)) messages.push("Password must have at least one uppercase letter"); //regex explenation [A-Z] all uppercase letters in regex
        if(!/[!@#$%^&*()]/.test(password)) messages.push("Password must have at least one special charcter from *shift 1-9 on keyboard");
        //messages.lenght (int) to 0 (int). 
        if (messages.length == 0){
            password_status.textContent = "Password has met all criteria";
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
            password_status.style.color = "red"; //changes text to red.
        }
    });

    }
password_validation();