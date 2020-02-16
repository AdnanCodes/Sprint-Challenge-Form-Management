import React from "react";
import axios from "axios";
import Form from "./components/Form";
import "./App.css";
import Display from "./components/Display";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      secretData: [],
      showData: false
    };
  }
  onClick = () => {
    this.setState({ showData: true });
  };
  componentDidMount() {
    this.fetchUserData();
  }
  fetchUserData = () => {
    axios
      .get(`http://localhost:5000/api/restricted/data`)
      .then(response => {
        this.setState({ secretData: response.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        Welcome to Form Manager <Form />
        <Display
          dataStatus={this.state.showData}
          btn={this.onClick}
          data={this.state.secretData}
        />
      </div>
    );
  }
}

export default App;
