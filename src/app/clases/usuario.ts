export class Usuario {
    id: string = "";
    email: string;
    nombre: string;

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }
}
