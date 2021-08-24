
// const $ = (selector) => {
//     document.querySelector(selector);
// }

function AddOrRemoveClass(idRemove, idAdd1, idAdd2) {
    document.querySelector(idRemove).classList.remove('visually-hidden')
    document.querySelector(idAdd1).classList.add('visually-hidden')
    document.querySelector(idAdd2).classList.add('visually-hidden')
}

let pepe = true 
{pepe ? console.log("ddddd") : console.log("aaaaa")}

let operacionesData = [
    {
        nombre: "Pepe Pere",
        categoria: "Comida",
        fecha: "21/8/2021",
        monto: 4000
    },
    {
        nombre: "Pepe Perz",
        categoria: "Comida",
        fecha: "21/8/2021",
        monto: 4000
    },
    {
        nombre: "Pepe Prez",
        categoria: "Comida",
        fecha: "21/8/2021",
        monto: 4000
    }
  ];

let operaciones = document.querySelector('#operaciones');

operaciones.innerHTML = operacionesData.map(function (operacion) {
    return `<div class="row">
    <div class="col">${operacion.nombre}</div>
    <div class="col">${operacion.categoria}</div>
    <div class="col">${operacion.fecha}</div>
    <div class="col">${operacion.monto}</div>
    <div class="col-md-4">
    <button type="submit" class="btn btn-primary btn-editar-op">Editar</button>
    <button type="submit" class="btn btn-primary btn-eliminar-op">Eliminar</button>
    </div>
    </div>`;
});

// const operaciones = operacionesData.map(function (operacion, index) {
//     document.querySelector('#operaciones').innerHTML
//     return console.log(operacion.nombre, operacion.categoria, operacion.fecha, operacion.monto); 
// });



