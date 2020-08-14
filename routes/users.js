var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/test123');

mongoose.connection.on('open',function(){
	console.log("mongosse connected");
});

var Schema=mongoose.Schema;
//find username,it is unique
router.get('/me',function(req,res){

	Users.find({},function(err,data){
		
	if(err){
		console.log(err);
	}

	else{
		console.log(data);
		//res.send()
		res.render('users',{data:data});
		}
	});

});

/* GET authentication token listing. */
router.post('/register', function(req, res, next) {
  //
// Filter user from the users array by username and password
// var user = users.find(u => { return u.username === username });

//if (user) {
    // Generate an access token
    const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

    res.json({
        accessToken
    });
//} else {
    //res.send('Username or password incorrect');
//}
});

module.exports = router;
