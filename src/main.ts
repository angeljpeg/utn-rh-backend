import { app } from './app';
import { env } from './Shared/Infrastructure/EnviromentContainer';

app.listen(env.PORT, () => {
  console.warn(`Server listen on http://localhost:${env.PORT}`);
});
