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
  <ListGroup.Item className={props.classes.container}>
    <Row>
      <Col xs={2}>
        <img
          className={props.classes.image}
          src={`/assets/images/${props.image}`}
          alt={props.title}/>
      </Col>
      <Col xs={5}>
      <h5 className={props.classes.title}> {props.title} </h5>
      <h5 className={props.classes.title}> {props.price} / {props.price * props.count}</h5>
      </Col>
      <Col xs={5}>
      <ButtonGroup className="pull-right">
        {
          props.count > 0 ?
            <Button onClick={props.removeItem} className="btn-danger">-</Button> : null
        }
        <Button variant="default">{props.count}</Button>
        <Button onClick={props.addItem}>+</Button>
      </ButtonGroup>
      </Col>
    </Row>
  </ListGroup.Item>
)

export default injectSheet(styles)(OrderDetailItem);
