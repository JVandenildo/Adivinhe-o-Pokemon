const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const campoDicas = document.getElementById("campoDicas");
const ultimato = document.getElementById("ultimato");
const btnPalpite = document.getElementById("btnPalpite");
const nomesGeral = document.querySelector(".nomesGeral");
const opcoesNomes = document.querySelector(".opcoesNomes");
const checkPrimeira = document.querySelector("#checkPrimeira");
const checkSegunda = document.querySelector("#checkSegunda");
const checkTerceira = document.querySelector("#checkTerceira");
const checkQuarta = document.querySelector("#checkQuarta");

let escolhido = {
	nome: "MissingNo.",
	numero: 0, // considerando a national dex
	tipo: ["Normal"],
	massa: 1590.8, // em kg
	altura: 3.3, // em metros
	estatistica: {
		ps: 178,
		atq: 136,
		def: 11,
		atq_esp: 23,
		def_esp: 23,
		vel: 29,
	},

	descricao: "   ", // considerando a dex da primeira geração que apareceu
	categoria: "Pokémon ???",
	lendario: true,
	obtencao: "Glitch",
	sprite: [
		"https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
		"https://archives.bulbagarden.net/media/upload/0/03/Missingno_Y.png",
	],
	link: "https://bulbapedia.bulbagarden.net/wiki/MissingNo.",
};
let palpites = 0;

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
		!checkQuarta.checked
	) {
		resetar();

		return alert("Escolha alguma geração antes!");
	} else {
		resetar();

		const data = new Date();
		const ticket = Math.floor(
			Math.random(data) *
				(checkPrimeira.checked * primeiraGeracao.length +
					checkSegunda.checked * segundaGeracao.length +
					checkTerceira.checked * terceiraGeracao.length +
					checkQuarta.checked * quartaGeracao.length)
		);
		escolhido = pkmnDisponiveis.filter(
			(x) => x.numero == selecaoGeracao(ticket)
		);

		// console.info(`Ticket: ${ticket}\n${escolhido[0].nome}`);

		campoDicas.insertAdjacentHTML(
			"beforeend",
			`<p>${escolhido[0].massa} kg e ${escolhido[0].altura} m de altura</p>`
		);

		btnPalpite.addEventListener("click", darPalpite);

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
	if (checkTerceira.checked) {
		numerosTerceira.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkQuarta.checked) {
		numerosQuarta.forEach((x) => numerosDisponiveis.push(x));
	}

	return numerosDisponiveis[numero];
}

/**
 * Verifica se o palpite do usuário está correto.
 * @returns {boolean} Retorna nada.
 */
function darPalpite() {
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	const listaDiscas = [
		// primeira dica //
		`<table><tr>
			<th>Tipo(s)</th>
			<td>${escolhido[0].tipo}</td>
		</tr></table>`,
		// segunda dica //
		`<table><tr>
			<th>Obtenção</th>
			<td>${escolhido[0].obtencao}</td>
		</tr></table>`,
		// terceira diga //
		`<table>
		<tr>
			<th>HP</th>
			<td>${escolhido[0].estatistica.ps}</td>
		</tr>
		<tr>
			<th>Ataque</th>
			<td>${escolhido[0].estatistica.atq}</td>
		</tr>
		<tr>
			<th>Defesa</th>
			<td>${escolhido[0].estatistica.def}</td>
		</tr>
		<tr>
			<th>Ataque Especial</th>
			<td>${escolhido[0].estatistica.atq_esp}</td>
		</tr>
		<tr>
			<th>Defesa Especial</th>
			<td>${escolhido[0].estatistica.def_esp}</td>
		</tr>
		<tr>
			<th>Velocidade</th>
			<td>${escolhido[0].estatistica.vel}</td>
		</table>`,
		// quarta dica //
		`<table><tr>
			<th>Descrição</th>
			<td>${escolhido[0].descricao}</td>
		</tr></table>`,
		// quinta dica //
		`<table><tr>
			<th>Categoria</th>
			<td>${escolhido[0].categoria}</td>
		</tr></table>`,
		// sexta dica //
		`<table><tr>
			<th>Número</th>
			<td>${Math.floor(escolhido[0].numero)}</td>
		</tr></table>`,
		// sétima e última dica //
		`<table><tr>
			<td><img src="${
				escolhido[0].sprite[numeroAleatorio(escolhido[0].sprite)]
			}" alt="Dica silhueta" /></td>
		</tr></table>`,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			// caso não tenha palpite
			alert("Calma lá! Tente algum nome!");

			return false;

		case escolhido[0].nome.toLowerCase():
			// caso acerte o nome do Pokémon
			palpites = palpites + 1;
			campoPalpite.value = "";
			btnPalpite.removeEventListener("click", darPalpite);

			if (palpites === 1) {
				ultimato.innerHTML = `<p>Você acertou com ${palpites} palpite!<br><a href="${
					escolhido[0].link
				}" target="_blank">Mais informações</a>.</p><a href="${
					escolhido[0].link
				}" target="_blank"><img src="${
					escolhido[0].sprite[numeroAleatorio(escolhido[0].sprite)]
				}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

				return true;
			} else {
				ultimato.innerHTML = `<p>Você acertou com ${palpites} palpites!<br><a href="${
					escolhido[0].link
				}" target="_blank">Mais informações</a>.</p><a href="${
					escolhido[0].link
				}" target="_blank"><img src="${
					escolhido[0].sprite[numeroAleatorio(escolhido[0].sprite)]
				}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

				return true;
			}

		default:
			// caso erre o nome do Pokémon
			if (palpites >= listaDiscas.length) {
				// este primeiro é caso perca
				campoPalpite.value = "";

				btnPalpite.removeEventListener("click", darPalpite);
				ultimato.innerHTML = `<p>Você errou! Era ${
					escolhido[0].nome
				}!<br><a href="${
					escolhido[0].link
				}" target="_blank">Mais informações</a>.</p><a href="${
					escolhido[0].link
				}" target="_blank"><img src="${
					escolhido[0].sprite[numeroAleatorio(escolhido[0].sprite)]
				}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

				return false;
			} else {
				// este segundo o jogo continua
				campoDicas.insertAdjacentHTML(
					"beforeend",
					`<p>${listaDiscas[palpites]}</p>`
				);
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
 * Deixa o jogo como deveria estar no começo.
 * @returns nada.
 */
function resetar() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	ultimosPalpites.innerHTML = "<h4>Últimos Palpites</h4>";
	campoDicas.innerHTML = "";
	ultimato.innerHTML = "";
	palpites = 0;

	return true;
}

/**
 * @param {[]} array
 * @returns Retorna um índice aleatório do parâmetro.
 */
function numeroAleatorio(array) {
	const data = new Date();

	return Math.floor(Math.random(data) * array.length);
}
