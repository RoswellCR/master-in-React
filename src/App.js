import React, {Component} from 'react';
//import './global.css'
// const URL= 'https://jsonplaceholder.typicode.com/users/
import PubSub from 'pubsub-js';

const boxStyles = {
  padding: '0.5em',
  margin: '0.5em',
  border: '1px solid gray',
  borderRadius: '0.3em',
  textAlign: 'center'
}

class Bisnieto extends Component {
  state = {
    message: "***",
  };
  handleClick = () => {
    PubSub.publish("saludo", "Hola desde el bisnieto");
  };
  componentDidMount() {
    PubSub.subscribe("otro evento", (e, data) => {
      this.setState({
        message: data.title,
      });
    });
  }
  render() {
    return (
      <div style={boxStyles}>
        {this.state.message}
        <button onClick={this.handleClick}>Nieto</button>
      </div>
    );
  }
}

class Nieto extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <Bisnieto />
      </div>
    );
  }
}
class Hijo extends Component {
  render() {
    return (
      <div style={boxStyles}>
        <Nieto />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return <h1>Observer Pattern(Cualquiera)</h1>;
  }
}
class App extends Component {
  componentDidMount() {
    PubSub.subscribe("saludo", (e, data) => {
      alert(data);
    });
  }
  handleClick = () => {
    PubSub.publish("otro evento", {
      title: "Hola desde <App/>",
    });
  };
  componentWillUnmount() {
    PubSub.unsubscribe("otro evento");
  }

  render() {
    return (
      <div style={boxStyles}>
        <button onClick={this.handleClick}>Padre</button>
        <Header />
        <Hijo />
      </div>
    );
  }
}

export default App;
