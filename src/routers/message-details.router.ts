import { Router } from 'express';
import { getMessageDetails } from '../controllers/message-details.controller.js';

const messageRouter = Router();

messageRouter.get('/:messageID', getMessageDetails);

export default messageRouter;