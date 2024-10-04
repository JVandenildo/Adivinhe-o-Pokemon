const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const dicas = document.getElementById("dicas");
const ultimato = document.getElementById("ultimato");
const btnTentativa = document.getElementById("btnTentativa");
const btnPalpite = document.getElementById("btnPalpite");
const btnDesistencia = document.querySelector("#btnDesistencia");
const nomesGeral = document.querySelector(".nomesGeral");
const opcoesNomes = document.querySelector(".opcoesNomes");
const checkPrimeira = document.querySelector("#checkPrimeira");
const checkSegunda = document.querySelector("#checkSegunda");
const checkTerceira = document.querySelector("#checkTerceira");
const checkQuarta = document.querySelector("#checkQuarta");
const checkQuinta = document.querySelector("#checkQuinta");
// const checkSexta = document.querySelector("#checkSexta");
// const checkSetima = document.querySelector("#checkSetima");
// const checkOitava = document.querySelector("#checkOitava");
// const checkNona = document.querySelector("#checkNona");

let escolhido = {
	nome: "MissingNo.",
	numero: 0, // considerando a national dex
	tipo: ["Normal"],
	massa: 1590.8, // em kg
	altura: 3.3, // em metros
	pegada: "https://archives.bulbagarden.net/media/upload/8/84/FUnknown.png",
	estatistica: {
		ps: 178,
		atq: 136,
		def: 11,
		atq_esp: 23,
		def_esp: 23,
		vel: 29,
	},
	descricao: "???", // considerando a dex da primeira geração que apareceu
	categoria: "Pokémon ???",
	obtencao: "Glitch",
	estagio: 1,
	geracao: 1, // considerando em qual geração foi introduzido
	variante: false,
	lendario: true,
	sprite: [
		"https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
		"https://archives.bulbagarden.net/media/upload/0/03/Missingno_Y.png",
	],
	link: "https://bulbapedia.bulbagarden.net/wiki/MissingNo",
};
let palpites = 0;

function desistir() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	btnPalpite.removeEventListener("click", palpitar);
	btnDesistencia.removeEventListener("click", desistir);
	btnDesistencia.style.cursor = "not-allowed";
	btnPalpite.removeEventListener("click", palpitar);
	btnPalpite.style.cursor = "not-allowed";

	if (palpites === 1) {
		ultimato.innerHTML = `<p>Você desistiu com ${palpites} palpite! Era ${
			escolhido[0].nome
		}!<br><a href="${
			escolhido[0].link
		}" target="_blank">Mais informações sobre ${
			escolhido[0].nome
		}</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${
			escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
		}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

		return false;
	} else {
		ultimato.innerHTML = `<p>Você desistiu com ${palpites} palpites! Era ${
			escolhido[0].nome
		}!<br><a href="${
			escolhido[0].link
		}" target="_blank">Mais informações sobre ${
			escolhido[0].nome
		}</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${
			escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
		}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

		return false;
	}
}

/**
 * Gera um novo PKMN para começar um novo jogo.
 * @implements quando novas gerações forem adicionadas adicionar o verificadores de seleção para as novas gerações.
 * @returns Retorna um array contendo o objeto que será usado na nova sessão.
 */
function novaTentativa() {
	if (
		!checkPrimeira.checked &&
		!checkSegunda.checked &&
		!checkTerceira.checked &&
		!checkQuarta.checked &&
		!checkQuinta.checked
		// && checkSexta.checked
		// && checkSetima.checked
		// && checkOitava.checked
		// && checkNona.checked
	) {
		return alert("Escolha alguma geração antes!");
	} else {
		resetar();
		btnPalpite.addEventListener("click", palpitar);
		btnPalpite.style.cursor = "pointer";
		btnDesistencia.addEventListener("click", desistir);
		btnDesistencia.style.cursor = "pointer";

		const data = new Date();
		const ticket = Math.floor(
			Math.random(data) *
				(checkPrimeira.checked * primeiraGeracao.length +
					checkSegunda.checked * segundaGeracao.length +
					checkTerceira.checked * terceiraGeracao.length +
					checkQuarta.checked * quartaGeracao.length +
					checkQuinta.checked * quintaGeracao.length)
		);
		escolhido = pkmnDisponiveis.filter(
			(x) => x.numero === selecaoGeracao(ticket)
		);

		// console.info(`Ticket: ${ticket}\n${escolhido[0].nome}`);

		dicas.insertAdjacentHTML(
			"beforeend",
			`<table id="tabelaDicas">
				<tr>
					<th scope="col">Massa</th>
					<th scope="col">Altura</th>
				</tr>
				<tr>
					<td style="text-align:center !important">${escolhido[0].massa} kg</td>
					<td style="text-align:center !important">${escolhido[0].altura} m</td>
				</tr>
			</table>`
		);

		return escolhido;
	}
}

/**
 * @param {number} numero Número aleatório.
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
	if (checkTerceira.checked) {
		numerosTerceira.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkQuarta.checked) {
		numerosQuarta.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkQuinta.checked) {
		numerosQuinta.forEach((x) => numerosDisponiveis.push(x));
	}
	// if (checkSexta.checked) {
	// 	numerosSexta.forEach((x) => numerosDisponiveis.push(x));
	// }
	// if (checkSetima.checked) {
	// 	numerosSetima.forEach((x) => numerosDisponiveis.push(x));
	// }
	// if (checkOitava.checked) {
	// 	numerosOitava.forEach((x) => numerosDisponiveis.push(x));
	// }
	// if (checkNona.checked) {
	// 	numerosNona.forEach((x) => numerosDisponiveis.push(x));
	// }

	return numerosDisponiveis[numero];
}

/**
 * Verifica se o palpite do usuário está correto.
 * @returns {boolean} Retorna nada.
 */
