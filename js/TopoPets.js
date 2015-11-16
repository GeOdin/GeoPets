/* TopoPets.js
 * JavaScript file for the TopoPets
 * Made on 06-11-2015
 * by GeOdin
 *
 * This JavaScript file contains the following variables:
 * * topoPets
 * * * information about TopoPets that is not dependent on it's level
 * * topoPetsStats
 * * * information about TopoPets that is dependent on it's level
 *
 * This JavaScript file includes the following functions:
 * * createTopoPet(name, level)
 * * getTopoPetType1(name)
 * * getTopoPetDescription(name)
 * * getTopoPetCoordX(name)
 * * getTopoPetCoordY(name)
 * * getTopoPetZoomLevel(name)
 * * getTopoPetTextColor(name)
 * * getTopoPetBackgroundColor(name)
 * * Not yet finished/ active functions:
 * * * checkTopoPetsStats(name) 
 * * * catchTopoPets(name)
 * * * checkTopoPetsCaught(name)
 */

var topoPets = [
/*
 * Add:
 * * Add unique number to each TopoPet after all TopoPets are made ("topoPetNumber")
 * * type2 
 * * * type or "" if the TopoPet does not have a 2nd type
 * * Add infoWindowBackgroundColor
 * * transformType (eg., level)
 * * transformSpecific (eg., 16)
 * * Add a specific expNeed type to which the TopoPet belongs? (how much exp a TopoPet needs per level?)
 * * Add a specific expGive type to which the TopoPet belongs? (how much exp a TopoPet gives per level?)
 * * Add a specific catchChance type to which the TopoPet belongs? (the chances of catching a TopoPet per level?)
 */
	[
		"name",
		"type1",
		"description",
		"coordX", 
		"coordY", 
		"zoomLevel"
	],
	[
		"AQUNDINE",
		"SPIRIT",
		"It's a very powerful water spirit that sometimes likes to play with the ferry.",
		51.9599439,
		5.6868434, 
		14//?
	],
	[
		"CHARFOIL", 
		"FIRE", // later version FIRE/ SHADOW
		"A small TopoPet with a knife as ear.",
		51.9802742,
		5.6569692, 
		17
	],
	[
		"ELEPHAUN",
		"NORMAL",
		"Half elephant, half goat. It lives in forested areas.",
		51.9731725,
		5.7012871,
		14//?
	],
	[
		"FIREMANDER",
		"SPIRIT",
		"It's a strong fire spirit that resembles a salamander. It lives in deciduous forests.",
		51.9765131,
		5.6915426, 
		14//?
	],
	[
		"GNOMARL",
		"SPIRIT",
		"An earth spirit that looks out over the northern borders of the city.",
		51.9869076,
		5.6572318, 
		14//?
	],
	[
		"HAILO", 
		"AIR", // later version LIGHT/ AIR
		"A hail like TopoPet with a halo around it's head.",
		51.9771265,
		5.6480455, 
		14
	],
	[
		"LAVACHE",
		"FIRE", 
		"A French fire cow with a fiery barret and a French bread as belt.",
		51.9669056, 
		5.6509072, 
		14
	],
	[
		"MOREEL",
		"WATER", 
		"A fish with a high morale. It's spirit is always high!",
		51.9615314,
		5.6576431, 
		16
	],
	[
		"MUDDITCH",
		"EARTH", 
		"An earthy TopoPet that likes to hide in the soil of ditches.",
		51.9698076, 
		5.6650889,
		15
	],
	[
		"NEMATOAD",
		"WATER",
		"A very small toad, the size of some small earth worms.",
		51.9810459,
		5.6596941, 
		18
	],
	[
		"PARASYLPH",
		"SPIRIT",
		"It guards the city, keeping watch from high buildings.", //. It carries a parachute for emergencies.
		51.9611814,
		5.6475759, 
		14//?
	],
	[
		"PIRAMINI",
		"EARTH", // later version: ANCIENT
		"A TopoPet that resambles a small pyramid.", // There were more in ancient times.
		51.9677729,
		5.6654249, 
		15
	],
	[
		"PYROSE",
		"FIRE", 
		"A rose whose leafs and thorns are on fire.",
		51.9657325,
		5.690763, 
		16
	],
	[
		"SANDANCE",
		"EARTH",
		"It's a small ball of sand, with some sort of hula hoop around it.",
		51.9535231, 
		5.6637378, 
		16
	],
	[
		"SHEAL",
		"WATER",
		"A very helpful seal. Be careful with it. No clubs allowed.",
		51.9681386,
		5.6643775, 
		17
	],
	[
		"TULPA",
		"NORMAL",
		"A TopoPet that resembles a tullip. It has a colorful personality.",
		51.9750596,
		5.6757712,
		14//?
	],
	[
		"TUSCAT",
		"NORMAL",
		"A cat with tusks. This TopoPet is very common.",
		51.9766674,
		5.6622998,
		14//?
	],
	[
		"VAMPYRE",
		"AIR", // AIR (/FIRE)
		"It's a bat that sometimes catches fire if it flies for a long period.",
		51.9810143, 
		5.6984898, 
		15
	],
	[
		"WINGDIGO",
		"AIR",
		"A winged wolf, rarely seen by humans. Only seen on specific times.",
		51.9818399,
		5.6723195, 
		14
	]
];

