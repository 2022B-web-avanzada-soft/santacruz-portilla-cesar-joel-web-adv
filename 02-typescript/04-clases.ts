// 04-clases.ts
class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido = '';
    constructor(
        nombreParametro: string,
        apellidoParametro: string
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido() {
        return this.nombreYApellido;
    }
}
class Usuario extends Persona {
    constructor(
        public cedula: string,
        public estadoCivil: string,
        nombreParametro: string,
        apellidoParametro: string
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadoCivil;
    }
}
const cesar = new Usuario(
    '1725412345',
    'soltero',
    'Cesar',
    'Santacruz'
);
cesar.nombre;
cesar.apellido;
cesar.cedula;
cesar.estadoCivil;
