var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  const result = login(username, password)
});

module.exports = router;