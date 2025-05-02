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
        <script src="other-textbox.js" defer></script>
        <script src="password-strength.js" defer></script>
    </head>
<body>

<!-- Big takeaways: required keyword, make sure value is in there, feel free to use other attributes! -->

<form action="project1submit.php" method="post" class="survey">

<fieldset>

<label>Enter your email: </label>
<input type="text" name="email-name" id="email-id" required>
<span id="email-status"></span>

<label>Enter submission password: </label>
<input type="password" name="pw-name" id="pw-id" required>


<label for="user-pass">Create a password: </label>
<input type="password" name="userpw-name" id="userpw-id" required>
<!--Status for password placeholder-->
<div id="pw-status"></div>
<div id = "strengthMeter">
    <div id = "strengthBar"></div>
</div>
</fieldset>

<div>
<label>What age are you? </label>
<div>
<label> <input type="radio" name="age" id="age-0" value="0" required>
0-12 </label>
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

<div>
<select name="gender" id="gender">
    <option value="">--Please select your gender--</option>
    <option value="ma">Male</option>
    <option value="fe">Female</option>
    <option value="nb">Nonbinary</option>
    <option value="gf">Genderfluid</option>
    <option value="ag">Agender</option>
    <option value="ot">Choose not to say/Other</option>
</select>
</div>

<div id="other-gender-div">
    <label>Please specify your gender: </label>
    <div>
        Please keep your answer to 20 characters for fewer.
    </div>
    <input type="text" name="other-gender" id="other-gender">
</div>

<!-- Elliott created extra question -->

<div>
<select name="operating-system" id="operating-system">
    <option value="">--Please select your OS--</option>
    <option value="microsoft">Microsft Windows</option>
    <option value="apple">MacOS</option>
    <option value="chrome">ChromeOS</option>
    <option value="other">Other</option>
</select>
</div>

<div>
    <label> What version of PHP do you use? (only include the main version number) <input type="number" name="version" id="version" min="1", max="9" required> </label>
</div>

<div>
    <div>
        Please answer in 120 characters or fewer.
    </div>
    <label> What is your favorite part of PHP?     
    <input type=text name="favorite" id="favorite" required></label>
</div>

<button type="submit" name="button-submit-form" id = "button-submit-form-id">Submit</button>

<!-- Elliott Created background color and font color buttons -->

<input type = "color" id = "colorPicker"/>
<button onclick = "backgroundColor()">Change Background Color</button>

<input type = "color" id = "colorPicker"/>
<button onclick = "fontColor()">Change Font Color</button>

</form>

<div>If you are a returning user, and wish to edit your data <a href='user-edit.php'>click here</a></div><br>
<div><a href='project1data.php'>View data page here</a></div>
</body></html>