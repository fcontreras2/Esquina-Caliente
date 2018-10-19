import React, { Fragment }from 'react';
import Header from './header';
import FooterConfirmation from './footer-confirmation';
import { Row } from 'react-bootstrap';
import injectSheet from 'react-jss';
import ModalConfirmation from '../containers/modal-confirmation';

const styles = {
  container: {
    paddingTop: '10vh',
    paddingBottom: '10vh'
  }
}

const MainLayout = ({classes, children, page}) => (
  <Fragment>
    <Header page={page}/>
    <Row className={classes.container}>
      {children}
    </Row>
    {
      page != 'orders' ? <FooterConfirmation/> : null
    }
    <ModalConfirmation page={page}/>
  </Fragment>
)

export default injectSheet(styles)(MainLayout);
