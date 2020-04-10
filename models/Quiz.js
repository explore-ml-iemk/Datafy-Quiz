const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuizSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'topics',
  },
  option: [
    {
      title: {
        type: String,
        required: true,
      },
    },
  ],
  answer: {
    type: Number,
    required: true,
  },
});

// Create collection and add schema
mongoose.model('quizes', QuizSchema, 'quizes');
