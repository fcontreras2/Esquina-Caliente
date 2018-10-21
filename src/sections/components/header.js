import React , { Fragment } from 'react';
import { Link } from "react-router-dom";
import { MENU_BREAKFAST, MENU_REST } from '../../store/menu/model';

import { Navbar, Button, ButtonGroup, Nav,NavDropdown } from 'react-bootstrap';
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
      <Link to="/"><img src="/assets/images/logo.png"/></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/">Menú</Link>
        <Link to="/orders">Ordenes</Link>
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
              variant={`${props.menuActive == MENU_BREAKFAST ? 'primary' : 'default'}`}
              onClick={props.changeNavMenu}>Desayuno</Button>
            <Button size="sm"
              index={MENU_REST}
              variant={`${props.menuActive == MENU_REST ? 'primary' : 'default'}`}
              onClick={props.changeNavMenu}>Almuerzo</Button>
          </ButtonGroup>
        ) :
        (
          <ButtonGroup className={props.classes.buttons}>

          <Button size="sm"
            variant={`${props.menuActive == 1  ? 'primary' : 'default'}`}
            onClick={props.changeNavOrders}>Pendientes</Button>
          <Button size="sm"
            variant={`${props.menuActive == 0 ? 'primary' : 'default'}`}
            onClick={props.changeNavOrders}>Historial</Button>
          </ButtonGroup>
        )
      }
  </div>
  </Fragment>
)

export default injectSheet(styles)(Header)
