import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _owners = [];

class PetStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.RECIEVE_OWNERS:
          _owners = action.owners;
          this.emit('CHANGE');
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
    return _owners;
  }
}

export default new PetStore()
