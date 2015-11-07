/* TopoPetsGame.js
 * JavaScript file for the TopoPets browser game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * topoPetsGame()
 */

///////////
// To do //
///////////

// Show markers where TopoPets are, only when hovered over them
// When hovered over TopoPets, show information about that particular TopoPet
// markers from
//// https://mapicons.mapsmarker.com/category/markers/nature/natural-marvels/
//// https://mapicons.mapsmarker.com/category/markers/nature/weather/
// explanation about markers
//// http://stackoverflow.com/questions/29324136/google-map-api-multi-markers
// button to reset map to Wageningen

///////////////////////////
////// TopoPets.html //////
///////////////////////////

// change favicon to something with a T

/////////////////////////////
////// TopoPetsGame.js //////
/////////////////////////////

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

////////////////
// topoPets() //
////////////////

// Function for the TopoPets game

function topoPetsGame() {
	// Get the starting variables
	startingVariables = startGame();

	// Run the game
	//runGame(startingVariables);
}