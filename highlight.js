/* author Elliott Beeley */

document.getElementById('questions').onsubmit = function(event) {

    event.preventDefault();
    var unansweredQuestions = false;
    var inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {

        if (input.value.trim() === '') {

            unansweredQuestions = true;
            input.classList.add('unanswered');

        } else {

            input.class.remove('unanswered');

        }

    });

    if (unansweredQuestions) {

        alert('Please answer all highlighted questions!');

    } else {

        alert('form submitted!');

    }

}