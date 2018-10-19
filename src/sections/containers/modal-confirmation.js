import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import OrderDetail from '../components/order-detail';

class ModalConfirmation extends Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose} bsSize="large">
          <Modal.Header>
            <Modal.Title>Confirmacion Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderDetail page={this.props.page}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalConfirmation;
