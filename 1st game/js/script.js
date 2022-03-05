// Declaring and initialising the variables
var character = document.getElementById("character");
var block = document.getElementById("block");

//Function jump is for making the character jump when clicked
function jump() {
    if (character.classList != "animate") { // to check if it is already animating or not
        character.classList.add("animate");// if not then add it for the jump
    }
    setTimeout(function () {
        character.classList.remove("animate")
    }, 500);
    // Time out 500ms, when jumped and returned to original position remove the animate for the next click
    //This makes our click and jump reusable
}

// var checkLost = setInterval(function () { // this setInterval function is going to check if the character and block is hitting each other or not 
//     var characterTop =
//         parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     var blockLeft =
//         parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     // This function works for deciding the winning factor

//     if (blockLeft < 30 && blockLeft > 0 && characterTop >= 20){ // checks whether block is in left side of the character and if the character couldn't jump 
//         block.style.animation="none";
//         block.style.display="none";
//     }
        
// }, 10);
