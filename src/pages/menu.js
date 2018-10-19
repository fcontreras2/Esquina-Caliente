import React, {Component} from 'react';
import Layout from '../sections/components/main-layout';
import CardItem from '../sections/components/card-item';
import ModalConfirmation from '../sections/containers/modal-confirmation';

class Menu extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5,1, 2, 3, 4, 5,1, 2, 3, 4, 5];

    return (
      <Layout>
        {
          numbers.map((number) => (
            <CardItem/>
          ))
        }
      </Layout>
    );
  }
}

export default Menu;
