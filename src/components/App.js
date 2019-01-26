import React, { Component } from 'react';
import RegisterInfos from '../containers/register_infos.js'
import Login from '../containers/login.js'
import AppHeader from '../containers/app_header.js'
import TopPage from '../containers/top_page.js'
import WorryPage from '../containers/worry_page.js'
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className={"App"}>
        <AppHeader />
        <Switch>
          <Route path={"/login"} component={Login}></Route>
          <Route path={"/register"} component={RegisterInfos}/>
          <Route path={"/worry/:id"} component={WorryPage}/>
          <Route path={"/"} component={TopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
