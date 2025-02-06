import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { messages } from '../db.js';
import { message } from '../types/message.type.js';
import { v4 as uuid } from "uuid";
import { getMessageDate, getMessageTimestamp } from "../utils/timestamp.js";
import InvalidInputError from '../errors/InvalidInputError.js';

const getNewMessageForm = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).render("form");
});

const postNewMessage = asyncHandler(async (req: Request, res: Response) => {
    const authorName: string = req.body?.authorName;
    const message: string = req.body?.message;

    if (!authorName.trim() || !message.trim()) {
        throw new InvalidInputError("Author name and message are required.");
    }

    const messageInstance: message = {
        id: uuid(),
        text: message,
        user: authorName,
        added: getMessageTimestamp(),
        date: getMessageDate()
    };

    messages.push(messageInstance);

    res.status(200).redirect("/");
});

export {
    getNewMessageForm,
    postNewMessage
};