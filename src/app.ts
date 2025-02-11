import express, { Request, Response } from 'express';
import "dotenv/config";
import path from 'path';
import indexRouter from './routers/index.router.js';
import newRouter from './routers/new.router.js';
import messageRouter from './routers/message-details.router.js';
import timeFormatRouter from './routers/time-format.router.js';
import CustomNotFoundError from './errors/CustomNotFoundError.js';
import InvalidInputError from './errors/InvalidInputError.js';

const app = express();

// Middlewares
app.use(express.static(path.join(import.meta.dirname, "public")));
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/messageDetails', messageRouter);
app.use('/api', timeFormatRouter);

// Error Middleware
app.use((err: Error, req: Request, res: Response) => {
    console.log(err);
    if (err instanceof CustomNotFoundError) {
        res.status(err.statusCode).render("message-details", {
            errors: [err]
        });
    } else if (err instanceof InvalidInputError) {
        res.status(err.statusCode).render("form", {
            errors: [err]
        });
    } else {
        res.status(500).send(err.message || "Internal Server Error");
    }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});