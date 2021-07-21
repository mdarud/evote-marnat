var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) res.render('home', { title: 'Pemilihan Umum Raya • Universitas Kristen Maranatha' });
  else if (!req.user.memilih) {
    res.render('vote', { title: 'Vote • Universitas Kristen Maranatha' , name: req.user.name});
  } else {
    console.log("ANJING")
    req.flash('error_msg', 'Anda sudah memilih.');
    res.redirect('/')
  }
});

module.exports = router;
