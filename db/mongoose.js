const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost:27017/flashcards-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

