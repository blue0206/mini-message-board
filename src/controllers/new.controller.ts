import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createMessage } from '../db/queries.js';
import InvalidInputError from '../errors/InvalidInputError.js';

const getNewMessageForm = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).render("form");
});

const postNewMessage = asyncHandler(async (req: Request, res: Response) => {
    const authorName: string = req.body?.authorName;
    const message: string = req.body?.message;

    if (!authorName.trim() || !message.trim()) {
        throw new InvalidInputError("Name and message are required.");
    }

    await createMessage(message, authorName);

    res.status(200).redirect("/");
});

export {
    getNewMessageForm,
    postNewMessage
};