var topoPetsStats = [
/* 
 * Add:
 * * Add unique number to each TopoPet after all TopoPets are made ("topoPetNumber")
 * * Moves a TopoPet has at that specific level?
 * * Moves a TopoPet can learn at that specific level
 * * adjust currentTP and maxTP so that it's only differrent for spirit/ ancient? (probably not)
 * Add new TopoPets
 * always + TP for special type of version? (version 1 - spirit, version 2 - ancient)

 * current stats:
 * * AIR:
 * * * + Agility, - random (TP, attack, defense)
 * * EARTH:
 * * * + Defense, - random (TP, attack, agility)
 * * FIRE:
 * * * + Attack, - random (TP, defense, agility)
 * * NORMAL
 * * * + HP, - random (attack, defense, agility)
 * * SPIRIT
 * * * + TP, - random (hp, attack, defense, agility)
 * * WATER:
 * * * + TP, - random (attack, defense, agility)
 */
	[
		"number", //0
		"name", //1
		"level", //2
		"currentHP", //3 
		"maxHP", //4
		"currentSP", //5 
		"maxSP", //6
		"currentTP", //7
		"maxTP", //8
		"currentAttack", //9
		"maxAttack", //10
		"currentDefense", //11
		"maxDefense", //12
		"currentAgility", //13
		"maxAgility", //14
		"currentExp", //15
		"expNextLevel" //16
	],
	["001", "AQUNDINE", 1, 24, 24, 30, 30, 6, 6, 9, 9, 10, 10, 10, 10, 0, 30], // + TP, - attack
	["002", "CHARFOIL", 1, 24, 24, 30, 30, 5, 5, 11, 11, 9, 9, 10, 10, 0, 30],
	["003", "ELEPHAUN", 1, 26, 26, 30, 30, 5, 5, 10, 10, 10, 10, 9, 9, 0, 30],
	["004", "FIREMANDER", 1, 24, 24, 30, 30, 6, 6, 10, 10, 9, 9, 10, 10, 0, 30], // + TP, - defense
	["005", "GNOMARL", 1, 24, 24, 30, 30, 6, 6, 10, 10, 10, 10, 9, 9, 0, 30], // + TP, - agility
	["006", "HAILO", 1, 24, 24, 30, 30, 5, 5, 9, 9, 10, 10, 11, 11, 0, 30],
	["007", "LAVACHE", 1, 24, 24, 30, 30, 5, 5, 11, 11, 10, 10, 9, 9, 0, 30],
	["008", "MOREEL", 1, 24, 24, 30, 30, 6, 6, 10, 10, 10, 10, 9, 9, 0, 30],
	["009", "MUDDITCH", 1, 24, 24, 30, 30, 4, 4, 10, 10, 11, 11, 10, 10, 0, 30],
	["010", "NEMATOAD", 1, 24, 24, 30, 30, 6, 6, 10, 10, 9, 9, 10, 10, 0, 30],
	["011", "PARASYLPH", 1, 22, 22, 30, 30, 6, 6, 10, 10, 10, 10, 10, 10, 0, 30], // + TP, - hp
	["012", "PIRAMINI", 1, 24, 24, 30, 30, 5, 5, 10, 10, 11, 11, 9, 9, 0, 30],
	["013", "PYROSE", 1, 24, 24, 30, 30, 4, 4, 11, 11, 10, 10, 10, 10, 0, 30],
	["014", "SANDANCE", 1, 24, 24, 30, 30, 5, 5, 9, 9, 11, 11, 10, 10, 0, 30],
	["015", "SHEAL", 1, 24, 24, 30, 30, 6, 6, 9, 9, 10, 10, 10, 10, 0, 30],
	["016", "TULPA", 1, 26, 26, 30, 30, 5, 5, 10, 10, 9, 9, 10, 10, 0, 30],
	["017", "TUSCAT", 1, 26, 26, 30, 30, 5, 5, 9, 9, 10, 10, 10, 10, 0, 30],
	["018", "VAMPYRE", 1, 24, 24, 30, 30, 5, 5, 10, 10, 9, 9, 11, 11, 0, 30],
	["019", "WINGDIGO", 1, 24, 24, 30, 30, 4, 4, 10, 10, 10, 10, 11, 11, 0, 30]
];

