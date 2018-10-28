/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying;
init();
var lastDice;
//document.querySelector('.dice').style.display = 'none';
//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        //1.random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        console.log('dice1 is ' + dice1 );
        console.log('dice2 is ' + dice2 );

        //2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

//       var diceDOM = document.querySelector('.dice');
//        diceDOM.style.display = 'block';//display sth as a block in css;

       
        //3.update the round score if the rolled number was not a 1;
        if(dice1 !== 1 && dice2 !== 1){
            //add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
         /*
        if(dice === 6 && lastDice === 6){
            // the player loses the game;
            console.log('the last dice is ' + lastDice);
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        }else if(dice !== 1){
            //add score;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            //next player;
           nextPlayer();
        }
        
        lastDice = dice;
        */
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
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        //console.log(input);
        // undefined, 0, null or ""(empty string) are COERCED to false;
        // anything else is coerced to true;
        if(input){
            winningScore = input;
        }else {
            winningScore = 20;
        }
        
        
        if(scores[activePlayer] >= winningScore){ //scores[activePlayer] >= 100
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//            document.querySelector('.dice-1').style.display = 'none';
//            document.querySelector('.dice-2').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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
//        document.querySelector('.dice-1').style.display = 'none';
//        document.querySelector('.dice-2').style.display = 'none';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
    
//        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    
    scores = [0, 0]; // stores the scores for both players;
    roundScore = 0; // the scores of the current dice;
    activePlayer = 0; // stores the active players;
    gamePlaying = true;
//    document.querySelector('.dice').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
//    document.querySelector('.dice-1').style.display = 'none';
//    document.querySelector('.dice-2').style.display = 'none';
    
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

