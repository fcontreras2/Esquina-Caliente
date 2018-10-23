import React from 'react';
import injectSheet from 'react-jss';
import {
  Button
} from 'react-bootstrap';

const styles = {
  header: {
    backgroundColor: ''
  }
}

const OrderListItem = props => (
  <tr>
    <td width="10%">#{('00000'+ props.id).slice(2)}</td>
    <td width="50%">{props.customer}</td>
    <td width="15%">{props.total}</td>
    <td width="20%" align="center">
      <Button onClick={props.toggleModalConfirmation}>Confirmar</Button>
    </td>
  </tr>
)

export default injectSheet(styles)(OrderListItem);
