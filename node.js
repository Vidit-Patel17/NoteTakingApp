var mongodb =require('mongodb');
var MongoClient= mongodb.MongoClient;
var url = 'mongodb://127.0.0.1:27017/mydb';
var express = require('express');
var bodyParser =require('body-parser');
var app=express(); 
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res) => {
	res.sendFile(__dirname + "/note.html");
});

var dbo

MongoClient.connect(url, function(err, db1) {
  if (err) return err;
      var dbo = db1.db("mydb");
      dbo.createCollection("Notes", function(err, res) {
  if (err) return err;
      console.log("Collection created!");
      db1.close();
  });
}); 

app.post('/Notes', (req, res) => {
  dbo.collection('Notes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})


app.listen(port,() => {
	console.log("Server Listening on port"+port);

});
