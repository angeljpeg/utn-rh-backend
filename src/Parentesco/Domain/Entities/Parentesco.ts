import { ParentescoPrimitive } from "../Interfaces/ParentescoPrimitive";
import { ParentescoId } from "./ParenetescoId";
import { ParentescoGrado } from "./ParentescoGrado";
import { ParentescoNombre } from "./ParentescoNombre";

export class Parentesco {
    public id: ParentescoId
    public nombre: ParentescoNombre;
    public grado: ParentescoGrado;
    public constructor(id: ParentescoId, nombre: ParentescoNombre, grado: ParentescoGrado) {
        this.id = id;
        this.nombre = nombre;
        this.grado = grado;
    }

    public toParentescoPrimitive(): ParentescoPrimitive {
        return {
            id: this.id.value,
            nombre: this.nombre.value,
            grado: this.grado.value,
        };
    }
}