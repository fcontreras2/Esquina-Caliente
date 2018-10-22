import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Alert } from 'react-bootstrap';
import { closeModal } from '../../store/modal/actions';
import { confirmationOrder } from '../../store/menu/actions';

import OrderDetail from '../containers/order-detail';

class ModalConfirmation extends Component {
  state = {
    show: false
  };

  handleSubmit = () => {
    this.props.confirmationOrder()
  }

  closeModal = () => {
    this.props.closeModal()
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.closeModal} size="large">
        <Modal.Header>
          <Modal.Title>Confirmacion Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            !this.props.message ?
              <OrderDetail page={this.props.page}/>
              :
              <Alert variant='success'>
                {this.props.message}
              </Alert>
          }
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center'}}>
          {
            !this.props.message ?
              <Button
                className="col-7"
                onClick={this.handleSubmit}
                disabled={this.props.formInvalid || this.props.total === 0}
                variant="primary"
              > Confirmar</Button>
            :
              <Button
                className="col-7"
                onClick={this.closeModal}
                variant="info"
              > Nuevo Pedido</Button>
          }
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.modal.active,
    total: state[state.modal.type] ? state[state.modal.type].total : 0,
    formInvalid: state.form['form-customer'] && state.form['form-customer'].syncErrors,
    message: state.modal.message
  }
}

export default connect(mapStateToProps,{closeModal, confirmationOrder})(ModalConfirmation);
