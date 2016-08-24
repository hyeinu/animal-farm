const express = require('express');
const router = express.Router();
const Animal = require('../models/animal')

router.route('/')
  .get((req, res) =>{
    Animal.getAnimal((err, animal) => {
      res.status(err ? 400: 200).send(err || animal);
    })
    // Animal.find({}, (err, animal) =>{
    //   res.status(err ? 400: 200).send(err || animal);
    // })
  })
  .post((req, res) =>{
    Animal.create(req.body, (err, animal) =>{
      res.status(err ? 400: 200).send(err || animal);
    })
  })

  // Animal
  //   .find({})
  //   .sort('name')
  //   .limit(5)
  //   .exec(err, animal) =>{
  //     res.status(err ? 400: 200).send(err || animal);
  //   })


  // Animal.findById(req.params.id)
  //   .populate('owner')
  //   .exec(err, animal) =>{
  //   if(err || !animal){
  //     return res.status(400).send(err || 'Animal not found.')
  //   }
  //   res.send(animal);
  // }).populate('owner')

router.get('/:id', (req, res) =>{

  Animal.findById(req.params.id, (err, animal) =>{
    if(err || !animal){
      return res.status(400).send(err || 'Animal not found.')
    }
    res.send(animal);
  }).populate('owner previousOwners')
})

router.delete('/:id', (req, res) =>{

  Animal.findByIdAndRemove(req.params.id, (err, deleteAnimal) =>{
    if(err || !animal){
      return res.status(400).send(err || 'Animal not found.')
    }
    return res.status(200).json(`${deletedAnimal.name} was removed!`)
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
    });
  });
});

module.exports = router;
