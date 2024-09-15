const primeiraGeracao = [
	{
		nome: "Bulbasaur",
		numero: 1, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 6.9, // em kg
		altura: 0.7, // em metros
		estatistica: [45, 49, 49, 65, 65, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Uma semente estranha foi plantada nas suas costas em seu nascimento. A planta brota e cresce com esse Pokémon.", // considerando a dex da primeira geração que apareceu
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
		tipo: ["Planta", "Veneno"],
		massa: 13.0, // em kg
		altura: 1.0, // em metros
		estatistica: [60, 62, 63, 80, 80, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando o bulbo nas suas costas cresce, aparenta perder a capacidade de ficar em pé nas patas traseiras.", // considerando a dex da primeira geração que apareceu
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
		tipo: ["Planta", "Veneno"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		estatistica: [80, 82, 83, 100, 100, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"A planta floresce quando absorve energia solar. Permanece se movimentando em busca de luz solar.", // considerando a dex da primeira geração que apareceu
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
		estatistica: [39, 52, 43, 60, 50, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Obviamente prefere lugares quentes. Dizem que quando chove, sai vapor da ponta de sua cauda.", // considerando a dex da primeira geração que apareceu
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
		estatistica: [58, 64, 58, 80, 65, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando balança sua cauda em chamas, a temperatura é elevada a níveis insuportavelmente altos.", // considerando a dex da primeira geração que apareceu
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
		estatistica: [78, 84, 78, 109, 85, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Cospe fogo quente o suficiente para derreter rochas. É conhecido por causar incêndio florestal não intencionalmente.", // considerando a dex da primeira geração que apareceu
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
		estatistica: [44, 48, 65, 50, 64, 43], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Após seu nascimento, suas costas incham e endurecem em uma carapaça. Espalha poderosamente uma espuma de sua boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Tartaruguinha",
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
		estatistica: [59, 63, 80, 65, 80, 58], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Comumente esconde-se na água para perseguir presa desavisada. Para um nado rápido, movimenta suas orelhas para manter estabilidade.", // considerando a dex da primeira geração que apareceu
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
		tipo: ["Água"],
		massa: 100.0, // em kg
		altura: 2.0, // em metros
		estatistica: [79, 83, 100, 85, 105, 78], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon brutal com jatos de água pressurizada em seu casco. São usados em investidas de alta velocidade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/375px-0009Blastoise.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Blastoise_(Pok%C3%A9mon)",
	},
	{
		nome: "Caterpie",
		numero: 10, // considerando a national dex
		tipo: ["Inseto"],
		massa: 2.9, // em kg
		altura: 0.3, // em metros
		estatistica: [45, 30, 35, 20, 20, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seus pés curtos são dotados de ventosas que lhe permitem escalar encostas e paredes sem cansar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Minhoca",
		lendario: false,
		local: "Floresta de Viridiana",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/375px-0010Caterpie.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)",
	},
	{
		nome: "Metapod",
		numero: 11, // considerando a national dex
		tipo: ["Inseto"],
		massa: 9.9, // em kg
		altura: 0.7, // em metros
		estatistica: [50, 20, 55, 25, 25, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É vulnerável a ataques enquanto seu casulo está mole, expondo seu corpo fraco e frágil.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		lendario: false,
		local: "Floresta de Viridiana",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/da/0011Metapod.png/375px-0011Metapod.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Metapod_(Pok%C3%A9mon)",
	},
	{
		nome: "Butterfree",
		numero: 12, // considerando a national dex
		tipo: ["Inseto", "Voador"],
		massa: 32.0, // em kg
		altura: 1.1, // em metros
		estatistica: [60, 45, 50, 80, 80, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Em batalha, bate suas asas em alta velocidade para liberar poeira altamente tóxico no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Borboleta",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/375px-0012Butterfree.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Butterfree_(Pok%C3%A9mon)",
	},
	{
		nome: "Weedle",
		numero: 13, // considerando a national dex
		tipo: ["Inseto"],
		massa: 3.2, // em kg
		altura: 0.3, // em metros
		estatistica: [40, 35, 30, 20, 20, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Comumente encontrado em florestas, comendo restos. Possui um ferrão afiado e venenoso em sua cabeça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inseto Peludo",
		lendario: false,
		local: "Floresta de Viridiana",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/375px-0013Weedle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Weedle_(Pok%C3%A9mon)",
	},
	{
		nome: "Kakuna",
		numero: 14, // considerando a national dex
		tipo: ["Inseto"],
		massa: 10.0, // em kg
		altura: 0.6, // em metros
		estatistica: [45, 25, 50, 25, 25, 35], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quase incapaz de se mover, este Pokémon consegue só endurecer seu casulo para proteger a si mesmo de predadores.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Casulo",
		lendario: false,
		local: "Floresta de Viridiana",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/375px-0014Kakuna.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Kakuna_(Pok%C3%A9mon)",
	},
	{
		nome: "Beedrill",
		numero: 15, // considerando a national dex
		tipo: ["Inseto", "Veneno"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		estatistica: [65, 80, 40, 45, 80, 75], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Voa em alta velocidade e ataca usando seus ferrões venenosos localizados nas patas dianteiras e cauda.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Abelha Venenosa",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/375px-0015Beedrill.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Beedrill_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgey",
		numero: 16, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 1.8, // em kg
		altura: 0.3, // em metros
		estatistica: [40, 45, 40, 35, 35, 56], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Comum ser visto em florestas e bosques. Bate as asas próximo ao chão para levantar poeira ofuscante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		lendario: false,
		local: "Rota 1, além de outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0c/0016Pidgey.png/375px-0016Pidgey.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgey_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgeotto",
		numero: 17, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		estatistica: [63, 60, 55, 50, 50, 71], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Muito protetor de sua extensa área territorial, este Pokémon irá bicar ferozmente qualquer intruso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro",
		lendario: false,
		local: "Rotas 14, 15 e 21",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/375px-0017Pidgeotto.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgeotto_(Pok%C3%A9mon)",
	},
	{
		nome: "Pidgeot",
		numero: 18, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 39.5, // em kg
		altura: 1.5, // em metros
		estatistica: [83, 80, 75, 70, 70, 91], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando caça, desliza na superfície da água em alta velocidade para pegar presas desavisadas, como Magikarp.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/375px-0018Pidgeot.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Pidgeot_(Pok%C3%A9mon)",
	},
	{
		nome: "Rattata",
		numero: 19, // considerando a national dex
		tipo: ["Normal"],
		massa: 3.5, // em kg
		altura: 0.3, // em metros
		estatistica: [30, 56, 35, 25, 35, 72], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Morde qualquer coisa quando ataca. Pequeno e muito rápido, é comum ser visto em vários lugares.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		local: "Rota 1 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/375px-0019Rattata.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Rattata_(Pok%C3%A9mon)",
	},
	{
		nome: "Raticate",
		numero: 20, // considerando a national dex
		tipo: ["Normal"],
		massa: 18.5, // em kg
		altura: 0.7, // em metros
		estatistica: [55, 81, 60, 50, 70, 97], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usa seus bigodes para manter o equilíbrio. Aparentemente fica mais lento quando são cortados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		local: "Rota 16 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/375px-0020Raticate.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Raticate_(Pok%C3%A9mon)",
	},
	{
		nome: "Spearow",
		numero: 21, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 2.0, // em kg
		altura: 0.3, // em metros
		estatistica: [40, 60, 30, 31, 31, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Come insetos em áreas gramadas. Tem que bater suas curtas asas em alta velocidade para se manter no ar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Passarinho",
		lendario: false,
		local: "Rota 3 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/375px-0021Spearow.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Spearow_(Pok%C3%A9mon)",
	},
	{
		nome: "Fearow",
		numero: 22, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 38.0, // em kg
		altura: 1.2, // em metros
		estatistica: [65, 90, 65, 61, 61, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Com suas imensas e magnificas asas, consegue permanecer no ar sem pousar para descansar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bico",
		lendario: false,
		local: "Rotas 17, 18 e 23",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/375px-0022Fearow.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Fearow_(Pok%C3%A9mon)",
	},
	{
		nome: "Ekans",
		numero: 23, // considerando a national dex
		tipo: ["Veneno"],
		massa: 6.9, // em kg
		altura: 2.0, // em metros
		estatistica: [35, 60, 44, 40, 54, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Move-se de maneira silenciosa e furtiva. Come ovos de pássaros, como Pidgey e Spearow.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente",
		lendario: false,
		local: "Rota 3 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/375px-0023Ekans.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)",
	},
	{
		nome: "Arbok",
		numero: 24, // considerando a national dex
		tipo: ["Veneno"],
		massa: 65.0, // em kg
		altura: 3.5, // em metros
		estatistica: [60, 85, 69, 65, 79, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Rumores dizem que as marcas de sua barriga mudam de área para área.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cobra",
		lendario: false,
		local: "Rotas 23 e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/51/0024Arbok.png/375px-0024Arbok.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Arbok_(Pok%C3%A9mon)",
	},
	{
		nome: "Pikachu",
		numero: 25, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 6.0, // em kg
		altura: 0.4, // em metros
		estatistica: [35, 55, 30, 50, 40, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando vários Pokémon dessa espécie se unem, sua eletricidade poderia aumentar e causar tempestades elétricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		local: "Floresta de Viridiana e Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/375px-0025Pikachu.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
	},
	{
		nome: "Raichu",
		numero: 26, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.0, // em kg
		altura: 0.8, // em metros
		estatistica: [60, 90, 55, 90, 80, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Sua longa cauda serve como um fio-terra que o protege de sua própria potência elétrica.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		local: "Caverna de Cerulean e Usina Elétrica Abadona",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/375px-0026Raichu.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Raichu_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandshrew",
		numero: 27, // considerando a national dex
		tipo: ["Terra"],
		massa: 12.0, // em kg
		altura: 0.6, // em metros
		estatistica: [50, 75, 85, 20, 30, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Escava profundamente na terra em lugares áridos e distantes de água. Só sai para caçar comida.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		local: "Rota 4 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e9/0027Sandshrew.png/375px-0027Sandshrew.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandshrew_(Pok%C3%A9mon)",
	},
	{
		nome: "Sandslash",
		numero: 28, // considerando a national dex
		tipo: ["Terra"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		estatistica: [75, 100, 110, 45, 55, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Enrola-se em uma bola espinhosa quando se sente ameaçado. Pode rolar para atacar ou escapar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato",
		lendario: false,
		local: "Rota 23 e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a4/0028Sandslash.png/375px-0028Sandslash.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Sandslash_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoran♀",
		numero: 29, // considerando a national dex
		tipo: ["Veneno"],
		massa: 7.0, // em kg
		altura: 0.4, // em metros
		estatistica: [55, 47, 52, 40, 40, 41], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Apesar de pequenas, seus espinhos venenosos tornam este Pokémon perigoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		local: "Rota 22 e Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b2/0029Nidoran.png/375px-0029Nidoran.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoran%E2%99%80_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidorina",
		numero: 30, // considerando a national dex
		tipo: ["Veneno"],
		massa: 20.0, // em kg
		altura: 0.8, // em metros
		estatistica: [70, 62, 67, 55, 55, 56], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"O chifre da fêmea desenvolve devagar. Prefere ataques físicos como mordida e patadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/ea/0030Nidorina.png/375px-0030Nidorina.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidorina_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoqueen",
		numero: 31, // considerando a national dex
		tipo: ["Veneno", "Terra"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		estatistica: [90, 82, 87, 75, 85, 76], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Suas duras escamas lhe dão uma forte proteção. Usa seu grande volume para executar ataques poderosos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/9d/0031Nidoqueen.png/375px-0031Nidoqueen.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoqueen_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoran♂",
		numero: 32, // considerando a national dex
		tipo: ["Veneno"],
		massa: 9.0, // em kg
		altura: 0.5, // em metros
		estatistica: [46, 57, 40, 40, 40, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Enrijece suas orelhas para sentir perigo. Quanto maior seus chifres, mais poderoso é seu veneno secretado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		local: "Rota 22 e Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/8c/0032Nidoran.png/375px-0032Nidoran.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoran%E2%99%82_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidorino",
		numero: 33, // considerando a national dex
		tipo: ["Veneno"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		estatistica: [61, 72, 57, 55, 55, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon agressivo que é rápido para atacar. O chifre em sua cabeça secreta um poderoso veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espinho Venenoso",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/1e/0033Nidorino.png/375px-0033Nidorino.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidorino_(Pok%C3%A9mon)",
	},
	{
		nome: "Nidoking",
		numero: 34, // considerando a national dex
		tipo: ["Veneno", "Terra"],
		massa: 62.0, // em kg
		altura: 1.4, // em metros
		estatistica: [81, 92, 77, 85, 75, 85], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usa sua poderosa cauda para esmagar, imobilizar, e então quebrar os ossos de sua presa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0034Nidoking.png/375px-0034Nidoking.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Nidoking_(Pok%C3%A9mon)",
	},
	{
		nome: "Clefairy",
		numero: 35, // considerando a national dex
		tipo: ["Fada"],
		massa: 7.5, // em kg
		altura: 0.6, // em metros
		estatistica: [70, 45, 48, 60, 65, 35], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu apelo mágico e fofo possui muitos admiradores. É raro e encontrado somente em certas áreas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		lendario: false,
		local: "Monte Lua",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0035Clefairy.png/375px-0035Clefairy.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Clefairy_(Pok%C3%A9mon)",
	},
	{
		nome: "Clefable",
		numero: 36, // considerando a national dex
		tipo: ["Fada"],
		massa: 40.0, // em kg
		altura: 1.3, // em metros
		estatistica: [96, 70, 73, 85, 90, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon Fada tímido que é raramente visto. Corre e se esconde no momento que sente uma pessoa por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fada",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a4/0036Clefable.png/375px-0036Clefable.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Clefable_(Pok%C3%A9mon)",
	},
	{
		nome: "Vulpix",
		numero: 37, // considerando a national dex
		tipo: ["Fogo"],
		massa: 9.9, // em kg
		altura: 0.6, // em metros
		estatistica: [38, 41, 40, 50, 65, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"No momento do nascimento, só possui uma cauda. A cauda se divide a partir da ponta a medida que envelhece.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		lendario: false,
		local: "Rotas 7 e 8, e a Mansão Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/06/0037Vulpix.png/375px-0037Vulpix.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Vulpix_(Pok%C3%A9mon)",
	},
	{
		nome: "Ninetales",
		numero: 38, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.9, // em kg
		altura: 1.1, // em metros
		estatistica: [73, 76, 75, 81, 100, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Bastante inteligente e vingativo. Agarrar uma de suas várias caldas poderia resultar um uma maldição de 1'000 anos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raposa",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3e/0038Ninetales.png/375px-0038Ninetales.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Ninetales_(Pok%C3%A9mon)",
	},
	{
		nome: "Jigglypuff",
		numero: 39, // considerando a national dex
		tipo: ["Normal", "Fada"],
		massa: 5.5, // em kg
		altura: 0.5, // em metros
		estatistica: [115, 45, 20, 45, 25, 20], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando seus grandes olhos se iluminam, canta uma melodia misteriosamente suave que embala seus inimigos para dormir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		local: "Rota 3",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3a/0039Jigglypuff.png/375px-0039Jigglypuff.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Jigglypuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Wigglytuff",
		numero: 40, // considerando a national dex
		tipo: ["Normal", "Fada"],
		massa: 12.0, // em kg
		altura: 1.0, // em metros
		estatistica: [140, 70, 45, 75, 50, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu corpo é macio e emborrachado. Quando atiçado, suga ar e infla-se a um tamanho enorme.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Balão",
		lendario: false,
		local: "Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e2/0040Wigglytuff.png/375px-0040Wigglytuff.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Wigglytuff_(Pok%C3%A9mon)",
	},
	{
		nome: "Zubat",
		numero: 41, // considerando a national dex
		tipo: ["Veneno", "Voador"],
		massa: 7.5, // em kg
		altura: 0.8, // em metros
		estatistica: [40, 45, 35, 30, 40, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Forma colônias em lugares escuros. Usa ondas ultrassônicas para identificar e se aproximar de alvos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		lendario: false,
		local: "Monte Lua, Túnel de Rocha, Ilhas Espuma e Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0041Zubat.png/375px-0041Zubat.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Zubat_(Pok%C3%A9mon)",
	},
	{
		nome: "Golbat",
		numero: 42, // considerando a national dex
		tipo: ["Veneno", "Voador"],
		massa: 55.0, // em kg
		altura: 1.6, // em metros
		estatistica: [75, 80, 70, 65, 75, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Uma vez que ataca, não para de drenar a energia de suas vítimas mesmo que fique pesado demais para voar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Morcego",
		lendario: false,
		local: "Ilhas Espuma, Estrada da Vitória e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/76/0042Golbat.png/375px-0042Golbat.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Golbat_(Pok%C3%A9mon)",
	},
	{
		nome: "Oddish",
		numero: 43, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 5.4, // em kg
		altura: 0.5, // em metros
		estatistica: [45, 50, 55, 75, 65, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Durante o dia, mantém seu rosto enterrado no chão. Durante a noite, vagueia semeando suas sementes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva Daninha",
		lendario: false,
		local: "Rota 5 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0043Oddish.png/375px-0043Oddish.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Oddish_(Pok%C3%A9mon)",
	},
	{
		nome: "Gloom",
		numero: 44, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 8.6, // em kg
		altura: 0.8, // em metros
		estatistica: [60, 65, 70, 85, 75, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"O fluido que escorre de sua boca não é baba. É um néctar usado para atrair suas presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva Daninha",
		lendario: false,
		local: "Rota 12 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e0/0044Gloom.png/375px-0044Gloom.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Gloom_(Pok%C3%A9mon)",
	},
	{
		nome: "Vileplume",
		numero: 45, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 18.6, // em kg
		altura: 1.2, // em metros
		estatistica: [75, 80, 85, 100, 90, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quanto maior suas pétalas, mais tóxico é seu polem. Sua cabeça grande é pesada e difícil de segurar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0045Vileplume.png/375px-0045Vileplume.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Vileplume_(Pok%C3%A9mon)",
	},
	{
		nome: "Paras",
		numero: 46, // considerando a national dex
		tipo: ["Inseto", "Planta"],
		massa: 5.4, // em kg
		altura: 0.3, // em metros
		estatistica: [35, 70, 55, 45, 55, 25], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Escava para se alimentar de raízes. Os cogumelos em suas costas crescem extraindo nutrientes do hospedeiro inseto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		lendario: false,
		local: "Monte Lua e Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/8a/0046Paras.png/375px-0046Paras.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Paras_(Pok%C3%A9mon)",
	},
	{
		nome: "Parasect",
		numero: 47, // considerando a national dex
		tipo: ["Inseto", "Planta"],
		massa: 29.5, // em kg
		altura: 1.0, // em metros
		estatistica: [60, 95, 80, 60, 80, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um par parasita-hospedeiro no qual o cogumelo parasita assumiu o controle do inseto hospedeiro. Prefere lugares úmidos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cogumelo",
		lendario: false,
		local: "Zona Safari e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/7b/0047Parasect.png/375px-0047Parasect.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Parasect_(Pok%C3%A9mon)",
	},
	{
		nome: "Venonat",
		numero: 48, // considerando a national dex
		tipo: ["Inseto", "Veneno"],
		massa: 30.0, // em kg
		altura: 1.0, // em metros
		estatistica: [60, 55, 50, 40, 55, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Vive nas sombras de árvores altas onde come insetos. É atraído por luzes durante a noite.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Inseto",
		lendario: false,
		local: "Zona Safari e outras zonas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0e/0049Venomoth.png/375px-0049Venomoth.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Venomoth",
		numero: 49, // considerando a national dex
		tipo: ["Inseto", "Veneno"],
		massa: 12.5, // em kg
		altura: 1.5, // em metros
		estatistica: [70, 65, 60, 90, 75, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"As escamas semelhantes a poeira que cobrem suas asas são codificadas por cor para indicar os tipos de veneno que possui.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mariposa Venenosa",
		lendario: false,
		local: "Zona Safari, Estrada da Vitória e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0e/0049Venomoth.png/375px-0049Venomoth.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Venomoth_(Pok%C3%A9mon)",
	},
	{
		nome: "Diglett",
		numero: 50, // considerando a national dex
		tipo: ["Terra"],
		massa: 0.8, // em kg
		altura: 0.2, // em metros
		estatistica: [10, 55, 25, 35, 45, 95], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Vive em torno de um metro abaixo da superfície onde se alimente de raízes. Aparece ocasionalmente acima da superfície.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		lendario: false,
		local: "Túnel dos Diglett",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a6/0050Diglett.png/375px-0050Diglett.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Diglett_(Pok%C3%A9mon)",
	},
	{
		nome: "Dugtrio",
		numero: 51, // considerando a national dex
		tipo: ["Terra"],
		massa: 33.3, // em kg
		altura: 0.7, // em metros
		estatistica: [35, 80, 50, 50, 70, 120], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao: "Desencadeia grandes terremotos ao cavar 100km no subsolo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Toupeira",
		lendario: false,
		local: "Túnel dos Diglett",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/88/0051Dugtrio.png/375px-0051Dugtrio.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Dugtrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Meowth",
		numero: 52, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.2, // em kg
		altura: 0.4, // em metros
		estatistica: [40, 45, 35, 40, 40, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Gosta de objetos redondos. Vaga pelas ruas todas as noites procurando por trocados.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato Arranhador",
		lendario: false,
		local: "Rota 5 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d6/0052Meowth.png/375px-0052Meowth.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Meowth_(Pok%C3%A9mon)",
	},
	{
		nome: "Persian",
		numero: 53, // considerando a national dex
		tipo: ["Normal"],
		massa: 32.0, // em kg
		altura: 1.0, // em metros
		estatistica: [35, 80, 50, 50, 70, 120], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Apesar de seu pelo possuir muitos admiradores, é difícil de criar como animal de estimação por sua maldade inconstante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gato de Luxo",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b0/0053Persian.png/375px-0053Persian.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Persian_(Pok%C3%A9mon)",
	},
	{
		nome: "Psyduck",
		numero: 54, // considerando a national dex
		tipo: ["Água"],
		massa: 19.6, // em kg
		altura: 0.8, // em metros
		estatistica: [50, 52, 48, 65, 50, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Enquanto engana seus oponentes com seu olhar distraído, este astuto Pokémon usa seus poderes psicocinéticos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato",
		lendario: false,
		local: "Ilhas Espuma, rotas 24 e 25, Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0054Psyduck.png/375px-0054Psyduck.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Psyduck_(Pok%C3%A9mon)",
	},
	{
		nome: "Golduck",
		numero: 55, // considerando a national dex
		tipo: ["Água"],
		massa: 76.6, // em kg
		altura: 1.7, // em metros
		estatistica: [80, 82, 78, 95, 80, 85], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Frequentemente é visto nadando elegantemente às marges de lagos. Muitas vezes confundido com a criatura japonesa, Kappa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato",
		lendario: false,
		local: "Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/ed/0055Golduck.png/375px-0055Golduck.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Golduck_(Pok%C3%A9mon)",
	},
	{
		nome: "Mankey",
		numero: 56, // considerando a national dex
		tipo: ["Lutador"],
		massa: 28.0, // em kg
		altura: 0.5, // em metros
		estatistica: [40, 80, 35, 35, 45, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Extremamente rápido para se irritar. Pode ser dócil em um momento e logo depois se debater.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Porco",
		lendario: false,
		local: "Rota 5 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/fa/0056Mankey.png/375px-0056Mankey.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mankey_(Pok%C3%A9mon)",
	},
	{
		nome: "Primeape",
		numero: 57, // considerando a national dex
		tipo: ["Lutador"],
		massa: 32.0, // em kg
		altura: 1.0, // em metros
		estatistica: [65, 105, 60, 60, 70, 95], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Só deixar de estar raivoso quando mais ninguém está por perto. Não deixará de perseguir sua presa até que seja pega.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Macaco Porco",
		lendario: false,
		local: "Rota 23",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/2c/0057Primeape.png/375px-0057Primeape.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Primeape_(Pok%C3%A9mon)",
	},
	{
		nome: "Growlithe",
		numero: 58, // considerando a national dex
		tipo: ["Fogo"],
		massa: 18.0, // em kg
		altura: 0.7, // em metros
		estatistica: [55, 70, 45, 70, 50, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Muito protetor de seu território. Late e morde para repelir invasores de seu espaço.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Filhote",
		lendario: false,
		local: "Rotas 7 e 8, Mansão Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/6a/0058Growlithe.png/375px-0058Growlithe.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Growlithe_(Pok%C3%A9mon)",
	},
	{
		nome: "Arcanine",
		numero: 59, // considerando a national dex
		tipo: ["Fogo"],
		massa: 155.0, // em kg
		altura: 1.9, // em metros
		estatistica: [90, 110, 80, 100, 80, 95], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon que tem sido admirado por sua beleza. Corre com agilidade como se tivesse asas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lendário",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/42/0059Arcanine.png/375px-0059Arcanine.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Arcanine_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwag",
		numero: 60, // considerando a national dex
		tipo: ["Água"],
		massa: 12.4, // em kg
		altura: 0.6, // em metros
		estatistica: [40, 50, 40, 40, 40, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Suas pernas recém crescidas o previnem de correr. Aparenta preferir nadar a tentar ficar de pé.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		lendario: false,
		local: "Rota 6 e outras rotas, Zona Safari, Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e4/0060Poliwag.png/375px-0060Poliwag.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwag_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwhirl",
		numero: 61, // considerando a national dex
		tipo: ["Água"],
		massa: 20.0, // em kg
		altura: 1.0, // em metros
		estatistica: [65, 65, 65, 50, 50, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Capaz de viver dentro e fora d'água. Quando está fora da água, transpira para manter seu corpo viscoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		lendario: false,
		local: "Rota 10 (pesca)",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/fd/0061Poliwhirl.png/375px-0061Poliwhirl.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwhirl_(Pok%C3%A9mon)",
	},
	{
		nome: "Poliwrath",
		numero: 62, // considerando a national dex
		tipo: ["Água", "Lutador"],
		massa: 54.0, // em kg
		altura: 1.3, // em metros
		estatistica: [90, 85, 95, 70, 90, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um hábil nadador dos nado crawl e nado peito. Facilmente ultrapassa os melhores nadadores humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Girino",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/80/0062Poliwrath.png/375px-0062Poliwrath.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Poliwrath_(Pok%C3%A9mon)",
	},
	{
		nome: "Abra",
		numero: 63, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		estatistica: [25, 20, 15, 105, 55, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usando sua habilidade de ler mentes, identifica o perigo iminente e teleporta para um local seguro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		lendario: false,
		local: "Rotas 24 e 25",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bd/0063Abra.png/375px-0063Abra.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Abra_(Pok%C3%A9mon)",
	},
	{
		nome: "Kadabra",
		numero: 64, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 56.5, // em kg
		altura: 1.3, // em metros
		estatistica: [40, 35, 30, 120, 70, 105], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Emite ondas alfas especiais de seu corpo que induzem dores de cabeça apenas por estar por perto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		lendario: false,
		local: "Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/af/0064Kadabra.png/375px-0064Kadabra.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Kadabra_(Pok%C3%A9mon)",
	},
	{
		nome: "Alakazam",
		numero: 65, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 48.0, // em kg
		altura: 1.5, // em metros
		estatistica: [55, 50, 45, 135, 85, 120], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu cérebro consegue superar um super-computador. É dito que seu QI é de 5'000.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Psi",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0065Alakazam.png/375px-0065Alakazam.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)",
	},
	{
		nome: "Machop",
		numero: 66, // considerando a national dex
		tipo: ["Lutador"],
		massa: 19.5, // em kg
		altura: 0.8, // em metros
		estatistica: [70, 80, 50, 35, 35, 35], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Adora de construir seu músculos. Treina em todos os estilos de artes marciais para se tornar mais forte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoder",
		lendario: false,
		local: "Túnel de Rocha e Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/02/0066Machop.png/375px-0066Machop.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Machop_(Pok%C3%A9mon)",
	},
	{
		nome: "Machoke",
		numero: 67, // considerando a national dex
		tipo: ["Lutador"],
		massa: 70.5, // em kg
		altura: 1.5, // em metros
		estatistica: [80, 100, 70, 50, 60, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu corpo musculoso é tão poderoso, deve usar um cinto regulador de energia para.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoderoso",
		lendario: false,
		local: "Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0067Machoke.png/375px-0067Machoke.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Machoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Machamp",
		numero: 68, // considerando a national dex
		tipo: ["Lutador"],
		massa: 130.0, // em kg
		altura: 1.6, // em metros
		estatistica: [90, 130, 80, 65, 85, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usando seus pesados músculos, lança poderosos socos que conseguem mandar a vítima para o horizonte.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Superpoderoso",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0068Machamp.png/375px-0068Machamp.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Machamp_(Pok%C3%A9mon)",
	},
	{
		nome: "Bellsprout",
		numero: 69, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 4.0, // em kg
		altura: 0.7, // em metros
		estatistica: [50, 75, 35, 70, 30, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon carnívoro que prende e come insetos. Usa seus pés raiz para sugar a umidade necessária.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Flor",
		lendario: false,
		local: "Rota 5 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/66/0069Bellsprout.png/375px-0069Bellsprout.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Bellsprout_(Pok%C3%A9mon)",
	},
	{
		nome: "Weepinbell",
		numero: 70, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 6.4, // em kg
		altura: 1.0, // em metros
		estatistica: [65, 90, 50, 85, 45, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Expele Pó de Veneno para imobilizar seu adversário e então finaliza com um spray de Ácido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mata-Moscas",
		lendario: false,
		local: "Rota 12 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c1/0070Weepinbell.png/375px-0070Weepinbell.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Weepinbell_(Pok%C3%A9mon)",
	},
	{
		nome: "Victreebel",
		numero: 71, // considerando a national dex
		tipo: ["Planta", "Veneno"],
		massa: 15.5, // em kg
		altura: 1.7, // em metros
		estatistica: [80, 105, 65, 100, 60, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É dito viver em grandes colônias nas profundezas das selvas, embora ninguém tenha retornando de lá.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mata-Moscas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e9/0071Victreebel.png/375px-0071Victreebel.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Victreebel_(Pok%C3%A9mon)",
	},
	{
		nome: "Tentacool",
		numero: 72, // considerando a national dex
		tipo: ["Água", "Veneno"],
		massa: 45.5, // em kg
		altura: 0.9, // em metros
		estatistica: [40, 40, 35, 50, 100, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Deriva em mares rasos. Pescadores que os fisgam por acidente são frequentemente punidos por seu Ácido.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Água-Viva",
		lendario: false,
		local: "Rotas 19, 20 e 21",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/6e/0072Tentacool.png/375px-0072Tentacool.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Tentacool_(Pok%C3%A9mon)",
	},
	{
		nome: "Tentacruel",
		numero: 73, // considerando a national dex
		tipo: ["Água", "Veneno"],
		massa: 55.5, // em kg
		altura: 1.6, // em metros
		estatistica: [80, 70, 65, 80, 120, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Os tentáculos são normalmente mantidos curtos. Nas caçadas, os tentáculos são estendidos para enredar e imobilizar presas", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Água-Viva",
		lendario: false,
		local: "Rotas 19, 20 e 21",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/cb/0073Tentacruel.png/375px-0073Tentacruel.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Tentacruel_(Pok%C3%A9mon)",
	},
	{
		nome: "Geodude",
		numero: 74, // considerando a national dex
		tipo: ["Rocha", "Terra"],
		massa: 20.0, // em kg
		altura: 0.4, // em metros
		estatistica: [40, 80, 100, 30, 30, 20], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Encontrado em campos e montanhas. Pessoas, por confundi-los com pedras, pisam ou tropeçam neles.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		lendario: false,
		local: "Monte Lua, Túnel de Rocha e Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0074Geodude.png/375px-0074Geodude.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Geodude_(Pok%C3%A9mon)",
	},
	{
		nome: "Graveler",
		numero: 75, // considerando a national dex
		tipo: ["Rocha", "Terra"],
		massa: 105.0, // em kg
		altura: 1.0, // em metros
		estatistica: [55, 95, 115, 45, 45, 35], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Rola para se mover. Rola sobre qualquer obstáculo sem diminuir a velocidade ou muda sua direção", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rocha",
		lendario: false,
		local: "Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d4/0075Graveler.png/375px-0075Graveler.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Graveler_(Pok%C3%A9mon)",
	},
	{
		nome: "Golem",
		numero: 76, // considerando a national dex
		tipo: ["Rocha", "Terra"],
		massa: 300.0, // em kg
		altura: 1.4, // em metros
		estatistica: [80, 110, 130, 55, 65, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu corpo semelhante a uma pedra é extremamente duro. Consegue facilmente aguentar explosões de dinamite sem dano algum.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Megaton",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0076Golem.png/375px-0076Golem.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Golem_(Pok%C3%A9mon)",
	},
	{
		nome: "Ponyta",
		numero: 77, // considerando a national dex
		tipo: ["Fogo"],
		massa: 30.0, // em kg
		altura: 1.0, // em metros
		estatistica: [50, 85, 55, 65, 65, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seus cascos são dez vezes mais duros que diamantes. Consegue atropelar qualquer coisa completamente plana em pouco tempo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Fogo",
		lendario: false,
		local: "Rota 17 ou Mansão Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0077Ponyta.png/375px-0077Ponyta.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Ponyta_(Pok%C3%A9mon)",
	},
	{
		nome: "Rapidash",
		numero: 78, // considerando a national dex
		tipo: ["Fogo"],
		massa: 95.0, // em kg
		altura: 1.7, // em metros
		estatistica: [65, 100, 70, 80, 80, 105], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Muito competitivo, este Pokémon persegue qualquer coisa que se mova rápido na esperança de competir.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cavalo de Fogo",
		lendario: false,
		local: "Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a9/0078Rapidash.png/375px-0078Rapidash.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowpoke",
		numero: 79, // considerando a national dex
		tipo: ["Água", "Psíquico"],
		massa: 36.0, // em kg
		altura: 1.2, // em metros
		estatistica: [90, 65, 65, 40, 40, 15], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Incrivelmente lento. Demora cinco segundos para sentir dor quando atacado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atordoado",
		lendario: false,
		local: "Ilhas Espuma e Rota 10",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/19/0079Slowpoke.png/375px-0079Slowpoke.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowpoke_(Pok%C3%A9mon)",
	},
	{
		nome: "Slowbro",
		numero: 80, // considerando a national dex
		tipo: ["Água", "Psíquico"],
		massa: 78.5, // em kg
		altura: 1.6, // em metros
		estatistica: [95, 75, 110, 100, 80, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É dito que o Shellder que está preso à sua cauda se alimenta dos restos que sobraram do hospedeiro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo Eremita",
		lendario: false,
		local: "Rota 23, Caverna de Cerulean e Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a3/0080Slowbro.png/375px-0080Slowbro.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Slowbro_(Pok%C3%A9mon)",
	},
	{
		nome: "Magnemite",
		numero: 81, // considerando a national dex
		tipo: ["Elétrico", "Metal"],
		massa: 6.0, // em kg
		altura: 0.3, // em metros
		estatistica: [25, 35, 70, 95, 55, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usa anti-gravidade para permanecer suspenso. Aparece sem qualquer aviso e usa Onda-Trovão e movimentos similares.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Magnético",
		lendario: false,
		local: "Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a2/0081Magnemite.png/375px-0081Magnemite.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Magnemite_(Pok%C3%A9mon)",
	},
	{
		nome: "Magneton",
		numero: 82, // considerando a national dex
		tipo: ["Elétrico", "Metal"],
		massa: 60.0, // em kg
		altura: 1.0, // em metros
		estatistica: [50, 60, 95, 120, 70, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Gera estranhas ondas de rádio. Aumenta a temperatura em dois graus Célsius dentro de um quilômetro.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Magnético",
		lendario: false,
		local: "Usina Elétrica Abandonada e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d9/0082Magneton.png/375px-0082Magneton.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Magneton_(Pok%C3%A9mon)",
	},
	{
		nome: "Farfetch'd",
		numero: 83, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 15.0, // em kg
		altura: 0.8, // em metros
		estatistica: [52, 65, 55, 58, 62, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"O Raminho de cebolinha que segura é sua arma. É usado como uma espada de metal.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pato Selvagem",
		lendario: false,
		local: "Rotas 12 e 13",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/99/0083Farfetch%27d.png/375px-0083Farfetch%27d.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Farfetch%27d_(Pok%C3%A9mon)",
	},
	{
		nome: "Doduo",
		numero: 84, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 39.2, // em kg
		altura: 1.4, // em metros
		estatistica: [35, 85, 45, 35, 35, 75], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um pássaro que compensa por seu vôo ruim com sua alta velocidade de patas. Deixa pegadas gigantes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Gêmeo",
		lendario: false,
		local: "Zona Safari, rotas 16, 17 e 18",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b9/0084Doduo.png/375px-0084Doduo.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Doduo_(Pok%C3%A9mon)",
	},
	{
		nome: "Dodrio",
		numero: 85, // considerando a national dex
		tipo: ["Normal", "Voador"],
		massa: 85.2, // em kg
		altura: 1.8, // em metros
		estatistica: [60, 110, 70, 60, 60, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usa seus três cérebros para executar planos complexos. Enquanto duas cabeças dormem, uma cabeça permanece acordada.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pássaro Triplo",
		lendario: false,
		local: "Caverna de Cerulean e rota 17",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0085Dodrio.png/375px-0085Dodrio.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Dodrio_(Pok%C3%A9mon)",
	},
	{
		nome: "Seel",
		numero: 86, // considerando a national dex
		tipo: ["Água"],
		massa: 90.0, // em kg
		altura: 1.1, // em metros
		estatistica: [65, 45, 55, 45, 70, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"O chifre protuberante em sua cabeça é muito duro. É usado para bater em gelo espesso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão Marinho",
		lendario: false,
		local: "Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0086Seel.png/375px-0086Seel.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Seel_(Pok%C3%A9mon)",
	},
	{
		nome: "Dewgong",
		numero: 87, // considerando a national dex
		tipo: ["Água", "Gelo"],
		massa: 120.0, // em kg
		altura: 1.7, // em metros
		estatistica: [90, 70, 80, 70, 95, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Guarda calor em seu corpo. Nada a 8 nós constantes, mesmo em águas intensamente frias.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Leão Marinho",
		lendario: false,
		local: "Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/2b/0087Dewgong.png/375px-0087Dewgong.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Dewgong_(Pok%C3%A9mon)",
	},
	{
		nome: "Grimer",
		numero: 88, // considerando a national dex
		tipo: ["Veneno"],
		massa: 30.0, // em kg
		altura: 0.9, // em metros
		estatistica: [80, 80, 50, 40, 50, 25], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Aparece em áreas imundas. Prospera consumindo lodo poluído que é bombeado para fora das fábricas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		lendario: false,
		local: "Mansão Pokémon e Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0088Grimer.png/375px-0088Grimer.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Grimer_(Pok%C3%A9mon)",
	},
	{
		nome: "Muk",
		numero: 89, // considerando a national dex
		tipo: ["Veneno"],
		massa: 30.0, // em kg
		altura: 1.2, // em metros
		estatistica: [105, 105, 75, 65, 100, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Coberto por uma camada grossa de lama imunda e vil. É tão tóxico, mesmo suas pegadas contém veneno.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lodo",
		lendario: false,
		local: "Mansão Pokémon e Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/41/0089Muk.png/375px-0089Muk.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Muk_(Pok%C3%A9mon)",
	},
	{
		nome: "Shellder",
		numero: 90, // considerando a national dex
		tipo: ["Água"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		estatistica: [30, 65, 100, 45, 25, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Sua carapaça dura repele qualquer tipo de ataque. É vulnerável somente quando abre sua carapaça.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		lendario: false,
		local: "Ilhas Espuma, rota 6 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3e/0090Shellder.png/375px-0090Shellder.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Shellder_(Pok%C3%A9mon)",
	},
	{
		nome: "Cloyster",
		numero: 91, // considerando a national dex
		tipo: ["Água", "Gelo"],
		massa: 132.5, // em kg
		altura: 1.5, // em metros
		estatistica: [50, 95, 180, 85, 45, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando atacado, lança seus chifres em voleios rápidos. Seu interior nunca foi visto.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bivalve",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0091Cloyster.png/375px-0091Cloyster.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Cloyster_(Pok%C3%A9mon)",
	},
	{
		nome: "Gastly",
		numero: 92, // considerando a national dex
		tipo: ["Fantasma", "Veneno"],
		massa: 0.1, // em kg
		altura: 1.3, // em metros
		estatistica: [30, 35, 30, 100, 35, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quase invisível, este Pokémon gasoso envolve o alvo e o põe para dormir sem que perceba.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás",
		lendario: false,
		local: "Torre Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c2/0092Gastly.png/375px-0092Gastly.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Gastly_(Pok%C3%A9mon)",
	},
	{
		nome: "Haunter",
		numero: 93, // considerando a national dex
		tipo: ["Fantasma", "Veneno"],
		massa: 0.1, // em kg
		altura: 1.6, // em metros
		estatistica: [45, 50, 45, 115, 55, 95], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Por causa de sua habilidade de atravessar parede, é dito ser de outra dimensão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás",
		lendario: false,
		local: "Torre Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d1/0093Haunter.png/375px-0093Haunter.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Haunter_(Pok%C3%A9mon)",
	},
	{
		nome: "Gengar",
		numero: 94, // considerando a national dex
		tipo: ["Fantasma", "Veneno"],
		massa: 40.5, // em kg
		altura: 1.5, // em metros
		estatistica: [60, 65, 60, 130, 75, 110], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Sob a lua cheia, este Pokémon imita as sombras das pessoas e ri do medo delas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Sombra",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/47/0094Gengar.png/375px-0094Gengar.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Gengar_(Pok%C3%A9mon)",
	},
	{
		nome: "Onix",
		numero: 95, // considerando a national dex
		tipo: ["Rocha", "Terra"],
		massa: 210.0, // em kg
		altura: 8.8, // em metros
		estatistica: [35, 45, 160, 30, 45, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"A medida que cresce, as porções de rocha de seu corpo endurecem para se tornarem semelhante a diamante, mas de cor preta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Serpente de Pedra",
		lendario: false,
		local: "Túnel de Rocha e Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b7/0095Onix.png/375px-0095Onix.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Onix_(Pok%C3%A9mon)",
	},
	{
		nome: "Drowzee",
		numero: 96, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 32.4, // em kg
		altura: 1.0, // em metros
		estatistica: [60, 48, 45, 43, 90, 42], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Põe os adversários para dormir para comer seus sonhos. Ocasionalmente fica doente por comer sonhos ruins.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipnose",
		lendario: false,
		local: "Rota 11",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e4/0096Drowzee.png/375px-0096Drowzee.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Drowzee_(Pok%C3%A9mon)",
	},
	{
		nome: "Hypno",
		numero: 97, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 75.6, // em kg
		altura: 1.6, // em metros
		estatistica: [85, 73, 70, 73, 115, 67], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando trava os olhos em um oponente, usa uma mistura de movimentos psíquicos, como Hipnose e Confusão.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Hipnose",
		lendario: false,
		local: "Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0097Hypno.png/375px-0097Hypno.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Hypno_(Pok%C3%A9mon)",
	},
	{
		nome: "Krabby",
		numero: 98, // considerando a national dex
		tipo: ["Água"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		estatistica: [30, 105, 90, 25, 25, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Suas pinças não são só poderosas armas, são usadas para equilíbrio quando está andando de lado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Caranguejo de Rio",
		lendario: false,
		local: "Zona Safari, rota 6 e outras rotas",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/ed/0098Krabby.png/375px-0098Krabby.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Krabby_(Pok%C3%A9mon)",
	},
	{
		nome: "Kingler",
		numero: 99, // considerando a national dex
		tipo: ["Água"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		estatistica: [55, 130, 115, 50, 50, 75], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"A pinça maior possui 10'000 cv em poder de esmagamento. Contudo, seu tamanho o torna difícil de usar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinça",
		lendario: false,
		local: "Rota 23 e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0099Kingler.png/375px-0099Kingler.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Kingler_(Pok%C3%A9mon)",
	},
	{
		nome: "Voltorb",
		numero: 100, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 10.4, // em kg
		altura: 0.5, // em metros
		estatistica: [40, 30, 50, 55, 55, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Normalmente encontrado em usinas elétricas. Facilmente confundido com uma Poké Bola, já eletrocutaram muitas pessoas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola",
		lendario: false,
		local: "Rota 10 e Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/55/0100Voltorb.png/375px-0100Voltorb.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Voltorb_(Pok%C3%A9mon)",
	},
	{
		nome: "Electrode",
		numero: 101, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 60.0, // em kg
		altura: 1.3, // em metros
		estatistica: [55, 130, 115, 50, 50, 75], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Armazena energia elétrica sob pressão muito alta. Geralmente explode com pouca ou nenhuma provocação.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bola",
		lendario: false,
		local: "Usina Elétrica Abandonada e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/db/0101Electrode.png/375px-0101Electrode.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Electrode_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggcute",
		numero: 102, // considerando a national dex
		tipo: ["Planta", "Psíquico"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		estatistica: [60, 40, 80, 60, 45, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Comumente confundido por ovos. Quando perturbados, rapidamente se reúnem e atacam em bando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ovo",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/60/0102Exeggcute.png/375px-0102Exeggcute.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggcute_(Pok%C3%A9mon)",
	},
	{
		nome: "Exeggutor",
		numero: 103, // considerando a national dex
		tipo: ["Planta", "Psíquico"],
		massa: 120.0, // em kg
		altura: 2.0, // em metros
		estatistica: [95, 95, 85, 125, 65, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seus gritos são muito barulhentos. Isso ocorre porque cada uma das três cabeças pensa no que quiser.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Coco",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0103Exeggutor.png/375px-0103Exeggutor.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Exeggutor_(Pok%C3%A9mon)",
	},
	{
		nome: "Cubone",
		numero: 104, // considerando a national dex
		tipo: ["Terra"],
		massa: 6.5, // em kg
		altura: 0.4, // em metros
		estatistica: [50, 50, 95, 40, 50, 35], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Por nunca remover seu capacete, ninguém nunca viu o real rosto deste Pokémon.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Solitário",
		lendario: false,
		local: "Torre Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/19/0104Cubone.png/375px-0104Cubone.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Cubone_(Pok%C3%A9mon)",
	},
	{
		nome: "Marowak",
		numero: 105, // considerando a national dex
		tipo: ["Terra"],
		massa: 45.0, // em kg
		altura: 1.0, // em metros
		estatistica: [60, 80, 110, 50, 80, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"O osso que segura é sua arma principal. Lança o osso com destreza como um boomerang para nocautear os alvos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Acumulador de Ossos",
		lendario: false,
		local: "Zona Safari, Estrada da Vitória e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a1/0105Marowak.png/375px-0105Marowak.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Marowak_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmonlee",
		numero: 106, // considerando a national dex
		tipo: ["Lutador"],
		massa: 49.8, // em kg
		altura: 1.5, // em metros
		estatistica: [50, 120, 53, 35, 110, 87], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando está com pressa, o comprimento de suas pernas aumenta progressivamente. Corre suavemente com passadas longas e inclinadas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chutador",
		lendario: false,
		local: "Dojo de tipo Lutador",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/00/0106Hitmonlee.png/375px-0106Hitmonlee.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmonlee_(Pok%C3%A9mon)",
	},
	{
		nome: "Hitmonchan",
		numero: 107, // considerando a national dex
		tipo: ["Lutador"],
		massa: 50.2, // em kg
		altura: 1.4, // em metros
		estatistica: [50, 105, 79, 35, 110, 76], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Embora aparente fazer nada, dispara socos em voleios rápidos impossíveis de ver.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Socador",
		lendario: false,
		local: "Dojo de tipo Lutador",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0107Hitmonchan.png/375px-0107Hitmonchan.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Hitmonchan_(Pok%C3%A9mon)",
	},
	{
		nome: "Lickitung",
		numero: 108, // considerando a national dex
		tipo: ["Normal"],
		massa: 65.5, // em kg
		altura: 1.2, // em metros
		estatistica: [90, 55, 75, 60, 75, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Sua língua pode ser estendida como a de um camaleão. Deixa uma sensação de formigamento quando lambe inimigos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lambedor",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f2/0108Lickitung.png/375px-0108Lickitung.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Lickitung_(Pok%C3%A9mon)",
	},
	{
		nome: "Koffing",
		numero: 109, // considerando a national dex
		tipo: ["Veneno"],
		massa: 1.0, // em kg
		altura: 0.6, // em metros
		estatistica: [40, 65, 95, 60, 45, 35], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Por armazenar vários tipos de gases tóxicos em seu corpo, é propenso a explodir sem aviso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		lendario: false,
		local: "Mansão Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0109Koffing.png/375px-0109Koffing.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)",
	},
	{
		nome: "Weezing",
		numero: 110, // considerando a national dex
		tipo: ["Veneno"],
		massa: 9.5, // em kg
		altura: 1.2, // em metros
		estatistica: [65, 90, 120, 85, 70, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Vive e cresce absorvendo poeira, germes e gases venenosos contidos em resíduos tóxicos e lixo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Gás Venenoso",
		lendario: false,
		local: "Mansão Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/16/0109Koffing.png/375px-0109Koffing.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Koffing_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhyhorn",
		numero: 111, // considerando a national dex
		tipo: ["Terra", "Rocha"],
		massa: 115.0, // em kg
		altura: 1.0, // em metros
		estatistica: [80, 85, 95, 30, 30, 25], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seus ossos maciços são 1'000 vezes mais duros que os ossos de humanos. Consegue facilmente mandar um trailer voando.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espigão",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/7f/0111Rhyhorn.png/375px-0111Rhyhorn.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhyhorn_(Pok%C3%A9mon)",
	},
	{
		nome: "Rhydon",
		numero: 112, // considerando a national dex
		tipo: ["Terra", "Rocha"],
		massa: 120.0, // em kg
		altura: 1.9, // em metros
		estatistica: [105, 130, 120, 45, 45, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Protegido por um couro semelhante a uma armadura, é capaz de viver em lava derretida de 2'000° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Perfurador",
		lendario: false,
		local: "Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/79/0112Rhydon.png/375px-0112Rhydon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Rhydon_(Pok%C3%A9mon)",
	},
	{
		nome: "Chansey",
		numero: 113, // considerando a national dex
		tipo: ["Normal"],
		massa: 34.6, // em kg
		altura: 1.1, // em metros
		estatistica: [250, 5, 5, 35, 105, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon raro e indescritível que dizem trazer felicidade àqueles que conseguem obtê-la.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ovo",
		lendario: false,
		local: "Zona Safari e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0113Chansey.png/375px-0113Chansey.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Chansey_(Pok%C3%A9mon)",
	},
	{
		nome: "Tangela",
		numero: 114, // considerando a national dex
		tipo: ["Planta"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		estatistica: [65, 55, 115, 100, 40, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Todo seu corpo é coberto por trepadeiras largas que são semelhantes a algas marinhas. Suas vinhas tremem enquanto caminha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Trepadeira",
		lendario: false,
		local: "Rota 21",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0114Tangela.png/375px-0114Tangela.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Tangela_(Pok%C3%A9mon)",
	},
	{
		nome: "Kangaskhan",
		numero: 115, // considerando a national dex
		tipo: ["Normal"],
		massa: 80.0, // em kg
		altura: 2.2, // em metros
		estatistica: [105, 95, 80, 40, 80, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"A criança raramente sai da bolsa protetora da mãe antes dos três anos de idade.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Materno",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e5/0115Kangaskhan.png/375px-0115Kangaskhan.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Kangaskhan_(Pok%C3%A9mon)",
	},
	{
		nome: "Horsea",
		numero: 116, // considerando a national dex
		tipo: ["Água"],
		massa: 8.0, // em kg
		altura: 0.4, // em metros
		estatistica: [30, 40, 70, 70, 25, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Conhecido por abater insetos voadores com jatos de tintas precisos da superfície da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		local: "Ilhas Espuma; rotas 19, 20 e 21",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/14/0116Horsea.png/375px-0116Horsea.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Horsea_(Pok%C3%A9mon)",
	},
	{
		nome: "Seadra",
		numero: 117, // considerando a national dex
		tipo: ["Água"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		estatistica: [55, 65, 95, 95, 45, 85], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Capaz de nadar para trás, batendo rapidamente a cauda robusta e suas barbatanas peitorais em forma de asa.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		local: "Ilhas Espuma, Rota 23 e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/22/0117Seadra.png/375px-0117Seadra.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Seadra_(Pok%C3%A9mon)",
	},
	{
		nome: "Goldeen",
		numero: 118, // considerando a national dex
		tipo: ["Água"],
		massa: 15.0, // em kg
		altura: 0.6, // em metros
		estatistica: [45, 67, 60, 35, 50, 63], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Sua barbatana caudal ondula como um elegante vestido de baile, dando-lhe o apelido de 'Rainha da Água'.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Dourado",
		lendario: false,
		local:
			"Rota 6 e outras rotas; Zona Safari; Ilhas Espuma; Planalto Índigo e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/b6/0118Goldeen.png/375px-0118Goldeen.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Goldeen_(Pok%C3%A9mon)",
	},
	{
		nome: "Seaking",
		numero: 119, // considerando a national dex
		tipo: ["Água"],
		massa: 39.0, // em kg
		altura: 1.3, // em metros
		estatistica: [80, 92, 65, 65, 80, 68], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Na temporada de desova de outono, podem ser vistos nadando majestosamente em rios e riachos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe Dourado",
		lendario: false,
		local: "Rota 23 e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/76/0119Seaking.png/375px-0119Seaking.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Seaking_(Pok%C3%A9mon)",
	},
	{
		nome: "Staryu",
		numero: 120, // considerando a national dex
		tipo: ["Água"],
		massa: 34.5, // em kg
		altura: 0.8, // em metros
		estatistica: [30, 45, 55, 70, 55, 85], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon enigmático que regenera sem esforço qualquer apêndice que perca em batalha.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Estrelada",
		lendario: false,
		local: "Ilhas Espuma; Rotas 19, 20 e 21",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/38/0120Staryu.png/375px-0120Staryu.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Staryu_(Pok%C3%A9mon)",
	},
	{
		nome: "Starmie",
		numero: 121, // considerando a national dex
		tipo: ["Água", "Psíquico"],
		massa: 80.0, // em kg
		altura: 1.1, // em metros
		estatistica: [60, 75, 85, 100, 85, 115], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu núcleo central brilha com as sete cores do arco-íris. Algumas pessoas valorizam o núcleo como uma gema.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Misterioso",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/aa/0121Starmie.png/375px-0121Starmie.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Starmie_(Pok%C3%A9mon)",
	},
	{
		nome: "Mr. Mime",
		numero: 122, // considerando a national dex
		tipo: ["Psíquico", "Fada"],
		massa: 54.5, // em kg
		altura: 1.3, // em metros
		estatistica: [40, 45, 65, 100, 120, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Caso seja interrompido enquanto faz sua mímica, dá um tapa em quem interrompeu com suas mão abertas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Barreira",
		lendario: false,
		local: "Por troca na rota 2",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/fb/0122Mr._Mime.png/375px-0122Mr._Mime.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mr._Mime_(Pok%C3%A9mon)",
	},
	{
		nome: "Scyther",
		numero: 123, // considerando a national dex
		tipo: ["Inseto", "Voador"],
		massa: 56.0, // em kg
		altura: 1.5, // em metros
		estatistica: [70, 110, 80, 55, 80, 105], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Com agilidade e velocidade semelhantes a de um ninja, consegue criar a ilusão de que há mais de um.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mantídeo",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/81/0123Scyther.png/375px-0123Scyther.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Scyther_(Pok%C3%A9mon)",
	},
	{
		nome: "Jynx",
		numero: 124, // considerando a national dex
		tipo: ["Gelo", "Psíquico"],
		massa: 40.6, // em kg
		altura: 1.4, // em metros
		estatistica: [40, 45, 65, 100, 120, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Mexe os quadris de maneira sedutora enquanto caminha. Pode fazer as pessoas dançarem em uníssono.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Forma Humana",
		lendario: false,
		local: "Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/07/0124Jynx.png/375px-0124Jynx.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Jynx_(Pok%C3%A9mon)",
	},
	{
		nome: "Electabuzz",
		numero: 125, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 30.0, // em kg
		altura: 1.1, // em metros
		estatistica: [65, 83, 57, 95, 85, 105], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Normalmente encontrado próximo a usinas de energia, podem se afastar e causar grandes apagões nas cidades.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		lendario: false,
		local: "Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0125Electabuzz.png/375px-0125Electabuzz.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Electabuzz_(Pok%C3%A9mon)",
	},
	{
		nome: "Magmar",
		numero: 126, // considerando a national dex
		tipo: ["Fogo"],
		massa: 44.5, // em kg
		altura: 1.3, // em metros
		estatistica: [65, 95, 57, 100, 85, 93], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu corpo sempre queima com um brilho laranja que o permite se esconder em meio a chamas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Cospe-fogo",
		lendario: false,
		local: "Mansão Pokémon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/72/0126Magmar.png/375px-0126Magmar.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Magmar_(Pok%C3%A9mon)",
	},
	{
		nome: "Pinsir",
		numero: 127, // considerando a national dex
		tipo: ["Inseto"],
		massa: 55.0, // em kg
		altura: 1.5, // em metros
		estatistica: [65, 125, 100, 55, 70, 85], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Caso falhe em esmagar sua vítima com suas pinças, balança e joga a vítima com força.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lucanídeo",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/a9/0127Pinsir.png/375px-0127Pinsir.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Pinsir_(Pok%C3%A9mon)",
	},
	{
		nome: "Tauros",
		numero: 128, // considerando a national dex
		tipo: ["Normal"],
		massa: 88.4, // em kg
		altura: 1.4, // em metros
		estatistica: [75, 100, 95, 40, 70, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando mira em um inimigo, investe furiosamente enquanto chicoteia seu corpo com suas  longas caudas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Touro Selvagem",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ad/0128Tauros.png/375px-0128Tauros.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Tauros_(Pok%C3%A9mon)",
	},
	{
		nome: "Magikarp",
		numero: 129, // considerando a national dex
		tipo: ["Água"],
		massa: 10.0, // em kg
		altura: 0.9, // em metros
		estatistica: [20, 10, 55, 15, 20, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Em um passado distante, de alguma maneira já foi mais forte que seus descendentes terrivelmente fracos que existem hoje.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe",
		lendario: false,
		local:
			"Rotas 4, 6 e outras rotas; Zona Safari; Ilhas Espuma; Caverna de Cerulean; Planalto Índigo",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d1/0129Magikarp.png/375px-0129Magikarp.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Magikarp_(Pok%C3%A9mon)",
	},
	{
		nome: "Gyarados",
		numero: 130, // considerando a national dex
		tipo: ["Água", "Voador"],
		massa: 235.0, // em kg
		altura: 6.5, // em metros
		estatistica: [75, 100, 95, 40, 70, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Raramente é visto na natureza. Enorme e cruel, é capaz de destruir cidades inteiras em um ataque de raiva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Atrocidade",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0130Gyarados.png/375px-0130Gyarados.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Gyarados_(Pok%C3%A9mon)",
	},
	{
		nome: "Lapras",
		numero: 131, // considerando a national dex
		tipo: ["Água", "Gelo"],
		massa: 220.0, // em kg
		altura: 2.5, // em metros
		estatistica: [130, 85, 80, 85, 95, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon que tem sido caçado até a quase extinção. Consegue transportar pessoas através de água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Transporte",
		lendario: false,
		local: "Recebido na Companhia Silph",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/99/0131Lapras.png/375px-0131Lapras.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Lapras_(Pok%C3%A9mon)",
	},
	{
		nome: "Ditto",
		numero: 132, // considerando a national dex
		tipo: ["Normal"],
		massa: 4.0, // em kg
		altura: 0.3, // em metros
		estatistica: [48, 48, 48, 48, 48, 48], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Capaz de copiar o código genético do oponente para instantaneamente si transformar em uma duplicada do oponente.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Transformação",
		lendario: false,
		local: "Rotas 13 e outras rotas e Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/25/0132Ditto.png/375px-0132Ditto.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Ditto_(Pok%C3%A9mon)",
	},
	{
		nome: "Eevee",
		numero: 133, // considerando a national dex
		tipo: ["Normal"],
		massa: 6.5, // em kg
		altura: 0.3, // em metros
		estatistica: [55, 55, 50, 45, 65, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu código genético é irregular. Pode sofrer mutação caso seja exposto a radiação de Pedras elementais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Evolução",
		lendario: false,
		local: "Recebido de uma pessoa na Mansão Celadon",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/4c/0133Eevee.png/375px-0133Eevee.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Eevee_(Pok%C3%A9mon)",
	},
	{
		nome: "Vaporeon",
		numero: 134, // considerando a national dex
		tipo: ["Água"],
		massa: 29.0, // em kg
		altura: 1.0, // em metros
		estatistica: [130, 65, 60, 110, 95, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Vive próximo a água. Sua longa cauda é estriada com uma barbatana que muitas vezes confundida com a de uma sereia.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Jato de Bolha",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/6d/0134Vaporeon.png/375px-0134Vaporeon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Vaporeon_(Pok%C3%A9mon)",
	},
	{
		nome: "Jolteon",
		numero: 135, // considerando a national dex
		tipo: ["Elétrico"],
		massa: 24.5, // em kg
		altura: 0.8, // em metros
		estatistica: [65, 65, 60, 110, 95, 130], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Acumula íons negativos na atmosfera para lançar raios de 10'000 volts.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Raios",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e3/0135Jolteon.png/375px-0135Jolteon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Jolteon_(Pok%C3%A9mon)",
	},
	{
		nome: "Flareon",
		numero: 136, // considerando a national dex
		tipo: ["Fogo"],
		massa: 25.0, // em kg
		altura: 0.9, // em metros
		estatistica: [65, 130, 60, 95, 110, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando armazena energia térmica em seu corpo, sua temperatura poderia superar os 900° Celsius.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f1/0136Flareon.png/375px-0136Flareon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Flareon_(Pok%C3%A9mon)",
	},
	{
		nome: "Porygon",
		numero: 137, // considerando a national dex
		tipo: ["Normal"],
		massa: 36.5, // em kg
		altura: 0.8, // em metros
		estatistica: [65, 60, 70, 85, 75, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon que consiste inteiramente de código de programação. Capaz de se mover livremente no espaço cibernético.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Virtual",
		lendario: false,
		local: "Casino Rocket",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/8e/0137Porygon.png/375px-0137Porygon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Porygon_(Pok%C3%A9mon)",
	},
	{
		nome: "Omanyte",
		numero: 138, // considerando a national dex
		tipo: ["Rocha", "Água"],
		massa: 7.5, // em kg
		altura: 0.4, // em metros
		estatistica: [35, 40, 100, 90, 55, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Mesmo há muito extinto, em casos raros, pode ser ressuscitado a partir de fósseis.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espiral",
		lendario: false,
		local: "Revivido a partir do Fóssil Espiral na Ilha Cinnabar",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/e6/0138Omanyte.png/375px-0138Omanyte.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Omanyte_(Pok%C3%A9mon)",
	},
	{
		nome: "Omastar",
		numero: 139, // considerando a national dex
		tipo: ["Rocha", "Água"],
		massa: 35.0, // em kg
		altura: 1.0, // em metros
		estatistica: [70, 60, 120, 115, 70, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon pré-histórico que morreu quando sua pesada carapaça tornou impossível de caçar suas presas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Espiral",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/66/0139Omastar.png/375px-0139Omastar.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Omastar_(Pok%C3%A9mon)",
	},
	{
		nome: "Kabuto",
		numero: 140, // considerando a national dex
		tipo: ["Rocha", "Água"],
		massa: 11.5, // em kg
		altura: 0.5, // em metros
		estatistica: [30, 80, 90, 55, 45, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon que foi ressuscitado a partir de um fóssil encontrado no que já foi o fundo do oceano, eras atrás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		local: "Revivido a partir do Fóssil Domo na Ilha Cinnabar",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d2/0140Kabuto.png/375px-0140Kabuto.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Kabuto_(Pok%C3%A9mon)",
	},
	{
		nome: "Kabutops",
		numero: 141, // considerando a national dex
		tipo: ["Rocha", "Água"],
		massa: 40.5, // em kg
		altura: 1.3, // em metros
		estatistica: [60, 115, 105, 65, 70, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Seu formato peculiar é perfeito para nadar. Fatia sua presa com suas garras e drena os fluidos corporais.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Marisco",
		lendario: false,
		local: "Por Evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/4/41/0141Kabutops.png/375px-0141Kabutops.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Kabutops_(Pok%C3%A9mon)",
	},
	{
		nome: "Aerodactyl",
		numero: 142, // considerando a national dex
		tipo: ["Rocha", "Voador"],
		massa: 59.0, // em kg
		altura: 1.8, // em metros
		estatistica: [80, 105, 65, 60, 75, 130], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon pré-histórico feroz que morreu em tempos antigos. Foi ressuscitado usando DNA pego de âmbar.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Fóssil",
		lendario: false,
		local: "Revivido a partir do Âmbar Antigo na Ilha Cinnabar",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/2c/0142Aerodactyl.png/375px-0142Aerodactyl.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Aerodactyl_(Pok%C3%A9mon)",
	},
	{
		nome: "Snorlax",
		numero: 143, // considerando a national dex
		tipo: ["Normal"],
		massa: 460.0, // em kg
		altura: 2.1, // em metros
		estatistica: [160, 110, 65, 65, 110, 30], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Muito preguiçoso. Só come e dorme. À medida que seu corpo redondo aumenta, se torna cada vez mais preguiçoso.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dorminhoco",
		lendario: false,
		local: "Rotas 12 e 16",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0143Snorlax.png/375px-0143Snorlax.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)",
	},
	{
		nome: "Articuno",
		numero: 144, // considerando a national dex
		tipo: ["Gelo", "Voador"],
		massa: 55.4, // em kg
		altura: 1.7, // em metros
		estatistica: [90, 85, 100, 95, 125, 85], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon pássaro lendário que supostamente aparece a pessoas condenadas que estão perdidas em montanhas geladas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Congelante",
		lendario: true,
		local: "Ilhas Espuma",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/d/d0/0144Articuno.png/375px-0144Articuno.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Articuno_(Pok%C3%A9mon)",
	},
	{
		nome: "Zapdos",
		numero: 145, // considerando a national dex
		tipo: ["Elétrico", "Voador"],
		massa: 52.6, // em kg
		altura: 1.6, // em metros
		estatistica: [90, 90, 85, 125, 90, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon pássaro lendário que supostamente surge das nuvens enquanto solta raios enormes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Elétrico",
		lendario: true,
		local: "Usina Elétrica Abandonada",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c6/0145Zapdos.png/375px-0145Zapdos.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Zapdos_(Pok%C3%A9mon)",
	},
	{
		nome: "Moltres",
		numero: 146, // considerando a national dex
		tipo: ["Fogo", "Voador"],
		massa: 60.0, // em kg
		altura: 2.0, // em metros
		estatistica: [90, 100, 90, 125, 85, 90], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Conhecido como o pássaro lendário de fogo. Cada bater de suas asas cria um deslumbrante clarão de chamas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: true,
		local: "Estrada da Vitória",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/21/0146Moltres.png/375px-0146Moltres.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Moltres_(Pok%C3%A9mon)",
	},
	{
		nome: "Dratini",
		numero: 147, // considerando a national dex
		tipo: ["Dragão"],
		massa: 3.3, // em kg
		altura: 1.8, // em metros
		estatistica: [41, 64, 45, 50, 50, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Há muito considerado um Pokémon mítico até que, recentemente, foi descoberta uma colônia vivendo debaixo da água.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ae/0147Dratini.png/375px-0147Dratini.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Dratini_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragonair",
		numero: 148, // considerando a national dex
		tipo: ["Dragão"],
		massa: 16.5, // em kg
		altura: 4.0, // em metros
		estatistica: [61, 84, 65, 70, 70, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon místico que exala uma aura gentil. Possui a habilidade de mudar condições climáticas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		local: "Zona Safari",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/0d/0148Dragonair.png/375px-0148Dragonair.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)",
	},
	{
		nome: "Dragonite",
		numero: 149, // considerando a national dex
		tipo: ["Dragão", "Voador"],
		massa: 210.0, // em kg
		altura: 2.2, // em metros
		estatistica: [91, 134, 95, 100, 100, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon marinho raramente visto. É dito que sua inteligência é comparada a de seres humanos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Dragão",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/1c/0149Dragonite.png/375px-0149Dragonite.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Dragonite_(Pok%C3%A9mon)",
	},
	{
		nome: "Mewtwo",
		numero: 150, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 122.0, // em kg
		altura: 2.0, // em metros
		estatistica: [106, 110, 90, 154, 90, 130], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Foi criado por um cientista depois anos de experimentos de engenharia genética.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Genético",
		lendario: true,
		local: "Caverna de Cerulean",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/89/0150Mewtwo.png/375px-0150Mewtwo.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mewtwo_(Pok%C3%A9mon)",
	},
	{
		nome: "Mew",
		numero: 151, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 4.0, // em kg
		altura: 0.4, // em metros
		estatistica: [100, 100, 100, 100, 100, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É tão raro que ainda é dito ser uma miragem por vários especialistas. Somente algumas pessoas o viram ao redor do mundo.", // considerando a dex da primeira geração que apareceu
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
		massa: 6.4, // em kg
		altura: 0.9, // em metros
		estatistica: [45, 49, 65, 49, 65, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Adora aproveitar a luz do sol. Usa a folha na cabeça para procurar lugares quentes.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		local: "Laboratório Prof. Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bc/0152Chikorita.png/375px-0152Chikorita.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Chikorita_(Pok%C3%A9mon)",
	},
	{
		nome: "Bayleef",
		numero: 153, // considerando a national dex
		tipo: ["Planta"],
		massa: 15.8, // em kg
		altura: 1.2, // em metros
		estatistica: [60, 62, 80, 63, 80, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um aroma picante emana de seu pescoço. O aroma age como um estimulante para restaurar saúde.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folha",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/85/0153Bayleef.png/375px-0153Bayleef.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Bayleef_(Pok%C3%A9mon)",
	},
	{
		nome: "Meganium",
		numero: 154, // considerando a national dex
		tipo: ["Planta"],
		massa: 100.5, // em kg
		altura: 1.8, // em metros
		estatistica: [80, 82, 100, 83, 100, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"O aroma que surge de suas pétalas contém uma substância que acalma sentimentos agressivos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Erva",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/8b/0154Meganium.png/375px-0154Meganium.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Meganium_(Pok%C3%A9mon)",
	},
	{
		nome: "Cyndaquil",
		numero: 155, // considerando a national dex
		tipo: ["Fogo"],
		massa: 7.9, // em kg
		altura: 0.5, // em metros
		estatistica: [39, 52, 43, 60, 50, 65], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Geralmente fica curvado. Quando está com raiva ou surpreso, atira chamas de suas costas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Rato de Fogo",
		lendario: false,
		local: "Laboratório Prof. Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/97/0155Cyndaquil.png/375px-0155Cyndaquil.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Cyndaquil_(Pok%C3%A9mon)",
	},
	{
		nome: "Quilava",
		numero: 156, // considerando a national dex
		tipo: ["Fogo"],
		massa: 19.0, // em kg
		altura: 0.9, // em metros
		estatistica: [58, 64, 58, 80, 65, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É coberto totalmente por pelo não inflamável. Consegue aguentar qualquer tipo de ataque de fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/3f/0156Quilava.png/375px-0156Quilava.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Quilava_(Pok%C3%A9mon)",
	},
	{
		nome: "Typhlosion",
		numero: 157, // considerando a national dex
		tipo: ["Fogo"],
		massa: 79.5, // em kg
		altura: 1.7, // em metros
		estatistica: [78, 84, 78, 109, 85, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando sua raiva atinge seu ápice, fica tão quente que qualquer coisa que toque imediatamente pega fogo.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Vulcão",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/1/13/0157Typhlosion.png/375px-0157Typhlosion.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Typhlosion_(Pok%C3%A9mon)",
	},
	{
		nome: "Totodile",
		numero: 158, // considerando a national dex
		tipo: ["Água"],
		massa: 9.5, // em kg
		altura: 0.6, // em metros
		estatistica: [50, 65, 64, 44, 48, 43], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"As mandíbulas bem desenvolvidas são poderosas e capazes de esmagar qualquer coisa. Mesmo seu treinador deve ter cuidado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula Grande",
		lendario: false,
		local: "Laboratório Prof. Elm",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f7/0158Totodile.png/375px-0158Totodile.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Totodile_(Pok%C3%A9mon)",
	},
	{
		nome: "Croconaw",
		numero: 159, // considerando a national dex
		tipo: ["Água"],
		massa: 25.0, // em kg
		altura: 1.1, // em metros
		estatistica: [65, 80, 80, 59, 63, 58], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando perde uma presa, uma nova cresce em seu lugar. Sempre há 48 presas revestindo na boca.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula Grande",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/0/03/0159Croconaw.png/375px-0159Croconaw.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Croconaw_(Pok%C3%A9mon)",
	},
	{
		nome: "Feraligatr",
		numero: 160, // considerando a national dex
		tipo: ["Água"],
		massa: 88.8, // em kg
		altura: 2.3, // em metros
		estatistica: [85, 105, 100, 79, 83, 78], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Quando morde com as mandíbulas grandes e poderosas, balança sua cabeça e estraçalha sua vítima com selvageria.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Mandíbula Grande",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/29/0160Feraligatr.png/375px-0160Feraligatr.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Feraligatr_(Pok%C3%A9mon)",
	},
	{
		nome: "Celebi",
		numero: 251, // considerando a national dex
		tipo: ["Psíquico", "Grama"],
		massa: 0.6, // em kg
		altura: 5.0, // em metros
		estatistica: [100, 100, 100, 100, 100, 100], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Este Pokémon vaga pelo tempo. A grama e as árvores floresce nas florestas em que apareceu.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Viajante do Tempo",
		lendario: true,
		local: "Somente evento",
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
		estatistica: [40, 45, 35, 65, 55, 70], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Faz seu ninho em uma árvore gigante na floresta. Guarda-o ferozmente contra qualquer coisa que chegue perto de seu território. É dito ser o protetor das árvores das florestas.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/90/0252Treecko.png/375px-0252Treecko.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Treecko_(Pok%C3%A9mon)",
	},
	{
		nome: "Grovyle",
		numero: 253, // considerando a national dex
		tipo: ["Planta"],
		massa: 21.6, // em kg
		altura: 0.9, // em metros
		estatistica: [50, 65, 45, 85, 65, 95], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"As folhas crescendo em seu corpo são convenientes para se camuflar de inimigos na floresta. É um mestre em escalar árvores na floresta.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Lagartixa de Madeira",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/bb/0253Grovyle.png/375px-0253Grovyle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Grovyle_(Pok%C3%A9mon)",
	},
	{
		nome: "Sceptile",
		numero: 254, // considerando a national dex
		tipo: ["Planta"],
		massa: 52.2, // em kg
		altura: 1.7, // em metros
		estatistica: [70, 85, 65, 105, 85, 120], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"As folhas que crescem em seu corpo são muito afiadas. Sendo muito ágil consegue saltar pelos galhos das árvores e saltar em seu oponente por cima ou por trás.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Floresta",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/5c/0254Sceptile.png/375px-0254Sceptile.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Sceptile_(Pok%C3%A9mon)",
	},
	{
		nome: "Torchic",
		numero: 255, // considerando a national dex
		tipo: ["Fogo"],
		massa: 2.5, // em kg
		altura: 0.4, // em metros
		estatistica: [45, 60, 40, 70, 50, 45], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Possui um lugar dentro de seu corpo onde mantém suas chamas.É coberto por uma pelagem fofa de penugem.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pintinho",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/7d/0255Torchic.png/375px-0255Torchic.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Torchic_(Pok%C3%A9mon)",
	},
	{
		nome: "Combusken",
		numero: 256, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 19.5, // em kg
		altura: 0.9, // em metros
		estatistica: [60, 85, 60, 85, 60, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Batalha com as chamas intensamente quentes que expele de seu bico e com chutes excepcionalmente destrutíveis. Seu grito é muito alto e perturbador.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Ave Jovem",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/78/0256Combusken.png/375px-0256Combusken.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Combusken_(Pok%C3%A9mon)",
	},
	{
		nome: "Blaziken",
		numero: 257, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 52.0, // em kg
		altura: 1.9, // em metros
		estatistica: [80, 120, 70, 110, 70, 80], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Em batalha, sopra chamas intensas de seus punhos e ataca os oponentes corajosamente. Quanto mais forte o oponente, mais intensamente as chamas de seu punho queimam.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Labareda",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/c/c0/0257Blaziken.png/375px-0257Blaziken.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Blaziken_(Pok%C3%A9mon)",
	},
	{
		nome: "Mudkip",
		numero: 258, // considerando a national dex
		tipo: ["Água"],
		massa: 7.6, // em kg
		altura: 0.4, // em metros
		estatistica: [50, 70, 50, 50, 50, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"A barbatana em sua cabeça age como um radar altamente sensível. Usando essa barbatana para sentir os movimentos da água e do ar, consegue determinar o que está acontecendo ao seu redor sem usar os olhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		local: "Rota 101",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/2/26/0258Mudkip.png/375px-0258Mudkip.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Mudkip_(Pok%C3%A9mon)",
	},
	{
		nome: "Marshtomp",
		numero: 259, // considerando a national dex
		tipo: ["Água", "Terra"],
		massa: 28.0, // em kg
		altura: 0.7, // em metros
		estatistica: [70, 85, 70, 60, 70, 55], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É muito mais rápido na lama do que nadando. Seus membros inferiores exibem desenvolvimento óbvio, dando a habilidade de andar apenas com as patas traseiras.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/e/eb/0259Marshtomp.png/375px-0259Marshtomp.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Marshtomp_(Pok%C3%A9mon)",
	},
	{
		nome: "Swampert",
		numero: 260, // considerando a national dex
		tipo: ["Água", "Terra"],
		massa: 81.9, // em kg
		altura: 1.5, // em metros
		estatistica: [100, 110, 90, 85, 90, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É tão forte que consegue arrastar facilmente uma rocha pesando mais de uma tonelada. Também possui uma ótima visão, podendo enxergar pela água turva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Peixe de Lama",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/3/34/0260Swampert.png/375px-0260Swampert.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Swampert_(Pok%C3%A9mon)",
	},
	{
		nome: "Deoxys",
		numero: 386, // considerando a national dex
		tipo: ["Psíquico"],
		massa: 60.8, // em kg
		altura: 1.7, // em metros
		estatistica: [50, 150, 50, 150, 50, 150], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Um Pokémon que evoluiu de um vírus extraterrestre exposto a um rio laser.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon DNA",
		lendario: true,
		local: "Somente evento",
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
		estatistica: [55, 68, 64, 45, 55, 31], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Feito de solo, a carapaça nas suas costas endurece quando bebe água. Vive perto de lagos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Folhinha",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/6/68/0387Turtwig.png/375px-0387Turtwig.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Turtwig_(Pok%C3%A9mon)",
	},
	{
		nome: "Grotle",
		numero: 388, // considerando a national dex
		tipo: ["Planta"],
		massa: 97.0, // em kg
		altura: 1.1, // em metros
		estatistica: [75, 89, 85, 55, 65, 36], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Vive próximo a água em florestas. Durante o dia, deixa a floresta para tomar banho de sol em seu casco arborizado.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Bosque",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/f/f8/0388Grotle.png/375px-0388Grotle.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Grotle_(Pok%C3%A9mon)",
	},
	{
		nome: "Torterra",
		numero: 389, // considerando a national dex
		tipo: ["Planta", "Terra"],
		massa: 310.0, // em kg
		altura: 2.2, // em metros
		estatistica: [95, 109, 105, 75, 85, 56], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Ocasionalmente, pequenos Pokémon se reúnem em suas costas para construir seus ninhos.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Continente",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0389Torterra.png/375px-0389Torterra.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Torterra_(Pok%C3%A9mon)",
	},
	{
		nome: "Chimchar",
		numero: 390, // considerando a national dex
		tipo: ["Fogo"],
		massa: 6.2, // em kg
		altura: 0.5, // em metros
		estatistica: [44, 58, 44, 58, 44, 61], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É muito ágil. Antes de dormir, extingue a chama de sua calda para prevenir incêndios.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chimpanzé",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/91/0390Chimchar.png/375px-0390Chimchar.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Chimchar_(Pok%C3%A9mon)",
	},
	{
		nome: "Monferno",
		numero: 391, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 22.0, // em kg
		altura: 0.9, // em metros
		estatistica: [64, 78, 52, 78, 52, 81], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Para se defender, estica o fogo em sua calda para parecer ser maior.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Brincalhão",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/5/52/0391Monferno.png/375px-0391Monferno.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Monferno_(Pok%C3%A9mon)",
	},
	{
		nome: "Infernape",
		numero: 389, // considerando a national dex
		tipo: ["Fogo", "Lutador"],
		massa: 55.0, // em kg
		altura: 1.2, // em metros
		estatistica: [76, 104, 71, 104, 71, 108], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Usa um tipo especial de artes marciais envolvendo todos os seus membros. Seu fogo nunca se extingue.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Chamas",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/8/82/0392Infernape.png/375px-0392Infernape.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Infernape_(Pok%C3%A9mon)",
	},
	{
		nome: "Piplup",
		numero: 393, // considerando a national dex
		tipo: ["Água"],
		massa: 5.2, // em kg
		altura: 0.4, // em metros
		estatistica: [53, 51, 53, 61, 56, 40], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Por ser muito orgulhoso, odeia aceitar comida de pessoas. Sua penugem grossa o protege do frio.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinguim",
		lendario: false,
		local: "Rota 201 ou Lago Verdade, dependendo da versão",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/b/ba/0393Piplup.png/375px-0393Piplup.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Piplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Prinplup",
		numero: 388, // considerando a national dex
		tipo: ["Água"],
		massa: 23.0, // em kg
		altura: 0.8, // em metros
		estatistica: [64, 66, 68, 81, 76, 50], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Vive sozinho, longe de outros. Aparentemente, todos de sua espécie acredita ser o mais importante.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Pinguim",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/a/ac/0394Prinplup.png/375px-0394Prinplup.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Prinplup_(Pok%C3%A9mon)",
	},
	{
		nome: "Empoleon",
		numero: 395, // considerando a national dex
		tipo: ["Água", "Metal"],
		massa: 84.5, // em kg
		altura: 1.7, // em metros
		estatistica: [84, 86, 88, 111, 101, 60], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"Nada tão rápido quanto uma lancha. As bordas de suas asas são afiadas e podem cortar blocos de gelo à deriva.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Imperador",
		lendario: false,
		local: "Por evolução",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/7/7f/0395Empoleon.png/375px-0395Empoleon.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Empoleon_(Pok%C3%A9mon)",
	},
	{
		nome: "Arceus",
		numero: 493, // considerando a national dex
		tipo: ["Normal"],
		massa: 320.0, // em kg
		altura: 3.2, // em metros
		estatistica: [120, 120, 120, 120, 120, 120], // HP, ataque, defesa, ataque esp., defesa esp., veloc.
		descricao:
			"É descrito na mitologia como o Pokémon que moldou o universo com seus 1'000 braços.", // considerando a dex da primeira geração que apareceu
		categoria: "Pokémon Alpha",
		lendario: true,
		local: "Salão da Origem",
		sprite:
			"https://archives.bulbagarden.net/media/upload/thumb/9/9e/0493Arceus.png/375px-0493Arceus.png",
		link: "https://bulbapedia.bulbagarden.net/wiki/Arceus_(Pok%C3%A9mon)",
	},
];

const todasGeracoes = [
	primeiraGeracao,
	segundaGeracao,
	terceiraGeracao,
	quartaGeracao,
];
// console.log(`Todas gerações: ${todasGeracoes}`);

const nomesPrimeira = primeiraGeracao.map((x) => x.nome);
const nomesSegunda = segundaGeracao.map((x) => x.nome);
const nomesTerceira = terceiraGeracao.map((x) => x.nome);
const nomesQuarta = quartaGeracao.map((x) => x.nome);
