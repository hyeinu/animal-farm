const express = require('express');
const router = express.Router();
const Person = require('../models/person')

router.route('/')
  .get((req, res) =>{
    Person.find({}, (err, people) =>{
      res.status(err ? 400: 200).send(err || people);
    })
  })
  .post((req, res) =>{
    Person.create(req.body, (err, person) =>{
      res.status(err ? 400: 200).send(err || person);
    })
  })

router.delete('/:id', (req, res) =>{
  Person.findByIdAndRemove(req.params.id, err =>{
    if(err) return res.status(400).send(err)
    Person.find({}, (err, people) =>{
      res.status(err ? 400: 200).send(err || people);
    })
  })
})

module.exports = router;
