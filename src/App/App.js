import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import dogsData from '../helpers/data/dogsData';

import './App.css';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (<DogPen dogs={this.state.dogs}/>);
  }
}
export default App;
