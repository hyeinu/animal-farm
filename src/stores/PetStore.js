import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _pets = [];
let _onePet = [];

class PetStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECIEVE_PETS:
          _pets = action.pets;
          this.emit('CHANGE');
          break;
        case Constants.RECIEVE_PET:
          _onePet = action.pet
          this.emit('CHANGE')
          break;
      }
    });
  }

  startListening(cb){
    this.on('CHANGE', cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb);
  }

  getAll(){
    return _pets;
  }
  getOnePet(){
    return _onePet;
  }

}

export default new PetStore()
