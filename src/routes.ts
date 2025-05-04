import { Router } from "express";
import { infoCharacters } from "./characters";
import { getCharacterByName } from './getCharacter';

const router = Router();

router.get("/Personajes", (_req, res) => {
    res.json(infoCharacters);
});

router.get('/Personajes/:name', (req, res) => {
  const character = getCharacterByName(req.params.name);
  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
});

export default router;