export class Usuario {
    static usuarios: Usuario[] = [];
    static usuarioLogueado: Usuario | null = null;

    id: number = 0;
    nombre: string;
    clave: string;

    constructor(nombre: string, clave: string) {
        this.nombre = nombre;
        this.clave = clave;
    }

    public static BuscarUsuario(nombre: string): Usuario | null {
        for (let i = 0; i < Usuario.usuarios.length; i++) {
            if (Usuario.usuarios[i].nombre == nombre) {
                return Usuario.usuarios[i];
            }
        }

        return null;
    }

    public static TraerDatosLocalStorage(): void {
        Usuario.usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        Usuario.usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado") || "null");
        //console.log("usuarios", Usuario.usuarios);
    }

    public static UltimoID(): number {
        let ultimoID: number = 0;
        for (let i = 0; i < Usuario.usuarios.length; i++) {
            if (Usuario.usuarios[i].id > ultimoID) {
                ultimoID = Usuario.usuarios[i].id;
            }
        }

        return ultimoID;
    }

    public static LogIn(usuario: Usuario): boolean {
        let usuarioEncontrado = Usuario.BuscarUsuario(usuario.nombre);

        if (usuarioEncontrado == null) {
            throw new Error("El usuario no existe");
        }

        if (usuarioEncontrado.clave == usuario.clave) {
            Usuario.usuarioLogueado = usuarioEncontrado;
            localStorage.setItem("usuarioLogueado", JSON.stringify(Usuario.usuarioLogueado));
            return true;
        } else {
            throw new Error("La clave es incorrecta");
        }
    }

    public static CrearUsuario(usuario: Usuario): number {
        if (Usuario.BuscarUsuario(usuario.nombre) != null) {
            throw new Error("El usuario ya existe");
        }

        usuario.id = Usuario.UltimoID() + 1;
        Usuario.usuarios.push(usuario);

        localStorage.setItem("usuarios", JSON.stringify(Usuario.usuarios));

        return usuario.id;
    }

}
