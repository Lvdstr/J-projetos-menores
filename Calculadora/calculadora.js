function calczinha(value, value2, operator){
	let operations = {
		"+": value + value2,
		"-": value - value2,
		"*": value * value2,
		"/": value / value2,
		"%": value % value2
	};
	
	console.log(operations[operator]);
}

var number1 = Number(prompt("digite o primeiro numero: "));
var number2 = Number(prompt("digite o segundo numero: "));
var operator = prompt("agora escolha o operador: ");

verificar_numero(number1, number2);

//verifica se os numeros digitados são do 
//tipo int
function verificar_numero(number1, number2){
    if (isNaN(number1) == true && isNaN(number2) == true) {
        console.log("os dois valores digitados não são números ");
    }
    else if (isNaN(number1) == true || isNaN(number2) == true) {
        console.log("um dos valores digitados não é um número ");
    }
    else{
    	verificar_operador(operator)
    }
}

//verifica se o operador digitado é valido
function verificar_operador(operator){
	caracteres_validos = [
		"+", "-", "*", "/", "%"
	]
	if (caracteres_validos.includes(operator)){
	    calczinha(number1, number2, operator)
	}
	else{
	    console.log("O operador digitado não é válido");
	}
}