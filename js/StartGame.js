/* StartGame.js
 * JavaScript file to arrange the start of the TopoPets game
 * Made on 04-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following functions:
 * startGame()
 * setLatLon(startingVariables)
 * drawMap(topoPetsGame)
 * createMarkers(map)
 * createInfoWindows(topoPetsGame)
 * Not yet finished functions:
 * resetMap()
 */

/////////////////
// startGame() //
/////////////////

// Function to start the TopoPets game and get the needed variables

function startGame() {

	// Create topoPetsGame object
	var topoPetsGame = new Object();
	// Create player object
	var player = new createPlayer();

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
		player.Name = playerName;
	}
	// Add the player to the topoPets object
	topoPetsGame.player = player;

	// Show the player's name
	document.getElementById("player").innerHTML = "<p>" + topoPetsGame.player.Name + "</p>";

	// Show the amount of TopoPets caught
	setTopoPetsCaught();

	// Show the city name
	document.getElementById("locationName").innerHTML = "<p>" + startingVariables.locationName + "</p>";
	document.getElementById("locationName").style.display = "block";
	document.getElementById("location").style.display = "block";
	
	// Draw the map
	topoPetsGame.startingVariables = startingVariables;
	topoPetsGame = drawMap(topoPetsGame);
	// Show the map
	document.getElementById("map").style.display = "block";

	// Show the buttons
	document.getElementById("buttons").style.display = "block";

	// Return the starting variables
	return topoPetsGame;
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

///////////////////////////
// drawMap(topoPetsGame) //
///////////////////////////

// Function to draw the map

function drawMap(topoPetsGame) {

	// Create the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: topoPetsGame.startingVariables.zoomLevel,
		center: new google.maps.LatLng(topoPetsGame.startingVariables.lat, topoPetsGame.startingVariables.lon),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});
	// Add the map to the topoPetsGame object
	topoPetsGame.startingVariables.map = map;

	// Create the markers
	var markers = createMarkers(topoPetsGame.startingVariables.map);
	// Add the markers to the topoPetsGame object
	topoPetsGame.startingVariables.markers = markers;

	// Create the InfoWindows and add it to the topoPets object
	topoPetsGame = createInfoWindows(topoPetsGame);

	// Return the topoPetsGame object
	return topoPetsGame;
}

////////////////////////
// createMarkers(map) //
////////////////////////

// Function to create the TopoPets markers

function createMarkers(map) {

	// Create an object to store the markers in
	var markers = new Object();
	//var infowindow = null;

	// Create the TopoPets markers and store them in the markers object
	for (i = 1; i < topoPets.length; i++) {
		var topoPetsName = topoPets[i][0];
		var topoPetsType1 = topoPets[i][1];
		var topoPetsDescription = topoPets[i][2];
		var topoPetsCoordX = topoPets[i][3];
		var topoPetsCoordY = topoPets[i][4];
		var topoPetsZoomLevel = topoPets[i][5];

		// Create the TopoPet marker
		var coords = new google.maps.LatLng(topoPetsCoordX, topoPetsCoordY);
		markers[topoPetsName] = new google.maps.Marker({
		    position: coords, 
		    title: topoPetsName,
		    icon: "images/" + topoPetsType1 + ".png" 
		});

		// Add the marker to the map
		markers[topoPetsName].setMap(map);
	}

	// Return the markers object
	return markers;
}

/////////////////////////////////////
// createInfoWindows(topoPetsGame) //
/////////////////////////////////////

// Function to add infoWindows to the markers

