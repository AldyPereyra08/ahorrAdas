let monto1: HTMLElement = document.getElementById("montoPositivo");
let monto2: HTMLElement = document.getElementById("montoNegativo");
let montoTotal: HTMLElement = document.getElementById("montoTotal");

const restarMontos = (monto1, monto2) => {
  montoTotal.innerText = (monto1 - monto2).toString();
};

restarMontos(parseInt(monto1.innerHTML), parseInt(monto2.innerHTML));
