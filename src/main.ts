import { app } from "./app";

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
