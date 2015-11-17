/* TopoPetsGame.js
 * JavaScript file for the TopoPets browser game
 * Made on 04-11-2015
 * by GeOdin
 *
 *==============================================
 * This JavaScript file incluced to do things: *
 *==============================================
 * General
 * TopoPets.html
 * * currently no to do things
 * stylesheet_TopoPets.css
 * * currently no to do things
 * StartGame.js
 * TopoPetsGame.js
 * Battle.js
 * Player.js
 * * currently no to do things
 * Story.js
 * TopoPets.js
 * TopoPetsCaught.js
 * * currently no to do things
 *
 *=========================================================
 * This JavaScript file includes the following functions: *
 *=========================================================
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

////////////////////////////
// To do (general things) //
////////////////////////////

/*
 ===========
 * General *
 ===========
 * button to reset map to Wageningen
 * Show icon of player instead of mouse when hovering over map?
 * Refactor TopoPets found into TopoPets recorder
 * add a manual button to the right of the date
 * Show Player/ Bag and Journal/ Achievements as different tabs from each other
 * Make divs for Player/ Bag/ ... draggable
 ================
 * Achievements *
 ================
 * add achievements
 * * TopoPets
 * * * Obtain all TopoPets of a certain type
 * * * * SNOW (/ICE)
 * * * * * I wanna build a snowman.
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
 * Add more text when you click on a certain achievement? (like recorder entries?)
 * Make achievements you don't have yet ('to do') (light) gray (underneath the 'done' achievements), with more information about how to get them when you click on them? (like recorder entries?)
 * Add a counter for the achievements (like the recorder)?
 * Order achievements by kind of achievement (Story, TopoPets caught, ...)
 ===================
 * Active TopoPets *
 ===================
 * change the color of the Title of active TopoPet entries to the types of the TopoPet, like for the recorder
 * Make different tabs for different active TopoPets
 * Also add a counter for how many active TopoPets the player has?
 * When clicked on an active TopoPet, get a small menu where on the left you can click on
 * * General information
 * * Stats
 * * Battle moved
 * * //document.getElementById(activeTopoPetCall + "Text").style.width = "50%"; from the setActiveTopoPetsText(topoPetsGame, topoPetObject) function
 * And where you see this explained on the right
 * * for example, create new divs and toggle functions for this purpose that are set in the setActiveTopoPetsText(topoPetsGame, topoPetObject) function, make these in a horizontal div under the #...Title?
 * * * (activeTopoPetCall + "General")
 * * * (activeTopoPetCall + "Stats")
 * * * (activeTopoPetCall + "Moves")
 * Don't show space vertically between active TopoPets
 ===========
 * Buttons *
 ===========
 * Show #buttons after getting the recorder
 * Make divs of buttons on the bottom of the screen also pop up when pressing specific buttons
 * Currently, you have to press the toggling buttons twice with the buttons on the bottom of the screen. 
 * * Adjust this to only having to click once
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
 * also add a button to toggle the buttons on the bottom of the screen? (so that you have a whole street view/ able to use the zooming buttons of google maps)
 ===========
 * Markers *
 ===========
 * Show markers where TopoPets are, only when hovered over them, within a certain buffer (geo-fencing)
 * * show markers only on certain zoom level
 * * * http://stackoverflow.com/questions/5030127/marker-visibility-in-google-maps
 * * markers from
 * * * https://mapicons.mapsmarker.com/category/markers/nature/natural-marvels/
 * * * https://mapicons.mapsmarker.com/category/markers/nature/weather/
 * * * make background image transparent:
 * * * * http://www.online-image-editor.com/
 * * the markers are also visible on Streetview!
 * * try to make them only visible on Streetview?
 * * * http://stackoverflow.com/questions/18311698/visibility-of-markers-on-map-panorama-in-google-maps
 * * * supported cities for streetview
 * * * * https://www.google.com/maps/streetview/understand/#where
 * explanation about markers
 * * http://stackoverflow.com/questions/29324136/google-map-api-multi-markers
 * zoomLevel
 * * Show different TopoPets at different zoom levels
 * * http://stackoverflow.com/questions/20127641/simple-multi-tab-hide-show-div
 * * * http://jsfiddle.net/y76k4/
 ==========
 * Tokens *
 ==========
 * Add the possibility to earn tokens for big battles during the game
 * Add Tokens (earned) as tab of Achievements (and possibly also to buttons on the bottom of the screen?)
 */

