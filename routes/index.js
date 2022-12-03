var express = require('express');
var router = express.Router();

/* GET Login page */
router.get('/login', function(req, res, next){
res.render('login');
});

var dataBike = [
  {
    images: "bike-1",
    title: "BIK045",
    price: "679 €",
  },
  {
    images: "bike-2",
    title: "ZOOK07",
    price: "999 €",
  },
  {
    images: "bike-3",
    title: "TITANS",
    price: "799 €",
  },
  {
    images: "bike-4",
    title: "CEWO",
    price: "1300 €",
  },
  {
    images: "bike-5",
    title: "AMIG39",
    price: "479 €",
  },
  {
    images: "bike-6",
    title: "LIK099",
    price: "869 €",
  }
];

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { dataBike });
});


router.post("/", function(req, res) {
  console.log( req.body );
  res.render("index", { dataBike, prenom: req.body.prenom,
    nom: req.body.nom });
});


/* VAR ligne panier */
var dataCardBike = [
  {
    images: "bike-1",
    title: "BIK045",
    price: 679,
    quantity: 1,
  },
  {
    images: "bike-2",
    title: "ZOOK07",
    price: 999,
    quantity: 2,
  }
];

var totalCmd = 0;
for (var i = 0; i < dataCardBike.length; i++) {
  totalCmd = (dataCardBike[i].price * dataCardBike[i].quantity)
    + totalCmd;
};

/* GET shop page. */
router.get('/shop', function (req, res, next) {
  res.render('shop', { dataCardBike, totalCmd });
});


module.exports = router;
