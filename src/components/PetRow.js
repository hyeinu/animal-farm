import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Pet extends Component {
  render(){
    let {name, type, gender, age, image, _id, owner} = this.props.petInfo
    let genIcon
    let adoptBtn
    if (gender === 'female'){
      genIcon = <i className="fa fa-venus fa-2x"></i>
    } else {
      genIcon = <i className="fa fa-mars fa-2x"></i>
    }
    if(!owner){
      adoptBtn = <h3>Adopt me</h3>
    } else {
      adoptBtn = <h3>Adopted!</h3>
    }
    return(
      <tr>
        <td className="col-xs-2">{name}</td>
        <td className="col-xs-2">{type.toUpperCase()}</td>
        <td className="col-xs-1">{age}</td>
        <td className="col-xs-2">{genIcon}</td>
        <td className="col-xs-2">
          <img src={image} className="img-responsive img-rounded"/>
        </td>
        <td className="col-xs-2">{adoptBtn}</td>
        <td className="col-xs-2">
          <Link to={`/pet/${_id}`}>
            <button className="btn btn-primary">More Info</button>
          </Link>
        </td>
      </tr>
    )
  }
}
