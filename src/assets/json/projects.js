import techs from './techs.json'

export default [
	{
		name: 'Heroes-CRUD',
		repo: 'https://github.com/hclaros-dawi/superhero.git',
		description: {
			short: {
				en: 'Web app to manage superheroes: create, edit, search, and delete.',
				es: 'App web para gestionar superhéroes: crear, editar, buscar y eliminar.'
			},
			long: {
				en: 'Web application built with Angular to manage a list of superheroes. Features include full CRUD operations, search functionality, responsive UI, and integration with a mock REST API using json-server.',
				es: 'Aplicación web desarrollada con Angular para gestionar una lista de superhéroes. Incluye operaciones CRUD completas, buscador, interfaz responsiva e integración con una API REST simulada usando json-server.'
			}
		},
		techs: [techs.angular, techs.typescript, techs.html, techs.css],
		poster: '/projects-images/quizi/superheroes.png',
		images: [
			'/projects-images/quizi/superheroe-filter.png',
			'/projects-images/quizi/superheroe-part1.png',
			'/projects-images/quizi/superheroe-part2.png'
		]
	},
	{
		name: 'NeocorpusFit',
		repo: 'https://github.com/hclaros-dawi/NeocorpusFit.git',
		description: {
			short: {
				en: 'NeocorpusFit is a web platform for personalized nutrition management with calculators and intelligent shopping tools.',
				es: 'NeocorpusFit es una plataforma web para la gestión personalizada de la nutrición con calculadoras y herramientas inteligentes de compra.'
			},
			long: {
				en: 'NeocorpusFit is a complete web platform designed to help users achieve their health goals. It offers tools such as BMI, protein, creatine, maintenance calorie, and body fat calculators, as well as a smart shopping cart connected to menus and recipes. Users can save favorite items, track their progress, and receive personalized suggestions based on their goals — all within a modern, responsive interface.',
				es: 'NeocorpusFit es una plataforma web completa pensada para ayudar a los usuarios a alcanzar sus objetivos de salud. Ofrece herramientas como calculadoras de IMC, proteínas, creatina, calorías de mantenimiento y grasa corporal, además de un carrito de compras inteligente vinculado a menús y recetas. Los usuarios pueden guardar elementos favoritos, seguir su progreso y recibir sugerencias personalizadas según sus metas, todo dentro de una interfaz moderna y adaptable.'
			}
		},
		techs: [techs.html, techs.scss, techs.javascript, techs.bootstrap, techs.php, techs.mysql, techs.laravel],
		poster: '/projects-images/neocorpusfit/neocorpusfit-hero.png',
		images: [
			'/projects-images/neocorpusfit/ncf-1.png',
			'/projects-images/neocorpusfit/ncf-2.png',
			'/projects-images/neocorpusfit/ncf-3.png',
			'/projects-images/neocorpusfit/ncf-4.png',
			'/projects-images/neocorpusfit/ncf-5.png',
			'/projects-images/neocorpusfit/ncf-6.png',
			'/projects-images/neocorpusfit/ncf-7.png',
			'/projects-images/neocorpusfit/ncf-8.png',
			'/projects-images/neocorpusfit/ncf-9.png',
			'/projects-images/neocorpusfit/ncf-10.png',
			'/projects-images/neocorpusfit/ncf-11.png',
			'/projects-images/neocorpusfit/ncf-12.png',
			'/projects-images/neocorpusfit/ncf-13.png'
		]
	},
	{
		name: 'Trello',
		repo: 'https://github.com/hclaros-dawi/Trello.git',
		description: {
			short: {
				en: 'Simple Trello clone built with pure HTML, CSS and JavaScript to manage tasks visually.',
				es: 'Clon sencillo de Trello creado con HTML, CSS y JavaScript puro para gestionar tareas de forma visual.'
			},
			long: {
				en: 'A lightweight Trello clone simulating a Kanban board using only HTML, CSS, and vanilla JavaScript. Features include draggable task cards, editable content, dynamic columns, and responsive styling—ideal for learning DOM manipulation and interactive UI development without frameworks.',
				es: 'Un clon liviano de Trello que simula un tablero Kanban usando solo HTML, CSS y JavaScript puro. Incluye tarjetas de tareas arrastrables, contenido editable, columnas dinámicas y un estilo visual responsivo. Ideal como ejercicio para aprender manipulación del DOM y desarrollo de interfaces interactivas sin frameworks.'
			}
		},
		techs: [techs.html, techs.css, techs.javascript],
		poster: '/projects-images/trello/trello.png',
		images: [
			'/projects-images/trello/trello.png'
		]
	}
]
