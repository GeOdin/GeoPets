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
 * * toggleRecorderMUDDITCH()
 * * toggleRecorderNEMATOAD()
 * * toggleRecorderPIRAMINI()
 * * toggleRecorderPYROSE()
 * * toggleRecorderSANDANCE()
 * * toggleRecorderSHEAL()
 * * toggleRecorderVAMPYRE()
 * * toggleRecorderWINGDIGO()
 * toggleAchievements()
 * toggleJournal()
 * toggleStory()
 */

///////////
// To do //
///////////

/*
 * Show markers where TopoPets are, only when hovered over them
 * When hovered over TopoPets, show information about that particular TopoPet
 * markers from
 * * https://mapicons.mapsmarker.com/category/markers/nature/natural-marvels/
 * * https://mapicons.mapsmarker.com/category/markers/nature/weather/
 * explanation about markers
 * * http://stackoverflow.com/questions/29324136/google-map-api-multi-markers
 * button to reset map to Wageningen
 * only show information about player/ TopoPets found/ achievements when player clicks one of the buttons on the bottom of the screen
 * add achievements
 * * TopoPets
 * * * Obtain all TopoPets
 * * * Obtain all TopoPets of a certain type
 * * * Obtain a TopoPet for every letter of the alphabet
 * * Story
 * * * Finish certain parts of the story
 * * Battles
 * * * Win a battle
 * * * Loose a battle
 * * * Win with a type disadvantage
 * * * Loose with a type advantage
 * * Items/ Money
 * * * Obtain a certain amount of money
 * * * Obtain all key items
 * * * Obtain all items
 * * * Obtain the recorder
 * * * Obtain the journal
 * * * Read the manual
 * Refactor TopoPets found into TopoPets recorder
 * Add dateTime to the upper right corner, add a manual button to the right of it
 * Show a different #storyText for every different TopoPet
 * Show Player/ Bag and Journal/ Achievements as different tabs from each other
 * * http://stackoverflow.com/questions/20127641/simple-multi-tab-hide-show-div
 * * * http://jsfiddle.net/y76k4/
 * Make divs for Player/ Bag/ ... draggable
 * Make divs of buttons on the bottom of the screen also pop up when pressing specific buttons
 * * P
 * * * Player
 * * B
 * * * Bag
 * * T
 * * * (active) TopoPets
 * * R
 * * * Recorder
 * * A
 * * * Achievements
 * * J
 * * * Journal
 */

///////////////////////////
////// TopoPets.html //////
///////////////////////////

/////////////////////////////////////
////// stylesheet_TopoPets.css //////
/////////////////////////////////////

/* 
 * make the button to go back from a TopoPet entry to the recorder fixed on the page
 */

/////////////////////////////
////// TopoPetsGame.js //////
/////////////////////////////

/* 
 * Create a function for toggling the recorder for TopoPets
 * * function toggleRecorderTopoPet(name) {}
 * * * make the button to go back from a TopoPet entry to the recorder the same for all TopoPets
 */

//////////////////////////
////// StartGame.js //////
//////////////////////////

/* 
 * Later versions: add more locations instead of only Wageningen
 */

/*
	// Get the location name
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
	}
 */

/* 
 * Possibly: add ID for game/ player
 */

/////////////////////////
////// TopoPets.js //////
/////////////////////////

/*
 * TopoPets Stats:
 * * Name
 * * type1
 * * type2 
 * * * type or "" if the TopoPet does not have a 2nd type
 * * currentHP 
 * * * (see Battle.js)
 * * maxHP
 * * * (see Battle.js)
 * * currentSP
 * * * (see Battle.js)
 * * maxSP
 * * * (see Battle.js)
 * * currentTP
 * * * (see Battle.js)
 * * maxTP
 * * * (see Battle.js)
 * * currentAttack
 * * * (see Battle.js)
 * * maxAttack
 * * * (see Battle.js)
 * * currentDefense
 * * * (see Battle.js)
 * * maxDefense
 * * * (see Battle.js)
 * * currentAgility
 * * * (see Battle.js)
 * * maxAgility
 * * * (see Battle.js)
 * * currentExp
 * * * (see Battle.js)
 * * maxExp
 * * * (see Battle.js)
 * * description
 */

