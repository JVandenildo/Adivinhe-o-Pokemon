const campoPalpite = document.getElementById("campoPalpite");
const ultimosPalpites = document.getElementById("ultimosPalpites");
const campoDicas = document.getElementById("campoDicas");
const ultimato = document.getElementById("ultimato");
const btnPalpite = document.getElementById("btnPalpite");
const nomesGeral = document.querySelector(".nomesGeral");
const opcoesNomes = document.querySelector(".opcoesNomes");
const checkPrimeira = document.querySelector("#checkPrimeira");
const checkSegunda = document.querySelector("#checkSegunda");
// const checkTerceira = document.querySelector("#checkTerceira");
// const checkQuarta = document.querySelector("#checkQuarta");

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
	if (
		!checkPrimeira.checked &&
		!checkSegunda.checked
		// && !checkTerceira.checked
		// && !checkQuarta.checked
	) {
		resetar();

		return alert("Escolha alguma geração antes!");
	} else {
		resetar();
		const data = new Date();
		const ticket = Math.floor(
			Math.random(data) *
				(checkPrimeira.checked * primeiraGeracao.length +
					checkSegunda.checked * segundaGeracao.length)
			//  + checkTerceira.checked * terceiraGeracao.length
			// + checkQuarta.checked * quartaGeracao.length)
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
	// if (checkTerceira.checked) {
	// 	numerosTerceira.forEach((x) => numerosDisponiveis.push(x));
	// }
	// if (checkQuarta.checked) {
	// 	numerosTerceira.forEach((x) => numerosDisponiveis.push(x));
	// }

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
		`<table><tr>
			<th>Tipo(s)</th>
			<td>${escolhido[0].tipo}</td>
		</tr></table>`,
		`<table><tr>
			<th>Obtenção</th>
			<td>${escolhido[0].obtencao}</td>
		</tr></table>`,
		`<table>
		<tr>
			<th>HP</th>
			<td>${escolhido[0].estatistica[0]}</td>
		</tr>
		<tr>
			<th>Ataque</th>
			<td>${escolhido[0].estatistica[1]}</td>
		</tr>
		<tr>
			<th>Defesa</th>
			<td>${escolhido[0].estatistica[2]}</td>
		</tr>
		<tr>
			<th>Ataque Especial</th>
			<td>${escolhido[0].estatistica[3]}</td>
		</tr>
		<tr>
			<th>Defesa Especial</th>
			<td>${escolhido[0].estatistica[4]}</td>
		</tr>
		<tr>
			<th>Velocidade</th>
			<td>${escolhido[0].estatistica[5]}</td>
		</table>`,
		`<table><tr>
			<th>Descrição</th>
			<td>${escolhido[0].descricao}</td>
		</tr></table>`,
		`<table><tr>
			<th>Categoria</th>
			<td>${escolhido[0].categoria}</td>
		</tr></table>`,
		`<table><tr>
			<th>Número</th>
			<td>${escolhido[0].numero}</td>
		</tr></table>`,
		`<table><tr>
			<td><img src="${escolhido[0].sprite}" /></td>
		</tr></table>`,
	];

	switch (campoPalpite.value.toLowerCase()) {
		case "":
			return alert("Calma lá! Tente algum nome!");

		case escolhido[0].nome.toLowerCase():
			campoPalpite.value = "";

			return ganhou(palpites + 1);

		default:
			campoPalpite.value = "";
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
				return (palpites += 1);
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
 * @param {string} Palpite nome do Pokémon que será o palpite do usuário.
 * @returns {void}
 */
function selecaoPalpite(palpite) {
	campoPalpite.value = palpite;

	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");

	return;
}

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
 * Lida com o acerto do jogador.
 * @param {number} palpites quantidade de vezes que o jogador fez um palpite.
 * @returns nada.
 */
function ganhou(palpites) {
	btnPalpite.removeEventListener("click", darPalpite);

	switch (palpites) {
		case 1:
			ultimato.innerHTML = `<p>Você acertou com ${palpites} palpite!<br><a href="${escolhido[0].link}" target="_blank">Mais informações</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${escolhido[0].sprite}" /></a>`;

			return true;
		default:
			ultimato.innerHTML = `<p>Você acertou com ${palpites} palpites!<br><a href="${escolhido[0].link}" target="_blank">Mais informações</a>.</p><a href="${escolhido[0].link}" target="_blank"><img src="${escolhido[0].sprite}" /></a>`;

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
