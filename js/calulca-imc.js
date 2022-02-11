function mostra(frase) {

	document.write(frase);
}

var nome = document.querySelector("nome");
var peso = document.querySelector("peso");
var altura = document.querySelector("altura");
var imc = peso / (altura * altura);


if (imc < 18.5) {
	mostra(nome + ", O seu IMC é" + imc + ". E você está abaixo do Peso Ideal.")
	break;
}

if (imc >= 18.5 && imc <= 24.99) {
	mostra(nome + ", O seu IMC é" + imc + ". E você está no Peso Ideal.");
	break;
}

if (imc >= 25 && imc <= 29.9) {
	mostra(nome + ", O seu IMC é" + imc + ". E você está com Sobrepeso.");
	break;
}

if (imc >30 && imc <= 34.9){
	mostra(nome + ", O seu IMC é" + imc + ". E você está com Obesidade Grau I.");
	break;
}

if (imc >35 && imc <= 39.9){
	mostra(nome + ", O seu IMC é" + imc + ". E você está com Obesidade Grau II.");
	break;
}

if (imc >= 40){
	mostra(nome + ", O seu IMC é" + imc + ". E você está com Obesidade Mórbida.");
	break;
}