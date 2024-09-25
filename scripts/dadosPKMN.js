const pkmnDisponiveis = [
	{
		nome: "Bulbasaur",
		numero: 1, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 6.9, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 45,
			atq: 49,
			def: 49,
			atq_esp: 65,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Uma semente estranha foi plantada nas suas costas em seu nascimento. A planta brota e cresce com esse Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		obtencao: "Laboratório do Prof. Carvalho",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/375px-0001Bulbasaur.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bulbasaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Ivysaur",
		numero: 2, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 13.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 62,
			def: 63,
			atq_esp: 80,
			def_esp: 80,
			vel: 60,
		},
		descricao:
			"Quando o bulbo nas suas costas cresce, aparenta perder a capacidade de ficar em pé nas patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/375px-0002Ivysaur.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ivysaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Venusaur",
		numero: 3, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 80,
			atq: 82,
			def: 83,
			atq_esp: 100,
			def_esp: 100,
			vel: 80,
		},
		descricao:
			"A planta floresce quando absorve energia solar. Permanece se movimentando em busca de luz solar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/375px-0003Venusaur.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venusaur_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmander",
		numero: 4, // considerando a national dex
		tipo: ["Fogo"],
		massa: 8.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 39,
			atq: 52,
			def: 43,
			atq_esp: 60,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Obviamente prefere lugares quentes. Dizem que quando chove, sai vapor da ponta de sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagarto",
		lendario: false,
		obtencao: "Laboratório do Prof. Carvalho",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/375px-0004Charmander.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)",
	},
	{
		nome: "Charmeleon",
		numero: 5, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 58,
			atq: 64,
			def: 58,
			atq_esp: 80,
			def_esp: 65,
			vel: 80,
		},
		descricao:
			"Quando balança sua cauda em chamas, a temperatura é elevada a níveis insuportavelmente altos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/375px-0005Charmeleon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charmeleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Charizard",
		numero: 6, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 90.5, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 78,
			atq: 84,
			def: 78,
			atq_esp: 109,
			def_esp: 85,
			vel: 100,
		},
		descricao:
			"Cospe fogo quente o suficiente para derreter rochas. É conhecido por causar incêndio florestal não intencionalmente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/375px-0006Charizard.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Charizard_(Pok%C3%A9mon)",
	},
	{
		nome: "Squirtle",
		numero: 7, // considerando a national dex
		tipo: ["Água"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 44,
			atq: 48,
			def: 65,
			atq_esp: 50,
			def_esp: 64,
			vel: 43,
		},
		descricao:
			"Após seu nascimento, suas costas incham e endurecem em uma carapaça. Espalha poderosamente uma espuma de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruguinha",
		lendario: false,
		obtencao: "Laboratório do Prof. Carvalho",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/375px-0007Squirtle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)",
	},
	{
		nome: "Wartortle",
		numero: 8, // considerando a national dex
		tipo: ["Água"],
		massa: 22.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 59,
			atq: 63,
			def: 80,
			atq_esp: 65,
			def_esp: 80,
			vel: 58,
		},
		descricao:
			"Comumente esconde-se na água para perseguir presa desavisada. Para um nado rápido, movimenta suas orelhas para manter estabilidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruga",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/375px-0008Wartortle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wartortle_(Pok%C3%A9mon)",
	},
	{
		nome: "Blastoise",
		numero: 9, // considerando a national dex
		tipo: ["Água"],
		massa: 85.5, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 79,
			atq: 83,
			def: 100,
			atq_esp: 85,
			def_esp: 105,
			vel: 78,
		},
		descricao:
			"Um Pokémon brutal com jatos de água pressurizada em seu casco. São usados em investidas de alta velocidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/375px-0009Blastoise.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
	},
	{
		nome: "Caterpie",
		numero: 10, // considerando a national dex
		tipo: ["Inseto"],
		massa: 2.9, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 45,
			atq: 30,
			def: 35,
			atq_esp: 20,
			def_esp: 20,
			vel: 45,
		},
		descricao:
			"Seus pés curtos são dotados de ventosas que lhe permitem escalar encostas e paredes sem cansar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Minhoca",
		lendario: false,
		obtencao: "Rotas 2, 24, e 25; e Floresta de Viridiana",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/375px-0010Caterpie.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",
	},
	{
		nome: "Metapod",
		numero: 11, // considerando a national dex
		tipo: ["Inseto"],
		massa: 9.9, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 50,
			atq: 20,
			def: 55,
			atq_esp: 25,
			def_esp: 25,
			vel: 30,
		},
		descricao:
			"É vulnerável a ataques enquanto seu casulo está mole, expondo seu corpo fraco e frágil.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		lendario: false,
		obtencao: "Rotas 24, e 25; e Floresta de Viridiana",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/da/0011Metapod.png/375px-0011Metapod.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)",
	},
	{
		nome: "Butterfree",
		numero: 12, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 32.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 60,
			atq: 45,
			def: 50,
			atq_esp: 80,
			def_esp: 80,
			vel: 70,
		},
		descricao:
			"Em batalha, bate suas asas em alta velocidade para liberar poeira altamente tóxico no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Borboleta",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/375px-0012Butterfree.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)",
	},
	{
		nome: "Weedle",
		numero: 13, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 3.2, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 40,
			atq: 35,
			def: 30,
			atq_esp: 20,
			def_esp: 20,
			vel: 50,
		},
		descricao:
			"Comumente encontrado em florestas, comendo folhas. Possui um ferrão afiado e venenoso em sua cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inseto Peludo",
		lendario: false,
		obtencao: "Rotas 2, 24, e 25; e Floresta de Viridiana",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/375px-0013Weedle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)",
	},
	{
		nome: "Kakuna",
		numero: 14, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 10.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 45,
			atq: 25,
			def: 50,
			atq_esp: 25,
			def_esp: 25,
			vel: 35,
		},
		descricao:
			"Quase incapaz de se mover, este Pokémon consegue só endurecer seu casulo para proteger a si mesmo de predadores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		lendario: false,
		obtencao: "Rotas 24, e 25; e Floresta de Viridiana",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/375px-0014Kakuna.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)",
	},
	{
		nome: "Beedrill",
		numero: 15, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 80,
			def: 40,
			atq_esp: 45,
			def_esp: 80,
			vel: 75,
		},
		descricao:
			"Voa em alta velocidade e ataca usando seus ferrões venenosos localizados nas patas dianteiras e cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelha Venenosa",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/375px-0015Beedrill.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgey",
		numero: 16, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.8, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 40,
			atq: 45,
			def: 40,
			atq_esp: 35,
			def_esp: 35,
			vel: 56,
		},
		descricao:
			"Comum ser visto em florestas e bosques. Bate as asas próximo ao chão para levantar poeira ofuscante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		lendario: false,
		obtencao: "Rotas 1, 2, 3, e outras; e Floresta de Viridiana",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0c/0016Pidgey.png/375px-0016Pidgey.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgeotto",
		numero: 17, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 63,
			atq: 60,
			def: 55,
			atq_esp: 50,
			def_esp: 50,
			vel: 71,
		},
		descricao:
			"Muito protetor de sua extensa área territorial, este Pokémon irá bicar ferozmente qualquer intruso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro",
		lendario: false,
		obtencao: "Rotas 5, 6, 7, e outras; e Floresta de Viridiana",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/375px-0017Pidgeotto.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgeot",
		numero: 18, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 39.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 83,
			atq: 80,
			def: 75,
			atq_esp: 70,
			def_esp: 70,
			vel: 91,
		},
		descricao:
			"Quando caça, desliza na superfície da água em alta velocidade para pegar presas desavisadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/375px-0018Pidgeot.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)",
	},
	{
		nome: "Rattata",
		numero: 19, // considerando a national dex
		tipo: ["Normal"],
		massa: 3.5, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 30,
			atq: 56,
			def: 35,
			atq_esp: 25,
			def_esp: 35,
			vel: 72,
		},
		descricao:
			"Morde qualquer coisa quando ataca. Pequeno e muito rápido, é comum ser visto em vários lugares.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		obtencao: "Rotas 1, 2, 3, e outras; e Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/375px-0019Rattata.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)",
	},
	{
		nome: "Raticate",
		numero: 20, // considerando a national dex
		tipo: ["Normal"],
		massa: 18.5, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 55,
			atq: 81,
			def: 60,
			atq_esp: 50,
			def_esp: 70,
			vel: 97,
		},
		descricao:
			"Usa seus bigodes para manter o equilíbrio. Aparentemente fica mais lento quando são cortados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		obtencao: "Rotas 9, 10, 11, e outras; Mansão Pokémon e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/375px-0020Raticate.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)",
	},
	{
		nome: "Spearow",
		numero: 21, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 40,
			atq: 60,
			def: 30,
			atq_esp: 31,
			def_esp: 31,
			vel: 70,
		},
		descricao:
			"Come insetos em áreas gramadas. Tem que bater suas curtas asas em alta velocidade para se manter no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		lendario: false,
		obtencao: "Rotas 3, 4, 9, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/375px-0021Spearow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)",
	},
	{
		nome: "Fearow",
		numero: 22, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 65,
			atq: 90,
			def: 65,
			atq_esp: 61,
			def_esp: 61,
			vel: 100,
		},
		descricao:
			"Com suas imensas e magnificas asas, consegue permanecer no ar sem pousar para descansar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bico",
		lendario: false,
		obtencao: "Rotas 9, 16, 17, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/375px-0022Fearow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)",
	},
	{
		nome: "Ekans",
		numero: 23, // considerando a national dex
		tipo: ["Veneno"],
		massa: 6.9, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 35,
			atq: 60,
			def: 44,
			atq_esp: 40,
			def_esp: 54,
			vel: 55,
		},
		descricao:
			"Move-se de maneira silenciosa e furtiva. Come ovos de pássaros, como Pidgey e Spearow.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente",
		lendario: false,
		obtencao: "Rotas 4, 8, 9, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/375px-0023Ekans.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
	},
	{
		nome: "Arbok",
		numero: 24, // considerando a national dex
		tipo: ["Veneno"],
		massa: 65.0, // em kg
		altura: 3.5, // em metros
		estatistica: {
			ps: 60,
			atq: 85,
			def: 69,
			atq_esp: 65,
			def_esp: 79,
			vel: 80,
		},
		descricao:
			"Rumores dizem que as marcas de sua barriga mudam de área para área.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cobra",
		lendario: false,
		obtencao: "Rota 23; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/51/0024Arbok.png/375px-0024Arbok.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)",
	},
	{
		nome: "Pikachu",
		numero: 25, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 6.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 35,
			atq: 55,
			def: 30,
			atq_esp: 50,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Quando vários Pokémon dessa espécie se reúnem, sua eletricidade poderia aumentar e causar tempestades elétricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		obtencao: "Floresta de Viridiana; e Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/375px-0025Pikachu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
	},
	{
		nome: "Raichu",
		numero: 26, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 60,
			atq: 90,
			def: 55,
			atq_esp: 90,
			def_esp: 80,
			vel: 100,
		},
		descricao:
			"Sua longa cauda serve como um fio-terra que o protege de sua própria potência elétrica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		obtencao: "Usina Elétrica Abadona; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/375px-0026Raichu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandshrew",
		numero: 27, // considerando a national dex
		tipo: ["Terra"],
		massa: 12.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 75,
			def: 85,
			atq_esp: 20,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Escava profundamente na terra em lugares áridos e distantes de água. Só sai para caçar comida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		obtencao: "Rotas 3, 4, 8, e outras; e Monte da Lua",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e9/0027Sandshrew.png/375px-0027Sandshrew.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandslash",
		numero: 28, // considerando a national dex
		tipo: ["Terra"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 75,
			atq: 100,
			def: 110,
			atq_esp: 45,
			def_esp: 55,
			vel: 65,
		},
		descricao:
			"Enrola-se em uma bola espinhosa quando se sente ameaçado. Pode rolar para atacar ou escapar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		obtencao: "Rota 23; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a4/0028Sandslash.png/375px-0028Sandslash.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoran♀",
		numero: 29, // considerando a national dex
		tipo: ["Veneno"],
		massa: 7.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 55,
			atq: 47,
			def: 52,
			atq_esp: 40,
			def_esp: 40,
			vel: 41,
		},
		descricao:
			"Apesar de pequenos, seus espinhos venenosos tornam este Pokémon perigoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		obtencao: "Rotas 2, 9, 10, e outra; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b2/0029Nidoran.png/375px-0029Nidoran.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoran%E2%99%80_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidorina",
		numero: 30, // considerando a national dex
		tipo: ["Veneno"],
		massa: 20.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 70,
			atq: 62,
			def: 67,
			atq_esp: 55,
			def_esp: 55,
			vel: 56,
		},
		descricao:
			"O chifre da fêmea desenvolve devagar. Prefere ataques físicos como mordida e patadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		obtencao: "Rotas 9, e 23; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ea/0030Nidorina.png/375px-0030Nidorina.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoqueen",
		numero: 31, // considerando a national dex
		tipo: ["Veneno", " Terra"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 90,
			atq: 82,
			def: 87,
			atq_esp: 75,
			def_esp: 85,
			vel: 76,
		},
		descricao:
			"Suas duras escamas lhe dão uma forte proteção. Usa seu grande volume para executar ataques poderosos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9d/0031Nidoqueen.png/375px-0031Nidoqueen.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoran♂",
		numero: 32, // considerando a national dex
		tipo: ["Veneno"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 46,
			atq: 57,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 50,
		},
		descricao:
			"Enrijece suas orelhas para sentir perigo. Quanto maior seus chifres, mais poderoso é seu veneno secretado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		obtencao: "Rotas 2, 9, 10, e outra; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8c/0032Nidoran.png/375px-0032Nidoran.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoran%E2%99%82_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidorino",
		numero: 33, // considerando a national dex
		tipo: ["Veneno"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 61,
			atq: 72,
			def: 57,
			atq_esp: 55,
			def_esp: 55,
			vel: 65,
		},
		descricao:
			"Um Pokémon agressivo que é rápido para atacar. O chifre em sua cabeça secreta um poderoso veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		obtencao: "Rotas 9, e 23; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1e/0033Nidorino.png/375px-0033Nidorino.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoking",
		numero: 34, // considerando a national dex
		tipo: ["Veneno", " Terra"],
		massa: 62.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 81,
			atq: 92,
			def: 77,
			atq_esp: 85,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"Usa sua poderosa cauda para golpear, imobilizar, e então quebrar os ossos de sua presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0034Nidoking.png/375px-0034Nidoking.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)",
	},
	{
		nome: "Clefairy",
		numero: 35, // considerando a national dex
		tipo: ["Fada"],
		massa: 7.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 70,
			atq: 45,
			def: 48,
			atq_esp: 60,
			def_esp: 65,
			vel: 35,
		},
		descricao:
			"Sua aparência mágica e fofa possui muitos admiradores. É raro e encontrado somente em certas áreas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		lendario: false,
		obtencao: "Monte da Lua; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/375px-0035Clefairy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
	},
	{
		nome: "Clefable",
		numero: 36, // considerando a national dex
		tipo: ["Fada"],
		massa: 40.0, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 95,
			atq: 70,
			def: 73,
			atq_esp: 85,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Um Pokémon fada tímido que é raramente visto. Corre e se esconde no momento que sente uma pessoa por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a4/0036Clefable.png/375px-0036Clefable.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pok%C3%A9mon)",
	},
	{
		nome: "Vulpix",
		numero: 37, // considerando a national dex
		tipo: ["Fogo"],
		massa: 9.9, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 38,
			atq: 41,
			def: 40,
			atq_esp: 50,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"No momento do nascimento, só possui uma cauda. A cauda se divide a partir da ponta a medida que envelhece.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		lendario: false,
		obtencao: "Rotas 7, e 8; e a Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/06/0037Vulpix.png/375px-0037Vulpix.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
	},
	{
		nome: "Ninetales",
		numero: 38, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.9, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 73,
			atq: 76,
			def: 75,
			atq_esp: 81,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Muito inteligente e vingativo. Agarrar uma de suas várias caldas poderia resultar um uma maldição de 1'000 anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3e/0038Ninetales.png/375px-0038Ninetales.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
	},
	{
		nome: "Jigglypuff",
		numero: 39, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 5.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 115,
			atq: 45,
			def: 20,
			atq_esp: 45,
			def_esp: 25,
			vel: 20,
		},
		descricao:
			"Quando seus grandes olhos se iluminam, canta uma melodia misteriosamente suave que embala seus inimigos para dormir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		obtencao: "Rotas 3, 5, 6, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3a/0039Jigglypuff.png/375px-0039Jigglypuff.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Wigglytuff",
		numero: 40, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 12.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 140,
			atq: 70,
			def: 45,
			atq_esp: 75,
			def_esp: 50,
			vel: 45,
		},
		descricao:
			"Seu corpo é macio e emborrachado. Quando atiçado, suga ar e infla-se a um tamanho enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		obtencao: "Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e2/0040Wigglytuff.png/375px-0040Wigglytuff.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Zubat",
		numero: 41, // considerando a national dex
		tipo: ["Veneno", " Voador"],
		massa: 7.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 40,
			atq: 45,
			def: 35,
			atq_esp: 30,
			def_esp: 40,
			vel: 55,
		},
		descricao:
			"Forma colônias em lugares escuros. Usa ondas ultrassônicas para identificar e se aproximar de alvos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		lendario: false,
		obtencao:
			"Monte da Lua; Túnel de Rocha; Ilhas Espuma; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0041Zubat.png/375px-0041Zubat.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pok%C3%A9mon)",
	},
	{
		nome: "Golbat",
		numero: 42, // considerando a national dex
		tipo: ["Veneno", " Voador"],
		massa: 55.0, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 75,
			atq: 80,
			def: 70,
			atq_esp: 65,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"Uma vez que ataca, não para de drenar a energia de suas vítimas mesmo que fique pesado demais para voar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		lendario: false,
		obtencao: "Ilhas Espuma; Estrada da Vitória; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/76/0042Golbat.png/375px-0042Golbat.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pok%C3%A9mon)",
	},
	{
		nome: "Oddish",
		numero: 43, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 5.4, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 45,
			atq: 50,
			def: 55,
			atq_esp: 75,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Durante o dia, mantém seu rosto enterrado no chão. Durante a noite, vagueia semeando suas sementes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva Daninha",
		lendario: false,
		obtencao: "Rotas 5, 6, 7, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0043Oddish.png/375px-0043Oddish.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)",
	},
	{
		nome: "Gloom",
		numero: 44, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 8.6, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 60,
			atq: 65,
			def: 70,
			atq_esp: 85,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"O fluido que escorre de sua boca não é baba. É um néctar usado para atrair suas presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva Daninha",
		lendario: false,
		obtencao: "Rotas 12, 13, 14, e outra; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e0/0044Gloom.png/375px-0044Gloom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pok%C3%A9mon)",
	},
	{
		nome: "Vileplume",
		numero: 45, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 18.6, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 75,
			atq: 80,
			def: 85,
			atq_esp: 100,
			def_esp: 90,
			vel: 50,
		},
		descricao:
			"Quanto maior suas pétalas, mais pólen tóxico contém. Sua cabeça grande é pesada e difícil de segurar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0045Vileplume.png/375px-0045Vileplume.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)",
	},
	{
		nome: "Paras",
		numero: 46, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 5.4, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 35,
			atq: 70,
			def: 55,
			atq_esp: 45,
			def_esp: 55,
			vel: 25,
		},
		descricao:
			"Escava para se alimentar de raízes. Os cogumelos em suas costas crescem extraindo nutrientes do inseto hospedeiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		lendario: false,
		obtencao: "Monte da Lua; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8a/0046Paras.png/375px-0046Paras.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Paras_(Pok%C3%A9mon)",
	},
	{
		nome: "Parasect",
		numero: 47, // considerando a national dex
		tipo: ["Inseto", " Planta"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 95,
			def: 80,
			atq_esp: 60,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"Um par hospedeiro-parasita no qual o cogumelo parasita assumiu o controle do inseto hospedeiro. Prefere lugares úmidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		lendario: false,
		obtencao: "Zona Safari; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7b/0047Parasect.png/375px-0047Parasect.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pok%C3%A9mon)",
	},
	{
		nome: "Venonat",
		numero: 48, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 30.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 55,
			def: 50,
			def_esp: 40,
			atq_esp: 55,
			vel: 45,
		},
		descricao:
			"Vive nas sombras de árvores altas onde come insetos. É atraído por luzes durante a noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inseto",
		lendario: false,
		obtencao: "Rotas 12, 13, 14, e outras; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0e/0049Venomoth.png/375px-0049Venomoth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Venomoth",
		numero: 49, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 12.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 70,
			atq: 65,
			def: 60,
			atq_esp: 90,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"As escamas semelhantes a poeira que cobrem suas asas são codificadas por cor para indicar os tipos de veneno que possui.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa Venenosa",
		lendario: false,
		obtencao: "Zona Safari; Estrada da Vitória; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0e/0049Venomoth.png/375px-0049Venomoth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Diglett",
		numero: 50, // considerando a national dex
		tipo: ["Terra"],
		massa: 0.8, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 10,
			atq: 55,
			def: 25,
			atq_esp: 35,
			def_esp: 45,
			vel: 95,
		},
		descricao:
			"Vive em torno de um metro abaixo da superfície onde se alimente de raízes. Aparece ocasionalmente acima da superfície.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		lendario: false,
		obtencao: "Túnel dos Diglett",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a6/0050Diglett.png/375px-0050Diglett.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
	},
	{
		nome: "Dugtrio",
		numero: 51, // considerando a national dex
		tipo: ["Terra"],
		massa: 33.3, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 35,
			atq: 80,
			def: 50,
			atq_esp: 50,
			def_esp: 70,
			vel: 120,
		},
		descricao: "Desencadeia grandes terremotos ao cavar 100km no subsolo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		lendario: false,
		obtencao: "Túnel dos Diglett",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/88/0051Dugtrio.png/375px-0051Dugtrio.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Meowth",
		numero: 52, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 40,
			atq: 45,
			def: 35,
			atq_esp: 40,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Gosta de objetos redondos. Vaga pelas ruas todas as noites procurando por trocados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Arranha Gato",
		lendario: false,
		obtencao: "Rotas 5, 6, 7, e outra",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d6/0052Meowth.png/375px-0052Meowth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Persian",
		numero: 53, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 70,
			def: 60,
			atq_esp: 65,
			def_esp: 65,
			vel: 115,
		},
		descricao:
			"Apesar de seu pelo possuir muitos admiradores, é difícil de criar como animal de estimação por sua maldade inconstante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato de Luxo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b0/0053Persian.png/375px-0053Persian.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)",
	},
	{
		nome: "Psyduck",
		numero: 54, // considerando a national dex
		tipo: ["Água"],
		massa: 19.6, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 50,
			atq: 52,
			def: 48,
			atq_esp: 65,
			def_esp: 50,
			vel: 55,
		},
		descricao:
			"Enquanto engana seus oponentes com seu olhar distraído, este astuto Pokémon usa seus poderes psicocinéticos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato",
		lendario: false,
		obtencao: "Rotas 6, 24, e 25; Ilhas Espuma; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/375px-0054Psyduck.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
	},
	{
		nome: "Golduck",
		numero: 55, // considerando a national dex
		tipo: ["Água"],
		massa: 76.6, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 80,
			atq: 82,
			def: 78,
			atq_esp: 95,
			def_esp: 80,
			vel: 85,
		},
		descricao:
			"Frequentemente visto nadando elegantemente às marges de lagos. Muitas vezes confundido com a criatura japonesa, Kappa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato",
		lendario: false,
		obtencao: "Rota 6; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ed/0055Golduck.png/375px-0055Golduck.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pok%C3%A9mon)",
	},
	{
		nome: "Mankey",
		numero: 56, // considerando a national dex
		tipo: ["Lutador"],
		massa: 28.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 80,
			def: 35,
			atq_esp: 35,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Extremamente rápido em se irritar. Pode ser dócil em um momento e logo depois se debater.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Porco",
		lendario: false,
		obtencao: "Rotas 3, 4, 5, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/fa/0056Mankey.png/375px-0056Mankey.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)",
	},
	{
		nome: "Primeape",
		numero: 57, // considerando a national dex
		tipo: ["Lutador"],
		massa: 32.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 105,
			def: 60,
			atq_esp: 60,
			def_esp: 70,
			vel: 95,
		},
		descricao:
			"Só deixa de estar raivoso quando mais ninguém está por perto. Não deixará de perseguir sua presa até que seja pega.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Porco",
		lendario: false,
		obtencao: "Rota 23",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2c/0057Primeape.png/375px-0057Primeape.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pok%C3%A9mon)",
	},
	{
		nome: "Growlithe",
		numero: 58, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 55,
			atq: 70,
			def: 45,
			atq_esp: 70,
			def_esp: 50,
			vel: 60,
		},
		descricao:
			"Muito protetor de seu território. Late e morde para repelir invasores de seu espaço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Filhote",
		lendario: false,
		obtencao: "Rotas 7, e 8; e Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6a/0058Growlithe.png/375px-0058Growlithe.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)",
	},
	{
		nome: "Arcanine",
		numero: 59, // considerando a national dex
		tipo: ["Fogo"],
		massa: 155.0, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 90,
			atq: 110,
			def: 80,
			atq_esp: 100,
			def_esp: 80,
			vel: 95,
		},
		descricao:
			"Um Pokémon que tem sido admirado por sua beleza. Corre com agilidade como se tivesse asas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lendário",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/42/0059Arcanine.png/375px-0059Arcanine.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwag",
		numero: 60, // considerando a national dex
		tipo: ["Água"],
		massa: 12.4, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 40,
			atq: 50,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 90,
		},
		descricao:
			"Suas pernas recém crescidas o previnem de correr. Aparenta preferir nadar a tentar ficar de pé.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		lendario: false,
		obtencao:
			"Rotas 6, 10, 11, e outras; Caverna de Cerulean; Zona Safari; Ilhas Espuma; e Planalto Índigo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e4/0060Poliwag.png/375px-0060Poliwag.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwhirl",
		numero: 61, // considerando a national dex
		tipo: ["Água"],
		massa: 20.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 65,
			def: 65,
			atq_esp: 50,
			def_esp: 50,
			vel: 90,
		},
		descricao:
			"Capaz de viver dentro e fora d'água. Quando está fora da água, transpira para manter seu corpo viscoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		lendario: false,
		obtencao: "Rotas 10, 22, e 23",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/fd/0061Poliwhirl.png/375px-0061Poliwhirl.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwrath",
		numero: 62, // considerando a national dex
		tipo: ["Água", " Lutador"],
		massa: 54.0, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 90,
			atq: 85,
			def: 95,
			atq_esp: 70,
			def_esp: 90,
			vel: 70,
		},
		descricao:
			"Um hábil nadador dos nado crawl e nado peito. Facilmente ultrapassa os melhores nadadores humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/80/0062Poliwrath.png/375px-0062Poliwrath.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pok%C3%A9mon)",
	},
	{
		nome: "Abra",
		numero: 63, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 25,
			atq: 20,
			def: 15,
			atq_esp: 105,
			def_esp: 55,
			vel: 90,
		},
		descricao:
			"Usando sua habilidade de ler mentes, identifica o perigo iminente e teleporta para um local seguro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		lendario: false,
		obtencao: "Rotas 5, 6, 7, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bd/0063Abra.png/375px-0063Abra.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Abra_(Pok%C3%A9mon)",
	},
	{
		nome: "Kadabra",
		numero: 64, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 56.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 40,
			atq: 35,
			def: 30,
			atq_esp: 120,
			def_esp: 70,
			vel: 105,
		},
		descricao:
			"Emite ondas alfas especiais de seu corpo que induzem dores de cabeça apenas por estar por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		lendario: false,
		obtencao: "Rota 8; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/af/0064Kadabra.png/375px-0064Kadabra.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pok%C3%A9mon)",
	},
	{
		nome: "Alakazam",
		numero: 65, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 48.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 55,
			atq: 50,
			def: 45,
			atq_esp: 135,
			def_esp: 85,
			vel: 120,
		},
		descricao:
			"Seu cérebro consegue superar um super-computador. É dito que seu QI é de 5'000.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0065Alakazam.png/375px-0065Alakazam.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
	},
	{
		nome: "Machop",
		numero: 66, // considerando a national dex
		tipo: ["Lutador"],
		massa: 19.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 70,
			atq: 80,
			def: 50,
			atq_esp: 35,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Gosta de construir seu músculos. Treina em todos os estilos de artes marciais para se tornar mais forte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		lendario: false,
		obtencao: "Rota 10; Túnel de Rocha; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/02/0066Machop.png/375px-0066Machop.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Machop_(Pok%C3%A9mon)",
	},
	{
		nome: "Machoke",
		numero: 67, // considerando a national dex
		tipo: ["Lutador"],
		massa: 70.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 80,
			atq: 100,
			def: 70,
			atq_esp: 50,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Seu corpo musculoso é tão poderoso, deve usar um cinto regulador de energia para.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		lendario: false,
		obtencao: "Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0067Machoke.png/375px-0067Machoke.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Machamp",
		numero: 68, // considerando a national dex
		tipo: ["Lutador"],
		massa: 130.0, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 90,
			atq: 130,
			def: 80,
			atq_esp: 65,
			def_esp: 85,
			vel: 55,
		},
		descricao:
			"Usando seus pesados músculos, lança poderosos socos que conseguem mandar a vítima para o horizonte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0068Machamp.png/375px-0068Machamp.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pok%C3%A9mon)",
	},
	{
		nome: "Bellsprout",
		numero: 69, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 4.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 50,
			atq: 75,
			def: 35,
			atq_esp: 70,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Um Pokémon carnívoro que prende e come insetos. Usa seus pés raiz para sugar a umidade necessária.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		lendario: false,
		obtencao: "Rotas 5, 6, 7, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/66/0069Bellsprout.png/375px-0069Bellsprout.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pok%C3%A9mon)",
	},
	{
		nome: "Weepinbell",
		numero: 70, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 6.4, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 90,
			def: 50,
			atq_esp: 85,
			def_esp: 45,
			vel: 55,
		},
		descricao:
			"Expele Pó de Veneno para imobilizar seu adversário e então finaliza com um spray de Ácido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mata-Moscas",
		lendario: false,
		obtencao: "Rotas 12, 13, 14, e outra; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c1/0070Weepinbell.png/375px-0070Weepinbell.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pok%C3%A9mon)",
	},
	{
		nome: "Victreebel",
		numero: 71, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 15.5, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 80,
			atq: 105,
			def: 65,
			atq_esp: 100,
			def_esp: 60,
			vel: 70,
		},
		descricao:
			"É dito viver em grandes colônias nas profundezas das selvas, embora ninguém tenha retornando de lá.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mata-Moscas",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e9/0071Victreebel.png/375px-0071Victreebel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pok%C3%A9mon)",
	},
	{
		nome: "Tentacool",
		numero: 72, // considerando a national dex
		tipo: ["Água", " Veneno"],
		massa: 45.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 40,
			atq: 40,
			def: 35,
			atq_esp: 50,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Deriva em mares rasos. Pescadores que os fisgam por acidente são frequentemente punidos por seu Ácido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Água-Viva",
		lendario: false,
		obtencao: "Rotas 11, 12, 13, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6e/0072Tentacool.png/375px-0072Tentacool.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pok%C3%A9mon)",
	},
	{
		nome: "Tentacruel",
		numero: 73, // considerando a national dex
		tipo: ["Água", " Veneno"],
		massa: 55.5, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 80,
			atq: 70,
			def: 65,
			atq_esp: 80,
			def_esp: 120,
			vel: 100,
		},
		descricao:
			"Os tentáculos são normalmente mantidos curtos. Nas caçadas, os tentáculos são estendidos para enredar e imobilizar presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Água-Viva",
		lendario: false,
		obtencao: "Rotas 19, 20, e 21",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/cb/0073Tentacruel.png/375px-0073Tentacruel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pok%C3%A9mon)",
	},
	{
		nome: "Geodude",
		numero: 74, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 20.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 40,
			atq: 80,
			def: 100,
			atq_esp: 30,
			def_esp: 30,
			vel: 20,
		},
		descricao:
			"Encontrado em campos e montanhas. Pessoas, por confundi-los com pedras, pisam ou tropeçam neles.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		lendario: false,
		obtencao: "Monte da Lua; Túnel de Rocha; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0074Geodude.png/375px-0074Geodude.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)",
	},
	{
		nome: "Graveler",
		numero: 75, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 105.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 55,
			atq: 95,
			def: 115,
			atq_esp: 45,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Rola para se mover. Rola sobre qualquer obstáculo sem diminuir a velocidade ou muda sua direção.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		lendario: false,
		obtencao: "Estrada da Vitória; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d4/0075Graveler.png/375px-0075Graveler.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)",
	},
	{
		nome: "Golem",
		numero: 76, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 300.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 80,
			atq: 110,
			def: 130,
			atq_esp: 55,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Seu corpo semelhante a uma pedra é extremamente duro. Consegue facilmente aguentar explosões de dinamite sem dano algum.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Megaton",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0076Golem.png/375px-0076Golem.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)",
	},
	{
		nome: "Ponyta",
		numero: 77, // considerando a national dex
		tipo: ["Fogo"],
		massa: 30.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 50,
			atq: 85,
			def: 55,
			atq_esp: 65,
			def_esp: 65,
			vel: 90,
		},
		descricao:
			"Seus cascos são dez vezes mais duros que diamantes. Consegue atropelar qualquer coisa completamente plana em pouco tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Fogo",
		lendario: false,
		obtencao: "Rota 17; e Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0077Ponyta.png/375px-0077Ponyta.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
	},
	{
		nome: "Rapidash",
		numero: 78, // considerando a national dex
		tipo: ["Fogo"],
		massa: 95.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 65,
			atq: 100,
			def: 70,
			atq_esp: 80,
			def_esp: 80,
			vel: 105,
		},
		descricao:
			"Muito competitivo, este Pokémon persegue qualquer coisa que se mova rápido na esperança de competir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Fogo",
		lendario: false,
		obtencao: "Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a9/0078Rapidash.png/375px-0078Rapidash.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowpoke",
		numero: 79, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 36.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 90,
			atq: 65,
			def: 65,
			atq_esp: 40,
			def_esp: 40,
			vel: 15,
		},
		descricao:
			"Incrivelmente lento. Demora cinco segundos para sentir dor quando atacado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atordoado",
		lendario: false,
		obtencao: "Rotas 10, 12, e 13; Ilhas Espuma; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/19/0079Slowpoke.png/375px-0079Slowpoke.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowbro",
		numero: 80, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 78.5, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 95,
			atq: 75,
			def: 110,
			atq_esp: 100,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"É dito que o Shellder que está preso à sua cauda se alimenta dos restos que sobraram do hospedeiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo Eremita",
		lendario: false,
		obtencao: "Rotas 12, 13, e 23; Caverna de Cerulean; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a3/0080Slowbro.png/375px-0080Slowbro.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
	},
	{
		nome: "Magnemite",
		numero: 81, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 6.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 25,
			atq: 35,
			def: 70,
			atq_esp: 95,
			def_esp: 55,
			vel: 45,
		},
		descricao:
			"Usa anti-gravidade para permanecer suspenso. Aparece sem qualquer aviso e usa Onda-Trovão e movimentos similares.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Magnético",
		lendario: false,
		obtencao: "Rota 10; e Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a2/0081Magnemite.png/375px-0081Magnemite.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)",
	},
	{
		nome: "Magneton",
		numero: 82, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 60.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 50,
			atq: 60,
			def: 95,
			atq_esp: 120,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Gera estranhas ondas de rádio. Aumenta a temperatura em dois graus Célsius dentro de um quilômetro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Magnético",
		lendario: false,
		obtencao: "Usina Elétrica Abandonada; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d9/0082Magneton.png/375px-0082Magneton.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pok%C3%A9mon)",
	},
	{
		nome: "Farfetch'd",
		numero: 83, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 15.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 52,
			atq: 65,
			def: 55,
			atq_esp: 58,
			def_esp: 62,
			vel: 60,
		},
		descricao:
			"O ramo de cebolinha que segura é sua arma. É usado como uma espada de metal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato Selvagem",
		lendario: false,
		obtencao: "Rotas 12, e 13",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/99/0083Farfetch%27d.png/375px-0083Farfetch%27d.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
	},
	{
		nome: "Doduo",
		numero: 84, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 39.2, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 35,
			atq: 85,
			def: 45,
			atq_esp: 35,
			def_esp: 35,
			vel: 75,
		},
		descricao:
			"Um pássaro que compensa por seu vôo ruim com sua alta velocidade de patas. Deixa pegadas gigantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Gêmeo",
		lendario: false,
		obtencao: "Rotas 16, 17, e 18; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b9/0084Doduo.png/375px-0084Doduo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pok%C3%A9mon)",
	},
	{
		nome: "Dodrio",
		numero: 85, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 85.2, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 60,
			atq: 110,
			def: 70,
			atq_esp: 60,
			def_esp: 60,
			vel: 100,
		},
		descricao:
			"Usa seus três cérebros para executar planos complexos. Enquanto duas cabeças dormem, uma cabeça permanece acordada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Triplo",
		lendario: false,
		obtencao: "Rota 17; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0085Dodrio.png/375px-0085Dodrio.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Seel",
		numero: 86, // considerando a national dex
		tipo: ["Água"],
		massa: 90.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 65,
			atq: 45,
			def: 55,
			atq_esp: 45,
			def_esp: 70,
			vel: 45,
		},
		descricao:
			"O chifre protuberante em sua cabeça é muito duro. É usado para bater em gelo espesso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão Marinho",
		lendario: false,
		obtencao: "Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0086Seel.png/375px-0086Seel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seel_(Pok%C3%A9mon)",
	},
	{
		nome: "Dewgong",
		numero: 87, // considerando a national dex
		tipo: ["Água", " Gelo"],
		massa: 120.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 90,
			atq: 70,
			def: 80,
			atq_esp: 70,
			def_esp: 95,
			vel: 70,
		},
		descricao:
			"Armazena calor em seu corpo. Nada a 8 nós constantes, mesmo em águas intensamente frias.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão Marinho",
		lendario: false,
		obtencao: "Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2b/0087Dewgong.png/375px-0087Dewgong.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)",
	},
	{
		nome: "Grimer",
		numero: 88, // considerando a national dex
		tipo: ["Veneno"],
		massa: 30.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 80,
			atq: 80,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 25,
		},
		descricao:
			"Aparece em áreas imundas. Prospera consumindo lodo poluído que é bombeado para fora das fábricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		lendario: false,
		obtencao: "Mansão Pokémon; e Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0088Grimer.png/375px-0088Grimer.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)",
	},
	{
		nome: "Muk",
		numero: 89, // considerando a national dex
		tipo: ["Veneno"],
		massa: 30.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 105,
			atq: 105,
			def: 75,
			atq_esp: 65,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"Coberto por uma camada grossa de lama imunda e vil. É tão tóxico, mesmo suas pegadas contém veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		lendario: false,
		obtencao: "Mansão Pokémon; e Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/41/0089Muk.png/375px-0089Muk.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)",
	},
	{
		nome: "Shellder",
		numero: 90, // considerando a national dex
		tipo: ["Água"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 30,
			atq: 65,
			def: 100,
			atq_esp: 45,
			def_esp: 25,
			vel: 40,
		},
		descricao:
			"Sua carapaça dura repele qualquer tipo de ataque. É vulnerável somente quando abre sua carapaça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		lendario: false,
		obtencao: "Rotas 6, 11, 19, e outras; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3e/0090Shellder.png/375px-0090Shellder.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pok%C3%A9mon)",
	},
	{
		nome: "Cloyster",
		numero: 91, // considerando a national dex
		tipo: ["Água", " Gelo"],
		massa: 132.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 50,
			atq: 95,
			def: 180,
			atq_esp: 85,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Quando atacado, lança seus chifres em voleios rápidos. Seu interior nunca foi visto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0091Cloyster.png/375px-0091Cloyster.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pok%C3%A9mon)",
	},
	{
		nome: "Gastly",
		numero: 92, // considerando a national dex
		tipo: ["Fantasma", " Veneno"],
		massa: 0.1, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 30,
			atq: 35,
			def: 30,
			atq_esp: 100,
			def_esp: 35,
			vel: 80,
		},
		descricao:
			"Quase invisível, este Pokémon gasoso envolve o alvo e o põe para dormir sem que perceba.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás",
		lendario: false,
		obtencao: "Torre Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c2/0092Gastly.png/375px-0092Gastly.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pok%C3%A9mon)",
	},
	{
		nome: "Haunter",
		numero: 93, // considerando a national dex
		tipo: ["Fantasma", " Veneno"],
		massa: 0.1, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 45,
			atq: 50,
			def: 45,
			atq_esp: 115,
			def_esp: 55,
			vel: 95,
		},
		descricao:
			"Por causa de sua habilidade de atravessar paredes, é dito ser de outra dimensão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás",
		lendario: false,
		obtencao: "Torre Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d1/0093Haunter.png/375px-0093Haunter.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)",
	},
	{
		nome: "Gengar",
		numero: 94, // considerando a national dex
		tipo: ["Fantasma", " Veneno"],
		massa: 40.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 60,
			atq: 65,
			def: 60,
			atq_esp: 130,
			def_esp: 75,
			vel: 110,
		},
		descricao:
			"Sob a lua cheia, este Pokémon imita as sombras das pessoas e ri do medo delas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sombra",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/47/0094Gengar.png/375px-0094Gengar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
	},
	{
		nome: "Onix",
		numero: 95, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 210.0, // em kg
		altura: 8.8, // em metros
		estatistica: {
			ps: 35,
			atq: 45,
			def: 160,
			atq_esp: 30,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"A medida que cresce, as porções de rocha de seu corpo endurecem para se tornarem semelhante a diamante, mas de cor preta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Pedra",
		lendario: false,
		obtencao: "Túnel de Rocha; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0095Onix.png/375px-0095Onix.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Onix_(Pok%C3%A9mon)",
	},
	{
		nome: "Drowzee",
		numero: 96, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 32.4, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 48,
			def: 45,
			atq_esp: 43,
			def_esp: 90,
			vel: 42,
		},
		descricao:
			"Põe os adversários para dormir então come seus sonhos. Ocasionalmente fica doente por comer sonhos ruins.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipnose",
		lendario: false,
		obtencao: "Rota 11",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e4/0096Drowzee.png/375px-0096Drowzee.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)",
	},
	{
		nome: "Hypno",
		numero: 97, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 75.6, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 85,
			atq: 73,
			def: 70,
			atq_esp: 73,
			def_esp: 115,
			vel: 67,
		},
		descricao:
			"Quando trava os olhos em um oponente, usa uma mistura de movimentos psíquicos, como Hipnose e Confusão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipnose",
		lendario: false,
		obtencao: "Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0097Hypno.png/375px-0097Hypno.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pok%C3%A9mon)",
	},
	{
		nome: "Krabby",
		numero: 98, // considerando a national dex
		tipo: ["Água"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 30,
			atq: 105,
			def: 90,
			atq_esp: 25,
			def_esp: 25,
			vel: 50,
		},
		descricao:
			"Suas pinças não são só poderosas armas, são usadas para equilíbrio quando está andando de lado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo de Rio",
		lendario: false,
		obtencao: "Rotas 6, 10, 11, e outras; Zona Safari; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ed/0098Krabby.png/375px-0098Krabby.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pok%C3%A9mon)",
	},
	{
		nome: "Kingler",
		numero: 99, // considerando a national dex
		tipo: ["Água"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 55,
			atq: 130,
			def: 115,
			atq_esp: 50,
			def_esp: 50,
			vel: 75,
		},
		descricao:
			"A pinça maior possui 10'000 cv em poder de esmagamento. Contudo, seu tamanho o torna difícil de usar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinça",
		lendario: false,
		obtencao: "Rotas 10, 23, e 25; Caverna de Cerulean; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0099Kingler.png/375px-0099Kingler.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pok%C3%A9mon)",
	},
	{
		nome: "Voltorb",
		numero: 100, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 10.4, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 30,
			def: 50,
			atq_esp: 55,
			def_esp: 55,
			vel: 100,
		},
		descricao:
			"Normalmente encontrado em usinas elétricas. Facilmente confundido com uma Poké Bola, já eletrocutaram muitas pessoas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola",
		lendario: false,
		obtencao: "Rota 10; e Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0100Voltorb.png/375px-0100Voltorb.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)",
	},
	{
		nome: "Electrode",
		numero: 101, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 66.6, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 50,
			def: 70,
			atq_esp: 80,
			def_esp: 80,
			vel: 140,
		},
		descricao:
			"Armazena energia elétrica sob pressão muito alta. Geralmente explode com pouca ou nenhuma provocação.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola",
		lendario: false,
		obtencao: "Usina Elétrica Abandonada; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/db/0101Electrode.png/375px-0101Electrode.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggcute",
		numero: 102, // considerando a national dex
		tipo: ["Planta", " Psíquico"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 60,
			atq: 40,
			def: 80,
			atq_esp: 60,
			def_esp: 45,
			vel: 40,
		},
		descricao:
			"Comumente confundido por ovos. Quando perturbados, rapidamente se reúnem e atacam em bando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ovo",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/60/0102Exeggcute.png/375px-0102Exeggcute.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggutor",
		numero: 103, // considerando a national dex
		tipo: ["Planta", " Psíquico"],
		massa: 120.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 95,
			atq: 95,
			def: 85,
			atq_esp: 125,
			def_esp: 65,
			vel: 55,
		},
		descricao:
			"Seus gritos são muito barulhentos. Isso ocorre porque cada uma das três cabeças pensa no que quiser.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coco",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0103Exeggutor.png/375px-0103Exeggutor.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)",
	},
	{
		nome: "Cubone",
		numero: 104, // considerando a national dex
		tipo: ["Terra"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 50,
			atq: 50,
			def: 95,
			atq_esp: 40,
			def_esp: 50,
			vel: 35,
		},
		descricao:
			"Por nunca remover seu capacete, ninguém nunca viu o real rosto deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Solitário",
		lendario: false,
		obtencao: "Torre Pokémon; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/19/0104Cubone.png/375px-0104Cubone.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)",
	},
	{
		nome: "Marowak",
		numero: 105, // considerando a national dex
		tipo: ["Terra"],
		massa: 45.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 80,
			def: 110,
			atq_esp: 50,
			def_esp: 80,
			vel: 45,
		},
		descricao:
			"O osso que segura é sua arma principal. Lança o osso com destreza como um boomerang para nocautear os alvos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Acumulador de Ossos",
		lendario: false,
		obtencao: "Zona Safari; Estrada da Vitória; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a1/0105Marowak.png/375px-0105Marowak.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmonlee",
		numero: 106, // considerando a national dex
		tipo: ["Lutador"],
		massa: 49.8, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 50,
			atq: 120,
			def: 53,
			atq_esp: 35,
			def_esp: 110,
			vel: 87,
		},
		descricao:
			"Quando está com pressa, o comprimento de suas pernas aumenta progressivamente. Corre suavemente com passadas longas e inclinadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chutador",
		lendario: false,
		obtencao: "Dojo de tipo Lutador",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/00/0106Hitmonlee.png/375px-0106Hitmonlee.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmonchan",
		numero: 107, // considerando a national dex
		tipo: ["Lutador"],
		massa: 50.2, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 50,
			atq: 105,
			def: 79,
			atq_esp: 35,
			def_esp: 110,
			vel: 76,
		},
		descricao:
			"Embora aparente fazer nada, dispara socos em voleios rápidos impossíveis de ver.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Socador",
		lendario: false,
		obtencao: "Dojo de tipo Lutador",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0107Hitmonchan.png/375px-0107Hitmonchan.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pok%C3%A9mon)",
	},
	{
		nome: "Lickitung",
		numero: 108, // considerando a national dex
		tipo: ["Normal"],
		massa: 65.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 90,
			atq: 55,
			def: 75,
			atq_esp: 60,
			def_esp: 75,
			vel: 30,
		},
		descricao:
			"Sua língua pode ser estendida como a de um camaleão. Deixa uma sensação de formigamento quando lambe inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lambedor",
		lendario: false,
		obtencao: "Zona Safari; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f2/0108Lickitung.png/375px-0108Lickitung.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pok%C3%A9mon)",
	},
	{
		nome: "Koffing",
		numero: 109, // considerando a national dex
		tipo: ["Veneno"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 40,
			atq: 65,
			def: 95,
			atq_esp: 60,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Por armazenar vários tipos de gases tóxicos em seu corpo, é propenso a explodir sem aviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		lendario: false,
		obtencao: "Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0109Koffing.png/375px-0109Koffing.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)",
	},
	{
		nome: "Weezing",
		numero: 110, // considerando a national dex
		tipo: ["Veneno"],
		massa: 9.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 65,
			atq: 90,
			def: 120,
			atq_esp: 85,
			def_esp: 70,
			vel: 60,
		},
		descricao:
			"Vive e cresce absorvendo poeira, germes e gases venenosos contidos em resíduos tóxicos e lixo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		lendario: false,
		obtencao: "Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0109Koffing.png/375px-0109Koffing.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhyhorn",
		numero: 111, // considerando a national dex
		tipo: ["Terra", " Rocha"],
		massa: 115.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 80,
			atq: 85,
			def: 95,
			atq_esp: 30,
			def_esp: 30,
			vel: 25,
		},
		descricao:
			"Seus ossos maciços são 1'000 vezes mais duros que os ossos de humanos. Consegue facilmente mandar um trailer voando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espigão",
		lendario: false,
		obtencao: "Zona Safari; e Caverna Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7f/0111Rhyhorn.png/375px-0111Rhyhorn.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhydon",
		numero: 112, // considerando a national dex
		tipo: ["Terra", " Rocha"],
		massa: 120.0, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 105,
			atq: 130,
			def: 120,
			atq_esp: 45,
			def_esp: 45,
			vel: 40,
		},
		descricao:
			"Protegido por um couro semelhante a uma armadura, é capaz de viver em lava derretida de 2'000° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		obtencao: "Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/79/0112Rhydon.png/375px-0112Rhydon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)",
	},
	{
		nome: "Chansey",
		numero: 113, // considerando a national dex
		tipo: ["Normal"],
		massa: 34.6, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 250,
			atq: 5,
			def: 5,
			atq_esp: 35,
			def_esp: 105,
			vel: 50,
		},
		descricao:
			"Um Pokémon raro e indescritível que dizem trazer felicidade àqueles que conseguem obtê-la.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ovo",
		lendario: false,
		obtencao: "Zona Safari; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0113Chansey.png/375px-0113Chansey.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)",
	},
	{
		nome: "Tangela",
		numero: 114, // considerando a national dex
		tipo: ["Planta"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 55,
			def: 115,
			atq_esp: 100,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"Todo seu corpo é coberto por trepadeiras largas que são semelhantes a algas marinhas. Suas vinhas tremem enquanto caminha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trepadeira",
		lendario: false,
		obtencao: "Rota 21; e Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0114Tangela.png/375px-0114Tangela.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pok%C3%A9mon)",
	},
	{
		nome: "Kangaskhan",
		numero: 115, // considerando a national dex
		tipo: ["Normal"],
		massa: 80.0, // em kg
		altura: 2.2, // em metros
		estatistica: {
			ps: 105,
			atq: 95,
			def: 80,
			atq_esp: 40,
			def_esp: 80,
			vel: 90,
		},
		descricao:
			"A criança raramente sai da bolsa protetora da mãe antes dos três anos de idade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Materno",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e5/0115Kangaskhan.png/375px-0115Kangaskhan.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
	},
	{
		nome: "Horsea",
		numero: 116, // considerando a national dex
		tipo: ["Água"],
		massa: 8.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 30,
			atq: 40,
			def: 70,
			atq_esp: 70,
			def_esp: 25,
			vel: 60,
		},
		descricao:
			"Conhecido por abater insetos voadores com jatos de tintas precisos da superfície da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Rotas 10, 11, 12, e outras; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/14/0116Horsea.png/375px-0116Horsea.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pok%C3%A9mon)",
	},
	{
		nome: "Seadra",
		numero: 117, // considerando a national dex
		tipo: ["Água"],
		massa: 25.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 55,
			atq: 65,
			def: 95,
			atq_esp: 95,
			def_esp: 45,
			vel: 85,
		},
		descricao:
			"Capaz de nadar para trás, batendo rapidamente a cauda robusta e suas barbatanas peitorais em forma de asa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Rotas 12, 13, e 23; Ilhas Espuma; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0117Seadra.png/375px-0117Seadra.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pok%C3%A9mon)",
	},
	{
		nome: "Goldeen",
		numero: 118, // considerando a national dex
		tipo: ["Água"],
		massa: 15.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 45,
			atq: 67,
			def: 60,
			atq_esp: 35,
			def_esp: 50,
			vel: 63,
		},
		descricao:
			"Sua barbatana caudal ondula como um elegante vestido de baile, dando-lhe o apelido de 'Rainha da Água'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Dourado",
		lendario: false,
		obtencao:
			"Rotas 6, 10, 11, e outras; Zona Safari; Ilhas Espuma; Planalto Índigo e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b6/0118Goldeen.png/375px-0118Goldeen.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pok%C3%A9mon)",
	},
	{
		nome: "Seaking",
		numero: 119, // considerando a national dex
		tipo: ["Água"],
		massa: 39.0, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 80,
			atq: 92,
			def: 65,
			atq_esp: 65,
			def_esp: 80,
			vel: 68,
		},
		descricao:
			"Na temporada de desova de outono, podem ser vistos nadando majestosamente em rios e riachos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Dourado",
		lendario: false,
		obtencao: "Rota 23; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/76/0119Seaking.png/375px-0119Seaking.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seaking_(Pok%C3%A9mon)",
	},
	{
		nome: "Staryu",
		numero: 120, // considerando a national dex
		tipo: ["Água"],
		massa: 34.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 30,
			atq: 45,
			def: 55,
			atq_esp: 70,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Um Pokémon enigmático que regenera sem esforço qualquer apêndice que perca em batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Estrelada",
		lendario: false,
		obtencao: "Rotas 19, 20, e 21; e Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0120Staryu.png/375px-0120Staryu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pok%C3%A9mon)",
	},
	{
		nome: "Starmie",
		numero: 121, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 80.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 60,
			atq: 75,
			def: 85,
			atq_esp: 100,
			def_esp: 85,
			vel: 115,
		},
		descricao:
			"Seu núcleo central brilha com as sete cores do arco-íris. Algumas pessoas valorizam o núcleo como uma gema.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Misterioso",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/aa/0121Starmie.png/375px-0121Starmie.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pok%C3%A9mon)",
	},
	{
		nome: "Mr. Mime",
		numero: 122, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 54.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 40,
			atq: 45,
			def: 65,
			atq_esp: 100,
			def_esp: 120,
			vel: 90,
		},
		descricao:
			"Caso seja interrompido enquanto faz sua mímica, dá um tapa em quem interrompeu com suas mão abertas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Barreira",
		lendario: false,
		obtencao: "Por troca na rota 2",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/fb/0122Mr._Mime.png/375px-0122Mr._Mime.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pok%C3%A9mon)",
	},
	{
		nome: "Scyther",
		numero: 123, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 56.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 70,
			atq: 110,
			def: 80,
			atq_esp: 55,
			def_esp: 80,
			vel: 105,
		},
		descricao:
			"Com agilidade e velocidade semelhantes a de um ninja, consegue criar a ilusão de que há mais de um.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mantídeo",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/81/0123Scyther.png/375px-0123Scyther.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)",
	},
	{
		nome: "Jynx",
		numero: 124, // considerando a national dex
		tipo: ["Gelo", " Psíquico"],
		massa: 40.6, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 65,
			atq: 50,
			def: 35,
			atq_esp: 115,
			def_esp: 95,
			vel: 95,
		},
		descricao:
			"Mexe os quadris de maneira sedutora enquanto caminha. Pode fazer as pessoas dançarem em uníssono.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Humana",
		lendario: false,
		obtencao: "Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/07/0124Jynx.png/375px-0124Jynx.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pok%C3%A9mon)",
	},
	{
		nome: "Electabuzz",
		numero: 125, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 65,
			atq: 83,
			def: 57,
			atq_esp: 95,
			def_esp: 85,
			vel: 105,
		},
		descricao:
			"Normalmente encontrado próximo a usinas de energia, podem se afastar e causar grandes apagões nas cidades.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		lendario: false,
		obtencao: "Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0125Electabuzz.png/375px-0125Electabuzz.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pok%C3%A9mon)",
	},
	{
		nome: "Magmar",
		numero: 126, // considerando a national dex
		tipo: ["Fogo"],
		massa: 44.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 65,
			atq: 95,
			def: 57,
			atq_esp: 100,
			def_esp: 85,
			vel: 93,
		},
		descricao:
			"Seu corpo sempre queima com um brilho laranja que o permite se esconder em meio a chamas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cospe-fogo",
		lendario: false,
		obtencao: "Mansão Pokémon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/72/0126Magmar.png/375px-0126Magmar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pok%C3%A9mon)",
	},
	{
		nome: "Pinsir",
		numero: 127, // considerando a national dex
		tipo: ["Inseto"],
		massa: 55.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 65,
			atq: 125,
			def: 100,
			atq_esp: 55,
			def_esp: 70,
			vel: 85,
		},
		descricao:
			"Caso falhe em esmagar sua vítima com suas pinças, balança e joga a vítima com força.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lucanídeo",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a9/0127Pinsir.png/375px-0127Pinsir.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pok%C3%A9mon)",
	},
	{
		nome: "Tauros",
		numero: 128, // considerando a national dex
		tipo: ["Normal"],
		massa: 88.4, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 75,
			atq: 100,
			def: 95,
			atq_esp: 40,
			def_esp: 70,
			vel: 110,
		},
		descricao:
			"Quando mira em um inimigo, investe furiosamente enquanto chicoteia seu corpo com suas longas caudas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Touro Selvagem",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ad/0128Tauros.png/375px-0128Tauros.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
	},
	{
		nome: "Magikarp",
		numero: 129, // considerando a national dex
		tipo: ["Água"],
		massa: 10.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 20,
			atq: 10,
			def: 55,
			atq_esp: 15,
			def_esp: 20,
			vel: 80,
		},
		descricao:
			"Em um passado distante, de alguma maneira já foi mais forte que seus descendentes terrivelmente fracos que existem hoje.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe",
		lendario: false,
		obtencao:
			"Rotas 6, 10, 11, e outras; Zona Safari; Ilhas Espuma; Caverna de Cerulean; e Planalto Índigo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d1/0129Magikarp.png/375px-0129Magikarp.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pok%C3%A9mon)",
	},
	{
		nome: "Gyarados",
		numero: 130, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 235.0, // em kg
		altura: 6.5, // em metros
		estatistica: {
			ps: 95,
			atq: 125,
			def: 79,
			atq_esp: 60,
			def_esp: 100,
			vel: 81,
		},
		descricao:
			"Raramente visto na natureza. Enorme e cruel, é capaz de destruir cidades inteiras em um ataque de raiva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atrocidade",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0130Gyarados.png/375px-0130Gyarados.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)",
	},
	{
		nome: "Lapras",
		numero: 131, // considerando a national dex
		tipo: ["Água", " Gelo"],
		massa: 220.0, // em kg
		altura: 2.5, // em metros
		estatistica: {
			ps: 130,
			atq: 85,
			def: 80,
			atq_esp: 85,
			def_esp: 95,
			vel: 60,
		},
		descricao:
			"Um Pokémon que tem sido caçado até a quase extinção. Consegue transportar pessoas através de água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Transporte",
		lendario: false,
		obtencao: "Recebido na Companhia Silph",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/99/0131Lapras.png/375px-0131Lapras.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)",
	},
	{
		nome: "Ditto",
		numero: 132, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 48,
			atq: 48,
			def: 48,
			atq_esp: 48,
			def_esp: 48,
			vel: 48,
		},
		descricao:
			"Capaz de copiar o código genético do oponente para instantaneamente si transformar em uma duplicada do oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Transformação",
		lendario: false,
		obtencao:
			"Rotas 13, 14, 15, e outra; Túnel de Rocha; Mansão Pokémon; e Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/25/0132Ditto.png/375px-0132Ditto.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
	},
	{
		nome: "Eevee",
		numero: 133, // considerando a national dex
		tipo: ["Normal"],
		massa: 6.5, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 55,
			atq: 55,
			def: 50,
			atq_esp: 45,
			def_esp: 65,
			vel: 55,
		},
		descricao:
			"Seu código genético é irregular. Pode sofrer mutação caso seja exposto a radiação de Pedras elementais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Evolução",
		lendario: false,
		obtencao: "Recebido na Mansão Celadon",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0133Eevee.png/375px-0133Eevee.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
	},
	{
		nome: "Vaporeon",
		numero: 134, // considerando a national dex
		tipo: ["Água"],
		massa: 29.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 130,
			atq: 65,
			def: 60,
			atq_esp: 110,
			def_esp: 95,
			vel: 65,
		},
		descricao:
			"Vive próximo a água. Sua longa cauda é estriada com uma barbatana que muitas vezes confundida com a de uma sereia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato de Bolha",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6d/0134Vaporeon.png/375px-0134Vaporeon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Jolteon",
		numero: 135, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 24.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 65,
			atq: 65,
			def: 60,
			atq_esp: 110,
			def_esp: 95,
			vel: 130,
		},
		descricao:
			"Acumula íons negativos na atmosfera para lançar raios de 10'000 volts.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raios",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e3/0135Jolteon.png/375px-0135Jolteon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)",
	},
	{
		nome: "Flareon",
		numero: 136, // considerando a national dex
		tipo: ["Fogo"],
		massa: 25.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 65,
			atq: 130,
			def: 60,
			atq_esp: 95,
			def_esp: 110,
			vel: 65,
		},
		descricao:
			"Quando armazena energia térmica em seu corpo, sua temperatura poderia superar os 900° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f1/0136Flareon.png/375px-0136Flareon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon",
		numero: 137, // considerando a national dex
		tipo: ["Normal"],
		massa: 36.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 65,
			atq: 60,
			def: 70,
			atq_esp: 85,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"Um Pokémon que consiste inteiramente de código de programação. Capaz de se mover livremente no espaço cibernético.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		lendario: false,
		obtencao: "Casino Rocket",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8e/0137Porygon.png/375px-0137Porygon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pok%C3%A9mon)",
	},
	{
		nome: "Omanyte",
		numero: 138, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 7.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 35,
			atq: 40,
			def: 100,
			atq_esp: 90,
			def_esp: 55,
			vel: 35,
		},
		descricao:
			"Mesmo há muito extinto, em casos raros, pode ser ressuscitado a partir de fósseis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espiral",
		lendario: false,
		obtencao: "Revivido a partir de fóssil",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e6/0138Omanyte.png/375px-0138Omanyte.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pok%C3%A9mon)",
	},
	{
		nome: "Omastar",
		numero: 139, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 70,
			atq: 60,
			def: 125,
			atq_esp: 115,
			def_esp: 70,
			vel: 55,
		},
		descricao:
			"Um Pokémon pré-histórico que morreu quando sua pesada carapaça tornou impossível de caçar suas presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espiral",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/66/0139Omastar.png/375px-0139Omastar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pok%C3%A9mon)",
	},
	{
		nome: "Kabuto",
		numero: 140, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 11.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 30,
			atq: 80,
			def: 90,
			atq_esp: 55,
			def_esp: 45,
			vel: 55,
		},
		descricao:
			"Um Pokémon que foi ressuscitado a partir de um fóssil encontrado no que já foi o fundo do oceano, eras atrás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		obtencao: "Revivido a partir de fóssil",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d2/0140Kabuto.png/375px-0140Kabuto.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)",
	},
	{
		nome: "Kabutops",
		numero: 141, // considerando a national dex
		tipo: ["Rocha", " Água"],
		massa: 40.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 60,
			atq: 115,
			def: 105,
			atq_esp: 65,
			def_esp: 70,
			vel: 80,
		},
		descricao:
			"Seu formato peculiar é perfeito para nadar. Fatia sua presa com suas garras e drena os fluidos corporais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/41/0141Kabutops.png/375px-0141Kabutops.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pok%C3%A9mon)",
	},
	{
		nome: "Aerodactyl",
		numero: 142, // considerando a national dex
		tipo: ["Rocha", " Voador"],
		massa: 59.0, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 80,
			atq: 105,
			def: 65,
			atq_esp: 60,
			def_esp: 75,
			vel: 130,
		},
		descricao:
			"Um Pokémon pré-histórico feroz que morreu em tempos antigos. Foi ressuscitado usando DNA pego de âmbar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fóssil",
		lendario: false,
		obtencao: "Revivido a partir do Âmbar Antigo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2c/0142Aerodactyl.png/375px-0142Aerodactyl.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)",
	},
	{
		nome: "Snorlax",
		numero: 143, // considerando a national dex
		tipo: ["Normal"],
		massa: 460.0, // em kg
		altura: 2.1, // em metros
		estatistica: {
			ps: 160,
			atq: 110,
			def: 65,
			atq_esp: 65,
			def_esp: 110,
			vel: 30,
		},
		descricao:
			"Muito preguiçoso. Só come e dorme. À medida que seu corpo redondo aumenta, se torna cada vez mais preguiçoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dorminhoco",
		lendario: false,
		obtencao: "Rotas 12, e 16",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/375px-0143Snorlax.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
	},
	{
		nome: "Articuno",
		numero: 144, // considerando a national dex
		tipo: ["Gelo", " Voador"],
		massa: 55.4, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 90,
			atq: 85,
			def: 100,
			atq_esp: 95,
			def_esp: 125,
			vel: 85,
		},
		descricao:
			"Um pássaro lendário que supostamente aparece a pessoas condenadas que estão perdidas em montanhas geladas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Congelamento",
		lendario: true,
		obtencao: "Ilhas Espuma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d0/0144Articuno.png/375px-0144Articuno.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
	},
	{
		nome: "Zapdos",
		numero: 145, // considerando a national dex
		tipo: ["Elétrico", " Voador"],
		massa: 52.6, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 90,
			atq: 90,
			def: 85,
			atq_esp: 125,
			def_esp: 90,
			vel: 100,
		},
		descricao:
			"Um pássaro lendário que supostamente surge das nuvens enquanto solta raios enormes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		lendario: true,
		obtencao: "Usina Elétrica Abandonada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c6/0145Zapdos.png/375px-0145Zapdos.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
	},
	{
		nome: "Moltres",
		numero: 146, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 60.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 90,
			atq: 100,
			def: 90,
			atq_esp: 125,
			def_esp: 85,
			vel: 90,
		},
		descricao:
			"Conhecido como o pássaro lendário de fogo. Cada bater de suas asas cria um deslumbrante clarão de chamas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: true,
		obtencao: "Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0146Moltres.png/375px-0146Moltres.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
	},
	{
		nome: "Dratini",
		numero: 147, // considerando a national dex
		tipo: ["Dragão"],
		massa: 3.3, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 41,
			atq: 64,
			def: 45,
			atq_esp: 50,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Há muito considerado um Pokémon mítico até que, recentemente, foi descoberta uma colônia vivendo debaixo da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0147Dratini.png/375px-0147Dratini.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragonair",
		numero: 148, // considerando a national dex
		tipo: ["Dragão"],
		massa: 16.5, // em kg
		altura: 4.0, // em metros
		estatistica: {
			ps: 61,
			atq: 84,
			def: 65,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Um Pokémon místico que exala uma aura gentil. Possui a habilidade de mudar condições climáticas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Zona Safari",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0d/0148Dragonair.png/375px-0148Dragonair.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragonite",
		numero: 149, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 210.0, // em kg
		altura: 2.2, // em metros
		estatistica: {
			ps: 91,
			atq: 134,
			def: 95,
			atq_esp: 100,
			def_esp: 100,
			vel: 80,
		},
		descricao:
			"Um Pokémon marinho raramente visto. É dito que sua inteligência é comparada a de seres humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1c/0149Dragonite.png/375px-0149Dragonite.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)",
	},
	{
		nome: "Mewtwo",
		numero: 150, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 122.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 106,
			atq: 110,
			def: 90,
			atq_esp: 154,
			def_esp: 90,
			vel: 130,
		},
		descricao:
			"Foi criado por um cientista depois anos de experimentos de engenharia genética.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Genético",
		lendario: true,
		obtencao: "Caverna de Cerulean",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0150Mewtwo.png/375px-0150Mewtwo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)",
	},
	{
		nome: "Mew",
		numero: 151, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"É tão raro que ainda é dito ser uma miragem por vários especialistas. Somente algumas pessoas o viram ao redor do mundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nova Espécie",
		lendario: true,
		obtencao: "Por evento",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/375px-0151Mew.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)",
	},
	{
		nome: "Chikorita",
		numero: 152, // considerando a national dex
		tipo: ["Planta"],
		massa: 6.4, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 45,
			atq: 49,
			def: 65,
			atq_esp: 49,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Adora aproveitar a luz do sol. Usa a folha na cabeça para procurar lugares quentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		obtencao: "Laboratório do Prof. Elm",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0152Chikorita.png/375px-0152Chikorita.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)",
	},
	{
		nome: "Bayleef",
		numero: 153, // considerando a national dex
		tipo: ["Planta"],
		massa: 15.8, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 62,
			def: 80,
			atq_esp: 63,
			def_esp: 80,
			vel: 60,
		},
		descricao:
			"Um aroma picante emana de seu pescoço. O aroma age como um estimulante para restaurar saúde.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/85/0153Bayleef.png/375px-0153Bayleef.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pok%C3%A9mon)",
	},
	{
		nome: "Meganium",
		numero: 154, // considerando a national dex
		tipo: ["Planta"],
		massa: 100.5, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 80,
			atq: 82,
			def: 100,
			atq_esp: 83,
			def_esp: 100,
			vel: 80,
		},
		descricao:
			"O aroma que sobe de suas pétalas contém uma substância que acalma sentimentos agressivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8b/0154Meganium.png/375px-0154Meganium.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)",
	},
	{
		nome: "Cyndaquil",
		numero: 155, // considerando a national dex
		tipo: ["Fogo"],
		massa: 7.9, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 39,
			atq: 52,
			def: 43,
			atq_esp: 60,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Geralmente fica curvado. Quando está com raiva ou surpreso, atira chamas de suas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato de Fogo",
		lendario: false,
		obtencao: "Laboratório do Prof. Elm",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0155Cyndaquil.png/375px-0155Cyndaquil.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)",
	},
	{
		nome: "Quilava",
		numero: 156, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 58,
			atq: 64,
			def: 58,
			atq_esp: 80,
			def_esp: 65,
			vel: 80,
		},
		descricao:
			"É coberto totalmente por pelo não inflamável. Consegue aguentar qualquer tipo de ataque de fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0156Quilava.png/375px-0156Quilava.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)",
	},
	{
		nome: "Typhlosion",
		numero: 157, // considerando a national dex
		tipo: ["Fogo"],
		massa: 79.5, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 78,
			atq: 84,
			def: 78,
			atq_esp: 109,
			def_esp: 85,
			vel: 100,
		},
		descricao:
			"Quando sua raiva atinge seu ápice, fica tão quente que qualquer coisa que toque imediatamente pega fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/13/0157Typhlosion.png/375px-0157Typhlosion.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
	},
	{
		nome: "Totodile",
		numero: 158, // considerando a national dex
		tipo: ["Água"],
		massa: 9.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 65,
			def: 64,
			atq_esp: 44,
			def_esp: 48,
			vel: 43,
		},
		descricao:
			"Suas presas bem desenvolvidas são poderosas e capazes de esmagar qualquer coisa. Mesmo seu treinador deve ter cuidado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Grande",
		lendario: false,
		obtencao: "Laboratório do Prof. Elm",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0158Totodile.png/375px-0158Totodile.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pok%C3%A9mon)",
	},
	{
		nome: "Croconaw",
		numero: 159, // considerando a national dex
		tipo: ["Água"],
		massa: 25.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 65,
			atq: 80,
			def: 80,
			atq_esp: 59,
			def_esp: 63,
			vel: 58,
		},
		descricao:
			"Quando perde uma presa, uma nova cresce em seu lugar. Sempre há 48 presas revestindo na boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Grande",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/03/0159Croconaw.png/375px-0159Croconaw.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pok%C3%A9mon)",
	},
	{
		nome: "Feraligatr",
		numero: 160, // considerando a national dex
		tipo: ["Água"],
		massa: 88.8, // em kg
		altura: 2.3, // em metros
		estatistica: {
			ps: 85,
			atq: 105,
			def: 100,
			atq_esp: 79,
			def_esp: 83,
			vel: 78,
		},
		descricao:
			"Quando morde com suas mandíbulas grandes e poderosas, balança sua cabeça e estraçalha sua vítima com selvageria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Grande",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/29/0160Feraligatr.png/375px-0160Feraligatr.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
	},
	{
		nome: "Sentret",
		numero: 161, // considerando a national dex
		tipo: ["Normal"],
		massa: 6.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 35,
			atq: 46,
			def: 34,
			atq_esp: 35,
			def_esp: 45,
			vel: 20,
		},
		descricao:
			"Um Pokémon muito precavido, se levanta usando sua cauda para conseguir uma melhor visão de seus arredores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escoteiro",
		lendario: false,
		obtencao: "Rotas 1, 29, e 43",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/34/0161Sentret.png/375px-0161Sentret.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sentret_(Pok%C3%A9mon)",
	},
	{
		nome: "Furret",
		numero: 162, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.5, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 85,
			atq: 76,
			def: 64,
			atq_esp: 45,
			def_esp: 55,
			vel: 90,
		},
		descricao:
			"Constrói um ninho para caber seu corpo longo e esguio. O ninho é impossível de se entrar para outros Pokémon entrarem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Corpo-longo",
		lendario: false,
		obtencao: "Rotas 1, e 43",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a8/0162Furret.png/375px-0162Furret.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Furret_(Pok%C3%A9mon)",
	},
	{
		nome: "Hoothoot",
		numero: 163, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 21.2, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 60,
			atq: 30,
			def: 30,
			atq_esp: 36,
			def_esp: 56,
			vel: 50,
		},
		descricao:
			"Sempre fica em um pé só. Muda de pé tão rápido, o movimento raramente é visto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coruja",
		lendario: false,
		obtencao:
			"Rotas 1, 2, 5, e outras; Floresta de Ilex; Parque National; e Lago da Fúria",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0163Hoothoot.png/375px-0163Hoothoot.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hoothoot_(Pok%C3%A9mon)",
	},
	{
		nome: "Noctowl",
		numero: 164, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 40.8, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 100,
			atq: 50,
			def: 50,
			atq_esp: 76,
			def_esp: 96,
			vel: 70,
		},
		descricao:
			"Seus olhos são especialmente adaptados. Concentram mesmo até mesmo a luz fraca e permitem que veja no escuro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coruja",
		lendario: false,
		obtencao: "Rotas 2, 8, 13, e outras; e Floresta de Ilex",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/14/0164Noctowl.png/375px-0164Noctowl.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Noctowl_(Pok%C3%A9mon)",
	},
	{
		nome: "Ledyba",
		numero: 165, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 10.8, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 40,
			atq: 20,
			def: 30,
			atq_esp: 40,
			def_esp: 80,
			vel: 55,
		},
		descricao:
			"É muito tímido. Tem medo de se mover caso esteja sozinho. Mas será ativo caso esteja em grupo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cinco Estrelas",
		lendario: false,
		obtencao: "Rotas 2, 29, 30, e outras; e Parque National",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/91/0165Ledyba.png/375px-0165Ledyba.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ledyba_(Pok%C3%A9mon)",
	},
	{
		nome: "Ledian",
		numero: 166, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 35.6, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 55,
			atq: 35,
			def: 50,
			atq_esp: 55,
			def_esp: 110,
			vel: 85,
		},
		descricao:
			"Quando as estrelas piscam no céu noturno, esvoaça e espalha um pó brilhante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cinco Estrelas",
		lendario: false,
		obtencao: "Rotas 2, e 37",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4f/0166Ledian.png/375px-0166Ledian.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ledian_(Pok%C3%A9mon)",
	},
	{
		nome: "Spinarak",
		numero: 167, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 8.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 60,
			def: 40,
			atq_esp: 40,
			def_esp: 40,
			vel: 30,
		},
		descricao:
			"Permanece parado na mesma pose por dias em sua teia, esperando que sua presa desavisada se aproxime.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fio de Saliva",
		lendario: false,
		obtencao: "Rotas 2, 29, 30, e outras; e Parque National",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2b/0167Spinarak.png/375px-0167Spinarak.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spinarak_(Pok%C3%A9mon)",
	},
	{
		nome: "Ariados",
		numero: 168, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 33.5, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 70,
			atq: 90,
			def: 70,
			atq_esp: 60,
			def_esp: 60,
			vel: 40,
		},
		descricao:
			"Tece seus fios não apenas por trás, mas também pela boca. É difícil dizer qual parte é qual.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perna-longa",
		lendario: false,
		obtencao: "Rotas 2, e 37",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0168Ariados.png/375px-0168Ariados.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ariados_(Pok%C3%A9mon)",
	},
	{
		nome: "Crobat",
		numero: 169, // considerando a national dex
		tipo: ["Veneno", " Voador"],
		massa: 75.0, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 85,
			atq: 90,
			def: 80,
			atq_esp: 70,
			def_esp: 80,
			vel: 130,
		},
		descricao:
			"Seu vôo na escuridão é tão silencioso que pode não ser notado mesmo quando está próximo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/35/0169Crobat.png/375px-0169Crobat.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crobat_(Pok%C3%A9mon)",
	},
	{
		nome: "Chinchou",
		numero: 170, // considerando a national dex
		tipo: ["Água", " Elétrico"],
		massa: 12.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 75,
			atq: 38,
			def: 38,
			atq_esp: 56,
			def_esp: 56,
			vel: 67,
		},
		descricao:
			"Na escuridão do chão oceânico, sua única maneira de comunicação é piscar suas luzes constantemente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pescador",
		lendario: false,
		obtencao: "Rotas 20, 21, 26, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/ca/0170Chinchou.png/375px-0170Chinchou.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chinchou_(Pok%C3%A9mon)",
	},
	{
		nome: "Lanturn",
		numero: 171, // considerando a national dex
		tipo: ["Água", " Elétrico"],
		massa: 22.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 125,
			atq: 58,
			def: 58,
			atq_esp: 76,
			def_esp: 76,
			vel: 67,
		},
		descricao:
			"A luz que emite é tão brilhante que consegue iluminar a superfície do mar de uma profundidade maior que cinco quilômetros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luz",
		lendario: false,
		obtencao: "Rotas 20, 21, 26, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/09/0171Lanturn.png/375px-0171Lanturn.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lanturn_(Pok%C3%A9mon)",
	},
	{
		nome: "Pichu",
		numero: 172, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 20,
			atq: 40,
			def: 15,
			atq_esp: 35,
			def_esp: 35,
			vel: 60,
		},
		descricao:
			"Ainda não é capaz de armazenar eletricidade. Consegue soltar uma faísca se for assustado ou divertido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ratinho",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f3/0172Pichu.png/375px-0172Pichu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pichu_(Pok%C3%A9mon)",
	},
	{
		nome: "Cleffa",
		numero: 173, // considerando a national dex
		tipo: ["Fada"],
		massa: 3.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 50,
			atq: 25,
			def: 28,
			atq_esp: 45,
			def_esp: 55,
			vel: 15,
		},
		descricao:
			"Por sua silhueta incomum, semelhante a uma estrela, pessoas acreditam que veio de um meteoro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Estrelada",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/73/0173Cleffa.png/375px-0173Cleffa.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cleffa_(Pok%C3%A9mon)",
	},
	{
		nome: "Igglybuff",
		numero: 174, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 1.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 90,
			atq: 30,
			def: 15,
			atq_esp: 40,
			def_esp: 20,
			vel: 15,
		},
		descricao:
			"Tem um corpo muito macio. Quando começa a rolar, irá saltar por toda parte e será impossível parar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/06/0174Igglybuff.png/375px-0174Igglybuff.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Igglybuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Togepi",
		numero: 175, // considerando a national dex
		tipo: ["Fada"],
		massa: 1.5, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 35,
			atq: 20,
			def: 65,
			atq_esp: 40,
			def_esp: 65,
			vel: 20,
		},
		descricao:
			"A casca aparenta estar cheia de alegria. É dito que compartilhará boa sorte quando tratado com gentileza.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola de Espinhos",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/01/0175Togepi.png/375px-0175Togepi.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togepi_(Pok%C3%A9mon)",
	},
	{
		nome: "Togetic",
		numero: 176, // considerando a national dex
		tipo: ["Fada", " Voador"],
		massa: 3.2, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 55,
			atq: 40,
			def: 85,
			atq_esp: 80,
			def_esp: 105,
			vel: 40,
		},
		descricao:
			"É dito que aparece diante de pessoas carinhosas, de bom coração e as cobrirá de felicidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Felicidade",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3b/0176Togetic.png/375px-0176Togetic.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togetic_(Pok%C3%A9mon)",
	},
	{
		nome: "Natu",
		numero: 177, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 2.0, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 40,
			atq: 50,
			def: 45,
			atq_esp: 70,
			def_esp: 45,
			vel: 70,
		},
		descricao:
			"Por suas asas não estarem completamente crescidas, tem que pular para se locomover. Sempre está encarando algo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		lendario: false,
		obtencao: "Ruínas de Alfa",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/71/0177Natu.png/375px-0177Natu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Natu_(Pok%C3%A9mon)",
	},
	{
		nome: "Xatu",
		numero: 178, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 15.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 65,
			atq: 75,
			def: 70,
			atq_esp: 95,
			def_esp: 70,
			vel: 95,
		},
		descricao:
			"É dito que permanece parado e quieto por ver o passado e o futuro ao mesmo tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Místico",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c3/0178Xatu.png/375px-0178Xatu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Xatu_(Pok%C3%A9mon)",
	},
	{
		nome: "Mareep",
		numero: 179, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 7.8, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 55,
			atq: 40,
			def: 40,
			atq_esp: 65,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Caso a eletricidade estática acumule em seu corpo, seu velo dobra de volume. Tocá-lo causa um choque elétrico em quem tocou.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lã",
		lendario: false,
		obtencao: "Rotas 32, 42, e 43",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0179Mareep.png/375px-0179Mareep.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mareep_(Pok%C3%A9mon)",
	},
	{
		nome: "Flaaffy",
		numero: 180, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 13.3, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 70,
			atq: 55,
			def: 55,
			atq_esp: 80,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Como resultado de armazenar muita eletricidade, desenvolveu manchas onde nem mesmo a lã felpuda cresce.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lã",
		lendario: false,
		obtencao: "Rotas 42, e 43",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/19/0180Flaaffy.png/375px-0180Flaaffy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flaaffy_(Pok%C3%A9mon)",
	},
	{
		nome: "Ampharos",
		numero: 181, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 61.5, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 90,
			atq: 75,
			def: 75,
			atq_esp: 115,
			def_esp: 90,
			vel: 55,
		},
		descricao:
			"A ponta de sua cauda brilha intensamente e pode ser ser vista de longe. Atua como um farol para pessoas perdidas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luz",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c2/0181Ampharos.png/375px-0181Ampharos.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ampharos_(Pok%C3%A9mon)",
	},
	{
		nome: "Bellossom",
		numero: 182, // considerando a national dex
		tipo: ["Planta"],
		massa: 5.8, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 75,
			atq: 80,
			def: 85,
			atq_esp: 90,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"Abundante nos trópicos. Quando dança, suas pétalas se esfregam e emitem um som agradável de toque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/51/0182Bellossom.png/375px-0182Bellossom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bellossom_(Pok%C3%A9mon)",
	},
	{
		nome: "Marill",
		numero: 183, // considerando a national dex
		tipo: ["Água", " Fada"],
		massa: 8.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 70,
			atq: 20,
			def: 50,
			atq_esp: 20,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"A ponta de sua cauda, que contém óleo mais leve que água, o permite nadar sem se afogar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato de Água",
		lendario: false,
		obtencao: "Rota 42; e Monte Mortar",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8e/0183Marill.png/375px-0183Marill.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marill_(Pok%C3%A9mon)",
	},
	{
		nome: "Azumarill",
		numero: 184, // considerando a national dex
		tipo: ["Água", " Fada"],
		massa: 28.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 100,
			atq: 50,
			def: 80,
			atq_esp: 50,
			def_esp: 80,
			vel: 50,
		},
		descricao:
			"Quando está quieto e ouvindo atentamente, consegue dizer o que está em rios turbulentos e rápidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coelho de Água",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0184Azumarill.png/375px-0184Azumarill.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Azumarill_(Pok%C3%A9mon)",
	},
	{
		nome: "Sudowoodo",
		numero: 185, // considerando a national dex
		tipo: ["Rocha"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 70,
			atq: 100,
			def: 115,
			atq_esp: 30,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Apesar de sempre fingir ser uma árvore, sua composição aparenta se aproximar mais a de uma rocha do que a de uma árvore.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Imitação",
		lendario: false,
		obtencao: "Rota 36",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2f/0185Sudowoodo.png/375px-0185Sudowoodo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sudowoodo_(Pok%C3%A9mon)",
	},
	{
		nome: "Politoed",
		numero: 186, // considerando a national dex
		tipo: ["Água"],
		massa: 33.9, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 90,
			atq: 75,
			def: 75,
			atq_esp: 90,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Sempre que três ou mais deles se reúnem, cantam em alto volume e acaba soando como um grito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sapo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9b/0186Politoed.png/375px-0186Politoed.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Politoed_(Pok%C3%A9mon)",
	},
	{
		nome: "Hoppip",
		numero: 187, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 0.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 35,
			atq: 35,
			def: 40,
			atq_esp: 35,
			def_esp: 55,
			vel: 50,
		},
		descricao:
			"Para evitar que seja levado pelo vento, se reúne em grupos. Gostam de brizas leves, no entanto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão",
		lendario: false,
		obtencao: "Rotas 11, 13, 14, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c9/0187Hoppip.png/375px-0187Hoppip.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hoppip_(Pok%C3%A9mon)",
	},
	{
		nome: "Skiploom",
		numero: 188, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 55,
			atq: 45,
			def: 50,
			atq_esp: 45,
			def_esp: 65,
			vel: 80,
		},
		descricao:
			"A flor no topo de sua cabeça abre e fecha à medida que a temperatura aumenta ou diminui.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão",
		lendario: false,
		obtencao: "Rota 14",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f2/0188Skiploom.png/375px-0188Skiploom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skiploom_(Pok%C3%A9mon)",
	},
	{
		nome: "Jumpluff",
		numero: 189, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 3.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 75,
			atq: 55,
			def: 70,
			atq_esp: 55,
			def_esp: 85,
			vel: 110,
		},
		descricao:
			"Uma vez que pega o vento, habilmente controla seus esporos de algodão para flutuar, mesmo ao redor do mundo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Algodão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/64/0189Jumpluff.png/375px-0189Jumpluff.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jumpluff_(Pok%C3%A9mon)",
	},
	{
		nome: "Aipom",
		numero: 190, // considerando a national dex
		tipo: ["Normal"],
		massa: 11.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 55,
			atq: 70,
			def: 55,
			atq_esp: 40,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Sua cauda é tão poderosa que consegue usá-la para agarrar um galho de árvore e se manter no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cauda Longa",
		lendario: false,
		obtencao: "Rotas 29, 30, 31, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0d/0190Aipom.png/375px-0190Aipom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aipom_(Pok%C3%A9mon)",
	},
	{
		nome: "Sunkern",
		numero: 191, // considerando a national dex
		tipo: ["Planta"],
		massa: 1.8, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 30,
			atq: 30,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 30,
		},
		descricao:
			"Vive bebendo apenas gotas de orvalho debaixo das plantas. Dizem que não come nada além disso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Semente",
		lendario: false,
		obtencao: "Rota 24; e Parque Nacional",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/67/0191Sunkern.png/375px-0191Sunkern.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sunkern_(Pok%C3%A9mon)",
	},
	{
		nome: "Sunflora",
		numero: 192, // considerando a national dex
		tipo: ["Planta"],
		massa: 8.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 75,
			atq: 75,
			def: 55,
			atq_esp: 105,
			def_esp: 85,
			vel: 30,
		},
		descricao:
			"Converte luz solar em energia. Na escuridão depois do por-do-sol, fecha suas pétalas e permanece parado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sol",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0d/0192Sunflora.png/375px-0192Sunflora.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sunflora_(Pok%C3%A9mon)",
	},
	{
		nome: "Yanma",
		numero: 193, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 65,
			atq: 65,
			def: 45,
			atq_esp: 75,
			def_esp: 45,
			vel: 95,
		},
		descricao:
			"Quando bate suas asas muito rápido, consegue gerar ondas de choque que quebrarão janelas próximas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Asa Clara",
		lendario: false,
		obtencao: "Rota 35",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2d/0193Yanma.png/375px-0193Yanma.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yanma_(Pok%C3%A9mon)",
	},
	{
		nome: "Wooper",
		numero: 194, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 8.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 55,
			atq: 45,
			def: 45,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Este Pokémon vive em água fria. Deixa a água para procurar comida quando fica frio do lado de fora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Água",
		lendario: false,
		obtencao: "Rota 32; Ruínas de Alfa; e Caverna da União",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0194Wooper.png/375px-0194Wooper.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wooper_(Pok%C3%A9mon)",
	},
	{
		nome: "Quagsire",
		numero: 195, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 75.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 95,
			atq: 85,
			def: 85,
			atq_esp: 65,
			def_esp: 65,
			vel: 35,
		},
		descricao:
			"Este Pokémon despreocupado tem uma natureza descontraída. Enquanto nada, sempre esbarra nos cascos dos barcos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Água",
		lendario: false,
		obtencao:
			"Rota 10, 12, 13, e outras; Caverna do Monte Prata; Ruínas de Alfa; e Caverna da União",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/01/0195Quagsire.png/375px-0195Quagsire.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Quagsire_(Pok%C3%A9mon)",
	},
	{
		nome: "Espeon",
		numero: 196, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 26.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 65,
			atq: 65,
			def: 60,
			atq_esp: 130,
			def_esp: 95,
			vel: 110,
		},
		descricao:
			"Usa o fino cabelo que cobre seu corpo para sentir correntes de ar e prever as ações de seu oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sol",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/67/0196Espeon.png/375px-0196Espeon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Espeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Umbreon",
		numero: 197, // considerando a national dex
		tipo: ["Noturno"],
		massa: 27.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 95,
			atq: 65,
			def: 110,
			atq_esp: 60,
			def_esp: 130,
			vel: 65,
		},
		descricao:
			"Quando a escuridão cai, os anéis em seu corpo começam a brilhar, causando medo no coração de qualquer um próximo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Luar",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e1/0197Umbreon.png/375px-0197Umbreon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Umbreon_(Pok%C3%A9mon)",
	},
	{
		nome: "Murkrow",
		numero: 198, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 2.1, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 60,
			atq: 85,
			def: 42,
			atq_esp: 85,
			def_esp: 42,
			vel: 91,
		},
		descricao:
			"Temido e odiado por muitos, acredita-se que traga infortúnio a todos aqueles que o veem à noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuridão",
		lendario: false,
		obtencao: "Rotas 7, e 16",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e7/0198Murkrow.png/375px-0198Murkrow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Murkrow_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowking",
		numero: 199, // considerando a national dex
		tipo: ["Água", " Psíquico"],
		massa: 79.5, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 95,
			atq: 75,
			def: 80,
			atq_esp: 100,
			def_esp: 110,
			vel: 30,
		},
		descricao:
			"Possui inteligência e intuição incríveis. Seja qual for a situação, permanece calmo e controlado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Real",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0199Slowking.png/375px-0199Slowking.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowking_(Pok%C3%A9mon)",
	},
	{
		nome: "Misdreavus",
		numero: 200, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 1.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 85,
			def_esp: 85,
			vel: 85,
		},
		descricao:
			"Gosta de aplicar trotes travessos, como gritar e lamentar para assustar as pessoas à noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pio",
		lendario: false,
		obtencao: "Caverna do Monte Prata",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1f/0200Misdreavus.png/375px-0200Misdreavus.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Misdreavus_(Pok%C3%A9mon)",
	},
	{
		nome: "Unown",
		numero: 201, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 5.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 48,
			atq: 72,
			def: 48,
			atq_esp: 72,
			def_esp: 48,
			vel: 48,
		},
		descricao:
			"Seu corpo plano e fino está sempre preso em paredes. Seu formato aparenta ter algum significado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Símbolo",
		lendario: false,
		obtencao: "Dentro das Ruínas de Alfa",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/ff/HOME0201.png/150px-HOME0201.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/5e/HOME0201B.png/150px-HOME0201B.png",
			"https://archives.bulbagarden.net/media/upload/thumb/8/8d/HOME0201C.png/150px-HOME0201C.png",
			"https://archives.bulbagarden.net/media/upload/thumb/9/92/HOME0201D.png/150px-HOME0201D.png",
			"https://archives.bulbagarden.net/media/upload/thumb/2/2b/HOME0201E.png/150px-HOME0201E.png",
			"https://archives.bulbagarden.net/media/upload/thumb/b/b4/HOME0201F.png/150px-HOME0201F.png",
			"https://archives.bulbagarden.net/media/upload/thumb/a/a8/HOME0201G.png/150px-HOME0201G.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/5d/HOME0201H.png/150px-HOME0201H.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/59/HOME0201I.png/150px-HOME0201I.png",
			"https://archives.bulbagarden.net/media/upload/thumb/9/92/HOME0201J.png/150px-HOME0201J.png",
			"https://archives.bulbagarden.net/media/upload/thumb/8/8e/HOME0201K.png/150px-HOME0201K.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/HOME0201L.png/150px-HOME0201L.png",
			"https://archives.bulbagarden.net/media/upload/thumb/9/9e/HOME0201M.png/150px-HOME0201M.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/50/HOME0201N.png/150px-HOME0201N.png",
			"https://archives.bulbagarden.net/media/upload/thumb/0/02/HOME0201O.png/150px-HOME0201O.png",
			"https://archives.bulbagarden.net/media/upload/thumb/0/06/HOME0201P.png/150px-HOME0201P.png",
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/HOME0201Q.png/150px-HOME0201Q.png",
			"https://archives.bulbagarden.net/media/upload/thumb/6/69/HOME0201R.png/150px-HOME0201R.png",
			"https://archives.bulbagarden.net/media/upload/thumb/e/e0/HOME0201S.png/150px-HOME0201S.png",
			"https://archives.bulbagarden.net/media/upload/thumb/d/db/HOME0201T.png/150px-HOME0201T.png",
			"https://archives.bulbagarden.net/media/upload/thumb/7/70/HOME0201U.png/150px-HOME0201U.png",
			"https://archives.bulbagarden.net/media/upload/thumb/0/03/HOME0201V.png/150px-HOME0201V.png",
			"https://archives.bulbagarden.net/media/upload/thumb/8/8f/HOME0201W.png/150px-HOME0201W.png",
			"https://archives.bulbagarden.net/media/upload/thumb/d/d5/HOME0201X.png/150px-HOME0201X.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/51/HOME0201Y.png/150px-HOME0201Y.png",
			"https://archives.bulbagarden.net/media/upload/thumb/7/77/HOME0201Z.png/150px-HOME0201Z.png",
			"https://archives.bulbagarden.net/media/upload/thumb/4/48/HOME0201EX.png/150px-HOME0201EX.png",
			"https://archives.bulbagarden.net/media/upload/thumb/2/23/HOME0201QU.png/150px-HOME0201QU.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Unown_(Pok%C3%A9mon)",
	},
	{
		nome: "Wobboffet",
		numero: 202, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 28.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 190,
			atq: 33,
			def: 58,
			atq_esp: 33,
			def_esp: 58,
			vel: 33,
		},
		descricao:
			"Odeia luz e choque. Quando atacado, infla seu corpo para aumentar seu contra-ataque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Paciente",
		lendario: false,
		obtencao: "Caverna Escura",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7d/0202Wobbuffet.png/375px-0202Wobbuffet.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wobbuffet_(Pok%C3%A9mon)",
	},
	{
		nome: "Girafarig",
		numero: 203, // considerando a national dex
		tipo: ["Normal", " Psíquico"],
		massa: 41.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 70,
			atq: 80,
			def: 65,
			atq_esp: 90,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Sua cauda possui um pequeno cérebro próprio. Caso alguém se aproxime, pode reagir ao cheiro e morder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pescoço Longo",
		lendario: false,
		obtencao: "Rota 43",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/65/0203Girafarig.png/375px-0203Girafarig.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Girafarig_(Pok%C3%A9mon)",
	},
	{
		nome: "Pineco",
		numero: 204, // considerando a national dex
		tipo: ["Inseto"],
		massa: 7.2, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 65,
			def: 90,
			atq_esp: 35,
			def_esp: 35,
			vel: 15,
		},
		descricao:
			"Gosta de fazer sua casca mais espessa adicionando camadas de casca de árvores. O peso adicional não lhe incomoda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		lendario: false,
		obtencao: "Rotas 26, 27, 29, e outras; Floresta de Ilex; e Lago da Fúria",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7a/0204Pineco.png/375px-0204Pineco.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pineco_(Pok%C3%A9mon)",
	},
	{
		nome: "Forretress",
		numero: 205, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 125.8, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 75,
			atq: 90,
			def: 140,
			atq_esp: 60,
			def_esp: 60,
			vel: 40,
		},
		descricao:
			"Seu corpo inteiro é protegido por uma concha tão dura quanto aço. O que se esconde dentro da armadura é um total mistério.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/45/0205Forretress.png/375px-0205Forretress.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Forretress_(Pok%C3%A9mon)",
	},
	{
		nome: "Dunsparce",
		numero: 206, // considerando a national dex
		tipo: ["Normal"],
		massa: 14.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 100,
			atq: 70,
			def: 70,
			atq_esp: 65,
			def_esp: 65,
			vel: 45,
		},
		descricao:
			"Quando avistado, este Pokémon escapa para trás perfurando furiosamente o chão com sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Terra",
		lendario: false,
		obtencao: "Caverna Escura",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0206Dunsparce.png/375px-0206Dunsparce.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dunsparce_(Pok%C3%A9mon)",
	},
	{
		nome: "Gligar",
		numero: 207, // considerando a national dex
		tipo: ["Terra", " Voador"],
		massa: 64.8, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 65,
			atq: 75,
			def: 105,
			atq_esp: 35,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Voa direto ao rosto do alvo e depois agarra a vítima assustada para injetar veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião Voador",
		lendario: false,
		obtencao: "Rota 45",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/49/0207Gligar.png/375px-0207Gligar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gligar_(Pok%C3%A9mon)",
	},
	{
		nome: "Steelix",
		numero: 208, // considerando a national dex
		tipo: ["Metal", " Terra"],
		massa: 400.0, // em kg
		altura: 9.2, // em metros
		estatistica: {
			ps: 75,
			atq: 85,
			def: 200,
			atq_esp: 55,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Seu corpo tem sido comprimido profundamente sob o solo. Como resultado, é mais duro do que um diamante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Ferro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2a/0208Steelix.png/375px-0208Steelix.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Steelix_(Pok%C3%A9mon)",
	},
	{
		nome: "Snubbull",
		numero: 209, // considerando a national dex
		tipo: ["Fada"],
		massa: 7.8, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 60,
			atq: 80,
			def: 50,
			atq_esp: 40,
			def_esp: 40,
			vel: 30,
		},
		descricao:
			"Apesar de parecer assustador, é, na verdade, bondoso e afetuoso. É muito popular entre mulheres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		lendario: false,
		obtencao: "Rotas 5, 6, 7, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/24/0209Snubbull.png/375px-0209Snubbull.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snubbull_(Pok%C3%A9mon)",
	},
	{
		nome: "Granbull",
		numero: 210, // considerando a national dex
		tipo: ["Fada"],
		massa: 48.7, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 90,
			atq: 120,
			def: 75,
			atq_esp: 60,
			def_esp: 60,
			vel: 45,
		},
		descricao:
			"Na verdade, é tímido e facilmente assustado. Quando atacado, se agita para afastar seu agressor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		lendario: false,
		obtencao: "Rota 6",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0210Granbull.png/375px-0210Granbull.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Granbull_(Pok%C3%A9mon)",
	},
	{
		nome: "Qwilfish",
		numero: 211, // considerando a national dex
		tipo: ["Água", " Veneno"],
		massa: 3.9, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 65,
			atq: 95,
			def: 75,
			atq_esp: 55,
			def_esp: 55,
			vel: 85,
		},
		descricao:
			"Para disparar seus espinhos venenosos, deve inflar seu corpo bebendo mais de 10 litros de água de uma vez.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		obtencao: "Rotas 12, 13, e 32",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0211Qwilfish.png/375px-0211Qwilfish.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Qwilfish_(Pok%C3%A9mon)",
	},
	{
		nome: "Scizor",
		numero: 212, // considerando a national dex
		tipo: ["Inseto", " Metal"],
		massa: 118.0, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 70,
			atq: 130,
			def: 100,
			atq_esp: 55,
			def_esp: 80,
			vel: 65,
		},
		descricao:
			"Balança suas pinças com padrão de olho para assustar seus inimigos. Isso faz com que pareça que tenha três cabeças.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinça",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/39/0212Scizor.png/375px-0212Scizor.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Scizor_(Pok%C3%A9mon)",
	},
	{
		nome: "Shuckle",
		numero: 213, // considerando a national dex
		tipo: ["Inseto", " Rocha"],
		massa: 20.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 20,
			atq: 10,
			def: 230,
			atq_esp: 10,
			def_esp: 230,
			vel: 5,
		},
		descricao:
			"As frutas que armazena em sua concha semelhante a um caso, se decompõem e se tornam um líquido pegajoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mofo",
		lendario: false,
		obtencao: "Rota 40; Torre Queimada; e Caverna Escura",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/59/0213Shuckle.png/375px-0213Shuckle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shuckle_(Pok%C3%A9mon)",
	},
	{
		nome: "Heracross",
		numero: 214, // considerando a national dex
		tipo: ["Inseto", " Lutador"],
		massa: 54.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 80,
			atq: 125,
			def: 75,
			atq_esp: 40,
			def_esp: 95,
			vel: 85,
		},
		descricao:
			"Este poderoso Pokémon empurra seu chifre premiado sob a barriga de seus inimigos, depois os levanta e os joga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Unicórnio",
		lendario: false,
		obtencao: "Rotas 29, 30, 31, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/75/0214Heracross.png/375px-0214Heracross.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Heracross_(Pok%C3%A9mon)",
	},
	{
		nome: "Sneasel",
		numero: 215, // considerando a national dex
		tipo: ["Noturno", " Gelo"],
		massa: 28.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 55,
			atq: 95,
			def: 55,
			atq_esp: 35,
			def_esp: 75,
			vel: 115,
		},
		descricao:
			"Suas patas escondem garras afiadas. Se atacado, de repente estende as garras e assusta seu inimigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra Afiada",
		lendario: false,
		obtencao: "Rota 28; Monte Prata; e Caminho Gelado",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d4/0215Sneasel.png/375px-0215Sneasel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sneasel_(Pok%C3%A9mon)",
	},
	{
		nome: "Teddiursa",
		numero: 216, // considerando a national dex
		tipo: ["Normal"],
		massa: 8.8, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 60,
			atq: 80,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"Caso encontre mel, sua marca crescente brilha. Sempre lambe suas patas por sempre estarem encharcadas com mel.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ursinho",
		lendario: false,
		obtencao: "Rota 45; e Caverna Escura",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/11/0216Teddiursa.png/375px-0216Teddiursa.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Teddiursa_(Pok%C3%A9mon)",
	},
	{
		nome: "Ursaring",
		numero: 217, // considerando a national dex
		tipo: ["Normal"],
		massa: 125.8, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 90,
			atq: 130,
			def: 75,
			atq_esp: 75,
			def_esp: 75,
			vel: 55,
		},
		descricao:
			"Apesar de ser um bom escalador, prefere quebrar árvores com suas patas dianteiras e comer Frutas caídas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hibernador",
		lendario: false,
		obtencao:
			"Rota 28; Caverna Escura; Estrada da Vitória; Monte Prata; e Caverna do Monte Prata",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d7/0217Ursaring.png/375px-0217Ursaring.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ursaring_(Pok%C3%A9mon)",
	},
	{
		nome: "Slugma",
		numero: 218, // considerando a national dex
		tipo: ["Fogo"],
		massa: 35.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 40,
			atq: 40,
			def: 40,
			atq_esp: 70,
			def_esp: 40,
			vel: 20,
		},
		descricao:
			"Nunca dorme. Tem que continuar em movimento porque, se parar, seu corpo de magma esfriaria e endureceria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lava",
		lendario: false,
		obtencao: "Rotas 16, 17, e 18",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0218Slugma.png/375px-0218Slugma.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slugma_(Pok%C3%A9mon)",
	},
	{
		nome: "Magcargo",
		numero: 219, // considerando a national dex
		tipo: ["Fogo", " Rocha"],
		massa: 55.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 50,
			atq: 50,
			def: 120,
			atq_esp: 80,
			def_esp: 80,
			vel: 30,
		},
		descricao:
			"A concha em suas costas é apenas pele que esfriou e endureceu. Quebra facilmente com um leve toque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lava",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0219Magcargo.png/375px-0219Magcargo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magcargo_(Pok%C3%A9mon)",
	},
	{
		nome: "Swinub",
		numero: 220, // considerando a national dex
		tipo: ["Gelo", " Terra"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 50,
			atq: 50,
			def: 40,
			atq_esp: 30,
			def_esp: 30,
			vel: 50,
		},
		descricao:
			"Esfrega o focinho no chão para encontrar e desenterrar comida. Às vezes, descobre fonte termal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Porco",
		lendario: false,
		obtencao: "Caminho Gelado",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0220Swinub.png/375px-0220Swinub.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swinub_(Pok%C3%A9mon)",
	},
	{
		nome: "Piloswine",
		numero: 221, // considerando a national dex
		tipo: ["Gelo", " Terra"],
		massa: 55.8, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 80,
			atq_esp: 60,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Por causa de seu longo pelo por todo corpo obscurecer sua visão, continua investindo repetidamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Suíno",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3e/0221Piloswine.png/375px-0221Piloswine.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Piloswine_(Pok%C3%A9mon)",
	},
	{
		nome: "Corsola",
		numero: 222, // considerando a national dex
		tipo: ["Água", " Rocha"],
		massa: 5.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 55,
			atq: 55,
			def: 85,
			atq_esp: 65,
			def_esp: 85,
			vel: 35,
		},
		descricao:
			"Em uma nação dos mares do sul, as pessoas vivem em comunidades construídas em grupos desses Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coral",
		lendario: false,
		obtencao: "Rotas 19, 34, e 40; e Caverna da União",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e8/0222Corsola.png/375px-0222Corsola.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Corsola_(Pok%C3%A9mon)",
	},
	{
		nome: "Remoraid",
		numero: 223, // considerando a national dex
		tipo: ["Água"],
		massa: 12.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 35,
			atq: 65,
			def: 35,
			atq_esp: 65,
			def_esp: 35,
			vel: 65,
		},
		descricao:
			"Possui uma precisão soberba. A água que atira pode atingir até mesmo presa em movimento a mais de cem metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato",
		lendario: false,
		obtencao: "Rota 44",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ed/0223Remoraid.png/375px-0223Remoraid.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Remoraid_(Pok%C3%A9mon)",
	},
	{
		nome: "Octillery",
		numero: 224, // considerando a national dex
		tipo: ["Água"],
		massa: 28.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 75,
			atq: 105,
			def: 75,
			atq_esp: 105,
			def_esp: 75,
			vel: 45,
		},
		descricao:
			"Prende seus inimigos com seus tentáculos com ventosas depois esmaga-os com sua cabeça dura como rocha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e4/0224Octillery.png/375px-0224Octillery.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Octillery_(Pok%C3%A9mon)",
	},
	{
		nome: "Delibird",
		numero: 225, // considerando a national dex
		tipo: ["Gelo", " Voador"],
		massa: 16.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 45,
			atq: 55,
			def: 45,
			atq_esp: 65,
			def_esp: 45,
			vel: 75,
		},
		descricao:
			"Carrega comida o dia todo. Há contos sobre pessoas perdidas que foram salvas pela comida que tinha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Entrega",
		lendario: false,
		obtencao: "Caminho Gelado",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0225Delibird.png/375px-0225Delibird.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Delibird_(Pok%C3%A9mon)",
	},
	{
		nome: "Mantine",
		numero: 226, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 220.0, // em kg
		altura: 2.1, // em metros
		estatistica: {
			ps: 65,
			atq: 40,
			def: 70,
			atq_esp: 80,
			def_esp: 140,
			vel: 70,
		},
		descricao:
			"Enquanto nada livremente em mares abertos, pode voar fora da água e sobre as ondas se conseguir velocidade o suficiente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pipa",
		lendario: false,
		obtencao: "Rota 41",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/49/0226Mantine.png/375px-0226Mantine.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mantine_(Pok%C3%A9mon)",
	},
	{
		nome: "Skarmory",
		numero: 227, // considerando a national dex
		tipo: ["Metal", " Voador"],
		massa: 50.5, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 65,
			atq: 80,
			def: 140,
			atq_esp: 40,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Suas asas resistentes parecem pesadas, mas são ocas e leves, permitindo que voe livremente no céu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro com Armadura",
		lendario: false,
		obtencao: "Rota 45",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a9/0227Skarmory.png/375px-0227Skarmory.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skarmory_(Pok%C3%A9mon)",
	},
	{
		nome: "Houndour",
		numero: 228, // considerando a national dex
		tipo: ["Noturno", " Fogo"],
		massa: 10.8, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 45,
			atq: 60,
			def: 30,
			atq_esp: 80,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Usa diferentes tipos de sons para se comunicar com outros de sua espécie e perseguir sua presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuro",
		lendario: false,
		obtencao: "Rota 7",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f8/0228Houndour.png/375px-0228Houndour.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Houndour_(Pok%C3%A9mon)",
	},
	{
		nome: "Houndoom",
		numero: 229, // considerando a national dex
		tipo: ["Noturno", " Fogo"],
		massa: 35.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 75,
			atq: 90,
			def: 50,
			atq_esp: 110,
			def_esp: 80,
			vel: 95,
		},
		descricao:
			"Caso você seja queimado pelas chamas que este Pokémon lança pela boca, a dor nunca irá embora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/05/0229Houndoom.png/375px-0229Houndoom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Houndoom_(Pok%C3%A9mon)",
	},
	{
		nome: "Kingdra",
		numero: 230, // considerando a national dex
		tipo: ["Água", " Dragão"],
		massa: 152.0, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 75,
			atq: 95,
			def: 95,
			atq_esp: 95,
			def_esp: 95,
			vel: 85,
		},
		descricao:
			"Dizem que este Pokémon se esconde em cavernas subaquáticas. Consegue criar redemoinhos ao bocejar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b6/0230Kingdra.png/375px-0230Kingdra.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kingdra_(Pok%C3%A9mon)",
	},
	{
		nome: "Phanpy",
		numero: 231, // considerando a national dex
		tipo: ["Terra"],
		massa: 33.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 90,
			atq: 60,
			def: 60,
			atq_esp: 40,
			def_esp: 40,
			vel: 40,
		},
		descricao:
			"Balança seu longo focinho alegremente por aí, mas, por ser muito forte, isso pode ser perigoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nariz Longo",
		lendario: false,
		obtencao: "Rotas 45, e 46",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1e/0231Phanpy.png/375px-0231Phanpy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Phanpy_(Pok%C3%A9mon)",
	},
	{
		nome: "Dophan",
		numero: 232, // considerando a national dex
		tipo: ["Terra"],
		massa: 120.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 90,
			atq: 120,
			def: 120,
			atq_esp: 60,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Possui presas duras, afiadas e um couro áspero. Sua Investida é forte o suficiente para derrubar uma casa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura",
		lendario: false,
		obtencao:
			"Rotas 28, e 45; Monte Prata; Caverna do Monte Prata; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/44/0232Donphan.png/375px-0232Donphan.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Donphan_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon2",
		numero: 233, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 85,
			atq: 80,
			def: 90,
			atq_esp: 105,
			def_esp: 95,
			vel: 60,
		},
		descricao:
			"Pesquisas posteriores aperfeiçoaram suas habilidades. Algumas vezes, pode exibir movimentos que não foram programados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b8/0233Porygon2.png/375px-0233Porygon2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon2_(Pok%C3%A9mon)",
	},
	{
		nome: "Stantler",
		numero: 234, // considerando a national dex
		tipo: ["Normal"],
		massa: 71.2, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 73,
			atq: 95,
			def: 62,
			atq_esp: 85,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Os chifres curvos mudam sutilmente o fluxo de ar para criar um espaço estranho onde a realidade é distorcida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chifrudo",
		lendario: false,
		obtencao: "Rotas 36, e 37",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c4/0234Stantler.png/375px-0234Stantler.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stantler_(Pok%C3%A9mon)",
	},
	{
		nome: "Smeargle",
		numero: 235, // considerando a national dex
		tipo: ["Normal"],
		massa: 58.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 55,
			atq: 20,
			def: 35,
			atq_esp: 20,
			def_esp: 45,
			vel: 75,
		},
		descricao:
			"Uma vez que se torna adulto, tem a tendencia de deixar seus companheiros marcarem suas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pintor",
		lendario: false,
		obtencao: "Ruínas de Alfa",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/72/0235Smeargle.png/375px-0235Smeargle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Smeargle_(Pok%C3%A9mon)",
	},
	{
		nome: "Tyrogue",
		numero: 236, // considerando a national dex
		tipo: ["Lutador"],
		massa: 21.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 35,
			atq: 35,
			def: 35,
			atq_esp: 35,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Mesmo sendo pequeno, não pode ser ignorado, pois pode atingir qualquer alvo próximo sem aviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Briga",
		lendario: false,
		obtencao: "Recebido no Monte Mortar",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e5/0236Tyrogue.png/375px-0236Tyrogue.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tyrogue_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmontop",
		numero: 237, // considerando a national dex
		tipo: ["Lutador"],
		massa: 48.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 50,
			atq: 95,
			def: 95,
			atq_esp: 35,
			def_esp: 110,
			vel: 70,
		},
		descricao:
			"Lança seus chutes enquanto gira. Se girar em alta velocidade, pode perfurar o chão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Parada de Mão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/13/0237Hitmontop.png/375px-0237Hitmontop.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmontop_(Pok%C3%A9mon)",
	},
	{
		nome: "Smoochum",
		numero: 238, // considerando a national dex
		tipo: ["Gelo", " Psíquico"],
		massa: 6.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 45,
			atq: 30,
			def: 15,
			atq_esp: 85,
			def_esp: 65,
			vel: 65,
		},
		descricao:
			"Sempre balança a cabeça lentamente para frente e para trás como se estivesse tentando beijar alguém.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Beijo",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c9/0238Smoochum.png/375px-0238Smoochum.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Smoochum_(Pok%C3%A9mon)",
	},
	{
		nome: "Elekid",
		numero: 239, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 23.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 45,
			atq: 63,
			def: 37,
			atq_esp: 65,
			def_esp: 55,
			vel: 95,
		},
		descricao:
			"Gira seus braços para gerar eletricidade, mas se cansa rapidamente, então carrega apenas um pouco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/93/0239Elekid.png/375px-0239Elekid.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Elekid_(Pok%C3%A9mon)",
	},
	{
		nome: "Magby",
		numero: 240, // considerando a national dex
		tipo: ["Fogo"],
		massa: 21.4, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 45,
			atq: 75,
			def: 37,
			atq_esp: 70,
			def_esp: 55,
			vel: 83,
		},
		descricao:
			"Cada e toda vez que inspira e expira, brasas quentes pingam de sua boca e narinas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Carvão Vivo",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/00/0240Magby.png/375px-0240Magby.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magby_(Pok%C3%A9mon)",
	},
	{
		nome: "Miltank",
		numero: 241, // considerando a national dex
		tipo: ["Normal"],
		massa: 75.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 95,
			atq: 80,
			def: 105,
			atq_esp: 40,
			def_esp: 70,
			vel: 100,
		},
		descricao:
			"Seu leite é rico em nutrientes, tornando-o a bebida ideal para os doentes ou cansados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vaca Leiteira",
		lendario: false,
		obtencao: "Rotas 38, e 39",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d5/0241Miltank.png/375px-0241Miltank.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Miltank_(Pok%C3%A9mon)",
	},
	{
		nome: "Blissey",
		numero: 242, // considerando a national dex
		tipo: ["Normal"],
		massa: 46.8, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 255,
			atq: 10,
			def: 10,
			atq_esp: 75,
			def_esp: 135,
			vel: 55,
		},
		descricao:
			"Tem uma natureza compassiva. Caso veja um Pokémon doente, irá cuidar do indivíduo até que fique saudável.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Felicidade",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/54/0242Blissey.png/375px-0242Blissey.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blissey_(Pok%C3%A9mon)",
	},
	{
		nome: "Raikou",
		numero: 243, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 178.0, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 90,
			atq: 85,
			def: 75,
			atq_esp: 115,
			def_esp: 100,
			vel: 115,
		},
		descricao:
			"As nuvens de chuva que carrega permitem que dispare raios à vontade. É dito que descendeu com raio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trovão",
		lendario: true,
		obtencao: "Vagando por Johto",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/48/0243Raikou.png/375px-0243Raikou.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Raikou_(Pok%C3%A9mon)",
	},
	{
		nome: "Entei",
		numero: 244, // considerando a national dex
		tipo: ["Fogo"],
		massa: 198.0, // em kg
		altura: 2.1, // em metros
		estatistica: {
			ps: 115,
			atq: 115,
			def: 85,
			atq_esp: 90,
			def_esp: 75,
			vel: 100,
		},
		descricao:
			"Vulcões entram em erupção quando late. Incapaz de restringir seu extremo poder, corre pela terra.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: true,
		obtencao: "Vagando por Johto",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2b/0244Entei.png/375px-0244Entei.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Entei_(Pok%C3%A9mon)",
	},
	{
		nome: "Suicune",
		numero: 245, // considerando a national dex
		tipo: ["Água"],
		massa: 187.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 100,
			atq: 75,
			def: 115,
			atq_esp: 90,
			def_esp: 115,
			vel: 85,
		},
		descricao:
			"Rumores dizem ser a reincarnação dos ventos do norte, consegue instantaneamente purificar águas sujas e turvas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aurora",
		lendario: true,
		obtencao: "Torre dos Sinos; ou vagando por Johto",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/dc/0245Suicune.png/375px-0245Suicune.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Suicune_(Pok%C3%A9mon)",
	},
	{
		nome: "Larvitar",
		numero: 246, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 72.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 64,
			def: 50,
			atq_esp: 45,
			def_esp: 50,
			vel: 41,
		},
		descricao:
			"Sua alimentação vem do solo. Depois de ter comido uma grande montanha, cairá em um sono para conseguir crescer.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pele de Rocha",
		lendario: false,
		obtencao: "Caverna do Monte Prata",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/95/0246Larvitar.png/375px-0246Larvitar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Larvitar_(Pok%C3%A9mon)",
	},
	{
		nome: "Pupitar",
		numero: 247, // considerando a national dex
		tipo: ["Rocha", " Terra"],
		massa: 152.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 70,
			atq: 84,
			def: 70,
			atq_esp: 65,
			def_esp: 70,
			vel: 51,
		},
		descricao:
			"Sua casca é tão dura quanto um pedaço de rocha, e também é muito forte. Consegue derrubar uma montanha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casco Duro",
		lendario: false,
		obtencao: "Caverna do Monte Prata",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/88/0247Pupitar.png/375px-0247Pupitar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pupitar_(Pok%C3%A9mon)",
	},
	{
		nome: "Tyranitar",
		numero: 248, // considerando a national dex
		tipo: ["Rocha", " Noturno"],
		massa: 202.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 100,
			atq: 134,
			def: 110,
			atq_esp: 95,
			def_esp: 100,
			vel: 61,
		},
		descricao:
			"Seu corpo não pode ser machucado por nenhum tipo de ataque, por isso é muito ansioso para fazer desafios contra inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/09/0248Tyranitar.png/375px-0248Tyranitar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tyranitar_(Pok%C3%A9mon)",
	},
	{
		nome: "Lugia",
		numero: 249, // considerando a national dex
		tipo: ["Psíquico", " Voador"],
		massa: 216.0, // em kg
		altura: 5.2, // em metros
		estatistica: {
			ps: 106,
			atq: 90,
			def: 130,
			atq_esp: 90,
			def_esp: 154,
			vel: 110,
		},
		descricao:
			"Rumores dizem que passa seu tempo silenciosamente nas profundezas do mar por seus poderes sem muito fortes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mergulho",
		lendario: true,
		obtencao: "Ilhas Redemoinho",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e2/0249Lugia.png/375px-0249Lugia.png",
			"https://archives.bulbagarden.net/media/upload/thumb/7/71/249Lugia-Shadow_XD_2.png/180px-249Lugia-Shadow_XD_2.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lugia_(Pok%C3%A9mon)",
	},
	{
		nome: "Ho-Oh",
		numero: 250, // considerando a national dex
		tipo: ["Fogo", " Voador"],
		massa: 199.0, // em kg
		altura: 3.8, // em metros
		estatistica: {
			ps: 106,
			atq: 130,
			def: 90,
			atq_esp: 110,
			def_esp: 154,
			vel: 90,
		},
		descricao:
			"Segundo as lendas, este Pokémon voa pelos céus do planeta continuamente em suas magnificas asas de sete cores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Arco-Íris",
		lendario: true,
		obtencao: "Torre dos Sinos",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/02/0250Ho-Oh.png/375px-0250Ho-Oh.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ho-Oh_(Pok%C3%A9mon)",
	},
	{
		nome: "Celebi",
		numero: 251, // considerando a national dex
		tipo: ["Psíquico", " Planta"],
		massa: 5.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Este Pokémon vaga pelo tempo. A grama e as árvores floresce nas florestas em que apareceu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viagem no Tempo",
		lendario: true,
		obtencao: "Floresta de Ilex",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0251Celebi.png/375px-0251Celebi.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Celebi_(Pok%C3%A9mon)",
	},
	{
		nome: "Treecko",
		numero: 252, // considerando a national dex
		tipo: ["Planta"],
		massa: 5.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 45,
			def: 35,
			atq_esp: 65,
			def_esp: 55,
			vel: 70,
		},
		descricao:
			"Possui pequenos ganchos na sola de suas patas que o permite escalar paredes verticais. Este Pokémon ataca batendo nos inimigos com sua cauda grossa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		obtencao: "Rota 101",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0252Treecko.png/375px-0252Treecko.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)",
	},
	{
		nome: "Grovyle",
		numero: 253, // considerando a national dex
		tipo: ["Planta"],
		massa: 21.6, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 50,
			atq: 65,
			def: 45,
			atq_esp: 85,
			def_esp: 65,
			vel: 95,
		},
		descricao:
			"As folhas que crescem em seu corpo são convenientes para camuflá-lo de seus inimigos em florestas. Este Pokémon é um mestre em escalar árvores em selvas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0253Grovyle.png/375px-0253Grovyle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pok%C3%A9mon)",
	},
	{
		nome: "Sceptile",
		numero: 254, // considerando a national dex
		tipo: ["Planta"],
		massa: 52.2, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 70,
			atq: 85,
			def: 65,
			atq_esp: 105,
			def_esp: 85,
			vel: 120,
		},
		descricao:
			"As folhas que crescem em seu corpo são muito afiadas nas pontas. Este Pokémon é muito ágil, salta sobre os galhos das árvores e ataca seus inimigos por cima ou por trás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Floresta",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0254Sceptile.png/375px-0254Sceptile.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pok%C3%A9mon)",
	},
	{
		nome: "Torchic",
		numero: 255, // considerando a national dex
		tipo: ["Fogo"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 45,
			atq: 60,
			def: 40,
			atq_esp: 70,
			def_esp: 50,
			vel: 45,
		},
		descricao:
			"Este Pokémon possui um local dentro de seu corpo onde mantém sua chama. É todo coberto por uma pelagem fofa de plumas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pintinho",
		lendario: false,
		obtencao: "Rota 101",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7d/0255Torchic.png/375px-0255Torchic.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pok%C3%A9mon)",
	},
	{
		nome: "Combusken",
		numero: 256, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 60,
			atq: 85,
			def: 60,
			atq_esp: 85,
			def_esp: 60,
			vel: 55,
		},
		descricao:
			"Batalha com as chamas intensamente quentes que cospe de seu bico e com chutes excepcionalmente destrutivos. O som deste Pokémon é muito alto e perturbador.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ave Jovem",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/78/0256Combusken.png/375px-0256Combusken.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pok%C3%A9mon)",
	},
	{
		nome: "Blaziken",
		numero: 257, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 52.0, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 80,
			atq: 120,
			def: 70,
			atq_esp: 110,
			def_esp: 70,
			vel: 80,
		},
		descricao:
			"Possui pernas incrivelmente forte, pode facilmente passar por um prédio de trina andares em único salto. Os socos flamejantes deste Pokémon deixam seus inimigos queimados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Labareda",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0257Blaziken.png/375px-0257Blaziken.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)",
	},
	{
		nome: "Mudkip",
		numero: 258, // considerando a national dex
		tipo: ["Água"],
		massa: 7.6, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 50,
			atq: 70,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"A barbatana em sua cabeça age como um radar altamente sensível. Usando esta barbatana para sentir os movimentos da água e do ar, este Pokémon consegue determinar o que está acontecendo ao seu redor sem usar os olhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		obtencao: "Rota 101",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/26/0258Mudkip.png/375px-0258Mudkip.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pok%C3%A9mon)",
	},
	{
		nome: "Marshtomp",
		numero: 259, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 28.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 70,
			atq: 85,
			def: 70,
			atq_esp: 60,
			def_esp: 70,
			vel: 50,
		},
		descricao:
			"É mais rápido viajando pela lama do que nadando. Os membros inferiores deste Pokémon exibem óbvio desenvolvimento, dando uma habilidade de andar com as patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0259Marshtomp.png/375px-0259Marshtomp.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pok%C3%A9mon)",
	},
	{
		nome: "Swampert",
		numero: 260, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 81.9, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 100,
			atq: 110,
			def: 90,
			atq_esp: 85,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Consegue prever tempestades sentindo mudanças sutis nas ondas sonoras e ventos de maré com suas barbatanas. Caso uma tempestade esteja se aproximando, empilha pedras para se proteger.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/34/0260Swampert.png/375px-0260Swampert.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)",
	},
	{
		nome: "Poochyena",
		numero: 261, // considerando a national dex
		tipo: ["Noturno"],
		massa: 13.6, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 35,
			atq: 55,
			def: 35,
			atq_esp: 30,
			def_esp: 30,
			vel: 35,
		},
		descricao:
			"Este Pokémon é onívoro, come qualquer coisa. Uma característica distinta é quão grande são suas presas comparadas a seu corpo. Este Pokémon tenta intimidar seus inimigos fazendo os pelos de sua cauda se arrepiarem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mordida",
		lendario: false,
		obtencao: "Rotas 101, 102, 103, e outras; e Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0261Poochyena.png/375px-0261Poochyena.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Poochyena_(Pok%C3%A9mon)",
	},
	{
		nome: "Mightyena",
		numero: 262, // considerando a national dex
		tipo: ["Noturno"],
		massa: 37.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 70,
			atq: 90,
			def: 70,
			atq_esp: 60,
			def_esp: 60,
			vel: 70,
		},
		descricao:
			"Dá sinais óbvios quando está se preparando para atacar. Começa a rosnar profundamente e então achata seu corpo. Este Pokémon morderá selvagemente com usas presas afiadas e pontudas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mordida",
		lendario: false,
		obtencao: "Rotas 120, 121, e 123",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0262Mightyena.png/375px-0262Mightyena.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mightyena_(Pok%C3%A9mon)",
	},
	{
		nome: "Zigzagoon",
		numero: 263, // considerando a national dex
		tipo: ["Normal"],
		massa: 17.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 38,
			atq: 30,
			def: 41,
			atq_esp: 30,
			def_esp: 41,
			vel: 60,
		},
		descricao:
			"Vagueia incansavelmente por todos lugar o tempo todo. Este Pokémon faz isso por ser muito curioso. Ele se interessa por qualquer coisa que veja.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Guaxinim",
		lendario: false,
		obtencao: "Rotas 101, 102, 103, e outras; e Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0263Zigzagoon.png/375px-0263Zigzagoon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zigzagoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Linoone",
		numero: 264, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 78,
			atq: 70,
			def: 61,
			atq_esp: 50,
			def_esp: 61,
			vel: 100,
		},
		descricao:
			"Sempre corre a toda velocidade e apenas em linhas retas. Quando estiver diante de um obstáculo, faz uma curva em ângulo reto para evitá-lo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Apressado",
		lendario: false,
		obtencao: "Rotas 118, 119, 120, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0264Linoone.png/375px-0264Linoone.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Linoone_(Pok%C3%A9mon)",
	},
	{
		nome: "Wurmple",
		numero: 265, // considerando a national dex
		tipo: ["Inseto"],
		massa: 3.6, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 45,
			atq: 45,
			def: 35,
			atq_esp: 20,
			def_esp: 30,
			vel: 20,
		},
		descricao:
			"Gruda em galhos de árvores e come folhas. O fio que cospe de sua boca, que fica pegajoso ao tocar o ar, retarda o movimento de seus inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Minhoca",
		lendario: false,
		obtencao: "Rotas 101, 102, e 104; e Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/34/0265Wurmple.png/375px-0265Wurmple.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wurmple_(Pok%C3%A9mon)",
	},
	{
		nome: "Silcoon",
		numero: 266, // considerando a national dex
		tipo: ["Inseto"],
		massa: 10.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 35,
			def: 55,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Acreditava-se que suportava a fome e não consumia nada. No tentando, agora acredita-se que este Pokémon sacia sede bebendo água da chuva que se acumula em sua seda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		lendario: false,
		obtencao: "Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9d/0266Silcoon.png/375px-0266Silcoon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Silcoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Beautifly",
		numero: 267, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 28.4, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 70,
			def: 50,
			atq_esp: 90,
			def_esp: 50,
			vel: 65,
		},
		descricao:
			"Sua comida favorita é o doce pólen das flores. Caso queira ver este Pokémon, deixe uma flor em vaso perto de uma janela aberta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Borboleta",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/73/0267Beautifly.png/375px-0267Beautifly.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beautifly_(Pok%C3%A9mon)",
	},
	{
		nome: "Cascoon",
		numero: 268, // considerando a national dex
		tipo: ["Inseto"],
		massa: 11.5, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 55,
			atq: 35,
			def: 55,
			atq_esp: 25,
			def_esp: 25,
			vel: 15,
		},
		descricao:
			"Caso seja atacado, permanece imóvel, independente do quão grave esteja ferido. Não esquece a dor que suportou.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		lendario: false,
		obtencao: "Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c6/0268Cascoon.png/375px-0268Cascoon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cascoon_(Pok%C3%A9mon)",
	},
	{
		nome: "Dustox",
		numero: 269, // considerando a national dex
		tipo: ["Inseto", " Veneno"],
		massa: 31.6, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 50,
			def: 70,
			atq_esp: 50,
			def_esp: 90,
			vel: 65,
		},
		descricao:
			"Quando bate suas asas, um pó fino é espalhado. Esse pó é, na verdade, um poderoso veneno que fará até mesmo um lutador profissional doente. Este Pokémon procura por comida usando suas antenas como um radar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa Venenosa",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/49/0269Dustox.png/375px-0269Dustox.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dustox_(Pok%C3%A9mon)",
	},
	{
		nome: "Lotad",
		numero: 270, // considerando a national dex
		tipo: ["Água", " Planta"],
		massa: 2.6, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 30,
			def: 30,
			atq_esp: 40,
			def_esp: 50,
			vel: 30,
		},
		descricao:
			"Este Pokémon vive em lagoas com água limpa. É conhecido por transportar pequenos Pokémon através de lagoas carregando-os na folha larga em sua cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva de Água",
		lendario: false,
		obtencao: "Rotas 102, e 114",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5f/0270Lotad.png/375px-0270Lotad.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lotad_(Pok%C3%A9mon)",
	},
	{
		nome: "Lombre",
		numero: 271, // considerando a national dex
		tipo: ["Água", " Planta"],
		massa: 32.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 50,
			def: 50,
			atq_esp: 60,
			def_esp: 70,
			vel: 50,
		},
		descricao:
			"À noite, tem grande prazer em sair dos rios e assustar as pessoas. Se alimenta de musgo aquático que cresce nas pedras do leito do rio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Contente",
		lendario: false,
		obtencao: "Rota 114",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a8/0271Lombre.png/375px-0271Lombre.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lombre_(Pok%C3%A9mon)",
	},
	{
		nome: "Ludicolo",
		numero: 272, // considerando a national dex
		tipo: ["Água", " Planta"],
		massa: 55.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 80,
			atq: 70,
			def: 70,
			atq_esp: 90,
			def_esp: 100,
			vel: 70,
		},
		descricao:
			"Ao ouvir um ritmo alegre e otimista, as células de seu corpo se tornam muito energéticas e ativas. Mesmo em batalha, este Pokémon exibirá uma quantidade incrível de poder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Descuidado",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/63/0272Ludicolo.png/375px-0272Ludicolo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ludicolo_(Pok%C3%A9mon)",
	},
	{
		nome: "Seedot",
		numero: 273, // considerando a national dex
		tipo: ["Planta"],
		massa: 4.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 40,
			def: 50,
			atq_esp: 30,
			def_esp: 30,
			vel: 30,
		},
		descricao:
			"Este Pokémon se pendura em galho e absorve nutrientes. Quando termina de comer, seu corpo fica tão pesado que ele cai no chão com um baque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bolota",
		lendario: false,
		obtencao: "Rotas 102, 114, 117, e outra",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/13/0273Seedot.png/375px-0273Seedot.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seedot_(Pok%C3%A9mon)",
	},
	{
		nome: "Nuzleaf",
		numero: 274, // considerando a national dex
		tipo: ["Planta", " Noturno"],
		massa: 28.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 70,
			atq: 70,
			def: 40,
			atq_esp: 60,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"Vive em florestas densamente cobertas de vegetação. Ocasionalmente se aventuram para fora da floresta para assustar as pessoas. Este Pokémon não gosta que seu nariz logo seja beliscado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ardiloso",
		lendario: false,
		obtencao: "Rota 114",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a3/0274Nuzleaf.png/375px-0274Nuzleaf.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nuzleaf_(Pok%C3%A9mon)",
	},
	{
		nome: "Shiftry",
		numero: 275, // considerando a national dex
		tipo: ["Planta", " Noturno"],
		massa: 59.6, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 90,
			atq: 100,
			def: 60,
			atq_esp: 90,
			def_esp: 60,
			vel: 80,
		},
		descricao:
			"Dizem que chega em ventos frios e invernais. Temido desde muito tempo como o guardião das florestas, este Pokémon vive em uma floresta profunda onde as pessoas não se aventuram.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Malvado",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/43/0275Shiftry.png/375px-0275Shiftry.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shiftry_(Pok%C3%A9mon)",
	},
	{
		nome: "Taillow",
		numero: 276, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.3, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 40,
			atq: 55,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 85,
		},
		descricao:
			"Apesar de ser pequeno, é muito corajoso. Encara Skarmory maiores em pé de igualdade. Contudo, enfraquece quando está com fome.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pequena Andorinha",
		lendario: false,
		obtencao: "Rotas 104, 115, e 116; e Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/aa/0276Taillow.png/375px-0276Taillow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Taillow_(Pok%C3%A9mon)",
	},
	{
		nome: "Swellow",
		numero: 277, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 19.8, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 60,
			atq: 85,
			def: 60,
			atq_esp: 50,
			def_esp: 50,
			vel: 125,
		},
		descricao:
			"Mergulha em cima de uma presa de muito alto. Nunca erra seus alvos. Sobe aos céus em busca de terras com clima quente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gaivota",
		lendario: false,
		obtencao: "Rota 115",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0277Swellow.png/375px-0277Swellow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swellow_(Pok%C3%A9mon)",
	},
	{
		nome: "Wingull",
		numero: 278, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 9.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 40,
			atq: 30,
			def: 30,
			atq_esp: 55,
			def_esp: 30,
			vel: 85,
		},
		descricao:
			"Constrói seu ninho em penhasco íngreme na beira do mar. Tem dificuldade em manter suas asas batendo durante o voo. Em vez disso, ele plana em correntes de ar ascendentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gaivota",
		lendario: false,
		obtencao: "Rotas 103, 104, 110, e outras; e lado de fora do Monte da Pira",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0278Wingull.png/375px-0278Wingull.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wingull_(Pok%C3%A9mon)",
	},
	{
		nome: "Pelipper",
		numero: 279, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 28.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 50,
			def: 100,
			atq_esp: 85,
			def_esp: 70,
			vel: 65,
		},
		descricao:
			"Desliza sobre o topo das ondas enquanto voa. Quando avista uma presa, usa seu bico grande paa pegar a vítima com água. Protege seus ovos em seu bico.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro de Água",
		lendario: false,
		obtencao: "Rotas 103, 104, 105, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0277Swellow.png/375px-0277Swellow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pelipper_(Pok%C3%A9mon)",
	},
	{
		nome: "Ralts",
		numero: 280, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 6.6, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 28,
			atq: 25,
			def: 25,
			atq_esp: 45,
			def_esp: 35,
			vel: 40,
		},
		descricao:
			"Sente as emoções das pessoas usando os chifres em sua cabeça. Este Pokémon raramente aparece para pessoas. Mas quando aparece, se aproxima caso sinta que a pessoa tem uma energia positiva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sentimento",
		lendario: false,
		obtencao: "Rota 102",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0280Ralts.png/375px-0280Ralts.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ralts_(Pok%C3%A9mon)",
	},
	{
		nome: "Kirlia",
		numero: 281, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 20.2, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 38,
			atq: 35,
			def: 35,
			atq_esp: 65,
			def_esp: 55,
			vel: 50,
		},
		descricao:
			"Usa os chifres em sua cabeça para amplificar seu poder psicocinético. Quando usa seu poder, o ar em sua volta se torna distorcido, criando miragens de cenários não existentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Emoção",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/64/0281Kirlia.png/375px-0281Kirlia.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kirlia_(Pok%C3%A9mon)",
	},
	{
		nome: "Gardevoir",
		numero: 282, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 48.4, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 68,
			atq: 65,
			def: 65,
			atq_esp: 125,
			def_esp: 115,
			vel: 80,
		},
		descricao:
			"Possui a habilidade de ver o futuro. Caso sinta perigo iminente ao seu treinador, diz-se que este Pokémon libera sua energia psicocinética com força total.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abraço",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f8/0282Gardevoir.png/375px-0282Gardevoir.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gardevoir_(Pok%C3%A9mon)",
	},
	{
		nome: "Surskit",
		numero: 283, // considerando a national dex
		tipo: ["Inseto", " Água"],
		massa: 1.7, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 30,
			def: 32,
			atq_esp: 50,
			def_esp: 52,
			vel: 65,
		},
		descricao:
			"Das pontas de suas patas, secreta um óleo que o permite andar sobre água como se estivesse patinando. Este Pokémon se alimenta de organismos microscópicos em lagoas e lagos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Patinador",
		lendario: false,
		obtencao: "Rotas 102, 111, 114, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c4/0283Surskit.png/375px-0283Surskit.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Surskit_(Pok%C3%A9mon)",
	},
	{
		nome: "Masquerain",
		numero: 284, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 3.6, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 70,
			atq: 60,
			def: 62,
			atq_esp: 80,
			def_esp: 82,
			vel: 60,
		},
		descricao:
			"Intimida inimigos com os padrões semelhantes a olhos em suas antenas. Este Pokémon bate suas quatro asas para voar livremente em qualquer direção, até mesmo para os lados e para trás, como se fosse um helicóptero.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Globo Ocular",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/68/0284Masquerain.png/375px-0284Masquerain.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Masquerain_(Pok%C3%A9mon)",
	},
	{
		nome: "Shroomish",
		numero: 285, // considerando a national dex
		tipo: ["Planta"],
		massa: 4.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 60,
			atq: 40,
			def: 60,
			atq_esp: 40,
			def_esp: 60,
			vel: 35,
		},
		descricao:
			"Vive em solo úmido nas profundezas escuras de florestas. São frequentemente encontrados parados sob folhas caídas. Este Pokémon se alimenta de composto feito de folhas caídas e podres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		lendario: false,
		obtencao: "Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0285Shroomish.png/375px-0285Shroomish.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shroomish_(Pok%C3%A9mon)",
	},
	{
		nome: "Breloom",
		numero: 286, // considerando a national dex
		tipo: ["Planta", " Lutador"],
		massa: 39.2, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 130,
			def: 80,
			atq_esp: 60,
			def_esp: 60,
			vel: 70,
		},
		descricao:
			"Espalha esporos de buracos no chapéu em sua cabeça. Ama climas quentes e úmidos. Se alimenta de árvores e plantas em campos e florestas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ee/0286Breloom.png/375px-0286Breloom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Breloom_(Pok%C3%A9mon)",
	},
	{
		nome: "Slakoth",
		numero: 287, // considerando a national dex
		tipo: ["Normal"],
		massa: 24.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 35,
			def_esp: 35,
			vel: 30,
		},
		descricao:
			"Dorme praticamente o dia todo e a noite toda. Não muda seu ninho sua vida inteira, mas algumas vezes viaja grandes distâncias nadando em rios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandrião",
		lendario: false,
		obtencao: "Floresta de Petalburg",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/61/0287Slakoth.png/375px-0287Slakoth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slakoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Vigoroth",
		numero: 288, // considerando a national dex
		tipo: ["Normal"],
		massa: 46.5, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 80,
			atq: 80,
			def: 80,
			atq_esp: 55,
			def_esp: 55,
			vel: 90,
		},
		descricao:
			"Sempre está coçando e agitado para entrar em fúria. Simplesmente não consegue tolerar ficar parado nem por um minuto. O nível de estresse deste Pokémon aumenta se ele não puder se mover constantemente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Selvagem",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/76/0288Vigoroth.png/375px-0288Vigoroth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vigoroth_(Pok%C3%A9mon)",
	},
	{
		nome: "Slaking",
		numero: 289, // considerando a national dex
		tipo: ["Normal"],
		massa: 130.5, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 150,
			atq: 160,
			def: 100,
			atq_esp: 95,
			def_esp: 65,
			vel: 100,
		},
		descricao:
			"Passa todo o dia deitado e relaxando. Come a grama que cresce ao seu alcance. Caso coma toda a grama que puder alcançar, relutantemente se move para outro lugar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Preguiçoso",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d9/0289Slaking.png/375px-0289Slaking.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Slaking_(Pok%C3%A9mon)",
	},
	{
		nome: "Nincada",
		numero: 290, // considerando a national dex
		tipo: ["Inseto", " Terra"],
		massa: 5.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 31,
			atq: 45,
			def: 90,
			atq_esp: 30,
			def_esp: 30,
			vel: 40,
		},
		descricao:
			"Vive no subsolo por muitos anos em completa escuridão. Este Pokémon absorbe nutrientes das raízes de árvores. Permanece parado como se esperasse por algo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estagiário",
		lendario: false,
		obtencao: "Rota 116",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5f/0290Nincada.png/375px-0290Nincada.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nincada_(Pok%C3%A9mon)",
	},
	{
		nome: "Ninjask",
		numero: 291, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 12.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 61,
			atq: 90,
			def: 45,
			atq_esp: 50,
			def_esp: 50,
			vel: 160,
		},
		descricao:
			"Caso não seja treinado adequadamente, recusará obedecer o treinado e chora continuamente. Por causa disso, é dito que este Pokémon coloca as habilidades do treinador a teste.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ninja",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0291Ninjask.png/375px-0291Ninjask.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ninjask_(Pok%C3%A9mon)",
	},
	{
		nome: "Shedinja",
		numero: 292, // considerando a national dex
		tipo: ["Inseto", " Fantasma"],
		massa: 1.2, // em kg
		altura: 0.8, // em metros
		estatistica: { ps: 1, atq: 90, def: 45, atq_esp: 30, def_esp: 30, vel: 40 },
		descricao:
			"Seu corpo duro não move, nem mesmo um tique. Na verdade, seu corpo aparenta ser meramente uma casca vazia. Acredita-se que este Pokémon roubará o espírito de qualquer um que espie seu corpo oco pelas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tosado",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ad/0292Shedinja.png/375px-0292Shedinja.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)",
	},
	{
		nome: "Whismur",
		numero: 293, // considerando a national dex
		tipo: ["Normal"],
		massa: 16.3, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 64,
			atq: 51,
			def: 23,
			atq_esp: 51,
			def_esp: 23,
			vel: 28,
		},
		descricao:
			"Normalmente, sua voz é muito baixa, é quase inaudível mesmo se estiver prestando bastante atenção. Contudo, caso pressinta perigo, começa a chorar em um volume ensurdecedor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sussurro",
		lendario: false,
		obtencao:
			"Rota 116; Grutas do Deserto; Túnel Rusturf; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0293Whismur.png/375px-0293Whismur.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Whismur_(Pok%C3%A9mon)",
	},
	{
		nome: "Loudred",
		numero: 294, // considerando a national dex
		tipo: ["Normal"],
		massa: 40.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 84,
			atq: 71,
			def: 43,
			atq_esp: 71,
			def_esp: 43,
			vel: 48,
		},
		descricao:
			"Seu berro pode dizimar completamente uma casa de madeira. Ele usa sua voz para punir seus inimigos. As orelhas redondas deste Pokémon servem como alto-falantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vozeirão",
		lendario: false,
		obtencao: "Estrada da Vitória; e Gruta do Deserto",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b2/0294Loudred.png/375px-0294Loudred.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Loudred_(Pok%C3%A9mon)",
	},
	{
		nome: "Exploud",
		numero: 295, // considerando a national dex
		tipo: ["Normal"],
		massa: 84.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 104,
			atq: 91,
			def: 63,
			atq_esp: 91,
			def_esp: 63,
			vel: 68,
		},
		descricao:
			"Desencadeia terremotos com os tremores que cria ao berrar. Caso este Pokémon inalar violentamente pelas aberturas em seu corpo, é um sinal de que está se preparando para soltar um enorme berro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Barulhão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a2/0295Exploud.png/375px-0295Exploud.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Exploud_(Pok%C3%A9mon)",
	},
	{
		nome: "Makuhita",
		numero: 296, // considerando a national dex
		tipo: ["Lutador"],
		massa: 86.4, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 72,
			atq: 60,
			def: 30,
			atq_esp: 20,
			def_esp: 30,
			vel: 25,
		},
		descricao:
			"Continuará se levantando e atacando seu inimigo, não importa quantas vezes seja derrubado. Toda vez que se levanta, este Pokémon armazena mais energia em seu corpo para evoluir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bravura",
		lendario: false,
		obtencao: "Caverna de Granito; e Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/ea/0296Makuhita.png/375px-0296Makuhita.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Makuhita_(Pok%C3%A9mon)",
	},
	{
		nome: "Hariyama",
		numero: 297, // considerando a national dex
		tipo: ["Lutador"],
		massa: 253.8, // em kg
		altura: 2.3, // em metros
		estatistica: {
			ps: 144,
			atq: 120,
			def: 60,
			atq_esp: 40,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Seu corpo grosso pode parecer gordo, mas na verdade é um pedaço de músculo sólido. Caso se esforce para contrais todos os seus músculos, seu corpo se torna duro como uma rocha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Propulsão de Braço",
		lendario: false,
		obtencao: "Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/08/0297Hariyama.png/375px-0297Hariyama.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hariyama_(Pok%C3%A9mon)",
	},
	{
		nome: "Azurill",
		numero: 298, // considerando a national dex
		tipo: ["Normal", " Fada"],
		massa: 2.0, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 50,
			atq: 20,
			def: 40,
			atq_esp: 20,
			def_esp: 40,
			vel: 20,
		},
		descricao:
			"Gira sua cauda como se fosse um laço, então a arremessa para longe. O impulso do arremesso também faz seu corpo voar. Usando essa única ação, um desses Pokémon conseguiu se arremessar a uma distância recorde de 10 metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Poá",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/75/0298Azurill.png/375px-0298Azurill.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Azurill_(Pok%C3%A9mon)",
	},
	{
		nome: "Nosepass",
		numero: 299, // considerando a national dex
		tipo: ["Rocha"],
		massa: 97.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 30,
			atq: 45,
			def: 135,
			atq_esp: 45,
			def_esp: 90,
			vel: 30,
		},
		descricao:
			"Seu nariz magnético está sempre apontando para o norte. Caso dois desses Pokémon se encontrem, não poderão virar o rostos para o outro quando estiverem próximos porque seus narizes magnéticos se repelem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bússola",
		lendario: false,
		obtencao: "Caverna de Granito",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6c/0299Nosepass.png/375px-0299Nosepass.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Nosepass_(Pok%C3%A9mon)",
	},
	{
		nome: "Skitty",
		numero: 300, // considerando a national dex
		tipo: ["Normal"],
		massa: 11.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 45,
			def: 45,
			atq_esp: 35,
			def_esp: 35,
			vel: 50,
		},
		descricao:
			"Possui o hábito de se fascinar por objetos em movimento e persegui-los. Este Pokémon é conhecido por perseguir sua própria cauda e ficar tonto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bichano",
		lendario: false,
		obtencao: "Rota 116",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/75/0300Skitty.png/375px-0300Skitty.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skitty_(Pok%C3%A9mon)",
	},
	{
		nome: "Decaltty",
		numero: 301, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.6, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 70,
			atq: 65,
			def: 65,
			atq_esp: 55,
			def_esp: 55,
			vel: 70,
		},
		descricao:
			"Prefere viver uma existência irrestrita por conseguir fazer o lhe agrada no seu próprio tempo. Por comer e dormir quando decide, suas rotinas diárias são completamente randômicas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Prim",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d4/0301Delcatty.png/375px-0301Delcatty.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Delcatty_(Pok%C3%A9mon)",
	},
	{
		nome: "Sableye",
		numero: 302, // considerando a national dex
		tipo: ["Noturno", " Fantasma"],
		massa: 11.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 50,
			atq: 75,
			def: 75,
			atq_esp: 65,
			def_esp: 65,
			vel: 50,
		},
		descricao:
			"Levam suas vidas tranquilas nas profundezas das cavernas. São temidos, no entanto, porque acredita-se que roubam os espíritos das pessoas quando seus olhos queimam com um brilho sinistro na escuridão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuridão",
		lendario: false,
		obtencao:
			"Caverna de Granito; Caverna da Origem; Pilar Celeste; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/98/0302Sableye.png/375px-0302Sableye.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sableye_(Pok%C3%A9mon)",
	},
	{
		nome: "Mawile",
		numero: 303, // considerando a national dex
		tipo: ["Metal", " Fada"],
		massa: 11.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 50,
			atq: 85,
			def: 85,
			atq_esp: 55,
			def_esp: 55,
			vel: 50,
		},
		descricao:
			"Não se engane pelo rosto fofo deste Pokémon, é muito perigoso. Este Pokémon engana o adversário para que baixe a guarda e então o morde com suas grandes presas. As presas metálicas são, na verdade, chifres que tem sido transformados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Enganador",
		lendario: false,
		obtencao:
			"Caverna de Granito; Caverna da Origem; Estrada da Vitória; e Pilar Celeste",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/77/0303Mawile.png/375px-0303Mawile.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mawile_(Pok%C3%A9mon)",
	},
	{
		nome: "Aron",
		numero: 304, // considerando a national dex
		tipo: ["Metal", " Rocha"],
		massa: 60.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 50,
			atq: 70,
			def: 100,
			atq_esp: 40,
			def_esp: 40,
			vel: 30,
		},
		descricao:
			"Este Pokémon possui um corpo de metal. Para construir seu corpo, se alimenta de minério de ferro que escava das montanhas. Ocasionalmente, causa problemas por comer pontes e trilhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura de Ferro",
		lendario: false,
		obtencao: "Caverna de Granito; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0304Aron.png/375px-0304Aron.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aron_(Pok%C3%A9mon)",
	},
	{
		nome: "Lairon",
		numero: 305, // considerando a national dex
		tipo: ["Metal", " Rocha"],
		massa: 120.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 60,
			atq: 90,
			def: 140,
			atq_esp: 50,
			def_esp: 50,
			vel: 40,
		},
		descricao:
			"Tempera seu corpo metálico bebendo água mineral altamente nutritiva de nascente até ficar inchado. Este Pokémon faz seu ninho perto de fontes de água deliciosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura de Ferro",
		lendario: false,
		obtencao: "Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/20/0305Lairon.png/375px-0305Lairon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lairon_(Pok%C3%A9mon)",
	},
	{
		nome: "Aggron",
		numero: 306, // considerando a national dex
		tipo: ["Metal", " Rocha"],
		massa: 360.0, // em kg
		altura: 2.1, // em metros
		estatistica: {
			ps: 70,
			atq: 110,
			def: 180,
			atq_esp: 60,
			def_esp: 60,
			vel: 50,
		},
		descricao:
			"Reivindica uma montanha inteira como seu território. Bate impiedosamente em qualquer coisa que viole seu ambiente. Este Pokémon patrulha seu território todo o tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Armadura de Ferro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1e/0306Aggron.png/375px-0306Aggron.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Aggron_(Pok%C3%A9mon)",
	},
	{
		nome: "Meditite",
		numero: 307, // considerando a national dex
		tipo: ["Lutador", " Psíquico"],
		massa: 11.2, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 30,
			atq: 40,
			def: 55,
			atq_esp: 40,
			def_esp: 55,
			vel: 60,
		},
		descricao:
			"Realiza um treinamento mental rigoroso nas profundezas das montanhas. No entanto, sempre que medita, sempre perde sua concentração e foco. Como resultado, seu treinamento nunca termina.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meditação",
		lendario: false,
		obtencao: "Monte da Pira; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6e/0307Meditite.png/375px-0307Meditite.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Meditite_(Pok%C3%A9mon)",
	},
	{
		nome: "Medicham",
		numero: 308, // considerando a national dex
		tipo: ["Lutador", " Psíquico"],
		massa: 31.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 60,
			atq: 60,
			def: 75,
			atq_esp: 60,
			def_esp: 75,
			vel: 80,
		},
		descricao:
			"Dizem que, por meio de meditação, este Pokémon aumenta a energia dentro de seu corpo e afia seu sexto sentido. Esconde sua presença unindo a si próprio com campos e montanhas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meditação",
		lendario: false,
		obtencao: "Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a6/0308Medicham.png/375px-0308Medicham.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Medicham_(Pok%C3%A9mon)",
	},
	{
		nome: "Electrike",
		numero: 309, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 15.2, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 40,
			atq: 45,
			def: 40,
			atq_esp: 65,
			def_esp: 40,
			vel: 65,
		},
		descricao:
			"Armazena eletricidade em seu longo pelo corporal. Este Pokémon estimula seu músculo das pernas com cargas elétricas. Esses choques dão às suas pernas um desempenho de aceleração explosivo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raios",
		lendario: false,
		obtencao: "Rotas 110, e 118",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/40/0309Electrike.png/375px-0309Electrike.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electrike_(Pok%C3%A9mon)",
	},
	{
		nome: "Manectric",
		numero: 310, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 40.2, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 70,
			atq: 75,
			def: 60,
			atq_esp: 105,
			def_esp: 60,
			vel: 105,
		},
		descricao:
			"Descarrega eletricidade constantemente de sua juba. Algumas vezes, as faíscas iniciam incêndios florestais. Quando entra em uma batalha, cria nuvens de tempestade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Descarga",
		lendario: false,
		obtencao: "Rota 118",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a0/0310Manectric.png/375px-0310Manectric.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Manectric_(Pok%C3%A9mon)",
	},
	{
		nome: "Plusle",
		numero: 311, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 60,
			atq: 50,
			def: 40,
			atq_esp: 85,
			def_esp: 75,
			vel: 95,
		},
		descricao:
			"Sempre age como um torcedor para seus companheiros. Toda vez que um companheiro de equipe faz um bom esforço na batalha, este Pokémon dá um curto-circuito em seu corpo para criar ruídos de faíscas para mostrar sua alegria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aplausos",
		lendario: false,
		obtencao: "Rota 110",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3b/0311Plusle.png/375px-0311Plusle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Plusle_(Pok%C3%A9mon)",
	},
	{
		nome: "Minun",
		numero: 312, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 60,
			atq: 40,
			def: 50,
			atq_esp: 75,
			def_esp: 85,
			vel: 95,
		},
		descricao:
			"Está mais preocupado em torcer para seus companheiros do que em sua própria segurança. Este Pokémon dá um curto-circuito em seu corpo para criar faíscas brilhantes torcer por seu companheiros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aplausos",
		lendario: false,
		obtencao: "Rota 110",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a9/0312Minun.png/375px-0312Minun.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Minun_(Pok%C3%A9mon)",
	},
	{
		nome: "Volbeat",
		numero: 313, // considerando a national dex
		tipo: ["Inseto"],
		massa: 17.7, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 65,
			atq: 73,
			def: 55,
			atq_esp: 47,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"Com a chegada da noite, emite luz de sua cauda. Sua comunicação com outros se baseia em ajustar a intensidade e o piscar de sua luz.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vaga-lume",
		lendario: false,
		obtencao: "Rota 117",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/67/0313Volbeat.png/375px-0313Volbeat.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Volbeat_(Pok%C3%A9mon)",
	},
	{
		nome: "Illumise",
		numero: 314, // considerando a national dex
		tipo: ["Inseto"],
		massa: 17.7, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 65,
			atq: 47,
			def: 55,
			atq_esp: 73,
			def_esp: 75,
			vel: 85,
		},
		descricao:
			"Um Pokémon noturno que se torna ativo ao cair da noite. Lidera um enxame que desenha padrões no céu escuro. Mais de 200 padrões escuros foram confirmados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vaga-lume",
		lendario: false,
		obtencao: "Rota 117",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6f/0314Illumise.png/375px-0314Illumise.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Illumise_(Pok%C3%A9mon)",
	},
	{
		nome: "Roselia",
		numero: 315, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 50,
			atq: 60,
			def: 45,
			atq_esp: 100,
			def_esp: 80,
			vel: 65,
		},
		descricao:
			"Atira espinhos afiados como projéteis em qualquer oponente que tente roubar as flores em seus braços. O aroma deste Pokémon traz serenidade aos vivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho",
		lendario: false,
		obtencao: "Rota 117",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/cf/0315Roselia.png/375px-0315Roselia.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Roselia_(Pok%C3%A9mon)",
	},
	{
		nome: "Gulpin",
		numero: 316, // considerando a national dex
		tipo: ["Veneno"],
		massa: 10.3, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 70,
			atq: 43,
			def: 53,
			atq_esp: 43,
			def_esp: 53,
			vel: 40,
		},
		descricao:
			"Teoricamente, todo seu corpo é seu estomago. Como resultado, consegue engolir algo de seu próprio tamanho. O estomago deste Pokémon contém um fluido especial que digere qualquer coisa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estômago",
		lendario: false,
		obtencao: "Rota 110",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0316Gulpin.png/375px-0316Gulpin.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gulpin_(Pok%C3%A9mon)",
	},
	{
		nome: "Swalot",
		numero: 317, // considerando a national dex
		tipo: ["Veneno"],
		massa: 80.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 100,
			atq: 73,
			def: 83,
			atq_esp: 73,
			def_esp: 83,
			vel: 55,
		},
		descricao:
			"Quando localiza uma presa, expele um fluido terrivelmente tóxico de seus poros e pulveriza o alvo. Uma vez que a presa tenha enfraquecido, este Pokémon a engole inteira com sua boca cavernosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Saco de Veneno",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/79/0317Swalot.png/375px-0317Swalot.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swalot_(Pok%C3%A9mon)",
	},
	{
		nome: "Carvanha",
		numero: 318, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 20.8, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 45,
			atq: 90,
			def: 20,
			atq_esp: 65,
			def_esp: 20,
			vel: 65,
		},
		descricao:
			"Suas mandíbulas fortemente desenvolvidas e suas pontiagudas e afiadas têm o poder destrutivo de arrancar cascos de barcos. Muitos barcos foram atacados e afundados por este Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Selvagem",
		lendario: false,
		obtencao: "Rotas 118, e 119",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e1/0318Carvanha.png/375px-0318Carvanha.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Carvanha_(Pok%C3%A9mon)",
	},
	{
		nome: "Sharpedo",
		numero: 319, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 88.8, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 70,
			atq: 120,
			def: 40,
			atq_esp: 95,
			def_esp: 40,
			vel: 95,
		},
		descricao:
			"Apelidado de 'o valentão dos mares', este Pokémon é amplamente temido. Suas cruéis presas crescem de volta imediatamente após quebrarem. Apenas um desses Pokémon pode destruir completamente um superpetroleiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brutal",
		lendario: false,
		obtencao: "Rotas 103, 118, 122, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a8/0319Sharpedo.png/375px-0319Sharpedo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sharpedo_(Pok%C3%A9mon)",
	},
	{
		nome: "Wailmer",
		numero: 320, // considerando a national dex
		tipo: ["Água"],
		massa: 130.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 130,
			atq: 70,
			def: 35,
			atq_esp: 70,
			def_esp: 35,
			vel: 60,
		},
		descricao:
			"Suas narinas são localizadas acima de seus olhos. Este Pokémon brincalhão gosta de assustar as pessoas expelindo com força a água do mar que armazena dentro do corpo pelas narinas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Baleia Esférica",
		lendario: false,
		obtencao:
			"Rotas 103, 105, 106, e outras; Caverna do Fundo do Mar; e Gruta Cardume",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0c/0320Wailmer.png/375px-0320Wailmer.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wailmer_(Pok%C3%A9mon)",
	},
	{
		nome: "Wailord",
		numero: 321, // considerando a national dex
		tipo: ["Água"],
		massa: 398.0, // em kg
		altura: 14.5, // em metros
		estatistica: {
			ps: 170,
			atq: 90,
			def: 45,
			atq_esp: 90,
			def_esp: 45,
			vel: 60,
		},
		descricao:
			"É o maior de todos Pokémon identificados. Este Pokémon gigante nada languidamente no vasto mar aberto, comendo quantidades gigantescas de comida de uma vez com sua boca enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Baleia Flutuante",
		lendario: false,
		obtencao: "Rota 129",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/42/0321Wailord.png/375px-0321Wailord.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wailord_(Pok%C3%A9mon)",
	},
	{
		nome: "Numel",
		numero: 322, // considerando a national dex
		tipo: ["Fogo", " Terra"],
		massa: 24.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 60,
			atq: 60,
			def: 40,
			atq_esp: 65,
			def_esp: 45,
			vel: 35,
		},
		descricao:
			"Armazena magma de quase 1'200° Celsius dentro de seu corpo. Caso se molhe, o magma esfria e endurece. Nesse caso, o corpo do Pokémon aumenta de peso e seus movimentos se tornam lentos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dormente",
		lendario: false,
		obtencao: "Rotas 112; Caminho Ardente; e Passo Pontudo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/da/0322Numel.png/375px-0322Numel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Numel_(Pok%C3%A9mon)",
	},
	{
		nome: "Camerupt",
		numero: 323, // considerando a national dex
		tipo: ["Fogo", " Terra"],
		massa: 220.0, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 70,
			atq: 100,
			def: 70,
			atq_esp: 105,
			def_esp: 75,
			vel: 40,
		},
		descricao:
			"Possui um vulcão dentro de seu corpo. Magma de 10'000° Celsius percorre seu corpo. Ocasionalmente, as saliências em suas costas entram em erupção, expelindo magma superaquecido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erupção",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/42/0321Wailord.png/375px-0321Wailord.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Camerupt_(Pok%C3%A9mon)",
	},
	{
		nome: "Torkoal",
		numero: 324, // considerando a national dex
		tipo: ["Fogo"],
		massa: 80.4, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 70,
			atq: 85,
			def: 140,
			atq_esp: 85,
			def_esp: 70,
			vel: 20,
		},
		descricao:
			"Cava pelas montanhas em procura de carvão. Caso encontre algum, preenche o espaço oco em seu casco com carvão e o queima. Caso seja atacado, este Pokémon solta uma fumaça preta e espessa para bater em retirada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Carvão",
		lendario: false,
		obtencao: "Caminho Ardente; e Esconderijo Magma",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0324Torkoal.png/375px-0324Torkoal.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torkoal_(Pok%C3%A9mon)",
	},
	{
		nome: "Spoink",
		numero: 325, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 30.6, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 60,
			atq: 25,
			def: 35,
			atq_esp: 70,
			def_esp: 80,
			vel: 60,
		},
		descricao:
			"Mantém uma pérola no topo de sua cabeça. A pérola tem o propósito de amplificar os poderes psicocinéticos deste Pokémon. Portanto, está em procura constante por uma pérola maior.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ricochete",
		lendario: false,
		obtencao: "Passo Pontudo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2e/0325Spoink.png/375px-0325Spoink.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spoink_(Pok%C3%A9mon)",
	},
	{
		nome: "Grumpig",
		numero: 326, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 71.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 80,
			atq: 45,
			def: 65,
			atq_esp: 90,
			def_esp: 110,
			vel: 80,
		},
		descricao:
			"Usa as pérolas negras em seu corpo para amplificar suas ondas psíquicas e obter controle total sobre seu inimigo. Quando usa seu poder especial, sua respiração ofegante torna-se difícil.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Manipulação",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e5/0326Grumpig.png/375px-0326Grumpig.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grumpig_(Pok%C3%A9mon)",
	},
	{
		nome: "Spinda",
		numero: 327, // considerando a national dex
		tipo: ["Normal"],
		massa: 5.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 60,
			def_esp: 60,
			vel: 60,
		},
		descricao:
			"É dito que cada indivíduo de sua espécie possui padrões de manchas totalmente únicos. Os passos trêmulos e cambaleantes deste Pokémon dão a ele aparência de uma dança.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Panda Manchado",
		lendario: false,
		obtencao: "Rota 113",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0327Spinda.png/375px-0327Spinda.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spinda_(Pok%C3%A9mon)",
	},
	{
		nome: "Trapinch",
		numero: 328, // considerando a national dex
		tipo: ["Terra"],
		massa: 15.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 45,
			atq: 100,
			def: 45,
			atq_esp: 45,
			def_esp: 45,
			vel: 10,
		},
		descricao:
			"É um caçador paciente. Cava um buraco inescapável em um deserto e espera que sua presa caia. Pode passar uma semana inteira sem acesso a água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Formigueiro",
		lendario: false,
		obtencao: "Rota 111; e Torre Miragem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0328Trapinch.png/375px-0328Trapinch.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Trapinch_(Pok%C3%A9mon)",
	},
	{
		nome: "Vibrava",
		numero: 329, // considerando a national dex
		tipo: ["Terra", " Dragão"],
		massa: 15.3, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 50,
			atq: 70,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 70,
		},
		descricao:
			"Suas asas ainda não completaram o processo de crescimento. Ao invés de voar longas distâncias, são mais úteis criando ondas ultrassônicas pela vibração.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vibração",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4b/0329Vibrava.png/375px-0329Vibrava.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vibrava_(Pok%C3%A9mon)",
	},
	{
		nome: "Flygon",
		numero: 330, // considerando a national dex
		tipo: ["Terra", " Dragão"],
		massa: 82.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 80,
			atq: 100,
			def: 80,
			atq_esp: 80,
			def_esp: 80,
			vel: 100,
		},
		descricao:
			"É apelidado de 'o espírito elemental do deserto'. Como suas asas batendo levantam uma nuvem de areia, este Pokémon está sempre envolto em uma tempestade areia enquanto voa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Místico",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0330Flygon.png/375px-0330Flygon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Flygon_(Pok%C3%A9mon)",
	},
	{
		nome: "Cacnea",
		numero: 331, // considerando a national dex
		tipo: ["Planta"],
		massa: 51.3, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 50,
			atq: 85,
			def: 40,
			atq_esp: 85,
			def_esp: 40,
			vel: 35,
		},
		descricao:
			"Vive em locais áridos como desertos. Libera um forte aroma de sua flor para atrair presa. Quando a presa se aproxima, este Pokémon atira espinhos afiados de seu corpo para abater a vítima.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cacto",
		lendario: false,
		obtencao: "Rota 111",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1f/0331Cacnea.png/375px-0331Cacnea.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cacnea_(Pok%C3%A9mon)",
	},
	{
		nome: "Cacturne",
		numero: 332, // considerando a national dex
		tipo: ["Planta", " Noturno"],
		massa: 77.4, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 70,
			atq: 115,
			def: 60,
			atq_esp: 115,
			def_esp: 60,
			vel: 55,
		},
		descricao:
			"Durante o dia, este Pokémon permanece imóvel para que não perca umidade para o forte sol do deserto. Este Pokémon se torna ativo durante a noite quando a temperatura cai.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espantalho",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0332Cacturne.png/375px-0332Cacturne.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cacturne_(Pok%C3%A9mon)",
	},
	{
		nome: "Swablu",
		numero: 333, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 45,
			atq: 40,
			def: 60,
			atq_esp: 40,
			def_esp: 75,
			vel: 50,
		},
		descricao:
			"Possui asas leves e fofas que são como nuvens de algodão. Este Pokémon não se assusta com pessoas. Aterrissa em cabeças de pessoas e senta como um chapéu de algodão fofo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro de Algodão",
		lendario: false,
		obtencao: "Rotas 114, e 115",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/cd/0333Swablu.png/375px-0333Swablu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Swablu_(Pok%C3%A9mon)",
	},
	{
		nome: "Altaria",
		numero: 334, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 20.6, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 75,
			atq: 70,
			def: 90,
			atq_esp: 70,
			def_esp: 105,
			vel: 80,
		},
		descricao:
			"Dança e gira pelo céu entre nuvens ondulantes, como algodão. Ao cantar melodias com sua voz cristalina, este Pokémon faz seus ouvintes experimentarem maravilhas oníricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Canto",
		lendario: false,
		obtencao: "Pilar Celeste",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b2/0334Altaria.png/375px-0334Altaria.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Altaria_(Pok%C3%A9mon)",
	},
	{
		nome: "Zangoose",
		numero: 335, // considerando a national dex
		tipo: ["Normal"],
		massa: 40.3, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 73,
			atq: 115,
			def: 60,
			atq_esp: 60,
			def_esp: 60,
			vel: 90,
		},
		descricao:
			"Quando batalha, fica em pé sobre as patas traseiras e ataca com as patas dianteiras com garras afiadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Furão",
		lendario: false,
		obtencao: "Rota 114",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/93/0335Zangoose.png/375px-0335Zangoose.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Zangoose_(Pok%C3%A9mon)",
	},
	{
		nome: "Seviper",
		numero: 336, // considerando a national dex
		tipo: ["Veneno"],
		massa: 52.5, // em kg
		altura: 2.7, // em metros
		estatistica: {
			ps: 73,
			atq: 100,
			def: 60,
			atq_esp: 100,
			def_esp: 60,
			vel: 65,
		},
		descricao:
			"Sua cauda em forma de espada serve a dois propósitos, corta os inimigos e os encharca com veneno secretado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente com Presas",
		lendario: false,
		obtencao: "Rota 114",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0336Seviper.png/375px-0336Seviper.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Seviper_(Pok%C3%A9mon)",
	},
	{
		nome: "Lunatone",
		numero: 337, // considerando a national dex
		tipo: ["Rocha", " Psíquico"],
		massa: 168.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 70,
			atq: 55,
			def: 65,
			atq_esp: 95,
			def_esp: 85,
			vel: 70,
		},
		descricao:
			"Foi descoberto em um local onde um meteorito caiu. Como resultado, algumas pessoas teorizam que esse Pokémon veio do espaço. Contudo, ninguém conseguiu provar essa teoria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meteorito",
		lendario: false,
		obtencao: "Cachoeira do Meteoro",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0337Lunatone.png/375px-0337Lunatone.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lunatone_(Pok%C3%A9mon)",
	},
	{
		nome: "Solrock",
		numero: 338, // considerando a national dex
		tipo: ["Rocha", " Psíquico"],
		massa: 154.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 70,
			atq: 95,
			def: 85,
			atq_esp: 55,
			def_esp: 65,
			vel: 70,
		},
		descricao:
			"É uma nova espécie de Pokémon que dizem ter caído do espaço. Flutua no ar e se move silenciosamente. Em batalha, este Pokémon libera luz que brilha intensamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meteorito",
		lendario: false,
		obtencao: "Cachoeira do Meteoro",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/13/0338Solrock.png/375px-0338Solrock.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Solrock_(Pok%C3%A9mon)",
	},
	{
		nome: "Barboach",
		numero: 339, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 1.9, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 50,
			atq: 48,
			def: 43,
			atq_esp: 46,
			def_esp: 41,
			vel: 60,
		},
		descricao:
			"Seus bigodes sensíveis servem como um excelente sistema de radar. Esse Pokémon se esconde em lama, deixando somente seus dois bigodes expostos enquanto espera pela presa chegar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bigodudo",
		lendario: false,
		obtencao:
			"Rotas 111, 114, e 120; Cachoeira do Meteoro; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6f/0339Barboach.png/375px-0339Barboach.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Barboach_(Pok%C3%A9mon)",
	},
	{
		nome: "Whishcash",
		numero: 340, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 23.6, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 110,
			atq: 78,
			def: 73,
			atq_esp: 76,
			def_esp: 71,
			vel: 60,
		},
		descricao:
			"É extremamente territorialista. Só um destes Pokémon reivindicará um grande lago como seu território exclusivo. Se um inimigo se aproxima, se debate e desencadeia um grade terremoto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bigodudo",
		lendario: false,
		obtencao: "Cachoeira do Meteoro; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b0/0340Whiscash.png/375px-0340Whiscash.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Whiscash_(Pok%C3%A9mon)",
	},
	{
		nome: "Corphish",
		numero: 341, // considerando a national dex
		tipo: ["Água"],
		massa: 11.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 43,
			atq: 80,
			def: 65,
			atq_esp: 50,
			def_esp: 35,
			vel: 35,
		},
		descricao:
			"Era originalmente um Pokémon estrangeiro que foi importado como animal doméstico. Acabaram aparecendo na natureza. Este Pokémon é muito resistente e aumentou muito sua população.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Baderneiro",
		lendario: false,
		obtencao: "Rotas 102, e 117",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/93/0341Corphish.png/375px-0341Corphish.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Corphish_(Pok%C3%A9mon)",
	},
	{
		nome: "Crawdaunt",
		numero: 342, // considerando a national dex
		tipo: ["Água", " Noturno"],
		massa: 32.8, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 63,
			atq: 120,
			def: 85,
			atq_esp: 90,
			def_esp: 55,
			vel: 55,
		},
		descricao:
			"Possui uma natureza extremamente violenta que o obriga a desafiar outros seres vivos para batalha. Outras formas de vida se recusam a viver em lagoas habitadas por este Pokémon, tornando-as lugares desolados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Patife",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/48/0342Crawdaunt.png/375px-0342Crawdaunt.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Crawdaunt_(Pok%C3%A9mon)",
	},
	{
		nome: "Baltoy",
		numero: 343, // considerando a national dex
		tipo: ["Terra", " Psíquico"],
		massa: 21.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 40,
			atq: 40,
			def: 55,
			atq_esp: 40,
			def_esp: 70,
			vel: 55,
		},
		descricao:
			"Este Pokémon se move enquanto gira em seu único pé. Pinturas de parede primitivas retratando este Pokémon vivendo entre as pessoas foram descobertas em algumas ruínas antigas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boneco de Argila",
		lendario: false,
		obtencao: "Rota 111",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/62/0343Baltoy.png/375px-0343Baltoy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Baltoy_(Pok%C3%A9mon)",
	},
	{
		nome: "Claydol",
		numero: 344, // considerando a national dex
		tipo: ["Terra", " Psíquico"],
		massa: 108.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 60,
			atq: 70,
			def: 105,
			atq_esp: 70,
			def_esp: 120,
			vel: 75,
		},
		descricao:
			"Rumores dizem que são bonecas de lama feitas por humanos primitivos e trazidos a vida pela exposição a um raio misterioso. Este Pokémon se move enquanto levita.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boneco de Argila",
		lendario: false,
		obtencao: "Pilar Celeste",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/39/0344Claydol.png/375px-0344Claydol.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Claydol_(Pok%C3%A9mon)",
	},
	{
		nome: "Lileep",
		numero: 345, // considerando a national dex
		tipo: ["Rocha", " Planta"],
		massa: 23.8, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 66,
			atq: 41,
			def: 77,
			atq_esp: 61,
			def_esp: 87,
			vel: 23,
		},
		descricao:
			"É um Pokémon antigo que foi regenerado a partir de um fóssil. Permanece permanentemente ancorado a uma rocha. De seu poleira imóvel, este Pokémon procura atentamente por presas com seus dois olhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lírio-do-Mar",
		lendario: false,
		obtencao: "Revivido a partir de fóssil",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/06/0345Lileep.png/375px-0345Lileep.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lileep_(Pok%C3%A9mon)",
	},
	{
		nome: "Cradily",
		numero: 346, // considerando a national dex
		tipo: ["Rocha", " Planta"],
		massa: 60.4, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 86,
			atq: 81,
			def: 97,
			atq_esp: 81,
			def_esp: 107,
			vel: 43,
		},
		descricao:
			"Vagueia pelo fundo do oceano a procura de comida. Este Pokémon estende livremente seu pescoço semelhante a um tronco de árvore e captura presas incautos usando seus oito tentáculos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Percevejo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ee/0346Cradily.png/375px-0346Cradily.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cradily_(Pok%C3%A9mon)",
	},
	{
		nome: "Anorith",
		numero: 347, // considerando a national dex
		tipo: ["Rocha", " Inseto"],
		massa: 12.5, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 45,
			atq: 95,
			def: 50,
			atq_esp: 40,
			def_esp: 50,
			vel: 75,
		},
		descricao:
			"É dito ser que é um tipo de predecessor de Pokémon, com oito asas nas laterais do corpo. Este Pokémon nadou no mar primordial ondulando essas oito asas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Camarão",
		lendario: false,
		obtencao: "Revivido a partir de fóssil",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c8/0347Anorith.png/375px-0347Anorith.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Anorith_(Pok%C3%A9mon)",
	},
	{
		nome: "Armaldo",
		numero: 348, // considerando a national dex
		tipo: ["Rocha", " Inseto"],
		massa: 68.2, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 75,
			atq: 125,
			def: 100,
			atq_esp: 70,
			def_esp: 80,
			vel: 45,
		},
		descricao:
			"Sua armadura dura faz todos os ataques ricochetearem. As duas enormes garras deste Pokémon podem ser estendidas ou contraídas livremente. Tem o poder de perfurar uma laje de aço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Carapaça",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ee/0346Cradily.png/375px-0346Cradily.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)",
	},
	{
		nome: "Feebas",
		numero: 349, // considerando a national dex
		tipo: ["Água"],
		massa: 7.4, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 20,
			atq: 15,
			def: 20,
			atq_esp: 10,
			def_esp: 55,
			vel: 80,
		},
		descricao:
			"Suas barbatanas são esfarrapadas desde o início de sua vida. Por causa de sua aparência de má qualidade, este Pokémon é amplamente ignorado. É capaz de viver tanto em mar quanto em rios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe",
		lendario: false,
		obtencao: "Rota 119",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/af/0349Feebas.png/375px-0349Feebas.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Feebas_(Pok%C3%A9mon)",
	},
	{
		nome: "Milotic",
		numero: 350, // considerando a national dex
		tipo: ["Água"],
		massa: 162.0, // em kg
		altura: 6.2, // em metros
		estatistica: {
			ps: 95,
			atq: 60,
			def: 79,
			atq_esp: 100,
			def_esp: 125,
			vel: 81,
		},
		descricao:
			"Dizem ser um dos Pokémon mais bonitos que existe. Possui o poder de acalmar emoções como raiva e hostilidade para reprimir rixas amargas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Meigo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0350Milotic.png/375px-0350Milotic.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Milotic_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform",
		numero: 351.1, // considerando a national dex
		tipo: ["Normal"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		lendario: false,
		obtencao: "Laboratório de Meteorologia",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/ff/0351Castform.png/375px-0351Castform.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform",
		numero: 351.2, // considerando a national dex
		tipo: ["Fogo"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		lendario: false,
		obtencao: "Laboratório de Meteorologia",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/9/90/0351Castform-Sunny.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform",
		numero: 351.3, // considerando a national dex
		tipo: ["Água"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		lendario: false,
		obtencao: "Laboratório de Meteorologia",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ab/0351Castform-Rainy.png/165px-0351Castform-Rainy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Castform",
		numero: 351.4, // considerando a national dex
		tipo: ["Gelo"],
		massa: 0.8, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 70,
			atq: 70,
			def: 70,
			atq_esp: 70,
			def_esp: 70,
			vel: 70,
		},
		descricao:
			"Sua aparência muda com o clima. Este Pokémon ganhou a habilidade de usar o vasto poder da natureza para proteger minúsculo corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Clima",
		lendario: false,
		obtencao: "Laboratório de Meteorologia",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/3/34/0351Castform-Snowy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Castform_(Pok%C3%A9mon)",
	},
	{
		nome: "Kecleon",
		numero: 352, // considerando a national dex
		tipo: ["Normal"],
		massa: 22.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 90,
			def: 70,
			atq_esp: 60,
			def_esp: 120,
			vel: 40,
		},
		descricao:
			"Este Pokémon é capaz de alterar a coloração de seu corpo à vontade para se misturar com os ambiente. Existe uma exceção, não consegue alterar o padrão zigue-zague em sua barriga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Troca-cor",
		lendario: false,
		obtencao: "Rotas 118, 119, 120, e outras",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b6/0352Kecleon.png/375px-0352Kecleon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kecleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Shuppet",
		numero: 353, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 2.3, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 44,
			atq: 75,
			def: 35,
			atq_esp: 63,
			def_esp: 33,
			vel: 45,
		},
		descricao:
			"Cresce se alimentando de emoções negativas, como vingança e inveja, nos corações das pessoas. Vagueia pelas cidades a procura de rancores que mancham as pessoas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fantoche",
		lendario: false,
		obtencao: "Rotas 121, e 123; e Monta da Pira",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/5d/0353Shuppet.png/375px-0353Shuppet.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shuppet_(Pok%C3%A9mon)",
	},
	{
		nome: "Banette",
		numero: 354, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 12.5, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 64,
			atq: 115,
			def: 65,
			atq_esp: 83,
			def_esp: 63,
			vel: 65,
		},
		descricao:
			"Uma energia amaldiçoada permeou o enchimento de uma boneca de pelúcia descartada e esquecida, dando-lhe uma nova vida como este Pokémon. A energia do Pokémon escaparia caso abrisse a boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marionete",
		lendario: false,
		obtencao: "Pilar Celeste",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/72/0354Banette.png/375px-0354Banette.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Banette_(Pok%C3%A9mon)",
	},
	{
		nome: "Duskull",
		numero: 355, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 15.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 20,
			atq: 40,
			def: 90,
			atq_esp: 30,
			def_esp: 90,
			vel: 25,
		},
		descricao:
			"Consegue atravessar qualquer parede não importando quão grossa possa ser. Uma vez que escolhe um alvo, persegue obstinadamente a vítima até o amanhecer.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Réquiem",
		lendario: false,
		obtencao: "Rotas 121, e 123; e Monta da Pira",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f6/0355Duskull.png/375px-0355Duskull.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Duskull_(Pok%C3%A9mon)",
	},
	{
		nome: "Dusclops",
		numero: 356, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 30.6, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 40,
			atq: 70,
			def: 130,
			atq_esp: 60,
			def_esp: 130,
			vel: 25,
		},
		descricao:
			"Seu corpo é completamente oco, não há nada dentro. Dizem que seu corpo é como um buraco negro. Este Pokémon absorverá qualquer coisa em seu corpo, mas jamais retornará.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aceno",
		lendario: false,
		obtencao: "Pilar Celeste",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0e/0356Dusclops.png/375px-0356Dusclops.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dusclops_(Pok%C3%A9mon)",
	},
	{
		nome: "Tropius",
		numero: 357, // considerando a national dex
		tipo: ["Planta", " Voador"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 99,
			atq: 68,
			def: 83,
			atq_esp: 72,
			def_esp: 87,
			vel: 51,
		},
		descricao:
			"Os cachos de frutas ao redor de seu pescoço são muito populares entre as crianças. Este Pokémon gosta de frutas, e come continuamente. Aparentemente, seu gosto por frutas resultou em seu próprio crescimento de frutas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fruta",
		lendario: false,
		obtencao: "Rota 119",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0e/0356Dusclops.png/375px-0356Dusclops.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tropius_(Pok%C3%A9mon)",
	},
	{
		nome: "Chimecho",
		numero: 358, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 65,
			atq: 50,
			def: 70,
			atq_esp: 95,
			def_esp: 80,
			vel: 65,
		},
		descricao:
			"Faz seus sons ecoarem dentro de seu corpo oco. Quando este Pokémon fica enfurecido, seus sons resultam em ondas ultrassônicas que têm o poder de derrubar os inimigos voando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mensageiro dos Ventos",
		lendario: false,
		obtencao: "Monte da Pira",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0358Chimecho.png/375px-0358Chimecho.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chimecho_(Pok%C3%A9mon)",
	},
	{
		nome: "Absol",
		numero: 359, // considerando a national dex
		tipo: ["Noturno"],
		massa: 47.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 65,
			atq: 130,
			def: 60,
			atq_esp: 75,
			def_esp: 60,
			vel: 75,
		},
		descricao:
			"Toda vez que aparece diante das pessoas, é seguido por desastre como um terremoto ou um maremoto. Como resultado, veio a ser conhecido como o Pokémon desastre.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Desastre",
		lendario: false,
		obtencao: "Rota 120",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9b/0359Absol.png/375px-0359Absol.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Absol_(Pok%C3%A9mon)",
	},
	{
		nome: "Wynaut",
		numero: 360, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 14.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 95,
			atq: 23,
			def: 48,
			atq_esp: 23,
			def_esp: 48,
			vel: 23,
		},
		descricao:
			"Sempre pode visto com um grande sorriso feliz no rosto. Olhe para a cauda determinar se está bravo. Quando bravo, este Pokémon baterá no chão com sua cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brilhante",
		lendario: false,
		obtencao: "Por ovo; e Ilha Miragem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/be/0360Wynaut.png/375px-0360Wynaut.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wynaut_(Pok%C3%A9mon)",
	},
	{
		nome: "Snorunt",
		numero: 361, // considerando a national dex
		tipo: ["Gelo"],
		massa: 16.8, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 50,
			atq: 50,
			def: 50,
			atq_esp: 50,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Vive em regiões com muita neve. Em estações sem neve, como primavera e verão, este Pokémon foge para viver silenciosamente entre estalactites e estalagmites nas profundezas de cavernas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gorro de Neve",
		lendario: false,
		obtencao: "Gruta Cardume",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0c/0361Snorunt.png/375px-0361Snorunt.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snorunt_(Pok%C3%A9mon)",
	},
	{
		nome: "Glalie",
		numero: 362, // considerando a national dex
		tipo: ["Gelo"],
		massa: 256.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 80,
			atq: 80,
			def: 80,
			atq_esp: 80,
			def_esp: 80,
			vel: 80,
		},
		descricao:
			"Possui um corpo feito de rocha, o qual endurece com uma armadura de gelo. Este Pokémon tem a habilidade de congelar umidade na atmosfera em qualquer formato que desejar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rosto",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/88/0362Glalie.png/375px-0362Glalie.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Glalie_(Pok%C3%A9mon)",
	},
	{
		nome: "Spheal",
		numero: 363, // considerando a national dex
		tipo: ["Gelo", " Água"],
		massa: 39.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 70,
			atq: 40,
			def: 50,
			atq_esp: 55,
			def_esp: 50,
			vel: 25,
		},
		descricao:
			"É muito mais rápido rolando do que caminhando para se locomover. Quando grupos deste Pokémon comem, todos batem palma ao mesmo tempo para mostrar seu prazer. Por causa disso, suas refeições são barulhentas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bater Palmas",
		lendario: false,
		obtencao: "Gruta Cardume",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6f/0363Spheal.png/375px-0363Spheal.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spheal_(Pok%C3%A9mon)",
	},
	{
		nome: "Sealeo",
		numero: 364, // considerando a national dex
		tipo: ["Gelo", " Água"],
		massa: 87.6, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 90,
			atq: 60,
			def: 70,
			atq_esp: 75,
			def_esp: 70,
			vel: 45,
		},
		descricao:
			"Tem o hábito de sempre fazer malabarismos na ponta do nariz com qualquer coisa que vê pela primeira vez. Este Pokémon ocasionalmente se diverte equilibrando e rolando um Spheal no nariz.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rolo Bola",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/36/0364Sealeo.png/375px-0364Sealeo.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Sealeo_(Pok%C3%A9mon)",
	},
	{
		nome: "Walrein",
		numero: 365, // considerando a national dex
		tipo: ["Gelo", " Água"],
		massa: 150.6, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 110,
			atq: 80,
			def: 90,
			atq_esp: 95,
			def_esp: 90,
			vel: 65,
		},
		descricao:
			"Suas duas presas massivamente desenvolvidas podem destruir totalmente blocos de gelo pesando dez toneladas com um golpe. A espessa camada de gordura deste Pokémon o isola de temperaturas abaixo de zero.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Quebra-gelo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/ba/0365Walrein.png/375px-0365Walrein.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Walrein_(Pok%C3%A9mon)",
	},
	{
		nome: "Clamperl",
		numero: 366, // considerando a national dex
		tipo: ["Água"],
		massa: 52.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 35,
			atq: 64,
			def: 85,
			atq_esp: 74,
			def_esp: 55,
			vel: 32,
		},
		descricao:
			"Sua concha resistente não é boa apenas para proteção, é usada também para prender e capturar presas. A concha deste Pokémon totalmente crescido será marcada com cortes e arranhões por todo o corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		lendario: false,
		obtencao: "Rotas submersas 124, e 126",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/af/0366Clamperl.png/375px-0366Clamperl.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Clamperl_(Pok%C3%A9mon)",
	},
	{
		nome: "Huntail",
		numero: 367, // considerando a national dex
		tipo: ["Água"],
		massa: 27.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 55,
			atq: 104,
			def: 105,
			atq_esp: 94,
			def_esp: 75,
			vel: 52,
		},
		descricao:
			"Sua presença passou despercebida pelas pessoas por um longo tempo por viver em profundidades extremas do mar. Os olhos deste Pokémon podem ver claramente até mesmo nas profundezas escuras e turvas do oceano.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fundo do Mar",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a8/0367Huntail.png/375px-0367Huntail.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Huntail_(Pok%C3%A9mon)",
	},
	{
		nome: "Gorebyss",
		numero: 368, // considerando a national dex
		tipo: ["Água"],
		massa: 22.6, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 55,
			atq: 84,
			def: 105,
			atq_esp: 114,
			def_esp: 75,
			vel: 52,
		},
		descricao:
			"Vive nos mares do sul em profundezas extremas. Seu corpo é construído para suportar a enorme pressão exercida pela água em incríveis profundezas. Por isso, o corpo deste Pokémon não é afetado por ataques comuns.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mar do Sul",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/87/0368Gorebyss.png/375px-0368Gorebyss.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gorebyss_(Pok%C3%A9mon)",
	},
	{
		nome: "Relicanth",
		numero: 369, // considerando a national dex
		tipo: ["Água", " Rocha"],
		massa: 23.4, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 100,
			atq: 90,
			def: 130,
			atq_esp: 45,
			def_esp: 65,
			vel: 55,
		},
		descricao:
			"Sua espécie viveu por cem milhões de anos sem mudar sua forma. Este antigo Pokémon se alimenta de organismos microscópico com sua boca sem dentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Longevidade",
		lendario: false,
		obtencao: "Rotas submersas 124, e 126",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e8/0369Relicanth.png/375px-0369Relicanth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Relicanth_(Pok%C3%A9mon)",
	},
	{
		nome: "Luvdisc",
		numero: 370, // considerando a national dex
		tipo: ["Água"],
		massa: 8.7, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 43,
			atq: 30,
			def: 55,
			atq_esp: 40,
			def_esp: 65,
			vel: 97,
		},
		descricao:
			"Seu corpo do formato de um coração é um símbolo de amor e romance. Dizem que qualquer casal que encontre este Pokémon terá a promessa de um relacionamento amoroso que nunca termina.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Encontro",
		lendario: false,
		obtencao: "Rota 128",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d4/0370Luvdisc.png/375px-0370Luvdisc.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Luvdisc_(Pok%C3%A9mon)",
	},
	{
		nome: "Bagon",
		numero: 371, // considerando a national dex
		tipo: ["Dragão"],
		massa: 42.1, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 45,
			atq: 75,
			def: 60,
			atq_esp: 40,
			def_esp: 30,
			vel: 50,
		},
		descricao:
			"Tem um sonho de algum dia voar alto no céu. Em seus esforços condenados de voo, este Pokémon se atira de penhascos. Como resultado de seus mergulhos sua cabeça ficou e tão resistente quanto aço temperado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cabeça de Pedra",
		lendario: false,
		obtencao: "Cachoeira do Meteoro",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0371Bagon.png/375px-0371Bagon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bagon_(Pok%C3%A9mon)",
	},
	{
		nome: "Shelgon",
		numero: 372, // considerando a national dex
		tipo: ["Dragão"],
		massa: 110.5, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 65,
			atq: 95,
			def: 100,
			atq_esp: 60,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Dentro de seu casco, que se assemelha a uma armadura, células estão em meio à transformação ara criar um corpo inteiramente novo. O casco deste Pokémon é extremamente pesado, tornando seus movimentos lentos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Resistência",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/cb/0372Shelgon.png/375px-0372Shelgon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shelgon_(Pok%C3%A9mon)",
	},
	{
		nome: "Salamance",
		numero: 373, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 102.6, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 95,
			atq: 135,
			def: 80,
			atq_esp: 110,
			def_esp: 80,
			vel: 100,
		},
		descricao:
			"Depois de vários anos, sua estrutura celular sofreu uma mutação repentina de crescimento de asas. Quando irritado, perde todo o raciocínio e o controle.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8a/0373Salamence.png/375px-0373Salamence.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Salamence_(Pok%C3%A9mon)",
	},
	{
		nome: "Beldum",
		numero: 374, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 95.2, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 40,
			atq: 55,
			def: 80,
			atq_esp: 35,
			def_esp: 60,
			vel: 30,
		},
		descricao:
			"Ao invés de sangue, uma poderosa força magnética corre pelo seu corpo. Este Pokémon se comunica com outros enviando pulsos controlados de magnetismo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola de Ferro",
		lendario: false,
		obtencao: "Recebido na Cidade de Mossdeep",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/aa/0374Beldum.png/375px-0374Beldum.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Beldum_(Pok%C3%A9mon)",
	},
	{
		nome: "Metang",
		numero: 375, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 202.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 60,
			atq: 75,
			def: 100,
			atq_esp: 55,
			def_esp: 80,
			vel: 50,
		},
		descricao:
			"As garras que inclinam seus braços têm o poder destrutivo de rasgar grossas folhas de ferro como se fossem seda. Voa a mais de 100 quilômetros por hora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra de Ferro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/23/0375Metang.png/375px-0375Metang.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Metang_(Pok%C3%A9mon)",
	},
	{
		nome: "Metagross",
		numero: 376, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 550.0, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 80,
			atq: 135,
			def: 130,
			atq_esp: 95,
			def_esp: 90,
			vel: 70,
		},
		descricao:
			"Possui quatro cérebros no total. Cominados, os quatro cérebros conseguem passar por cálculos difíceis mais rápido que um supercomputador. Este Pokémon consegue flutuar no ar dobrando suas quatro pernas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perna de Ferro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/fe/0376Metagross.png/375px-0376Metagross.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Metagross_(Pok%C3%A9mon)",
	},
	{
		nome: "Regirock",
		numero: 377, // considerando a national dex
		tipo: ["Rocha"],
		massa: 230.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 80,
			atq: 100,
			def: 200,
			atq_esp: 50,
			def_esp: 100,
			vel: 50,
		},
		descricao:
			"Foi selado por pessoas há muito tempo. É dito que, caso o corpo deste Pokémon seja danificado em batalha, buscará por rochas adequadas para se reparar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pico de Rocha",
		lendario: true,
		obtencao: "Ruínas do Deserto",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9c/0377Regirock.png/375px-0377Regirock.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Regirock_(Pok%C3%A9mon)",
	},
	{
		nome: "Regice",
		numero: 378, // considerando a national dex
		tipo: ["Gelo"],
		massa: 175.0, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 80,
			atq: 50,
			def: 100,
			atq_esp: 100,
			def_esp: 200,
			vel: 50,
		},
		descricao:
			"Seu corpo foi feito durante uma era glacial. O corpo profundamente congelado não pode ser derretido, nem mesmo por fogo. Este Pokémon controla ar gelado de -200° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Iceberg",
		lendario: true,
		obtencao: "Gruta Insular",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1c/0378Regice.png/375px-0378Regice.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Regice_(Pok%C3%A9mon)",
	},
	{
		nome: "Registeel",
		numero: 379, // considerando a national dex
		tipo: ["Metal"],
		massa: 205.0, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 80,
			atq: 75,
			def: 150,
			atq_esp: 75,
			def_esp: 150,
			vel: 50,
		},
		descricao:
			"Possui um corpo mais duro que qualquer tipo de metal. Seu corpo é aparentemente oco. Ninguém tem ideia do que este Pokémon come.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ferro",
		lendario: true,
		obtencao: "Tumba Antiga",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0379Registeel.png/375px-0379Registeel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Registeel_(Pok%C3%A9mon)",
	},
	{
		nome: "Latias",
		numero: 380, // considerando a national dex
		tipo: ["Dragão", " Psíquico"],
		massa: 40.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 80,
			atq: 80,
			def: 90,
			atq_esp: 110,
			def_esp: 130,
			vel: 110,
		},
		descricao:
			"É altamente sensível às emoções de pessoas. Caso sinta qualquer hostilidade, este Pokémon eriça as penas de todo o corpo e grita estridentemente para intimidar o inimigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Eternidade",
		lendario: true,
		obtencao: "Ilha Sul; ou Vagando por Hoenn",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0380Latias.png/375px-0380Latias.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Latias_(Pok%C3%A9mon)",
	},
	{
		nome: "Latios",
		numero: 381, // considerando a national dex
		tipo: ["Dragão", " Psíquico"],
		massa: 60.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 80,
			atq: 90,
			def: 80,
			atq_esp: 130,
			def_esp: 110,
			vel: 110,
		},
		descricao:
			"Possui a habilidade de fazer seu oponente ver uma imagem do que tem visto ou imagina em sua cabeça. Este Pokémon é inteligente e entende a fala humana.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Eternidade",
		lendario: true,
		obtencao: "Ilha Sul; ou Vagando por Hoenn",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b9/0381Latios.png/375px-0381Latios.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Latios_(Pok%C3%A9mon)",
	},
	{
		nome: "Kyogre",
		numero: 382, // considerando a national dex
		tipo: ["Água"],
		massa: 352.0, // em kg
		altura: 4.5, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 90,
			atq_esp: 150,
			def_esp: 140,
			vel: 90,
		},
		descricao:
			"Tem o poder de criar enormes nuvens de chuva que cobrem inteiramente o céu e provocam precipitações torrenciais. Este Pokémon salvou pessoas que sofriam de secas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bacia Marinha",
		lendario: true,
		obtencao: "Caverna da Origem; ou Caverna Marinha",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/51/0382Kyogre.png/375px-0382Kyogre.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kyogre_(Pok%C3%A9mon)",
	},
	{
		nome: "Groudon",
		numero: 383, // considerando a national dex
		tipo: ["Terra"],
		massa: 950.0, // em kg
		altura: 3.5, // em metros
		estatistica: {
			ps: 100,
			atq: 150,
			def: 140,
			atq_esp: 100,
			def_esp: 90,
			vel: 90,
		},
		descricao:
			"Tem o poder de dispersar nuvens de chuva e fazer água evaporar com luz e calor. Veio como um salvador para as pessoas que estavam sofrendo de enchentes terríveis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Continente",
		lendario: true,
		obtencao: "Caverna da Origem; ou Caverna Terrena",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b9/0381Latios.png/375px-0381Latios.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Groudon_(Pok%C3%A9mon)",
	},
	{
		nome: "Rayquaza",
		numero: 384, // considerando a national dex
		tipo: ["Dragão", " Voador"],
		massa: 206.5, // em kg
		altura: 7.0, // em metros
		estatistica: {
			ps: 105,
			atq: 150,
			def: 90,
			atq_esp: 150,
			def_esp: 90,
			vel: 95,
		},
		descricao:
			"Viveu por centenas de milhões de anos na camada de ozônio da Terra, nunca descendo para o chão. Sua existência tem sido completamente desconhecida por viver tão alto no céu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Celeste",
		lendario: true,
		obtencao: "Pilar Celeste",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/80/0384Rayquaza.png/375px-0384Rayquaza.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rayquaza_(Pok%C3%A9mon)",
	},
	{
		nome: "Jirachi",
		numero: 385, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 1.1, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Uma lenda afirma que este Pokémon realizará qualquer desejo escrito em notas presas à sua cabeça quando acordar. Caso este Pokémon sinta perigo, lutará sem acordar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Desejo",
		lendario: true,
		obtencao: "Por evento",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/61/0385Jirachi.png/375px-0385Jirachi.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Jirachi_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386.1, // considerando a national dex e ser a variante normal
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 50,
			atq: 150,
			def: 50,
			atq_esp: 150,
			def_esp: 50,
			vel: 150,
		},
		descricao:
			"O DNA de um vírus espacial sofreu uma mutação repentina ao ser exposto a um raio laser e resultou neste Pokémon. O órgão cristalino no peito deste Pokémon aparenta ser seu cérebro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		obtencao: "Ilha da Origem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d7/0386Deoxys.png/375px-0386Deoxys.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386.2, // considerando a national dex e ser a variante ofensiva
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 50,
			atq: 180,
			def: 20,
			atq_esp: 180,
			def_esp: 20,
			vel: 150,
		},
		descricao:
			"Este Pokémon se transformou em seu disfarce agressivo. Pode enganar inimigos alterado sua aparência.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		obtencao: "Ilha da Origem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c6/0386Deoxys-Attack.png/165px-0386Deoxys-Attack.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386.3, // considerando a national dex e ser variante defensiva
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 50,
			atq: 70,
			def: 160,
			atq_esp: 70,
			def_esp: 160,
			vel: 90,
		},
		descricao:
			"Quando muda de forma, uma aurora aparece. Absorve ataque alterando sua estrutura molecular.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		obtencao: "Ilha da Origem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/27/0386Deoxys-Defense.png/165px-0386Deoxys-Defense.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386.4, // considerando a national dex e ser a variante veloz
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 50,
			atq: 95,
			def: 90,
			atq_esp: 95,
			def_esp: 90,
			vel: 180,
		},
		descricao:
			"Um Pokémon que sofreu mutação de um vírus extraterrestre exposto a um raio lase. Seu corpo é configurado para agilidade e velocidade superiores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		obtencao: "Ilha da Origem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/17/0386Deoxys-Speed.png/165px-0386Deoxys-Speed.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Deoxys_(Pok%C3%A9mon)",
	},
	{
		nome: "Turtwig",
		numero: 387, // considerando a national dex
		tipo: ["Planta"],
		massa: 10.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 55,
			atq: 68,
			def: 64,
			atq_esp: 45,
			def_esp: 55,
			vel: 31,
		},
		descricao:
			"Feito de solo, o casco em suas costas endurece quando bebe água. Vive próximo a lagos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folhinha",
		lendario: false,
		obtencao: "Rota 201; ou Lago Verdade",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/68/0387Turtwig.png/375px-0387Turtwig.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)",
	},
	{
		nome: "Grotle",
		numero: 388, // considerando a national dex
		tipo: ["Planta"],
		massa: 97.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 75,
			atq: 89,
			def: 85,
			atq_esp: 55,
			def_esp: 65,
			vel: 36,
		},
		descricao:
			"Vive próximo a fontes de água em florestas. Durante o dia, deixa a floresta para dar banho de sol em seu casco arborizado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bosque",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f8/0388Grotle.png/375px-0388Grotle.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pok%C3%A9mon)",
	},
	{
		nome: "Torterra",
		numero: 389, // considerando a national dex
		tipo: ["Planta", " Terra"],
		massa: 310.0, // em kg
		altura: 2.2, // em metros
		estatistica: {
			ps: 95,
			atq: 109,
			def: 105,
			atq_esp: 75,
			def_esp: 85,
			vel: 56,
		},
		descricao:
			"Ocasionalmente, pequenos Pokémon se reúnem em suas costas para começar a construir seus ninhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Continente",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0389Torterra.png/375px-0389Torterra.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
	},
	{
		nome: "Chimchar",
		numero: 390, // considerando a national dex
		tipo: ["Fogo"],
		massa: 6.2, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 44,
			atq: 58,
			def: 44,
			atq_esp: 58,
			def_esp: 44,
			vel: 61,
		},
		descricao:
			"Sua traseira flamejante é alimentada por gás produzido em sua barriga. Nem chuva pode apagar o fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chimpanzé",
		lendario: false,
		obtencao: "Rota 201; ou Lago Verdade",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/91/0390Chimchar.png/375px-0390Chimchar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pok%C3%A9mon)",
	},
	{
		nome: "Monferno",
		numero: 391, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 22.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 64,
			atq: 78,
			def: 52,
			atq_esp: 78,
			def_esp: 52,
			vel: 81,
		},
		descricao:
			"Para intimidar agressores, estica o fogo em sua cauda para parecer maior.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincalhão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/52/0391Monferno.png/375px-0391Monferno.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pok%C3%A9mon)",
	},
	{
		nome: "Infernape",
		numero: 392, // considerando a national dex
		tipo: ["Fogo", " Lutador"],
		massa: 55.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 76,
			atq: 104,
			def: 71,
			atq_esp: 104,
			def_esp: 71,
			vel: 108,
		},
		descricao:
			"Usa um tipo diferente de arte marcial envolvendo todo os seus membros. Seu fogo nunca se apaga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0392Infernape.png/375px-0392Infernape.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pok%C3%A9mon)",
	},
	{
		nome: "Piplup",
		numero: 393, // considerando a national dex
		tipo: ["Água"],
		massa: 5.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 53,
			atq: 51,
			def: 53,
			atq_esp: 61,
			def_esp: 56,
			vel: 40,
		},
		descricao:
			"Por ser muito orgulhoso, odeia aceitar comida de pessoas. Sua penugem espessa protege do frio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinguim",
		lendario: false,
		obtencao: "Rota 201; ou Lago Verdade",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/ba/0393Piplup.png/375px-0393Piplup.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Prinplup",
		numero: 394, // considerando a national dex
		tipo: ["Água"],
		massa: 23.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 64,
			atq: 66,
			def: 68,
			atq_esp: 81,
			def_esp: 76,
			vel: 50,
		},
		descricao:
			"Vive sozinho, longe de outros. Aparentemente, cada um de sua espécie acredita ser o mais importante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinguim",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0394Prinplup.png/375px-0394Prinplup.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Empoleon",
		numero: 395, // considerando a national dex
		tipo: ["Água", " Metal"],
		massa: 84.5, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 84,
			atq: 86,
			def: 88,
			atq_esp: 111,
			def_esp: 101,
			vel: 60,
		},
		descricao:
			"Os três chifres que se estendem de seu bico atestam seu poder. O líder possui os maiores chifres.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Imperador",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7f/0395Empoleon.png/375px-0395Empoleon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Starly",
		numero: 396, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 40,
			atq: 55,
			def: 30,
			atq_esp: 30,
			def_esp: 30,
			vel: 60,
		},
		descricao:
			"Seus grupos são em grandes números. Embora pequenos, eles batem suas asas com grande poder.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estorninho",
		lendario: false,
		obtencao: "Rotas 201, 202, 203, e outras; Lago Verdade; e Grande Pântano",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9b/0396Starly.png/375px-0396Starly.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Starly_(Pok%C3%A9mon)",
	},
	{
		nome: "Staravia",
		numero: 397, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 15.5, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 55,
			atq: 75,
			def: 50,
			atq_esp: 40,
			def_esp: 40,
			vel: 80,
		},
		descricao:
			"Voa por a florestas e campos em procura de Pokémon insetos. Fica dentro de um bando enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Estorninho",
		lendario: false,
		obtencao:
			"Rotas 209, 210, 212, e outra; Jardim Troféu; Lago Valor; Fonte da Despedida; Grande Pântano; e Arredores do Lago Valor",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/87/0397Staravia.png/375px-0397Staravia.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Staravia_(Pok%C3%A9mon)",
	},
	{
		nome: "Staraptor",
		numero: 398, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 24.9, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 85,
			atq: 120,
			def: 70,
			atq_esp: 50,
			def_esp: 50,
			vel: 100,
		},
		descricao:
			"Possui uma natureza selvagem. Desafia corajosamente adversários muito maiores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Predador",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/3c/0398Staraptor.png/375px-0398Staraptor.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Staraptor_(Pok%C3%A9mon)",
	},
	{
		nome: "Bidoof",
		numero: 399, // considerando a national dex
		tipo: ["Normal"],
		massa: 20.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 59,
			atq: 45,
			def: 40,
			atq_esp: 35,
			def_esp: 40,
			vel: 31,
		},
		descricao:
			"Com nervos de aço, nada consegue perturbá-lo. Mais ágil e ativo do que parece.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato Gorducho",
		lendario: false,
		obtencao:
			"Rotas 201, 202, 203, e outras; Lago Verdade; Floresta de Eterna; Grande Pântano; e Usina do Vale.",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/70/0399Bidoof.png/375px-0399Bidoof.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bidoof_(Pok%C3%A9mon)",
	},
	{
		nome: "Bibarel",
		numero: 400, // considerando a national dex
		tipo: ["Normal", " Água"],
		massa: 31.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 79,
			atq: 85,
			def: 60,
			atq_esp: 55,
			def_esp: 60,
			vel: 71,
		},
		descricao:
			"Constrói seu ninho represando riachos com casca e lama. É conhecido como um trabalhador industrial.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Castor",
		lendario: false,
		obtencao:
			"Rotas 208, 209, 210, e outra; Lago Valor; Fonte da Despedida; Grande Pântano; Lago Perspicácia; e Arredores do Lago Valor",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/dc/0400Bibarel.png/375px-0400Bibarel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bibarel_(Pok%C3%A9mon)",
	},
	{
		nome: "Kricketot",
		numero: 401, // considerando a national dex
		tipo: ["Inseto"],
		massa: 2.2, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 37,
			atq: 25,
			def: 41,
			atq_esp: 25,
			def_esp: 41,
			vel: 25,
		},
		descricao:
			"Balança a cabeça de trás para frente, fazendo com que suas antenas batam uma na outra e soem como um xilofone.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Grilo",
		lendario: false,
		obtencao: "Rotas 202, 203, 204, e outras; e Floresta de Eterna.",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/72/0401Kricketot.png/375px-0401Kricketot.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kricketot_(Pok%C3%A9mon)",
	},
	{
		nome: "Kricketune",
		numero: 402, // considerando a national dex
		tipo: ["Inseto"],
		massa: 25.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 77,
			atq: 85,
			def: 51,
			atq_esp: 55,
			def_esp: 51,
			vel: 65,
		},
		descricao:
			"Cruza seu braços semelhantes a uma faca na frente de seu peito quando emite sons. Consegue compor melodias no improviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Grilo",
		lendario: false,
		obtencao:
			"Rotas 206, 210, 212, e outras; Jardim Troféu; e Arredores do Lago Valor",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/11/0402Kricketune.png/375px-0402Kricketune.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Kricketune_(Pok%C3%A9mon)",
	},
	{
		nome: "Shinx",
		numero: 403, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 9.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 45,
			atq: 65,
			def: 34,
			atq_esp: 40,
			def_esp: 34,
			vel: 45,
		},
		descricao:
			"Todo seu pelo deslumbra quando sente perigo. Foge enquanto o oponente está momentaneamente cego.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lampejante",
		lendario: false,
		obtencao: "Rotas 202, 203, e 204; Usina do Vale; e Fuego de Ferro",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/58/0403Shinx.png/375px-0403Shinx.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shinx_(Pok%C3%A9mon)",
	},
	{
		nome: "Luxio",
		numero: 404, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 60,
			atq: 85,
			def: 49,
			atq_esp: 60,
			def_esp: 49,
			vel: 60,
		},
		descricao:
			"Suas garras liberam eletricidade com amperagem o suficiente para causar desmaio. Vivem em pequenos grupos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fagulha",
		lendario: false,
		obtencao: "Rota 222; e Fuego de Ferro.",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/0f/0404Luxio.png/375px-0404Luxio.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Luxio_(Pok%C3%A9mon)",
	},
	{
		nome: "Luxray",
		numero: 405, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 42.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 80,
			atq: 120,
			def: 79,
			atq_esp: 95,
			def_esp: 79,
			vel: 70,
		},
		descricao:
			"Quando seus olhos brilham dourados, consegue localizar presas escondidas, mesmo aquelas abrigadas atrás de uma parede.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Olhos Fulgurantes",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f4/0405Luxray.png/375px-0405Luxray.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Luxray_(Pok%C3%A9mon)",
	},
	{
		nome: "Budew",
		numero: 406, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 1.2, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 40,
			atq: 30,
			def: 35,
			atq_esp: 50,
			def_esp: 70,
			vel: 55,
		},
		descricao:
			"Durante o inverno, fecha o botão e perdura o frio. Na primavera, o botão se abre e libera pólen.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Broto",
		lendario: false,
		obtencao: "Rotas 204, e 2012; Floresta de Eterna; e Grande Pântano.",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f9/0406Budew.png/375px-0406Budew.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Budew_(Pok%C3%A9mon)",
	},
	{
		nome: "Roserade",
		numero: 407, // considerando a national dex
		tipo: ["Planta", " Veneno"],
		massa: 14.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 60,
			atq: 70,
			def: 55,
			atq_esp: 125,
			def_esp: 105,
			vel: 90,
		},
		descricao:
			"Atrai presa com um aroma adocicado para derruba-la com chicotes espinhosos escondidos em seus braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Buquê",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b9/0407Roserade.png/375px-0407Roserade.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Roserade_(Pok%C3%A9mon)",
	},
	{
		nome: "Cranidos",
		numero: 408, // considerando a national dex
		tipo: ["Rocha"],
		massa: 31.5, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 67,
			atq: 125,
			def: 40,
			atq_esp: 30,
			def_esp: 30,
			vel: 58,
		},
		descricao:
			"Viveu em selvas por volta de cem milhões de anos atrás. Seu crânio é tão duro quanto ferro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cabeçada",
		lendario: false,
		obtencao: "Revivido a partir de um fóssil.",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/07/0408Cranidos.png/375px-0408Cranidos.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cranidos_(Pok%C3%A9mon)",
	},
	{
		nome: "Rampardos",
		numero: 409, // considerando a national dex
		tipo: ["Rocha"],
		massa: 102.5, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 97,
			atq: 165,
			def: 60,
			atq_esp: 65,
			def_esp: 50,
			vel: 58,
		},
		descricao:
			"Sua poderosa cabeçada possui poder suficiente para quebrar até mesmo as coisas mais duráveis com o impacto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cabeçada",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b9/0407Roserade.png/375px-0407Roserade.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rampardos_(Pok%C3%A9mon)",
	},
	{
		nome: "Shieldon",
		numero: 410, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 57.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 30,
			atq: 42,
			def: 118,
			atq_esp: 42,
			def_esp: 88,
			vel: 30,
		},
		descricao:
			"Um Pokémon que viveu nas selvas por volta de cem milhões de anos atrás. Seu couro facial é extremamente duro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escudo",
		lendario: false,
		obtencao: "Revivido a partir de um fóssil.",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/11/0410Shieldon.png/375px-0410Shieldon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shieldon_(Pok%C3%A9mon)",
	},
	{
		nome: "Bastiodon",
		numero: 411, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 149.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 60,
			atq: 52,
			def: 168,
			atq_esp: 47,
			def_esp: 138,
			vel: 30,
		},
		descricao:
			"Qualquer ataque frontal é repelido. É um Pokémon dócil que se alimenta de grama e frutas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escudo",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b0/0411Bastiodon.png/375px-0411Bastiodon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bastiodon_(Pok%C3%A9mon)",
	},
	{
		nome: "Burmy",
		numero: 412, // considerando a national dex
		tipo: ["Inseto"],
		massa: 3.4, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 40,
			atq: 29,
			def: 45,
			atq_esp: 29,
			def_esp: 45,
			vel: 36,
		},

		descricao:
			"Para se proteger dos ventos frios do inverno, se cobre com uma capa feita de materiais como folhas, galhos, areia, e restos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		lendario: false,
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e8/0412Burmy-Plant.png/375px-0412Burmy-Plant.png",
			"https://archives.bulbagarden.net/media/upload/thumb/e/ee/0412Burmy-Sandy.png/165px-0412Burmy-Sandy.png",
			"https://archives.bulbagarden.net/media/upload/thumb/4/42/0412Burmy-Trash.png/165px-0412Burmy-Trash.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Burmy_(Pok%C3%A9mon)",
	},
	{
		nome: "Wormadam",
		numero: 413.1, // considerando a national dex e por ser a primeira variante que aparece
		tipo: ["Inseto", " Planta"],
		massa: 6.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 60,
			atq: 59,
			def: 85,
			atq_esp: 79,
			def_esp: 105,
			vel: 36,
		},

		descricao:
			"Sua aparência muda dependendo de onde tenha evoluído. Os materiais disponíveis se tornam parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ee/0413Wormadam-Plant.png/375px-0413Wormadam-Plant.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
	},
	{
		nome: "Wormadam",
		numero: 413.2, // considerando a national dex e por ser a segunda variante que aparece
		tipo: ["Inseto", " Terra"],
		massa: 6.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 60,
			atq: 79,
			def: 105,
			atq_esp: 59,
			def_esp: 85,
			vel: 36,
		},

		descricao:
			"Sua aparência muda dependendo de onde tenha evoluído. Os materiais disponíveis se tornam parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0413Wormadam-Sandy.png/165px-0413Wormadam-Sandy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
	},
	{
		nome: "Wormadam",
		numero: 413.3, // considerando a national dex e por ser a terceira variante que aparece
		tipo: ["Inseto", " Metal"],
		massa: 6.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 60,
			atq: 69,
			def: 95,
			atq_esp: 69,
			def_esp: 95,
			vel: 36,
		},

		descricao:
			"Sua aparência muda dependendo de onde tenha evoluído. Os materiais disponíveis se tornam parte de seu corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bicho-de-cesto",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/25/0413Wormadam-Trash.png/165px-0413Wormadam-Trash.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)",
	},
	{
		nome: "Mothim",
		numero: 414, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 23.3, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 70,
			atq: 94,
			def: 50,
			atq_esp: 94,
			def_esp: 50,
			vel: 66,
		},
		descricao:
			"Não mantém um ninho. Voa sobre campos e montanhas em procura constante de mel floral.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0414Mothim.png/375px-0414Mothim.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mothim_(Pok%C3%A9mon)",
	},
	{
		nome: "Combee",
		numero: 415, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 5.5, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 30,
			atq: 30,
			def: 42,
			atq_esp: 30,
			def_esp: 42,
			vel: 70,
		},
		descricao:
			"Coleta e entrega meu para sua colônia. À noite, se agrupam para formar uma colmeia e dormem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelhinha",
		lendario: false,
		obtencao:
			"Rotas 205, 206, 207, e outros; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/30/0415Combee.png/375px-0415Combee.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Combee_(Pok%C3%A9mon)",
	},
	{
		nome: "Vespiquen",
		numero: 416, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 38.5, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 70,
			atq: 80,
			def: 102,
			atq_esp: 80,
			def_esp: 102,
			vel: 40,
		},
		descricao:
			"Quando ameaçadas, larvas de seu favo de mel de seis células revidam. Há apenas uma em uma colônia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Colmeia",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6c/0416Vespiquen.png/375px-0416Vespiquen.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Vespiquen_(Pok%C3%A9mon)",
	},
	{
		nome: "Pachirisu",
		numero: 417, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 3.9, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 60,
			atq: 45,
			def: 70,
			atq_esp: 45,
			def_esp: 90,
			vel: 95,
		},
		descricao:
			"Faz bolas de pelo que estalam com eletricidade estática. As armazena com frutas em buracos de árvores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Esquilo Elétrico",
		lendario: false,
		obtencao: "Rota 204; Fuego de Ferro; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/92/0417Pachirisu.png/375px-0417Pachirisu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Pachirisu_(Pok%C3%A9mon)",
	},
	{
		nome: "Buizel",
		numero: 418, // considerando a national dex
		tipo: ["Água"],
		massa: 29.5, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 55,
			atq: 65,
			def: 35,
			atq_esp: 60,
			def_esp: 30,
			vel: 85,
		},
		descricao:
			"Possui um saco de flutuação que se assemelha a uma coleira inflável. Flutua na água com a cabeça para fora.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Doninha do Mar",
		lendario: false,
		obtencao: "Rotas 205, 213, e 204; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b3/0418Buizel.png/375px-0418Buizel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Buizel_(Pok%C3%A9mon)",
	},
	{
		nome: "Floatzel",
		numero: 419, // considerando a national dex
		tipo: ["Água"],
		massa: 33.5, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 85,
			atq: 105,
			def: 55,
			atq_esp: 85,
			def_esp: 50,
			vel: 115,
		},
		descricao:
			"Flutua usando seus saco de flutuação bem desenvolvido. Auxilia no resgate de pessoas que estão se afogando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Doninha do Mar",
		lendario: false,
		obtencao:
			"Rotas 213, 218, 221, e outras; Fuego de Ferro; e Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/1c/0419Floatzel.png/375px-0419Floatzel.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Floatzel_(Pok%C3%A9mon)",
	},
	{
		nome: "Cherubi",
		numero: 420, // considerando a national dex
		tipo: ["Planta"],
		massa: 3.3, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 45,
			atq: 35,
			def: 45,
			atq_esp: 62,
			def_esp: 53,
			vel: 35,
		},
		descricao: "A bola pequena não só cheia de nutrientes, também é saborosa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cereja",
		lendario: false,
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0420Cherubi.png/375px-0420Cherubi.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cherubi_(Pok%C3%A9mon)",
	},
	{
		nome: "Cherrim",
		numero: 421, // considerando a national dex
		tipo: ["Planta"],
		massa: 9.3, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 70,
			atq: 60,
			def: 70,
			atq_esp: 87,
			def_esp: 78,
			vel: 85,
		},
		descricao:
			"Floresce em épocas de forte luz solar. Tenta compensar tudo o que suportou como broto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Floreado",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0421Cherrim.png/375px-0421Cherrim.png",
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0421Cherrim-Sunshine.png/165px-0421Cherrim-Sunshine.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cherrim_(Pok%C3%A9mon)",
	},
	{
		nome: "Shellos",
		numero: 422, // considerando a national dex
		tipo: ["Água"],
		massa: 6.3, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 76,
			atq: 48,
			def: 48,
			atq_esp: 57,
			def_esp: 62,
			vel: 34,
		},
		descricao:
			"Suas cores e formas diferem de região para região. Na região de Sinnoh, estão confirmados dois tipos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lesma do Mar",
		lendario: false,
		obtencao: "Rotas 205, 212, 213, e outras; Fuego de Ferro; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/65/0422Shellos-West.png/150px-0422Shellos-West.png",
			"https://archives.bulbagarden.net/media/upload/thumb/d/db/0422Shellos-East.png/150px-0422Shellos-East.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shellos_(Pok%C3%A9mon)",
	},
	{
		nome: "Gastrodon",
		numero: 423, // considerando a national dex
		tipo: ["Água", " Terra"],
		massa: 29.9, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 111,
			atq: 83,
			def: 68,
			atq_esp: 82,
			def_esp: 82,
			vel: 39,
		},
		descricao:
			"Possui um corpo flexível sem ossos. Caso qualquer parte de seu corpo for arrancada, ela cresce de volta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lesma do Mar",
		lendario: false,
		obtencao: "Rotas 205, 213, 218, e outras; Fuego de Ferro; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0423Gastrodon-West.png/150px-0423Gastrodon-West.png",
			"https://archives.bulbagarden.net/media/upload/thumb/5/57/0423Gastrodon-East.png/150px-0423Gastrodon-East.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gastrodon_(Pok%C3%A9mon)",
	},
	{
		nome: "Ambipom",
		numero: 424, // considerando a national dex
		tipo: ["Normal"],
		massa: 20.3, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 75,
			atq: 100,
			def: 66,
			atq_esp: 60,
			def_esp: 66,
			vel: 115,
		},
		descricao:
			"Para comer, habilmente descasca nozes com suas duas caudas. Raramente usa seus braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cauda Longa",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9d/0424Ambipom.png/375px-0424Ambipom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Ambipom_(Pok%C3%A9mon)",
	},
	{
		nome: "Drifloon",
		numero: 425, // considerando a national dex
		tipo: ["Fantasma", " Voador"],
		massa: 1.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 90,
			atq: 50,
			def: 34,
			atq_esp: 60,
			def_esp: 44,
			vel: 70,
		},
		descricao:
			"Um Pokémon formado pelos espíritos de pessoas e Pokémon. Gosta de estações úmidas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		obtencao: "Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/ff/0425Drifloon.png/375px-0425Drifloon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drifloon_(Pok%C3%A9mon)",
	},
	{
		nome: "Drifblim",
		numero: 426, // considerando a national dex
		tipo: ["Fantasma", " Voador"],
		massa: 15.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 150,
			atq: 80,
			def: 44,
			atq_esp: 90,
			def_esp: 54,
			vel: 80,
		},
		descricao:
			"É sonolento durante o dia, voa à noite em grandes grupos. Ninguém sabe para onde vão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dirigível",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/ea/0426Drifblim.png/375px-0426Drifblim.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drifblim_(Pok%C3%A9mon)",
	},
	{
		nome: "Buneary",
		numero: 427, // considerando a national dex
		tipo: ["Normal"],
		massa: 5.5, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 55,
			atq: 66,
			def: 44,
			atq_esp: 44,
			def_esp: 56,
			vel: 85,
		},
		descricao:
			"Bate em seus inimigos desenrolando bruscamente suas orelhas enroladas. Pica o suficiente para fazer um adulto chorar de dor.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coelho",
		lendario: false,
		obtencao: "Floresta de Eterna",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6c/0427Buneary.png/375px-0427Buneary.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Buneary_(Pok%C3%A9mon)",
	},
	{
		nome: "Luponny",
		numero: 428, // considerando a national dex
		tipo: ["Normal"],
		massa: 33.3, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 65,
			atq: 136,
			def: 94,
			atq_esp: 54,
			def_esp: 96,
			vel: 135,
		},
		descricao:
			"Um Pokémon extremamente cauteloso. Cobre seu corpo com sua orelha fofa quando sente perigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coelho",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4b/0428Lopunny.png/375px-0428Lopunny.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lopunny_(Pok%C3%A9mon)",
	},
	{
		nome: "Mismagius",
		numero: 429, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 4.4, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 60,
			atq: 60,
			def: 60,
			atq_esp: 105,
			def_esp: 105,
			vel: 105,
		},
		descricao:
			"Os sons que emite soam como encantações. Quem ouve são atormentados por dores de cabeça e alucinações.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mágico",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a5/0429Mismagius.png/375px-0429Mismagius.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mismagius_(Pok%C3%A9mon)",
	},
	{
		nome: "Honchkrow",
		numero: 430, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 27.3, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 100,
			atq: 125,
			def: 52,
			atq_esp: 105,
			def_esp: 52,
			vel: 71,
		},
		descricao:
			"Caso algum soltar um grito profundo, vários subordinados reúnem-se rapidamente. For isso, é chamado de 'Invocador da Noite'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chefão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/c/c5/0430Honchkrow.png/375px-0430Honchkrow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Honchkrow_(Pok%C3%A9mon)",
	},
	{
		nome: "Glameow",
		numero: 431, // considerando a national dex
		tipo: ["Normal"],
		massa: 3.9, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 49,
			atq: 55,
			def: 42,
			atq_esp: 42,
			def_esp: 37,
			vel: 85,
		},
		descricao:
			"Arranha quando está insatisfeito e ronrona quando afetuoso. Sua inconstância é muito popular entre alguns.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vingativo",
		lendario: false,
		obtencao: "Rotas 218, e 222",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b6/0431Glameow.png/375px-0431Glameow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Glameow_(Pok%C3%A9mon)",
	},
	{
		nome: "Purugly",
		numero: 432, // considerando a national dex
		tipo: ["Noturno", " Voador"],
		massa: 43.8, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 71,
			atq: 82,
			def: 64,
			atq_esp: 64,
			def_esp: 59,
			vel: 112,
		},
		descricao:
			"É um bruto descarado que invade o ninho de outro Pokémon e o reivindica como seu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato-tigre",
		lendario: false,
		obtencao: "Rotas 222, e 229",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/6a/0432Purugly.png/375px-0432Purugly.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Purugly_(Pok%C3%A9mon)",
	},
	{
		nome: "Chingling",
		numero: 433, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.6, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 45,
			atq: 30,
			def: 50,
			atq_esp: 65,
			def_esp: 50,
			vel: 45,
		},
		descricao:
			"Emite sons ao agitar uma orbe no fundo da gargante. Se move com pulos agitados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sino",
		lendario: false,
		obtencao:
			"Rota 211; Lago Valor; Monte Coronet; Lago da Perspicácia; Fonte da Despedida; e Caverna do Retorno",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2f/0433Chingling.png/375px-0433Chingling.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chingling_(Pok%C3%A9mon)",
	},
	{
		nome: "Stunky",
		numero: 434, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 19.2, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 63,
			atq: 63,
			def: 47,
			atq_esp: 41,
			def_esp: 41,
			vel: 74,
		},
		descricao:
			"Protege a si mesmo borrifando um fluido nocivo de sua parte traseira. O fedor permanece por 24 horas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gambá",
		lendario: false,
		obtencao: "Rotas 206, 214 e 221",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/93/0434Stunky.png/375px-0434Stunky.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Stunky_(Pok%C3%A9mon)",
	},
	{
		nome: "Skuntank",
		numero: 435, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 38.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 103,
			atq: 93,
			def: 67,
			atq_esp: 71,
			def_esp: 61,
			vel: 84,
		},
		descricao:
			"Borrifa um fluido de cheiro horrível da ponta da cauda para atacar. Seu alcance é de 50 metros.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato-tigre",
		lendario: false,
		obtencao: "Rotas 221, e 225",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e6/0435Skuntank.png/375px-0435Skuntank.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skuntank_(Pok%C3%A9mon)",
	},
	{
		nome: "Bronzor",
		numero: 436, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 60.5, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 57,
			atq: 24,
			def: 86,
			atq_esp: 24,
			def_esp: 86,
			vel: 23,
		},
		descricao:
			"Fotos de raio-X foram tiradas para verificar a estrutura de seu corpo. Contudo, nada apareceu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bronze",
		lendario: false,
		obtencao:
			"Rotas 206, e 211; Caverna Extravio; Caverna do Retorno; e Monte Coronet",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/7d/0436Bronzor.png/375px-0436Bronzor.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bronzor_(Pok%C3%A9mon)",
	},
	{
		nome: "Bronzong",
		numero: 437, // considerando a national dex
		tipo: ["Metal", " Psíquico"],
		massa: 187.0, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 67,
			atq: 89,
			def: 116,
			atq_esp: 79,
			def_esp: 116,
			vel: 33,
		},
		descricao:
			"Consegue invocar nuvens de chuva. Pessoas há muito tempo o reverenciavam como o portado de colheitas abundantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sino de Bronze",
		lendario: false,
		obtencao: "Caverna do Retorno; e Monte Coronet",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0437Bronzong.png/375px-0437Bronzong.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bronzong_(Pok%C3%A9mon)",
	},
	{
		nome: "Bonsly",
		numero: 438, // considerando a national dex
		tipo: ["Rocha"],
		massa: 15.0, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 50,
			atq: 80,
			def: 95,
			atq_esp: 10,
			def_esp: 45,
			vel: 10,
		},
		descricao:
			"Aparenta sempre estar chorando. Na verdade, está ajustando os níveis de fluidos corporais eliminando o excesso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bonsai",
		lendario: false,
		obtencao: "Rotas 209, e 210; e Jardim Troféu",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/47/0438Bonsly.png/375px-0438Bonsly.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Bonsly_(Pok%C3%A9mon)",
	},
	{
		nome: "Mime Jr.",
		numero: 439, // considerando a national dex
		tipo: ["Psíquico", " Fada"],
		massa: 13.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 20,
			atq: 25,
			def: 45,
			atq_esp: 70,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Habitualmente imita os inimigos. Uma vez imitado, o inimigo não consegue tirar os olhos deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mímico",
		lendario: false,
		obtencao: "Rotas 209, e 210; e Jardim Troféu",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/2e/0439Mime_Jr.png/375px-0439Mime_Jr.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mime_Jr._(Pok%C3%A9mon)",
	},
	{
		nome: "Happiny",
		numero: 440, // considerando a national dex
		tipo: ["Normal"],
		massa: 24.4, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 100,
			atq: 5,
			def: 5,
			atq_esp: 75,
			def_esp: 65,
			vel: 30,
		},
		descricao:
			"Gosta de carregar uma rocha pequena. Pode vagar pelos pés dos outros e fazê-los tropeçar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincar de Casinha",
		lendario: false,
		obtencao: "Jardim Troféu",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/71/0440Happiny.png/375px-0440Happiny.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Happiny_(Pok%C3%A9mon)",
	},
	{
		nome: "Chatot",
		numero: 441, // considerando a national dex
		tipo: ["Normal", " Voador"],
		massa: 1.9, // em kg
		altura: 0.5, // em metros
		estatistica: {
			ps: 76,
			atq: 65,
			def: 45,
			atq_esp: 92,
			def_esp: 42,
			vel: 91,
		},
		descricao:
			"Consegue aprender e falar palavras humanas. Quando se juntam, todos aprenderão o mesmo ditado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Nota Musical",
		lendario: false,
		obtencao: "Rotas 213, 218, 222, e outra",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b1/0441Chatot.png/375px-0441Chatot.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Chatot_(Pok%C3%A9mon)",
	},
	{
		nome: "Spiritomb",
		numero: 442, // considerando a national dex
		tipo: ["Fantasma", " Noturno"],
		massa: 108.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 50,
			atq: 92,
			def: 108,
			atq_esp: 92,
			def_esp: 108,
			vel: 35,
		},
		descricao:
			"Foi preso a uma fissura em uma pedra sagrada como punição por delitos cometidos há 500 anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Proibido",
		lendario: false,
		obtencao: "Torre Sagrada",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/39/0442Spiritomb.png/375px-0442Spiritomb.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Spiritomb_(Pok%C3%A9mon)",
	},
	{
		nome: "Gible",
		numero: 443, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 20.5, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 58,
			atq: 70,
			def: 45,
			atq_esp: 40,
			def_esp: 45,
			vel: 42,
		},
		descricao:
			"Nidifica em pequenos buracos horizontais nas paredes de cavernas. Ataca para capturar presas que se aproximam demais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tubarão Terrestre",
		lendario: false,
		obtencao: "Caverna Extravio",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/68/0443Gible.png/375px-0443Gible.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gible_(Pok%C3%A9mon)",
	},
	{
		nome: "Gabite",
		numero: 444, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 56.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 68,
			atq: 90,
			def: 65,
			atq_esp: 50,
			def_esp: 55,
			vel: 82,
		},
		descricao:
			"Há uma crença antiga que remédios feitos com suas escamas curam até doenças incuráveis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gruta",
		lendario: false,
		obtencao: "Estrada da Vitória",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f2/0444Gabite.png/375px-0444Gabite.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gabite_(Pok%C3%A9mon)",
	},
	{
		nome: "Garchomp",
		numero: 445, // considerando a national dex
		tipo: ["Dragão", " Terra"],
		massa: 108.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 108,
			atq: 130,
			def: 95,
			atq_esp: 80,
			def_esp: 85,
			vel: 102,
		},
		descricao:
			"Quando dobra seu corpo e estende suas asas, se assemelha a um jato. Voa em velocidade sônica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Supersônico",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a8/0445Garchomp.png/375px-0445Garchomp.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Garchomp_(Pok%C3%A9mon)",
	},
	{
		nome: "Munchlax",
		numero: 446, // considerando a national dex
		tipo: ["Normal"],
		massa: 105.0, // em kg
		altura: 0.6, // em metros
		estatistica: {
			ps: 135,
			atq: 85,
			def: 40,
			atq_esp: 40,
			def_esp: 85,
			vel: 5,
		},
		descricao:
			"Devora seu peso em comida uma vez por dia, engolindo a comida inteira quase sem mastigar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Comilão",
		lendario: false,
		obtencao:
			"Rotas 205, 206, 207, e outras; Floresta de Eterna; Prado de Floaroma; Fuego de Ferro; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/57/0446Munchlax.png/375px-0446Munchlax.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Munchlax_(Pok%C3%A9mon)",
	},
	{
		nome: "Riolu",
		numero: 447, // considerando a national dex
		tipo: ["Lutador"],
		massa: 20.2, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 40,
			atq: 70,
			def: 40,
			atq_esp: 35,
			def_esp: 40,
			vel: 60,
		},
		descricao:
			"A aura que emana de seu corpo intensifica para alertar outros caso esteja assustado ou triste.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Emanação",
		lendario: false,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b2/0447Riolu.png/375px-0447Riolu.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Riolu_(Pok%C3%A9mon)",
	},
	{
		nome: "Lucario",
		numero: 448, // considerando a national dex
		tipo: ["Lutador", " Metal"],
		massa: 54.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 70,
			atq: 110,
			def: 70,
			atq_esp: 115,
			def_esp: 70,
			vel: 90,
		},
		descricao:
			"Possui a habilidade de sentir as auras de todas as coisas. Compreende a fala humana.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Aura",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/57/0446Munchlax.png/375px-0446Munchlax.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lucario_(Pok%C3%A9mon)",
	},
	{
		nome: "Hippopotas",
		numero: 449, // considerando a national dex
		tipo: ["Terra"],
		massa: 49.5, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 68,
			atq: 72,
			def: 78,
			atq_esp: 38,
			def_esp: 42,
			vel: 32,
		},
		descricao:
			"Vive em lugares áridos. Em vez de transpirar, expele areia granulada do corpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipopótamo",
		lendario: false,
		obtencao: "Túnel do Maníaco",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/d/d3/0449Hippopotas.png/375px-0449Hippopotas.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hippopotas_(Pok%C3%A9mon)",
	},
	{
		nome: "Hippowdon",
		numero: 450, // considerando a national dex
		tipo: ["Terra"],
		massa: 300.0, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 108,
			atq: 112,
			def: 118,
			atq_esp: 68,
			def_esp: 72,
			vel: 47,
		},
		descricao:
			"Expele areia que armazena internamente através de aberturas em seu corpo para criar um tornado gigante para ataque.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peso Pesado",
		lendario: false,
		obtencao: "Rota 228",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/70/0450Hippowdon.png/375px-0450Hippowdon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Hippowdon_(Pok%C3%A9mon)",
	},
	{
		nome: "Skorupi",
		numero: 451, // considerando a national dex
		tipo: ["Veneno", " Inseto"],
		massa: 12.0, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 40,
			atq: 50,
			def: 90,
			atq_esp: 30,
			def_esp: 55,
			vel: 65,
		},
		descricao:
			"Agarra a presa com suas garras da cauda e injeta veneno. Tenazmente se agarra até o veneno fazer efeito.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião",
		lendario: false,
		obtencao: "Grande Pântano",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/35/0451Skorupi.png/375px-0451Skorupi.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Skorupi_(Pok%C3%A9mon)",
	},
	{
		nome: "Drapion",
		numero: 452, // considerando a national dex
		tipo: ["Veneno", " Noturno"],
		massa: 61.5, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 70,
			atq: 90,
			def: 110,
			atq_esp: 60,
			def_esp: 75,
			vel: 95,
		},
		descricao:
			"Possui força em suas garras para fazer sucata de um carro. As pontas de suas garras liberam veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião Ogro",
		lendario: false,
		obtencao: "Grande Pântano",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/11/0452Drapion.png/375px-0452Drapion.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Drapion_(Pok%C3%A9mon)",
	},
	{
		nome: "Croagunk",
		numero: 453, // considerando a national dex
		tipo: ["Veneno", " Lutador"],
		massa: 23.0, // em kg
		altura: 0.7, // em metros
		estatistica: {
			ps: 48,
			atq: 61,
			def: 40,
			atq_esp: 61,
			def_esp: 40,
			vel: 50,
		},
		descricao:
			"Suas bochechas contêm sacos de veneno. Tenta pegar os inimigos desprevenidos para acertá-los com dedos tóxicos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boca Tóxica",
		lendario: false,
		obtencao: "Rota 212; e Grande Pântano",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ab/0453Croagunk.png/375px-0453Croagunk.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Croagunk_(Pok%C3%A9mon)",
	},
	{
		nome: "Toxicroak",
		numero: 454, // considerando a national dex
		tipo: ["Veneno", " Lutador"],
		massa: 44.4, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 83,
			atq: 106,
			def: 65,
			atq_esp: 86,
			def_esp: 65,
			vel: 85,
		},
		descricao:
			"Suas garras secretam uma toxina tão vil que até mesmo um arranhão pode ser fatal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Boca Tóxica",
		lendario: false,
		obtencao: "Grande Pântano",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/61/0454Toxicroak.png/375px-0454Toxicroak.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Toxicroak_(Pok%C3%A9mon)",
	},
	{
		nome: "Carnivine",
		numero: 455, // considerando a national dex
		tipo: ["Planta"],
		massa: 27.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 74,
			atq: 100,
			def: 72,
			atq_esp: 90,
			def_esp: 72,
			vel: 45,
		},
		descricao:
			"Atrai a presa com sua saliva de cheiro doce, então a mastiga. Demora um dia inteiro para comer a presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pegador de Insetos",
		lendario: false,
		obtencao: "Grande Pântano",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/85/0455Carnivine.png/375px-0455Carnivine.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Carnivine_(Pok%C3%A9mon)",
	},
	{
		nome: "Finneon",
		numero: 456, // considerando a national dex
		tipo: ["Água"],
		massa: 7.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 49,
			atq: 49,
			def: 56,
			atq_esp: 49,
			def_esp: 61,
			vel: 66,
		},
		descricao:
			"Depois de uma longa exposição a luz solar, os padrões em sua barbatana caudal brilha vividamente quando chega a escuridão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Alado",
		lendario: false,
		obtencao:
			"Rotas 205, 218, 219, e outras; Fuego de Ferro; Ilha Iron; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/ba/0456Finneon.png/375px-0456Finneon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Finneon_(Pok%C3%A9mon)",
	},
	{
		nome: "Lumineon",
		numero: 457, // considerando a national dex
		tipo: ["Água"],
		massa: 24.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 69,
			atq: 69,
			def: 76,
			atq_esp: 69,
			def_esp: 86,
			vel: 91,
		},
		descricao:
			"Vive no fundo do mar profundo. Atrai presas exibindo os padrões em suas quatro nadadeiras caudais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Neon",
		lendario: false,
		obtencao:
			"Rotas 205, 218, 219, e outras; Fuego de Ferro; Ilha Iron; e Usina do Vale",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8c/0457Lumineon.png/375px-0457Lumineon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lumineon_(Pok%C3%A9mon)",
	},
	{
		nome: "Mantyke",
		numero: 458, // considerando a national dex
		tipo: ["Água", " Voador"],
		massa: 65.0, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 45,
			atq: 20,
			def: 50,
			atq_esp: 60,
			def_esp: 120,
			vel: 50,
		},
		descricao:
			"Um Pokémon amigável que captura fluxos sutis da água do mar usando suas duas antenas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pipa",
		lendario: false,
		obtencao: "Rotas 223",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/28/0458Mantyke.png/375px-0458Mantyke.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mantyke_(Pok%C3%A9mon)",
	},
	{
		nome: "Snover",
		numero: 459, // considerando a national dex
		tipo: ["Planta", " Gelo"],
		massa: 50.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 60,
			atq: 62,
			def: 50,
			atq_esp: 62,
			def_esp: 60,
			vel: 40,
		},
		descricao:
			"Vive em montanhas nevadas. Tendo tipo pouco contato com humanos, é ousadamente curioso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Árvore Congelante",
		lendario: false,
		obtencao:
			"Rotas 216, e 217; Arredores do Lago Perspicácia; Lago Perspicácia; e Monte Coronet",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f0/0459Snover.png/375px-0459Snover.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Snover_(Pok%C3%A9mon)",
	},
	{
		nome: "Abomasnow",
		numero: 460, // considerando a national dex
		tipo: ["Planta", " Gelo"],
		massa: 135.5, // em kg
		altura: 2.2, // em metros
		estatistica: {
			ps: 90,
			atq: 92,
			def: 75,
			atq_esp: 92,
			def_esp: 85,
			vel: 60,
		},
		descricao:
			"Provoca nevascas em montanhas que estão sempre enterradas na neve. É o abominável homem das neves.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Árvore Congelante",
		lendario: false,
		obtencao: "Monte Coronet",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/14/0460Abomasnow.png/375px-0460Abomasnow.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Abomasnow_(Pok%C3%A9mon)",
	},
	{
		nome: "Weavile",
		numero: 461, // considerando a national dex
		tipo: ["Noturno", " Gelo"],
		massa: 34.0, // em kg
		altura: 1.1, // em metros
		estatistica: {
			ps: 70,
			atq: 120,
			def: 65,
			atq_esp: 45,
			def_esp: 85,
			vel: 125,
		},
		descricao:
			"Vivem em regiões frias, formando grupos de quatro ou cinco que caçam presas com coordenação impressionante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Garra Afiada",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f1/0461Weavile.png/375px-0461Weavile.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Weavile_(Pok%C3%A9mon)",
	},
	{
		nome: "Magnezone",
		numero: 462, // considerando a national dex
		tipo: ["Elétrico", " Metal"],
		massa: 180.0, // em kg
		altura: 1.2, // em metros
		estatistica: {
			ps: 70,
			atq: 70,
			def: 115,
			atq_esp: 130,
			def_esp: 90,
			vel: 60,
		},
		descricao:
			"Evoluiu da exposição a um campo magnético especial. Três unidades geram magnetismo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Área Magnética",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f5/0462Magnezone.png/375px-0462Magnezone.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magnezone_(Pok%C3%A9mon)",
	},
	{
		nome: "Lickilicky",
		numero: 463, // considerando a national dex
		tipo: ["Normal"],
		massa: 140.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 110,
			atq: 85,
			def: 95,
			atq_esp: 80,
			def_esp: 95,
			vel: 50,
		},
		descricao:
			"Envolve coisas com sua língua extensível. Chegar muito perto dele deixará você encharcado de baba.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lambedor",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/a6/0463Lickilicky.png/375px-0463Lickilicky.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Lickilicky_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhyperior",
		numero: 464, // considerando a national dex
		tipo: ["Terra", " Rocha"],
		massa: 282.8, // em kg
		altura: 2.4, // em metros
		estatistica: {
			ps: 115,
			atq: 140,
			def: 130,
			atq_esp: 55,
			def_esp: 55,
			vel: 40,
		},
		descricao:
			"Consegue lançar uma rocha segurada na mão como um míssil, contraindo e expandido os músculos instantaneamente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f0/0464Rhyperior.png/375px-0464Rhyperior.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhyperior_(Pok%C3%A9mon)",
	},
	{
		nome: "Tangrowth",
		numero: 465, // considerando a national dex
		tipo: ["Planta"],
		massa: 128.6, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 125,
			atq_esp: 110,
			def_esp: 50,
			vel: 50,
		},
		descricao:
			"Seus braços são feitos de plantas que se prendem a coisas. Crescem de volta imediatamente se cortados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trepadeira",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/57/0465Tangrowth.png/375px-0465Tangrowth.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Tangrowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Electivire",
		numero: 466, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 138.6, // em kg
		altura: 1.8, // em metros
		estatistica: {
			ps: 75,
			atq: 123,
			def: 67,
			atq_esp: 95,
			def_esp: 85,
			vel: 95,
		},
		descricao:
			"Empurra a ponta de suas duas caudas contra o oponente, então libera mais de 20'000 volts de energia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Relâmpago",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e8/0466Electivire.png/375px-0466Electivire.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Electivire_(Pok%C3%A9mon)",
	},
	{
		nome: "Magmortar",
		numero: 467, // considerando a national dex
		tipo: ["Fogo"],
		massa: 68.0, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 75,
			atq: 95,
			def: 67,
			atq_esp: 125,
			def_esp: 95,
			vel: 83,
		},
		descricao:
			"Atira bolas de fogo de mais de 2'000° Celsius das pontas dos braços. Vive em crateras vulcânicas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Explosão",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0467Magmortar.png/375px-0467Magmortar.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Magmortar_(Pok%C3%A9mon)",
	},
	{
		nome: "Togekiss",
		numero: 468, // considerando a national dex
		tipo: ["Fada", " Voador"],
		massa: 38.0, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 85,
			atq: 50,
			def: 95,
			atq_esp: 125,
			def_esp: 115,
			vel: 80,
		},
		descricao:
			"Nunca aparece onde há conflito. Seus avistamentos se tornaram raros recentemente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jubileu",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/8f/0468Togekiss.png/375px-0468Togekiss.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Togekiss_(Pok%C3%A9mon)",
	},
	{
		nome: "Yanmega",
		numero: 469, // considerando a national dex
		tipo: ["Inseto", " Voador"],
		massa: 51.5, // em kg
		altura: 1.9, // em metros
		estatistica: {
			ps: 86,
			atq: 76,
			def: 86,
			atq_esp: 116,
			def_esp: 56,
			vel: 96,
		},
		descricao:
			"Ao bater suas asas, cria ondas de choque que causam ferimentos internos críticos aos inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Libélula Ogro",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/7/79/0469Yanmega.png/375px-0469Yanmega.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Yanmega_(Pok%C3%A9mon)",
	},
	{
		nome: "Leafeon",
		numero: 470, // considerando a national dex
		tipo: ["Planta"],
		massa: 25.5, // em kg
		altura: 1.0, // em metros
		estatistica: {
			ps: 65,
			atq: 110,
			def: 130,
			atq_esp: 60,
			def_esp: 65,
			vel: 95,
		},
		descricao:
			"Assim como uma planta, usa fotossíntese. Como resultado, está sempre envolta em ar limpo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Verdejante",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/80/0470Leafeon.png/375px-0470Leafeon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Leafeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Glaceon",
		numero: 471, // considerando a national dex
		tipo: ["Gelo"],
		massa: 25.9, // em kg
		altura: 0.8, // em metros
		estatistica: {
			ps: 65,
			atq: 60,
			def: 110,
			atq_esp: 130,
			def_esp: 95,
			vel: 65,
		},
		descricao:
			"Como técnica protetiva, consegue congelar completamente seu pelo, fazendo com que seus pelos fiquem eriçados como agulhas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Neve Fresca",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/91/0471Glaceon.png/375px-0471Glaceon.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Glaceon_(Pok%C3%A9mon)",
	},
	{
		nome: "Gliscor",
		numero: 472, // considerando a national dex
		tipo: ["Terra", " Voador"],
		massa: 42.5, // em kg
		altura: 2.0, // em metros
		estatistica: {
			ps: 75,
			atq: 95,
			def: 125,
			atq_esp: 45,
			def_esp: 75,
			vel: 95,
		},
		descricao:
			"Observa presa enquanto está de cabeça para baixo em galhos. Quando a chance se apresenta, ataca!.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escorpião com Presas",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/94/0472Gliscor.png/375px-0472Gliscor.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gliscor_(Pok%C3%A9mon)",
	},
	{
		nome: "Mamoswine",
		numero: 473, // considerando a national dex
		tipo: ["Gelo", " Terra"],
		massa: 291.0, // em kg
		altura: 2.5, // em metros
		estatistica: {
			ps: 110,
			atq: 130,
			def: 80,
			atq_esp: 70,
			def_esp: 60,
			vel: 80,
		},
		descricao:
			"Suas presas impressionantes são feitas de gelo. A população diminuiu quando o clima esquentou após a era glacial.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Presa Gêmea",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0473Mamoswine.png/375px-0473Mamoswine.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mamoswine_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon-Z",
		numero: 474, // considerando a national dex
		tipo: ["Normal"],
		massa: 34.0, // em kg
		altura: 0.9, // em metros
		estatistica: {
			ps: 85,
			atq: 80,
			def: 70,
			atq_esp: 135,
			def_esp: 75,
			vel: 90,
		},
		descricao:
			"Software adicional foi instalado para torna-lo um Pokémon melhor. No entanto, começou a agir de forma estranha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/61/0474Porygon-Z.png/375px-0474Porygon-Z.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon-Z_(Pok%C3%A9mon)",
	},
	{
		nome: "Gallade",
		numero: 475, // considerando a national dex
		tipo: ["Psíquico", " Lutador"],
		massa: 52.0, // em kg
		altura: 1.6, // em metros
		estatistica: {
			ps: 68,
			atq: 125,
			def: 65,
			atq_esp: 65,
			def_esp: 115,
			vel: 80,
		},
		descricao:
			"Um mestre da cortesia e da esgrima, luta usando espadas extensíveis nos cotovelos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lâmina",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0475Gallade.png/375px-0475Gallade.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Gallade_(Pok%C3%A9mon)",
	},
	{
		nome: "Probopass",
		numero: 476, // considerando a national dex
		tipo: ["Rocha", " Metal"],
		massa: 340.0, // em kg
		altura: 1.4, // em metros
		estatistica: {
			ps: 60,
			atq: 55,
			def: 145,
			atq_esp: 75,
			def_esp: 150,
			vel: 40,
		},
		descricao:
			"Exala magnetismo forte de todo lugar. Controla três pequenas unidades chamadas 'Mini-Narizes'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bússola",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0476Probopass.png/375px-0476Probopass.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Probopass_(Pok%C3%A9mon)",
	},
	{
		nome: "Dusknoir",
		numero: 477, // considerando a national dex
		tipo: ["Fantasma"],
		massa: 106.6, // em kg
		altura: 2.2, // em metros
		estatistica: {
			ps: 45,
			atq: 100,
			def: 135,
			atq_esp: 65,
			def_esp: 135,
			vel: 45,
		},
		descricao:
			"A antena em sua cabeça captura ondas de rádio do mundo dos espíritos que lhe ordena levar pessoas até lá.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Agarrador",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0476Probopass.png/375px-0476Probopass.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dusknoir_(Pok%C3%A9mon)",
	},
	{
		nome: "Froslass",
		numero: 478, // considerando a national dex
		tipo: ["Gelo", " Fantasma"],
		massa: 26.6, // em kg
		altura: 1.3, // em metros
		estatistica: {
			ps: 70,
			atq: 80,
			def: 70,
			atq_esp: 80,
			def_esp: 70,
			vel: 110,
		},
		descricao:
			"Congela os inimigos com um sopro gelado de quase -50° Celsius. O que parece ser ser corpo é, na verdade, oco.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Terra Gelada",
		lendario: false,
		obtencao: "Por evolução",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/5/59/0478Froslass.png/375px-0478Froslass.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Froslass_(Pok%C3%A9mon)",
	},
	{
		nome: "Rotom",
		numero: 479, // considerando a national dex
		tipo: ["Gelo", " Fantasma"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 50,
			atq: 50,
			def: 77,
			atq_esp: 95,
			def_esp: 77,
			vel: 91,
		},
		descricao:
			"Seu corpo é composto de plasma. É conhecido por infiltrar dispositivos eletrônicos e causar estragos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Plasma",
		lendario: false,
		obtencao: "Mansão da Floresta",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/3/37/0479Rotom.png/375px-0479Rotom.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Rotom_(Pok%C3%A9mon)",
	},
	{
		nome: "Uxie",
		numero: 480, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 75,
			atq: 75,
			def: 130,
			atq_esp: 75,
			def_esp: 130,
			vel: 95,
		},
		descricao:
			"Rumores dizem que seu surgimento deu aos humanos a inteligência para melhorar sua qualidade de vida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Conhecimento",
		lendario: true,
		obtencao: "Lago da Perspicácia",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/1/18/0480Uxie.png/375px-0480Uxie.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Uxie_(Pok%C3%A9mon)",
	},
	{
		nome: "Mesprit",
		numero: 481, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 80,
			atq: 105,
			def: 105,
			atq_esp: 105,
			def_esp: 105,
			vel: 80,
		},
		descricao:
			"Dorme no fundo de um lago. É dito que seu espírito deixa seu corpo para voar na superfície do lago.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Emoção",
		lendario: true,
		obtencao: "Vagando por Sinnoh",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/2/24/0481Mesprit.png/375px-0481Mesprit.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Mesprit_(Pok%C3%A9mon)",
	},
	{
		nome: "Azelf",
		numero: 482, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 0.3, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 75,
			atq: 125,
			def: 70,
			atq_esp: 125,
			def_esp: 70,
			vel: 115,
		},
		descricao:
			"Quando voou, as pessoas ganharam determinação para fazer as coisas. Foi o nascimento da força de vontade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Força de Vontade",
		lendario: true,
		obtencao: "Lago Valor",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0482Azelf.png/375px-0482Azelf.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Azelf_(Pok%C3%A9mon)",
	},
	{
		nome: "Dialga",
		numero: 483, // considerando a national dex
		tipo: ["Metal", " Dragão"],
		massa: 683.0, // em kg
		altura: 5.4, // em metros
		estatistica: {
			ps: 100,
			atq: 120,
			def: 120,
			atq_esp: 150,
			def_esp: 100,
			vel: 90,
		},
		descricao:
			"Possui o poder de controlar o tempo. Aparece nos mitos da região de Sinnoh como uma deidade antiga.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Temporal",
		lendario: true,
		obtencao: "Pilar da Lança",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/4/43/0483Dialga.png/375px-0483Dialga.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Dialga_(Pok%C3%A9mon)",
	},
	{
		nome: "Palkia",
		numero: 484, // considerando a national dex
		tipo: ["Água", " Dragão"],
		massa: 336.0, // em kg
		altura: 4.2, // em metros
		estatistica: {
			ps: 90,
			atq: 120,
			def: 100,
			atq_esp: 150,
			def_esp: 120,
			vel: 100,
		},
		descricao:
			"Possui a habilidade de distorcer o espaço. É descrito como uma deidade na mitologia da região de Sinnoh.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espacial",
		lendario: true,
		obtencao: "Pilar da Lança",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0484Palkia.png/375px-0484Palkia.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Palkia_(Pok%C3%A9mon)",
	},
	{
		nome: "Heatran",
		numero: 485, // considerando a national dex
		tipo: ["Fogo", " Metal"],
		massa: 430.0, // em kg
		altura: 1.7, // em metros
		estatistica: {
			ps: 91,
			atq: 90,
			def: 106,
			atq_esp: 130,
			def_esp: 106,
			vel: 77,
		},
		descricao:
			"Habita cavernas vulcânicas. Cava com seus pés em forma de cruz para rastejar em tetos e paredes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casco de Lava",
		lendario: true,
		obtencao: "Montanha Dura",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/6/60/0485Heatran.png/375px-0485Heatran.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Heatran_(Pok%C3%A9mon)",
	},
	{
		nome: "Regigigas",
		numero: 486, // considerando a national dex
		tipo: ["Normal"],
		massa: 420.0, // em kg
		altura: 3.7, // em metros
		estatistica: {
			ps: 110,
			atq: 160,
			def: 110,
			atq_esp: 80,
			def_esp: 110,
			vel: 100,
		},
		descricao:
			"Uma lenda antiga afirma que esse Pokémon rebocou continentes com cordas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Colossal",
		lendario: true,
		obtencao: "Templo de Snowpoint",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/e3/0486Regigigas.png/375px-0486Regigigas.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Regigigas_(Pok%C3%A9mon)",
	},
	{
		nome: "Giratina",
		numero: 487, // considerando a national dex
		tipo: ["Fantasma", " Dragão"],
		massa: 750.0, // em kg
		altura: 4.5, // em metros
		estatistica: {
			ps: 150,
			atq: 100,
			def: 120,
			atq_esp: 100,
			def_esp: 120,
			vel: 90,
		},
		descricao:
			"É dito que este Pokémon vive em um mundo reverso ao nosso. Aparece em um cemitério antigo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Renegado",
		lendario: true,
		obtencao: "Mundo Distorcido",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/81/0487Giratina.png/375px-0487Giratina.png",
			"https://archives.bulbagarden.net/media/upload/thumb/6/61/0487Giratina-Origin.png/165px-0487Giratina-Origin.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Giratina_(Pok%C3%A9mon)",
	},
	{
		nome: "Cresselia",
		numero: 488, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 85.6, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 120,
			atq: 70,
			def: 120,
			atq_esp: 75,
			def_esp: 130,
			vel: 85,
		},
		descricao:
			"Partículas brilhantes são liberadas de suas asas como um véu. Dizem que representa a lua crescente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lua",
		lendario: true,
		obtencao: "Vagando por Sinnoh",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0488Cresselia.png/375px-0488Cresselia.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Cresselia_(Pok%C3%A9mon)",
	},
	{
		nome: "Phione",
		numero: 489, // considerando a national dex
		tipo: ["Água"],
		massa: 3.1, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 80,
			atq: 80,
			def: 80,
			atq_esp: 80,
			def_esp: 80,
			vel: 80,
		},
		descricao:
			"Um Pokémon que vive em mares quentes. Infla o saco de flutuação em sua cabeça para flutuar e procurar comida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon À Deriva",
		lendario: true,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0489Phione.png/375px-0489Phione.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Phione_(Pok%C3%A9mon)",
	},
	{
		nome: "Manaphy",
		numero: 490, // considerando a national dex
		tipo: ["Água"],
		massa: 1.4, // em kg
		altura: 0.3, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Nascido no frio chão marítimo, nadará grandes distâncias para retornar ao local de nascimento.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viagem Marítima",
		lendario: true,
		obtencao: "Por ovo",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/08/0490Manaphy.png/375px-0490Manaphy.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Manaphy_(Pok%C3%A9mon)",
	},
	{
		nome: "Darkrai",
		numero: 491, // considerando a national dex
		tipo: ["Noturno"],
		massa: 50.5, // em kg
		altura: 1.5, // em metros
		estatistica: {
			ps: 70,
			atq: 90,
			def: 90,
			atq_esp: 135,
			def_esp: 90,
			vel: 125,
		},
		descricao:
			"Consegue por pessoas a dormir e fazê-las sonhar. É ativo durante noites de lua cheia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Escuridão Total",
		lendario: true,
		obtencao: "Ilha Lua Nova",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/8/88/0491Darkrai.png/375px-0491Darkrai.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Darkrai_(Pok%C3%A9mon)",
	},
	{
		nome: "Shaymin",
		numero: 492, // considerando a national dex
		tipo: ["Planta"],
		massa: 2.1, // em kg
		altura: 0.2, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Vive em canteiros de flores e evita ser detectada, enrolando-se para parecer uma planta com flores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gratidão",
		lendario: true,
		obtencao: "Paraíso das Flores",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/0/09/0492Shaymin.png/375px-0492Shaymin.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Shaymin_(Pok%C3%A9mon)",
	},
	{
		nome: "Arceus",
		numero: 493, // considerando a national dex
		tipo: ["Normal"],
		massa: 320.0, // em kg
		altura: 3.2, // em metros
		estatistica: {
			ps: 120,
			atq: 120,
			def: 120,
			atq_esp: 120,
			def_esp: 120,
			vel: 120,
		},
		descricao:
			"É descrito na mitologia como o Pokémon que moldou o universo com seus 1'000 braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gratidão",
		lendario: true,
		obtencao: "Salão da Origem",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/9/9e/0493Arceus.png/375px-0493Arceus.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)",
	},
	{
		nome: "Victini",
		numero: 494, // considerando a national dex
		tipo: ["Psíquico", " Fogo"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		estatistica: {
			ps: 100,
			atq: 100,
			def: 100,
			atq_esp: 100,
			def_esp: 100,
			vel: 100,
		},
		descricao:
			"Cria um suprimento ilimitado de energia dentro de seu corpo, o qual é compartilhado com àqueles que o tocam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vitória",
		lendario: true,
		obtencao: "Jardim da Liberdade",
		sprite: [
			"https://archives.bulbagarden.net/media/upload/thumb/f/f6/0494Victini.png/375px-0494Victini.png",
		],
		link: "https://bulbapedia.bulbagarden.net/wiki/Victini_(Pok%C3%A9mon)",
	},
];

const nomesDisponiveis = [...new Set(pkmnDisponiveis.map((x) => x.nome))];

const primeiraGeracao = pkmnDisponiveis.filter((x) => x.numero <= 151);
const numerosPrimeira = primeiraGeracao.map((X) => X.numero);

const segundaGeracao = pkmnDisponiveis.filter(
	(x) => x.numero > 151 && x.numero <= 251
);
const numerosSegunda = segundaGeracao.map((X) => X.numero);

const terceiraGeracao = pkmnDisponiveis.filter(
	(x) => x.numero > 251 && x.numero <= 386
);
const numerosTerceira = terceiraGeracao.map((x) => x.numero);

const quartaGeracao = pkmnDisponiveis.filter(
	(x) => x.numero > 386 && x.numero <= 493
);
const numerosQuarta = quartaGeracao.map((x) => x.numero);
