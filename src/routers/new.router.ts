import { Router } from "express";

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.status(200).send("New Message");
});

export default newRouter;