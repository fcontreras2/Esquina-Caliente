import React from 'react';
import injectSheet from 'react-jss';
import {
  Row,
  Col,
  ListGroup
} from 'react-bootstrap';

const styles = {

}

const OrderList = props => (
  <Col xs={12}>
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col xs={2}>
            #{props.id}
          </Col>
          <Col xs={7}>
            <h3>
              {props.customer}
              <span className="pull-right">{props.total}</span>
            </h3>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  </Col>
)

export default injectSheet(styles)(OrderList);
