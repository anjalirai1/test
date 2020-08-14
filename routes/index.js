var express = require('express');
var mongoose =require('mongoose');
var router = express.Router();
var moment = require('moment');


mongoose.connect('mongodb://localhost:27017/test123');

mongoose.connection.on('open',function(){
	console.log("mongosse connected");
});

var Schema=mongoose.Schema;

var user=new Schema({
	name1:String
});

var User=mongoose.model('User',user);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:  'Express'});
});


router.get('/now', function(req, res, next) {
	res.render('now', { cont : moment.utc().format('DD-MMM-YYYY hh:m:s A')});
});

// router.post('/register',function(req,res,next) {
	
// 	console.log(req.body.name);

// 	var newUser={
// 			name1:req.body.name
// 			}

// 	User.create(newUser,function(err,data){
		
// 	if(err){
// 		console.log(err);
// 	}

// 	else{
// 		const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

// 		res.json({
// 			accessToken
// 		});
// 		//res.send(data);
// 		res.redirect("/register");
// 		}



// 	});
// })
// router.get('/me',function(req,res){

// 	User.find({},function(err,data){
		
// 	if(err){
// 		console.log(err);
// 	}

// 	else{
// 		console.log(data);
// 		//res.send()
// 		res.render('user',{data:data});
// 		}



// 	});

// });

// router.post('/create',function(req,res,next){

// 	console.log(req.body.name);

// 	var newUser={
// 			name1:req.body.name,
// 			email:req.body.email
// 			}

// 	User.create(newUser,function(err,data){
		
// 	if(err){
// 		console.log(err);
// 	}

// 	else{

// 		//res.send(data);
// 		res.redirect("/data");
// 		}



// 	});
// });

// router.post('/del',function(req,res,next){
		
// 		console.log(req.body.name);
		
// 		var newUser={
// 				name1:req.body.name,
// 				email:req.body.email
// 				}
		
// 		User.remove(newUser,function(err,data){
				
// 			if(err){
// 				console.log(err);
// 			}
		
// 			else{
		
// 			//res.send(data);
// 			res.redirect("/data");
// 			}
		
		
		
// 		});
// });



// router.post('/update',function(req,res,next){
			
// 	console.log(req.body.name);
			
// 				// var Unewser={
// 				// 		name1:req.body.name,
// 				// 		email:req.body.email
// 				// 		}
			
// 	User.findOneAndUpdate({'name1':req.body.name},
// 		{'email':req.body.email},function(err,data){
					
// 			if(err){
// 					console.log(err);
// 			}
			
// 			else{
			
// 				//res.send(data);
// 				res.redirect("/data");
// 				//console.log("updated successfully");
// 			}
			
			
			
// 		});
// });
module.exports = router;
