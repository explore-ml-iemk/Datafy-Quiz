const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Import function exported by newly installed node modules.
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

// Load Models
require('./models/User');
require('./models/Quiz');
require('./models/Topic');

// Load Routes
const home = require('./routes/index');
const quiz = require('./routes/quiz');
const topics = require('./routes/topics');

// Load Keys
const keys = require('./config/keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Method Override Middelware
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, '/views'));

// Handlebars Middleware
app.engine(
  'hbs',
  handlebars({
    layoutsDir: path.join(__dirname, '/views', '/layouts'),
    partialsDir: path.join(__dirname, '/views', '/partials'),
    extname: 'hbs',
    defaultLayout: 'layout',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set('view engine', 'hbs');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('./index/welcome');
});

// Use Routes
app.use('/quiz', quiz);
app.use('/topics', topics);
app.use('/', home);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
