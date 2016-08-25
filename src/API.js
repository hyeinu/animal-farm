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
  },
  getOwners(){
    axios.get(`/api/people/`)
    .then(res =>{
      return res.data
    })
    .then(data =>{
      ServerAction.getOwners(data);
    })
    .catch(err =>{
      console.log('err:', err)
    })
  },
  addOwner(newOwner){
    axios.post(`/api/people/`, newOwner)
    .then(res =>{
      return res.data
    })
    .then(data =>{
      ServerAction.getNewOwner(data);
    })
    .catch(err =>{
      console.log('err:', err)
    })
  },
  adoptPet(petid, ownerid){
    axios.put(`/api/animals/${petid}/addOwner/${ownerid}`)
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
  deleteOwner(id){
    axios.put(`/api/animals/${id}/removeOwner`)
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
  deleteProfile(id){
    axios.delete(`/api/people/${id}`)
    .then(res =>{
      return res.data
    })
    .then(data =>{
      ServerAction.getOwners(data)
    })
    .catch(err =>{
      console.log('err:', err)
    })
  }
}

export default API
