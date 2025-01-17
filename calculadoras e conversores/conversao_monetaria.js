/**
 * converte um valor de uma moeda para 
 * outra
 */
function converter(){
	console.log("Conversor de moedas");
	opcoes = `para qual opção deseja converter
o valor digitado:
1. dollar
2. euro
`;

	let escolha = prompt(opcoes).toLowerCase();
	let value = parseInt(prompt("agora digite o valor: "));
	
	if(isNaN(value) == false){
		valores = {
			'dollar': value * 5,
			'euro': value * 3
		};
		
		switch (escolha){
			case 'euro':
				resultado = `${value} reais, convertidos para ${escolha} da: ${valores.euro} euros`;
				console.log(resultado);
				break;
			case 'dollar':
				resultado = `${value} reais, convertidos para ${escolha} da: ${valores.dollar} dolares`
				console.log(resultado);
				break;
			}
	}else{
		console.log("freeza");
	}
}


converter();