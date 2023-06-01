var dices = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

function playGame(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var selectedDice1 = dices [randomNumber1 - 1];
  document.querySelector(".img1").setAttribute("src", selectedDice1);
  document.querySelector(".img1").classList.add('animate1');

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var selectedDice2 = dices [randomNumber2 - 1];
  document.querySelector(".img2").setAttribute("src", selectedDice2);
  document.querySelector(".img2").classList.add('animate2');

  document.querySelector("h1").innerHTML = "Rolling...";

  setTimeout(() => {
    if (selectedDice1 > selectedDice2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (selectedDice1 < selectedDice2) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }

    document.querySelector(".img1").classList.remove('animate1')
    document.querySelector(".img2").classList.remove('animate2')
  }, 700);
}