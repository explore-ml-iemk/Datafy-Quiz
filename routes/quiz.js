const express = require('express');
const router = express.Router();

//let dbase = db.db("question");

router.get('/', (req, res) => {
  res.render('quiz/show');
});


router.get('/show', (req, res) => {
  res.render("quiz/show");
});

router.get('/add', function (req, res) {
  res.render('quiz/add');
});
// //Add Question Route
// //Render

// router.get('/add', function(req, res){
//     //render to views/question/add.hbs
//     res.render('./question/add', {
//         question: '',
//         category: '',
//         option: [{
//             title: ''
//         }],
//         answer: ''
//     })
// })

// //Post action Add Question

// router.post('/add', (req, res) => {

//     var question1 = {
//         question: req.body.question,
//         category: req.body.category,
//         option: [{
//             title: req.body.title
//         }],
//         answer: req.body.answer
//     }

//     dbase.collection('question').insert(question1, function(err, result){
//         if(err)
//             console.log(err);
//         res.send('Question Added Successfully');
//     });
//   res.render('./index/quiz');

// });

// //Show Edit Question

// router.get('/edit/(:id)', (req, res) => {
//     var o_id = req.params.id;
//     req.dbase.collection("question").find({"_id": o_id}).toArray(function(err, result){
//         if(err)
//             return console.log(err);
//         if(!result)
//             res.redirect('./index/quiz')
//         else{
//             //render to views/question/edit.hbs
//             res.render('./question/edit', {
//                 id: result[0]._id,
//                 question: result[0].question,
//                 category: result[0].category,
//                 option: [{
//                     title: result[0].title
//                 }],
//                 answer: result[0].answer
//             })
//         }
//     })
// })

// //Edit Question Post Action

// router.put('/edit/:id', (req, res) => {

//     let id = {
//         _id: ObjectID(req.params.id)
//     };

//     dbase.collection("question").update({_id: id}, {$set:{
//         'question': req.body.question,
//         'category': req.body.category,
//         'option': [{
//             'title': req.body.title
//         }],
//         'answer': req.body.answer
//     }}, (err, result) => {
//         if(err)
//             throw err;
//         res.send('Question Updated Successfully');
//     });

//   res.render('./index/quiz');

// });

// //Delete Question

// router.delete('/delete/:id', (req, res) => {

//     let id = ObjectID(req.params.id);
//     dbase.collection('question').deleteOne(id, (err, result) => {
//         if(err)
//             throw err;
//         res.send('Question Deleted Successfully');
//     });

//   res.render('./index/quiz');

// });

module.exports = router;
