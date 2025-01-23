import { app } from './app';
import { EnvironmentContainer } from './Shared/Infrastructure/EnviromentContainer';

const env = EnvironmentContainer.getInstance();
app.listen(env.PORT, () => {
  console.warn(`Server listen on http://localhost:${env.PORT}`);
});
