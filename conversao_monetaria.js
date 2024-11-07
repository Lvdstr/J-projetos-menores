console.log("Conversor de moedas");
let escolha = prompt("Primeiro, deseja converter dólar ou real?").toLowerCase();

if (!isNaN(escolha)) {
  console.log("Não vai não em");
} else {
  if (escolha === "dolar") {
    let dolar = parseInt(prompt("Digite o valor para converter: "));
    let conversao = dolar * 5;
    console.log(`${dolar} dólar(es) convertido(s) para real dá ${conversao} real(ais)`);
    
  } else if (escolha === "real") {
    let real = parseInt(prompt("Digite o valor para converter: "));
    let conversao = real / 5;
    console.log(`${real} real(ais) convertido(s) para dólar dá ${conversao} dólar(es)`);
  }
}