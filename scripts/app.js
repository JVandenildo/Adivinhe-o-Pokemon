const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const campoDicas = document.getElementById("campoDicas");
const ultimato = document.getElementById("ultimato");
let escolhido = {};
let palpites = 0;

function novaTentativa() {
	resetar();
	const data = new Date();
	const ticket = Math.floor(Math.random(data) * primeiraGeracao.length);

	escolhido = primeiraGeracao[ticket];
	// console.log(escolhido.nome, escolhido.massa);
	campoDicas.insertAdjacentHTML(
		"beforeend",
		`<p>${escolhido.massa}kg e ${escolhido.altura}m</p>`
	);

	return escolhido;
}

function darPalpite() {
	const listaDiscas = [
		escolhido.tipo,
		escolhido.categoria,
		escolhido.local,
		escolhido.descricao,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			alert("Calma lá! Tente algum nome!");

			return;

		case escolhido.nome.toLowerCase():
			return ganhou(palpites + 1);

		default:
			if (palpites >= listaDiscas.length) {
				return perdeu();
			} else {
				campoDicas.insertAdjacentHTML(
					"beforeend",
					`<p>${listaDiscas[palpites]}</p>`
				);
				ultimosPalpites.insertAdjacentHTML(
					"beforeend",
					`<p>${campoPalpite.value}</p>`
				);
				palpites += 1;
			}

			break;
	}
}

function resetar() {
	campoPalpite.value = "";
	ultimosPalpites.innerHTML = "<h4>Últimos Palpites</h4>";
	campoDicas.innerHTML = "";
	ultimato.innerHTML = "";

	return true;
}

/**
 * Lida com o acerto do jogador
 * @param {number} palpites quantidade de vezes que o jogador tentou um nome
 * @returns nada
 */
function ganhou(palpites) {
	document.getElementById("btnPalpite").onclick = null;

	if (palpites === 1) {
		ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpite!\nEra ${escolhido.nome}!</p><img src="${escolhido.sprite}" />`;

		return;
	} else {
		ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpites!\nEra ${escolhido.nome}!</p><img src="${escolhido.sprite}" />`;

		return;
	}
}
/**
 * Lida com a derrota do jogador
 * @returns nada
 */
function perdeu() {
	ultimato.innerHTML = `<p>Você errou! Era ${escolhido.nome}!</p><img src="${escolhido.sprite}" />`;
	document.getElementById("btnPalpite").onclick = null;

	return;
}
