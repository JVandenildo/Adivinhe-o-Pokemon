let dificuldade = "Fácil";
let imgIndex = 0;

let escolhido = {
	nome: "MissingNo.",
	especie: "MissingNo.",
	codinome: "MissingNumber",
	numero: 0, // considerando a national dex
	tipo: ["Normal"],
	massa: 1590.8, // em kg
	altura: 3.3, // em metros
	som: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg",
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
	obtencao: ["Glitch"],
	estagio: 1,
	geracao: 1, // considerando em qual geração foi introduzido
	versao: false,
	forma: false,
	padrao: true,
	regional: false,
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
 * @returns Retorna um array de elemento único contendo o objeto que será usado na nova sessão.
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
		document.addEventListener("keydown", gerenciarTeclas);
		const data = new Date();

		dificuldade = dificuldadeSecionada();

		switch (dificuldade) {
			case "Fácil":
				const ticketFacil = Math.floor(
					Math.random(data) *
						(checkPrimeira.checked * primeiraFacil.length +
							checkSegunda.checked * segundaFacil.length +
							checkTerceira.checked * terceiraFacil.length +
							checkQuarta.checked * quartaFacil.length +
							checkQuinta.checked * quintaFacil.length +
							checkSexta.checked * sextaFacil.length +
							checkSetima.checked * setimaFacil.length +
							checkOitava.checked * oitavaFacil.length +
							checkNona.checked * nonaFacil.length)
				);
				escolhido = pkmnDisponiveis.filter(
					(x) => x.numero === selecaoGeracao(ticketFacil)
				);

				indiceAleatorio(escolhido[0].sprite, 0);

				dicas.insertAdjacentHTML(
					"beforeend",
					`<table style="margin: 0px auto !important;">
						<tr><th scope="col" colspan="1">Silhueta</th></tr>
						<tr><td id="dicaSilhueta"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Silhueta misteriosa" alt="Dica silhueta" /></td></tr>
					</table>`
				);

				console.log(
					`Ticket: ${ticketFacil}`,
					dificuldade,
					checkGeracoes.item(0).checked ? checkGeracoes.item(0).value : false,
					checkGeracoes.item(1).checked ? checkGeracoes.item(1).value : false,
					checkGeracoes.item(2).checked ? checkGeracoes.item(2).value : false,
					checkGeracoes.item(3).checked ? checkGeracoes.item(3).value : false,
					checkGeracoes.item(4).checked ? checkGeracoes.item(4).value : false,
					checkGeracoes.item(5).checked ? checkGeracoes.item(5).value : false,
					checkGeracoes.item(6).checked ? checkGeracoes.item(6).value : false,
					checkGeracoes.item(7).checked ? checkGeracoes.item(7).value : false,
					checkGeracoes.item(8).checked ? checkGeracoes.item(8).value : false
				);
				return escolhido;
			case "Média":
				const ticketMedia = Math.floor(
					Math.random(data) *
						(checkPrimeira.checked * primeiraMedia.length +
							checkSegunda.checked * segundaMedia.length +
							checkTerceira.checked * terceiraMedia.length +
							checkQuarta.checked * quartaMedia.length +
							checkQuinta.checked * quintaMedia.length +
							checkSexta.checked * sextaMedia.length +
							checkSetima.checked * setimaMedia.length +
							checkOitava.checked * oitavaMedia.length +
							checkNona.checked * nonaMedia.length)
				);
				escolhido = pkmnDisponiveis.filter(
					(x) => x.numero === selecaoGeracao(ticketMedia)
				);

				indiceAleatorio(escolhido[0].sprite, 0);

				dicas.insertAdjacentHTML(
					"beforeend",
					`<table style="margin: 0px auto !important;">
						<tr><th scope="col" colspan="1">Tipo(s)</th></tr>
						<tr style="text-align:center !important"><td>${escolhido[0].tipo}</td></tr>
					</table>`
				);

				console.log(
					`Ticket: ${ticketMedia}`,
					dificuldade,
					checkGeracoes.item(0).checked ? checkGeracoes.item(0).value : false,
					checkGeracoes.item(1).checked ? checkGeracoes.item(1).value : false,
					checkGeracoes.item(2).checked ? checkGeracoes.item(2).value : false,
					checkGeracoes.item(3).checked ? checkGeracoes.item(3).value : false,
					checkGeracoes.item(4).checked ? checkGeracoes.item(4).value : false,
					checkGeracoes.item(5).checked ? checkGeracoes.item(5).value : false,
					checkGeracoes.item(6).checked ? checkGeracoes.item(6).value : false,
					checkGeracoes.item(7).checked ? checkGeracoes.item(7).value : false,
					checkGeracoes.item(8).checked ? checkGeracoes.item(8).value : false
				);
				return escolhido;
			case "Difícil":
				const ticketDificil = Math.floor(
					Math.random(data) *
						(checkPrimeira.checked * primeiraGeracao.length +
							checkSegunda.checked * segundaGeracao.length +
							checkTerceira.checked * terceiraGeracao.length +
							checkQuarta.checked * quintaGeracao.length +
							checkQuinta.checked * quintaGeracao.length +
							checkSexta.checked * segundaGeracao.length +
							checkSetima.checked * setimaGeracao.length +
							checkOitava.checked * oitavaGeracao.length +
							checkNona.checked * nonaGeracao.length)
				);
				escolhido = pkmnDisponiveis.filter(
					(x) => x.numero === selecaoGeracao(ticketDificil)
				);

				indiceAleatorio(escolhido[0].sprite, 0);

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

				console.log(`Ticket: ${ticketDificil}`, dificuldade);
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
				case escolhido[0].especie.toLowerCase():
					/* caso acerte o nome do Pokémon | ganhe */

					palpites = palpites + 1;
					campoPalpite.value = "";
					btnDesistencia.removeEventListener("click", desistir);
					btnDesistencia.style.cursor = "not-allowed";
					btnPalpite.removeEventListener("click", palpitar);
					btnPalpite.style.cursor = "not-allowed";
					document.removeEventListener("keydown", gerenciarTeclas);

					if (palpites === 1) {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${escolhido[0].especie}" href="${escolhido[0].link}" target="_blank">${escolhido[0].especie}</a> com ${palpites} palpite!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].especie}" alt="Sprite de ${escolhido[0].especie}" /></a>`;

						return true;
					} else {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${escolhido[0].especie}" href="${escolhido[0].link}" target="_blank">${escolhido[0].especie}</a> com ${palpites} palpites!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].especie}" alt="Sprite de ${escolhido[0].especie}" /></a>`;

						return true;
					}

				default:
					/* caso erre o nome do Pokémon */
					if (palpites >= dicasFacil.length) {
						/* caso as dicas esgotem | perdeu */

						campoPalpite.value = "";
						btnDesistencia.removeEventListener("click", desistir);
						btnDesistencia.style.cursor = "not-allowed";
						btnPalpite.removeEventListener("click", palpitar);
						btnPalpite.style.cursor = "not-allowed";
						document.removeEventListener("keydown", gerenciarTeclas);

						ultimato.innerHTML = `<p>Você errou!<br />Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a>!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

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
				/* quarta dica */
				`<table>
					<tr><th scope="col" colspan="1">Som</th></tr>
					<tr><td>
						<audio id="escolhidoSom" src="${escolhido[0].som}"></audio>
						<button onclick="playSom()">Tocar</button>
					</td></tr></td></tr>
				</table>`,
				/* quinta e última dica */
				`<table>
					<tr><th scope="col" colspan="1">Silhueta</th></tr>
					<tr><td id="dicaSilhueta"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Silhueta misteriosa" alt="Dica silhueta" /></td></tr>
				</table>`,
			];

			switch (campoPalpite.value.toLowerCase()) {
				case "":
					/* caso não tenha palpite */

					alert("Calma lá! Tente algum nome!");

					return false;

				case escolhido[0].nome.toLowerCase():
				case escolhido[0].codinome.toLowerCase():
					/* caso acerte o nome do Pokémon | ganhe */

					palpites = palpites + 1;
					campoPalpite.value = "";
					btnDesistencia.removeEventListener("click", desistir);
					btnDesistencia.style.cursor = "not-allowed";
					btnPalpite.removeEventListener("click", palpitar);
					btnPalpite.style.cursor = "not-allowed";
					document.removeEventListener("keydown", gerenciarTeclas);

					if (palpites === 1) {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a> com ${palpites} palpite!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					} else {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a> com ${palpites} palpites!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					}

				default:
					/* caso erre o nome do Pokémon */
					if (palpites >= dicasMedio.length) {
						/* caso as dicas esgotem | perdeu */

						campoPalpite.value = "";
						btnDesistencia.removeEventListener("click", desistir);
						btnDesistencia.style.cursor = "not-allowed";
						btnPalpite.removeEventListener("click", palpitar);
						btnPalpite.style.cursor = "not-allowed";
						document.removeEventListener("keydown", gerenciarTeclas);

						ultimato.innerHTML = `<p>Você errou!<br />Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a>!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

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
					<tr><th scope="col" colspan="1">Som</th></tr>
					<tr><td>
						<audio id="escolhidoSom" src="${escolhido[0].som}"></audio>
						<button onclick="playSom()">Tocar</button>
					</td></tr></td></tr>
				</table>`,
				/* quinta dica */
				`<table>
					<tr><th scope="col" colspan="1">Descrição</th></tr>
					<tr><td style="hyphens: auto;">${escolhido[0].descricao}</td></tr>
				</table>`,
				/* sexta dica */
				`<table>
					<tr><th scope="col" colspan="1">Categoria</th></tr>
					<tr><td>${escolhido[0].categoria}</td></tr>
				</table>`,
				/* sétima e última dica */
				`<table>
					<tr><th scope="col" colspan="1">Silhueta</th></tr>
					<tr><td id="dicaSilhueta"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Silhueta misteriosa" alt="Dica silhueta" /></td></tr>
				</table>`,
			];

			switch (campoPalpite.value.toLowerCase()) {
				case "":
					/* caso não tenha palpite */

					alert("Calma lá! Tente algum nome!");

					return false;

				case escolhido[0].nome.toLowerCase():
				case escolhido[0].codinome.toLowerCase():
					/* caso acerte o nome do Pokémon | ganhe */

					palpites = palpites + 1;
					campoPalpite.value = "";
					btnDesistencia.removeEventListener("click", desistir);
					btnDesistencia.style.cursor = "not-allowed";
					btnPalpite.removeEventListener("click", palpitar);
					btnPalpite.style.cursor = "not-allowed";
					document.removeEventListener("keydown", gerenciarTeclas);

					if (palpites === 1) {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a> com ${palpites} palpite!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					} else {
						ultimato.innerHTML = `<p>Você acertou <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a> com ${palpites} palpites!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

						return true;
					}

				default:
					/* caso erre o nome do Pokémon */
					if (palpites >= dicasDificil.length) {
						/* caso as dicas esgotem | perdeu */

						campoPalpite.value = "";
						btnDesistencia.removeEventListener("click", desistir);
						btnDesistencia.style.cursor = "not-allowed";
						btnPalpite.removeEventListener("click", palpitar);
						btnPalpite.style.cursor = "not-allowed";
						document.removeEventListener("keydown", gerenciarTeclas);

						ultimato.innerHTML = `<p>Você errou!<br />Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a>!</p>
						<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

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
 * Função para lidar com a desistência do jogador.
 * @returns {boolean}
 */
function desistir() {
	campoPalpite.value = "";
	opcoesNomes.classList.remove("opcoesNomesShow");
	nomesGeral.classList.remove("nomesGeralShow");
	btnPalpite.removeEventListener("click", palpitar);
	btnDesistencia.removeEventListener("click", desistir);
	btnDesistencia.style.cursor = "not-allowed";
	btnPalpite.removeEventListener("click", palpitar);
	btnPalpite.style.cursor = "not-allowed";
	document.removeEventListener("keydown", gerenciarTeclas);

	if (palpites === 1) {
		ultimato.innerHTML = `<p>Você desistiu com ${palpites} palpite! Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a>!</p>
		<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

		return false;
	} else {
		ultimato.innerHTML = `<p>Você desistiu com ${palpites} palpite! Era <a title="Mais informações sobre ${escolhido[0].nome}" href="${escolhido[0].link}" target="_blank">${escolhido[0].nome}</a>!</p>
		<a href="${escolhido[0].link}" target="_blank"><img loading="eager" src="${escolhido[0].sprite[imgIndex]}" title="Mais informações sobre ${escolhido[0].nome}" alt="Sprite de ${escolhido[0].nome}" /></a>`;

		return false;
	}
}
