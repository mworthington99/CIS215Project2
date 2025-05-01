/**
 * @author Matthew Worthington
 * allows for the user to specify thier gender if wanted, when the user selects Choose not to say/Other
 */

document.addEventListener('DOMContentLoaded', function() {
    const genderSelect = document.getElementById('gender');
    const otherGenderDiv = document.getElementById('other-gender-div');
    
    // Initially hide the other gender textbox
    if (otherGenderDiv) {
        otherGenderDiv.style.display = 'none';
    }
    
    // Add event listener to show/hide textbox based on selection
    genderSelect.addEventListener('change', function() {
        if (this.value === 'ot') {
            otherGenderDiv.style.display = 'block';
        } else {
            otherGenderDiv.style.display = 'none';
        }
    });
});