import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  fetchMenu,
  changeNavMenu,
  addItem,
  removeItem
} from '../store/menu/actions';

import Layout from '../sections/components/main-layout';
import CardItem from '../sections/containers/card-item';
import ModalConfirmation from '../sections/containers/modal-confirmation';

class Menu extends Component {
  componentDidMount = () => {
    this.props.fetchMenu()
  }

  handleChangeNavMenu = event => {
    // Evitando cambio de menu
    if (event.target.getAttribute('index') != this.props.menuActive)
      this.props.changeNavMenu();
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
      </Layout>
    );
  }
}

const mapStateToProps = state => (
  {
    menuActive: state.menu.menuActive,
    menu: state.menu.result[state.menu.menuActive],
    loading: state.menu.loading
  }
)

const mapDispatchToProps = {
  fetchMenu,
  changeNavMenu,
  addItem,
  removeItem
}

export default connect(mapStateToProps,mapDispatchToProps )(Menu);
