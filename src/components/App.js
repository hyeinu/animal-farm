import React, { Component } from 'react';
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    let term = ''
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <a className="navbar-brand glyphicon glyphicon-heart-empty"></a>
            </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search/owners">Owner Profiles</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pet Types <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/search/cats">Cat</a></li>
                  <li><a href="/search/dogs">Dog</a></li>
                  <li><a href="/search/rabbits">Rabbit</a></li>
                  <li><a href="/search/birds">Bird</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="/search/pets">All Pets</a></li>
                </ul>
              </li>
            </ul>
          </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="text-center">Animal Farm</h1>
            <div className="row">
              {this.props.children}
            </div>
        </div>
      </div>
    )
  }
}
