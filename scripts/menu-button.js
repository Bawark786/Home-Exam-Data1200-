const smallestScreenBeforeChange = 770 
// The smallest size the screen will be before it changes to a drop down menu

var buttonState = false

// Flips the visibility for the drop down menu
function dropDownButtton() {
    buttonState = !buttonState
    document.getElementById("navigation-menu").style.visibility = buttonState ? "visible" : "hidden" ;
}

// Edge case for when the button has been pressed, but the screen gets resized after
window.addEventListener("resize", function() {
    document.getElementById("navigation-menu").style.visibility = this.innerWidth > smallestScreenBeforeChange ? "visible" : "hidden" ;
    buttonState = this.innerWidth > smallestScreenBeforeChange
})