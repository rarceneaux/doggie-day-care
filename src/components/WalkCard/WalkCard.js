import React from 'react';
import PropTypes from 'prop-types';
import employeesData from '../../helpers/data/employeesData';
import dogsData from '../../helpers/data/dogsData';
import './WalkCard.scss';

import walkShape from '../../helpers/propz/walkShape';

class WalkCard extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    deleteAWalk: PropTypes.func,
  }

  state = {
    firstName: '',
    lastName: '',
    dogName: '',
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { walk, deleteAWalk } = this.props;
    deleteAWalk(walk.id);
  }

  getSingleEmployee = () => {
    const { walk } = this.props;
    employeesData.getSingleEmployee(walk.employeeId)
      .then((response) => {
        this.setState({ firstName: response.data.firstName, lastName: response.data.lastName });
      })
      .catch((error) => console.error(error));
  }

  getSingleDog = () => {
    const { walk } = this.props;
    dogsData.getSingleDog(walk.dogId)
      .then((response) => {
        this.setState({ dogName: response.data.name });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getSingleEmployee();
    this.getSingleDog();
  }

  render() {
    const { walk } = this.props;
    const { firstName, lastName, dogName } = this.state;
    return (
    <div className="card walk">
    <div class="card-body walk2">
    <p class="card-text">Dawg: {dogName}</p>
  <p class="card-text">Walker: {firstName } {lastName}</p>
    <p class="card-text">Date: {walk.date}</p>
    <button onClick={this.deleteWalkEvent} className="btn btn-danger">Delete Walk</button>
    <button className="btn btn-danger">Edit Walk</button>

</div>
</div>
    );
  }
}

export default WalkCard;
