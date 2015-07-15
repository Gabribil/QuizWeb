var path = require('path');

//Cargar modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite

var sequelize = new Sequelize(null,null,null,
							{dialect: "sqlite", storage: "quiz.sqlite"}
							);

//Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz;//Exportamos la definición de la tabla Quiz

//Creando e inicializando la tabla de preguntas en DB

sequelize.sync().success(function() {
	//success ejecuta el manejador una vz creada la tabla
	Quiz.count().success(function(count){
		if(count === 0){ //la tabla se inicia solo si está vacia
			Quiz.create({pregunta: 'Capital mundial del Aceite de Oliva',
						 respuesta: 'Jaen'
						})
			.success(function(){console.log('BBDD Inicializada')});
		};
	})
});