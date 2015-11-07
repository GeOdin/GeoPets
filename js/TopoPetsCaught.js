/* TopoPetsCaught.js
 * JavaScript file for checking the TopoPets Caught
 * Made on 07-11-2015
 * by GeOdin
 *
 * This JavaScript file includes the following var:
 * topoPetCaught
 */

// variable to check whether a TopoPet has been caught (to count caught TopoPet)
// 0 = not caught
// 1 = caught
var topoPetCaught = {
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