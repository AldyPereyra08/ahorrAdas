var monto1 = document.getElementById("montoPositivo");
var monto2 = document.getElementById("montoNegativo");
var montoTotal = document.getElementById("montoTotal");
var restarMontos = function (monto1, monto2) {
    montoTotal = monto1 - monto2;
};
restarMontos();
