import { Router } from "express";
import { getNewMessageForm, postNewMessage } from "../controllers/new.controller.js";

const newRouter = Router();

newRouter.get('/', getNewMessageForm);
newRouter.post('/', postNewMessage);

export default newRouter;