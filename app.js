/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//dice = Math.floor(Math.random() * 6) + 1;



// actually do some DOM manipulation;
// there are a lot of useful methos to select elements from 
// our webpage;
//document.querySelector('#current-' + activePlayer).textContent = dice;
//function btn(){
//    // do sth here
//}
//btn();

var scores, roundScore, activePlayer, gamePlaying;
init();
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1.random number
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);
        //2. display the result
       var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';//display sth as a block in css;
        diceDOM.src = 'dice-' + dice + '.png';

        //3.update the round score if the rolled number was not a 1;
        if(dice !== 1){
            //add score;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            //next player;
           nextPlayer();
        }
    }
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //1. add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //2. update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //and it is the next player's turn to roll the dice;

        //3. check if player won the game
        /*
        // Check if player won the game
            if (scores[activePlayer] >= 100) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
                //Next player
                nextPlayer();
            }
        */
        if(scores[activePlayer] >= 20){ //scores[activePlayer] >= 100
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else {
            nextPlayer(); 
        }
    }
   
});

function nextPlayer (){
     //next player;
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;//(Y/N);
        roundScore = 0;// the score should also be set to zero in the interface;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
    scores = [0, 0]; // stores the scores for both players;
    roundScore = 0; // the scores of the current dice;
    activePlayer = 0; // stores the active players;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

















