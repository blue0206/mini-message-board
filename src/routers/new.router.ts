import { Request, Response, Router } from "express";
import { messages } from "../db.js";
import { message } from "../types/message.type.js";
import { getMessageDate, getMessageTimestamp } from "../utils/timestamp.js";

const newRouter = Router();

newRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render("form");
});

newRouter.post('/', (req: Request, res: Response) => {
    const authorName: string = req.body?.authorName;
    const message: string = req.body?.message;

    if (!authorName.trim() || !message.trim()) {
        return res.status(401).redirect("/new");
    }

    const messageInstance: message = {
        text: message,
        user: authorName,
        added: getMessageTimestamp(),
        date: getMessageDate()
    };

    messages.push(messageInstance);

    res.status(200).redirect("/");
});

export default newRouter;