function createInfoWindows(topoPetsGame) {

	// Set variables
	var numb = 0;
	var content;
	var infoWindow;
	var textColor;
	var map = topoPetsGame.startingVariables.map;
	var markers = topoPetsGame.startingVariables.markers;
	var player = topoPetsGame.player;

	// Create the InfoWindow for CHARFOIL
	// Add 1 to numb
	numb++;
	textColor = "red";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowCHARFOIL = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.CHARFOIL, "mouseover", function () {
        infoWindowCHARFOIL.open(map, markers.CHARFOIL);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.CHARFOIL, "mouseout", function () {
        infoWindowCHARFOIL.close();
    });	
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.CHARFOIL, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkFireTopoPetsFound();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for HAILO
	// Add 1 to numb
	numb++;
	textColor = "aqua";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowHAILO = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.HAILO, "mouseover", function () {
        infoWindowHAILO.open(map, markers.HAILO);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.HAILO, "mouseout", function () {
        infoWindowHAILO.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.HAILO, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for LAVACHE
	// Add 1 to numb
	numb++;
	textColor = "red";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowLAVACHE = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.LAVACHE, "mouseover", function () {
        infoWindowLAVACHE.open(map, markers.LAVACHE);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.LAVACHE, "mouseout", function () {
        infoWindowLAVACHE.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.LAVACHE, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkFireTopoPetsFound();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for MOREEL
	// Add 1 to numb
	numb++;
	textColor = "blue";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowMOREEL = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.MOREEL, "mouseover", function () {
        infoWindowMOREEL.open(map, markers.MOREEL);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.MOREEL, "mouseout", function () {
        infoWindowMOREEL.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.MOREEL, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for MUDDITCH
	// Add 1 to numb
	numb++;
	textColor = "#8B5742";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowMUDDITCH = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.MUDDITCH, "mouseover", function () {
        infoWindowMUDDITCH.open(map, markers.MUDDITCH);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.MUDDITCH, "mouseout", function () {
        infoWindowMUDDITCH.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.MUDDITCH, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for NEMATOAD
	// Add 1 to numb
	numb++;
	textColor = "blue";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowNEMATOAD = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.NEMATOAD, "mouseover", function () {
        infoWindowNEMATOAD.open(map, markers.NEMATOAD);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.NEMATOAD, "mouseout", function () {
        infoWindowNEMATOAD.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.NEMATOAD, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for PIRAMINI
	// Add 1 to numb
	numb++;
	textColor = "#8B5742";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowPIRAMINI = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.PIRAMINI, "mouseover", function () {
        infoWindowPIRAMINI.open(map, markers.PIRAMINI);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.PIRAMINI, "mouseout", function () {
        infoWindowPIRAMINI.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.PIRAMINI, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for PYROSE
	// Add 1 to numb
	numb++;
	textColor = "red";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowPYROSE = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.PYROSE, "mouseover", function () {
        infoWindowPYROSE.open(map, markers.PYROSE);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.PYROSE, "mouseout", function () {
        infoWindowPYROSE.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.PYROSE, "click", function () {
       	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkFireTopoPetsFound();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for SANDANCE
	// Add 1 to numb
	numb++;
	textColor = "#8B5742";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowSANDANCE = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.SANDANCE, "mouseover", function () {
        infoWindowSANDANCE.open(map, markers.SANDANCE);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.SANDANCE, "mouseout", function () {
        infoWindowSANDANCE.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.SANDANCE, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for SHEAL
	// Add 1 to numb
	numb++;
	textColor = "blue";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowSHEAL = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.SHEAL, "mouseover", function () {
        infoWindowSHEAL.open(map, markers.SHEAL);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.SHEAL, "mouseout", function () {
        infoWindowSHEAL.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.SHEAL, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for VAMPYRE
	// Add 1 to numb
	numb++;
	textColor = "aqua";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowVAMPYRE = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.VAMPYRE, "mouseover", function () {
        infoWindowVAMPYRE.open(map, markers.VAMPYRE);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.VAMPYRE, "mouseout", function () {
        infoWindowVAMPYRE.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.VAMPYRE, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

    // Create the InfoWindow for WINGDIGO
	// Add 1 to numb
	numb++;
	textColor = "aqua";
	// Set the content for the InfoWindow
	content = "<font color=" + textColor + "><h3>" + topoPets[numb][0] + "</h3>" + topoPets[numb][2] + "</font>";
	// Add the content to the infoWindow
	infoWindowWINGDIGO = new google.maps.InfoWindow({
		content: content
	});
	// Add the infoWindow to the marker
    google.maps.event.addListener(markers.WINGDIGO, "mouseover", function () {
        infoWindowWINGDIGO.open(map, markers.WINGDIGO);
    });	
	// Close the infoWindow when the mouse is no longer hovering over the marker
    google.maps.event.addListener(markers.WINGDIGO, "mouseout", function () {
        infoWindowWINGDIGO.close();
    });
	// Add the TopoPet to the recorder when clicked
    google.maps.event.addListener(markers.WINGDIGO, "click", function () {
    	// Add the TopoPet to the recorder if it has not been caught yet
		if (topoPetsCaught[this.title] == 0) {
			topoPetsCaught[this.title] = 1;
			setTopoPetsCaught();
			checkTopoPetsFound();
			// Add TopoPet to active TopoPets if there are less than 5 TopoPets
			setActiveTopoPetsText(topoPetsGame,this.title);
			// Show some text about getting the TopoPet
			document.getElementById("storyText").innerHTML = "You have found " + this.title + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Show the clicked TopoPet in #topoPetsFound
			document.getElementById(this.title).style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[this.title] = null;
		} else {
			// Show some text about already having the TopoPet
			document.getElementById("storyText").innerHTML = "You have already found " + "CHARFOIL" + "!";
			document.getElementById("storyText").style.display = "block";
			document.getElementById("story").style.display = "block";
			// Remove the marker
			this.setMap(null);
			markers[topoPets[numb][0]] = null;
		}
    });

	// Return the topoPetsGame object
	topoPetsGame.startingVariables.map = map;
	topoPetsGame.startingVariables.markers = markers;
	topoPetsGame.startingVariables.player = player;
	return topoPetsGame;
}

/*
////////////////
// resetMap() //
////////////////

// Function to reset the map to Wageningen, zoomLevel 14

function resetMap() {

	var zoomLevel = 14;
	var lat = 51.974151;
	var lon = 5.664084;

	// Draw the map
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: zoomLevel,
		center: new google.maps.LatLng(lat, lon),
		mapTypeId: google.maps.MapTypeId.TERRAIN
	});

	// It should remember which TopoPets are already caught and not show those markers
	var markers = createMarkers(map);
	// createInfoWindows(topoPetsGame);// does not work
}
 */
