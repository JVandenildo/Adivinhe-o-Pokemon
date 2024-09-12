const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const campoDicas = document.getElementById("campoDicas");
const ultimato = document.getElementById("ultimato");
const btnPalpite = document.getElementById("btnPalpite");
let escolhido = {
	nome: "MissingNo.",
	numero: 0,
	tipo: ["Normal"],
	altura: 0,
	massa: 0,
	descricao: "Algo de errado, não está certo.",
	categoria: "Pokémon Perdido",
	lendario: true,
	local: "Memoria",
	sprite: "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
	link: "https://bulbapedia.bulbagarden.net/wiki/MissingNo.",
};
let palpites = 0;

/**
 * Gera um novo PKMN para começar um novo jogo.
 * @returns Retorna um novo PKMN.
 */
function novaTentativa() {
	resetar();
	const data = new Date();
	const ticket = Math.floor(Math.random(data) * primeiraGeracao.length);

	escolhido = primeiraGeracao[ticket];

	console.info(
		`Somente testes: ${escolhido.nome}`,
		"\n",
		`Avanço: ${primeiraGeracao.length}/151`,
		"\n",
		`${Math.round((primeiraGeracao.length / 151) * 100)}%`
	);

	campoDicas.insertAdjacentHTML(
		"beforeend",
		`<p>${escolhido.massa}kg e ${escolhido.altura}m de altura</p>`
	);

	return escolhido;
}

/**
 * Verifica se o palpite do usuário está correto.
 * @returns Retorna nada.
 */
function darPalpite() {
	const listaDiscas = [
		escolhido.tipo,
		escolhido.categoria,
		escolhido.local,
		escolhido.descricao,
		`<img src="${escolhido.sprite}" />`,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			alert("Calma lá! Tente algum nome!");

			break;

		case escolhido.nome.toLowerCase():
			ganhou(palpites + 1);

			break;

		default:
			if (palpites >= listaDiscas.length) {
				perdeu();

				break;
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

	campoPalpite.value = "";

	return;
}

function resetar() {
	campoPalpite.value = "";
	ultimosPalpites.innerHTML = "<h4>Últimos Palpites</h4>";
	campoDicas.innerHTML = "";
	ultimato.innerHTML = "";
	palpites = 0;
	btnPalpite.addEventListener("click", darPalpite);

	return true;
}

/**
 * Lida com o acerto do jogador.
 * @param {number} palpites quantidade de vezes que o jogador fez um palpite.
 * @returns nada.
 */
function ganhou(palpites) {
	btnPalpite.removeEventListener("click", darPalpite);

	if (palpites === 1) {
		ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpite!<br><a href="${escolhido.link}">Mais informações</a>.</p><a href="${escolhido.link}"><img src="${escolhido.sprite}" /></a>`;

		return;
	} else {
		ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpites!<br><a href="${escolhido.link}">Mais informações</a>.</p><a href="${escolhido.link}"><img src="${escolhido.sprite}" /></a>`;

		return;
	}
}
/**
 * Lida com a derrota do jogador.
 * @returns nada.
 */
function perdeu() {
	ultimato.innerHTML = `<p>Você errou! Era ${escolhido.nome}!<br><a href="${escolhido.link}">Mais informações.</a>.</p><a href="${escolhido.link}"><img src="${escolhido.sprite}" /></a>`;
	btnPalpite.removeEventListener("click", darPalpite);

	return;
}
