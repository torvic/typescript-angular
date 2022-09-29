

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
	volumen: number;
	segundo: number;
	cancion: string;
	detalles: Detalles;
}

interface Detalles {
	autor: string;
	anio: number;
}

const reproductor: Reproductor = {
	volumen: 90,
	segundo: 36,
	cancion: 'Mess',
	detalles: {
		autor: 'Ed Sheeran',
		anio: 2015,
	}
}

const { segundo, volumen, detalles } = reproductor;
const { autor, anio } = detalles;


/* console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('El autor actual es: ', autor);
console.log('El año actual es: ', anio); */

const dbz: string[] = ['Goku', 'vegeta', 'Trunks'];
const [ goku, vegeta, trunk ] = dbz;

console.log('Personaje 1: ', goku);
console.log('Personaje 2: ', vegeta);
console.log('Personaje 3: ', trunk);











