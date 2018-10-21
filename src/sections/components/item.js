import React, { Fragment } from 'react';
import { Col, Button, ButtonGroup, Badge } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  container: {
    height: '30vh',
    marginBottom: 10
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 0,
    width:'100%'
  },
  buttonLg: {
    width: '100% !important'
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
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  count: {
    fontSize: 16,
    background: 'rgba(0,0,0,0.5)',
    padding: 10,
    position: 'absolute',
    color:' white'
  }
}

const Item = (props) => {

  return (
    <Col xs={12} md={4} className={props.classes.container}
      style={{
        backgroundSize: 'cover',
        backgroundImage:`url('/assets/images/${props.image}')`}}>

        { (props.count && props.count > 0) ?
          <h3 className={props.classes.count}>{props.count}</h3> : null
        }

      <ButtonGroup className={props.classes.buttonGroup}>
        <p className={props.classes.title}>{props.title} (S./{props.price})</p>
        {
          (props.count && props.count > 0) ?
            <Fragment>
              <Button
                onClick={props.addItem}
                className={props.classes.button}>AGREGAR</Button>
              <Button
                onClick={props.removeItem}
                className={[props.classes.button,'btn-danger']} >ELIMINAR</Button>
            </Fragment>
            : <Button
              onClick={props.addItem}
              className={[props.classes.button,props.classes.buttonLg]}>AGREGAR</Button>
        }
      </ButtonGroup>
    </Col>
  )
}

export default injectSheet(styles)(Item);