////////////////////////////////
// createTopoPet(name, level) //
////////////////////////////////

// function to create a TopoPet object

function createTopoPet(name, level) {
	// Check whether player already has this specific TopoPet?

	// Get the stats for the TopoPet
	// Get type 1
	var type1 = getTopoPetType1(name);

	// Get type 2
	// Get transformType (yet to be implemented)
	// Get transformSpecific (yet to be implemented)
	// Get moves
	// Get exp the TopoPet gives
	// Get chance you catch the TopoPet

	// Add description
	var description = getTopoPetDescription(name);

	// Add coordinates
	// Add coordX
	var coordX = getTopoPetCoordX(name);
	// Add coordY
	var coordY = getTopoPetCoordY(name);

	// Add zoomLevel
	var zoomLevel = getTopoPetZoomLevel(name);

	// Add textColor
	var textColor = getTopoPetTextColor(name);
	// Add backgroundcolor
	var backgroundColor = getTopoPetBackgroundColor(name);

	// Create the TopoPet Object
	for (i=0; i<topoPetsStats.length; i++) {
		if (topoPetsStats[i][1] == name) {
			if (topoPetsStats[i][2] == level) {
				this.number = topoPetsStats[i][0];
				this.Name = topoPetsStats[i][1];
				this.type1 = type1;
				this.Description = description;
				this.coordX = coordX;
				this.coordY = coordY;
				this.zoomLevel = zoomLevel;
				this.textColor = textColor;
				this.backgroundcolor = backgroundColor;
				this.level = topoPetsStats[i][2];
				this.currentHP = topoPetsStats[i][3];
				this.maxHP = topoPetsStats[i][4];
				this.currentSP = topoPetsStats[i][5];
				this.maxSP = topoPetsStats[i][6];
				this.currentTP = topoPetsStats[i][7];
				this.maxTP = topoPetsStats[i][8];
				this.currentAttack = topoPetsStats[i][9];
				this.maxAttack = topoPetsStats[i][10];
				this.currentDefense = topoPetsStats[i][11];
				this.maxDefense = topoPetsStats[i][12];
				this.currentAgility = topoPetsStats[i][13];
				this.maxAgility = topoPetsStats[i][14];
				this.currentExp = topoPetsStats[i][15];
				this.expNextLevel = topoPetsStats[i][16]
			}
		}
	};
}

