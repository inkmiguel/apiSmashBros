import { infoCharacters } from "./characters";

export const getCharacterByName = (name: string) => {
    return (
        infoCharacters.find(
            character => character.name.toLowerCase() === name.toLowerCase()
        ) || (console.log("Character ist not part of the game"), null)
    );
};
