import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  fetchMenu,
  changeNavMenu,
  addItem,
  removeItem
} from '../store/menu/actions';

import { openModal } from '../store/modal/actions';

import Layout from '../sections/components/main-layout';
import CardItem from '../sections/containers/card-item';
import FooterConfirmation from '../sections/components/footer-confirmation';

class Menu extends Component {
  componentDidMount = () => {
    this.props.fetchMenu()
  }

  handleChangeNavMenu = event => {
    // Evitando cambio de menu
    if (event.target.getAttribute('index') !== this.props.menuActive)
      this.props.changeNavMenu();
  }

  handleOpenModal = () => {
    this.props.openModal({
      type:'menu',
      items:{...this.props.orders}
    })
  }

  render() {
    return (
      <Layout
        menuActive={this.props.menuActive}
        handleChangeNavMenu={this.handleChangeNavMenu}
      >
        {
          this.props.menu.map((item) => (
            <CardItem
              key={item}
              index={item}
            />
          ))
        }
        <FooterConfirmation
          toggleModalConfirmation={this.handleOpenModal}
          total={this.props.total}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => (
  {
    menuActive: state.menu.menuActive,
    menu: state.menu.result[state.menu.menuActive],
    loading: state.menu.loading,
    orders: state.menu.orders,
    total: state.menu.total
  }
)

const mapDispatchToProps = {
  fetchMenu,
  changeNavMenu,
  addItem,
  removeItem,
  openModal
}

export default connect(mapStateToProps,mapDispatchToProps )(Menu);
