/* TopoPetsGame.js
 * JavaScript file for the TopoPets browser game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * topoPetsGame()
 * toggleActiveTopoPets()
 * * setActiveTopoPetsText(topoPetsGame, topoPetName)
 * * toggleActiveTopoPet1Text()
 * * toggleActiveTopoPet2Text()
 * * toggleActiveTopoPet3Text()
 * * toggleActiveTopoPet4Text()
 * * toggleActiveTopoPet5Text()
 * togglePlayer()
 * toggleBag()
 * toggleRecorder()
 * * toggleRecorderTopoPet(topoPetName)
 * toggleAchievements()
 * toggleJournal()
 * toggleStory()
 */

///////////
// To do //
///////////

/*
 * Show #buttons after getting the recorder
 * Show markers where TopoPets are, only when hovered over them, within a certain buffer (geo-fencing)
 * * markers from
 * * * https://mapicons.mapsmarker.com/category/markers/nature/natural-marvels/
 * * * https://mapicons.mapsmarker.com/category/markers/nature/weather/
 * * * make background image transparent:
 * * * * http://www.online-image-editor.com/
 * * the markers are also visible on Streetview!
 * * try to make them only visible on Streetview?
 * explanation about markers
 * * http://stackoverflow.com/questions/29324136/google-map-api-multi-markers
 * change the color of the Title of active TopoPet entries to the types of the TopoPet, like for the recorder
 * button to reset map to Wageningen
 * add achievements
 * * TopoPets
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
 * zoomLevel
 * * Show different TopoPets at different zoom levels
 * * Show the zoomLevel on the upper right corner of the screen, so players can know where they found certain TopoPets
 * Show Player/ Bag and Journal/ Achievements as different tabs from each other
 * * http://stackoverflow.com/questions/20127641/simple-multi-tab-hide-show-div
 * * * http://jsfiddle.net/y76k4/
 * Make divs for Player/ Bag/ ... draggable
 * Make divs of buttons on the bottom of the screen also pop up when pressing specific buttons
 * Make different tabs for different active TopoPets
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
 * * onkeypress?
 * * tabindex?
 * * * http://stackoverflow.com/questions/10722589/how-to-bind-keyboard-events-to-div-elements
 * * keyboard events?
 * * * http://javascript.info/tutorial/keyboard-events
 * * keydown?
 * Tokens
 * * Add the possibility to earn tokens for big battles during the game
 * * Add Tokens (earned) as tab to Achievements (and possibly also to buttons on the bottom of the screen?)
 * Achievements
 * * Add more text when you click on a certain achievement? (like recorder entries?)
 * * Make achievements you don't have yet (light) gray, with more information about how to get them when you click on them? (like recorder entries?)
 * * Add a counter for the achievements (like the recorder)
 * * Order achievements by kind of achievement (Story, TopoPets caught, ...)
 * Active TopoPets
 * * Also add a counter for how many active TopoPets the player has?
 * Currently, you have to press the toggling buttons twice with the buttons on the bottom of the screen. 
 * * Adjust this to only having to click once
 */

///////////////////////////
////// TopoPets.html //////
///////////////////////////

/////////////////////////////////////
////// stylesheet_TopoPets.css //////
/////////////////////////////////////

/////////////////////////////
////// TopoPetsGame.js //////
/////////////////////////////

//////////////////////////
////// StartGame.js //////
//////////////////////////

/*
 * resetMap()
 * * currently not completely working, because the createInfoWindows(topoPetsGame) does not work, because topoPetsGame does not exist there
 *
 * Later versions: 
 * * add more locations instead of only Wageningen
 * * Possibly: add ID for game/ player
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
 *
 * Battle Attack stats:
 * * Name
 * * Type
 * * Special Power
 * * Special Power Cost
 * * Type Power Damage
 * * Type Power Cost
 * * Accuracy
 * * Description
 * Battle Attacks:
 * * AIR
 * * * Breeze
 * * * Windthrow (spelling?)
 * * * Whirlwind
 * * EARTH
 * * * Stone/ rock
 * * * Avalanche
 * * * Earthquake
 * * FIRE
 * * * Flame
 * * * Fireball
 * * * Campfire/ forest fire?
 * * WATER
 * * * Bubble
 * * * Water balloon
 * * * Shower/ hose?
 *
 * Battle options:
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Attack      * Special Attack  * Switch TopoPets *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Use Program * Use Item        * Escape          *
 * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * Attack 
 * * * only show attacks that are possible, no more sp -> show a struggle move
 * * Special Attack
 * * * use TP to make attack stronger
 * * * no more sp/ tp -> don't show any move
 * * Switch TopoPets 
 * * * switch battling TopoPet
 * * * only switchable if currentHP > 0
 * * Use Program
 * * * use programs like Identify TopoPets, unlock more with further in story?
 * * * program to catch TopoPets?
 * * Use Item
 * * * use items on TopoPets?
 * * Escape
 * * * not possible during battling other people
 */

