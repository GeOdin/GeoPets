/* TopoPetsGame.js
 * JavaScript file for the TopoPets browser game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * topoPetsGame()
 * toggleActiveTopoPets()
 * togglePlayer()
 * toggleBag()
 * toggleRecorder()
 * * toggleRecorderCHARFOIL()
 * * toggleRecorderHAILO()
 * * toggleRecorderLAVACHE()
 * * toggleRecorderMOREEL()
 * toggleAchievements()
 * toggleJournal()
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
// only show information about player/ TopoPets found/ achievements when player clicks one of the buttons on the bottom of the screen
// add achievements
//// Obtain all TopoPets
//// Obtain all TopoPets of a certain type
// Refactor TopoPets found into TopoPets recorder
// Possibly make tabs for showing several extra divs on screen (for example bag becomes a tab of player)

///////////////////////////
////// TopoPets.html //////
///////////////////////////

// change favicon to something with a T

/////////////////////////////
////// TopoPetsGame.js //////
/////////////////////////////

// Add a possibility to go back to the recorder from a TopoPet (eg. #recorderCHARFOIL)

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
////// Bair?

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
////// Grelking (later fire/ shadow)
////// (Firefly)

//// Water: (drop, eel, fish, shark, water, waterdrop)
////// Spottle, Spotfin, Spotflow (Zwembad Bongerd)
////// Fireel (vis die soms vuurkrachten krijgt als je hem kookt) (eventueel nog iets in water tussen grebbedijk en rijn in: 51.9607533,5.6701563)
////// Tranch (waterpaard) (gracht rooseveltweg)
////// Shrimp (fire shrimp) (Rijn)

/*
 * Later version types:
 * ancient, fighting, light, shadow, spirit
 * * SHADOW
 * * * Scare (transformation of Sheal) // You should know better than to mistreat a poor seal. (evolves when sheal is fainted a random amount of times - 10-20 eg.)
 */

/*
 * Seasonal:
 * * Sandta (earth/ spirit)
 */

////////////////
// topoPets() //
////////////////

// Function for the TopoPets game

function topoPetsGame() {

	// Create topoPetsGame object
	var topoPetsGame = new Object();
	// Create player object
	var player = new Object();
	topoPetsGame.player = player;

	// Get the starting variables
	topoPetsGameTemp = startGame(topoPetsGame);
	topoPetsGame.startingVariables = topoPetsGameTemp;

	// Run the game
	var topoPets = new Object();
	topoPetsGame.topoPets = topoPets;
	//runGame(topoPetsGame);
}

////////////////////////////
// toggleActiveTopoPets() //
////////////////////////////

function toggleActiveTopoPets() {
	if (document.getElementById("activeTopoPets").style.display == "none") {
		// Show the activeTopoPetsTitle box
		document.getElementById("activeTopoPetsTitle").style.display = "block";
		// Show the activeTopoPetsText box
		document.getElementById("activeTopoPetsText").style.display = "block";
		// Show the activeTopoPets box
		document.getElementById("activeTopoPets").style.display = "block";
	} else {
		// Put away the activeTopoPetsTitle box
		document.getElementById("activeTopoPetsTitle").style.display = "none";
		// Put away the activeTopoPetsText box
		document.getElementById("activeTopoPetsText").style.display = "none";
		// Put away the activeTopoPets box
		document.getElementById("activeTopoPets").style.display = "none";
	}
}

////////////////////
// togglePlayer() //
////////////////////

function togglePlayer() {

	if (document.getElementById("turn").style.display == "none") {
		// Put away the bag box if that is currently visible
		if (document.getElementById("bag").style.display == "block") {
			// Put away the bag title
			document.getElementById("bagTitle").style.display = "none";
			// Put away the bag box
			document.getElementById("bagText").style.display = "none";
			// Put away the bag box
			document.getElementById("bag").style.display = "none";
		}
		// Show the player title
		document.getElementById("player").style.display = "block";
		// Show the question box
		document.getElementById("question").style.display = "block";
		// Show the turn box
		document.getElementById("turn").style.display = "block";
	} else {
		// Put away the player title
		document.getElementById("player").style.display = "none";
		// Put away the question box
		document.getElementById("question").style.display = "none";
		// Put away the turn box
		document.getElementById("turn").style.display = "none";
	}
}

/////////////////
// toggleBag() //
/////////////////

function toggleBag() {

	if (document.getElementById("bag").style.display == "none") {
		// Put away the turn box if that is currently visible
		if (document.getElementById("turn").style.display == "block") {
			// Put away the player title
			document.getElementById("player").style.display = "none";
			// Put away the question box
			document.getElementById("question").style.display = "none";
			// Put away the turn box
			document.getElementById("turn").style.display = "none";
		}
		// Show the player title
		document.getElementById("bagTitle").style.display = "block";
		// Show the question box
		document.getElementById("bagText").style.display = "block";
		// Show the turn box
		document.getElementById("bag").style.display = "block";
	} else {
		// Put away the player title
		document.getElementById("bagTitle").style.display = "none";
		// Put away the question box
		document.getElementById("bagText").style.display = "none";
		// Put away the turn box
		document.getElementById("bag").style.display = "none";
	}
}

