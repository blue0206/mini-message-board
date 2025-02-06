import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { messages } from '../db.js';

const getMessages = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).render("index", { messages });
});

export { getMessages };