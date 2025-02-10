import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getAllMessages } from '../db/queries.js';

const getMessages = asyncHandler(async (req: Request, res: Response) => {
    const messages = await getAllMessages();
    res.status(200).render("index", { messages });
});

export { getMessages };