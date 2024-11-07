valores = [100, 500, 1000, 5000, 10000, 15000, 18000, 29000
];

const goku = {
	nome: "goku",
	raca: "saiyajin",
	idade: "40",
	forca: 100,
	velocidade: 300,
	poder: 8000,

	describe: function() {
		return `oi eu sou ${this.nome}`;
	},

	ssj: function() {
		this.force = this.forca * valores.at(0),
		this.speed = this.velocidade * valores.at(0),
		this.power = this.poder * valores.at(0),
		console.log(this.force)
	},
	
	ssj2: function() {
		this.force = this.forca * valores.at(0),
		this.speed = this.velocidade * valores.at(0),
		this.power = this.poder * valores.at(0),
		console.log(this.force)
	},
	
	ssj3: function() {
		this.force = this.forca * 1000,
		this.speed = this.velocidade * 1000,
		this.power = this.poder * 1000,
		console.log(this.force)
	},
	
	ssj4: function() {
		this.force = this.forca * 5000,
		this.speed = this.velocidade * 5000,
		this.power = this.poder * 5000,
		console.log(this.force)
	},

	ssj_god: function() {
		this.force = this.forca * 10000,
		this.speed = this.velocidade * 10000,
		this.power = this.poder * 10000,
		console.log(this.force)
	},

	ssj_blue: function() {
		this.force = this.forca * 15000,
		this.speed = this.velocidade * 15000,
		this.power = this.poder * 15000,
		console.log(this.force)
	},
	
	ui: function() {
		this.force = this.forca * 18000,
		this.speed = this.velocidade * 18000,
		this.power = this.power * 18000,
		console.log(this.force)
	},
	
	mui: function() {
		this.force = this.forca * 29000,
		this.speed = this.velocidade * 29000,
		this.power = this.poder * 29000,
		console.log(this.force)
	}
};

goku.ssj();