///////////////////////////
////// TopoPets.html //////
///////////////////////////

/////////////////////////////////////
////// stylesheet_TopoPets.css //////
/////////////////////////////////////

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

/////////////////////////////
////// TopoPetsGame.js //////
/////////////////////////////

/*
 * add all 5 moves to setActiveTopoPetsText(topoPetsGame, topoPetObject) instead of just move1
 */

///////////////////////
////// Battle.js //////
///////////////////////

/*
 *==================
 * Damage formula: *
 *==================
 * * a x b x c / d x e x f
 * * * a = move.power --> the power of the move
 * * * b = move.typePower --> the extra power added to the move when type power is used
 * * * c = (attacker.attack / defender.defense) --> attacker.attack is the (current) attack of the attacker
 * * * d = defender.defense --> the (current) defense of the defender
 * * * e = the factor representing weaknesses and resistances from TopoPets against move types
 * * * f = a random number between 0.875 and 1.175
 *
 *==============================
 * Weaknesses and resistances: *
 *==============================
 * * Row (horizontal) : Attacking TopoPet
 * * Column (vertical): Defending TopoPet
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *         * Normal  *   Air   *  Earth  *  Fire   *  Water  * Spirit  *Total (6)*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Normal  *   0.5   *    1    *    1    *    1    *    1    *    2    *    6    * x
 * Air     *    1    *    2    *    2    *   0.5   *    1    *   0.5   *    6    * x
 * Earth   *    1    *   0.5   *    1    *    2    *    1    *    1    *    6    * x
 * Fire    *    2    *    1    *   0.5   *    1    *   0.5   *    2    *    6    * x
 * Water   *    1    *   0.5   *    2    *    2    *    1    *   0.5   *    6    * x
 * Spirit  *    1    *    2    *   0.5   *   0.5   *    2    *    1    *    6    * x
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Total(6)*    6    *    6    *    6    *    6    *    6    *    6    *         *
 *         *    x    *    x    *    x    *    x    *    x    *    x    *         *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *
 *==========================
 * TopoPets battle stats:  *
 *==========================
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
 *========================
 * Battle Attack stats:  *
 *========================
 * * Name
 * * Type
 * * Special Power
 * * Special Power Cost
 * * Type Power Damage
 * * Type Power Cost
 * * Accuracy
 * * Description
 *
 *==================
 * Battle Attacks: *
 *==================
 * * NORMAL
 * * * Normal attack
 * * * Bark
 * * * Crush
 * * * Growl (strong warning)
 * * * Roar (intimidate)
 * * * Shout
 * * * Slam
 * * * Charge?
 * * AIR
 * * * Air attack
 * * * Blow
 * * * Breeze
 * * * Windthrow (spelling?)
 * * * Whirlwind
 * * * Tornado?
 * * * Twister
 * * * Cyclone
 * * * Hurricane
 * * * Storm
 * * * Gale?
 * * EARTH
 * * * Earth attack
 * * * Throw stone/ rock/ pebble
 * * * Rock Slide
 * * * Earthquake
 * * * Something with tectonic plates?
 * * * Quick sand
 * * * Tremor
 * * FIRE
 * * * Fire attack
 * * * Flame
 * * * Fireball
 * * * Campfire/ forest fire?
 * * * (volcano) eruption?
 * * * Explosion?
 * * * Inferno
 * * WATER
 * * * Water attack
 * * * Bubble
 * * * Water balloon
 * * * Shower/ hose?
 * * * Tidal wave/ Wave/ Tide
 * * * Waterfall
 * * * Monsoon
 * * SPIRIT
 * * * Spirit attack
 * * * Meditate
 * * * Pray
 * * * Sacrifice?
 * * * Wish?
 * * * Throw runes
 * * * Totem dance?
 * Other:
 * * FIGHTING
 * * * Punch
 * * SNOW/ ICE
 * * * Snow ball
 * * * Avalanche
 * * Spike (type?)
 *
 *==================
 * Battle options: *
 *==================
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
 *
 *==================
 * Later versions: *
 *==================
 * * Add possibility to temporarily lower stats of a TopoPet during battle
 * * Add possibility to add status effects
 */

 ///////////////////////
 ////// Player.js //////
 ///////////////////////

 //////////////////////
 ////// Story.js //////
 //////////////////////

