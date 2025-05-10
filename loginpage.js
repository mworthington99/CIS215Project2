/**
 * @author Clayton Allen
 * @description Will hide form in project1sol until the user types the correct password.
 * 
 * @issues 
 * if(result == "correct"){
        console.log("Correct password.");
        document.getElementById('hiddenSurvey').removeAttribute('hidden');
        document.getElementById('loginForm').style.display = 'none';
    }

    Server communication is verified and working but it won't match correct and correct. 
 */
document.getElementById("login-page").addEventListener('submit', initialLogin);
async function initialLogin(event){
    event.preventDefault(); //prevents a default submission
    const form = new FormData(); //create formData
    const password = document.getElementById("pw-login"); //gather the users password input
    form.append('password', password.value); //appends single piece of data to this form 
    console.log(password.value); //shows the password value in console log. 
    const response = await fetch('loginpage.php', {
        method: 'POST',
        body: form //prepares form data
    });
    /**use let not const -- This was what ended up setting me back so long */
    let result = await response.text(); //lets result equal response.text() 
    console.log("Server response:", result); //Shows log of what the response from the server is
    /**
     * IF result is "correct" from php servers if statement, it will pass and remove the form from being hidden.
     * and hide the initial login page.
     */
    if(result == "correct"){ 
        console.log("Correct password.");
        document.getElementById('hiddenSurvey').removeAttribute('hidden'); //removes the hidden attribute from project1submit form. 
        document.getElementById('loginForm').style.display = 'none';
    }
    else{
        console.log("Error, password incorrect");
        alert("Incorrect Password");
    }
}   
