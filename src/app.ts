import express from 'express';
import cors from 'cors';
import { UsuarioRouter } from './Usuarios/Infrastructure/ExpressUsuarioRouter';
import { catchErrorsMiddleware } from './middlewares/CatchErrorsMiddleware';
import { EmpleadoRouter } from './Empleados/Infrastructure/ExpressEmpleadoRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.use(UsuarioRouter);
app.use(EmpleadoRouter);

// Middlewares
app.use(catchErrorsMiddleware);

export { app };
