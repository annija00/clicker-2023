let punkti = 0;

let red = 0;
let green = 0;
let blue = 0;

let diametrs = 200;

let ClickerButton = document.getElementById("button")
let scoreDisplay = document.getElementById("score")

function OnButtonClick(){
  punkti += 1;
  scoreDisplay.innerHTML = punkti;
   
  red = getRandomInt(256);
  green = getRandomInt(256);
  blue = getRandomInt(256);

  let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")"; 
  ClickerButton.style.backgroundColor = rgbCode

  diametrs -= 5;

  if(diametrs <= 5){
    scoreDisplay.innerHTML = "You won !"
  }
  
  ClickerButton.style.width =diametrs.toString() + "px" ; 
  ClickerButton.style.height = diametrs.toString() + "px" ; 

}

function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }

 
