/**
 * @author Matthew Worthington
 * does client side verification of email so the user sees in realtime if email is valid or not
 * 
 */
function checkEmail() {
    const email = document.getElementById('email-id').value;
    const emailStatus = document.getElementById('email-status');
    
    if (email.length < 3) {
        emailStatus.innerHTML = '';
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'check_email.php?email=' + encodeURIComponent(email), true);
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            emailStatus.innerHTML = response.message;
            emailStatus.style.color = response.valid ? 'green' : 'red';
        }
    };
    
    xhr.send();
}

// event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email-id');
    if (emailInput) {
        emailInput.addEventListener('input', checkEmail);
    }
    checkEmail();
}); 