// 01-variables.ts
// npm install -g typescript
// tsc 01-variables.ts

let nombre: string = 'Cesar'; // primitivo
let nombre2: String = 'Cesar2'; // Clase String

// Para transpilar
// tsc 01-variables.ts --target es3
// tsc 01-variables.ts --target es6

// name = 1;
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date()
let sueldo: number;
sueldo = 12.4;

// Duck typing
let apellido = 'Santacruz'; // string
// apellido = 1 // no nos va a permitir
apellido = 'Portilla';
apellido.toUpperCase();

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = '2';
edadMultiple = '2';
edadMultiple = new Date();
edadMultiple = 2022

let numeroUnico: number = 1;
numeroUnico = numeroUnico + (edadMultiple as number);
