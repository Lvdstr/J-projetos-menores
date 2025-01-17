/**
 * se o valor for par, conta todos os números pares antes dele, se impar conta com números impares
 * @param {*} value 
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


contador(1);