/*
 * Types
 * * New TopoPets per type:
 * * * Air: (air, bird, breeze, cloud, draft, fly, hail?, levitate, rain?, sky, tornado, weather?, wind)
 * * * *  Wasparagus (kassen ten noorden van LUMEN) (Air / Earth)
 * * * * Flair (narcistic air elemental) (albardaflat)
 * * * * Bair?
 * * * * Cubicicle (transformation of Hailo) (looks like an icicle made of cubes/ cube as head, with halo around it's head?)
 * * * Earth: (earth, flower?, ground, sand, tree?)
 * * * * Sworm (Earth/ Air)
 * * * * (Sandash)
 * * * * Sandoom
 * * * * Tulpa 
 * * * * (Piramini is already implemented) -> Piramidi -> Piramax (later versie --> ancient)
 * * * * Sockroach (kakkerlak die eruit ziet als een sok) (winkelcentrum)
 * * * * Cowabunga (dancing cow) (Nude waar danslessen zijn?)
 * * * Fire: (campfire, fiery, fire, fireman, torch) (evt nog een bij firehouse bij haarweg)
 * * * * Firabbit (Dreijen)
 * * * * Sundash (SSR-W) (later fire/ light)
 * * * * Distorchion (in de war firegast) (huisartsenpost) (later fire/ spirit)
 * * * * Grelking (later fire/ shadow)
 * * * * Firemit (fire hermit)
 * * * * (Firefly)
 * * * Water: (drop, eel, fish, shark, water, waterdrop)
 * * * * Spottle, Spotfin, Spotflow (Zwembad Bongerd)
 * * * * Fireel (vis die soms vuurkrachten krijgt als je hem kookt) (eventueel nog iets in water tussen grebbedijk en rijn in: 51.9607533,5.6701563)
 * * * * Tranch (waterpaard) (gracht rooseveltweg)
 * * * * Shrimp (fire shrimp) (Rijn)
 * * Later version types:
 * * * ancient, fighting, ice, light, shadow, spirit (add normal?)
 * * * * ANCIENT
 * * * * * Piramini becomes ancient/ earth, it's transformations Piramidi and Piramax will also become ancient/ earth
 * * * * ICE
 * * * * * It will use the recorder looks of what is currently air, a new styling for air needs to be made
 * * * * * Hailo becomes ice/ light, it's transformation Cubicicle will also become ice/ light
 * * * * SHADOW
 * * * * * Scare (transformation of Sheal) // You should know better than to mistreat a poor seal. (evolves when sheal is fainted a random amount of times - 10-20 eg.)
 * * Seasonal TopoPets:
 * * * Sandta (earth/ spirit)
 */

 //////////////////////
 ////// Story.js //////
 //////////////////////

/*
 * Create this JavaScript file
 */

/*
 * Story
 * * 1
 * * * Professor Globe asks you to find TopoPets.
 * * * They are threatened because of climate change.
 * * * To help save them, he asks you to catch one of each species.
 * * * He is unfortunately to busy with his research to do field work, so asks you to help him.
 * * * * "You're a great kid. I have faith in you! "
 * * * He gives you a TopoPet Recorder to help you on your quest.
 * * * * It can only have 5 TopoPets active.
 * * * * When you get more TopoPets, they will be sent to a database/ server/ cloud/... specially made for you.
 * * * * If anything might happen to the TopoPet Recorderm your active TopoPets will also be sent to this database/ server/ cloud/...
 * * Think of reason why all kinds of other
 */

/*
 * Characters:
 * * Professor Globe
 * * * Looks:
 * * * * Lab coat, glasses (sometimes safety goggles?), gray hair
 * * * Location:
 * * * * Gaia building
 */

