import React, { Component } from 'react';
import RegisterInfos from '../containers/register_infos.js'
import Login from '../containers/login.js'
import AppHeader from '../containers/app_header.js'
import RegisterTitle from './RegisterTitle.js'
import { Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className={"App"}>
        <AppHeader />
        <RegisterTitle />
        <Switch>
          <Route path={"/login"} component={Login}></Route>
          <Route path="/" component={RegisterInfos}/>
        </Switch>
      </div>
    );
  }
}

export default App;
