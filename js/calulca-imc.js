function mostra(frase) {

	document.write(frase);
}

function imc() {

	const nome = document.getElementById("nome").value;
	const peso = document.getElementById("peso").value;
	const altura = document.getElementById("altura").value;
	const resultado = document.getElementById("resultado");
	
	let grauDoPeso = "";


	var imc = Math.round(peso / (altura * altura));

		if (imc < 18.5) {
			grauDoPeso = ". Você está abaixo do Peso Ideal.";
		}if (imc >= 18.5 && imc <= 24.99) {
			grauDoPeso = ". Você está no Peso Ideal.";
		}if (imc >= 25 && imc <= 29.9) {
			grauDoPeso = " Você está com Sobrepeso";
		} if (imc > 30 && imc <= 34.9) {
			grauDoPeso = ". Você está com Obesidade Grau I.";
		} if (imc > 35 && imc <= 39.9) {
			grauDoPeso = ". Você está com Obesidade Grau II.";
		} else {
			grauDoPeso = ". Você está com Obesidade Mórbida.";
		}

		console.log (grauDoPeso);
		

		resultado.innerText = (nome + "o seu IMC é " + imc + grauDoPeso);
}

calcular.addEventListener('click', imc);