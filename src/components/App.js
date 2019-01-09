import React, { Component } from 'react';
import RegisterForm from './RegisterForm.js'
import AppHeader from './AppHeader.js'
import RegisterTitle from './RegisterTitle.js'
import { Switch, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={"App"}>
        <AppHeader />
        <RegisterTitle />
        <Switch>
          <Route path="/" component={RegisterForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
