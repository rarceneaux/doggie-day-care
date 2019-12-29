import React from 'react';
import DogPen from '../DogPen/DogPen';
import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import './Home.scss';

import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.getAllDogs();
    this.getAllEmployees();
  }

  getAllDogs =() => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((error) => console.error({ error }));
  }

  getAllEmployees =() => {
    employeesData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((error) => console.error({ error }));
  }

  render() {
    return (
      <div className="Home">
        <h1>Who Let da Dawgs Out?</h1>
    <DogPen dogs={this.state.dogs}/>
        {/* <h1> The Walkers </h1> */}
    <StaffRoom employees={this.state.employees}/>
    </div>
    );
  }
}
export default Home;