/*
 * Later versions:
 * * Add possibility to temporarily lower stats of a TopoPet during battle
 * * Add possibility to add status effects
 */

 //////////////////////
 ////// Story.js //////
 //////////////////////

/*
 * Story
 * * 101
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

/////////////////////////
////// TopoPets.js //////
/////////////////////////

/*
 * var topoPets
 * * Add unique number to each TopoPet after all TopoPets are made ("topoPetNumber")
 * * Add a specific expNeed type to which the TopoPet belongs? (how much exp a TopoPet needs per level?)
 * * Add a specific expGive type to which the TopoPet belongs? (how much exp a TopoPet gives per level?)
 * * Add a specific catchChance type to which the TopoPet belongs? (the chances of catching a TopoPet per level?)
 * var topoPetsStats
 * * Add unique number to each TopoPet after all TopoPets are made ("topoPetNumber")
 * * Moves a TopoPet has at that specific level?
 * * Moves a TopoPet can learn at that specific level
 *
 * Types
 * * New TopoPets per type:
 * * * Air: (air, bird, breeze, cloud, draft, fly, hail?, levitate, rain?, sky, tornado, weather?, wind)
 * * * * Wasparagus (kassen ten noorden van LUMEN) (Air / Earth)
 * * * * Flair (narcistic air elemental) (albardaflat)
 * * * * Bair?
 * * * * Cubicicle (transformation of Hailo) (looks like an icicle made of cubes/ cube as head, with halo around it's head?)
 * * * * Pandart (panda + dart)
 * * * * Zombee (zombie + bee) (later version air/ shadow)
 * * * Earth: (earth, flower?, ground, sand, tree?)
 * * * * Mudsy (earth) (helper of Sandta) (transforms into Mudditch(already implemented)/ Muddove (earth/ air))
 * * * * Sworm (Earth/ Air)
 * * * * (Sandash)
 * * * * Sandoom
 * * * * Tulpa 
 * * * * (Piramini is already implemented) -> Piramidi -> Piramax (later versie --> ancient)
 * * * * Sockroach (kakkerlak die eruit ziet als een sok) (winkelcentrum)
 * * * * Pebbelk (pebble + elk, transformatin of something else?)
 * * * * Mudshroom (mud + mushroom)
 * * * * Cowabunga (dancing cow) (Nude waar danslessen zijn?)
 * * * Fire: (campfire, fiery, fire, fireman, torch) (evt nog een bij firehouse bij haarweg)
 * * * * Firabbit (Dreijen) (/ Firat)
 * * * * Sundash (SSR-W) (later fire/ light)
 * * * * Distorchion (in de war firegast) (huisartsenpost) (later fire/ spirit)
 * * * * Grelking (later fire/ shadow)
 * * * * Firemit (fire hermit)
 * * * * Blace (blaze + ace)
 * * * * Torchid (torch + orchid) (transforms into Pyrose) (flowers on fire?)
 * * * * (Firefly)
 * * * Water: (drop, eel, fish, shark, water, waterdrop)
 * * * * Spottle, Spotfin, Spotflow (Zwembad Bongerd)
 * * * * Fireel (vis die soms vuurkrachten krijgt als je hem kookt) (eventueel nog iets in water tussen grebbedijk en rijn in: 51.9607533,5.6701563)
 * * * * Tranch (waterpaard) (gracht rooseveltweg)
 * * * * Shrimp (fire shrimp) (Rijn)
 * * * * Puddolf (puddle + wolf)
 * * * * Moyster (moist + oyster) -> Moystar
 * * * * Oarca (oar(sman?) + orca)
 * * * SPIRIT: (ether, spirit)
 * * Later version types: (know because of research that some TopoPets are another typoe than previously thought)
 * * * ancient, fighting, ice, light, shadow (add normal?)
 * * * * ANCIENT
 * * * * * Piramini becomes ancient/ earth, it's transformations Piramidi and Piramax will also become ancient/ earth
 * * * * ICE
 * * * * * It will use the recorder looks of what is currently air, a new styling for air needs to be made
 * * * * * Hailo becomes ice/ light, it's transformation Cubicicle will also become ice/ light
 * * * * SHADOW
 * * * * * Scare (transformation of Sheal) // You should know better than to mistreat a poor seal. (evolves when sheal is fainted a random amount of times - 10-20 eg.)
 * * Seasonal TopoPets:
 * * * Sandta (earth/ spirit) (sort of Santa Claus)
 * * * Raindeer (water/ spirit) (helper of Sandta, some have a red nose)
 */

////////////////
// topoPets() //
////////////////

