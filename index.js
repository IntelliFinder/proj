const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const Comment = require('./model/scheme.js');
const app = express();
//connect to server
mongoose.connect('mongodb://localhost/guestDB');

app.use(bodyParser.json());

//get comments
app.get('/comments', (req, res)=>{
    Comment.find((err, comments)=> {
      if (err){
        res.writeHead(500);
        res.end();
      }else {
        res.json(comments);
      } });

});

app.post('/comments', (req, res)=>{
  console.log(req.body);
  //create document
  const comment = new Comment(req.body);

  comment.save((err) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else {
      console.log(comment);
      res.writeHead(204);
      res.end();
      }
    });
  });



app.get('/comments:name',(req, res)=>{
  Comment.find({name: req.params.name}, (err, comments)=> {
    if (err){
      res.writeHead(500);
      res.end();
    }else {
      res.json(comments);
    } });

});

app.listen(3000);

// //save comment
