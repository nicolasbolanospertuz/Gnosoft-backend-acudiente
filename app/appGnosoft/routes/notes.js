var express = require('express');
var router = express.Router();

/* GET notes. */
router.get('/notes', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;