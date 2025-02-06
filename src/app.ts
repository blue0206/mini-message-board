import express from 'express';
import path from 'path';
import indexRouter from './routers/index.router.js';
import newRouter from './routers/new.router.js';
import messageRouter from './routers/message-details.router.js';
import CustomNotFoundError from './errors/CustomNotFoundError.js';
import InvalidInputError from './errors/InvalidInputError.js';

const app = express();

app.use(express.static(path.join(import.meta.dirname, "public")));
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/messageDetails', messageRouter);

// Error Middleware
app.use((err, req, res, next) => {
    if (err instanceof CustomNotFoundError) {
        res.status(err.statusCode).redirect("/");
    } else if (err instanceof InvalidInputError) {
        res.status(err.statusCode).redirect("/new");
    } else {
        res.status(500).send(err.message || "Internal Server Error");
    }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});