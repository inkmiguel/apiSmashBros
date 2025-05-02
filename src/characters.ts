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
    |"Super Smash Bros" 
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
    }
];


//npm run dev