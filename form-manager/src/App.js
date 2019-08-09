import React from "react";
import axios from "axios";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      secretData: []
    };
  }
  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(response => {
        this.setState({ secretData: response.data });
        console.log(this.state.secretData);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        Welcome to Form Manager <Form />
      </div>
    );
  }
}

export default App;
