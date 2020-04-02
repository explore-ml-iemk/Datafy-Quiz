const express = require('express');
const router = express.Router();

//let dbase = db.db("topics");

router.get('/', (req, res) => {
    res.render('./index/topics');
});
  
//Add-Topics Route
//Render 

router.get('/add', function(req, res){
    //render to views/topics/add.hbs
    res.render('./topics/add', {
        title: ''
    })
})

//Post action Add Topic

router.post('/add', (req, res) => {

    var topic = {
        title: req.body.title
    }
    
    dbase.collection('question').insert(topic, function(err, result){
        if(err)
            console.log(err);
        res.send('Topic Added Successfully');
    });
  res.render('./index/topics');

});

//Show Edit Topic

router.get('/edit/(:id)', (req, res) => {
    var o_id = req.params.id;
    req.dbase.collection("topics").find({"_id": o_id}).toArray(function(err, result){
        if(err)
            return console.log(err);
        if(!result)
            res.redirect('./index/topics')
        else{
            //render to views/topics/edit.hbs
            res.render('./topics/edit', {
                title: result[0].title
            })
        }
    })
})

//Edit Topic Post Action

router.put('/edit/:id', (req, res) => {

    let id = {
        _id: ObjectID(req.params.id)
    };

    dbase.collection("topics").update({_id: id}, {$set:{
        'title': req.body.title
    }}, (err, result) => {
        if(err)
            throw err;
        res.send('Topic Updated Successfully');
    });
    
  res.render('./index/topics');

});

//Delete Topic

router.delete('/delete/:id', (req, res) => {

    let id = ObjectID(req.params.id);
    dbase.collection('topics').deleteOne(id, (err, result) => {
        if(err)
            throw err;
        res.send('Topic Deleted Successfully');
    });

  res.render('./index/topics');

});

module.exports = router;