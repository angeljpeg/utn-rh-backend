import express, { NextFunction, Request, Response } from "express";
import { UsuarioRouter } from "./Usuarios/Infrastructure/ExpressUsuarioRouter";

const app = express();

app.use(express.json());

app.use(UsuarioRouter);

// Middlewares
// Cacheo de errores
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.log("Error:", err.message);
    console.log("Info Error", err.stack);
    res.status(500).json({ message: err.message });
  }

  console.log("Error:", err);
  res.status(500).json({ message: "Something went wrong :/" });
});

export { app };
