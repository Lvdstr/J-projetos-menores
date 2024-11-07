class animal{
	constructor(nome){
		this.nome = nome;
	}
	metodomemo(){
		console.log(`sla que barulho um ${this.nome} faz`);
	}
}
//herança em js
class humano extends animal{
	constructor(nome){
		super(nome);
		this.sla = "destro";
	}
}

var bixo = new animal("hidra");
//console.log(bixo.nome);
//bixo.metodomemo();

var se = new humano();
console.log(se.sla)