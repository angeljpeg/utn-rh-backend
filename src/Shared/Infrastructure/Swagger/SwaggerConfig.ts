import swaggerJSDoc from 'swagger-jsdoc';
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import path from 'path';
import fs from 'fs';

/**
 * Carga todos los archivos de esquema en el directorio 'schemas'.
 * @returns Un objeto con todos los esquemas cargados.
 */
export const loadSchemas = (): { [key: string]: unknown } => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const schemasPath = path.join(__dirname, 'Schemas');
  const schemas: { [key: string]: unknown } = {};

  // Verificar si el directorio de esquemas existe
  if (!fs.existsSync(schemasPath)) {
    console.error(`El directorio de esquemas no existe: ${schemasPath}`);
    return {};
  }

  fs.readdirSync(schemasPath).forEach(file => {
    if (file.endsWith('.json')) {
      const schemaName = file.replace('.schema.json', '');
      schemas[schemaName] = JSON.parse(fs.readFileSync(path.join(schemasPath, file), 'utf-8'));
    }
  });

  return schemas;
};

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestion de Prestaciones para UTN',
      version: '1.0.0',
      description: 'Documentación de la API de Gestión de Prestaciones para UTN',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Servidor local',
      },
    ],
    components: {
      schemas: loadSchemas(),
    },
  },
  apis: ['src/*/Infrastructure/Router.ts'], // Ruta de los controladores
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export const swaggerSpec = (app: Express): void => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
