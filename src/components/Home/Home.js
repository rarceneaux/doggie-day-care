import React from 'react';
import DogPen from '../DogPen/DogPen';
import dogsData from '../../helpers/data/dogsData';

import './Home.scss';

import StaffRoom from '../StaffRoom/StaffRoom';
import employeesData from '../../helpers/data/employeesData';

class Home extends React.Component {
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
      <div className="Home">
        <h1>Doggy's Best Friend</h1>
    <DogPen dogs={this.state.dogs}/>
        <h1> The Walkers </h1>
    <StaffRoom employees={this.state.employees}/>
    </div>
    );
  }
}
export default Home;
