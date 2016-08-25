import React, { Component } from 'react';
import { Modal, Button, FormControl, ControlLabel } from 'react-bootstrap'
import NewOwner from './NewOwner'

export default class OwnerModal extends Component {
  render(){
    return(
      <Modal show={this.props.showOwnModal} onHide={this.props.closeOwnModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewOwner />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.closeOwnModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
