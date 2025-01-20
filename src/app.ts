import express, { NextFunction, Request, Response } from "express";
import cors from 'cors'
import { UsuarioRouter } from "./Usuarios/Infrastructure/ExpressUsuarioRouter";

const app = express();

app.use(express.json());
app.use(cors())

app.use(UsuarioRouter);

// Middlewares
// Cacheo de errores
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error("Error:", err.message);
    console.error("Info Error", err.stack);
    res.status(500).json({ message: err.message });
  }

  console.error("Error:", err);
  res.status(500).json({ message: "Something went wrong :/" });
});

export { app };
