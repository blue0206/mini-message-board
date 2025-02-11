import { Router } from "express";
import { timeFormat } from "../controllers/time-format.controller.js";

const timeFormatRouter = Router();

timeFormatRouter.post("/timeFormat", timeFormat);

export default timeFormatRouter;
