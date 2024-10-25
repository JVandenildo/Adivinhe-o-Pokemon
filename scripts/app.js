const campoPalpite = document.getElementById("campoPalpite");
const palpitesErrados = document.getElementById("palpitesErrados");
const dicas = document.getElementById("dicas");
const ultimato = document.getElementById("ultimato");
const btnTentativa = document.getElementById("btnTentativa");
const btnPalpite = document.getElementById("btnPalpite");
const btnDesistencia = document.querySelector("#btnDesistencia");
const nomesGeral = document.querySelector(".nomesGeral");
const opcoesNomes = document.querySelector(".opcoesNomes");
const checkGeracoes = document.querySelectorAll("input[name=geracao]");
const checkPrimeira = document.querySelector("#checkPrimeira");
const checkSegunda = document.querySelector("#checkSegunda");
const checkTerceira = document.querySelector("#checkTerceira");
const checkQuarta = document.querySelector("#checkQuarta");
const checkQuinta = document.querySelector("#checkQuinta");
const checkSexta = document.querySelector("#checkSexta");
const checkSetima = document.querySelector("#checkSetima");
const checkOitava = document.querySelector("#checkOitava");
const checkNona = document.querySelector("#checkNona");
const dificuldadeRadio = document.querySelectorAll("input[name=dificuldades]");

let dificuldade = "Fácil";

let escolhido = {
	nome: "MissingNo.",
	codinome: "MissingNumber",
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
		"https://archives.bulbagarden.net/media/upload/8/86/Ketsuban.png",
		"https://archives.bulbagarden.net/media/upload/9/98/Missingno_RB.png",
		"https://archives.bulbagarden.net/media/upload/0/03/Missingno_Y.png",
	],
	link: "https://bulbapedia.bulbagarden.net/wiki/MissingNo",
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
		!checkQuarta.checked &&
		!checkQuinta.checked &&
		!checkSexta.checked &&
		!checkSetima.checked &&
		!checkOitava.checked &&
		!checkNona.checked
	) {
		return alert("Escolha alguma geração antes!");
	} else {
		reset("soft");
		btnPalpite.addEventListener("click", palpitar);
		btnPalpite.style.cursor = "pointer";
		btnDesistencia.addEventListener("click", desistir);
		btnDesistencia.style.cursor = "pointer";
		document.addEventListener("keydown", gerenciarEnter);

		dificuldade = dificuldadeSecionada();

		const data = new Date();
		const ticket = Math.floor(
			Math.random(data) *
				(checkPrimeira.checked * primeiraGeracao.length +
					checkSegunda.checked * segundaGeracao.length +
					checkTerceira.checked * terceiraGeracao.length +
					checkQuarta.checked * quartaGeracao.length +
					checkQuinta.checked * quintaGeracao.length +
					checkSexta.checked * sextaGeracao.length +
					checkSetima.checked * setimaGeracao.length +
					checkOitava.checked * oitavaGeracao.length +
					checkNona.checked * nonaGeracao.length)
		);
		escolhido = pkmnDisponiveis.filter(
			(x) => x.numero === selecaoGeracao(ticket)
		);

		switch (dificuldade) {
			case "Fácil":
				dicas.insertAdjacentHTML(
					"beforeend",
					`<table style="margin: 0px auto !important;">
						<tr><th scope="col" colspan="1">Silhueta</th></tr>
						<tr><td id="dicaSilhueta"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Silhueta misteriosa" alt="Dica silhueta" /></td></tr>
					</table>`
				);

				// console.info(`Ticket: ${ticket}`, `${escolhido[0].nome}`, dificuldade);

				return escolhido;
			case "Média":
				escolhido[0].forma === true ? (escolhido[0].codinome = "") : false;

				dicas.insertAdjacentHTML(
					"beforeend",
					`<table style="margin: 0px auto !important;">
						<tr><th scope="col" colspan="1">Tipo(s)</th></tr>
						<tr style="text-align:center !important"><td>${escolhido[0].tipo}</td></tr>
					</table>`
				);
				// console.info(`Ticket: ${ticket}`, `${escolhido[0].nome}`, dificuldade);

				return escolhido;
			case "Difícil":
				dicas.insertAdjacentHTML(
					"beforeend",
					`<table style="margin: 0px auto !important;">
								<tr>
									<th scope="col" colspan="1">Massa</th>
									<th scope="col" colspan="1">Altura</th>
								</tr>
								<tr>
									<td style="text-align:center !important">${escolhido[0].massa} kg</td>
									<td style="text-align:center !important">${escolhido[0].altura} m</td>
								</tr>
							</table>`
				);
				// console.info(`Ticket: ${ticket}`, `${escolhido[0].nome}`, dificuldade);

				return escolhido;
		}
	}
}

