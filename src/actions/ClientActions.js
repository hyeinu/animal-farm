import API from '../API'

const ClientActions = {
  getPets(type){
    API.getPets(type);
  },
  getOnePet(id){
    API.getOnePet(id);
  },
  sortPets(field){
    API.sortPets(field);
  },
  addPet(obj){
    API.addPet(obj);
  },
  deletePet(id){
    API.deletePet(id);
  }
}

export default ClientActions
