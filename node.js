var mongodb =require('mongodb');
var MongoClient= mongodb.MongoClient;
var url = 'mongodb://127.0.0.1:27017/mydb';
var mongoose = require('mongoose');
var express = require('express');
var bodyParser =require('body-parser');
var app=express(); 
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/hello");

var nameSchema = new mongoose.Schema({
	note:String,
	
});

var User =mongoose.model("User", nameSchema);


app.get("/",(req,res) => {
	res.sendFile(__dirname + "/note.html");
});




MongoClient.connect(url, function(err, db) {
  // if (err) throw err;
  var dbo = db1.db("mydb");
  dbo.createCollection("Notes", function(err, res) {
    // if (err) throw err;
    console.log("Collection created!");
    db1.close();
  });
}); 


app.post("/Notes",(req,res) => {
  dbo.collection('Notes').find().toArray((err, result) => {
    if (err) return console.log(err)
    
    res.render('note.html', {notes: result})
  });
});


app.listen(port,() => {
	console.log("Server Listening on port"+port);

});
