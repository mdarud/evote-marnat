var express = require('express');
var router = express.Router();
const passport = require('passport');
const Pilihan = require('../models/Votees');
const { forwardAuthenticated, ensureAuthenticated, ensureNotVoted, voterAuthenticated } = require('../config/auth');

var app = express();

router.post('/', 
  passport.authenticate('local', {
    failureRedirect: '/#Vote',
    failureFlash : true
  }), (req, res) => {
    res.redirect('/');
  }
);

// Logout
router.get('/logout', ensureAuthenticated, (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/voting', ensureAuthenticated, ensureNotVoted, voterAuthenticated, async (req, res) => {
  try {
    let username = req.user.name;
    const pilihan = await new Pilihan({
      pilihan : {
        Mapeka: (req.body.MAPEKA != "") ? parseInt(req.body.MAPEKA, 10): 0,
        Ukor: (req.body.UKOR != "") ? parseInt(req.body.UKOR, 10): 0,
        Vom : (req.body.VOM != "") ? parseInt(req.body.VOM, 10): 0,
        Menwa : (req.body.MENWA!= "") ? parseInt(req.body.MENWA, 10): 0,
        Mcuc : (req.body.MCUC != "") ? parseInt(req.body.MCUC, 10): 0,
        Bela : (req.body.Bela != "") ? parseInt(req.body.Bela, 10): 0,
        Teto : (req.body.Teto != "") ? parseInt(req.body.Teto, 10): 0,
        Seni : (req.body.UKS != "") ? parseInt(req.body.UKS, 10): 0,
        Maphac : (req.body.MAPHAC != "") ? parseInt(req.body.MAPHAC, 10): 0
    },
      pemilih : req.user._id
    });
    await pilihan.save();
    await req.user.save();

    res.render('finish', {
      title: "Selesai • Universitas Kristen Maranatha",
      name : username
    });
  } catch (e) {
    console.log(e);
    res.render('vote', {
      error : e,
      title: "Vote • Universitas Kristen Maranatha"
    })
  }
});


module.exports = router;