/*
 *========
 * Story *
 *========
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
 *
 * Use runes as special alphabet? (since spirit is the special type of version 1)
 *
 *============
 * Version 2 *
 *============
 * Find Piramini (anciuent/ earth)
 * * get hint to go to cAIRo to find Cleopython (ancient/ water)
 * Find Piramidi
 * * get hint to find caesAIR (ancient/ air)
 * Find Piramax
 * * get hint to find Solara (ancient/ fire)
 * with all ancient/ other types
 * * find ancient type
 *
 *==============
 * Characters: *
 *==============
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
 *===============
 * var topoPets *
 *===============
 * * Add unique number to each TopoPet after all TopoPets are made ("topoPetNumber")
 * * Add a specific expNeed type to which the TopoPet belongs? (how much exp a TopoPet needs per level?)
 * * Add a specific expGive type to which the TopoPet belongs? (how much exp a TopoPet gives per level?)
 * * Add a specific catchChance type to which the TopoPet belongs? (the chances of catching a TopoPet per level?)
 *====================
 * var topoPetsStats *
 *====================
 * * Add unique number to each TopoPet after all TopoPets are made ("topoPetNumber")
 * * Moves a TopoPet has at that specific level?
 * * Moves a TopoPet can learn at that specific level
 *
 *=========================
 * New TopoPets per type: *
 *=========================
 * * Normal: (animals, plants, food, general items)
 * * * text color: #fa8ecf
 * * * background color: white
 * * * (animals)        : (animals, ant, anteater, bear, beetle, boar?, bug, bull, camel, cat, caterpillar, chameleon, chick, chicken, chihuahua, cow, dalmation?, deer, dinosaur, dog, dromedary, elephant, emu, fox, gecko, giraffe, goat, hamster, hare, hippopotamus?, horse, insect, monkey, moose, larva, kangaroo, koala, leopard, lion, lizard?, llama, lynx, mammal, mouse, ox, panda, pig, pur(spinnen), rabbit, ram (male sheep/ goat), rat, rattlesnake, rhino, rhinoceros (neushoorn), sheep, shiba, snail, spider, struisvogel, swine?, snake, termite, tiger, turtle, viper, vole (looks like a mouse), wolf) (birds + flying bugs are for air)
 * * * (fantasy animals): (fauns, unicorn)
 * * * (animal parts)   : (arm, claw, ear, finger, foot, fur, hair, hoove, horn, leg, lip, paw, print, tail, teeth, toe, tongue, tooth, tusk, web)
 * * * (plants)         : (basil, beech, birch, blackberry, cherries, clover, conifer, denneappel?, fir (= spar), garlic, herb, oak, palm tree? (fire?), pine, plant, quercus(oak), rose, sylva, tree, tullip)
 * * * (plant parts)    : (acorn, apex, bark, berries, branch, bush, flower, leaf, seed?, stamper?, stem, stick, thorn, timber, trunk, vine, wood)
 * * * (food)           : (apple, banana, biscuit, bread, broccoli, butter, cabbage, cacao, cake, candy, carrot, cauliflower, cheese, chili, chili con carne, chips, chocolate, coockie, corn, cucumber, cupcakes, eat, eater, eggs, food, fruit, gherkin (= augurk), jam, lettuce, macaroni, milk, nectarine, pancakes, peach, pickle (= augurk), pie, pineapple, rice, sandwhich, scone, spaghetti, surimi, sushi, tomato, vegetable, waffle, yoghurt, zucchini (= courgette))
 * * * (general items)  : (art, ball, basket, bowl, beard, beauty, coin, cup, dance, eye, flat, garden, giant, glitter, guitar, hat, herald?, hula hoop, long, mustache, noise, paint, painting, paper, pen, penny, piano, pipe, ring, scarf, slinky (spring that walks down stairs), sock, song, sound, spring, sprinkles, symphony, violin, whip)
 * * * (size)           : (big, collossal?, gargantuan, giant, large, small, tall, tiny)
 * * * Tuscat (tusk + cat) // coords: 51.9766674,5.6622998
 * * * Tulpa (looks like a tullip) // coords: 51.9750596,5.6757712
 * * * Elephaun (elephant + faun (half human, half goat)) // coords: 51.9731725,5.7012871
 * * * shycub (shy + cub (= a small bear)) -> shibear (shiba + bear)
 * * * bearry (bear + berry)
 * * * sticker (stick with goo?)
 * * Air: (aerosol?, air, angel?, arrow, bat, bee, bird, blaas instrument?, black grouse, bow, bumblebee (= hommel), breeze, butterfly, cloud, cotton, crow, cumulus (cloud?), draft, dragon?, dragonfly, duck (water/ air), dust?, eagle, fairy?, feather, fey?, flute?, fly, free, gas?, goose, hail?, hawk, ifrit (winged fire creatures), levitate, mecoptera, moth, owl, parachute, parasailing, parrot, pelican (air/ water), rain?, rainbow, reiger?, sky, smog, smoke?, stork, storm, swan, tornado, umbrella, vapor, volatile, vulture?, wasp, weather?, whirlwind, wind, wing, wings)
 * * * Wasparagus (kassen ten noorden van LUMEN) (Air / Earth)
 * * * Windust (wind + dust)
 * * * Flair (narcistic air elemental) (albardaflat)
 * * * Bair?
 * * * Cubicicle (transformation of Hailo) (looks like an icicle made of cubes/ cube as head, with halo around it's head?)
 * * * Pandart (panda + dart)
 * * * Zombee (zombie + bee) (later version air/ shadow)
 * * * Sparrow (sparrow (= mus) + arrow) (sparrow with an arrow over it's body)
 * * * Dracoin (dragon + coin) ( flying coin with dragon print) -> Draconomy (dragon + economy ) (economy/ business dragon)
 * * Earth: (beach?, brick, canyon, cave, coal?, coast?, crystal?, desert? (earth/ fire), dig, dug, dune?, earth, formation?, ground, hill, island?, isle?, ley line?, mine, mole, mountain, mud, peat, pebble, pingo, podzol?, pumice (volcanic rock, earth/ fire), rift?, rock, rock formation?, sand, sediment?, seed?, soil, solid, spelunking, stalagmite, Stone Henge?, stone, tectonic (plate), terra, tile?, tree?, underground)
 * * * Mudsy (earth) (helper of Sandta) (transforms into Mudditch(already implemented)/ Muddove (earth/ air))
 * * * Sworm (Earth/ Air) (worm that can levitate. When levitating, it excretes a hormone that attracts other sWORMs. Giant flying sWORMs have been seen because of this.) / swarm (fire/ air) / swater (water/ air?)
 * * * Airbex (air+ ibex) (earth/ air) (looks like a mountain goat with small wings around it's legs) (It's a mountain goat that has learned how to fly to pass canyons)
 * * * (Sandash)
 * * * Sandoom (sand + doom) (later earth/ shadow)
 * * * (Piramini is already implemented) -> Piramidi -> Piramax (later versie --> ancient)
 * * * Sant (sand + ant)
 * * * Sockroach (kakkerlak die eruit ziet als een sok) (winkelcentrum)
 * * * Pebbelk (pebble + elk, transformatin of something else?)
 * * * Mudshroom (mud + mushroom)
 * * * Mirrock (mirror + rock) (earth/ spirit)
 * * * Cowabunga (dancing cow) (Nude waar danslessen zijn?)
 * * Fire: (ablaze, ash, barbeque, blaze, bbq, bonfire, burn, burst?, caldera, campfire, candle, charcoal, coal?, combustion, conflagration, desert? (earth/ fire), dragon, ember, explosion?, fiery, fire, fireman, fireplace, firestorm, fireworks, flame, flare, forest fire, furnace, heat, hot, ifrit (winged fire creatures), ignin?, imp, incinerate, lava, magma, match, matchstick, plasma?, pyre, pyro, pyroclastic, pyromaniac, scorch, searing, smoke?, stratovolcano, summer, torch, Vesuvius (well known volcano), volcanic ash, volcano, volcano eruption, warm, warmth, wildfire) (evt nog een bij firehouse bij haarweg)
 * * * Firabbit (Dreijen) (/ Firat)
 * * * Sundash (SSR-W) (later fire/ light)
 * * * Distorchion (in de war firegast) (huisartsenpost) (later fire/ spirit)
 * * * Grelking (later fire/ shadow)
 * * * Firemit (fire hermit)
 * * * Blace (blaze + ace) (final form of a fire transformation?)
 * * * Torchid (torch + orchid) (transforms into Pyrose) (flowers on fire?)
 * * * Flamengo/ flamingo (flame + flamingo) (fire/ air)
 * * * Kerberox (Kerberos + ox) (fire/ ancient?)
 * * * Charfold (transformation of Charfoil)
 * * * Storch? (? + torch)
 * * * (Firefly)
 * * Water: (algae, aqua, aquaduct, aquarium, aquifer?, badger, bakboord?, barnacle, basin?, bath, beach?, bubble, bubble bath, canoe?, carp, cichlid (= baarsachtige), coast?, crab, creek, crocodile, cruise, deck?, ditch (= gracht), dolphin, dowsing (finding water underground, water/ spirit?), drink, drop, droplet, duck (water/ air), eel, fin, fish, freshwater, frog, geyser (water/ fire?), goldfish, gondola, hot bath, hot spring (air/ fire), island?, isle?, jacuzzi, jet ski, kayak, lake, lobster, Loch Ness monster?, manatee (sea cow), marine, mermaid, naval, navy, newt (aquatic salamander), ocean, offshore, orca (killer whale), pool, puddle, raft?, river, salmon, sauna, sea, sea horse, seal, seashell, sea snail, sea star, shark, ship, stuurboord?, surf, swamp, tide, tidal wave, toad, trench (= geul), water, waterdrop, waterfall, wave, well, wetland, whale, whirlpool, yelly fish?)
 * * * Spottle, Spotfin, Spotflow (Zwembad Bongerd)
 * * * Fireel (fire + eel) (fish that sometimes gets firepowers when coocked) / firel (fire + forel - Dutch fish that sometimes gets firepowers when coocked) (could be between grebbedijk and rijn: 51.9607533,5.6701563)
 * * * Tranch (waterpaard) (ditch rooseveltweg)
 * * * Shrimp (fire shrimp) (Rijn)
 * * * Puddolf (puddle + wolf) (water wolf)
 * * * Moyster (moist + oyster) -> Moystar
 * * * Oarca (oar(sman?) + orca)
 * * * Lotusk (lotus + tusk)
 * * * Whalies/ Whaleys -> Whales (whale + wales) (English whale) - whale that likes chocolate milk that transforms/ evolves into English whale
 * * * Dolphump (dolphin + hump/ hunchback?)
 * * * Hydrake (hydra + drake)
 * * * Dalmeteo (Dalmatian + meteo) (water/ air?)
 * * * Aligatorch (aligator + torch) (water/ fire)
 * * SPIRIT: (angel, avatar, celestial, celtic?, ceremony, chalice, deity, disciple, djinn, dowsing (finding water underground, water/ spirit?), ether, fey?, fairy?, guardian, magic?, meditation, mirror, monastery, monk, nature magic?, new age, parish?, prayer, priest, relic, religion, rune, sacred, soul, spirit, spiritual, symbol, temple, totem, tribe? voodoo, wish, witch, worship, yoga)
 * * * text color: #9948C2 or #a20ce8
 * * * background color: #c083de?
 * * * Parasylph (spirit/ air) // coords: 51.9611814,5.6475759 // It guards the city, keeping watch from high buildings.
 * * * Gnomarl (Gnomarble) (spirit/ earth) // coords: 51.9869076,5.6572318 // An earth spirit that looks out over the northern borders of the city.
 * * * Sandwitch (spirit/ earth)
 * * * Firemander (? Salamander? Salamandragon? Salamatch? Salamash? Salamember? Salamagma?) (spirit/ fire) // coords: 51.9765131,5.6915426 // It's a strong fire spirit that resembles a salamander. It lives in deciduous forests.
 * * * Aqundine (spirit/ water) // coords: 51.9599439,5.6868434 // It's a very powerful water spirit that sometimes likes to play with the ferry.
 * * * Gaia (spirit) (have her talk to you every now and then, but don't let her be catchable)
 * Later version types: (know because of research that some TopoPets are another typoe than previously thought)
 * * ancient, fighting, ice/ snow, light, shadow
 * * * ANCIENT (archaeology, descend, excavation, fossil, historic?, ruin)
 * * * * text color: #c48648
 * * * * Piramini becomes ancient/ earth, it's transformations Piramidi and Piramax will also become ancient/ earth (Piramini sets you of to Cairo to find Cleopython, transforms into piramidi to help you find caesair and in piramax to help you find Solara)
 * * * * Cleopython (cleopatra + python) (ancient/ water)
 * * * * Solara (sol/ solar + ra) (ancient/ fire) // Ra was actually the sun god, so this should become ancient/ light (Sekhmet as God of liopns, fire and vengeance instead?)
 * * * * Caesair (caesar + air) (ancient/ air)
 * * * FIGHTING/ FIGHT (belt, black belt, dagger, fight, fighting, fist, fencing, foil (weapon usid in fencing), karate, kung fu, martial arts, sumo, sword, taekwondo, weapon, wrestling)
 * * * * Charfoil later fire/ fighting?
 * * * * Hamstrong (hamster + strong) -> Hamstar (hamster + star) (/ Hamstar -> Hamstrong)
 * * * * Slapstick (slap + stick + slapstick) (figthing stick with humor)
 * * * ICE / SNOW (arctic, bobsleigh, cold, fjord?, freeze, freezer, fridge, frost, glacial, glacier, ice, ice cream, ice skating, penguin, polar, (bob)sled, ski, snow, snow ball, snowboard, snow man, winter)
 * * * * text color: #3dfcff or 3bceff
 * * * * Polaris/ polarice?
 * * * * Polarva (polar + larva)
 * * * * Chalice (chalice + ice) (spirit/ snow/ice)
 * * * * It will use the recorder looks of what is currently air, a new styling for air needs to be made
 * * * * Hailo becomes ice/ light, it's transformation Cubicicle will also become ice/ light
 * * * * Snowl (snow + owl) (snow/ air)
 * * * LIGHT (aurora? (light/ ice/snow), constellation, glow, halo?, Hubble telescope?, illuminate, lantern, lamp, light, lighthouse, star, sol, solar, sun, telescope?)
 * * * SHADOW (apocalypse, black, disaster, disease?, doom, ghost, hyena?, mosquito (shadow/ air)?, pandemic, rodent?, scar, shadow)
 * * * * Scare (transformation of Sheal) // You should know better than to mistreat a poor seal. (evolves when sheal is fainted a random amount of times - 10-20 eg.)
 * * * * Deerie (deer + eerie)
 * Seasonal TopoPets:
 * * Christmas
 * * * Sandta (earth/ spirit) (sort of Santa Claus)
 * * * Raindeer (water/ spirit) (helper of Sandta, some have a red nose)
 * * * Mudsy (earth) (helper of Sandta) 
 * * Halloween
 * * * Pumpking (pumpkin + king))
 */

 ///////////////////////////////
 ////// TopoPetsCaught.js //////
 ///////////////////////////////

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
			document.getElementById(activeTopoPetCall).innerHTML = "<a onclick='toggleActiveTopoPet" + activeTopoPetNumber + "Text()' style='background-color:" + topoPetObject.backgroundcolor + ";color:" + topoPetObject.textColor + ";'> Lvl. " + topoPetObject.level + " " + topoPetObject.Name + "</a>";
			document.getElementById(activeTopoPetCall).style.display = "block";

			// Set the new div for the specific active TopoPet
			document.getElementById(activeTopoPetCall + "Title").style.color = topoPetObject.textColor;
			document.getElementById(activeTopoPetCall + "Title").style.backgroundColor = topoPetObject.backgroundcolor;
			document.getElementById(activeTopoPetCall + "Title").innerHTML = "<p> Lvl. " + topoPetObject.level + " " + topoPetObject.Name + "</p>";
			var specificColor = topoPetObject.backgroundcolor;
			if (topoPetObject.type1 == "NORMAL") {
				specificColor = topoPetObject.textColor;
			} else if (topoPetObject.type1 == "AIR") {
				specificColor = topoPetObject.textColor;
			}
			document.getElementById(activeTopoPetCall + "Text").style.position = "relative";
			document.getElementById(activeTopoPetCall + "Text").style.width = "60%";
			document.getElementById(activeTopoPetCall + "Text").style.left = "20%";
			document.getElementById(activeTopoPetCall + "Text").style.textAlign = "center";
			document.getElementById(activeTopoPetCall + "Text").style.color = specificColor;
			document.getElementById(activeTopoPetCall + "Text").style.backgroundColor = "white";
			document.getElementById(activeTopoPetCall + "Text").style.borderRadius = "5px";
			document.getElementById(activeTopoPetCall + "Text").innerHTML = " Exp: " + topoPetObject.currentExp + "/" + topoPetObject.expNextLevel + "<br/> <br/> HP: " + topoPetObject.currentHP + "/" + topoPetObject.maxHP + "<br/> SP: " + topoPetObject.currentSP + "/" + topoPetObject.maxSP + "<br/> TP: " + topoPetObject.currentTP + "/" + topoPetObject.maxTP + "<br/> Attack: " + topoPetObject.maxAttack + "<br/> Defense: " + topoPetObject.maxDefense + "<br/> Agility: " + topoPetObject.maxAgility + "<br/> <br/> Move 1: <br/>" + topoPetObject.move1.Name; // + "<br/> Move 2: " + topoPetObject.move2.Name + "<br/> Move 3: " + topoPetObject.move3.Name + "<br/> Move 4: " + topoPetObject.move4.Name + "<br/> Move 5: " + topoPetObject.move5.Name;

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
		// Put away the recorderAQUNDINE box if that is currently visible
		if (document.getElementById("recorderAQUNDINE").style.display == "block") {
			// Put away the recorderAQUNDINE title
			document.getElementById("recorderAQUNDINETitle").style.display = "none";
			// Put away the recorderAQUNDINEText box
			document.getElementById("recorderAQUNDINEText").style.display = "none";
			// Put away the recorderAQUNDINEBack box
			document.getElementById("recorderAQUNDINEBack").style.display = "none";
			// Put away the recorderAQUNDINE box
			document.getElementById("recorderAQUNDINE").style.display = "none";
		}
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
		// Put away the recorderELEPHAUN box if that is currently visible
		if (document.getElementById("recorderELEPHAUN").style.display == "block") {
			// Put away the recorderELEPHAUN title
			document.getElementById("recorderELEPHAUNTitle").style.display = "none";
			// Put away the recorderELEPHAUNText box
			document.getElementById("recorderELEPHAUNText").style.display = "none";
			// Put away the recorderELEPHAUNBack box
			document.getElementById("recorderELEPHAUNBack").style.display = "none";
			// Put away the recorderELEPHAUN box
			document.getElementById("recorderELEPHAUN").style.display = "none";
		}
		// Put away the recorderFIREMANDER box if that is currently visible
		if (document.getElementById("recorderFIREMANDER").style.display == "block") {
			// Put away the recorderFIREMANDER title
			document.getElementById("recorderFIREMANDERTitle").style.display = "none";
			// Put away the recorderFIREMANDERText box
			document.getElementById("recorderFIREMANDERText").style.display = "none";
			// Put away the recorderFIREMANDERBack box
			document.getElementById("recorderFIREMANDERBack").style.display = "none";
			// Put away the recorderFIREMANDER box
			document.getElementById("recorderFIREMANDER").style.display = "none";
		}
		// Put away the recorderGNOMARL box if that is currently visible
		if (document.getElementById("recorderGNOMARL").style.display == "block") {
			// Put away the recorderGNOMARL title
			document.getElementById("recorderGNOMARLTitle").style.display = "none";
			// Put away the recorderGNOMARLText box
			document.getElementById("recorderGNOMARLText").style.display = "none";
			// Put away the recorderGNOMARLBack box
			document.getElementById("recorderGNOMARLBack").style.display = "none";
			// Put away the recorderGNOMARL box
			document.getElementById("recorderGNOMARL").style.display = "none";
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
		// Put away the recorderPARASYLPH box if that is currently visible
		if (document.getElementById("recorderPARASYLPH").style.display == "block") {
			// Put away the recorderPARASYLPH title
			document.getElementById("recorderPARASYLPHTitle").style.display = "none";
			// Put away the recorderPARASYLPHText box
			document.getElementById("recorderPARASYLPHText").style.display = "none";
			// Put away the recorderPARASYLPHBack box
			document.getElementById("recorderPARASYLPHBack").style.display = "none";
			// Put away the recorderPARASYLPH box
			document.getElementById("recorderPARASYLPH").style.display = "none";
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
		// Put away the recorderTULPA box if that is currently visible
		if (document.getElementById("recorderTULPA").style.display == "block") {
			// Put away the recorderTULPA title
			document.getElementById("recorderTULPATitle").style.display = "none";
			// Put away the recorderTULPAText box
			document.getElementById("recorderTULPAText").style.display = "none";
			// Put away the recorderTULPABack box
			document.getElementById("recorderTULPABack").style.display = "none";
			// Put away the recorderTULPA box
			document.getElementById("recorderTULPA").style.display = "none";
		}
		// Put away the recorderTUSCAT box if that is currently visible
		if (document.getElementById("recorderTUSCAT").style.display == "block") {
			// Put away the recorderTUSCAT title
			document.getElementById("recorderTUSCATTitle").style.display = "none";
			// Put away the recorderTUSCATText box
			document.getElementById("recorderTUSCATText").style.display = "none";
			// Put away the recorderTUSCATBack box
			document.getElementById("recorderTUSCATBack").style.display = "none";
			// Put away the recorderTUSCAT box
			document.getElementById("recorderTUSCAT").style.display = "none";
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
