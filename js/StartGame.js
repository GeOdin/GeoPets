/* StartGame.js
 * JavaScript file to arrange the start of the GeoPets game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * startGame()
 * setLatLon()
 * drawMap()
 */

/////////////////
// startGame() //
/////////////////

// Function to start the GeoPets game and get the needed variables

function startGame() {
	// Set the variables
	var locationName = "WAGENINGEN"; // var locationName = """"; for later versions
	var playerName = "";
	var startingVariables = new Object();

	// Create the startingVariables object
	startingVariables.locationName = locationName;
	setLatLon(startingVariables);

	// Get the player's name
	while (playerName.length < 1) {

		// Get the name
		playerName = prompt("What is your name? ", "Mistae");

		// Add the playerName to the startingVariables
		startingVariables.playerName = playerName;
	}

	// Show the player's name
	document.getElementById("player").innerHTML = "<p>" + startingVariables.playerName + "</p>";
	document.getElementById("player").style.display = "block";

	// Show the turn box
	document.getElementById("turn").style.display = "block";

	// Show the city name
	document.getElementById("locationName").innerHTML = "<p>" + startingVariables.locationName + "</p>";
	document.getElementById("locationName").style.display = "block";

	// Show the chat box
	document.getElementById("achievements").style.display = "block";

	// Show the GeoPets Found box
	document.getElementById("geoPetsFound").style.display = "block";
	
	// Draw the map
	drawMap(startingVariables);
	// Show the map
	document.getElementById("map").style.display = "block";

	// Return the starting variables
	return startingVariables;
}


//////////////////////////////////
// setLatLon(startingVariables) //
//////////////////////////////////

// Function to get the coordinates of a city

function setLatLon(startingVariables) {
	// Variable with city properties
	var cityProperties = [
		["City Name", "Latitude", "Longitude", "Zoom Level"],
		["LEIDEN", 52.1583300, 4.4930600, 13],
		["WAGENINGEN", 51.974151, 5.664084, 14]
	];

	
	for (i=0; i<cityProperties.length; i++) {
		if (cityProperties[i][0] == startingVariables.locationName) {
			startingVariables.lat = cityProperties[i][1];
			startingVariables.lon = cityProperties[i][2];
			startingVariables.zoomLevel = cityProperties[i][3];
		}
	}
}


////////////////////////////////
// drawMap(startingVariables) //
////////////////////////////////

// Function to draw the map for the RUF-a-GIS game

function drawMap(startingVariables) {

	// Draw the map
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: startingVariables.zoomLevel,
		center: new google.maps.LatLng(startingVariables.lat, startingVariables.lon),
		mapTypeId: google.maps.MapTypeId.HYBRID
	});
}