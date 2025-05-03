/**
 * @author Matthew Worthington
 * shows a password strength meter as the user is typing thier password using the same criteria as password_validation.js;
 * by using a function that takes in the password from the userpw field of the main form and sets the style of the strength bar.
 */
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('userpw-id');
    const strengthBar = document.getElementById('strengthBar');
    
    function checkPasswordStrength(password) {
        let strength = 0;
        
        // Length check
        if (password.length >= 8) {
            strength += 25;
        }
        
        // Uppercase check
        if (/[A-Z]/.test(password)) { //regex for checking the password for Uppercase letters
            strength += 25;
        }
        
        // Lowercase check
        if (/[a-z]/.test(password)) { //regex for checking the password for lowercase letters
            strength += 25;
        }
        
        // Numbers and special characters check
        if (/[0-9!@#$%^&*()]/.test(password)) { //regex for checking the password for numbers and special characters
            strength += 25;
        }
        
        // Update the strength indicator
        strengthBar.style.width = strength + '%';
        
        // Update colors based on strength
        if (strength <= 25) {
            strengthBar.style.backgroundColor = '#ff4444';
        } else if (strength <= 50) {
            strengthBar.style.backgroundColor = '#ffbb33';
        } else if (strength <= 75) {
            strengthBar.style.backgroundColor = '#00C851';
        } else {
            strengthBar.style.backgroundColor = '#007E33';
        }
    }
    
    // Add event listener for password input
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
    });
});