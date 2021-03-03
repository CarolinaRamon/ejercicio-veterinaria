

function probarEjercicio()
{

	let tipo;
	let pelaje;
	let edad;
	let nombre;
	let peso;
	let estado;
	let temperatura;
	let raza;
	let seguir;

	let flagPerro = 1;
	let maxPesoPerro;
	let nombrePerroPesado;

	let contadorMascotas = 0;
	let contadorEnfermos = 0;
	let porcentajeEnfermos;

	let nombreLastOtro;

	let flagSinPelo = 1;
	let minTempSinPelo;

	let acumTempPerro = 0;
	let acumTempGato = 0;
	let acumTempOtro = 0;
	let contPerro = 0;
	let contGato = 0;
	let contOtro = 0;
	let promedioTempPerro = 0;
	let promedioTempGato = 0;
	let promedioTempOtro = 0;
	let maxTipoPromedioTemp;

	let contEnfermos = 0;
	let contInternados = 0;
	let contAdopcion = 0;
	let estadoMenorCantidad;

	let acumPesos = 0;

	let flagGatoSinPelos = 1;
	let nombreGSPMinPeso;
	let razaGSPMinPeso;
	let minPesoGSP;

	let porcentajePG;

	let promedioPeso;

	do {

		tipo = prompt("Ingrese tipo (perro/gato/otro): ").toLowerCase();
		while(tipo != "perro" && tipo != "gato" && tipo !="otro"){
			tipo = prompt("ERROR!!! Ingrese tipo (perro/gato/otro): ").toLowerCase();
		}

		pelaje = prompt("Ingrese pelaje corto/largo/sin pelo: ");
		while(pelaje != "corto" && pelaje != "largo" && pelaje !="sin pelo"){
			pelaje = prompt("ERROR!!! Ingrese pelaje corto/largo/sin pelo: ");
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while(edad<=0 || isNaN(edad)){
			edad = parseInt(prompt("ERROR!!! Ingrese edad: "));
		}

		nombre = prompt("Ingrese nombre: ");
		while(!isNaN(nombre)){
			nombre = prompt("ERROR!! El nombre no puede ser un número. Ingrese nombre: ");
		}

		peso = parseFloat(prompt("Ingrese peso: "));
		while(peso<=0 || isNaN(peso)){
			peso = parseFloat(prompt("ERROR!!! Ingrese peso: "));
		}

		estado = prompt("Ingrese estado enfermo/internado/adopcion: ");
		while(estado != 'enfermo' && estado != 'internado' && estado !='adopcion'){
			estado = prompt("ERROR!!! Ingrese estado enfermo/internado/adopcion: ");
		}

		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		while(temperatura<=0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("ERROR!!! Ingrese temperatura: "));
		}

		raza = prompt("Ingrese raza: ");
		while(!isNaN(raza)){
			raza = prompt("ERROR!! La raza no puede ser un número. Ingrese raza: ");
		} 

		//--------------------------------------------------------------------------------

		if( tipo == "perro" && (flagPerro || peso > maxpesoPerro)){
			maxPesoPerro = peso;
			nombrePerroPesado = nombre;
			flagPerro = 0;
		}

		contadorMascotas++;

		if(estado == "enfermo"){
			contadorEnfermos++;
		}

		if(pelaje == "sin pelo" && (flagSinPelo || temperatura < minTempSinPelo)){
			minTempSinPelo = temperatura;
			flagSinPelo = 0;
		}

		switch(tipo){
			case "perro":
				acumTempPerro+= temperatura;
				contPerro++;
				break;
			case "gato":
				acumTempGato+= temperatura;
				contGato++;
				break;
			case "otro":
				acumTempOtro+= temperatura;
				contOtro++;
				nombreLastOtro = nombre;
				break;
		}

		switch(estado){
			case "enfermo":
				contEnfermos++;
				break;
			case "internado":
				contInternados++;
				break;
			case "adopcion":
				contAdopcion++;
				break;
		}

		acumPesos += peso;

		if(tipo == "gato" && (flagGatoSinPelos || peso < minPesoGSP)){
			minPesoGSP = peso;
			nombreGSPMinPeso = nombre;
			razaGSPMinPeso = raza;
			flagGatoSinPelos = 0;
		}



		seguir = prompt("Quiere ingresar otra mascota?: ")
	}while (seguir == 's');

	//------------------------------------------------------------------------------------------

	//punto a:
	if(contPerro == 0){
		console.log("a. No se ingresó ningún perro.");
	} else {
		console.log("a. El perro más pesado pesa: " + maxPesoPerro + " Kg. y se llama " + nombrePerroPesado);
	}

	//punto b:
	porcentajeEnfermos = contadorEnfermos * 100 / contadorMascotas;
	console.log("b. Porcentaje de animales enfermos: " + porcentajeEnfermos + "%");

	//punto c:
	if(contOtro == 0){
	console.log("c. No se ingresaron mascotas de tipo otro.");
	} else {
	console.log("c- La última mascota de tipo otro se llama " + nombreLastOtro);
	}

	//punto d: 
	if( flagSinPelo ){
		console.log("d. No se ingresaron mascotas sin pelo.");
	} else {
		console.log("d- La menor temperatura de un animal sin pelo es  " + minTempSinPelo + " °C.");
	}

	//punto e:
	if(contPerro != 0){
		promedioTempPerro = acumTempPerro / contPerro;
	}

	if(contGato != 0){
		promedioTempGato = acumTempGato / contGato;
	}

	if(contOtro != 0){
		promedioTempOtro = acumTempOtro / contOtro;
	}
	
	if(promedioTempOtro > promedioTempGato && promedioTempOtro > promedioTempPerro){
		maxTipoPromedioTemp = "otro";
	} else if (promedioTempGato > promedioTempOtro && promedioTempGato > promedioTempPerro){
		maxTipoPromedioTemp = "gato";
	} else {
		maxTipoPromedioTemp = "perro";
	}

	console.log("e. El mayor promedio de temperaturas es de las mascotas de tipo: " + maxTipoPromedioTemp);

	//punto f:
	porcentajePG = (contPerro + contGato) * 100 / contadorMascotas;
	console.log("f. Porcentaje de perros y gatos: " + porcentajePG + "%");

	//punto g:
	if(contEnfermos < contInternados && contEnfermos < contAdopcion){
		estadoMenorCantidad = "Enfermos";
	} else if(contInternados < contEnfermos && contInternados < contAdopcion){
		estadoMenorCantidad = "Internados";
	} else {
		estadoMenorCantidad = "Adopción";
	}

	console.log("g. El estado clínico con menor cantidad de mascotas es: " + estadoMenorCantidad);

	//punto h:
	promedioPeso = acumPesos / contadorMascotas; //Se supone que por lo menos una mascota se va a ingresar. Así que no estaría dividiendo por cero.
	console.log("h. El promedio de peso tomando todas las mascotas es " + promedioPeso + "Kg.");

	//punto i:
	if(flagGatoSinPelos != 0){
		console.log("i. No se ingresaron gatos sin pelo.");
	} else {
		console.log("i. Datos del gato sin pelo más liviano. Nombre: " + nombreGSPMinPeso + ". Raza: " + razaGSPMinPeso + ".");
	}




}
		