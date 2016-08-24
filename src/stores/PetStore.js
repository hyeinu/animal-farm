import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _pets = [];

class PetStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECIEVE_PETS:
          _pets = action.pets;
          this.emit('CHANGE');
          break;
        // case Constants.RECIEVE_DETAILS:
        //   _details = action.details
        //   this.emit('CHANGE')
        //   break;
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

}

export default new StockStore()
