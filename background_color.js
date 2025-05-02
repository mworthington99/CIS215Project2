/* author Elliott Beeley */

function backgroundColor(){

    var color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;

}

document.getElementById("fontColorButton").addEventListener("click",function() {

    var color = document.getElementById("colorPicker").value;
    document.getElementById("text").style.color = color;

});