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

    fetch('check_email.php?email=' + encodeURIComponent(email))
        .then(response => response.json())
        .then(data => {
            emailStatus.innerHTML = data.message;
            emailStatus.style.color = data.valid ? 'green' : 'red';
        })
        .catch(error => console.error('Error:', error));
}

// event listener for when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email-id');
    if (emailInput) {
        emailInput.addEventListener('input', checkEmail);
    }
    checkEmail();
});