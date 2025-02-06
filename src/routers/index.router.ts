import { Router } from "express";
import { getMessages } from "../controllers/index.controller.js";

const indexRouter = Router();

indexRouter.get('/', getMessages);

export default indexRouter;