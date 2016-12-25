var express = require('express'),
    router = express.Router();

var ClassFeature = require('../../models/classfeature');

var class_name = "Cleric"

// -------------------------------------
router.route('/')
.get((req,res) => {
  ClassFeature.find({class: class_name}, (err, features) => {
    if (err) {
      res.send(err);
    }
  }).sort({index: 'asc'}).exec((err, features) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(features);
  })

})

router.route('/level/:level')
.get((req,res) => {
  ClassFeature.find({class: class_name, level: parseInt(req.params.level) }, (err, features) => {
    if (err) {
      res.send(err);
    }
  }).sort({index: 'asc'}).exec((err, features) => {
    if (err) {
      res.send(err);
    }
    res.status(200).json(features);
  })

})

module.exports = router;