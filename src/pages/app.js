import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './login';
import Menu from './menu';
import Orders from './orders';

class App extends Component {

  render() {
    return(
      <Router>
        <Fragment>
          <Route exact path="/" component={Menu} />
          <Route path="/menu" component={Menu}/>
          <Route path="/orders" component={Orders}/>
        </Fragment>
      </Router>
    )
  }
}

export default App;
