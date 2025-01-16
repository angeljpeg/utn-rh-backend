import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const persona = "asjd"

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
