import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

let _owners = [];

class OwnerStore extends EventEmitter{
  constructor(){
    super();

    AppDispatcher.register(action =>{
      switch(action.type){
        case Constants.GET_OWNERS:
          _owners = action.owners;
          this.emit('CHANGE');
          break;
        case Constants.GET_OWNER:
          _owners.push(action.owner);
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

export default new OwnerStore()
