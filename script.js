
let nombre = "Arbok";
let nivel = 35;
let tipo = ["veneno", "siniestro"];
let foto = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png";
let hp = 80;
let hp_total = 80;
let evolución = false;

const pokemon = {};
const pokemon2 = {};

let seguir_cargando = false;
const pokemones = [];
const pokemon1 = {
  nombre: "",
  nivel: 0,
  tipo: [],
  foto: "",
  hp: 0,
  hp_total: 0,
  evolución: false,
};

do {
 
  pokemon.nombre = prompt("Ingrese el nombre del Pokémon:");
  pokemon.nivel = Number(prompt("Ingrese el nivel del Pokémon:"));

 
  pokemones.push(pokemon);
  let terminar = prompt("¿Desea cargar otro Pokémon? (si/no)");

  seguir_cargando = false;
  if (terminar === "si") {
    seguir_cargando = true;
  }
} while (seguir_cargando === true);

console.log(pokemones);
for (let i = 0; i < pokemones.length; i++) {
  console.log(
    "Nombre: " + pokemones[i].nombre + ", Nivel: " + pokemones[i].nivel
  );
}
console.log("Nombre: " + pokemon.nombre + ", Nivel: " + pokemon.nivel);