/*
 * Visualization
 * * Big orange exclamation mark for next quest location
 * * * Exclamation mark:
 * * * * dark orange
 * * * Pointer: 
 * * * * lighter orange
 */

///////////////////////
////// Battle.js //////
///////////////////////

/*
 * Create this JavaScript file
 */

/*
 * TopoPets battle stats:
 * * HP
 * * * Health
 * * * * Needs to be reduced to 0 to win
 * * SP
 * * * Special Power
 * * * * Power used by using battle moves
 * * TP
 * * * Type Power
 * * * * Power that can be added to moves that have the same type as the TopoPet.
 * * * * This will add extra power to the move used.
 * * * * Must be added before the move is unleashed.
 * * Attack
 * * * * How much damage a move will do.
 * * Defense
 * * * * How much damage a TopoPet can prevent. 
 * * Agility
 * * * * How fast a TopoPet is.
 * * * * This will help decide which TopoPet will move first.
 * Extra stat:
 * * Exp
 * Further stats:
 * * currentHP, currentSP, currentTP, currentAttack, currentDefense, currentAgility, currentExp
 */

/*
 * Move stats:
 * * Name
 * * Type
 * * Special Power
 * * Special Power Cost
 * * Type Power Damage
 * * Type Power Cost
 * * Accuracy
 * * Description
 */

