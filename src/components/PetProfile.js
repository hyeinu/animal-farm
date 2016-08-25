import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import  ClientActions  from '../actions/ClientActions'
import  PetStore  from '../stores/PetStore'
import  AnimalSlide  from './AnimalSlide'
import '../css/style.css'

//localhost:8000/:type/pet/:id

export default class PetProfile extends Component {
  constructor(props){
    super(props);

    this.state ={
      pet: ClientActions.getOnePet(this.props.params.id)
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    PetStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    PetStore.stopListening(this._onChange)
  }
  componentWillReceiveProps(nextProps){
    ClientActions.getOnePet(nextProps.params.id)
  }
  _onChange(){
    this.setState({pet: PetStore.getOnePet()})
  }
  deletePet(id){
    ClientActions.deletePet(id)
    browserHistory.push('search/pet')
  }
  render(){
    let { name, type, age, gender, image, owner, _id } = this.state.pet
    let genIcon
    let adopt
    if (gender === 'female'){
      genIcon = <i className="fa fa-venus fa-2x"></i>
    } else {
      genIcon = <i className="fa fa-mars fa-2x"></i>
    }
    if(!owner){
      adopt = <button className="btn btn-info form-control">Adopt</button>
    } else{
      adopt = <div></div>
    }
    return(
      <div>
        <div className="col-xs-3">
          <AnimalSlide />
        </div>
        <div className="col-xs-4">
          <br/>
          <img src={image} className="img-responsive img-rounded"/>
          {adopt}
          <button className="btn btn-warning form-control" onClick={this.deletePet.bind(null, _id)}>Delete</button>
        </div>
        <div className="col-xs-5">
          <h1>Name: {name}</h1>
          <h1>Type: {type.toUpperCase()}</h1>
          <h1>Age: {age}</h1>
          <h1><span>{genIcon}</span></h1>
        </div>
      </div>
    )
  }

}
