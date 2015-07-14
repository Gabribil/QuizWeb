var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'QuizWeb' });
});

/* GET question & answer */

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
<<<<<<< HEAD
router.get('/author', quizController.author);
=======
router.get('/author' ,author);
>>>>>>> master


module.exports = router;
