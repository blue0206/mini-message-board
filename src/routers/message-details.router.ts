import { Request, Response, Router } from 'express';
import { messages } from '../db.js';

const messageRouter = Router();

messageRouter.get('/:messageID', (req: Request, res: Response) => {
    const messageID = req.params.messageID;
    if (!messageID.trim()) {
        return res.status(400).redirect("/");
    }
    const message = messages.find((msg) => msg.id === messageID);
    if (!message) {
        return res.status(500).redirect("/");
    }
    res.status(200).render("message-details", { message });
});

export default messageRouter;