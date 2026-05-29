const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Project', projectSchema);
