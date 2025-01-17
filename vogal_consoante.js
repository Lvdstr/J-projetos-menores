/**
 * 
 * @param {*} value 
 */
function verifyletra(value){
  var lista = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  if(isNaN(value) == false){
    console.log("o valor digitado é um numero\nessa função so aceita letras");
  } 
  if(lista.includes(value)){
    console.log(value + ": é uma consoante");
  }else{
    console.log(value + ": é uma vogal");
  }
}

verifyletra("a");