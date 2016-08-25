import AppDispatcher from '../AppDispatcher'
import Constants from '../Constants'

const ServerAction = {
  getPets(pets){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_PETS,
      pets
    })
  },
  getOnePet(pet){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_PET,
      pet
    })
  }
}

export default ServerAction
