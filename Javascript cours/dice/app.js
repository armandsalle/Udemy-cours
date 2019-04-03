var scores,
  roundScore,
  activePlayer,
  gamePlaying,
  oldScore,
  input,
  winningScore;

init();

//Event listner roll
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    //display the result
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
    document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "dice-" + dice2 + ".png";

    //uptade round
    if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

//Event listner hold
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;

    //uptade UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    input = document.querySelector(".final-score").value;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    //check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  //masquer le dé
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  //Put 0 to scores
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  finalScore = document.querySelector(".final-score").value;
}