/**
 * Verifica se o palpite do usuário está correto.
 * @returns {boolean} Retorna nada.
 */
function palpitar() {
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	console.log(dificuldade);

	switch (dificuldade) {
		case "Fácil":
			const dicasFacil = [
				/* primeira dica */
				`<table>
					<tr><th scope="col" colspan="1">Tipo(s)</th></tr>
					<tr style="text-align:center !important"><td>${escolhido[0].tipo}</td></tr>
				</table>`,
				/* segunda dica */
				`<table>
					<tr><th scope="col" colspan="1">Descrição</th></tr>
					<tr><td style="hyphens: auto;">${escolhido[0].descricao}</td></tr>
				</table>`,
			];

			switch (campoPalpite.value.toLowerCase()) {
				case "":
					/* caso não tenha palpite */

					alert("Calma lá! Tente algum nome!");

					return false;

				case escolhido[0].nome.toLowerCase():
				case escolhido[0].codinome.toLowerCase():
					/* caso acerte o nome do Pokémon */

					palpites = palpites + 1;
					campoPalpite.value = "";
					btnDesistencia.removeEventListener("click", desistir);
					btnDesistencia.style.cursor = "not-allowed";
					btnPalpite.removeEventListener("click", palpitar);
					btnPalpite.style.cursor = "not-allowed";
					document.removeEventListener("keydown", gerenciarEnter);

					if (palpites === 1) {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${
							escolhido[0].nome
						}" href="${escolhido[0].link}" target="_blank">${
							escolhido[0].nome
						}</a> com ${palpites} palpite!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					} else {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${
							escolhido[0].nome
						}" href="${escolhido[0].link}" target="_blank">${
							escolhido[0].nome
						}</a> com ${palpites} palpites!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					}

				default:
					/* caso erre o nome do Pokémon */
					if (palpites >= dicasFacil.length) {
						/* caso as dicas esgotem */

						campoPalpite.value = "";
						btnDesistencia.removeEventListener("click", desistir);
						btnDesistencia.style.cursor = "not-allowed";
						btnPalpite.removeEventListener("click", palpitar);
						btnPalpite.style.cursor = "not-allowed";
						document.removeEventListener("keydown", gerenciarEnter);

						ultimato.innerHTML = `<p>Você errou!<br />
						Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${
							escolhido[0].link
						}" target="_blank">${escolhido[0].nome}</a>!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return false;
					} else {
						/* ainda existem dicas */

						dicas.insertAdjacentHTML("beforeend", `${dicasFacil[palpites]}`);
						palpitesErrados.insertAdjacentHTML(
							"beforeend",
							`<p>${campoPalpite.value}</p>`
						);

						campoPalpite.value = "";
						palpites = palpites + 1;

						return false;
					}
			}

			break;
		case "Média":
			const dicasMedio = [
				/* primeira dica */
				`<table>
					<tr><th scope="col" colspan="1">Categoria</th></tr>
					<tr><td>${escolhido[0].categoria}</td></tr>
				</table>`,
				/* segunda dica */
				`<table>
				<tr>
					<th scope="col" colspan="1">Massa</th>
					<th scope="col" colspan="1">Altura</th>
				</tr>
				<tr>
					<td style="text-align:center !important">${escolhido[0].massa} kg</td>
					<td style="text-align:center !important">${escolhido[0].altura} m</td>
				</tr>
				</table>`,
				/* terceira dica */
				`<table>
					<tr><th scope="col" colspan="1">Descrição</th></tr>
					<tr><td style="hyphens: auto;">${escolhido[0].descricao}</td></tr>
				</table>`,
				/* quarta e última dica */
				`<table>
					<tr><th scope="col" colspan="1">Silhueta</th></tr>
					<tr><td id="dicaSilhueta"><img loading="eager" src="${
						escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
					}" title="Silhueta misteriosa" alt="Dica silhueta" /></td></tr>
				</table>`,
			];

			switch (campoPalpite.value.toLowerCase()) {
				case "":
					/* caso não tenha palpite */

					alert("Calma lá! Tente algum nome!");

					return false;

				case escolhido[0].nome.toLowerCase():
				case escolhido[0].codinome.toLowerCase():
					/* caso acerte o nome do Pokémon */

					palpites = palpites + 1;
					campoPalpite.value = "";
					btnDesistencia.removeEventListener("click", desistir);
					btnDesistencia.style.cursor = "not-allowed";
					btnPalpite.removeEventListener("click", palpitar);
					btnPalpite.style.cursor = "not-allowed";
					document.removeEventListener("keydown", gerenciarEnter);

					if (palpites === 1) {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${
							escolhido[0].nome
						}" href="${escolhido[0].link}" target="_blank">${
							escolhido[0].nome
						}</a> com ${palpites} palpite!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					} else {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${
							escolhido[0].nome
						}" href="${escolhido[0].link}" target="_blank">${
							escolhido[0].nome
						}</a> com ${palpites} palpites!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					}

				default:
					/* caso erre o nome do Pokémon */
					if (palpites >= dicasMedio.length) {
						/* caso as dicas esgotem */

						campoPalpite.value = "";
						btnDesistencia.removeEventListener("click", desistir);
						btnDesistencia.style.cursor = "not-allowed";
						btnPalpite.removeEventListener("click", palpitar);
						btnPalpite.style.cursor = "not-allowed";
						document.removeEventListener("keydown", gerenciarEnter);

						ultimato.innerHTML = `<p>Você errou!<br />
						Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${
							escolhido[0].link
						}" target="_blank">${escolhido[0].nome}</a>!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return false;
					} else {
						/* ainda existem dicas */

						dicas.insertAdjacentHTML("beforeend", `${dicasMedio[palpites]}`);
						palpitesErrados.insertAdjacentHTML(
							"beforeend",
							`<p>${campoPalpite.value}</p>`
						);

						campoPalpite.value = "";
						palpites = palpites + 1;

						return false;
					}
			}

		case "Difícil":
			const dicasDificil = [
				/* primeira dica */
				`<table>
					<tr><th scope="col" colspan="1">Tipo(s)</th></tr>
					<tr style="text-align:center !important"><td>${escolhido[0].tipo}</td></tr>
				</table>`,
				/* segunda dica */
				`<table>
					<tr><th scope="col" colspan="1">Obtenção</th></tr>
					<tr><td id="dicaObtencao"></td></tr>
				</table>`,
				/* terceira diga */
				`<table>
					<tr><th scope="col" colspan="2">Estatísticas Base</th></tr>
		
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
					<td>${escolhido[0].estatistica.vel}</td></tr>
				</table>`,
				/* quarta dica */
				`<table>
					<tr><th scope="col" colspan="1">Descrição</th></tr>
					<tr><td style="hyphens: auto;">${escolhido[0].descricao}</td></tr>
				</table>`,
				/* quinta dica */
				`<table>
					<tr><th scope="col" colspan="1">Categoria</th></tr>
					<tr><td>${escolhido[0].categoria}</td></tr>
				</table>`,
				/* sexta e última dica */
				`<table>
					<tr><th scope="col" colspan="1">Silhueta</th></tr>
					<tr><td id="dicaSilhueta"><img loading="eager" src="${
						escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
					}" title="Silhueta misteriosa" alt="Dica silhueta" /></td></tr>
				</table>`,
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
					document.removeEventListener("keydown", gerenciarEnter);

					if (palpites === 1) {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${
							escolhido[0].nome
						}" href="${escolhido[0].link}" target="_blank">${
							escolhido[0].nome
						}</a> com ${palpites} palpite!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					} else {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${
							escolhido[0].nome
						}" href="${escolhido[0].link}" target="_blank">${
							escolhido[0].nome
						}</a> com ${palpites} palpites!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					}

				default:
					/* caso erre o nome do Pokémon */
					if (palpites >= dicasDificil.length) {
						/* caso as dicas esgotem */

						campoPalpite.value = "";
						btnDesistencia.removeEventListener("click", desistir);
						btnDesistencia.style.cursor = "not-allowed";
						btnPalpite.removeEventListener("click", palpitar);
						btnPalpite.style.cursor = "not-allowed";
						document.removeEventListener("keydown", gerenciarEnter);

						ultimato.innerHTML = `<p>Você errou!<br />
						Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${
							escolhido[0].link
						}" target="_blank">${escolhido[0].nome}</a>!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${
							escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
						}" title="Mais informações sobre ${
							escolhido[0].nome
						}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return false;
					} else {
						/* ainda existem dicas */

						dicas.insertAdjacentHTML("beforeend", `${dicasDificil[palpites]}`);
						palpitesErrados.insertAdjacentHTML(
							"beforeend",
							`<p>${campoPalpite.value}</p>`
						);

						if (palpites === 1) {
							const dicaObtencao = document.getElementById("dicaObtencao");
							for (let i in escolhido[0].obtencao) {
								dicaObtencao.insertAdjacentHTML(
									"beforeend",
									`<p>${escolhido[0].obtencao[i]}</p>`
								);
							}
						} else if (palpites > 2) {
							dicaObtencao.insertAdjacentHTML("beforeend", "");
						}

						campoPalpite.value = "";
						palpites = palpites + 1;

						return false;
					}
			}
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
	if (checkSexta.checked) {
		numerosSexta.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkSetima.checked) {
		numerosSetima.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkOitava.checked) {
		numerosOitava.forEach((x) => numerosDisponiveis.push(x));
	}
	if (checkNona.checked) {
		numerosNona.forEach((x) => numerosDisponiveis.push(x));
	}

	return numerosDisponiveis[numero];
}

function desistir() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	btnPalpite.removeEventListener("click", palpitar);
	btnDesistencia.removeEventListener("click", desistir);
	btnDesistencia.style.cursor = "not-allowed";
	btnPalpite.removeEventListener("click", palpitar);
	btnPalpite.style.cursor = "not-allowed";
	document.removeEventListener("keydown", gerenciarEnter);

	if (palpites === 1) {
		ultimato.innerHTML = `<p>Você desistiu com ${palpites} palpite!<br />
		Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${
			escolhido[0].link
		}" target="_blank">${escolhido[0].nome}</a>!</p><a href="${
			escolhido[0].link
		}" target="_blank"><img loading="eager" src="${
			escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
		}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${
			escolhido[0].nome
		}" /></a>`;

		return false;
	} else {
		ultimato.innerHTML = `<p>Você desistiu com ${palpites} palpites!<br />
		Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${
			escolhido[0].link
		}" target="_blank">${escolhido[0].nome}</a>!</p><a href="${
			escolhido[0].link
		}" target="_blank"><img loading="eager" src="${
			escolhido[0].sprite[indiceAleatorio(escolhido[0].sprite)]
		}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${
			escolhido[0].nome
		}" /></a>`;

		return false;
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

			return;
		default:
			opcoesNomes.innerHTML = "";
			opcoesNomes.classList.add("opcoesNomesShow");
			nomesGeral.classList.add("nomesGeralShow");

			const nomes = nomesGeracoes.filter((nome) =>
				nome.toLowerCase().includes(campoPalpite.value.toLowerCase())
			);

			for (let i in nomes) {
				opcoesNomes.insertAdjacentHTML(
					"beforeend",
					`<div class="nomePalpite" id="palpite${i}" onclick="selecaoPalpite('${nomes[i]}')">${nomes[i]}</div>`
				);
			}

			return;
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
 * @param {string} mode Pode ser "soft" ou "hard"
 * @returns {boolean} nada.
 */
function reset(mode) {
	switch (mode) {
		case "hard":
			geracoesSelecionadas(false);
			dificuldadeRadio.item(0).checked = true;
		case "soft":
			document.removeEventListener("keydown", gerenciarEnter);
			campoPalpite.value = "";
			opcoesNomes.classList.remove("opcoesNomesShow");
			nomesGeral.classList.remove("nomesGeralShow");
			palpitesErrados.innerHTML = "<h4>Palpites Errados</h4>";
			dicas.innerHTML = "";
			ultimato.innerHTML = "";
			palpites = 0;

			return true;
	}
}

/**
 * @param {[]} array
 * @returns {number} Retorna um índice aleatório do parâmetro.
 */
function indiceAleatorio(array) {
	const data = new Date();

	return Math.floor(Math.random(data) * array.length);
}

/**
 * Função que lida com a escolha de todas gerações de uma vez.
 * @param {boolean} verificador
 * @returns {boolean} apenas para retornar algo.
 */
function geracoesSelecionadas(verificador) {
	switch (verificador) {
		case true:
		case false:
			document.querySelector("#checkTodas").checked = verificador;
			checkGeracoes.forEach((x) => (x.checked = verificador));

			return verificador;
		default:
			checkGeracoes.forEach((x) => (x.checked = checkTodas.checked));

			return verificador;
	}
}

/**
 * @returns {string} Retorna a dificuldade em formato de string
 */
function dificuldadeSecionada() {
	for (let i = 0; i <= dificuldadeRadio.length; i++) {
		if (dificuldadeRadio.item(i).checked === true) {
			return dificuldadeRadio.item(i).value;
		}
	}
}

/**
 * @param {KeyboardEvent} e
 */
function gerenciarEnter(e) {
	if (e.key === "Enter") {
		e.preventDefault();
		btnPalpite.click();
	}
}
