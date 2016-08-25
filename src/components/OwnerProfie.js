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
    OwnerStore.startlistening(this._onChange)
  }
  componentWillUnmount(){
    OwnerStore.stopListening(this._onChange)
  }
  _onChange(){
    this.setState({owners: OwnerStore.getAll()})
  }
  render(){
    let ownerProfiles
    if(this.state.owners.length){
      ownerProfiles = this.state.owners.map((owner, index) =>{
        return (
          <tr key={index}>
            <td>{owner.name}</td>
            <td>{owner.email}</td>
            <td><button className="btn btn-danger" onClick={this.deleteProfile}><i className="fa fa-trash"></i></button></td>
          </tr>
        )
      })
    }
    return(
      <div>
        <table className="table">
        <thead>
          <th>
            <td>Name</td>
            <td>Email</td>
            <td>Delete Profile</td>
          </th>
        </thead>
        <tbody>
          {ownerProfiles}
        </tbody>
        </table>

      </div>
    )
  }

}
