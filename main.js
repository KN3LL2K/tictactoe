var prompt = require('prompt');

prompt.start();


console.log('Tic-Tac-Toe');


var init = function() {
  // create board, display instructions;
  console.log('Tic-Tac-Toe! Player 1 is X, Player 2 is O. Enter moves by typing in the coordinates of the space you want to play your piece. For example: enter "A1" to play your piece in the top left space. "C2" for the bottom-middle space. Are you ready?')
  prompt.get(['(y/n)'], function(err, result) {
    if (result['(y/n)'] === 'y') {
      console.log("begin");
    } else {
      console.log("goodbye!");
    }
  })
}

init();


var turn = function() {
  prompt.get(['enter turn'], function(err, result) {

  })
}
// on launch game needs to initialize board
// inform player how to play
// on collective turn 5, game needs to start calculating for wins
// 


var Game = function() {
  
}

// if 
var board = [[0, 0, 0],
             [0, 0, 0],
             [0, 0, 0]];
