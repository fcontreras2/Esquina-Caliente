import React, { Fragment } from 'react';
import {
  ListGroup,
  Button,
  ButtonGroup,
  Col,
  Row,
  Form
} from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    padding: '4px'
  },
  image: {
    width: 50,
    height: 50
  },
  title: {

  }
}

const OrderDetail = ({classes, page }) => (
  <Fragment>
    <ListGroup>
      <ListGroup.Item className={classes.container}>
        <Row>
          <Col xs={2}>
            <img
              className={classes.image}
              src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="image adjas"/>
          </Col>
          <Col xs={5}>
          <h5 className={classes.title}> asdasdas </h5>
          <h5 className={classes.title}> 500S</h5>
          </Col>
          <Col xs={5}>
          <ButtonGroup className="pull-right">
            <Button className="btn-danger">-</Button>
            <Button>20</Button>
            <Button>+</Button>
          </ButtonGroup>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
    <Row>
      <Col xs={6}>
        {
          page != 'orders' ?
            <Form.Group
              controlId="formBasicText"
            >
              <Form.Label > Nombre del cliente </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
              />
              <Form.Control.Feedback />
            </Form.Group>


        : <h3> Freddy Contreras </h3>
      }
    </Col>
    <Col xs={6}>
      <h3 className="pull-right">Total: 200Soles</h3>
    </Col>
    </Row>
  </Fragment>
)

export default injectSheet(styles)(OrderDetail);
