// Config
import express from 'express';
import cors from 'cors';
import handlerError from './Shared/Infrastructure/Utils/Middlewares/HandlerError';

// Routers
import { PrestacionRouter } from './Prestacion/Infrastructure/Router';

// CONSTS
const PREFIX = '/api/v1';

const app = express();

// Config
app.use(express.json());
app.use(cors());

// Routes
app.use(PREFIX, PrestacionRouter);
app.all('*', (req, res, next) => {
  res.status(404).json({ message: 'Not found' });
  next();
});

// Middlewares
app.use(handlerError);

export { app };
