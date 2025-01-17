import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { UsuarioRouter } from "./Usuarios/Infrastructure/ExpressUsuarioRouter";

const app = express();

dotenv.config();
app.use(express.json())

app.use(UsuarioRouter)


// Middlewares
// Cacheo de errores
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.log("Error:", err.message)
        console.log("Info Error", err.stack)
        res.status(500).json({message: err.message})
    }

    console.log("Error:", err)
    res.status(500).json({message: "Something went wrong :/"})


})

export { app };
