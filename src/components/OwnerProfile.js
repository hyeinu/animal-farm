import React, { Component } from 'react';
import  ClientActions  from '../actions/ClientActions'
import  OwnerStore  from '../stores/OwnerStore'
import NewOwner from './NewOwner'

export default class OwnerProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      owners: ClientActions.getOwners()
    }
    this._onChange = this._onChange.bind(this)
  }
  componentDidMount(){
    OwnerStore.startListening(this._onChange)
  }
  componentWillUnmount(){
    OwnerStore.stopListening(this._onChange)
  }
  _onChange(){
    this.setState({owners: OwnerStore.getAll()})
  }
  deleteProfile(id){
    ClientActions.deleteProfile(id);
  }
  render(){
    let ownerProfiles
    if(this.state.owners.length){
      ownerProfiles = this.state.owners.map((owner, index) =>{
        return (
          <tr key={index}>
            <td>{owner.name}</td>
            <td>{owner.email}</td>
            <td><button className="btn btn-danger" onClick={this.deleteProfile.bind(null, owner._id)}><i className="fa fa-trash"></i></button></td>
          </tr>
        )
      })
    } else {
      ownerProfiles = (<tr></tr>)
    }
    return(
      <div>
      <div className="col-xs-3">
      <br />
        <NewOwner />
      </div>
      <div className="col-xs-9">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete Profile</th>
            </tr>
          </thead>
          <tbody>
          {ownerProfiles}
          </tbody>
        </table>

      </div>
      </div>
    )
  }

}
