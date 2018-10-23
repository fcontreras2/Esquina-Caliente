import React from 'react';
import {
  Row,
  Col,
  Form } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { required, Input } from '../../utils/form';

const OrderDetailCustomer = ({ page, total,customer, reset, pristine, submitting, valid }) => (
  <Row>
    <Col xs={{span: 5, offset:1}}>
      {
        page !== 'orders' ?
        <Form
          noValidate
          validated={false}
        >
        {valid}
          <Field
              label="Nombre del cliente"
              name="name"
              type="title"
              component={Input}
              id="name"
              placeholder="Freddy Contreras"
              validate={[required]}
          />
        </Form>
      : <h5> Cliente: {customer} </h5>
    }
  </Col>
  <Col xs={5}>
    <h4 className="pull-right">Total: {total}</h4>
  </Col>
  </Row>
)

export default reduxForm({
  form: 'form-customer'
})(OrderDetailCustomer);
