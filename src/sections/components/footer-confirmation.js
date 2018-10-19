import React from 'react';
import { Button } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    position: 'fixed',
    width: '100%',
    height: '10vh',
    textAlign: 'center',
    padding: 10,
    bottom: 0,
    backgroundColor: '#f2CD5c',
    zIndex: 1000
  }
}

const FooterConfirmation = ({classes}) => (
  <div className={classes.container}>
    <Button> Procesar /  1000S</Button>
  </div>
)

export default injectSheet(styles)(FooterConfirmation);
