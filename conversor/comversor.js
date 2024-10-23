function convert(value, medida){
	let values = [
		parseFloat(value) * 100,
		parseFloat(value) / 100,
		parseFloat(value) / 1000
	]
	switch(medida){
		case "m":
			console.log(`${value} convertidos para metros da: ${values.at(0)}`);
			break
		case "c":
			console.log(`${value} convertidos para centímetros da: ${values.at(1)}`);
			break
		case "k":
			console.log(`${value} convertidos para quilômetros da: ${values.at(2)}`);
			break
	};
}

convert(45000, "k");