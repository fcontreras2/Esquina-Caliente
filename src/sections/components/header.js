import React , { Fragment } from 'react';
import { Link } from "react-router-dom";

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

const Header = ({classes, page}) => (
  <Fragment>
  <Navbar className={classes.navbar} bg="light" expand="lg" >
    <Navbar.Brand href="#home">
      <img src="/assets/images/logo.png"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/"><Nav.Link href="/">Menú</Nav.Link></Link>
        <Link to="/orders"><Nav.Link href="/orders">Ordenes</Nav.Link></Link>
        <Nav.Link href="#pricing">Cerrar sessión</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  <div className={classes.containerButtons}>
      {
        page !== "orders" ?
        (
          <ButtonGroup className={classes.buttons}>
            <Button size="sm">Desayuno</Button>
            <Button size="sm">Almuerzo</Button>
          </ButtonGroup>
        ) :
        (
          <ButtonGroup className={classes.buttons}>

          <Button size="sm">Pendientes</Button>
          <Button size="sm">Historial</Button>
          </ButtonGroup>
        )
      }
  </div>
  </Fragment>
)

export default injectSheet(styles)(Header)
