var gameCounter = 0;
            function play()
            {
                var gameSelection = ["Rock", "Paper", "Scissors"];
                document.getElementById('randomSelection').innerHTML = gameSelection[Math.floor(Math.random() * 3)];
                gameCounter++;
                document.getElementById('gameCounter').innerHTML = gameCounter;



            }
var scissorsCounter = 0;
var rockCounter = 0;
var paperCounter = 0;
function checkInput()
{
    var cPaper = document.getElementById('paper').checked;
    var cRock = document.getElementById('rock').checked;
    var cScissors = document.getElementById('scissors').checked;


    if(cScissors == true)
    {
        document.getElementById('playerSelection').innerHTML = "Scissors";
        scissorsCounter++;
        document.getElementById('scissorsCounter').innerHTML = scissorsCounter;
    }
    else if(cRock == true)
    {
        document.getElementById('playerSelection').innerHTML = "Rock";
        rockCounter++;
        document.getElementById('rockCounter').innerHTML = rockCounter;
    }
    else if(cPaper == true)
    {

        document.getElementById('playerSelection').innerHTML = "Paper";
        paperCounter++;
        document.getElementById('paperCounter').innerHTML = paperCounter;
    }
    else{
        document.getElementById('playerSelection').innerHTML = "player must select something";
    }


}

function winOrLoss()
{
                if(cPaper == true && gameSelection == 1)
                {
                        document.getElementById('place').innerHTML = "You win";
                }
                else if(cPaper == true && gameSelection == 2)
                {
                    document.getElementById('place').innerHTML = "Tie game";
                }
                else if(cPaper == true && gameSelection == 3)
                {
                    document.getElementById('place').innerHTML = "You lose";
                }
                else if(cRock == true && gameSelection == 1)
                {
                    document.getElementById('place').innerHTML = "Tie game";
                }
                else if(cRock == true && gameSelection == 2)
                {
                    document.getElementById('place').innerHTML = "You lose";
                }
                else if(cRock == true && gameSelection == 3)
                {
                    document.getElementById('place').innerHTML = "You win";
                }
                else if(cScissors == true && gameSelection == 1)
                {
                    document.getElementById('place').innerHTML = "You lose";
                }
                else if(cScissors == true && gameSelection == 2)
                {
                   document.getElementById('place').innerHTML = "You win";
                }
                else
                {
                    document.getElementById('place').innerHTML = "Tie game";
                }
}

