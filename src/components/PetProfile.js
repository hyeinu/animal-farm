import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { FormControl } from 'react-bootstrap'
import  ClientActions  from '../actions/ClientActions'
import  PetStore  from '../stores/PetStore'
import  OwnerStore  from '../stores/OwnerStore'
import  AnimalSlide  from './AnimalSlide'
import '../css/style.css'

export default class PetProfile extends Component {
  constructor(props){
    super(props);

    this.state ={
      id: this.props.params.id,
      pet: ClientActions.getOnePet(this.props.params.id),
      owners: ClientActions.getOwners(),
      owner: '',
      adoptMode: false
    }
    this._adoptPet = this._adoptPet.bind(this)
    this._onChange = this._onChange.bind(this)
    this.deleteOwner = this.deleteOwner.bind(this)
    this._ownerChange = this._ownerChange.bind(this)
    this._onChangeOwner = this._onChangeOwner.bind(this)
    this._adoptModeChange = this._adoptModeChange.bind(this)
  }
  componentDidMount(){
    PetStore.startListening(this._onChange)
    OwnerStore.startListening(this._onChangeOwner)
  }
  componentWillUnmount(){
    PetStore.stopListening(this._onChange)
    OwnerStore.stopListening(this._onChangeOwner)
  }
  componentWillReceiveProps(nextProps){
    ClientActions.getOnePet(nextProps.params.id)
    this.setState({ id: nextProps.params.id })
  }
  _onChange(){
    this.setState({pet: PetStore.getOnePet()})
  }
  _onChangeOwner(){
    this.setState({owners: OwnerStore.getAll()})
  }
  _ownerChange(e){
    this.setState({owner: e.target.value})
  }
  _adoptPet(){
    let petid = this.state.id
    let ownerid = this.state.owner
    ClientActions.adoptPet(petid, ownerid)
    this.setState({adoptMode: false})
  }
  _adoptModeChange(){
    this.setState({adoptMode: true})
  }
  deletePet(id){
    ClientActions.deletePet(id)
    browserHistory.push('search/pet')
  }
  deleteOwner(){
    let petid = this.state.id
    ClientActions.deleteOwner(petid)
  }
  render(){
    let { name, type, age, gender, image, owner, _id } = this.state.pet

    let genIcon
    let adopt
    let adoptForm
    if (gender === 'female'){
      genIcon = <i className="fa fa-venus fa-2x"></i>
    } else {
      genIcon = <i className="fa fa-mars fa-2x"></i>
    }
    if(!owner){
      adopt = <button onClick={this._adoptModeChange} className="btn btn-info form-control">Adopt</button>
    } else{
      adopt = <button onClick={this.deleteOwner} className="btn btn-danger form-control">UnAdopt</button>
    }
    if(this.state.adoptMode){
      let options = this.state.owners.map((owner, index)=>{
        return <option key={index} value={owner._id}>{owner.name}</option>
      })
      adoptForm = (
        <div>
          <FormControl componentClass="select" onChange={this._ownerChange}>
            <option>Select Owner</option>
            {options}
          </FormControl>
          <button onClick={this._adoptPet} className="btn btn-success form-control">Add Owner</button>
        </div>
      )
    } else {
      if(!owner){
        adoptForm = (<div></div>)
      }else{
        adoptForm = (<h1>Owner: {owner.name}</h1>)
      }
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
          {adoptForm}
        </div>
      </div>
    )
  }

}
