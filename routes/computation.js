var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
          // Build a fake url so we can get the search parameters using a URL object
          fake_url = "https://fake.com/path" + req.url
          const url = new URL(fake_url)
          const search_params = url.searchParams
    
          var x = Math.random();
    
    
          if (search_params.get("x")) {
            x= search_params.get("x");}
   
    var a = Math.abs(x);
    var b= Math.acos(x);
    var c = Math.sin(x);
    var d = Math.sinh(x);
  res.render('computation', { title: 'Express', x:x,a:a,b:b,c:c,d:d});
  
});

module.exports = router;