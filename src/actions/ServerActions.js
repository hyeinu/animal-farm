import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

const ServerAction = {
  getPets(pets){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_PETS,
      pets
    })
  },
  recieveOneContact(contact){
    AppDispatcher.dispatch({
      type: 'CREATE_CONTACT',
      contact
    })
  }
}

export default ServerAction