function palpitar() {
	const tabelaDicas = document.querySelector("#tabelaDicas");
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	const listaDiscas = [
		/* primeira dica */
		`<tr><th scope="col">Pegada</th></tr>
		<tr><td class="pegada"><img src="${escolhido[0].pegada}" alt="Dica pegada" /></td></tr>`,
		/* segunda dica */
		`<tr><th scope="col">Tipo(s)</th></tr>
		<tr style="text-align:center !important"><td>${escolhido[0].tipo}</td></tr>`,
		/* terceira dica */
		`<tr><th scope="col">Obtenção</th></tr>
		<tr><td>${escolhido[0].obtencao}</td></tr>`,
		/* quarta diga */
		`<tr><th scope="col" colspan="2">Estatísticas</th></tr>

		<tr><th scope="row" style="text-align:left !important">PS</th>
		<td>${escolhido[0].estatistica.ps}</td></tr>
			
		<tr><th scope="row" style="text-align:left !important">Ataque</th>
		<td>${escolhido[0].estatistica.atq}</td></tr>
			
		<tr><th scope="row" style="text-align:left !important">Defesa</th>
		<td>${escolhido[0].estatistica.def}</td></tr>
		
		<tr><th scope="row" style="text-align:left !important">Ataque Especial</th>
		<td>${escolhido[0].estatistica.atq_esp}</td></tr>
		
		<tr><th scope="row" style="text-align:left !important">Defesa Especial</th>
		<td>${escolhido[0].estatistica.def_esp}</td></tr>
		
		<tr><th scope="row" style="text-align:left !important">Velocidade</th>
		<td>${escolhido[0].estatistica.vel}</td></tr>`,
		/* quinta dica */
		`<tr><th scope="col">Descrição</th></tr>
			<tr><td>${escolhido[0].descricao}</td></tr>`,
		/* sexta dica */
		`<tr><th scope="col">Categoria</th></tr>
		<tr><td>${escolhido[0].categoria}</td></tr>`,
		/* sétima dica */
		`<tr><th scope="col">Número</th></tr>
		<tr><td>${Math.floor(escolhido[0].numero)}</td></tr>`,
		/* oitava e última dica */
		`<tr><th scope="col">Silhueta</th></tr>
		<tr><td><img src="${
			escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
		}" alt="Dica silhueta" /></td></tr>`,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			/* caso não tenha palpite */

			alert("Calma lá! Tente algum nome!");

			return false;

		case escolhido[0].nome.toLowerCase():
			/* caso acerte o nome do Pokémon */

			palpites = palpites + 1;
			campoPalpite.value = "";
			btnDesistencia.removeEventListener("click", desistir);
			btnDesistencia.style.cursor = "not-allowed";
			btnPalpite.removeEventListener("click", palpitar);
			btnPalpite.style.cursor = "not-allowed";

			if (palpites === 1) {
				ultimato.innerHTML = `<p>Você acertou com ${palpites} palpite!<br><a href="${
					escolhido[0].link
				}" target="_blank">Mais informações sobre ${
					escolhido[0].nome
				}</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${
					escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
				}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

				return true;
			} else {
				ultimato.innerHTML = `<p>Você acertou com ${palpites} palpites!<br><a href="${
					escolhido[0].link
				}" target="_blank">Mais informações sobre ${
					escolhido[0].nome
				}</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${
					escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
				}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

				return true;
			}

		default:
			/* caso erre o nome do Pokémon */
			if (palpites >= listaDiscas.length) {
				/* caso as dicas esgotem */

				campoPalpite.value = "";
				btnDesistencia.removeEventListener("click", desistir);
				btnDesistencia.style.cursor = "not-allowed";
				btnPalpite.removeEventListener("click", palpitar);
				btnPalpite.style.cursor = "not-allowed";

				ultimato.innerHTML = `<p>Você errou! Era ${
					escolhido[0].nome
				}!<br><a href="${
					escolhido[0].link
				}" target="_blank">Mais informações sobre ${
					escolhido[0].nome
				}</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${
					escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
				}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

				return false;
			} else {
				/* ainda existem dicas */

				tabelaDicas.insertAdjacentHTML("beforeend", `${listaDiscas[palpites]}`);
				ultimosPalpites.insertAdjacentHTML(
					"beforeend",
					`<p>${campoPalpite.value}</p>`
				);
				campoPalpite.value = "";
				palpites = palpites + 1;

				return false;
			}
	}
}

/**
 * Função para auxiliar o usuário no palpite, filtrando os nomes dos Pokémon
 * @returns {void}
 */
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
 * @param {string} palpite nome do Pokémon que será o palpite do usuário.
 * @returns {string}
 */
function selecaoPalpite(palpite) {
	campoPalpite.value = palpite;

	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	return palpite;
}

/**
 * Coloca propriedades relevantes para os valores iniciais.
 * @returns {boolean} nada.
 */
function resetar() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	ultimosPalpites.innerHTML = "<h4>Últimos Palpites</h4>";
	dicas.innerHTML = "";
	ultimato.innerHTML = "";
	palpites = 0;

	return true;
}

/**
 * @param {[]} array
 * @returns {number} Retorna um índice aleatório do parâmetro.
 */
function indiceAleatorio(array) {
	const data = new Date();

	return Math.floor(Math.random(data) * array.length);
}
