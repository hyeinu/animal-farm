import ServerAction from './actions/ServerActions'

const API = {
  getPets(type){
    fetch(`/api/animals/search/${type}`)
      .then(res =>{
        return res.json()
      })
      .then(data =>{
        ServerAction.getPets(data);
      })
      .catch(err =>{
        console.log('err:', err)
      })
  }
}

export default API
