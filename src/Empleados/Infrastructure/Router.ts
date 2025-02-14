import { Router } from 'express';
import { EmpleadoController } from './Controller';

const controller = new EmpleadoController();
const router = Router();

router.post('/empleado', controller.create);
router.get('/empleados', controller.getAll);
router.get('/empleado/:id', controller.getbyId);
router.put('/empleado/:id', controller.update);
router.delete('/empleado/:id', controller.delete);

export { router as EmpleadoRouter };

/**
 * @swagger
 * paths:
 *   /empleado:
 *     post:
 *       tags:
 *         - Empleado
 *       summary: Crea un nuevo empleado
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *             example:
 *               nombre: "Juan Perez"
 *               genero: "M"
 *               fecha_ingreso: "2020-01-01"
 *       responses:
 *         '201':
 *           description: Empleado creado con éxito
 *   /empleados:
 *     get:
 *       tags:
 *         - Empleado
 *       summary: Obtiene todos los empleados
 *       responses:
 *         '200':
 *           description: Lista de empleados obtenida con éxito
 *   /empleado/{id}:
 *     get:
 *       tags:
 *         - Empleado
 *       summary: Obtiene un empleado por su ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: number
 *       responses:
 *         '200':
 *           description: Empleado encontrado
 *         '404':
 *           description: Empleado no encontrado
 *     put:
 *       tags:
 *         - Empleado
 *       summary: Actualiza un empleado por su ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: number
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Empleado'
 *       responses:
 *         '200':
 *           description: Empleado actualizado con éxito
 *     delete:
 *       tags:
 *         - Empleado
 *       summary: Elimina un empleado por su ID
 *       parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           schema:
 *             type: number
 *       responses:
 *         '204':
 *           description: Empleado eliminado con éxito
 */
