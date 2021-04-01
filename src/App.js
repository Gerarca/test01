import React, { Component } from 'react';
import './App.css';
import Header from './components/header/index';
import Content from './components/main/index';
import Views from './components/views/views';

class App extends Component {

state = {
        GoOn: false
      }

continuar = () => {
  this.setState({ GoOn: true });
  console.log("click cintinuar", this.state.GoOn);
}

  render(){
    return (
      <div className="App">
        <Header />
        {
          !this.state.GoOn ? <Content continuar={this.continuar} />
          : <Views />
        }
      </div>
    );
  }
}

export default App;
