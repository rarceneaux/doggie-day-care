import React from 'react';
import DogPen from '../components/DogPen/DogPen';
import dogsData from '../helpers/data/dogsData';

import './App.css';
import StaffRoom from '../components/StaffRoom/StaffRoom';
import employeesData from '../helpers/data/employeesData';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    const employees = employeesData.getAllEmployees();
    this.setState({ dogs, employees });
  }

  render() {
    return (
      <div className="App">
        <h1>Doggy's Best Friend</h1>
    <DogPen dogs={this.state.dogs}/>
        <h1> The Walkers </h1>
    <StaffRoom employees={this.state.employees}/>
    </div>
    );
  }
}
export default App;
