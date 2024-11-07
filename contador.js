/*
1-funcao:
	a primeira função é um contador que pede um 
	numero e depois realiza uma contagem de 1 até o
	numero informado
2-funcao:
	a segunda função reealiza a tabuada de um até 10 do numero informado
*/

function contador(value){
	if(value == 1){
		var number = prompt("digite um numero");
		for(let i = 0; i < number; i++){
			if(i % 2 != 0){
			console.log(i);
			}
		}
	}else if (value == 2){
		var number = prompt("digite um numero");
		for(let i = 1; i < 11; i++){
			console.log(`${number} * ${i} = ${number * i}`)
		}
	}
}

contador(1)