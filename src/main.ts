import { app } from "./app";
import { env } from "./env";

app.listen(env.PORT, () => {
  console.warn(`Server listen on http://localhost:${env.PORT}`);
});
