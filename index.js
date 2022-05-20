//// functions

function playSound( keyPressed ) {

      switch ( keyPressed ) {
            case "w":
                  var audio = new Audio("sounds/tom-1.mp3");
                  audio.play();
                  break;

            case "a":
                  var audio = new Audio("sounds/tom-2.mp3");
                  audio.play();
                  break;

            case "s":
                  var audio = new Audio("sounds/tom-3.mp3");
                  audio.play();
                  break;

            case "d":
                  var audio = new Audio("sounds/tom-4.mp3");
                  audio.play();
                  break;

            case "j":
                  var audio = new Audio("sounds/crash.mp3");
                  audio.play();
                  break;

            case "k":
                  var audio = new Audio("sounds/kick-bass.mp3");
                  audio.play();
                  break;

            case "l":
                  var audio = new Audio("sounds/snare.mp3");
                  audio.play();
                  break;

            default:
                  console.log(keyPressed);
      }

}


function changeAnimation( key ) {

      var activeButton = document.querySelector("." + key);
      activeButton.classList.add("pressed");

      setTimeout(function() {
            activeButton.classList.remove("pressed");
      }, 100);

}


////////////////////Check click press ( on instrument )

for ( var i = 0; i < document.querySelectorAll(".drum").length; i++ ) {

      document.querySelectorAll(".drum")[i].addEventListener("mousedown",
            function() {

                  var buttonTextContent = this.textContent;

                  playSound( buttonTextContent );
                  changeAnimation( buttonTextContent );

            });

}

/////////////////check key press

document.addEventListener("keydown", function(event) {
      var keysAllowed = [];

      for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
            keysAllowed.push(document.querySelectorAll(".drum")[i].innerHTML);
      }

      var keyPressed = event.key;

      if (keysAllowed.includes(event.key)) {
            playSound(keyPressed);
            changeAnimation(keyPressed);
      }

});
