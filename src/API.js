import ServerAction from './actions/ServerActions'
import axios from 'axios'

const API = {
  getPets(type){
    axios.get(`/api/animals/search/${type}`)
      .then(res =>{
        return res.data
      })
      .then(data =>{
        ServerAction.getPets(data);
      })
      .catch(err =>{
        console.log('err:', err)
      })
  },
  getOnePet(id){
    axios.get(`/api/animals/${id}`)
      .then(res =>{
        return res.data
      })
      .then(data =>{
        ServerAction.getOnePet(data);
      })
      .catch(err =>{
        console.log('err:', err)
      })
  }
}

export default API
