import { addActor } from "../services/actor.service";
import { Request, Response } from "express";

export const actor = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const actor = await addActor(data);

    res.status(200).json({ actor });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Failed to add an actor" });
  }
};
