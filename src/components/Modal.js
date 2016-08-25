import React, { Component } from 'react';
import { Modal, Button, FormControl, ControlLabel } from 'react-bootstrap'
import  ClientActions  from '../actions/ClientActions'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      age: undefined,
      gender: '',
      type: '',
      image: ''
    }
    this._nameChange = this._nameChange.bind(this)
    this._ageChange = this._ageChange.bind(this)
    this._typeChange = this._typeChange.bind(this)
    this._genderChange = this._genderChange.bind(this)
    this._imgChange = this._imgChange.bind(this)
    this._addAnimal = this._addAnimal.bind(this)
  }
  _nameChange(e){
    this.setState({name: e.target.value})
  }
  _ageChange(e){
    this.setState({age: e.target.value})
  }
  _typeChange(e){
    this.setState({type: e.target.value})
  }
  _genderChange(e){
    this.setState({gender: e.target.value})
  }
  _imgChange(e){
    this.setState({image: e.target.value})
  }
  _addAnimal(e){
    e.preventDefault()
    let newObj = this.state
    console.log('newObj:', newObj)
    ClientActions.addPet(newObj)
    this.setState({
      name: '',
      age: null,
      gender: '',
      type: '',
      image: ''
    })
    this.props.closeModal()
  }
  render(){
    return(
      <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Animal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group" onSubmit={this._addAnimal}>
          <FormControl onChange={this._nameChange} value={this.state.name} type="text" placeholder="Name" required/>
          <FormControl onChange={this._ageChange} value={this.state.age} type="number" placeholder="Age" required/>
          <FormControl componentClass="select" onChange={this._typeChange}>
              <option>Select Type...</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
          </FormControl>
          <FormControl componentClass="select" onChange={this._genderChange}>
              <option>Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
          </FormControl>
          <FormControl onChange={this._imgChange} value={this.state.image} type="text" placeholder="Image Url" />
          <img src={this.state.image} alt="" className="img-responsive img-rounded"/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-success" onClick={this._addAnimal}>Add</Button>
          <Button onClick={this.props.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
