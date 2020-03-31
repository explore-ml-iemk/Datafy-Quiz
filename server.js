const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();

const home = require('./routes/index');
const quiz = require('./routes/quiz');
const topics = require('./routes/topics');

const PORT = process.env.PORT || 5000;


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');


app.engine('hbs', handlebars({
layoutsDir:path.join(__dirname, '/views', '/layouts'),
partialsDir: path.join(__dirname, '/views', '/partials'),
extname: 'hbs',
defaultLayout: 'layout',
}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', home);
app.use('/', quiz);
app.use('/', topics);



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
