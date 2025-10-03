const pokemones = [
  {
    nombre: "Pikachu",
    nivel: 10,
    tipo: ["eléctrico"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    hp: 35,
    hp_total: 35,
    evolucion: true
  },
  {
    nombre: "Charmander",
    nivel: 8,
    tipo: ["fuego"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    hp: 30,
    hp_total: 30,
    evolucion: true
  },
  {
    nombre: "Squirtle",
    nivel: 9,
    tipo: ["agua"],
    foto: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    hp: 32,
    hp_total: 32,
    evolucion: false
  }
];

let opcion;

do {
  opcion = prompt("¿Qué desea hacer?\n1. Mostrar Pokemones\n2. Cargar nuevo Pokémon\n3. Restar HP\n4. Salir");

  switch(opcion) {
    case "1":
      mostrarPokemones();
      break;

    case "2":
      cargarPokemon();
      break;

    case "3":
      restarHp();
      break;

    case "4":
      alert("Programa finalizado.");
      break;

    default:
      alert("Opción no válida.");
  }
} while (opcion !== "4");

function mostrarPokemones() {
  console.log("=== Lista completa de pokemones ===");
  console.log(pokemones);
  console.log("=== Nombres de pokemones cargados ===");
  console.log(pokemones.map(p => p.nombre).join(", "));
}

function cargarPokemon() {
  let seguir = true;

  while (seguir) {
    const nuevo = {
      nombre: prompt("Nombre del Pokémon:"),
      nivel: parseInt(prompt("Nivel:")),
      tipo: prompt("Tipos (separados por coma):").split(","),
      foto: prompt("URL de la imagen:"),
      hp: parseInt(prompt("HP:")),
      hp_total: parseInt(prompt("HP total:")),
      evolucion: prompt("¿Tiene evolución? (si/no)").toLowerCase() === "si"
    };

    pokemones.push(nuevo);

    mostrarPokemones();

    const respuesta = prompt("¿Querés cargar otro pokémon? (si/no)").toLowerCase();
    seguir = respuesta === "si";
  }
}

function restarHp() {
  const nombre = prompt("¿A qué pokémon querés restarle HP?");
  const poke = pokemones.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

  if (poke) {
    const cantidad = parseInt(prompt(`¿Cuánto HP querés restarle a ${poke.nombre}?`));
    poke.hp = Math.max(0, poke.hp - cantidad);
    alert(`${poke.nombre} ahora tiene ${poke.hp} HP.`);
  } else {
    alert("Pokémon no encontrado.");
  }

  mostrarPokemones();
}
