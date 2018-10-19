import React, {Component} from 'react';
import Layout from '../sections/components/main-layout';
import OrderList from '../sections/components/order-list';

class Orders extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5];
    return(
      <Layout page={'orders'}>
        {
          numbers.map((number, key) => (
            <OrderList key={key}/>
          ))
        }
      </Layout>
    )
  }
}

export default Orders;