//////////////////////
// toggleRecorder() //
//////////////////////

function toggleRecorder() {
	if (document.getElementById("recorder").style.display == "none") {
		// Put away the recorderCHARFOIL box if that is currently visible
		if (document.getElementById("recorderCHARFOIL").style.display == "block") {
			// Put away the recorderCHARFOIL title
			document.getElementById("recorderCHARFOILTitle").style.display = "none";
			// Put away the recorderCHARFOILText box
			document.getElementById("recorderCHARFOILText").style.display = "none";
			// Put away the recorderCHARFOILBack box
			document.getElementById("recorderCHARFOILBack").style.display = "none";
			// Put away the recorderCHARFOIL box
			document.getElementById("recorderCHARFOIL").style.display = "none";
		}
		// Put away the recorderHAILO box if that is currently visible
		if (document.getElementById("recorderHAILO").style.display == "block") {
			// Put away the recorderHAILO title
			document.getElementById("recorderHAILOTitle").style.display = "none";
			// Put away the recorderHAILOText box
			document.getElementById("recorderHAILOText").style.display = "none";
			// Put away the recorderHAILOBack box
			document.getElementById("recorderHAILOBack").style.display = "none";
			// Put away the recorderHAILO box
			document.getElementById("recorderHAILO").style.display = "none";
		}
		// Put away the recorderLAVACHE box if that is currently visible
		if (document.getElementById("recorderLAVACHE").style.display == "block") {
			// Put away the recorderLAVACHE title
			document.getElementById("recorderLAVACHETitle").style.display = "none";
			// Put away the recorderLAVACHEText box
			document.getElementById("recorderLAVACHEText").style.display = "none";
			// Put away the recorderLAVACHEBack box
			document.getElementById("recorderLAVACHEBack").style.display = "none";
			// Put away the recorderLAVACHE box
			document.getElementById("recorderLAVACHE").style.display = "none";
		}
		// Put away the recorderMOREEL box if that is currently visible
		if (document.getElementById("recorderMOREEL").style.display == "block") {
			// Put away the recorderMOREEL title
			document.getElementById("recorderMOREELTitle").style.display = "none";
			// Put away the recorderMOREELText box
			document.getElementById("recorderMOREELText").style.display = "none";
			// Put away the recorderMOREELBack box
			document.getElementById("recorderMOREELBack").style.display = "none";
			// Put away the recorderMOREEL box
			document.getElementById("recorderMOREEL").style.display = "none";
		}
		// Show the topoPetsFoundTitle
		document.getElementById("topoPetsFoundTitle").style.display = "block";
		// Show the topoPetsFound box
		document.getElementById("topoPetsFound").style.display = "block";
		// Show the recorder box
		document.getElementById("recorder").style.display = "block";
	} else {
		// Put away the topoPetsFoundTitle
		document.getElementById("topoPetsFoundTitle").style.display = "none";
		// Put away the topoPetsFound box
		document.getElementById("topoPetsFound").style.display = "none";
		// Put away the recorder box
		document.getElementById("recorder").style.display = "none";
	}
}

//////////////////////////////
// toggleRecorderCHARFOIL() //
//////////////////////////////

function toggleRecorderCHARFOIL() {
	if (document.getElementById("recorderCHARFOIL").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderCHARFOILTitle
		document.getElementById("recorderCHARFOILTitle").style.display = "block";
		// Show the recorderCHARFOILText box
		document.getElementById("recorderCHARFOILText").style.display = "block";
		// Show the recorderCHARFOILBack box
		document.getElementById("recorderCHARFOILBack").style.display = "block";
		// Show the recorderCHARFOIL box
		document.getElementById("recorderCHARFOIL").style.display = "block";
	} else {
		// Put away the recorderCHARFOILTitle
		document.getElementById("recorderCHARFOILTitle").style.display = "none";
		// Put away the recorderCHARFOILText box
		document.getElementById("recorderCHARFOILText").style.display = "none";
		// Put away the recorderCHARFOILBack box
		document.getElementById("recorderCHARFOILBack").style.display = "none";
		// Put away the recorderCHARFOIL box
		document.getElementById("recorderCHARFOIL").style.display = "none";
	}
}

///////////////////////////
// toggleRecorderHAILO() //
///////////////////////////

