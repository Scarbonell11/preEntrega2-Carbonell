class Disco {
  constructor(genero, artista, nombre, precio) {
    this.genero = genero;
    this.artista = artista;
    this.nombre = nombre;
    this.precio = precio;
  }
}
 
//Array de productos
const disco1 = new Disco(
 "ROCK",
 "Metallica",
 "Master of puppets",
  2500
);
const disco2 = new Disco(
 "POP",
 "Miley Cyrus",
 "Plastic hearts",
  2000
);
const disco3 = new Disco(
 "SOUL",
 "Stevie Wonder",
 "Talking book",
  2310
);
const disco4 = new Disco(
 "ROCK",
 "System of a Down",
 "Spiders",
  2220
);
const disco5 = new Disco(
  "SOUL",
  "Ray Charles",
  "Ray Charles greatest hits",
   1700
);
const disco6 = new Disco(
 "POP",
 "Charlie Puth",
 "Charlie",
  1700
);


//array declarado vacio para cargarlo mediante push
const discos = [];
const carrito = [];
let opcion;

//push al array discos
discos.push(disco1, disco2, disco3, disco4, disco5, disco6);

//foreach para listar los discos disponibles
function verDiscosDisponibles() {
  const nombres = discos.map((el) => el.nombre);
  return nombres.forEach((el) => alert(nombres.indexOf(el) + ": " + el));
}

//filter para filtrado por genero
function filtrarPorGenero() {
  let generoAFiltrar = prompt("Por que genero desea filtrar la lista?");
  generoAFiltrar = generoAFiltrar.toUpperCase();
  const filtro = discos.filter((el) => el.genero.includes(generoAFiltrar));
  if (filtro.length === 0) {
    return alert(
      "No tenemos unidades disponibles para ese genero,  pedilo por Whatsapp!"
    );
  }
  const generoFiltrado = filtro.map(
    (el) => el.artista + "\n " + el.nombre + "\n"
  );
  return alert(generoFiltrado);
}

//push para añadir al array carrito
function añadirAlCarrito() {
  let discoParaAñadir = parseInt(
    prompt(
      "Indique el numero que corresponde al disco que desea comprar \n Si no conoce esta referencia escriba la letra N "
    )
  );

  if (discoParaAñadir === "n" || discoParaAñadir === "N") {
    return verDiscosDisponibles();
  } else if (discoParaAñadir > discos.length || discoParaAñadir < 0) {
    return alert("No es una opcion valida");
  } else {
    carrito.push(discos[discoParaAñadir]);
    return alert("Disco agregado con exito");
  }
}

//map con un nuevo array de nombre y precio y listado por foreach
function consultarCarrito() {
  if (carrito.length === 0) {
    return alert("Tu carrito esta vacio");
  } else {
    const discosAñadidos = carrito.map((el) => el.nombre + "\n" + el.precio);
    return discosAñadidos.forEach((el) =>
      alert(discosAñadidos.indexOf(el) + ": " + el)
    );
  }
}

//reduce para la cuenta total
function totalAPagar() {
  const total = carrito.reduce((acumulador, el) => acumulador + el.precio, 0);
  return alert("Saldo a pagar: " + total);
}

//splice para eliminar elemento seleccionado del array carrito 
function eliminarDelCarrito() {
  let discoParaEliminar = parseInt(
    prompt(
      "Indique la posicion del disco que desea quitar del carrito. \n En caso de tener mas de una copia añadida, se eliminara solo una de ellas \n Si desea cancelar la operacion digite B"
    )
  );
  if (discoParaEliminar === "B" || discoParaEliminar === "b") {
    return alert("No hay problema volvemos al menu");
  } else if (carrito.length === 0) {
    return alert("No puedes eliminar objetos, tu carrito esta vacio.");
  } else if (discoParaEliminar > carrito.length || discoParaEliminar < 0) {
    return alert("Opcion invalida");
  } else {
    carrito.splice(discoParaEliminar, 1);
    return alert("Elemento eliminado con exito");
  }
}


//menu de opciones
do {
   opcion = parseInt(
    prompt(
      "Bienvenido al mundo de la musica! \n\n 1:Ver los discos disponibles \n\n 2:Filtrar por genero \n\n 3:Añadir un disco al carrito \n\n 4:Consultar estado del carrito \n\n 5:Estado de cuenta \n\n 6:Quitar disco del carrito \n\n 7:Pagar \n\n 0:Salir"
    )
  );

  switch (opcion) {
    case 1:
      verDiscosDisponibles();
      break;

    case 2:
      filtrarPorGenero();
      break;

    case 3:
      añadirAlCarrito();
      break;

    case 4:
      consultarCarrito();
      break;

    case 5:
      totalAPagar();
      break;

    case 6:
      eliminarDelCarrito();
      break;

    case 7:
      if (carrito.length === 0) {
        alert("No puedes realizar esta operacion, no hay productos cargados al carrito")
      } else{
        alert("Has realizado la compra con exito!");
      } 
      break;
  
    default:
      alert("Gracias por visitarnos!");
      break;
  }

 } while (opcion != 0); // Si se ingresa 0 -> se termina el bucle.

