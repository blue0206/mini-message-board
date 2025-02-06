import express from 'express';
import path from 'path';
import indexRouter from './routers/index.router.js';
import newRouter from './routers/new.router.js';
import messageRouter from './routers/message-details.router.js';

const app = express();

app.use(express.static(path.join(import.meta.dirname, "public")));
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/messageDetails', messageRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`);
});