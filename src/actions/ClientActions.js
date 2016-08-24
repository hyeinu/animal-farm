import API from '../API'

const ClientActions = {
  getPets(type){
    API.getPets(type);
  },
  getDetails(symbol){
    API.getDetails(symbol);
  },
  getCharts(symbol){
    API.getCharts(symbol);
  }
}

export default ClientActions
