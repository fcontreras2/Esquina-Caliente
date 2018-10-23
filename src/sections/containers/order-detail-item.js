import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addItem,
  removeItem
} from '../../store/menu/actions';

import Item from '../components/order-detail-item';

class OrderDetailItem extends Component {

  state = {
      item: null
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    })
  }

  async handleAddItem() {
    await this.props.addItem({
      keyItem:this.props.index
    })
    let count = this.props.count;
    this.setState({
      item: {...this.state.item,count}
    })

  }

  async handleRemoveItem(){
    await this.props.removeItem({
      keyItem:this.props.index
    })
    let count = this.props.count ? this.props.count : 0;
    this.setState({
      item: {...this.state.item,count}
    })
  }

  render() {
    return (
      <Item
        {...this.state.item}
        addItem={() => this.handleAddItem()}
        removeItem={() => this.handleRemoveItem()}
        page={this.props.page}
      />
    )
  }
}

const mapStateToProps = (state, props) => {
  let typeModal = state.modal.type !== 'history' ? state.modal.type : 'orders';

  let item = state[typeModal].orders[props.index] ?
    state[typeModal].orders[props.index] : null
  return {
    item,
    page: typeModal,
    index: props.index,
    count: item ? item.count : 0
  }
}

const mapDispatchToProps = { addItem, removeItem }

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailItem);
