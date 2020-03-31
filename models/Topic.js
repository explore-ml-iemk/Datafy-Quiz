const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TopicSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

// Create collection and add schema
mongoose.model('topics', TopicSchema, 'topics');
