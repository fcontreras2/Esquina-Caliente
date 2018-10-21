import React, {Component} from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  removeItem
} from '../../store/menu/actions';

import Item from '../components/item';

class CardItem extends Component {

  addItem = (keyItem) => {
    this.props.addItem({
      keyItem: this.props.index
    })
  }

  removeItem = (keyItem) => {
    this.props.removeItem({
      keyItem: this.props.index
    })
  }

  render() {
    console.log(this.props.item)
    return (
      <Item
        count={this.props.count}
        addItem={this.addItem}
        removeItem={this.removeItem}
        {...this.props.item}
      />
    );
  }
}

const mapStateToProps = (state,props) => {
  return {
    index: props.index,
    count: state.menu.orders[props.index] ?
      state.menu.orders[props.index].count : 0,
    item: state.menu.menu[state.menu.menuActive][props.index],
    loading: state.menu.loading
  }
}

const mapDispatchToProps = {
  addItem,
  removeItem
}

export default connect(mapStateToProps,mapDispatchToProps )(CardItem);
