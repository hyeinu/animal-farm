import React, { Component } from 'react';
import { Link } from 'react-router';
import  ClientActions  from '../actions/ClientActions'
import  PetStore  from '../stores/PetStore'
import  PetRow  from './PetRow'

//localhost:8000/search/:type

export default class SearchPets extends Component {
  constructor(props){
    super(props);

    this.state ={
      pets: ClientActions.getPets(this.props.params.type)
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
    ClientActions.getPets(nextProps.params.type)
  }
  _onChange(){
    this.setState({pets: PetStore.getAll()})
  }
  render(){
    let type = this.props.params.type
    let petList

    if(this.state.pets){
      petList = this.state.pets.map((pet,index) => {
        return <PetRow key={index} petInfo={pet}/>
      })
    } else {
      petList = <tr><td>Loading ...</td></tr>
    }
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="col-xs-2">Name</th>
              <th className="col-xs-2">Type</th>
              <th className="col-xs-2">Age</th>
              <th className="col-xs-2">Gender</th>
              <th className="col-xs-3">Image</th>
              <th className="col-xs-2">More Info</th>
            </tr>
          </thead>
          <tbody>
            {petList}
          </tbody>
        </table>
      </div>
    )
  }
}
