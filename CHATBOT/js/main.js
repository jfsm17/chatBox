var cadena, codigo, respuesta;

var tener = RegExp("TIENE|TIENES|TENGO|TENES|TENÉS");
var producto = /AÑOS/ ;
var quieres = RegExp("QUIERES|QUIERE|PUEDES|PUEDE");
var amiga = /AMIGA/;

function evaluarPregunta(){


	cadena = document.getElementById("txtPregunta").value;
	  
      cadena = cadena.toUpperCase();
	  document.getElementById("txtPregunta").value="";
	  cod=0;

	 if (tener.test(cadena) == true && producto.test(cadena) == true) {
		codigo = 1;
	}
	 if (quieres.test(cadena)==true && amiga.test(cadena)) {
	 	codigo = 2;
	 }
	
	
	responder();
}
function responder(){
	var r = Math.floor((Math.random() * 3) + 1);
	console.log("random " + r);
	console.log("cod " + codigo);
	var resp;
	switch(codigo){
		case 1:
		if (r == 1) {
			resp = "Hola tengo 25 años";
			};
			if (r == 2) {
			resp = "Estoy pequeña tengo 25 años y tú?";
			};
			if (r == 3) {
			resp = "Que te importa jajajaja";
			};
		break;
		case 2:
		if (r == 1) {
			resp = "No me junto con pendejos";
			};
			if (r == 2) {
			resp = "Si claro! amigas por siempre ";
			};
			if (r == 3) {
			resp = "Claro enviame un Whatsapp";
			};

		break;
		default:
	}
	document.getElementById('respuesta').innerHTML = resp; 
}
