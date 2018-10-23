import React from 'react';
import { Button } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    position: 'fixed',
    width: '100%',
    height: '10vh',
    opacity: 0,
    textAlign: 'center',
    padding: 10,
    bottom: 0,
    backgroundColor: 'buttonface',
    zIndex: 1000,
    transition: 'opacity 0.7s linear',
    '&.active': {
      opacity: 1
    }
  }
}

const FooterConfirmation = props => (
  <div className={props.classes.container + ` ${props.total > 0 ? 'active': ''}`}>
    {
      props.total > 0 ?
        <Button onClick={props.toggleModalConfirmation}> Procesar /  {props.total}</Button> : null
    }
  </div>
)

export default injectSheet(styles)(FooterConfirmation);