function toggleRecorderHAILO() {
	if (document.getElementById("recorderHAILO").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderHAILOTitle
		document.getElementById("recorderHAILOTitle").style.display = "block";
		// Show the recorderHAILOText box
		document.getElementById("recorderHAILOText").style.display = "block";
		// Show the recorderHAILOBack box
		document.getElementById("recorderHAILOBack").style.display = "block";
		// Show the recorderHAILO box
		document.getElementById("recorderHAILO").style.display = "block";
	} else {
		// Put away the recorderHAILOTitle
		document.getElementById("recorderHAILOTitle").style.display = "none";
		// Put away the recorderHAILOText box
		document.getElementById("recorderHAILOText").style.display = "none";
		// Put away the recorderHAILOBack box
		document.getElementById("recorderHAILOBack").style.display = "none";
		// Put away the recorderHAILO box
		document.getElementById("recorderHAILO").style.display = "none";
	}
}

/////////////////////////////
// toggleRecorderLAVACHE() //
/////////////////////////////

function toggleRecorderLAVACHE() {
	if (document.getElementById("recorderLAVACHE").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderLAVACHETitle
		document.getElementById("recorderLAVACHETitle").style.display = "block";
		// Show the recorderLAVACHEText box
		document.getElementById("recorderLAVACHEText").style.display = "block";
		// Show the recorderLAVACHEBack box
		document.getElementById("recorderLAVACHEBack").style.display = "block";
		// Show the recorderLAVACHE box
		document.getElementById("recorderLAVACHE").style.display = "block";
	} else {
		// Put away the recorderLAVACHETitle
		document.getElementById("recorderLAVACHETitle").style.display = "none";
		// Put away the recorderLAVACHEText box
		document.getElementById("recorderLAVACHEText").style.display = "none";
		// Put away the recorderLAVACHEBack box
		document.getElementById("recorderLAVACHEBack").style.display = "none";
		// Put away the recorderLAVACHE box
		document.getElementById("recorderLAVACHE").style.display = "none";
	}
}

////////////////////////////
// toggleRecorderMOREEL() //
////////////////////////////

function toggleRecorderMOREEL() {
	if (document.getElementById("recorderMOREEL").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderMOREELTitle
		document.getElementById("recorderMOREELTitle").style.display = "block";
		// Show the recorderMOREELText box
		document.getElementById("recorderMOREELText").style.display = "block";
		// Show the recorderMOREELBack box
		document.getElementById("recorderMOREELBack").style.display = "block";
		// Show the recorderMOREEL box
		document.getElementById("recorderMOREEL").style.display = "block";
	} else {
		// Put away the recorderMOREELTitle
		document.getElementById("recorderMOREELTitle").style.display = "none";
		// Put away the recorderMOREELText box
		document.getElementById("recorderMOREELText").style.display = "none";
		// Put away the recorderMOREELBack box
		document.getElementById("recorderMOREELBack").style.display = "none";
		// Put away the recorderMOREEL box
		document.getElementById("recorderMOREEL").style.display = "none";
	}
}

//////////////////////////
// toggleAchievements() //
//////////////////////////

function toggleAchievements() {
	if (document.getElementById("achievements").style.display == "none") {
		// Put away the journal box if that is currently visible
		if (document.getElementById("journal").style.display == "block") {
			// Put away the journal title
			document.getElementById("journalTitle").style.display = "none";
			// Put away the journal box
			document.getElementById("journalText").style.display = "none";
			// Put away the journal box
			document.getElementById("journal").style.display = "none";
		}
		// Show the achievementsTitle box
		document.getElementById("achievementsTitle").style.display = "block";
		// Show the achievementsText box
		document.getElementById("achievementsText").style.display = "block";
		// Show the achievements box
		document.getElementById("achievements").style.display = "block";
	} else {
		// Put away the achievementsTitle box
		document.getElementById("achievementsTitle").style.display = "none";
		// Put away the achievementsText box
		document.getElementById("achievementsText").style.display = "none";
		// Put away the achievements box
		document.getElementById("achievements").style.display = "none";
	}
}

/////////////////////
// toggleJournal() //
/////////////////////

function toggleJournal() {
	if (document.getElementById("journal").style.display == "none") {
		// Put away the achievements box if that is currently visible
		if (document.getElementById("achievements").style.display == "block") {
			// Put away the achievements title
			document.getElementById("achievementsTitle").style.display = "none";
			// Put away the achievementsText box
			document.getElementById("achievementsText").style.display = "none";
			// Put away the achievements box
			document.getElementById("achievements").style.display = "none";
		}
		// Show the journalTitle box
		document.getElementById("journalTitle").style.display = "block";
		// Show the journalText box
		document.getElementById("journalText").style.display = "block";
		// Show the journal box
		document.getElementById("journal").style.display = "block";
	} else {
		// Put away the journalTitle box
		document.getElementById("journalTitle").style.display = "none";
		// Put away the journalText box
		document.getElementById("journalText").style.display = "none";
		// Put away the journal box
		document.getElementById("journal").style.display = "none";
	}
}