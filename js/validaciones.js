function validate() {

  var rut = document.getElementById('rut').value;
  if ((rut.length == 0 || rut.length !== 8) || isNaN(rut)) {
    alert("El rut indicado es incorrecto!");
    document.formularioContacto.rut.focus();
    return false;
  }

  var dv = document.getElementById('dv').value;
  var regx = new RegExp("^[0-9kK]{1}$")
  var valDv = regx.test(dv)
  if (dv.length == 0 || !valDv) {
    alert("El digito verificador indicado es incorrecto!");
    document.formularioContacto.dv.focus();
    return false;
  }

  var nombre = document.getElementById('nombre').value;
  var regxNom = new RegExp('^[A-Z]+$', 'i')
  var valNom = regxNom.test(nombre)
  if (nombre.length == 0 || nombre.length >50 || !valNom) {
    alert("El nombre indicado es incorrecto!");
    document.formularioContacto.nombre.focus();
    return false;
  }
  var apellido = document.getElementById('apellido').value;
  var regxApell = new RegExp('^[A-Z]+$', 'i')
  var valApell = regxApell.test(apellido)
  if (apellido.length == 0 || apellido.length >50 || !valApell) {
    alert("El apellido indicado es incorrecto!");
    document.formularioContacto.apellido.focus();
    return false;
  }
  var direccion = document.getElementById('direccion').value;
  var regxDirec = new RegExp('^[A-Z0-9 ]+$', 'i')
  var valDirec = regxDirec.test(direccion)
  if (direccion.length == 0 || direccion.length >100 || !valDirec) {
    alert("La dirección indicada es incorrecta!");
    document.formularioContacto.direccion.focus();
    return false;
  }

    // Se realiza calculo de los servicios seleccionados por el cliente
    let opcion3 = 5000;
    let opcion4 = 8000;
  
  
    var opcion1 = document.getElementById("exterior");
    var opcion2 = document.getElementById("motor");
    var opcion5 = document.getElementById("nombre").value;
  
    if (opcion1.checked && opcion2.checked == true) {
  
      alert("Estimado(a) : " + opcion5+ ", " + " el valor de ambos servicios (IVA incluido) es de : " + "$ " + Number(opcion3 + opcion4) * 1.19);
      return false;
    } else if (opcion1.checked == true) {
  
      alert("Estimado(a) : " + opcion5 + ", " + " el valor del servicio de " + opcion1.value + " (IVA incluido) es de : " + "$ " + opcion3 * 1.19);
      return false;
    } else if (opcion2.checked == true) {
      alert("Estimado(a) : " + opcion5 + ", " + " el valor del servicio de " + opcion2.value + " (IVA incluido) es de : " + "$ " + opcion4 * 1.19);
      return false;
    } else {
      alert("Estimado(a) : " + opcion5 + ", " + " no ha seleccionado opciones. Seleccione una de ellas o ambas.");
      return false;
    }
    
}
