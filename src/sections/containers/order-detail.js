import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem
} from '../../store/menu/actions';
import { Table } from 'react-bootstrap';

import Layout from '../components/order-detail-layout';
import OrderDetailCustomer from '../components/order-detail-customer';
import OrderDetailItem from '../containers/order-detail-item';

class OrderDetail extends Component {

  render() {

    return (
      <Layout
        customer={
          <OrderDetailCustomer
            customer={this.props.customer}
            page={this.props.page}
            total={this.props.total}
          />
        }
      >
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>-</th>
              <th>Descripción</th>
              <th>Total</th>
              <th style={{textAlign:'center'}}>#</th>
            </tr>
          </thead>
          <tbody>
          {
            Object.values(this.props.items).map((item, key) =>
              <OrderDetailItem
                index={item.id}
                key={key}
              />
            )
          }
          </tbody>
        </Table>
      </Layout>
    )
  }
}


const mapStateToProps = state => {

  let typeModal = state.modal.type !== 'history' ? state.modal.type : 'orders';
  return {
    customer: state.modal.customer,
    items: state.modal.items,
    page: typeModal,
    total: state[typeModal].total
  }
}

const mapDispatchToProps = { addItem, removeItem }

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail);
