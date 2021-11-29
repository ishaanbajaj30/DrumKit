var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonvar = this.innerHTML;
    Music(buttonvar);
    buttonAni(buttonvar);
    // alert("I am clicked");
  });
}

document.addEventListener("keypress", function (event) {
  Music(event.key);
  buttonAni(event.key);
  console.log(event.key);
});

function Music(k) {
  switch (k) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-2.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-3.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("sounds/snare.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("sounds/crash.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("sounds/kick-bass.mp3");
      tom1.play();
      break;
    default:
      console.log("ERROR");
  }
}

function buttonAni(ck) {
  var activeb = document.querySelector("." + ck);
  console.log("Hello WOeds");

  activeb.classList.add("pressed");

  setTimeout(function () {
    activeb.classList.remove("pressed");
  }, 100);
}
