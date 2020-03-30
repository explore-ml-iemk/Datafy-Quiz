const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');

const PORT = process.env.PORT || 5000;

app.set('view engine', 'handlebars');


app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout: 'index'});
});



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
