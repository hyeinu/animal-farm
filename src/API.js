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
  },
  sortPets(field){
    axios.get(`/api/animals/sort/${field}`)
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
  addPet(obj){
    axios.post(`/api/animals/`, obj)
      .then(res =>{
        return res.data
      })
      .then(data =>{
        ServerAction.getNewPet(data);
      })
      .catch(err =>{
        console.log('err:', err)
      })
  },
  deletePet(id){
    axios.delete(`/api/animals/${id}`)
      .then(res =>{
        ServerAction.deletePet();
      })
      .catch(err =>{
        console.log('err:', err)
      })
  }
}

export default API
