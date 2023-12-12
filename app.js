import express from 'express';
import mainRouter from './controller/index.js';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));

app.use('/', mainRouter);

app.listen(3000);