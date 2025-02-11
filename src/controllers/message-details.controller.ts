import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { getMessage } from "../db/queries.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const getMessageDetails = asyncHandler(async (req: Request, res: Response) => {
  const messageID = req.params.messageID;
  const message = await getMessage(Number(messageID));
  if (!message) {
    throw new CustomNotFoundError(`Message not found.`);
  }
  res.status(200).render("message-details", { message });
});

export { getMessageDetails };
