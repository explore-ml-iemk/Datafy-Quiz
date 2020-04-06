const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Question = mongoose.model('quizes');

// router.get('/', (req, res) => {
//   res.render('index/quiz');
// });

// Question Index
router.get('/',(req,res) => {
	Question.find().then((quiz) => {
		res.render('quiz/index', { title: title }); //{} content depends on index.hbs file
	});
});

//Add Question Form
router.get('/add', function(req, res){
    res.render('quiz/add');
});

//Show Edit Question
router.get('/edit/:id', (req, res) => {
	Question.findOne({_id: req.params.id }).then((quiz) => {
		res.render('quiz/edit', { title: title }); 
	});
});

//Post action Add Question

router.post('/', (req, res) => {
	const newQuestion = {
        question: req.body.question,
        category: req.body.category,
        option.title: req.body.option.title,
        answer: req.body.answer
    }

    new Question(newQuestion).save().then(() => {
    	res.redirect('/quiz');
    });
});

//Edit Question Post Action

router.put('/:id', (req, res) => {
	Question.findOne({ _id: req.params.id }).then((quizes) => {
		
		quizes.question = req.body.title;
		quizes.category = req.body.category;
		quizes.option.title = req.body.option.title;
		quizes.answer = req.body.answer;

		quizes.save().then((quiz) => {
			res.redirect('/quiz');
		});
	});
});

// //Delete Question

router.delete('/:id', (req, res) => {

    Question.deleteOne({ _id: req.params.id }).then(() => {
    	res.redirect('/quiz');
    });

});

module.exports = router;
