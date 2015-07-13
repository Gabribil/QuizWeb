
//GET de question
exports.question = function(req ,res){
	res.render('quizes/question', {pregunta: 'Capital mundial del aciete de oliva'});
}

//GET de answer
exports.answer = function (req, res){
	if(req.query.respuesta === 'Jaen'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	}else{
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
}