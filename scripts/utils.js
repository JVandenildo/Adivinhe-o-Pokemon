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

/**
 * @param {number} numero Número aleatório.
 * @returns {[]} Array com os objetos possíveis.
 */
function selecaoGeracao(numero) {
	let numerosDisponiveis = [];

	switch (dificuldade) {
		case "Fácil":
			// prettier-ignore
			checkPrimeira.checked ? numerosPrimeiraFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSegunda.checked ? numerosSegundaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkTerceira.checked ? numerosTerceiraFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkQuarta.checked ? numerosQuartaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkQuinta.checked ? numerosQuintaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSexta.checked ? numerosSextaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSetima.checked ? numerosSetimaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkOitava.checked ? numerosOitavaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkNona.checked ? numerosNonaFacil.forEach((x) => numerosDisponiveis.push(x)) : false;

			return numerosDisponiveis[numero];
		case "Média":
			// prettier-ignore
			checkPrimeira.checked ? numerosPrimeiraMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSegunda.checked ? numerosSegundaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkTerceira.checked ? numerosTerceiraMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkQuarta.checked ? numerosQuartaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkQuinta.checked ? numerosQuintaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSexta.checked ? numerosSextaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSetima.checked ? numerosSetimaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkOitava.checked ? numerosOitavaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkNona.checked ? numerosNonaMedia.forEach((x) => numerosDisponiveis.push(x)) : false;

			return numerosDisponiveis[numero];
		case "Difícil":
			// prettier-ignore
			checkPrimeira.checked ? numerosPrimeira.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSegunda.checked ? numerosSegunda.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkTerceira.checked ? numerosTerceira.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkQuarta.checked ? numerosQuarta.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkQuinta.checked ? numerosQuinta.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSexta.checked ? numerosSexta.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkSetima.checked ? numerosSetima.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkOitava.checked ? numerosOitava.forEach((x) => numerosDisponiveis.push(x)) : false;
			// prettier-ignore
			checkNona.checked ? numerosNona.forEach((x) => numerosDisponiveis.push(x)) : false;

			return numerosDisponiveis[numero];
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
			document.addEventListener("keydown", gerenciarTeclas);

			switch (dificuldade) {
				case "Fácil":
					const especies = especiesGeracoes.filter((nome) =>
						nome.toLowerCase().includes(campoPalpite.value.toLowerCase())
					);

					for (let i in especies) {
						opcoesNomes.insertAdjacentHTML(
							"beforeend",
							`<div tabindex="0" class="nomePalpite" id="palpite${i}" onclick="selecaoPalpite('${especies[
								i
							].replace(/'/g, "\\'")}')">${especies[i]}</div>`
						);
					}

					return;
				case "Média":
				case "Difícil":
					const nomes = nomesGeracoes.filter((nome) =>
						nome.toLowerCase().includes(campoPalpite.value.toLowerCase())
					);

					for (let i in nomes) {
						opcoesNomes.insertAdjacentHTML(
							"beforeend",
							`<div tabindex="0" class="nomePalpite" id="palpite${i}" onclick="selecaoPalpite('${nomes[
								i
							].replace(/'/g, "\\'")}')">${nomes[i]}</div>`
						);
					}

					return;
			}
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
 * @param {string} mode Pode ser "soft" ou "hard".
 * @returns {boolean} nada.
 */
function reset(mode) {
	switch (mode) {
		case "hard":
			geracoesSelecionadas(false);
			dificuldadeRadio.item(0).checked = true;
		case "soft":
		default:
			document.removeEventListener("keydown", gerenciarTeclas);
			campoPalpite.value = "";
			opcoesNomes.classList.remove("opcoesNomesShow");
			nomesGeral.classList.remove("nomesGeralShow");
			palpitesErrados.innerHTML = "<h3>Palpites Errados</h3>";
			dicas.innerHTML = "";
			ultimato.innerHTML = "";
			palpites = 0;

			return true;
	}
}

/**
 * @param {[]} array array dos sprites possíveis.
 * @param {number} ocorrido
 * @returns {number} Retorna um índice aleatório do parâmetro.
 */
function indiceAleatorio(array, ocorrido) {
	const data = new Date();
	imgIndex = Math.floor(Math.random(data) * array.length);

	if (imgIndex % 2 !== 0 && Math.random() < 0.75) {
		imgIndex = (imgIndex + 1) % array.length; // Change odd to even or wrap around
	}

	if (ocorrido > 1) {
		return imgIndex;
	} else {
		return indiceAleatorio(array, ocorrido + 1);
	}
}

/**
 * Função que lida com a escolha de todas gerações de uma vez.
 * @param {boolean} verificador
 * @returns {boolean}
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
 * Lida com a quantidade de gerações selecionadas.
 * @returns
 */
function geracaoSelecionada() {
	let verificadores = 0;
	checkGeracoes.forEach((x) => (verificadores = verificadores + x.checked));

	switch (verificadores) {
		case 0:
			geracoesSelecionadas(false);

			return verificadores;
		case 9:
			geracoesSelecionadas(true);

			return verificadores;
		default:
			document.querySelector("#checkTodas").checked = false;

			return verificadores;
	}
}

/**
 * @returns {string} Retorna a dificuldade em formato de string.
 */
function dificuldadeSecionada() {
	for (let i = 0; i <= dificuldadeRadio.length; i++) {
		if (dificuldadeRadio.item(i).checked) {
			return dificuldadeRadio.item(i).value;
		}
	}
}

/**
 * @param {KeyboardEvent} e
 */
function gerenciarTeclas(e) {
	switch (e.key) {
		case "Enter":
			e.preventDefault();
			btnPalpite.click();

			return true;
		case "Escape":
			e.preventDefault();
			opcoesNomes.classList.remove("opcoesNomesShow");
			nomesGeral.classList.remove("nomesGeralShow");

			return false;
	}
}

function playSom() {
	const escolhidoSom = document.querySelector("#escolhidoSom");
	escolhidoSom.play();

	return true;
}
