import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}/>
      </div>
    );
  }
}

export default App;
