import React, {Component} from 'react';
import { connect } from 'react-redux';

import Layout from '../sections/components/main-layout';
import OrderList from '../sections/components/order-list';

class Orders extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5];
    return(
      <Layout page={'orders'}>
        {
          Object.values(this.props.items).map((item, key) => (
            <OrderList key={key} {...item}/>
          ))
        }
      </Layout>
    )
  }
}

const mapStateToProps = state => (
  {
    items: state.orders.orders
  }
)

export default connect(mapStateToProps)(Orders);
