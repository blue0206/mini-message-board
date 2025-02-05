import { Router } from "express";

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Blue",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Aayush",
        added: new Date()
    }
];

indexRouter.get('/', (req, res) => {
    res.status(200).render("index", { messages });
});

export default indexRouter;