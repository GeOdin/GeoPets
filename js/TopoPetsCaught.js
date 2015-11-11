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
 * * checkTopoPetsFound()
 */

// variable to check whether a TopoPet has been caught (to count caught TopoPet)
// 0 = not caught
// 1 = caught
var topoPetsCaught = {
	CHARFOIL: 0,
	HAILO: 0,
	LAVACHE: 0,
	MOREEL: 0,
	MUDDITCH: 0,
	NEMATOAD: 0,
	PIRAMINI: 0,
	PYROSE: 0,
	SANDANCE: 0,
	SHEAL: 0,
	VAMPYRE: 0,
	WINGDIGO: 0,
	total: function() {
		return this.CHARFOIL 
		+ this.HAILO
		+ this.LAVACHE 
		+ this.MOREEL
		+ this.MUDDITCH
		+ this.NEMATOAD 
		+ this.PIRAMINI
		+ this.PYROSE
		+ this.SANDANCE
		+ this.SHEAL
		+ this.VAMPYRE
		+ this.WINGDIGO;
	}
};

/////////////////////////
// setTopoPetsCaught() //
/////////////////////////

// Function to show the TopoPets caught

function setTopoPetsCaught(){
	document.getElementById("topoPetsFoundTitle").innerHTML = "<p> Recorder: " + topoPetsCaught.total() + "/" + getTotalAmountTopoPets() + " <br/><progress id='health' value=" + topoPetsCaught.total() + " max=" + getTotalAmountTopoPets() + " style='height:1vh;width:60%;'>";
};

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

//////////////////////////
// checkTopoPetsFound() //
//////////////////////////

// Function to check whether all TopoPets have been topoPetsFoundTitle

function checkTopoPetsFound() {
	if (topoPetsCaught.total() == getTotalAmountTopoPets()) {
		document.getElementById("achievementNone").style.display = "none";
		document.getElementById("achievementAllTopoPets").style.display = "block";
	}
}