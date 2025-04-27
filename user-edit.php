<!DOCTYPE html>
<html>
    <head>
        <title>EDIT Survey: PHP Questions</title>
        <script src="email_validation.js" defer></script>
        <script src="password_validation.js" defer></script>
        <script src="background_color.js" defer></script>
    </head>
<body>

<!-- Big takeaways: required keyword, make sure value is in there, feel free to use other attributes! -->
<!-- Copied the form over to allow the user to update their info, and redirect them to update.php on submission -->
<form action="update.php" method="post" class="survey">
<fieldset>

    <div>
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email-id" required>
        <span id="email-status"></span>
    </div>

    <div>
        <label for="userpw-name">Enter your current password: </label>
        <input type="password" name="userpw-name" id="userpw-id" required>
        <div id="pw-status"></div>
    </div>

    <div>
        <label>What age are you? </label>
        <div>
            <label><input type="radio" name="age" id="age-0" value="0" required> 0-12 </label>
        </div>
        <?php
        for($i=13;$i<65;$i=$i + 5){
            $j = $i + 4;
            print("<div><label><input type='radio' name='age' id='age-$i' value='$i'> $i-$j </label></div>");
        }
        ?>
        <div>
            <label><input type="radio" name="age" id="age-68" value="68"> 68+ </label>
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

<!-- Elliott created extra question -->
<!-- Matthew Worthington copied it into the edit user data page, so user could update it if needed -->
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

    <button type="submit" name="button-submit-form" id="button-submit-form-id">Update Information</button>
</fieldset>
</form>

<div><a href='project1data.php'>View data page here</a></div>
</body></html>