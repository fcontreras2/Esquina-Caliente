import React from 'react';
import { Col, Button, ButtonGroup, Badge } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    height: '30vh',
    backgroundColor: 'blue',
    marginBottom: 10
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 0,
    width:'100%'
  },
  button: {
    width: '50%'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  count: {
    fontSize: 16,
    background: 'rgba(0,0,0,0.5)',
    padding: 10,
    position: 'absolute',
    color:' white'
  }
}

const CardItem = ({classes}) => {

  return (
    <Col xs={12} md={4} className={classes.container}
      style={{
        backgroundSize: 'cover',
        backgroundImage:`url('https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}>
      <h3 className={classes.count}>42</h3>
      <ButtonGroup className={classes.buttonGroup}>
        <p className={classes.title}>asdas</p>
        <Button className={classes.button}>AGREGAR</Button>
        <Button className={[classes.button,'btn-danger']} >ELIMINAR</Button>
      </ButtonGroup>
    </Col>
  )
}

export default injectSheet(styles)(CardItem);
