import React, { Component } from 'react';
import { Link } from 'react-router'
import Modal from './Modal'
import OwnerModal from './OwnerModal'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      showOwnModal: false
    }

    this._showModal = this._showModal.bind(this)
    this._hideModal = this._hideModal.bind(this)
    this._showOwnModal = this._showOwnModal.bind(this)
    this._hideOwnModal = this._hideOwnModal.bind(this)
  }
  _showModal(){
    this.setState({showModal:true})
  }
  _hideModal(){
    this.setState({showModal:false})
  }
  _showOwnModal(){
    this.setState({showOwnModal:true})
  }
  _hideOwnModal(){
    this.setState({showOwnModal:false})
  }
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
                <li><Link to="/search/owners">Owner</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pet Types <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/search/cat">Cat</Link></li>
                  <li><Link to="/search/dog">Dog</Link></li>
                  <li><Link to="/search/rabbit">Rabbit</Link></li>
                  <li><Link to="/search/bird">Bird</Link></li>
                  <li role="separator" className="divider"></li>
                  <li><Link to="/search/pet">All Pets</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#" onClick={this._showOwnModal}>Register</a></li>
              <li><a href="#" onClick={this._showModal}>Add Pet</a></li>
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
        <Modal closeModal={this._hideModal} showModal={this.state.showModal}/>
        <OwnerModal closeOwnModal={this._hideOwnModal} showOwnModal={this.state.showOwnModal}/>
      </div>
    )
  }
}
