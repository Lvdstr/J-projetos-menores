/**
 * converte valores para unidades de 
 * medida de tamanho
 * @param {*} value 
 * @param {*} medida 
 */
function convert(value, medida){
	let values = [
		parseFloat(value) * 100,
		parseFloat(value) / 100,
		parseFloat(value) / 1000
	]
	switch(medida){
		case "m":
			console.log(`${value} convertidos para metros da: ${values.at(0)} metros`);
			break
		case "c":
			console.log(`${value} convertidos para centímetros da: ${values.at(1)} centimetros`);
			break
		case "k":
			console.log(`${value} convertidos para quilômetros da: ${values.at(2)} quilômetros`);
			break
	};
}

convert(45000, "k");
