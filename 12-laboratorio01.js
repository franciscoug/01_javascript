
/** ****************  LABORATORIO 1       **************
 * Empezaras ordenando las obras de arte de un museo y has decidido hacer
 * un inventario de algunos de los más famosos.
 * 
 * Has decidido declarar una serie de objetos que se corresponderán con 
 * las siguientes pinturas: 
 *  Mona Lisa (Leonardo da Vinci, 1503),
 *  La última cena (Leonardo da Vinci, 1495), 
 *  La noche estrellada (Vincent van Gogh, 1889), 
 *  El grito (Edvard Munch, 1893), 
 *  El Guernica (Pablo Picasso, 1937), 
 *  El beso (Gustav Klimt, 1907), 
 *  La joven de la perla (Johannes Vermeer, 1665), 
 *  El nacimiento de Venus (Sandro Botticelli, 1485), 
 *  Las meninas (Diego Velázquez, 1656), 
 *  La creación de Adán (Miguel Ángel, 1512).

    Mostrar todas las imágenes de la lista en la consola 
    (información completa: título, artista y fecha de creación).   
 */
// Declaración de los objetos de cada cuadro
let cuadros = [
    {
        titulo: "Mona Lisa",
        artista: "Leonardo da Vinci",
        anio: 1503
    },
    {
        titulo: "La última cena",
        artista: "Leonardo da Vinci",
        anio: 1495
    },
    {
        titulo: "La noche estrellada",
        artista: "Vincent van Gogh",
        anio: 1889
    },
    {
        titulo: "El grito",
        artista: "Edvard Munch",
        anio: 1893
    },
    {
        titulo: "El Guernica",
        artista: "Pablo Picasso",
        anio: 1937
    },
    {
        titulo: "El beso",
        artista: "Gustav Klimt",
        anio: 1907
    },
    {
        titulo: "La joven de la perla",
        artista: "Johannes Vermeer",
        anio: 1665
    },
    {
        titulo: "El nacimiento de Venus",
        artista: "Sandro Botticelli",
        anio: 1485
    },
    {
        titulo: "Las meninas",
        artista: "Diego Velázquez",
        anio: 1656
    },
    {
        titulo: "La creación de Adán",
        artista: "Miguel Ángel",
        anio: 1512
    }
];

// Mostrar todos los cuadros en la consola
cuadros.forEach(cuadro => {//Recuerda forEach recorre el arreglo.
    console.log(`Título: ${cuadro.titulo}, Artista: ${cuadro.artista}, Año: ${cuadro.anio}`);
});