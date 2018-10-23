import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { fetchOrders, changeNavMenu } from '../store/orders/actions';
import { openModalOrders } from '../store/orders/actions';

import Layout from '../sections/components/main-layout';
import OrderListItem from '../sections/components/order-list-item';

class Orders extends Component {

  componentDidMount() {
      this.props.fetchOrders();
  }

  handleChangeNav = event => {
    // Evitando cambio de menu
    if (event.target.getAttribute('index') !== this.props.menuActive)
      this.props.changeNavMenu();
  }

  handleOpenModal = (keyItem, customer) => {
    this.props.openModalOrders({
      order:this.props.items[keyItem],
      id: keyItem,
      customer 
    })
  }

  render() {
    return(
      <Layout
        menuActive={this.props.menuActive}
        changeNav={this.handleChangeNav}
        page={'orders'}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Cliente</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(this.props.items).map((item, key) => (
                <OrderListItem
                  key={key}
                  {...item}
                  toggleModalConfirmation={() => this.handleOpenModal(item.id, item.customer)}
                />
              ))
            }
          </tbody>
        </Table>
      </Layout>
    )
  }
}

const mapStateToProps = state => (
  {
    menuActive: state.orders.menuActive,
    items: state.orders.list[state.orders.menuActive] ?
      state.orders.list[state.orders.menuActive] : [],
    orders: state.orders.ordes
  }
)

const mapDispatchToProps = {
   fetchOrders,
   changeNavMenu,
   openModalOrders
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
