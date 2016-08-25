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
  },
  getNewPet(pet){
    AppDispatcher.dispatch({
      type: Constants.RECIEVE_NEW_PET,
      pet
    })
  },
  deletePet(){
    AppDispatcher.dispatch({
      type: Constants.DELETE_PET
    })
  }
}

export default ServerAction
