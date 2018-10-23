import React from 'react';
import {
  Row,
  Col,
  Form } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { required, Input } from '../../utils/form';

const OrderDetailCustomer = ({ page, total,customer, reset, pristine, submitting, valid }) => (
  <Row>
    <Col xs={6}>
      {
        page !== 'orders' ?
        <Form
          noValidate
        >

          <Field
              label="Nombre del cliente"
              name="name"
              type="title"
              component={Input}
              id="name"
              placeholder="benedict@alligator.io"
              validate={[required]}
          />
        </Form>
      : <h3> {customer} </h3>
    }
  </Col>
  <Col xs={6}>
    <h3 className="pull-right">Total: {total}</h3>
  </Col>
  </Row>
)

export default reduxForm({
  form: 'form-customer'
})(OrderDetailCustomer);
