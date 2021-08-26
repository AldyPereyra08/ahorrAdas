var monto1 = document.getElementById("montoPositivo");
var monto2 = document.getElementById("montoNegativo");
var montoTotal = document.getElementById("montoTotal");
var restarMontos = function (monto1, monto2) {
    montoTotal.innerText = (monto1 - monto2).toString();
};
restarMontos(parseInt(monto1.innerHTML), parseInt(monto2.innerHTML));
