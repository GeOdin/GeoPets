/* Player.js
 * JavaScript file for regulating player related info
 * Made on 11-11-2015
 * by GeOdin
 *
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
 * * createPlayer()
 */

////////////////////
// createPlayer() //
////////////////////

// Function to create the player object

function createPlayer() {

	// Add the name of the player
	this.Name = "";

	// Add the gender of the player
	this.gender = "";

	// Add the amount of money for the player
	this.money = "";

	// Add the starter TopoPet name
	this.starterTopoPet = "";

	// Add the active TopoPets names
	this.activeTopoPet1 = "";
	this.activeTopoPet2 = "";
	this.activeTopoPet3 = "";
	this.activeTopoPet4 = "";
	this.activeTopoPet5 = "";

	// Add the computerTopoPets
	for (i = 0; i < 100; i++) {
		var computerTopoPetNumber = i + 1;
		var computerTopoPetCall = "computer" + computerTopoPetNumber;
		this[computerTopoPetCall] = 0;
	};

	// Add the TopoPets caught
	this.topoPetsCaught = topoPetsCaught;
}
