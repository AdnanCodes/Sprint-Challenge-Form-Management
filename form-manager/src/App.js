import React from "react";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        Welcome to Form Manager <Form />
      </div>
    );
  }
}

export default App;
