import React, { Component } from 'react';
import RegisterInput from './RegisterForm.js'
import AppHeader from './AppHeader.js'

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={"App"}>
        <AppHeader />
        <RegisterInput />
      </div>
    );
  }
}

export default App;
