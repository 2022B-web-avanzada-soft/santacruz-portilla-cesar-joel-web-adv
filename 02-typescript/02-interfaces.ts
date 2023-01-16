//02-interfaces.ts
export class A{

}
export interface B{

}

interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; // opcional
    sueldo?: number; // opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    // calcularImpuesto parametro numero impuesto, sueldo + sueldo * impuesto
    // estadoActual: no reciba parametros, 'AP' | 'AF' | 'AT'
}

let user: Usuario = {
    nombre: 'Cesar',
    apellido: 'Santacruz',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: (impuesto: number) => {
        return user.sueldo + user.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (user.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
