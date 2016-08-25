const express = require('express');
const router = express.Router();
const Animal = require('../models/animal')

router.route('/')
  .get((req, res) =>{
    Animal.find({}, (err, animal) =>{
      res.status(err ? 400: 200).send(err || animal);
    })
  })
  .post((req, res) =>{
    Animal.create(req.body, (err, animal) =>{
      res.status(err ? 400: 200).send(err || animal);
    })
  })

router.get('/sort/:field', (req, res) => {
  Animal.getAnimal(req.params.field, (err, animal) => {
    res.status(err ? 400: 200).send(err || animal);
  })
})


  // Animal.findById(req.params.id)
  //   .populate('owner')
  //   .exec(err, animal) =>{
  //   if(err || !animal){
  //     return res.status(400).send(err || 'Animal not found.')
  //   }
  //   res.send(animal);
  // }).populate('owner')


router.get('/search/pet', (req, res) =>{
  Animal.find({}, (err, animal) =>{
    res.status(err ? 400: 200).send(err || animal);
  })
})
router.get('/search/:type', (req, res) =>{
  Animal.find({type: req.params.type}, (err, animals) =>{
    if(err || !animals){
      return res.status(400).send(err || 'Animals not found.')
    }
    res.send(animals);
  })
})

router.put('/:animalId/addOwner/:ownerId', (req, res) => {
  Animal.findById(req.params.animalId, (err, animal) =>{
    if(err || !animal){
      return res.status(400).send(err || 'Animal not Found');
    }
    let ownerId = req.params.ownerId;
    animal.owner = ownerId;

    animal.save((err, savedAnimal) =>{
      res.status(err ? 400: 200).send(err || savedAnimal)
    })
  })
})

router.route('/:id')
  .delete((req, res) =>{
    Animal.findByIdAndRemove(req.params.id, (err, deleteAnimal) =>{
      if(err || !deleteAnimal){
        return res.status(400).send(err || 'Animal not found.')
      }
      return res.status(200).json(`${deleteAnimal.name} was removed!`)
    })
  })
  .put((req, res) =>{
    Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, animal) =>{
      if(err){
        return res.status(400).send(err);
      } else {
        return res.send()
      }
    })
  })
  .get((req, res) =>{
    Animal.findById(req.params.id, (err, animal) =>{
      if(err || !animal){
        return res.status(400).send(err || 'Animal not found.')
      }
      res.send(animal);
    }).populate('owner previousOwners')
  })




module.exports = router;
