/* TopoPetsCaught.js
 * JavaScript file for checking the TopoPets Caught
 * Made on 07-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following variables:
 * * var topoPetsCaught
 *
 * This JavaScript file includes the following function
 * * setTopoPetsCaught()
 * * getTotalAmountTopoPets()
 * * getTotalAmountAirTopoPets()
 * * getTotalAmountEarthTopoPets()
 * * getTotalAmountFireTopoPets()
 * * getTotalAmountNormalTopoPets()
 * * getTotalAmountSpiritTopoPets()
 * * getTotalAmountWaterTopoPets()
 * * checkTopoPetsFound()
 * * checkAirTopoPetsFound()
 * * checkEarthTopoPetsFound()
 * * checkFireTopoPetsFound()
 * * checkNormalTopoPetsFound()
 * * checkSpiritTopoPetsFound()
 * * checkWaterTopoPetsFound()
 */

// variable to check whether a TopoPet has been caught (to count caught TopoPet)
// 0 = not caught
// 1 = caught
var topoPetsCaught = {
	AQUNDINE: 0, 
	CHARFOIL: 0,
	ELEPHAUN: 0,
	FIREMANDER: 0, 
	GNOMARL: 0, 
	HAILO: 0,
	LAVACHE: 0,
	MOREEL: 0,
	MUDDITCH: 0,
	NEMATOAD: 0,
	PARASYLPH: 0, 
	PIRAMINI: 0,
	PYROSE: 0,
	SANDANCE: 0,
	SHEAL: 0,
	TULPA: 0,
	TUSCAT: 0,
	VAMPYRE: 0,
	WINGDIGO: 0,
	totalAIR: 0,
	totalEARTH: 0,
	totalFIRE: 0,
	totalNORMAL: 0,
	totalSPIRIT: 0,
	totalWATER: 0,
	total: function() {
		return this.AQUNDINE
		+ this.CHARFOIL 
		+ this.ELEPHAUN
		+ this.FIREMANDER 
		+ this.GNOMARL 
		+ this.HAILO
		+ this.LAVACHE 
		+ this.MOREEL
		+ this.MUDDITCH
		+ this.NEMATOAD
		+ this.PARASYLPH 
		+ this.PIRAMINI
		+ this.PYROSE
		+ this.SANDANCE
		+ this.SHEAL
		+ this.TULPA
		+ this.TUSCAT
		+ this.VAMPYRE
		+ this.WINGDIGO;
	}
/*
	totalFire: function() {
		return this.CHARFOIL 
		+ this.LAVACHE 
		+ this.PYROSE;
	}
 */
};

/////////////////////////
// setTopoPetsCaught() //
/////////////////////////

// Function to show the TopoPets caught

function setTopoPetsCaught(){
	document.getElementById("topoPetsFoundTitle").innerHTML = "<p> Recorder: " + topoPetsCaught.total() + "/" + getTotalAmountTopoPets() + " <br/><progress id='health' value=" + topoPetsCaught.total() + " max=" + getTotalAmountTopoPets() + " style='height:1vh;width:60%;'>";
}

//////////////////////////////
// getTotalAmountTopoPets() //
//////////////////////////////

// Function to get the total amount of TopoPets

function getTotalAmountTopoPets() {

	// Set the variables
	var totalAmountTopoPets;

	// Get the total amount of TopoPets
	totalAmountTopoPets = topoPets.length - 1;

	// Return the amount of TopoPets
	return totalAmountTopoPets;
}

/////////////////////////////////
// getTotalAmountAirTopoPets() //
/////////////////////////////////

// Function to get the total amount of Air TopoPets

function getTotalAmountAirTopoPets() {

	// Set the variables
	var totalAmountAirTopoPets = 0;

	// Get the total amount of TopoPets
	for (i=0; i<topoPets.length; i++) {
		if (topoPets[i][1] == "AIR") {
			totalAmountAirTopoPets++;
		// No 2nd type yet
		//} else if (topoPets[i][2] == "AIR") {
		//	totalAmountAirTopoPets++;
		}
	}

	// Return the amount of TopoPets
	return totalAmountAirTopoPets;
}

///////////////////////////////////
// getTotalAmountEarthTopoPets() //
///////////////////////////////////

// Function to get the total amount of Earth TopoPets

function getTotalAmountEarthTopoPets() {

	// Set the variables
	var totalAmountEarthTopoPets = 0;

	// Get the total amount of TopoPets
	for (i=0; i<topoPets.length; i++) {
		if (topoPets[i][1] == "EARTH") {
			totalAmountEarthTopoPets++;
		// No 2nd type yet
		//} else if (topoPets[i][2] == "EARTH") {
		//	totalAmountEarthTopoPets++;
		}
	}

	// Return the amount of TopoPets
	return totalAmountEarthTopoPets;
}

//////////////////////////////////
// getTotalAmountFireTopoPets() //
//////////////////////////////////

// Function to get the total amount of Fire TopoPets

