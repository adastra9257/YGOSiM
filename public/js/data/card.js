<<<<<<< HEAD
var dbConversion = {
	/*
		- setcodes are archetype numbers hex codes
			- there's a lot so i wont paste em here but they're on http://www.ygopro.co/Forum/tabid/95/g/posts/t/120/Adding-cards-to-YGOPro--Tutorial----Scripting-video-Added#post381
		- if monster then atk, def, level, race, attribute should all be set to 0
		- id's are the id of the card located in the bottom left corner (images are img.jpg)
		- kind or type is just the type
		
		Spell speeds C&P from some that same thread... seemed important
		---------------------
		Spell Speed 1, which is the slowest and has to be activated by your decision. These card effects cannot be activated in response to any other effects. Speed Spell 1 are the cards that usually start a Chain link 1, which a chain is cards activating in response to each other.
		All of these types of cards fall under Spell Speed 1:
		Normal/Field/Continuous/Equip & Ritual Spell Cards
		Flip/Ignition and Trigger Effects
		Ignition-like & Trigger-like Effects

		Spell Speed 2, which is the second slowest and second fastest. You can chain to Spell Speed 2 cards with these but you cannot chain to Spell Speed 3 cards at the same time. These are cards that can start a Chain Link 1 or add up to an already started chain up to Chain Link 2,3,4 or higher if possible.
		All of these types of cards fall under Spell Speed 2:
		Quick-Play Spell Cards
		Normal & Continuous Trap Cards
		Quick Effects
		Quick-like Effect

		Spell Speed 3, these are the fastest effects out of the 3. You can't start a Chain Link 1 with these cards but you can always start a Chain link 2 or higher with these, if a Chain Link involving a Spell Speed 3 effect happens then the only way to keep responding to the effect is with Spell Speed 3 effects and nothing else. Spell Speed 3 effects can activate even before a monster is summoned to the field or a card effect is activated.
		All of these types of cards fall under Spell Speed 3:
		Counter Trap Cards.
	*/
	ot: ["there is no 0", "OCG", "TCG", "OCG & TCG", "Anime"],
	kinds: {
		2: "Normal/Spell",
		4: "Normal/Trap",
		17: "Normal Monster",
		33: "Effect Monster",
		65: "Fusion Monster",
		97: "Fusion/Effect Monster",
		129: "Ritual Monster",
		130: "Ritual/Spell",
		161: "Ritual/Effect Monster",
		545: "Spirit Monster",
		673: "Ritual/Spirit/Effect Monster",
		1057: "Union Monster",
		2081: "Gemini Monster",
		4113: "Tuner/Normal Monster",
		4129: "Tuner/Effect Monster",
		4161: "Fusion/Tuner Monster",
		5153: "Effect/Union/Tuner Monster",
		8193: "Synchro Monster",
		8225: "Synchro/Effect Monster",
		12321: "Synchro/Tuner/Effect Monster",
		16401: "Token",
		65538: "Quick-Play/Spell",
		131074: "Continuous/Spell",
		131076: "Continuous/Trap",
		262146: "Equip/Spell",
		524290: "Field/Spell",
		1048580: "Counter/Trap",
		2097185: "Flip/Effect Monster",
		2101281: "Flip/Effect/Tuner Monster",
		4194337: "Toon Monster",
		8388609: "XYZ Monster",
		8388641: "XYZ/Effect Monster",
		16777216: "Pendulum",
		16777233: "Pendulum/Normal Monster",
		16777249: "Pendulum/Effect Monster",
		16777313: "Effect/Fusion/Pendulum Monster",
		16777761: "Effect/Spirit/Pendulum Monster",
		16781329: "Normal/Tuner/Pendulum Monster",
		16781345: "Effect/Tuner/Pendulum Monster",
		16785441: "Effect/Synchro/Pendulum Monster",
		18874401: "Effect/Flip/Pendulum Monster",
		25165857: "Effect/XYZ/Pendulum Monster",
		33554465: "Effect/Special/Summon Monster",
		33558561: "Effect/Tuner/Special/Summon Monster",
		37748769: "Effect/Toon/Special/Summon Monster",
		50331681: "Effect/Pendulum/Special/Summon Monster",
		67108865: "Link Monster",
		67108897: "Link/Effect Monster"
	},
	races: {
		1: "Warrior",
		2: "Spellcaster",
		4: "Fairy",
		8: "Fiend",
		16: "Zombie",
		32: "Machine",
		64: "Aqua",
		128: "Pyro",
		256: "Rock",
		512: "Winged-beast",
		1024: "Plant",
		2048: "Insect",
		4096: "Thunder",
		8192: "Dragon",
		16384: "Beast",
		32768: "Beast-Warrior",
		65536: "Dinosaur",
		131072: "Fish",
		262144: "Sea Serpent",
		524288: "Reptile",
		1048576: "Psychic",
		2097152: "Divine-beast",
		4194304: "Creator God",
		8388608: "Wyrm",
		16777216: "Cyberse"
	},
	attributes: {
		1: "Earth",
		2: "Water",
		4: "Fire",
		8: "Wind",
		16: "Light",
		32: "Dark",
		64: "Divine"
	},
	archetypes: {
		1: "Ally of Justice 0x1",
		2: "Genex	0x2",
		4: "Amazoness	0x4",
		5: "Arcana	0x5",
		6: "Dark World	0x6",
		7: "Ancient Gear 0x7",
		8: "HERO 0x8",
		9: "Neos	0x9",
		10: "Evilswarm	0xA",
		11: "Infernity	0xB",
		12: "Alien	0xC",
		13: "Saber	0xD",
		14: "Watt	0xE",
		15: "Ojama	0xF",
		16: "Gusto	0x10",
		17: "Karakuri	0x11",
		18: "Frog	0x12",
		19: "Meklord	0x13",
		21: "B.E.S.	0x15",
		22: "roid	0x16",
		23: "Synchron	0x17",
		24: "Cloudian	0x18",
		25: "Gladiator Beast	0x19",
		26: "Dark Scorpion	0x1A",
		27: "Phantom Beast	0x1B",
		29: "Koa'ki	0x1D",
		30: "Chrysalis	0x1E",
		31: "Neo-Spacian	0x1F",
		32: "Shien	0x20",
		33: "Earthbound Immortal 0x21",
		34: "Jurrac	0x22",
		35: "Malefic	0x23",
		36: "Scrap	0x24",
		37: "Iron Chain	0x25",
		38: "Morphtronic	0x26",
		39: "T.G.	0x27",
		40: "Batteryman	0x28",
		41: "Dragunity	0x29",
		42: "Naturia	0x2A",
		43: "Ninja	0x2B",
		44: "Flamvell	0x2C",
		46: "Gravekeeper	0x2E",
		47: "Ice Barrier	0x2F",
		48: "Vylon	0x30",
		49: "Fortune Lady	0x31",
		50: "Volcanic	0x32",
		51: "Blackwing	0x33",
		52: "Crystal Beast	0x34",
		53: "Fabled	0x35",
		54: "Machina	0x36",
		55: "Mist Valley	0x37",
		56: "Lightsworn	0x38",
		57: "Laval	0x39",
		58: "Ghiski	0x3A",
		59: "Red-Eyes	0x3B",
		60: "Reptilliane	0x3C",
		61: "Six Samurai	0x3D",
		62: "Worm	0x3E",
		63: "Majestic	0x3F",
		64: "Forbidden	0x40",
		65: "LV	0x41",
		66: "Nordic	0x42",
		67: "Junk	0x43",
		68: "Agent	0x44",
		69: "Archfiend	0x45",
		70: "Fusion	0x46",
		71: "Gem-	0x47",
		72: "Number	0x48",
		73: "Skyblaster	0x49",
		74: "Timelord	0x4A",
		75: "Aesir	0x4B",
		76: "Trap Hole	0x4C",
		78: "Evol	0x4E",
		79: "Assault	0x4F",
		80: "Venom	0x50",
		81: "Gadget	0x51",
		82: "Guardian	0x52",
		83: "Constellar	0x53",
		84: "Gagaga	0x54",
		85: "Photon	0x55",
		86: "Inzektor	0x56",
		87: "Resonator	0x57",
		88: "Wind-up	0x58",
		89: "Gogogo	0x59",
		90: "Penguins	0x5A",
		91: "Inmato	0x5B",
		92: "Sphinx	0x5C",
		96: "Bamboo Sword	0x60",
		97: "Ninjitsu Art	0x61",
		98: "Toon	0x62",
		99: "Reactor	0x63",
		100: "Harpie	0x64",
		101: "Infestation	0x65",
		102: "Symphonic	0x66",
		103: "Iron	0x67",
		104: "Tin	0x68",
		105: "Hieratic	0x69",
		106: "Butterspy	0x6A",
		107: "Bounzer	0x6B",
		108: "Lightray	0x6C",
		109: "Majin	0x6D",
		110: "Prophecy	0x6E",
		111: "Heroic	0x6F",
		112: "Chronomaly	0x70",
		113: "Madolche	0x71",
		114: "Geargia	0x72",
		115: "Xyz	0x73",
		117: "Abyss	0x75",
		118: "Heraldic	0x76",
		119: "Atlantean	0x77",
		120: "Nimble	0x78",
		122: "Noble Knight	0x7A",
		123: "Galaxy	0x7B",
		132: "Chronomaly Technology	0x84 (Currently Unknown why it has its own set code)",
		144: "Meklord Pieces	0x90",
		145: "Dark Tuner/Synchro	0x91",
		146: "Fortune Fairy	0x92",
		147: "Puppet	0x93",
		148: "Fossil Warrior	0x94",
		149: "Cat	0x95",
		150: "Clear	0x96",
		151: "VWXYZ	0x97",
		256: "Synchron Synchros	0x100 (Synchros that require a Synchron Tuner)",
		257: "Synchro Fusions	0x101 (Fusions that require a Synchro Monster)",
		258: "Something Evil Hero Fusion Related	0x102 (Unknown what this is)",
		259: "Cyber	0x103",
		512: "Speed Spell	0x200",
		513: "Chaos Xyz	0x201",
		4098: "R-Genex	0x1002",
		4106: "Steelswarm	0x100A",
		4109: "X-Saber	0x100D",
		4118: "Vehichroid	0x1016",
		4139: "Armor Ninja	0x102B",
		4149: "The Fabled	0x1035",
		4167: "Gem-Knight	0x1047",
		4175: "/Assault	0x104F",
		4206: "Spellbook	0x106E",
		8194: "Genex Ally	0x2002",
		12296: "E HERO	0x3008",
		12301: "XX-Saber	0x300D",
		12354: "Nordic Ascendant	0x3042",
		12366: "Evoltile	0x304E",
		12397: "Dragoon	0x306D",
		12435: "Gimmick Puppet	0x3093",
		20488: "Vision Hero	0x5008",
		20546: "Nordic Relic	0x5042",
		24584: "Evil HERO	0x6008",
		24642: "Nordic Beasts	0x6042",
		24654: "Evolsuar	0x606E",
		24685: "Djinn of Rituals	0x606C",
		40968: "Masked HERO	0xA008",
		41026: "Nordic Alfar	0xA042",
		49160: "D HERO	0xC008",
		602120: "Neos AND E Hero	0x93008",
		1828513: "Six Samuari AND Shien	0x1BE6A1",
		2818065: "Karakuri AND Ninja	0x2B0011",
		3866659: "Malefic AND Red-Eyes	0x3B0023",
		4063268: "Scrap AND Worm	0x3E0024",
		4390935: "Junk AND Synchron	0x430017",
		4391168: "Junk AND Synchron Synchro	0x430100",
		4521995: "Infernity AND Archfiend	0x45000B",
		4522009: "Gladiator Beast AND Archfiend	0x450019",
		4522020: "Scrap AND Archfiend	0x450024",
		4522082: "Toon AND Archfiend	0x450062",
		4526159: "Archfiend AND /Assault	0x45104F",
		4591687: "Gem-knight AND Fusion	0x461047",
		4718592: "Heraldic AND Number	0x480000",
		4718704: "Chronomaly AND Number	0x480070",
		4722731: "Number AND Armor Ninja	0x48102B",
		5373963: "Infernity AND Guardian	0x52000B",
		5373981: "Koa'ki AND Guardian	0x52001D",
		5373994: "Naturia AND Guardian	0x52002A",
		5374044: "Guardian AND Sphinx	0x52005C",
		5374064: "Guardian AND Chronomaly	0x520070",
		7012437: "Photon AND Bounzer	0x6A0055",
		7143937: "Chaos Xyz AND Djinn	0x6C0201",
		7209083: "Galaxy AND Prohecy	0x75003A",
		7667770: "Ghishki AND Abyss	0x75003A",
		7667828: "Mermail AND Abyss	0x750074",
		8061000: "Number AND Galaxy	0x7B0048",
		8061013: "Galaxy AND Photon	0x7B0055",
		9449491: "Meklord AND Emperor	0x903013",
		9461779: "Meklord AND Army	0x906013",
		9764916: "Crystal Beast AND Cat	0x950034",
		16777283: "Junk AND Synchron Synchro	0x1000043 (if you look back at 4391168 you'll see that it is the same, proving that the codes can go in either order)",
		16842794: "Naturia AND Synchro Fusion	0x101002A",
		16932872: "Evil HERO AND 258?	0x1026008",
		33554445: "Speed Spell AND Saber	0x200000D",
		33554468: "Speed Spell AND Scrap	0x2000024",
		33554502: "Speed Spell AND Fusion	0x2000046",
		81940232: "Number AND Gimmick Puppet	0x4E24F08 (No Clue why this one defies the pattern)"
	}
};
var dbConvertCache = {};
function cardInfo(id) {
	id = Math.abs(id);
	var conversion = dbConversion;
	if (dbConvertCache[id]) return dbConvertCache[id]; else var ray = db[id];
	if (!ray) return;
	dbConvertCache[id] = {
		id: id,
		name: ray[0],
		description: ray[1],
		ot: conversion.ot[ray[2]] || (ray[2] + ""),
		alias: ray[3],
		archetype: conversion.archetypes[ray[4]] || (ray[4] + ""),
		kind: conversion.kinds[ray[5]] || (ray[5] + ""),
		atk: ray[6],
		def: ray[7],
		level: ray[8],
		race: conversion.races[ray[9]] || (ray[9] + ""),
		attribute: conversion.attributes[ray[10]] || (ray[10] + ""),
		//category: ray[11], //from what i've read all it is is something to make searching for cards easier :s
	};
	return dbConvertCache[id];
};
if (typeof exports === "undefined") exports = {};
exports.dbConvert = cardInfo;
=======
var dbConversion = {
	/*
		- setcodes are archetype numbers hex codes
			- there's a lot so i wont paste em here but they're on http://www.ygopro.co/Forum/tabid/95/g/posts/t/120/Adding-cards-to-YGOPro--Tutorial----Scripting-video-Added#post381
		- if monster then atk, def, level, race, attribute should all be set to 0
		- id's are the id of the card located in the bottom left corner (images are img.jpg)
		- kind or type is just the type
		
		Spell speeds C&P from some that same thread... seemed important
		---------------------
		Spell Speed 1, which is the slowest and has to be activated by your decision. These card effects cannot be activated in response to any other effects. Speed Spell 1 are the cards that usually start a Chain link 1, which a chain is cards activating in response to each other.
		All of these types of cards fall under Spell Speed 1:
		Normal/Field/Continuous/Equip & Ritual Spell Cards
		Flip/Ignition and Trigger Effects
		Ignition-like & Trigger-like Effects

		Spell Speed 2, which is the second slowest and second fastest. You can chain to Spell Speed 2 cards with these but you cannot chain to Spell Speed 3 cards at the same time. These are cards that can start a Chain Link 1 or add up to an already started chain up to Chain Link 2,3,4 or higher if possible.
		All of these types of cards fall under Spell Speed 2:
		Quick-Play Spell Cards
		Normal & Continuous Trap Cards
		Quick Effects
		Quick-like Effect

		Spell Speed 3, these are the fastest effects out of the 3. You can't start a Chain Link 1 with these cards but you can always start a Chain link 2 or higher with these, if a Chain Link involving a Spell Speed 3 effect happens then the only way to keep responding to the effect is with Spell Speed 3 effects and nothing else. Spell Speed 3 effects can activate even before a monster is summoned to the field or a card effect is activated.
		All of these types of cards fall under Spell Speed 3:
		Counter Trap Cards.
	*/
	ot: ["there is no 0", "OCG", "TCG", "OCG & TCG", "Anime"],
	kinds: {
		2: "Normal Spell Card",
		4: "Normal Trap Card",
		17: "Normal Monster",
		33: "Effect Monster",
		65: "Fusion Monster",
		97: "Fusion / Effect Monster",
		129: "Ritual Monster",
		130: "Ritual Spell",
		161: "Ritual / Effect Monster",
		545: "Spirit Monster",
		1057: "Union Monster",
		2081: "Gemini Monster",
		4113: "Tuner / Normal Monster",
		4129: "Tuner / Effect Monster",
		8193: "Synchro Monster",
		8225: "Synchro / Effect Monster",
		12321: "Synchro / Tuner / Effect Monster",
		16401: "Token",
		65538: "Quick-Play Spell Card",
		131074: "Continuous Spell Card",
		131076: "Continuous Trap Card",
		262146: "Equip Spell Card",
		524290: "Field Spell Card",
		1048580: "Counter Trap Card",
		2097185: "Flip Effect Monster",
		2101281: "Flip Effect Tuner Monster",
		4194337: "Toon Monster",
		8388609: "XYZ Monster",
		8388641: "XYZ / Effect Monster",
		16777216: "Pendulum",
		16777233: "Pendulum Normal Monster",
		16777249: "Pendulum Effect Monster"
	},
	races: {
		1: "Warrior",
		2: "Spellcaster",
		4: "Fairy",
		8: "Fiend",
		16: "Zombie",
		32: "Machine",
		64: "Aqua",
		128: "Pyro",
		256: "Rock",
		512: "Winged-beast",
		1024: "Plant",
		2048: "Insect",
		4096: "Thunder",
		8192: "Dragon",
		16384: "Beast",
		32768: "Beast-Warrior",
		65536: "Dinosaur",
		131072: "Fish",
		262144: "Sea Serpent",
		524288: "Reptile",
		1048576: "Psychic",
		2097152: "Divine-beast",
		4194304: "Creator God",
		8388608: "Wyrm"
	},
	attributes: {
		1: "Earth",
		2: "Water",
		4: "Fire",
		8: "Wind",
		16: "Light",
		32: "Dark",
		64: "Divine"
	},
	archetypes: {
		1: "Ally of Justice 0x1",
		2: "Genex	0x2",
		4: "Amazoness	0x4",
		5: "Arcana	0x5",
		6: "Dark World	0x6",
		7: "Ancient Gear 0x7",
		8: "HERO 0x8",
		9: "Neos	0x9",
		10: "Evilswarm	0xA",
		11: "Infernity	0xB",
		12: "Alien	0xC",
		13: "Saber	0xD",
		14: "Watt	0xE",
		15: "Ojama	0xF",
		16: "Gusto	0x10",
		17: "Karakuri	0x11",
		18: "Frog	0x12",
		19: "Meklord	0x13",
		21: "B.E.S.	0x15",
		22: "roid	0x16",
		23: "Synchron	0x17",
		24: "Cloudian	0x18",
		25: "Gladiator Beast	0x19",
		26: "Dark Scorpion	0x1A",
		27: "Phantom Beast	0x1B",
		29: "Koa'ki	0x1D",
		30: "Chrysalis	0x1E",
		31: "Neo-Spacian	0x1F",
		32: "Shien	0x20",
		33: "Earthbound Immortal 0x21",
		34: "Jurrac	0x22",
		35: "Malefic	0x23",
		36: "Scrap	0x24",
		37: "Iron Chain	0x25",
		38: "Morphtronic	0x26",
		39: "T.G.	0x27",
		40: "Batteryman	0x28",
		41: "Dragunity	0x29",
		42: "Naturia	0x2A",
		43: "Ninja	0x2B",
		44: "Flamvell	0x2C",
		46: "Gravekeeper	0x2E",
		47: "Ice Barrier	0x2F",
		48: "Vylon	0x30",
		49: "Fortune Lady	0x31",
		50: "Volcanic	0x32",
		51: "Blackwing	0x33",
		52: "Crystal Beast	0x34",
		53: "Fabled	0x35",
		54: "Machina	0x36",
		55: "Mist Valley	0x37",
		56: "Lightsworn	0x38",
		57: "Laval	0x39",
		58: "Ghiski	0x3A",
		59: "Red-Eyes	0x3B",
		60: "Reptilliane	0x3C",
		61: "Six Samurai	0x3D",
		62: "Worm	0x3E",
		63: "Majestic	0x3F",
		64: "Forbidden	0x40",
		65: "LV	0x41",
		66: "Nordic	0x42",
		67: "Junk	0x43",
		68: "Agent	0x44",
		69: "Archfiend	0x45",
		70: "Fusion	0x46",
		71: "Gem-	0x47",
		72: "Number	0x48",
		73: "Skyblaster	0x49",
		74: "Timelord	0x4A",
		75: "Aesir	0x4B",
		76: "Trap Hole	0x4C",
		78: "Evol	0x4E",
		79: "Assault	0x4F",
		80: "Venom	0x50",
		81: "Gadget	0x51",
		82: "Guardian	0x52",
		83: "Constellar	0x53",
		84: "Gagaga	0x54",
		85: "Photon	0x55",
		86: "Inzektor	0x56",
		87: "Resonator	0x57",
		88: "Wind-up	0x58",
		89: "Gogogo	0x59",
		90: "Penguins	0x5A",
		91: "Inmato	0x5B",
		92: "Sphinx	0x5C",
		96: "Bamboo Sword	0x60",
		97: "Ninjitsu Art	0x61",
		98: "Toon	0x62",
		99: "Reactor	0x63",
		100: "Harpie	0x64",
		101: "Infestation	0x65",
		102: "Symphonic	0x66",
		103: "Iron	0x67",
		104: "Tin	0x68",
		105: "Hieratic	0x69",
		106: "Butterspy	0x6A",
		107: "Bounzer	0x6B",
		108: "Lightray	0x6C",
		109: "Majin	0x6D",
		110: "Prophecy	0x6E",
		111: "Heroic	0x6F",
		112: "Chronomaly	0x70",
		113: "Madolche	0x71",
		114: "Geargia	0x72",
		115: "Xyz	0x73",
		117: "Abyss	0x75",
		118: "Heraldic	0x76",
		119: "Atlantean	0x77",
		120: "Nimble	0x78",
		122: "Noble Knight	0x7A",
		123: "Galaxy	0x7B",
		132: "Chronomaly Technology	0x84 (Currently Unknown why it has its own set code)",
		144: "Meklord Pieces	0x90",
		145: "Dark Tuner/Synchro	0x91",
		146: "Fortune Fairy	0x92",
		147: "Puppet	0x93",
		148: "Fossil Warrior	0x94",
		149: "Cat	0x95",
		150: "Clear	0x96",
		151: "VWXYZ	0x97",
		256: "Synchron Synchros	0x100 (Synchros that require a Synchron Tuner)",
		257: "Synchro Fusions	0x101 (Fusions that require a Synchro Monster)",
		258: "Something Evil Hero Fusion Related	0x102 (Unknown what this is)",
		259: "Cyber	0x103",
		512: "Speed Spell	0x200",
		513: "Chaos Xyz	0x201",
		4098: "R-Genex	0x1002",
		4106: "Steelswarm	0x100A",
		4109: "X-Saber	0x100D",
		4118: "Vehichroid	0x1016",
		4139: "Armor Ninja	0x102B",
		4149: "The Fabled	0x1035",
		4167: "Gem-Knight	0x1047",
		4175: "/Assault	0x104F",
		4206: "Spellbook	0x106E",
		8194: "Genex Ally	0x2002",
		12296: "E HERO	0x3008",
		12301: "XX-Saber	0x300D",
		12354: "Nordic Ascendant	0x3042",
		12366: "Evoltile	0x304E",
		12397: "Dragoon	0x306D",
		12435: "Gimmick Puppet	0x3093",
		20488: "Vision Hero	0x5008",
		20546: "Nordic Relic	0x5042",
		24584: "Evil HERO	0x6008",
		24642: "Nordic Beasts	0x6042",
		24654: "Evolsuar	0x606E",
		24685: "Djinn of Rituals	0x606C",
		40968: "Masked HERO	0xA008",
		41026: "Nordic Alfar	0xA042",
		49160: "D HERO	0xC008",
		602120: "Neos AND E Hero	0x93008",
		1828513: "Six Samuari AND Shien	0x1BE6A1",
		2818065: "Karakuri AND Ninja	0x2B0011",
		3866659: "Malefic AND Red-Eyes	0x3B0023",
		4063268: "Scrap AND Worm	0x3E0024",
		4390935: "Junk AND Synchron	0x430017",
		4391168: "Junk AND Synchron Synchro	0x430100",
		4521995: "Infernity AND Archfiend	0x45000B",
		4522009: "Gladiator Beast AND Archfiend	0x450019",
		4522020: "Scrap AND Archfiend	0x450024",
		4522082: "Toon AND Archfiend	0x450062",
		4526159: "Archfiend AND /Assault	0x45104F",
		4591687: "Gem-knight AND Fusion	0x461047",
		4718592: "Heraldic AND Number	0x480000",
		4718704: "Chronomaly AND Number	0x480070",
		4722731: "Number AND Armor Ninja	0x48102B",
		5373963: "Infernity AND Guardian	0x52000B",
		5373981: "Koa'ki AND Guardian	0x52001D",
		5373994: "Naturia AND Guardian	0x52002A",
		5374044: "Guardian AND Sphinx	0x52005C",
		5374064: "Guardian AND Chronomaly	0x520070",
		7012437: "Photon AND Bounzer	0x6A0055",
		7143937: "Chaos Xyz AND Djinn	0x6C0201",
		7209083: "Galaxy AND Prohecy	0x75003A",
		7667770: "Ghishki AND Abyss	0x75003A",
		7667828: "Mermail AND Abyss	0x750074",
		8061000: "Number AND Galaxy	0x7B0048",
		8061013: "Galaxy AND Photon	0x7B0055",
		9449491: "Meklord AND Emperor	0x903013",
		9461779: "Meklord AND Army	0x906013",
		9764916: "Crystal Beast AND Cat	0x950034",
		16777283: "Junk AND Synchron Synchro	0x1000043 (if you look back at 4391168 you'll see that it is the same, proving that the codes can go in either order)",
		16842794: "Naturia AND Synchro Fusion	0x101002A",
		16932872: "Evil HERO AND 258?	0x1026008",
		33554445: "Speed Spell AND Saber	0x200000D",
		33554468: "Speed Spell AND Scrap	0x2000024",
		33554502: "Speed Spell AND Fusion	0x2000046",
		81940232: "Number AND Gimmick Puppet	0x4E24F08 (No Clue why this one defies the pattern)"
	}
};
var dbConvertCache = {};
function cardInfo(id) {
	id = Math.abs(id);
	var conversion = dbConversion;
	if (dbConvertCache[id]) return dbConvertCache[id]; else var ray = db[id];
	if (!ray) return;
	dbConvertCache[id] = {
		id: id,
		name: ray[0],
		description: ray[1],
		ot: conversion.ot[ray[2]] || (ray[2] + ""),
		alias: ray[3],
		archetype: conversion.archetypes[ray[4]] || (ray[4] + ""),
		kind: conversion.kinds[ray[5]] || (ray[5] + ""),
		atk: ray[6],
		def: ray[7],
		level: ray[8],
		race: conversion.races[ray[9]] || (ray[9] + ""),
		attribute: conversion.attributes[ray[10]] || (ray[10] + ""),
		//category: ray[11], //from what i've read all it is is something to make searching for cards easier :s
	};
	return dbConvertCache[id];
};
>>>>>>> 30f3aef14c50989fa4adbfef9706ba8e013e6b08
