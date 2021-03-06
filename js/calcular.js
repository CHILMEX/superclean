function capturar_valores() {
	let opcion3 = 5000;
	let opcion4 = 8000;


	var opcion1 = document.getElementById("exterior");
	var opcion2 = document.getElementById("motor");
	var opcion5 = document.getElementById("nombre").value;

	if (opcion1.checked && opcion2.checked == true) {

		alert("Valor de Ambos Servicios con IVA incluido es de " + Number(opcion3 + opcion4) * 1.19);

	} else if (opcion1.checked == true) {

		alert(" Valor Servicio de " + opcion1.value + " con IVA incluido : " + "$" + opcion3 * 1.19);

	} else if (opcion2.checked == true) {
		alert(" Valor Servicio de " + opcion2.value + " con IVA incluido : " + "$" + opcion4 * 1.19);
	} else {
		alert(" No ha seleccionado opciones. Seleccione una de ellas o ambas.");
	}

}