///////////////////////////
// getTopoPetType1(name) //
///////////////////////////

// function to get the first type of a TopoPet

function getTopoPetType1(name) {

	// Set the variables
	var type1;

	// Get the first type
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {
			type1 = topoPets[i][1];

			// Return the first type
			return type1;
		}
	}
}

/////////////////////////////////
// getTopoPetDescription(name) //
/////////////////////////////////

// function to get the description of a TopoPet

function getTopoPetDescription(name) {

	// Set the variables
	var description;

	// Get the description
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {
			description = topoPets[i][2];

			// Return the description
			return description;
		};
	};
}

////////////////////////////
// getTopoPetCoordX(name) //
////////////////////////////

// function to get the coordX of a TopoPet

function getTopoPetCoordX(name) {

	// Set the variables
	var coordX;

	// Get the coordX
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {
			coordX = topoPets[i][3];

			// Return the coordX
			return coordX;
		};
	};
}

////////////////////////////
// getTopoPetCoordY(name) //
////////////////////////////

// function to get the coordY of a TopoPet

function getTopoPetCoordY(name) {

	// Set the variables
	var coordY;

	// Get the coordY
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {
			coordY = topoPets[i][4];

			// Return the coordY
			return coordY;
		};
	};
}

///////////////////////////////
// getTopoPetZoomLevel(name) //
///////////////////////////////

// function to get the zoomLevel of a TopoPet

function getTopoPetZoomLevel(name) {

	// Set variables
	var zoomLevel;

	// Get the zoom level
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {
			zoomLevel = topoPets[i][5];

			// Return the zoom level
			return zoomLevel;
		};
	};
}

///////////////////////////////
// getTopoPetTextColor(name) //
///////////////////////////////

// function to get the textColor for a TopoPet

function getTopoPetTextColor(name) {

	// Set variables
	var type1;
	var textColor;

	// Get type and matching background color
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {

			// Get type1
			type1 = topoPets[i][1];

			// Get matching text color
			if (type1 = "AIR") {
				textColor = "aqua";
			} else if (type1 = "EARTH") {
				textColor = "#8B5742";
			} else if (type1 = "FIRE") {
				textColor = "red";
			} else if (type1 = "NORMAL") {
				textColor = "#fa8ecf";
			} else if (type1 = "SPIRIT") {
				textColor = "#a20ce8";
			} else if (type1 = "WATER") {
				textColor = "blue";
			} else {
				textColor = "#ABABAB";
			}

			// Return the text color
			return textColor;
		};
	};
}

/////////////////////////////////////
// getTopoPetBackgroundColor(name) //
/////////////////////////////////////

// function to get the background color for a TopoPet

function getTopoPetBackgroundColor(name) {

	// Set variables
	var type1;
	var backgroundColor;

	// Get type and matching background color
	for (i = 0; i < topoPets.length; i++) {
		if (topoPets[i][0] == name) {
			// Get type1
			type1 = topoPets[i][1];

			// Get matching background color
			if (type1 = "AIR") {
				backgroundColor = "#AEEEEE";
			} else if (type1 = "EARTH") {
				backgroundColor = "#BC7642";
			} else if (type1 = "FIRE") {
				backgroundColor = "#CD7777";
			} else if (type1 = "NORMAL") {
				backgroundColor = "white";
			} else if (type1 = "SPIRIT") {
				backgroundColor = "#c083de";
			} else if (type1 = "WATER") {
				backgroundColor = "#4981CE";
			} else {
				backgroundColor = "white";
			}

			// Return the background color
			return backgroundColor;
		};
	};
}

/*
function checkTopoPetsStats(name) {
	//
}

function catchTopoPets(name) {
	//
}

function checkTopoPetsCaught(topoPetsGame, name) {
	var topoPetsCaught = topoPetsGame.topoPetsCaught;
	topoPetsGame.topoPetsCaught = topoPetsCaught;
	return topoPetsGame;
}
*/