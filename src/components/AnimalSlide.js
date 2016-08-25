import React, { Component } from 'react';
import  ClientActions  from '../actions/ClientActions'
import  PetStore  from '../stores/PetStore'
import  Pet  from './Pet'
import '../css/style.css'

//localhost:8000/:type/pet/:id

export default class AnimalSlide extends Component {
  constructor(props){
    super(props);

    this.state ={
      pets: PetStore.getAll()
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    PetStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    PetStore.stopListening(this._onChange)
  }
  _onChange(){
    this.setState({pets: PetStore.getAll()})
  }
  render(){
    let petDivs = this.state.pets.map(pet => {
      return <Pet petInfo={pet}/>
    })
    return(
      <div className="animalSlide">
      <h2>More Pets!</h2>
      {petDivs}
      </div>
    )
  }

}
