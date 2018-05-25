// functions needed:


// newgame:
// this function will{
// 	1.set score to 0
// 	2.set level to 1
// 	3.set player array to []
// 	4.set computer array to [] // must be emptied each round
// }, 

// Startgame:
// this funtion will{
// 	1.activate after newgame is called
// 	2.display a welcome and starting message
// 	3.start the randomizer function
// 	activate turn tracker starting with computer turn
// }

// turn tracker:
// this function will{
// 	1.track the turns of the computer and player. 
// 	2.if the computer turn ends it prompts the players to begin their turn.
// 	3.if the players end their turn it prompts the computer to begin its turn// check length of player array to equal cpu array
// 	//in order to end player turn
// }

// computer turn: 
// this function will {
// 	1.apply randomizer to a sequence array// added
// 	2.save the randomized array to be checked against the player array//added
// 	3.display the sequence array to the player(as a string to start)
	


// }

// playerturn:
// this function will{
// 	1.allow the player to make inputs into the player sequence array
// 	2.check player sequence inputs against the stored inputs
// 	3.if player has the correct sequence run level up
// 		else run endgame.tryagain

// }

// level up: 
// this function will{
// 	1.display a level up message 
// 	2.call randomizer to increase computer array by one
// }

// randomizer:
// this function will{
// 	1.create a variable array computerSequence.// done
// 	2.push A randomized number into the array as a number(possibly an object later)// done
// 	3.countinue to increase array size based on player level//
// }

// end game:
// this function will{
// 	//check the user level at the beginning of the computer turn. if the level is greater than 5( to start) the user wins and a message prints.
// 		//	else { countinue playing}
// 	if the user code does not match message that say try again. set all items in new game to zero.

// }

// domhandle:
// this function will{
// 	1.control on the gui functions and attach the other functions to the page as clickable items/objects

// }
