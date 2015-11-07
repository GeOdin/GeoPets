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

/////////////////////////
////// TopoPets.js //////
/////////////////////////

// New TopoPets:

//// Air: (air, bird, breeze, cloud, draft, fly, hail?, levitate, rain?, sky, tornado, weather?, wind)
////// Wasparagus (kassen ten noorden van LUMEN) (Air / Earth)
////// Flair (narcistic air elemental) (albardaflat)

//// Earth: (earth, flower?, ground, sand, tree?)
////// Sworm (Earth/ Air)
////// (Sandash)
////// Sandoom
////// Tulpa 
////// (Piramini is already implemented) -> Piramidi -> Piramax (later versie --> ancient)
////// Sockroach (kakkerlak die eruit ziet als een sok) (winkelcentrum)
////// Cowabunga (dancing cow) (Nude waar danslessen zijn?)

//// Fire: (campfire, fiery, fire, fireman, torch) (evt nog een bij firehouse bij haarweg)
////// Firabbit (Dreijen)
////// Sundash (SSR-W) (later fire/ light)
////// Distorchion (in de war firegast) (huisartsenpost) (later fire/ spirit)
////// (Firefly)

//// Water: (drop, eel, fish, shark, water, waterdrop)
////// Spottle, Spotfin, Spotflow (Zwembad Bongerd)
////// Fireel (vis die soms vuurkrachten krijgt als je hem kookt) (eventueel nog iets in water tussen grebbedijk en rijn in: 51.9607533,5.6701563)
////// Tranch (waterpaard) (gracht rooseveltweg)
////// Shrimp (fire shrimp) (Rijn)

/*
 * Later version types:
 * ancient, fighting, light, shadow, spirit
 */

////////////////
// topoPets() //
////////////////

// Function for the TopoPets game

function topoPetsGame() {
	var topoPetsGame = new Object();

	// Get the starting variables
	startingVariables = startGame();
	topoPetsGame.startingVariables = startingVariables;

	// Run the game
	var topoPets = new Object();
	topoPetsGame.topoPets = topoPets;
	//runGame(topoPetsGame);
}