const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('quizes');
const Topic = mongoose.model('topics');
const { ensureAuthenticated, ensureGuest } = require('../helpers/auth');
const selectFactory = require('random-selector');

randomSelect = (list, number) => {
  normalBag = selectFactory.createSimpleSelectorWithoutReplacement(list);
  selection = Array();
  for (i = 0; i < number; i++) {
    selection.push(normalBag.select());
  }
  return selection;
};

router.get('/', ensureGuest, (req, res) => {
  res.render('index/welcome');
});

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('index/dashboard');
});

router.get('/see/topics', ensureAuthenticated, (req, res) => {
  Topic.find().then((topic) => {
    res.render('index/topics', { topic: topic });
  });
});

router.get('/see/quiz/:id', ensureAuthenticated, (req, res) => {
  Question.find({ category: req.params.id })
    .populate('category')
    .then((quiz) => {
      selectedQuiz = randomSelect(quiz, 5);
      res.render('index/quiz', { quiz: selectedQuiz });
    });
});
module.exports = router;
