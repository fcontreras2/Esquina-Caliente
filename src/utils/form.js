import React from 'react';
import { Form } from 'react-bootstrap';

export const required = value => (value ? undefined : 'Campo obligatorio!');

export const Input = ({
  input,
  label,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Group controlId={`form-group-${id}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...input} placeholder={placeholder} type={type} id={id}
      />
      {touched && error &&
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      }
    </Form.Group>
  );
};
