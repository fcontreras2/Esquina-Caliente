import React from 'react';
import injectSheet from 'react-jss';
import {
  Row,
  Col,
  ListGroup
} from 'react-bootstrap';

const styles = {

}

const OrderList = ({classes}) => (
  <Col xs={12}>
    <ListGroup>
      <ListGroup.Item>
        <Row>
          <Col xs={2}>
            #1000
          </Col>
          <Col xs={7}>

            <h3>
              Freddy Contreras 
              <span className="pull-right">300 Soles </span>
            </h3>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  </Col>
)

export default injectSheet(styles)(OrderList);
