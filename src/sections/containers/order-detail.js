import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import {
  addItem,
  removeItem
} from '../../store/menu/actions';

import { orderConfirmation } from '../../store/modal/actions';

import Layout from '../components/order-detail-layout';
import OrderDetailCustomer from '../components/order-detail-customer';
import OrderDetailItem from '../containers/order-detail-item';

class OrderDetail extends Component {

  render() {

    return (
      <Layout
        customer={
          <OrderDetailCustomer
            page={this.props.type}
            total={this.props.total}
          />
        }
      >
        {
          Object.values(this.props.items).map((item, key) =>
            <OrderDetailItem
              index={item.id}
              key={key}
            />
          )
        }
      </Layout>
    )
  }
}


const mapStateToProps = state => (
  {
    items: state.modal.items,
    page: state.modal.type,
    total: state[state.modal.type].total
  }
)

const mapDispatchToProps = { addItem, removeItem }

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail);
