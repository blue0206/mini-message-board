import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { getMessageTimestamp } from '../utils/timestamp.js';

export const timeFormat = asyncHandler(async (req: Request, res: Response) => {
    const { time, timeZone } = req.body;
    if (!time.trim()) {
        res.status(400).json({
            message: "Please provide a valid time"
        });
    }
    if (!timeZone.trim()) {
        const formatTime = getMessageTimestamp(time, undefined);
        res.status(200).json({
            time: formatTime,
            status: 200
        });
    } else {
        const formatTime = getMessageTimestamp(time, timeZone);
        res.status(200).json({
            time: formatTime,
            status: 200
        });
    }
});