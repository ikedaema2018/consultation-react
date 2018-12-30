import React, { Component } from 'react';
import RegisterInput from './RegisterForm.js'
import AppHeader from './AppHeader.js'
import RegisterTitle from './RegisterTitle.js'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={"App"}>
        <AppHeader />
        <RegisterTitle />
        <RegisterInput />
      </div>
    );
  }
}

export default App;
