import React from 'react';
import ReactDOM from 'react-dom';

//import App from "./App";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kulandaivel',
      city: 'Tirunelveli',
      college: 'MSU',
    };
  }

  changeCollege = () => {
    this.setState({ city: 'Chennai' });
  };

  render() {
    return (
      <div>
        <h1> This is first App</h1>
        <p>
          My name is {this.props.name} and studied at {this.state.college} from{' '}
          {this.state.city}.
        </p>
        <button type="button" onClick={this.changeCollege}>
          Update
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App name="KK" />, document.getElementById('root'));
