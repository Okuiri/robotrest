var PORT = 8080;

//set up =====
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//configuration section
mongoose.connect('mongodb://71.58.78.154:27017/robot');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());


//define model ======
var Todo = mongoose.model('Todo',{
    command: String,
    dist: { type: Number, default: 1},
    angle: { type: Number, default: 0}
});

//api --------------------
//get all todos
app.get('/api/todos', function(req,res){

    //use mongoose to get all todos in the db
    
    Todo.find(function(err,todos){
	//if there is an error spit out an error and nothign else
	if(err){
	    res.send(err)
	}

	
	res.json(todos);// return all todos in JSON format
    });
    
});

// create a todo, information comes from an AJAX req from angular

app.post('/api/todos', function(req,res){

    console.log(req.body.command+ ' ' + req.body.dist + ' ' + req.body.angle);
    console.log(req.body);
    Todo.create({
        command: req.body.command,
        dist: req.body.dist,
        angle: req.body.angle,
	    done: false
    },function(err,todo){
	    if(err)
	        res.send(err)
	    Todo.find(function(err,todos){
	        if(err)
		        res.send(err)
	        res.json(todos);
	    });
    });

    
});

// delete a todo
app.delete('/api/todos/:todo_id',function(req,res){

    Todo.remove({
	_id: req.params.todo_id
    }, function(err,todo){
	if(err)
	    res.send(err)

	//get and return all the todos after you create another
    Todo.find(function(err,todos){
            if(err)
	            res.send(err)
	        res.json(todos);
	    });
    });

});

app.get('/',function(req,res){
    res.sendFile('./public/index.html'); //load the single view file
});

app.get('/robot',function(req,res){
    res.sendFile('./public/nav.html');
});

//listen
app.listen(PORT);
console.log('app listening on port '+ PORT+'...');
