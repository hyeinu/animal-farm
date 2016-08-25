import API from '../API'

const ClientActions = {
  getPets(type){
    API.getPets(type);
  },
  getOnePet(id){
    API.getOnePet(id);
  }
  // getCharts(symbol){
  //   API.getCharts(symbol);
  // }
}

export default ClientActions
