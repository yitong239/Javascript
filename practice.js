var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();


// document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';




document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		//1.random number
		var dice1 = Math.floor(Math.random()*6)+1;
		var dice2 = Math.floor(Math.random()*6)+1;

		//2.show the dice img
		document.getElementById('dice-1').style.display = 'block';
		document.getElementById('dice-2').style.display = 'block';
		document.getElementById('dice-1').src = 'dice-'+ dice1 +'.png';
		document.getElementById('dice-2').src = 'dice-'+ dice2 +'.png';

		// var diceDom = document.querySelector('.dice');
		// diceDom.style.display = 'block';
		// diceDom.src = 'dice-'+dice + '.png';

		//3.update the round score if the rolled unmber was not a 1
		if(dice1 !== 1 && dice2 !== 1){
			//add score
			roundScore += dice1 + dice2;
			document.querySelector('#current-'+activePlayer).textContent = roundScore;

		}else {
			nextPlayer();
		}
		
  	}
	
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
		
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}


document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		//add current score to global score;
		scores[activePlayer] += roundScore;
		//update the UI
		document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
		var input = document.querySelector('.final-score').value;

		//undefined, 0, null or "" are coerced to false
		//anything else is coerced to true
		if(input){
			var winningScore = input;
		}else {
			winningScore = 100;
		}



		//check if the player won the game;
		if(scores[activePlayer] >= winningScore){
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.getElementById('dice-1').style.display = 'none';
			document.getElementById('dice-2').style.display = 'none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	//classList is useful to add, remove and toggle CSS classes on an element.
			gamePlaying = false;
		}else {
			nextPlayer();
		}
	}
	
});

//btn: new-game
document.querySelector('.btn-new').addEventListener('click', init);

//dry principle--don't repeat the code;
function init(){
	gamePlaying = true
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;

	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}

/*
your 3 challenges
1. a player looses his entire points when he rolls two 6 in a row.
2. add an input field in the html where players can set the winning score. 
3. add another dice, the player looses his current score when one of them is a 1.
*/































