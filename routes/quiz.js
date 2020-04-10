const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('quizes');
const Topic = mongoose.model('topics');
const { ensureAdmin } = require('../helpers/auth');

router.get('/user', (req, res) => {
  res.render('index/quiz');
});

// Question Index
router.get('/', (req, res) => {
  Question.find()
    .populate('category')
    .then((quiz) => {
      res.render('quiz/index', { quiz: quiz });
    });
});

//Add Question Form
router.get('/add', function (req, res) {
  Topic.find().then((topic) => {
    res.render('quiz/add', { topic: topic });
  });
});

//Show Single Question
router.get('/show/:id', (req, res) => {
  Question.findOne({ _id: req.params.id })
    .populate('category')
    .then((quiz) => {
      res.render('quiz/show', { quiz: quiz });
    });
});

//Show Edit Question
router.get('/edit/:id', ensureAdmin, (req, res) => {
  Question.findOne({ _id: req.params.id })
    .populate('category')
    .then((quiz) => {
      Topic.find().then((topic) => {
        res.render('quiz/edit', { quiz: quiz, topic: topic });
      });
    });
});

//Post action Add Question
router.post('/', ensureAdmin, (req, res) => {
  (n = req.body.nopt), (options = []);
  for (let i = 0; i < n; i++) {
    options.push({ title: req.body[`option[${i}]`] });
  }

  const newQuestion = {
    question: req.body.question,
    category: req.body.category,
    option: options,
    answer: parseInt(req.body.answer),
  };

  new Question(newQuestion).save().then(() => {
    res.redirect('/quiz');
  });
});

//Edit Question Post Action
router.put('/:id', ensureAdmin, (req, res) => {
  Question.findOne({ _id: req.params.id }).then((quiz) => {
    (n = req.body.nopt), (options = []);
    for (let i = 0; i < n; i++) {
      options.push({ title: req.body[`option[${i}]`] });
    }
    quiz.question = req.body.question;
    quiz.category = req.body.category;
    quiz.option = options;
    quiz.answer = parseInt(req.body.answer);

    quiz.save().then(() => {
      res.redirect('/quiz');
    });
  });
});

//Delete Question
router.delete('/:id', ensureAdmin, (req, res) => {
  Question.deleteOne({ _id: req.params.id }).then(() => {
    res.redirect('/quiz');
  });
});

module.exports = router;
