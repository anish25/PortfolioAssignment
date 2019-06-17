// File Name:-index.js
// Author Name:-Anish Gandhi
// Website Name:-Portfolio 
// Description:-contains all the routes to different pages in the appliaction

var express = require('express');
var router = express.Router();

const app = express();
app.set('view engine', 'pug');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'PortFolio' });
});

app.get('/', (req, res) => {
  res.render('About')
})

app.get('/', (req, res) => {
  res.render('Services')
})

app.get('/', (req, res) => {
  res.render('projects')
})

app.get('/', (req, res) => {
  res.render('contact_us')
})

module.exports = router;