// Function for the TopoPets game

function topoPetsGame() {

	// Get the starting variables
	topoPetsGameTemp = startGame();
	topoPetsGame.startingVariables = topoPetsGameTemp;

	// Run the game
/*
	var topoPets = new Object();
	topoPetsGame.topoPets = topoPets;
 */
	//runGame(topoPetsGame);
}

////////////////////////////
// toggleActiveTopoPets() //
////////////////////////////

function toggleActiveTopoPets() {
	if (document.getElementById("activeTopoPets").style.display == "none") {

		// Put away the specific activeTopoPets divs
		// Active TopoPet 1
		if (document.getElementById("activeTopoPet1Div").style.display == "block") {
			document.getElementById("activeTopoPet1Title").style.display = "none";
			document.getElementById("activeTopoPet1Text").style.display = "none";
			document.getElementById("activeTopoPet1Div").style.display = "none";
		}
		// Active TopoPet 2
		if (document.getElementById("activeTopoPet2Div").style.display == "block") {
			document.getElementById("activeTopoPet2Title").style.display = "none";
			document.getElementById("activeTopoPet2Text").style.display = "none";
			document.getElementById("activeTopoPet2Div").style.display = "none";
		}
		// Active TopoPet 3
		if (document.getElementById("activeTopoPet3Div").style.display == "block") {
			document.getElementById("activeTopoPet3Title").style.display = "none";
			document.getElementById("activeTopoPet3Text").style.display = "none";
			document.getElementById("activeTopoPet3Div").style.display = "none";
		}
		// Active TopoPet 4
		if (document.getElementById("activeTopoPet4Div").style.display == "block") {
			document.getElementById("activeTopoPet4Title").style.display = "none";
			document.getElementById("activeTopoPet4Text").style.display = "none";
			document.getElementById("activeTopoPet4Div").style.display = "none";
		}
		// Active TopoPet 5
		if (document.getElementById("activeTopoPet5Div").style.display == "block") {
			document.getElementById("activeTopoPet5Title").style.display = "none";
			document.getElementById("activeTopoPet5Text").style.display = "none";
			document.getElementById("activeTopoPet5Div").style.display = "none";
		}

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

////////////////////////////////////////////////////////
// setActiveTopoPetsText(topoPetsGame, topoPetObject) //
////////////////////////////////////////////////////////

// Function to set the active TopoPets text

function setActiveTopoPetsText(topoPetsGame, topoPetObject){
	for (i=0; i<5; i++) {
		var activeTopoPetNumber = i+1;
		var activeTopoPetCall = "activeTopoPet" + activeTopoPetNumber;
		if (topoPetsGame.player[activeTopoPetCall] == "") {
			topoPetsGame.player[activeTopoPetCall] = topoPetObject.Name;

			// Show the specific active TopoPet within the general active TopoPets div
			document.getElementById(activeTopoPetCall).innerHTML = "<a onclick='toggleActiveTopoPet" + activeTopoPetNumber + "Text()'> Lvl. " + topoPetObject.level + " " + topoPetObject.Name + "</a>";
			document.getElementById(activeTopoPetCall).style.display = "block";

			// Set the new div for the specific active TopoPet
			document.getElementById(activeTopoPetCall + "Title").innerHTML = "<p> Lvl. " + topoPetObject.level + " " + topoPetObject.Name + "</p>";
			document.getElementById(activeTopoPetCall + "Text").innerHTML = "HP: " + topoPetObject.currentHP + "/" + topoPetObject.maxHP + "<br/> SP: " + topoPetObject.currentSP + "/" + topoPetObject.maxSP + "<br/> TP: " + topoPetObject.currentTP + "/" + topoPetObject.maxTP + "<br/> Attack: " + topoPetObject.maxAttack + "<br/> Defense: " + topoPetObject.maxDefense + "<br/> Agility: " + topoPetObject.maxAgility + "<br/> Exp: " + topoPetObject.currentExp + "/" + topoPetObject.expNextLevel;

			// Return the topoPetsGame object
			return topoPetsGame;
		}
	}
	return topoPetsGame;
}

////////////////////////////////
// toggleActiveTopoPet1Text() //
////////////////////////////////

// Function to toggle the stats for active TopoPet1

function toggleActiveTopoPet1Text() {

	// Put away the divs for the general active TopoPets divs
	if (document.getElementById("activeTopoPets").style.display == "block") {
		document.getElementById("activeTopoPetsTitle").style.display = "none";
		document.getElementById("activeTopoPetsText").style.display = "none";
		document.getElementById("activeTopoPets").style.display = "none";
		// Show the active TopoPet 1 stats
		document.getElementById("activeTopoPet1" + "Text").style.display = "block";
		document.getElementById("activeTopoPet1" + "Title").style.display = "block";
		document.getElementById("activeTopoPet1" + "Div").style.display = "block";
	}
}

////////////////////////////////
// toggleActiveTopoPet2Text() //
////////////////////////////////

// Function to toggle the stats for active TopoPet2

function toggleActiveTopoPet2Text() {

	// Put away the divs for the general active TopoPets divs
	if (document.getElementById("activeTopoPets").style.display == "block") {
		document.getElementById("activeTopoPetsTitle").style.display = "none";
		document.getElementById("activeTopoPetsText").style.display = "none";
		document.getElementById("activeTopoPets").style.display = "none";
		// Show the active TopoPet 2 stats
		document.getElementById("activeTopoPet2" + "Text").style.display = "block";
		document.getElementById("activeTopoPet2" + "Title").style.display = "block";
		document.getElementById("activeTopoPet2" + "Div").style.display = "block";
	}
}

////////////////////////////////
// toggleActiveTopoPet3Text() //
////////////////////////////////

// Function to toggle the stats for active TopoPet3

function toggleActiveTopoPet3Text() {

	// Put away the divs for the general active TopoPets divs
	if (document.getElementById("activeTopoPets").style.display == "block") {
		document.getElementById("activeTopoPetsTitle").style.display = "none";
		document.getElementById("activeTopoPetsText").style.display = "none";
		document.getElementById("activeTopoPets").style.display = "none";
		// Show the active TopoPet 3 stats
		document.getElementById("activeTopoPet3" + "Text").style.display = "block";
		document.getElementById("activeTopoPet3" + "Title").style.display = "block";
		document.getElementById("activeTopoPet3" + "Div").style.display = "block";
	}
}

////////////////////////////////
// toggleActiveTopoPet4Text() //
////////////////////////////////

// Function to toggle the stats for active TopoPet4

function toggleActiveTopoPet4Text() {

	// Put away the divs for the general active TopoPets divs
	if (document.getElementById("activeTopoPets").style.display == "block") {
		document.getElementById("activeTopoPetsTitle").style.display = "none";
		document.getElementById("activeTopoPetsText").style.display = "none";
		document.getElementById("activeTopoPets").style.display = "none";
		// Show the active TopoPet 4 stats
		document.getElementById("activeTopoPet4" + "Text").style.display = "block";
		document.getElementById("activeTopoPet4" + "Title").style.display = "block";
		document.getElementById("activeTopoPet4" + "Div").style.display = "block";
	}
}

////////////////////////////////
// toggleActiveTopoPet5Text() //
////////////////////////////////

// Function to toggle the stats for active TopoPet5

function toggleActiveTopoPet5Text() {

	// Put away the divs for the general active TopoPets divs
	if (document.getElementById("activeTopoPets").style.display == "block") {
		document.getElementById("activeTopoPetsTitle").style.display = "none";
		document.getElementById("activeTopoPetsText").style.display = "none";
		document.getElementById("activeTopoPets").style.display = "none";
		// Show the active TopoPet 5 stats
		document.getElementById("activeTopoPet5" + "Text").style.display = "block";
		document.getElementById("activeTopoPet5" + "Title").style.display = "block";
		document.getElementById("activeTopoPet5" + "Div").style.display = "block";
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

////////////////////////////////////////
// toggleRecorderTopoPet(topoPetName) //
////////////////////////////////////////

function toggleRecorderTopoPet(topoPetName) {
	if (document.getElementById("recorder" + topoPetName).style.display == "none") {
		// Put away the recorder box if that is currently visible
		if (document.getElementById("recorder").style.display == "block") {
			// Put away the topoPetsFoundTitle title
			document.getElementById("topoPetsFoundTitle").style.display = "none";
			// Put away the topoPetsFound box
			document.getElementById("topoPetsFound").style.display = "none";
			// Put away the recorder box
			document.getElementById("recorder").style.display = "none";
		}
		// Show the recorderTopoPetTitle
		document.getElementById("recorder" + topoPetName + "Title").style.display = "block";
		// Show the recorderTopoPetText box
		document.getElementById("recorder" + topoPetName + "Text").style.display = "block";
		// Show the recorderTopoPetBack box
		document.getElementById("recorder" + topoPetName + "Back").style.display = "block";
		// Show the recorderTopoPet box
		document.getElementById("recorder" + topoPetName).style.display = "block";
	} else {
		// Put away the recorderTopoPetTitle
		document.getElementById("recorder" + topoPetName + "Title").style.display = "none";
		// Put away the recorderTopoPetText box
		document.getElementById("recorder" + topoPetName + "Text").style.display = "none";
		// Put away the recorderTopoPetBack box
		document.getElementById("recorder" + topoPetName + "Back").style.display = "none";
		// Put away the recorder box
		document.getElementById("recorder" + topoPetName).style.display = "none";
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
