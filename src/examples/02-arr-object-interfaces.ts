

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

let habilities: string[] = ['Bash', 'Counter', 'Healing'];

interface Characters {
	nombre: string;
	hp: number;
	habilities: string[];
	puebloNatal?: string;
}

const characters: Characters = {
	nombre: "Strider",
	hp: 100,
	habilities: ['Bash', 'Counter', 'Healing'],
}

characters.puebloNatal = 'Pueblo Paleta';

console.table(characters);









