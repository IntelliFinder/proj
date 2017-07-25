const mongoose = require('mongoose');

comment={
    name: String,
    email: String,
    content: String,
    timestamp: Date

}
const Comment = mongoose.model('Comment', comment);
