<!DOCTYPE html>
<html>
    <head>
        <title>Survey: PHP Questions</title>
        <!-- author: Matthew Worthington
            sets inital styling for the strength bar and meter, that can be modified by password-strngth.js
         -->
        <style>
        #strengthMeter {
            height: 10px;
            width: 300px;
            background: "white";
            border-radius: 5px;
            margin-top: 8px;
        }
        #strengthBar {
            height: 100%;
            width: 0%;
        }
        </style>
        <script src="email_validation.js" defer></script>
        <script src="password_validation.js" defer></script>
        <script src="background_color.js" defer></script>
<<<<<<< HEAD
        <script src="tooltip.js" defer></script>
        <script src="highlight.js" defer></script>

        <style>

            [role="tooltip"] {

                visibility: hidden;
                position: absolute;
                top: 2rem;
                left: 2rem;
                background: black;
                color: white;
                border-radius: 0.25rem;
                z-index: 1000;


            }

            [aria-describedby]:hover + [role="tooltip"],
            [aria-describedby]:focus + [role="tooltip"] {

                visibility: visible;

            }

            .tooltip-container {

                position: relative;
                display: inline-block;

            }

            
            .tooltip-container [role="tooltip"] {

                top: 100%;
                left: 0;
                margin-top: 0.5rem;

            }

            .unanswered {

                border: 2px solid red;
                background_color: #ffe6e6;

            }

        </style>
=======
        <script src="other-textbox.js" defer></script>
        <script src="password-strength.js" defer></script>
>>>>>>> ed0f1cc1cd0b6b118deaa7d1207430af1ce27c94
    </head>
<body>

<!-- Big takeaways: required keyword, make sure value is in there, feel free to use other attributes! -->

<form action="project1submit.php" method="post" class="survey">

<fieldset>

<div class = "tooltip-container">
    <label>Enter your email: </label>
    <input aria-describedby = "email-tooltip" type="text" name="email-name" id="email-id" required>
    <div role = "tooltip" id = "email-tooltip">
            <p>Please Enter an email in the feild. Include .com,.aol ect</p>
    </div>
</div>
<span id="email-status"></span>

<div class = "tooltip-container">
    <label>Enter submission password: </label>
    <input aria-describedby = "subPassword-tooltip" type="password" name="pw-name" id="pw-id" required>
    <div role = "tooltip" id = "subPassword-tooltip">
            <p>Please Enter a submission password.</p>
    </div>
</div>

<div class = "tooltip-container">
    <label for="user-pass">Create a password: </label>
    <input aria-describedby = "Password-tooltip" type="password" name="userpw-name" id="userpw-id" required>
    <div role = "tooltip" id = "Password-tooltip">
            <p>Please Enter a password.</p>
    </div>
<div>
<!--Status for password placeholder-->
<div id="pw-status"></div>
<<<<<<< HEAD

=======
<div id = "strengthMeter">
    <div id = "strengthBar"></div>
</div>
>>>>>>> ed0f1cc1cd0b6b118deaa7d1207430af1ce27c94
</fieldset>

<div class = "tooltip-container">
<label>What age are you? </label>
    <div>
        <label> <input aria-describedby = "age-tooltip" type="radio" name="age" id="age-0" value="0" required>
        0-12 </label>

        <div role = "tooltip" id = "age-tooltip">
            <p>Please select an age.</p>
        </div>
    </div>
</div>
<?php

for($i=13;$i<65;$i=$i + 5){
    $j = $i + 4;
    print("<div><label><input type='radio' name='age' id='age-$i'value='$i'>
    $i-$j </label></div>");
}

?>
<div>
<label> <input type="radio" name="age" id="age-68" value="68">
68+ </label>
</div>
</div>

<div class = "tooltip-container">
<select aria-describedby = "gender-tooltip" name="gender" id="gender">
    <option value="">--Please select your gender--</option>
    <option value="ma">Male</option>
    <option value="fe">Female</option>
    <option value="nb">Nonbinary</option>
    <option value="gf">Genderfluid</option>
    <option value="ag">Agender</option>
    <option value="ot">Choose not to say/Other</option>
</select>
    <div role = "tooltip" id = "gender-tooltip">
        <p>Please select a gender.</p>
    </div>
</div>

<!-- @author Matthew Worthington 
 the textbox to show up when the user selects other in the gender dropdown
 -->
<div id="other-gender-div">
    <label>Please specify your gender: </label>
    <div>
        Please keep your answer to 20 characters for fewer.
    </div>
    <input type="text" name="other-gender" id="other-gender">
</div>

<!-- Elliott created extra question -->

<div class = "tooltip-container">
<select aria-describedby = "os-tooltip" name="operating-system" id="operating-system">
    <option value="">--Please select your OS--</option>
    <option value="microsoft">Microsft Windows</option>
    <option value="apple">MacOS</option>
    <option value="chrome">ChromeOS</option>
    <option value="other">Other</option>
</select>
    <div role = "tooltip" id = "os-tooltip">
        <p>Please select an operating system.</p>
    </div>
</div>

<div class = "tooltip-container">
    <label> What version of PHP do you use? (only include the main version number) <input aria-describedby = "version-tooltip" type="number" name="version" id="version" min="1", max="9" required> </label>
    <div role = "tooltip" id = "version-tooltip">
        <p>Please select Which PHP version you use.</p>
    </div>
</div>

<div class = "tooltip-container">
    <div>
        Please answer in 120 characters or fewer.
    </div>
    <label> What is your favorite part of PHP?     
    <input aria-describedby = "php-tooltip" type=text name="favorite" id="favorite" required></label>
    <div role = "tooltip" id = "php-tooltip">
        <p>Please write about your favorite part of php!</p>
    </div>
</div>

<button type="submit" name="button-submit-form" id = "button-submit-form-id">Submit</button>

<!-- Elliott Created background color and font color buttons -->

<input type = "color" id = "colorPicker"/>
<button onclick = "backgroundColor()">Change Background Color</button>

<input type = "color" id = "colorPicker"/>
<button id = "fontColorButton">Change Font Color</button>

</form>

<div>If you are a returning user, and wish to edit your data <a href='user-edit.php'>click here</a></div><br>
<div><a href='project1data.php'>View data page here</a></div>
</body></html>