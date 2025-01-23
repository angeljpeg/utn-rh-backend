import express from 'express';
import cors from 'cors';
import { UsuarioRouter } from './Usuarios/Infrastructure/ExpressUsuarioRouter';
import { catchErrorsMiddleware } from './middlewares/CatchErrorsMiddleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use(UsuarioRouter);

// Middlewares
// Cacheo de errores
app.use(catchErrorsMiddleware);

export { app };
