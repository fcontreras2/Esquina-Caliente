import React, { Fragment }from 'react';
import Header from './header';
import { Row } from 'react-bootstrap';
import injectSheet from 'react-jss';
import ModalConfirmation from '../containers/modal-confirmation';

const styles = {
  container: {
    paddingTop: '10vh',
    paddingBottom: '10vh'
  }
}

const MainLayout = (props) => (
  <Fragment>
    <Header
      page={props.page}
      menuActive={props.menuActive}
      changeNavMenu={props.handleChangeNavMenu}
      changeNavOrders={props.changeNavOrders}
    />
    <Row className={props.classes.container}>
      {props.children}
    </Row>
    <ModalConfirmation page={props.page}/>
  </Fragment>
)

export default injectSheet(styles)(MainLayout);
