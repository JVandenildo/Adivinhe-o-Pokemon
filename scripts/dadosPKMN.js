const primeiraGeracao = [
	{
		nome: "Bulbasaur",
		numero: 1, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 6.9, // em kg
		altura: 0.7, // em metros
		descricao:
			"Uma semente estranha foi plantada nas suas costas em seu nascimento. A planta brota e cresce com esse Pokémon.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		local: "Laboratório Prof. Carvalho",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/375px-0001Bulbasaur.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Ivysaur",
		numero: 2, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 13.0, // em kg
		altura: 1.0, // em metros
		descricao:
			"Quando o bulbo nas suas costas cresce, aparenta perder a capacidade de ficar em pé nas patas traseiras.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/375px-0002Ivysaur.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Venusaur",
		numero: 3, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		descricao:
			"A planta floresce quando absorve energia solar. Permanece se movimentando em busca de luz solar.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/375px-0003Venusaur.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmander",
		numero: 4, // considerando a national dex
		tipo: ["Fogo"],
		massa: 8.5, // em kg
		altura: 0.6, // em metros
		descricao:
			"Obviamente prefere lugares quentes. Dizem que quando chove, sai vapor da ponta de sua cauda.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Lagarto",
		lendario: false,
		local: "Laboratório Prof. Carvalho",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/375px-0004Charmander.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmeleon",
		numero: 5, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 1.1, // em metros
		descricao:
			"Quando balança sua cauda em chamas, a temperatura é elevada a níveis insuportavelmente altos.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/375px-0005Charmeleon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Charizard",
		numero: 6, // considerando a national dex
		tipo: ["Fogo"],
		massa: 90.5, // em kg
		altura: 1.7, // em metros
		descricao:
			"Cospe fogo quente o suficiente para derreter rochas. É conhecido por causar incêndio florestal não intencionalmente.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/375px-0006Charizard.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
	},
	{
		nome: "Squirtle",
		numero: 7, // considerando a national dex
		tipo: ["Água"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		descricao:
			"Após seu nascimento, suas costas incham e endurecem em uma carapaça. Espalha poderosamente uma espuma de sua boca.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Pequena Tartaruga",
		lendario: false,
		local: "Laboratório Prof. Carvalho",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
	},
	{
		nome: "Wartortle",
		numero: 8, // considerando a national dex
		tipo: ["Água"],
		massa: 22.5, // em kg
		altura: 1.0, // em metros
		descricao:
			"Comumente esconde-se na água para perseguir presa desavisada. Para um nado rápido, movimenta suas orelhas para manter estabilidade.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruga",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/375px-0008Wartortle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)",
	},
	{
		nome: "Blastoise",
		numero: 9, // considerando a national dex
		tipo: ["Planta", "Venenoso"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		descricao:
			"Um Pokémon brutal com jatos de água pressurizada em seu casco. São usados em investidas de alta velocidade.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/375px-0009Blastoise.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
	},
	{
		nome: "Mew",
		numero: 151, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		descricao:
			"É tão raro que ainda é dito ser uma miragem por vários especialistas. Somente algumas pessoas o viram ao redor do mundo.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Novo Espécime",
		lendario: true,
		local: "Somente evento",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/375px-0151Mew.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",
	},
];

const segundaGeracao = [
	{
		nome: "Chikorita",
		numero: 152, // considerando a national dex
		tipo: ["Planta"],
		massa: 0.9, // em kg
		altura: 6.4, // em metros
		descricao:
			"Adora aproveitar a luz do sol. Usa a folha na cabeça para procurar lugares quentes.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		local: "Laboratório Professor Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0152Chikorita.png/375px-0152Chikorita.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)",
	},
	{
		nome: "Celebi",
		numero: 251, // considerando a national dex
		tipo: ["Psíquico", "Grama"],
		massa: 0.6, // em kg
		altura: 5.0, // em metros
		descricao:
			"Este Pokémon vaga pelo tempo. A grama e as árvores floresce nas florestas em que apareceu.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Viajante do Tempo",
		lendario: true,
		local: "Laboratório Professor Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0251Celebi.png/375px-0251Celebi.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
	},
];

const terceiraGeracao = [
	{
		nome: "Treecko",
		numero: 252, // considerando a national dex
		tipo: ["Planta"],
		massa: 5.0, // em kg
		altura: 0.5, // em metros
		descricao:
			"Faz seu ninho em uma árvore gigante na floresta. Guarda-o ferozmente contra qualquer coisa que chegue perto de seu território. É dito ser o protetor das árvores das florestas.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0252Treecko.png/375px-0252Treecko.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		descricao:
			"Um Pokémon que evoluiu de um vírus extraterrestre exposto a um rio laser.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		local: "Ilha da Origem ou por evento, dependendo da versão",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d7/0386Deoxys.png/375px-0386Deoxys.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
];

const quartaGeracao = [
	{
		nome: "Turtwig",
		numero: 387, // considerando a national dex
		tipo: ["Planta"],
		massa: 10.2, // em kg
		altura: 0.4, // em metros
		descricao:
			"Feito de solo, a carapaça nas suas costas endurece quando bebe água. Vive perto de lagos.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Pequena Folha",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão.",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/68/0387Turtwig.png/375px-0387Turtwig.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)",
	},
	{
		nome: "Arceus",
		numero: 493, // considerando a national dex
		tipo: ["Normal"],
		massa: 320.0, // em kg
		altura: 3.2, // em metros
		descricao:
			"É descrito na mitologia como o Pokémon que moldou o universo com seus 1'000 braços.", // considerando a primeira dex da primeira geração que apareceu
		categoria: "Pokémon Alpha",
		lendario: true,
		local: "Salão da Origem",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/9e/0493Arceus.png/375px-0493Arceus.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)",
	},
];

const todasGeracoes =
	primeiraGeracao + segundaGeracao + terceiraGeracao + quartaGeracao;
const nomesPrimeira = primeiraGeracao.map((x) => x.nome);
const nomesSegunda = segundaGeracao.map((x) => x.nome);
const nomesTerceira = terceiraGeracao.map((x) => x.nome);
const nomesQuarta = quartaGeracao.map((x) => x.nome);
