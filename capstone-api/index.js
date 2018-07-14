var express = require('express');
var app = express();
var dataRoutes = require("./routes/data.js");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/dist'));

app.get('/',function(req,res){
    res.send('root');
})

app.use('/api/data',dataRoutes);

app.listen(process.env.PORT,function(){
    console.log("app is running on port "+process.env.PORT);
})