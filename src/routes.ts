import { Router } from "express";
import { infoCharacters } from "./characters";

const router = Router();

router.get("/Personajes", (_req, res) => {
    res.json(infoCharacters);
});

export default router;