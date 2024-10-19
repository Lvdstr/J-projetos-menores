let indice_imc = {
	"peso_normal": 24.99,
	"pré_obesidade ": 29.99,
	"obesidade_1": 34.99,
	"obesidade_2": 39.99,
	"obesidade_3": 40.00
};

function result(altura, peso, imc){
	console.log(`
altura: ${altura}
peso: ${peso}
imc: ${imc.toFixed(2)}`)
};

function imc_verify(altura, peso, imc){
	let value = parseFloat(imc);
	if(value.toFixed(2) <= indice_imc.peso_normal){
		 result(altura, peso, imc);
	}
	else if(value.toFixed(2) >= indice_imc.pré_obesidade && value.toFixed(2) <= indice_imc.obesidade_1){
		result(altura, peso, imc);
	}
	else if(value.toFixed(2) > indice_imc.obesidade_1 && value.toFixed(2) <= indice_imc.obesidade_2){
		result(altura, peso, imc);
	}
	else if(value.toFixed(2) >= indice_imc.obesidade_2 && value.toFixed(2) <= indice_imc.obesidade_3){
		result(altura, peso, imc);
	}
	else if(value.toFixed(2) > indice_imc.obesidade_3){
		result(altura, peso, imc);
	}
};

function calcularIMC(altura, peso) {
  if (altura > 0 && peso > 0){
  	let imc = peso / (altura * altura);
  	imc_verify(altura, peso, imc);
  } 
  else {
    return 'Altura e peso devem ser valores maiores doq zero chefe.';
  }
};

var altura = parseFloat(prompt('Digite sua altura em metros:'));
var peso = parseFloat(prompt('Digite seu peso em quilogramas:'));

calcularIMC(altura, peso.toFixed(2));