const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('quizes');
const Topic = mongoose.model('topics');
const { ensureAdmin } = require('../helpers/auth');

router.get('/user', ensureAdmin, (req, res) => {
  res.render('index/topics');
});

// Topics Index
router.get('/', ensureAdmin, (req, res) => {
  Topic.find().then((topic) => {
    res.render('topics/index', { topic: topic });
  });
});

// Add Topics Form
router.get('/add', ensureAdmin, function (req, res) {
  res.render('topics/add');
});

//Show Topic All Question
router.get('/show/:id', (req, res) => {
  Question.find({ category: req.params.id })
    .populate('category')
    .then((quiz) => {
      res.render('quiz/index', { quiz: quiz });
    });
});

//Show Edit Topic
router.get('/edit/(:id)', ensureAdmin, (req, res) => {
  Topic.findOne({ _id: req.params.id }).then((topic) => {
    res.render('topics/edit', { topic: topic });
  });
});

//Post action Add Topic
router.post('/', ensureAdmin, (req, res) => {
  const newTopic = {
    title: req.body.title,
    description: req.body.description,
  };

  new Topic(newTopic).save().then(() => {
    res.redirect('/topics');
  });
});

//Edit Topic Post Action
router.put('/:id', ensureAdmin, (req, res) => {
  Topic.findOne({ _id: req.params.id }).then((topic) => {
    // New Values
    topic.title = req.body.title;
    topic.description = req.body.description;

    topic.save().then(() => {
      res.redirect('/topics');
    });
  });
});

//Delete Topic
router.delete('/:id', ensureAdmin, (req, res) => {
  Topic.deleteOne({ _id: req.params.id }).then(() => {
    res.redirect('/topics');
  });
});

module.exports = router;
