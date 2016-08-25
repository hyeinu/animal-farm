import React, { Component } from 'react';
import { Button, FormControl } from 'react-bootstrap'
import  ClientActions  from '../actions/ClientActions'

export default class NewOwner extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this._nameChange = this._nameChange.bind(this)
    this._emailChange = this._emailChange.bind(this)
    this._addOwner = this._addOwner.bind(this)
  }
  _nameChange(e){
    this.setState({name: e.target.value})
  }
  _emailChange(e){
    this.setState({email: e.target.value})
  }
  _addOwner(e){
    e.preventDefault()
    let newOwner = this.state;
    ClientActions.addOwner(newOwner)
    this.setState({
      name: '',
      email: ''
    })
  }
  render(){
    return(
      <form>
        <FormControl onChange={this._nameChange} value={this.state.name} type="text" placeholder="Name" required/>
        <FormControl onChange={this._emailChange} value={this.state.email} type="text" placeholder="Email" required/>
        <Button className="btn btn-success form-control" onClick={this._addOwner}>Add</Button>
      </form>
    )
  }
}
