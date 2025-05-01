/**
 * @author Matthew Worthington
 * shows a password strength meter as the user is typing thier password using the same criteria as password_validation.js
 */
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('userpw-id');
    const strengthBar = document.getElementById('strength-bar');
    const strengthMeter = document.getElementById('strength-meter');
    
    function checkPasswordStrength(password) {
        let strength = 0;
        
        // Length check
        if (password.length >= 8) {
            strength += 25;
        }
        
        // Uppercase check
        if (/[A-Z]/.test(password)) {
            strength += 25;
        }
        
        // Lowercase check
        if (/[a-z]/.test(password)) {
            strength += 25;
        }
        
        // Numbers and special characters check
        if (/[0-9!@#$%^&*]/.test(password)) {
            strength += 25;
        }
        
        // Update the strength indicator
        strengthMeter.style.width = strength + '%';
        
        // Update colors based on strength
        if (strength <= 25) {
            strengthMeter.style.backgroundColor = '#ff4444';
        } else if (strength <= 50) {
            strengthMeter.style.backgroundColor = '#ffbb33';
        } else if (strength <= 75) {
            strengthMeter.style.backgroundColor = '#00C851';
        } else {
            strengthMeter.style.backgroundColor = '#007E33';
        }
    }
    
    // Add event listener for password input
    passwordInput.addEventListener('input', function() {
        checkPasswordStrength(this.value);
    });
});