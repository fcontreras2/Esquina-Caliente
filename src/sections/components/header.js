import React , { Fragment } from 'react';
import { Link } from "react-router-dom";
import { MENU_BREAKFAST, MENU_REST } from '../../store/menu/model';
import { MENU_PENDING , MENU_HISTORIAL } from '../../store/orders/model';

import { Navbar, Button, ButtonGroup, Nav } from 'react-bootstrap';
import injectSheet from 'react-jss';

const styles = {
  navbar: {
    position: 'fixed !important',
    backgroundColor: 'white',
    width:'100%',
    zIndex: 1000
  },
  containerButtons: {
    position: 'fixed',
    width: '100%',
    left: 0,
    zIndex: 1000,
    top: 12
  },
  buttons: {
    position: 'relative',
    textAlign:'center',
    fontSize: 12
  }
}

const Header = props => (
  <Fragment>
  <Navbar className={props.classes.navbar} bg="light" expand="lg" >
    <Navbar.Brand >
      <Link to="/"><img src="/assets/images/logo.png" alt="Esquina Caliente"/></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/" className="nav-link">Menú</Link>
        <Link to="/orders" className="nav-link">Pedidos</Link>
        <Nav.Link href="#pricing">Cerrar sessión</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <div className={props.classes.containerButtons}>
      {
        props.page !== "orders" ?
        (
          <ButtonGroup className={props.classes.buttons}>
            <Button size="sm"
              index={MENU_BREAKFAST}
              variant={`${props.menuActive === MENU_BREAKFAST ? 'primary' : 'default'}`}
              onClick={props.changeNav}>Desayuno</Button>
            <Button size="sm"
              index={MENU_REST}
              variant={`${props.menuActive === MENU_REST ? 'primary' : 'default'}`}
              onClick={props.changeNav}>Almuerzo</Button>
          </ButtonGroup>
        ) :
        (
          <ButtonGroup className={props.classes.buttons}>

          <Button size="sm"
            index={MENU_PENDING}
            variant={`${props.menuActive === MENU_PENDING  ? 'primary' : 'default'}`}
            onClick={props.changeNav}>Pendientes</Button>
          <Button size="sm"
            index={MENU_HISTORIAL}
            variant={`${props.menuActive === MENU_HISTORIAL ? 'primary' : 'default'}`}
            onClick={props.changeNav}>Historial</Button>
          </ButtonGroup>
        )
      }
  </div>
  </Fragment>
)

export default injectSheet(styles)(Header)
