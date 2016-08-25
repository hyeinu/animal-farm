const mongoose = require('mongoose')

const { Schema } = mongoose;

const animalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  age: { type: Number, required: true, min: 0},
  gender: { type: String, required: true, default: true},
  image: { type: String },
  owner: { type: Schema.Types.ObjectId, ref: 'Person' },
  previousOwners: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
})


animalSchema.statics.getAnimal = function(field, cb){
    this
      .find({})
      .sort(field)
      .exec((err, animals) => {
        if (err) return cb(err)
        else cb(err, animals);
    })
}
const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
