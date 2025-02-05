import { Request, Response, Router } from "express";
import { messages } from "../db.js";

const indexRouter = Router();

indexRouter.get('/', (req: Request, res: Response) => {
    res.status(200).render("index", { messages });
});

export default indexRouter;