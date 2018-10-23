import React from 'react';
import {
  ListGroup,
  Button,
  ButtonGroup,
  Col,
  Row,
} from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    padding: '4px'
  },
  image: {
    width: 50,
    height: 50
  }
}

const OrderDetailItem = props => (
  <tr>
    <td width="5%">
      <img
        className={props.classes.image}
        src={`/assets/images/${props.image}`}
        alt={props.title}/>
    </td>
    <td>
      <h5 className={props.classes.title}> {props.title} /{props.price} </h5>
    </td>
    <td>
      <h5>{props.price * props.count}</h5>
    </td>
    <td  align="center">
    <ButtonGroup>
      {
        props.count > 0 && props.page ==='menu' ?
          <Button onClick={props.removeItem} className="btn-danger">-</Button> : null
      }
      <Button variant="default">{props.count}</Button>
      {
        props.page ==='menu' &&
        <Button onClick={props.addItem}>+</Button>

      }
    </ButtonGroup>
    </td>
  </tr>
)

export default injectSheet(styles)(OrderDetailItem);
