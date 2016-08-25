import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Pet extends Component {
  render(){
    let {name, image, _id} = this.props.petInfo
    return(
        <div className="col-xs-9">
          <h1>{name}</h1>
            <Link to={`/pet/${_id}`} className="thumbnail">
            <img src={image} />
            </Link>
        </div>
    )
  }
}
