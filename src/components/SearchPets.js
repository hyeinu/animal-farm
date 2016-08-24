import React, { Component } from 'react';
import { Link } from 'react-router'
import  ClientActions  from '../actions/ClientActions'

//localhost:8000/search/:type

export default class SearchPets extends Component {
  constructor(){
    super();
    this.state ={
      pets: []
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    PetStore.startListening(this._onChange)
    ClientActions.getPets(this.props.params.type)
  }
  componentWillUnmount(){
    PetStore.stopListening(this._onChange)
  }
  _onChange(){
    this.setState({pets: PetStore.getAll()})
  }
  render(){

  }
}
