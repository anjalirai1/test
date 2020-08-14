var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/now', function(req, res) {
  res.send('nowtime',{cont:moment.utc().format('DD-MMM-YYYY hh:m:s A')});
	
});

module.exports = router;