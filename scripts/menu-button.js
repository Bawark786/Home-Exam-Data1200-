var buttonState = true

// Flips the visibility for the drop down menu
function dropDownButtton() {
    document.getElementById("navigation-menu").style.visibility = buttonState ? "visible" : "hidden" ;
    buttonState = !buttonState
}