var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
  res.json({
    code: 200,
    data: [1,2,3]
  })
});

module.exports = router;