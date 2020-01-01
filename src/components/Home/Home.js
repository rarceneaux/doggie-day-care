import React from 'react';
import DogPen from '../DogPen/DogPen';
import dogsData from '../../helpers/data/dogsData';
import employeesData from '../../helpers/data/employeesData';
import walksData from '../../helpers/data/walksData';
import Walks from '../Walks/Walks';
import WalkForm from '../WalkForm/WalkForm';

import './Home.scss';

import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
    showWalkForm: false,
  }

  componentDidMount() {
    this.getAllDogs();
    this.getAllEmployees();
    this.getAllWalks();
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

  getAllWalks =() => {
    walksData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((error) => console.error({ error }));
  }

  addWalk = (newWalk) => {
    walksData.addWalk(newWalk)
      .then(() => {
        this.getAllWalks();
        this.setState({ showWalkForm: false });
      })
      .catch((error) => console.error({ error }));
  }

  setShowWalkForm = () => {
    this.setState({ showWalkForm: true });
  }

  render() {
    return (
      <div className="Home">
        {/* <h1>Who Let da Dawgs Out?</h1> */}
        <h1>Dawg Walks</h1>
        <button onClick={this.setShowWalkForm} className="btn btn-danger">Add Walk</button>
        {this.state.showWalkForm && <WalkForm addWalk={this.addWalk}/>}

    <Walks walks={this.state.walks}/>
        <h1>Dawgs</h1>
    <DogPen dogs={this.state.dogs}/>
        {/* <h1> The Walkers </h1> */}
        <h1>Dawg Walkers</h1>
    <StaffRoom employees={this.state.employees}/>
    </div>
    );
  }
}
export default Home;
