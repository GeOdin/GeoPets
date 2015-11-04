/* GeoPets.js
 * JavaScript file for the GeoPets browser game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * GeoPets()
 */

///////////
// To do //
///////////

// Show markers where GeoPets are
// When markers are clicked, remove the markers and add the GeoPet to #geoPetsFound

//////////////////////////
////// GeoPets.html //////
//////////////////////////

// change favicon to something with a G

////////////////////////
////// GeoPets.js //////
////////////////////////

//////////////////////////
////// StartGame.js //////
//////////////////////////

// Later versions: add more locations instead of only Wageningen
/*	// Get the location name
	while (locationName.length < 1) {
		locationName = prompt("Which city? ", "Wageningen").toUpperCase();

		var locationNames = ["WAGENINGEN", "LEIDEN"];
		var locationTemp = "";
		for (i=0; i<locationNames.length; i++) {
			if (locationName == locationNames[i]) {
				locationTemp = locationNames[i];
			}
		}
		if (locationTemp = "") {
			locationName = "";
		}
	}*/
//// Possibly: add ID for game/ player

///////////////
// GeoPets() //
///////////////

// Function for the GeoPets game

function GeoPets() {
	// Get the starting variables
	startingVariables = startGame();

	// Run the game
	//runGame(startingVariables);
}