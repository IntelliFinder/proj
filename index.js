const mongoose = require('mongoose');
const express = require('express');



app.use(app.static())

//connect to server
mongoose.connect('mongodb://localhost/guestDB');
//create collection
const Comment = mongoose.model('Comment', { name: String, email: String, content: String, timestamp: Date });
//create document
const comment = new Comment({ name: 'Zildjian', email: 'abc@gmail.com', content: 'I like your page' });
//save comment
comment.save((err) => {
  if (err) {
    console.log(err);
  } else {
    //print comment
    Comment.find((err, comments)=> {
      if (err){
        console.log(err);
      }else {
        console.log(comments);
      }
    });
  }
});
