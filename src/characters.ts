interface Character {
    id: number;
    name: string;
    franchise: string;
    image?: string;
    itsEcho: boolean;
    echoof?: number;
    firstAparition: string;
    lastAparition: string;
    appearances: smashGames[];
    specialMoves?: specialMoves;
}

interface specialMoves {
    neutral: string;
    side: string;
    up: string;
    down: string;
    final: string;
}

type smashGames =
    | "Super Smash Bros"
    | "Super Smash Bros Melee"
    | "Super Smash Bros Brawl"
    | "Super Smash Bros for Nintendo 3DS and Wii U"
    | "Super Smash Bros Ultimate";



const lastAparition: string = "Super Smash Bros Ultimate";

export const infoCharacters: Character[] = [
    {
        id: 1,
        name: "Mario",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mario/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Fireball",
            side: "Cape",
            up: "Super Jump Punch",
            down: "F.L.U.D.D.",
            final: "Mario Finale"
        }
    },
    {
        id: 2,
        name: "Donkey Kong",
        franchise: "Donkey Kong",
        image: "https://www.smashbros.com/assets_v2/img/fighter/donkey_kong/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Giant Punch",
            side: "Headbutt",
            up: "Spinning Kong",
            down: "Donkey Kong Punch",
            final: "Konga Beat"
        }
    },
    {
        id: 3,
        name: "Link",
        franchise: "The Legend of Zelda",
        image: "https://www.smashbros.com/assets_v2/img/fighter/link/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Boomerang",
            side: "Bomb",
            up: "Spin Attack",
            down: "Downward Thrust",
            final: "Triforce Slash"
        }
    },
    {
        id: 4,
        name: "Samus",
        franchise: "Metroid",
        image: "https://www.smashbros.com/assets_v2/img/fighter/samus/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Charge Beam",
            side: "Missile",
            up: "Screw Attack",
            down: "Bomb",
            final: "Zero Laser"
        }
    },
    {
        id: 4.1,
        name: "Dark Samus",
        franchise: "Metroid",
        image: "https://www.smashbros.com/assets_v2/img/fighter/dark_samus/main.png",
        itsEcho: true,
        echoof: 4,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Charge Beam",
            side: "Missile",
            up: "Screw Attack",
            down: "Bomb",
            final: "Zero Laser"
        }
    },
    {
        id: 5,
        name: "Yoshi",
        franchise: "Yoshi",
        image: "https://www.smashbros.com/assets_v2/img/fighter/yoshi/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Egg Lay",
            side: "Egg Roll",
            up: "Egg Throw",
            down: "Yoshi Bomb",
            final: "Yoshi's Final Smash"
        }
    },
    {
        id: 6,
        name: "Kirby",
        franchise: "Kirby",
        image: "https://www.smashbros.com/assets_v2/img/fighter/kirby/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Inhale",
            side: "Hammer",
            up: "Final Cutter",
            down: "Stone",
            final: "Star Rod"
        }
    },
    {
        id: 7,
        name: "Fox",
        franchise: "Star Fox",
        image: "https://www.smashbros.com/assets_v2/img/fighter/fox/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Blaster",
            side: "Fox Illusion",
            up: "Fire Fox",
            down: "Reflector",
            final: "Landmaster"
        }
    },
    {
        id: 8,
        name: "Pikachu",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pikachu/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Thunder Jolt",
            side: "Quick Attack",
            up: "Skull Bash",
            down: "Thunder",
            final: "Volt Tackle"
        }
    },
    {
        id: 9,
        name: "Luigi",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/luigi/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Fireball",
            side: "Green Missile",
            up: "Super Jump Punch",
            down: "Luigi Cyclone",
            final: "Poltergust 5000"
        }
    },
    {
        id: 10,
        name: "Ness",
        franchise: "EarthBound",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ness/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "PK Fire",
            side: "PK Thunder",
            up: "PK Magnet",
            down: "PSI Magnet",
            final: "PK Starstorm"
        }
    },
    {
        id: 11,
        name: "Captain Falcon",
        franchise: "F-Zero",
        image: "https://www.smashbros.com/assets_v2/img/fighter/captain_falcon/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Falcon Punch",
            side: "Falcon Kick",
            up: "Falcon Dive",
            down: "Falcon Knee",
            final: "Blue Falcon"
        }
    },
    {
        id: 12,
        name: "Jigglypuff",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/jigglypuff/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Sing",
            side: "Rollout",
            up: "Pound",
            down: "Rest",
            final: "Jigglypuff's Final Smash"
        }
    },
    {
        id: 13,
        name: "Peach",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/peach/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Toad",
            side: "Peach Bomber",
            up: "Peach Parasol",
            down: "Turnip",
            final: "Peach Blossom"
        }
    },
    {
        id: 13.1,
        name: "Daisy",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/daisy/main.png",
        itsEcho: true,
        echoof: 13,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Toad",
            side: "Daisy Bomber",
            up: "Daisy Parasol",
            down: "Turnip",
            final: "Daisy Blossom"
        }
    },
    {
        id: 14,
        name: "Bowser",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/bowser/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Fire Breath",
            side: "Bowser Bomb",
            up: "Flying Slam",
            down: "Bowser's Final Smash",
            final: "Bowser's Final Smash"
        }
    },
    {
        id: 15,
        name: "Ice Climbers",
        franchise: "Ice Climber",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ice_climbers/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros",
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Ice Shot",
            side: "Ice Block",
            up: "Squall Hammer",
            down: "Blizzard",
            final: "Iceberg"
        }
    },
    {
        id: 16,
        name: "Sheik",
        franchise: "The Legend of Zelda",
        image: "https://www.smashbros.com/assets_v2/img/fighter/sheik/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Needle Storm",
            side: "Burst Grenade",
            up: "Vanish",
            down: "Bouncing Fish",
            final: "Sheik's Final Smash"
        }
    },
    {
        id: 17,
        name: "Zelda",
        franchise: "The Legend of Zelda",
        image: "https://www.smashbros.com/assets_v2/img/fighter/zelda/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Nayru's Love",
            side: "Din's Fire",
            up: "Farore's Wind",
            down: "Zelda's Final Smash",
            final: "Zelda's Final Smash"
        }
    },
    {
        id: 18,
        name: "Dr. Mario",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/dr_mario/main.png",
        itsEcho: true,
        echoof: 1,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Megavitamins",
            side: "Super Sheet",
            up: "Dr. Tornado",
            down: "Dr. Mario's Final Smash",
            final: "Dr. Mario's Final Smash"
        }
    },
    {
        id: 19,
        name: "Pichu",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pichu/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Thunder Jolt",
            side: "Quick Attack",
            up: "Skull Bash",
            down: "Pichu's Final Smash",
            final: "Pichu's Final Smash"
        }
    },
    {
        id: 20,
        name: "Falco",
        franchise: "Star Fox",
        image: "https://www.smashbros.com/assets_v2/img/fighter/falco/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Blaster",
            side: "Falco Phantasm",
            up: "Fire Bird",
            down: "Reflector",
            final: "Landmaster"
        }
    },
    {
        id: 21,
        name: "Marth",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/marth/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Dancing Blade",
            side: "Shield Breaker",
            up: "Dolphin Slash",
            down: "Counter",
            final: "Critical Hit"
        }
    },
    {
        id: 21.1,
        name: "Lucina",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/lucina/main.png",
        itsEcho: true,
        echoof: 21,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Dancing Blade",
            side: "Shield Breaker",
            up: "Dolphin Slash",
            down: "Counter",
            final: "Critical Hit"
        }
    },
    {
        id: 22,
        name: "Young Link",
        franchise: "The Legend of Zelda",
        image: "https://www.smashbros.com/assets_v2/img/fighter/young_link/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Bomb",
            side: "Fire Arrow",
            up: "Spin Attack",
            down: "Hookshot",
            final: "Triforce Slash"
        }
    },
    {
        id: 23,
        name: "Ganondorf",
        franchise: "The Legend of Zelda",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ganondorf/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Warlock Punch",
            side: "Dark Dive",
            up: "Flame Choke",
            down: "Ganondorf's Final Smash",
            final: "Ganondorf's Final Smash"
        }
    },
    {
        id: 24,
        name: "Mewtwo",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mewtwo/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Shadow Ball",
            side: "Confusion",
            up: "Teleport",
            down: "Disable",
            final: "Mewtwo's Final Smash"
        }
    },
    {
        id: 25,
        name: "Roy",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/roy/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Flame Blade",
            side: "Dancing Blade",
            up: "Counter",
            down: "Roy's Final Smash",
            final: "Roy's Final Smash"
        }
    },
    {
        id: 25.1,
        name: "Chrom",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/chrom/main.png",
        itsEcho: true,
        echoof: 21,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Dancing Blade",
            side: "Shield Breaker",
            up: "Dolphin Slash",
            down: "Counter",
            final: "Critical Hit"
        }
    },
    {
        id: 26,
        name: "Mr. Game & Watch",
        franchise: "Game & Watch",
        image: "https://www.smashbros.com/assets_v2/img/fighter/game_watch/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Melee",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Melee",
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Chef",
            side: "Judgment",
            up: "Fire",
            down: "Oil Panic",
            final: "Mr. Game & Watch's Final Smash"
        }
    },
    {
        id: 27,
        name: "Meta Knight",
        franchise: "Kirby",
        image: "https://www.smashbros.com/assets_v2/img/fighter/meta_knight/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Mach Tornado",
            side: "Dimensional Cape",
            up: "Galaxia Darkness",
            down: "Meta Knight's Final Smash",
            final: "Meta Knight's Final Smash"
        }
    },
    {
        id: 27,
        name: "Meta Knight",
        franchise: "Kirby",
        image: "https://www.smashbros.com/assets_v2/img/fighter/meta_knight/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Mach Tornado",
            side: "Dimensional Cape",
            up: "Galaxia Darkness",
            down: "Meta Knight's Final Smash",
            final: "Meta Knight's Final Smash"
        }
    },
    {
        id: 28,
        name: "Pit",
        franchise: "Kid Icarus",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pit/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Palutena's Arrow",
            side: "Upperdash Arm",
            up: "Angel Ring",
            down: "Pit's Final Smash",
            final: "Pit's Final Smash"
        }
    },
    {
        id: 28.1,
        name: "Dark Pit",
        franchise: "Kid Icarus",
        image: "https://www.smashbros.com/assets_v2/img/fighter/dark_pit/main.png",
        itsEcho: true,
        echoof: 28,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Palutena's Arrow",
            side: "Upperdash Arm",
            up: "Angel Ring",
            down: "Dark Pit's Final Smash",
            final: "Dark Pit's Final Smash"
        }
    },
    {
        id: 29,
        name: "Zero Suit Samus",
        franchise: "Metroid",
        image: "https://www.smashbros.com/assets_v2/img/fighter/zero_suit_samus/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Paralyzer",
            side: "Flip Jump",
            up: "Zero Suit Samus's Final Smash",
            down: "Power Beam",
            final: "Zero Suit Samus's Final Smash"
        }
    },
    {
        id: 30,
        name: "Wario",
        franchise: "Wario Ware",
        image: "https://www.smashbros.com/assets_v2/img/fighter/wario/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Wario Waft",
            side: "Wario Bike",
            up: "Wario's Final Smash",
            down: "Wario's Final Smash",
            final: "Wario's Final Smash"
        }
    },
    {
        id: 31,
        name: "Snake",
        franchise: "Metal Gear Solid",
        image: "https://www.smashbros.com/assets_v2/img/fighter/snake/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Hand Grenade",
            side: "C4",
            up: "Rocket Launcher",
            down: "Snake's Final Smash",
            final: "Snake's Final Smash"
        }
    },
    {
        id: 32,
        name: "Ike",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ike/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Eruption",
            side: "Aether",
            up: "Ike's Final Smash",
            down: "Ike's Final Smash",
            final: "Ike's Final Smash"
        }
    },
    {
        id: 33,
        name: "Squirtle",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pokemon_trainer/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Water Gun",
            side: "Aqua Jet",
            up: "Hydro Pump",
            down: "Squirtle's Final Smash",
            final: "Squirtle's Final Smash"
        }
    },
    {
        id: 34,
        name: "Ivysaur",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pokemon_trainer/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Vine Whip",
            side: "Solar Beam",
            up: "Razor Leaf",
            down: "Ivysaur's Final Smash",
            final: "Ivysaur's Final Smash"
        }
    },
    {
        id: 35,
        name: "Charizard",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pokemon_trainer/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Flamethrower",
            side: "Dragon Claw",
            up: "Charizard's Final Smash",
            down: "Charizard's Final Smash",
            final: "Charizard's Final Smash"
        }
    },
    {
        id: 36,
        name: "Didi Kong",
        franchise: "Donkey Kong",
        image: "https://www.smashbros.com/assets_v2/img/fighter/diddy_kong/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Peanut Popgun",
            side: "Banana Peel",
            up: "Rocketbarrel Boost",
            down: "Diddy Kong's Final Smash",
            final: "Diddy Kong's Final Smash"
        }
    },
    {
        id: 37,
        name: "Lucas",
        franchise: "EarthBound",
        image: "https://www.smashbros.com/assets_v2/img/fighter/lucas/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "PK Freeze",
            side: "PK Fire",
            up: "PK Thunder",
            down: "PK Magnet",
            final: "PK Starstorm"
        }
    },
    {
        id: 38,
        name: "Sonic",
        franchise: "Sonic the Hedgehog",
        image: "https://www.smashbros.com/assets_v2/img/fighter/sonic/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Homing Attack",
            side: "Spin Dash",
            up: "Spring Jump",
            down: "Sonic's Final Smash",
            final: "Sonic's Final Smash"
        }
    },
    {
        id: 39,
        name: "King Dedede",
        franchise: "Kirby",
        image: "https://www.smashbros.com/assets_v2/img/fighter/king_dedede/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Gordo Throw",
            side: "Jet Hammer",
            up: "Super Dedede Jump",
            down: "King Dedede's Final Smash",
            final: "King Dedede's Final Smash"
        }
    },
    {
        id: 40,
        name: "Olimar",
        franchise: "Pikmin",
        image: "https://www.smashbros.com/assets_v2/img/fighter/olimar/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Pikmin Pluck",
            side: "Pikmin Throw",
            up: "Winged Pikmin",
            down: "Olimar's Final Smash",
            final: "Olimar's Final Smash"
        }
    },
    {
        id: 41,
        name: "Lucario",
        franchise: "Pokémon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/lucario/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Aura Sphere",
            side: "Force Palm",
            up: "Extreme Speed",
            down: "Lucario's Final Smash",
            final: "Lucario's Final Smash"
        }
    },
    {
        id: 42,
        name: "Rob",
        franchise: '',
        image: "https://www.smashbros.com/assets_v2/img/fighter/rob/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "R.O.B.'s Final Smash",
            side: "R.O.B.'s Final Smash",
            up: "R.O.B.'s Final Smash",
            down: "R.O.B.'s Final Smash",
            final: "R.O.B.'s Final Smash"
        }
    },
    {
        id: 43,
        name: "Toon Link",
        franchise: "The Legend of Zelda",
        image: "https://www.smashbros.com/assets_v2/img/fighter/toon_link/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Bomb",
            side: "Boomerang",
            up: "Spin Attack",
            down: "Hookshot",
            final: "Triforce Slash"
        }
    },
    {
        id: 44,
        name: "Wolf",
        franchise: "Star Fox",
        image: "https://www.smashbros.com/assets_v2/img/fighter/wolf/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Brawl",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Brawl",
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Blaster",
            side: "Wolf Flash",
            up: "Fire Wolf",
            down: "Reflector",
            final: "Landmaster"
        }
    },
    {
        id: 45,
        name: "Villager",
        franchise: "Animal Crossing",
        image: "https://www.smashbros.com/assets_v2/img/fighter/villager/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Lloid Rocket",
            side: "Pocket",
            up: "Balloon Trip",
            down: "Villager's Final Smash",
            final: "Villager's Final Smash"
        }
    },
    {
        id: 46,
        name: "Mega man",
        franchise: "Mega Man",
        image: "https://www.smashbros.com/assets_v2/img/fighter/megaman/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Metal Blade",
            side: "Leaf Shield",
            up: "Rush Coil",
            down: "",
            final: "Megas Final Smash"
        }
    },
    {
        id: 47,
        name: "Wii Fit Trainer",
        franchise: "Wii Fit",
        image: "https://www.smashbros.com/assets_v2/img/fighter/wii_fit_trainer/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Sun Salutation",
            side: "Header",
            up: "Wii Fit Trainer's Final Smash",
            down: "Wii Fit Trainer's Final Smash",
            final: "Wii Fit Trainer's Final Smash"
        }
    },
    {
        id: 48,
        name: "Rosalina & Luma",
        franchise: "Super Mario Galaxy",
        image: "https://www.smashbros.com/assets_v2/img/fighter/rosalina/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Luma Shot",
            side: "Star Bits",
            up: "Launch Star",
            down: "Rosalina & Luma's Final Smash",
            final: "Rosalina & Luma's Final Smash"
        }
    },
    {
        id: 49,
        name: "Little Mac",
        franchise: "Punch-Out!!",
        image: "https://www.smashbros.com/assets_v2/img/fighter/little_mac/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Jolt Haymaker",
            side: "KO Uppercut",
            up: "Little Mac's Final Smash",
            down: "Little Mac's Final Smash",
            final: "Little Mac's Final Smash"
        }
    },
    {
        id: 50,
        name: "Greninja",
        franchise: "Pokemon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/greninja/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Water Shuriken",
            side: "Shadow Sneak",
            up: "Waterfall",
            down: "Greninja's Final Smash",
            final: "Greninja's Final Smash"
        }
    },
    {
        id: 51,
        name: "Mii Fighters",
        franchise: "Mii",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mii_fighter/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Mii Fighters' Final Smash",
            side: "Mii Fighters' Final Smash",
            up: "Mii Fighters' Final Smash",
            down: "Mii Fighters' Final Smash",
            final: "Mii Fighters' Final Smash"
        }
    },
    {
        id: 52,
        name: "Mii Swordfighter",
        franchise: "Mii",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mii_fighter/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Mii Fighters' Final Smash",
            side: "Mii Fighters' Final Smash",
            up: "Mii Fighters' Final Smash",
            down: "Mii Fighters' Final Smash",
            final: "Mii Fighters' Final Smash"
        }

    },
    {
        id: 53,
        name: "Mii Gunner",
        franchise: "Mii",
        image: "https://www.smashbros.com/assets_v2/img/fighter/mii_fighter/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Mii Fighters' Final Smash",
            side: "Mii Fighters' Final Smash",
            up: "Mii Fighters' Final Smash",
            down: "Mii Fighters' Final Smash",
            final: "Mii Fighters' Final Smash"
        }
    },
    {
        id: 54,
        name: "Palutena",
        franchise: "Kid Icarus",
        image: "https://www.smashbros.com/assets_v2/img/fighter/palutena/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Autoreticle",
            side: "Holy Water",
            up: "Warp",
            down: "Palutena's Final Smash",
            final: "Palutena's Final Smash"
        }
    },
    {
        id: 55,
        name: "Pacman",
        franchise: "Pacman",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pacman/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Pac-Dots",
            side: "Fire Hydrant",
            up: "",
            down: "",
            final: "Pacman's Final Smash"
        }
    },
    {
        id: 56,
        name: "Robin",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/robin/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Arc Fire",
            side: "Arcthunder",
            up: "Elwind",
            down: "Robin's Final Smash",
            final: "Robin's Final Smash"
        }
    },
    {
        id: 57,
        name: "Shulk",
        franchise: "Xenoblade Chronicles",
        image: "https://www.smashbros.com/assets_v2/img/fighter/shulk/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Monado Arts",
            side: "Monado Buster",
            up: "Monado Jump",
            down: "Monado Shield",
            final: "Shulk's Final Smash"
        }
    },
    {
        id: 58,
        name: "Bowser Jr.",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/bowser_jr/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Paintbrush",
            side: "Mecha Koopa",
            up: "Chomp",
            down: "Bowser Jr.'s Final Smash",
            final: "Bowser Jr.'s Final Smash"
        }
    },
    {
        id: 59,
        name: "Duck Hunt",
        franchise: "Duck Hunt",
        image: "https://www.smashbros.com/assets_v2/img/fighter/duck_hunt/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Duck Hunt's Final Smash",
            side: "Duck Hunt's Final Smash",
            up: "Duck Hunt's Final Smash",
            down: "Duck Hunt's Final Smash",
            final: "Duck Hunt's Final Smash"
        }
    },
    {
        id: 60,
        name: "Ryu",
        franchise: "Street Fighter",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ryu/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Hadouken",
            side: "Shoryuken",
            up: "Tatsumaki Senpukyaku",
            down: "Ryu's Final Smash",
            final: "Ryu's Final Smash"
        }
    },
    {
        id: 60.1,
        name: "Ken",
        franchise: "Street Fighter",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ken/main.png",
        itsEcho: true,
        echoof: 60,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Hadouken",
            side: "Shoryuken",
            up: "Tatsumaki Senpukyaku",
            down: "Ken's Final Smash",
            final: "Ken's Final Smash"
        }
    },
    {
        id: 61,
        name: "Cloud Strife",
        franchise: "Final Fantasy VII",
        image: "https://www.smashbros.com/assets_v2/img/fighter/cloud/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Blade Beam",
            side: "Cross Slash",
            up: "Climhazzard",
            down: "Limit Break",
            final: "Omnislash"
        }
    },
    {
        id: 62,
        name: "Corrin",
        franchise: "Fire Emblem",
        image: "https://www.smashbros.com/assets_v2/img/fighter/corrin/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Dragon Fang Shot",
            side: "Dragon Lunge",
            up: "Dragon Ascent",
            down: "Corrin's Final Smash",
            final: "Corrin's Final Smash"
        }
    },
    {
        id: 63,
        name: "Bayonetta",
        franchise: "Bayonetta",
        image: "https://www.smashbros.com/assets_v2/img/fighter/bayonetta/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros for Nintendo 3DS and Wii U",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros for Nintendo 3DS and Wii U",
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Bullet Arts",
            side: "Wicked Weave",
            up: "Afterburner Kick",
            down: "Bayonetta's Final Smash",
            final: "Bayonetta's Final Smash"
        }
    },
    {
        id: 64,
        name: "Inkling",
        franchise: "Splatoon",
        image: "https://www.smashbros.com/assets_v2/img/fighter/inkling/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Splat Bomb",
            side: "Ink Shot",
            up: "Inkling's Final Smash",
            down: "Inkling's Final Smash",
            final: "Inkling's Final Smash"
        }
    },
    {
        id: 65,
        name: "Ridley",
        franchise: "Metroid",
        image: "https://www.smashbros.com/assets_v2/img/fighter/ridley/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Plasma Breath",
            side: "Riptide",
            up: "Skewer",
            down: "Ridley's Final Smash",
            final: "Ridley's Final Smash"
        }
    },
    {
        id: 66,
        name: "Simon Belmont",
        franchise: 'Castlevania',
        image: 'https://www.smashbros.com/assets_v2/img/fighter/simon/main.png',
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Holy Water",
            side: "Cross",
            up: "Holy Cross",
            down: "Simon Belmont's Final Smash",
            final: "Simon Belmont's Final Smash"
        }
    },
    {
        id: 66.1,
        name: "Richter Belmont",
        franchise: 'Castlevania',
        image: 'https://www.smashbros.com/assets_v2/img/fighter/richter/main.png',
        itsEcho: true,
        echoof: 66,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Holy Water",
            side: "Cross",
            up: "Holy Cross",
            down: "Richter Belmont's Final Smash",
            final: "Richter Belmont's Final Smash"
        }
    },
    {
        id: 67,
        name: "King K. Rool",
        franchise: "Donkey Kong",
        image: "https://www.smashbros.com/assets_v2/img/fighter/king_k_rool/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Crown",
            side: "K. Rool's Final Smash",
            up: "K. Rool's Final Smash",
            down: "K. Rool's Final Smash",
            final: "K. Rool's Final Smash"
        }
    },
    {
        id: 68,
        name: "Isabelle",
        franchise: "Animal Crossing",
        image: "https://www.smashbros.com/assets_v2/img/fighter/isabelle/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Lloid Rocket",
            side: "Pocket",
            up: "Balloon Trip",
            down: "Isabelle's Final Smash",
            final: "Isabelle's Final Smash"
        }
    },
    {
        id: 69,
        name: "Incineroar",
        franchise: 'Pokémon',
        image: 'https://www.smashbros.com/assets_v2/img/fighter/incineroar/main.png',
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Darkest Lariat",
            side: "Alolan Whip",
            up: "Incineroar's Final Smash",
            down: "Incineroar's Final Smash",
            final: "Incineroar's Final Smash"

        }
    },
    {
        id: 70,
        name: "Piranhaplant",
        franchise: "Super Mario Bros",
        image: "https://www.smashbros.com/assets_v2/img/fighter/piranha_plant/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Ptooie",
            side: "Poison Breath",
            up: "Piranha Plant's Final Smash",
            down: "Piranha Plant's Final Smash",
            final: "Piranha Plant's Final Smash"
        }
    },
    {
        id: 71,
        name: "Joker",
        franchise: "Persona 5",
        image: "https://www.smashbros.com/assets_v2/img/fighter/joker/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Gun",
            side: "Grappling Hook",
            up: "Arsene's Final Smash",
            down: "Rebel's Guard",
            final: "Arsene's Final Smash"
        }
    },
    {
        id: 72,
        name: "Hero",
        franchise: "Dragon Quest",
        image: "https://www.smashbros.com/assets_v2/img/fighter/hero/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Fire Slash",
            side: "Kaboom",
            up: "Zoom",
            down: "Hero's Final Smash",
            final: "Hero's Final Smash"
        }
    },
    {
        id: 73,
        name: "Banjo-Kazooie",
        franchise: "Banjo-Kazooie",
        image: "https://www.smashbros.com/assets_v2/img/fighter/banjo_kazooie/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Egg Firing",
            side: "Wonderwing",
            up: "Beak Buster",
            down: "Banjo-Kazooie's Final Smash",
            final: "Banjo-Kazooie's Final Smash"
        }
    },
    {
        id: 74,
        name: "Terry Bogard",
        franchise: "Fatal Fury",
        image: "https://www.smashbros.com/assets_v2/img/fighter/terry/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Power Wave",
            side: "Burn Knuckle",
            up: "Buster Wolf",
            down: "Terry's Final Smash",
            final: "Terry's Final Smash"
        }
    },
    {
        id: 75,
        name: "Byleth",
        franchise: "Fire Emblem Three Houses",
        image: "https://www.smashbros.com/assets_v2/img/fighter/byleth/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Hero's Relic",
            side: "Areadbhar",
            up: "Sword of the Creator",
            down: "Byleth's Final Smash",
            final: "Byleth's Final Smash"
        }
    },
    {
        id: 76,
        name: "Min Min",
        franchise: "ARMS",
        image: "https://www.smashbros.com/assets_v2/img/fighter/min_min/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Ram Ram",
            side: "Megawatt",
            up: "Dragon Arm",
            down: "Min Min's Final Smash",
            final: "Min Min's Final Smash"
        }
    },
    {
        id: 77,
        name: "Steve",
        franchise: "Minecraft",
        image: "https://www.smashbros.com/assets_v2/img/fighter/steve/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Minecart",
            side: "Block Placement",
            up: "Up Smash",
            down: "Down Smash",
            final: "Steve's Final Smash"
        }
    },
    {
        id: 78,
        name: "Sephiroth",
        franchise: "Final Fantasy VII",
        image: "https://www.smashbros.com/assets_v2/img/fighter/sephiroth/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Shadow Flare",
            side: "Octaslash",
            up: "Supernova",
            down: "Sephiroth's Final Smash",
            final: "Sephiroth's Final Smash"
        }
    },
    {
        id: 79,
        name: "Pyra",
        franchise: "Xenoblade Chronicles 2",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pyra/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Flame Nova",
            side: "Blazing End",
            up: "Prominence Revolt",
            down: "Burning Sword",
            final: "Pyra's Final Smash"
        }
    }, 
    {
        id: 80,
        name: "Mythra",
        franchise: "Xenoblade Chronicles 2",
        image: "https://www.smashbros.com/assets_v2/img/fighter/pyra/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Photon Edge",
            side: "Ray of Punishment",
            up: "Lightning Buster",
            down: "Mythra's Final Smash",
            final: "Mythra's Final Smash"
        }
    },
    {
        id: 81,
        name: "Kazuya",
        franchise: "Tekken",
        image: "https://www.smashbros.com/assets_v2/img/fighter/kazuya/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Devil's Hand",
            side: "Demon God Fist",
            up: "Demon Uppercut",
            down: "Hell Sweep",
            final: "Kazuya's Final Smash"
        }
    },
    {
        id: 82,
        name: "Sora",
        franchise: "Kingdom Hearts",
        image: "https://www.smashbros.com/assets_v2/img/fighter/sora/main.png",
        itsEcho: false,
        firstAparition: "Super Smash Bros Ultimate",
        lastAparition: lastAparition,
        appearances: [
            "Super Smash Bros Ultimate"
        ],
        specialMoves: {
            neutral: "Fire",
            side: "Thunder",
            up: "Blizzard",
            down: "Sora's Final Smash",
            final: "Sora's Final Smash"
        }
    }
];


//npm run dev