function getTotalAmountFireTopoPets() {

	// Set the variables
	var totalAmountFireTopoPets = 0;

	// Get the total amount of TopoPets
	for (i=0; i<topoPets.length; i++) {
		if (topoPets[i][1] == "FIRE") {
			totalAmountFireTopoPets++;
		// No 2nd type yet
		//} else if (topoPets[i][2] == "FIRE") {
		//	totalAmountFireTopoPets++;
		}
	}

	// Return the amount of TopoPets
	return totalAmountFireTopoPets;
}

////////////////////////////////////
// getTotalAmountNormalTopoPets() //
////////////////////////////////////

// Function to get the total amount of Normal TopoPets

function getTotalAmountNormalTopoPets() {

	// Set the variables
	var totalAmountNormalTopoPets = 0;

	// Get the total amount of TopoPets
	for (i=0; i<topoPets.length; i++) {
		if (topoPets[i][1] == "NORMAL") {
			totalAmountNormalTopoPets++;
		// No 2nd type yet
		//} else if (topoPets[i][2] == "NORMAL") {
		//	totalAmountNormalTopoPets++;
		}
	}

	// Return the amount of TopoPets
	return totalAmountNormalTopoPets;
}

////////////////////////////////////
// getTotalAmountSpiritTopoPets() //
////////////////////////////////////

// Function to get the total amount of Spirit TopoPets

function getTotalAmountSpiritTopoPets() {

	// Set the variables
	var totalAmountSpiritTopoPets = 0;

	// Get the total amount of TopoPets
	for (i=0; i<topoPets.length; i++) {
		if (topoPets[i][1] == "SPIRIT") {
			totalAmountSpiritTopoPets++;
		// No 2nd type yet
		//} else if (topoPets[i][2] == "SPIRIT") {
		//	totalAmountSpiritTopoPets++;
		}
	}

	// Return the amount of TopoPets
	return totalAmountSpiritTopoPets;
}

///////////////////////////////////
// getTotalAmountWaterTopoPets() //
///////////////////////////////////

// Function to get the total amount of Water TopoPets

function getTotalAmountWaterTopoPets() {

	// Set the variables
	var totalAmountWaterTopoPets = 0;

	// Get the total amount of TopoPets
	for (i=0; i<topoPets.length; i++) {
		if (topoPets[i][1] == "WATER") {
			totalAmountWaterTopoPets++;
		// No 2nd type yet
		//} else if (topoPets[i][2] == "WATER") {
		//	totalAmountWaterTopoPets++;
		}
	}

	// Return the amount of TopoPets
	return totalAmountWaterTopoPets;
}

//////////////////////////
// checkTopoPetsFound() //
//////////////////////////

// Function to check whether all TopoPets have been found

function checkTopoPetsFound() {
	if (topoPetsCaught.total() == getTotalAmountTopoPets()) {
		document.getElementById("achievementAllTopoPets").style.display = "block";
		document.getElementById("journalAllTopoPetsCaught").style.display = "block";
	}
}

/////////////////////////////
// checkAirTopoPetsFound() //
/////////////////////////////

// Function to check whether all Air TopoPets have been found

function checkAirTopoPetsFound() {
	if (topoPetsCaught.totalAIR == getTotalAmountAirTopoPets()) {
		document.getElementById("achievementAllAirTopoPets").style.display = "block";
	}
}

///////////////////////////////
// checkEarthTopoPetsFound() //
///////////////////////////////

// Function to check whether all Earth TopoPets have been found

function checkEarthTopoPetsFound() {
	if (topoPetsCaught.totalEARTH == getTotalAmountEarthTopoPets()) {
		document.getElementById("achievementAllEarthTopoPets").style.display = "block";
	}
}

//////////////////////////////
// checkFireTopoPetsFound() //
//////////////////////////////

// Function to check whether all Fire TopoPets have been found

function checkFireTopoPetsFound() {
	if (topoPetsCaught.totalFIRE == getTotalAmountFireTopoPets()) {
		document.getElementById("achievementAllFireTopoPets").style.display = "block";
	}
}

////////////////////////////////
// checkNormalTopoPetsFound() //
////////////////////////////////

// Function to check whether all Normal TopoPets have been found

function checkNormalTopoPetsFound() {
	if (topoPetsCaught.totalNORMAL == getTotalAmountNormalTopoPets()) {
		document.getElementById("achievementAllNormalTopoPets").style.display = "block";
	}
}

////////////////////////////////
// checkSpiritTopoPetsFound() //
////////////////////////////////

// Function to check whether all Spirit TopoPets have been found

function checkSpiritTopoPetsFound() {
	if (topoPetsCaught.totalSPIRIT == getTotalAmountSpiritTopoPets()) {
		document.getElementById("achievementAllSpiritTopoPets").style.display = "block";
	}
}

///////////////////////////////
// checkWaterTopoPetsFound() //
///////////////////////////////

// Function to check whether all Water TopoPets have been found

function checkWaterTopoPetsFound() {
	if (topoPetsCaught.totalWATER == getTotalAmountWaterTopoPets()) {
		document.getElementById("achievementAllWaterTopoPets").style.display = "block";
	}
}
