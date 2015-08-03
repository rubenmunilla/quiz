var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite o Postgres
var sequelize = new Sequelize(null, null, null, 
	{ dialect:  "sqlite", storage: "quiz.sqlite"}      
	);

// Importar definicion de la tabla Quiz
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

exports.Quiz = Quiz; 

sequelize.sync().then(function() {

	Quiz.count().then(function (count){
		if(count === 0){
			Quiz.create({pregunta: 'Capital de Italia',
							respuesta: 'Roma'
						})
			.then(function(){console.log('Base de datos inicializada')});
		};
	});
});