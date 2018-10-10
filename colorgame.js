// var colors = [
//   "rgb(255,0,0)",
//   "rgb(255,255,0)",
//   "rgb(0,255,0)",
//   "rgb(0,255,255)",
//   "rgb(0,0,255)",
//   "rgb(255,0,255)"
// ];

// var squares = document.querySelectorAll(".square");
// var pickedColor = colors[0];
// var colorDisplay = document.getElementById("colorDisplay");
// colorDisplay.textContent = pickedColor;
// for (var i = 0; i < squares.length; i++) {
//   //add initial colors
//   squares[i].style.backgroundColor = colors[i];
//   //add click listener
//   squares[i].addEventListener("click", function() {
//     //grab color of picked square
//     var clickedColor = this.style.backgroundColor;

//     //compare with picked color
//     if (clickedColor === pickedColor) {
//       alert("Yesss");
//     } else {
//       alert("Nope");
//     }
//   });
// }

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[0];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked squares
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}
function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match picked color
    squares[i].style.background = color;
  }
}
