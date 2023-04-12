export const MARCAS = [
    { id: 1, nombre: 'Europeo' },
    { id: 2, nombre: 'Americano' },
    { id: 3, nombre: 'Asiatico' },
]

const YEAR = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (val, index) => YEAR - index);

export const PLANES = [
    { id: 1, nombre: 'Básica' },
    { id: 2, nombre: 'Completa' },
]