/*
 * Later versions:
 * * Add possibility to temporarily lower stats of a TopoPet during battle
 * * Add possibility to add status effects
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
		// Put away the recorderMUDDITCH box if that is currently visible
		if (document.getElementById("recorderMUDDITCH").style.display == "block") {
			// Put away the recorderMUDDITCH title
			document.getElementById("recorderMUDDITCHTitle").style.display = "none";
			// Put away the recorderMUDDITCHText box
			document.getElementById("recorderMUDDITCHText").style.display = "none";
			// Put away the recorderMUDDITCHBack box
			document.getElementById("recorderMUDDITCHBack").style.display = "none";
			// Put away the recorderMUDDITCH box
			document.getElementById("recorderMUDDITCH").style.display = "none";
		}
		// Put away the recorderNEMATOAD box if that is currently visible
		if (document.getElementById("recorderNEMATOAD").style.display == "block") {
			// Put away the recorderNEMATOAD title
			document.getElementById("recorderNEMATOADTitle").style.display = "none";
			// Put away the recorderNEMATOADText box
			document.getElementById("recorderNEMATOADText").style.display = "none";
			// Put away the recorderNEMATOADBack box
			document.getElementById("recorderNEMATOADBack").style.display = "none";
			// Put away the recorderNEMATOAD box
			document.getElementById("recorderNEMATOAD").style.display = "none";
		}
		// Put away the recorderPIRAMINI box if that is currently visible
		if (document.getElementById("recorderPIRAMINI").style.display == "block") {
			// Put away the recorderPIRAMINI title
			document.getElementById("recorderPIRAMINITitle").style.display = "none";
			// Put away the recorderPIRAMINIText box
			document.getElementById("recorderPIRAMINIText").style.display = "none";
			// Put away the recorderPIRAMINIBack box
			document.getElementById("recorderPIRAMINIBack").style.display = "none";
			// Put away the recorderPIRAMINI box
			document.getElementById("recorderPIRAMINI").style.display = "none";
		}
		// Put away the recorderPYROSE box if that is currently visible
		if (document.getElementById("recorderPYROSE").style.display == "block") {
			// Put away the recorderPYROSE title
			document.getElementById("recorderPYROSETitle").style.display = "none";
			// Put away the recorderPYROSEText box
			document.getElementById("recorderPYROSEText").style.display = "none";
			// Put away the recorderPYROSEBack box
			document.getElementById("recorderPYROSEBack").style.display = "none";
			// Put away the recorderPYROSE box
			document.getElementById("recorderPYROSE").style.display = "none";
		}
		// Put away the recorderSANDANCE box if that is currently visible
		if (document.getElementById("recorderSANDANCE").style.display == "block") {
			// Put away the recorderSANDANCE title
			document.getElementById("recorderSANDANCETitle").style.display = "none";
			// Put away the recorderSANDANCEText box
			document.getElementById("recorderSANDANCEText").style.display = "none";
			// Put away the recorderSANDANCEBack box
			document.getElementById("recorderSANDANCEBack").style.display = "none";
			// Put away the recorderSANDANCE box
			document.getElementById("recorderSANDANCE").style.display = "none";
		}
		// Put away the recorderSHEAL box if that is currently visible
		if (document.getElementById("recorderSHEAL").style.display == "block") {
			// Put away the recorderSHEAL title
			document.getElementById("recorderSHEALTitle").style.display = "none";
			// Put away the recorderSHEALText box
			document.getElementById("recorderSHEALText").style.display = "none";
			// Put away the recorderSHEALBack box
			document.getElementById("recorderSHEALBack").style.display = "none";
			// Put away the recorderSHEAL box
			document.getElementById("recorderSHEAL").style.display = "none";
		}
		// Put away the recorderVAMPYRE box if that is currently visible
		if (document.getElementById("recorderVAMPYRE").style.display == "block") {
			// Put away the recorderVAMPYRE title
			document.getElementById("recorderVAMPYRETitle").style.display = "none";
			// Put away the recorderVAMPYREText box
			document.getElementById("recorderVAMPYREText").style.display = "none";
			// Put away the recorderVAMPYREBack box
			document.getElementById("recorderVAMPYREBack").style.display = "none";
			// Put away the recorderVAMPYRE box
			document.getElementById("recorderVAMPYRE").style.display = "none";
		}
		// Put away the recorderWINGDIGO box if that is currently visible
		if (document.getElementById("recorderWINGDIGO").style.display == "block") {
			// Put away the recorderWINGDIGO title
			document.getElementById("recorderWINGDIGOTitle").style.display = "none";
			// Put away the recorderWINGDIGOText box
			document.getElementById("recorderWINGDIGOText").style.display = "none";
			// Put away the recorderWINGDIGOBack box
			document.getElementById("recorderWINGDIGOBack").style.display = "none";
			// Put away the recorderWINGDIGO box
			document.getElementById("recorderWINGDIGO").style.display = "none";
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

//////////////////////////////
// toggleRecorderMUDDITCH() //
//////////////////////////////

function toggleRecorderMUDDITCH() {
	if (document.getElementById("recorderMUDDITCH").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderMUDDITCHTitle
		document.getElementById("recorderMUDDITCHTitle").style.display = "block";
		// Show the recorderMUDDITCHText box
		document.getElementById("recorderMUDDITCHText").style.display = "block";
		// Show the recorderMUDDITCHBack box
		document.getElementById("recorderMUDDITCHBack").style.display = "block";
		// Show the recorderMUDDITCH box
		document.getElementById("recorderMUDDITCH").style.display = "block";
	} else {
		// Put away the recorderMUDDITCHTitle
		document.getElementById("recorderMUDDITCHTitle").style.display = "none";
		// Put away the recorderMUDDITCHText box
		document.getElementById("recorderMUDDITCHText").style.display = "none";
		// Put away the recorderMUDDITCHBack box
		document.getElementById("recorderMUDDITCHBack").style.display = "none";
		// Put away the recorderMUDDITCH box
		document.getElementById("recorderMUDDITCH").style.display = "none";
	}
}

//////////////////////////////
// toggleRecorderNEMATOAD() //
//////////////////////////////

function toggleRecorderNEMATOAD() {
	if (document.getElementById("recorderNEMATOAD").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderNEMATOADTitle
		document.getElementById("recorderNEMATOADTitle").style.display = "block";
		// Show the recorderNEMATOADText box
		document.getElementById("recorderNEMATOADText").style.display = "block";
		// Show the recorderNEMATOADBack box
		document.getElementById("recorderNEMATOADBack").style.display = "block";
		// Show the recorderNEMATOAD box
		document.getElementById("recorderNEMATOAD").style.display = "block";
	} else {
		// Put away the recorderNEMATOADTitle
		document.getElementById("recorderNEMATOADTitle").style.display = "none";
		// Put away the recorderNEMATOADText box
		document.getElementById("recorderNEMATOADText").style.display = "none";
		// Put away the recorderNEMATOADBack box
		document.getElementById("recorderNEMATOADBack").style.display = "none";
		// Put away the recorderNEMATOAD box
		document.getElementById("recorderNEMATOAD").style.display = "none";
	}
}

//////////////////////////////
// toggleRecorderPIRAMINI() //
//////////////////////////////

function toggleRecorderPIRAMINI() {
	if (document.getElementById("recorderPIRAMINI").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderPIRAMINITitle
		document.getElementById("recorderPIRAMINITitle").style.display = "block";
		// Show the recorderPIRAMINIText box
		document.getElementById("recorderPIRAMINIText").style.display = "block";
		// Show the recorderPIRAMINIBack box
		document.getElementById("recorderPIRAMINIBack").style.display = "block";
		// Show the recorderPIRAMINI box
		document.getElementById("recorderPIRAMINI").style.display = "block";
	} else {
		// Put away the recorderPIRAMINITitle
		document.getElementById("recorderPIRAMINITitle").style.display = "none";
		// Put away the recorderPIRAMINIText box
		document.getElementById("recorderPIRAMINIText").style.display = "none";
		// Put away the recorderPIRAMINIBack box
		document.getElementById("recorderPIRAMINIBack").style.display = "none";
		// Put away the recorderPIRAMINI box
		document.getElementById("recorderPIRAMINI").style.display = "none";
	}
}

////////////////////////////
// toggleRecorderPYROSE() //
////////////////////////////

function toggleRecorderPYROSE() {
	if (document.getElementById("recorderPYROSE").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderPYROSETitle
		document.getElementById("recorderPYROSETitle").style.display = "block";
		// Show the recorderPYROSEText box
		document.getElementById("recorderPYROSEText").style.display = "block";
		// Show the recorderPYROSEBack box
		document.getElementById("recorderPYROSEBack").style.display = "block";
		// Show the recorderPYROSE box
		document.getElementById("recorderPYROSE").style.display = "block";
	} else {
		// Put away the recorderPYROSETitle
		document.getElementById("recorderPYROSETitle").style.display = "none";
		// Put away the recorderPYROSEText box
		document.getElementById("recorderPYROSEText").style.display = "none";
		// Put away the recorderPYROSEBack box
		document.getElementById("recorderPYROSEBack").style.display = "none";
		// Put away the recorderPYROSE box
		document.getElementById("recorderPYROSE").style.display = "none";
	}
}

//////////////////////////////
// toggleRecorderSANDANCE() //
//////////////////////////////

function toggleRecorderSANDANCE() {
	if (document.getElementById("recorderSANDANCE").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderSANDANCETitle
		document.getElementById("recorderSANDANCETitle").style.display = "block";
		// Show the recorderSANDANCEText box
		document.getElementById("recorderSANDANCEText").style.display = "block";
		// Show the recorderSANDANCEBack box
		document.getElementById("recorderSANDANCEBack").style.display = "block";
		// Show the recorderSANDANCE box
		document.getElementById("recorderSANDANCE").style.display = "block";
	} else {
		// Put away the recorderSANDANCETitle
		document.getElementById("recorderSANDANCETitle").style.display = "none";
		// Put away the recorderSANDANCEText box
		document.getElementById("recorderSANDANCEText").style.display = "none";
		// Put away the recorderSANDANCEBack box
		document.getElementById("recorderSANDANCEBack").style.display = "none";
		// Put away the recorderSANDANCE box
		document.getElementById("recorderSANDANCE").style.display = "none";
	}
}

///////////////////////////
// toggleRecorderSHEAL() //
///////////////////////////

function toggleRecorderSHEAL() {
	if (document.getElementById("recorderSHEAL").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderSHEALTitle
		document.getElementById("recorderSHEALTitle").style.display = "block";
		// Show the recorderSHEALText box
		document.getElementById("recorderSHEALText").style.display = "block";
		// Show the recorderSHEALBack box
		document.getElementById("recorderSHEALBack").style.display = "block";
		// Show the recorderSHEAL box
		document.getElementById("recorderSHEAL").style.display = "block";
	} else {
		// Put away the recorderSHEALTitle
		document.getElementById("recorderSHEALTitle").style.display = "none";
		// Put away the recorderSHEALText box
		document.getElementById("recorderSHEALText").style.display = "none";
		// Put away the recorderSHEALBack box
		document.getElementById("recorderSHEALBack").style.display = "none";
		// Put away the recorderSHEAL box
		document.getElementById("recorderSHEAL").style.display = "none";
	}
}

/////////////////////////////
// toggleRecorderVAMPYRE() //
/////////////////////////////

function toggleRecorderVAMPYRE() {
	if (document.getElementById("recorderVAMPYRE").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderVAMPYRETitle
		document.getElementById("recorderVAMPYRETitle").style.display = "block";
		// Show the recorderVAMPYREText box
		document.getElementById("recorderVAMPYREText").style.display = "block";
		// Show the recorderVAMPYREBack box
		document.getElementById("recorderVAMPYREBack").style.display = "block";
		// Show the recorderVAMPYRE box
		document.getElementById("recorderVAMPYRE").style.display = "block";
	} else {
		// Put away the recorderVAMPYRETitle
		document.getElementById("recorderVAMPYRETitle").style.display = "none";
		// Put away the recorderVAMPYREText box
		document.getElementById("recorderVAMPYREText").style.display = "none";
		// Put away the recorderVAMPYREBack box
		document.getElementById("recorderVAMPYREBack").style.display = "none";
		// Put away the recorderVAMPYRE box
		document.getElementById("recorderVAMPYRE").style.display = "none";
	}
}

//////////////////////////////
// toggleRecorderWINGDIGO() //
//////////////////////////////

function toggleRecorderWINGDIGO() {
	if (document.getElementById("recorderWINGDIGO").style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderWINGDIGOTitle
		document.getElementById("recorderWINGDIGOTitle").style.display = "block";
		// Show the recorderWINGDIGOText box
		document.getElementById("recorderWINGDIGOText").style.display = "block";
		// Show the recorderWINGDIGOBack box
		document.getElementById("recorderWINGDIGOBack").style.display = "block";
		// Show the recorderWINGDIGO box
		document.getElementById("recorderWINGDIGO").style.display = "block";
	} else {
		// Put away the recorderWINGDIGOTitle
		document.getElementById("recorderWINGDIGOTitle").style.display = "none";
		// Put away the recorderWINGDIGOText box
		document.getElementById("recorderWINGDIGOText").style.display = "none";
		// Put away the recorderWINGDIGOBack box
		document.getElementById("recorderWINGDIGOBack").style.display = "none";
		// Put away the recorderWINGDIGO box
		document.getElementById("recorderWINGDIGO").style.display = "none";
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

///////////////////
// toggleStory() //
///////////////////

function toggleStory() {
	if (document.getElementById("story").style.display == "none") {
		// Show the storyText box
		document.getElementById("storyText").style.display = "block";
		// Show the story box
		document.getElementById("story").style.display = "block";
	} else {
		// Put away the storyText box
		document.getElementById("storyText").style.display = "none";
		// Put away the story box
		document.getElementById("story").style.display = "none";
	}
}