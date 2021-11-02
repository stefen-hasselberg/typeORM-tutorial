import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

import {router as userRouter } from './routes/User'

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
