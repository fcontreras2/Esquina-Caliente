import React, { Fragment } from 'react';
import {
  ListGroup,
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

const OrderDetail = ({classes, customer, children }) => (
  <Fragment>
    <ListGroup>
      {children}
    </ListGroup>
    {customer}
  </Fragment>
)

export default injectSheet(styles)(OrderDetail);
