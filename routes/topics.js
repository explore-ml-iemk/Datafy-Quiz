const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Topic = mongoose.model('topics');

// router.get('/', (req, res) => {
//   res.render('index/topics');
// });

// Topics Index
router.get('/', (req, res) => {
  Topic.find().then((topics) => {
    res.render('topics/index', { topics: topics });
  });
});

// Add Topics Form
router.get('/add', function (req, res) {
  res.render('topics/add');
});

//Show Edit Topic
router.get('/edit/(:id)', (req, res) => {
  Topic.findOne({ _id: req.params.id }).then((topic) => {
    res.render('topics/edit', { topic: topic });
  });
});

//Post action Add Topic
router.post('/', (req, res) => {
  const newTopic = {
    title: req.body.title,
    description: req.body.description,
  };

  new Topic(newTopic).save().then(() => {
    res.redirect('/topics');
  });
});

//Edit Topic Post Action
router.put('/:id', (req, res) => {
  Topic.findOne({ _id: req.params.id }).then((topic) => {
    // New Values
    topic.title = req.body.title;
    topic.description = req.body.description;

    topic.save().then((topic) => {
      res.redirect('/topics');
    });
  });
});

//Delete Topic
router.delete('/:id', (req, res) => {
  Topic.deleteOne({ _id: req.params.id }).then(() => {
    res.redirect('/topics');
  });
});

module.exports = router;
