const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz');

router.post('/', quizController.createQuiz);
router.get('/', quizController.getQuizzes);
router.delete('/:id', quizController.deleteQuiz);
router.put('/:id', quizController.updateQuiz);
router.post('/result', quizController.updateQuizResult);

module.exports = router;
