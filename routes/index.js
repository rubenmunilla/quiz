var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET question. */
router.get('/quizes/question', quizController.question);

/* GET answer. */
router.get('/quizes/answer', quizController.answer);

/* GET author. */
router.get('/author', function(req, res) {
  res.render('author');
});

module.exports = router;
