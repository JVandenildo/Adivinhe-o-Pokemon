const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const campoDicas = document.getElementById("campoDicas");
const ultimato = document.getElementById("ultimato");
const btnPalpite = document.getElementById("btnPalpite");
const nomesGeral = document.querySelector(".nomesGeral");
const opcoesNomes = document.querySelector(".opcoesNomes");
const checkPrimeira = document.querySelector("#checkPrimeira");
const checkSegunda = document.querySelector("#checkSegunda");

let escolhido = {
	nome: "MissingNo.",
	numero: 0, // considerando a national dex
	tipo: ["Normal"],
	massa: 0, // em kg
	altura: 0, // em metros
	estatistica: {
		hp: 178,
		atq: 136,
		def: 11,
		atq_esp: 23,
		def_esp: 23,
		vel: 29,
	},
	descricao: "Algo de errado, não está certo.", // considerando a dex da primeira geração que apareceu
	categoria: "Pokémon Perdido",
	lendario: true,
	local: "Memoria",
	sprite: "https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
	link: "https://bulbapedia.bulbagarden.net/wiki/MissingNo.",
};
let palpites = 0;

/**
 * Gera um novo PKMN para começar um novo jogo.
 * @implements quando novas gerações forem adicionadas adicionar o verificadores de seleção para as novas gerações.
 * @returns Retorna um array contendo o objeto que será usado na nova sessão.
 */
function novaTentativa() {
	if (!checkPrimeira.checked && !checkSegunda.checked) {
		resetar();

		return alert("Escolha alguma geração antes!");
	} else {
		resetar();
		const data = new Date();
		const ticket = Math.floor(
			Math.random(data) *
				(checkPrimeira.checked * primeiraGeracao.length +
					checkSegunda.checked * segundaGeracao.length)
		);

		escolhido = pkmnDisponiveis.filter(
			(x) => x.numero == selecaoGeracao(ticket)
		);

		// console.info(
		// 	`Ticket: ${ticket}\nEscolhido: ${escolhido[0].nome}\nNumero: ${escolhido[0].numero}`,
		// 	`${segundaGeracao.length}/100`
		// );

		campoDicas.insertAdjacentHTML(
			"beforeend",
			`<p>${escolhido[0].massa} kg e ${escolhido[0].altura} m de altura</p>`
		);

		return escolhido;
	}
}

/**
 * @param {number} numero Número qualquer.
 * @returns {number} Número da PokéDex que representa o número aleatório dentro das gerações selecionadas.
 */
function selecaoGeracao(numero) {
	let numerosDisponiveis = [];

	if (checkPrimeira.checked) {
		numerosPrimeira.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkSegunda.checked) {
		numerosSegunda.forEach((x) => numerosDisponiveis.push(x));
	}

	return numerosDisponiveis[numero];
}

/**
 * Verifica se o palpite do usuário está correto.
 * @returns Retorna nada.
 */
function darPalpite() {
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	const listaDiscas = [
		escolhido[0].tipo,
		escolhido[0].categoria,
		`<b>Obtenção:</b> ${escolhido[0].local}`,
		`<b>HP:</b>        ${escolhido[0].estatistica[0]}<br>
		<b>Atq.:</b>       ${escolhido[0].estatistica[1]}<br>
		<b>Def.:</b>       ${escolhido[0].estatistica[2]}<br>
		<b>Atq. Esp.:</b>  ${escolhido[0].estatistica[3]}<br>
		<b>Def. Esp.:</b>  ${escolhido[0].estatistica[4]}<br>
		<b>Vel.:</b>       ${escolhido[0].estatistica[5]}<br>`, // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		escolhido[0].numero,
		escolhido[0].descricao,
		`<img src="${escolhido[0].sprite}" />`,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			alert("Calma lá! Tente algum nome!");

			break;

		case escolhido[0].nome.toLowerCase():
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

function procurarNomes() {
	switch (campoPalpite.value) {
		case "":
			opcoesNomes.classList.remove("opcoesNomesShow");
			nomesGeral.classList.remove("nomesGeralShow");

			break;
		default:
			opcoesNomes.innerHTML = "";
			opcoesNomes.classList.add("opcoesNomesShow");
			nomesGeral.classList.add("nomesGeralShow");

			const nomes = nomesDisponiveis.filter(
				/**
				 * @param {string} nome
				 * @returns {string}
				 */
				(nome) => nome.toLowerCase().includes(campoPalpite.value.toLowerCase())
			);

			for (let i in nomes) {
				opcoesNomes.insertAdjacentHTML(
					"beforeend",
					`<div class="nomePalpite" onclick="selecaoPalpite('${nomes[i]}')">${nomes[i]}</div>`
				);
			}

			break;
	}
}

/**
 * @param {string} Palpite escrito.
 * @returns {void}
 */
function selecaoPalpite(palpite) {
	campoPalpite.value = palpite;

	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	return console.log(palpite);
}

function resetar() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
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

	switch (palpites) {
		case 1:
			ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpite!<br><a href="${escolhido[0].link}" target="_blank">Mais informações</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${escolhido[0].sprite}" /></a>`;

			return true;
		default:
			ultimato.innerHTML = `<p>Você acertou depois de ${palpites} palpites!<br><a href="${escolhido[0].link}" target="_blank">Mais informações</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${escolhido[0].sprite}" /></a>`;

			return true;
	}
}
/**
 * Lida com a derrota do jogador.
 * @returns nada.
 */
function perdeu() {
	btnPalpite.removeEventListener("click", darPalpite);
	ultimato.innerHTML = `<p>Você errou! Era ${escolhido[0].nome}!<br><a href="${escolhido[0].link}" target="_blank">Mais informações.</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${escolhido[0].sprite}" /></a>`;

	return false;
}
