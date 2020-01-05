import React from 'react';
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';
import walkShape from '../../helpers/propz/walkShape';

import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
    addWalks: PropTypes.func,
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addAWalk: PropTypes.func,
  }

  state = {
    employeeName: '',
    dogName: '',
    date: '',
  }

  saveWalkEvent = (e) => {
    e.preventDefault();
    const { addAWalk } = this.props;
    const newWalk = {
      dogId: this.state.dogName,
      employeeId: this.state.employeeName,
      date: this.state.date,
    };
    addAWalk(newWalk);
    this.setState({ employeeName: '', dogName: '', date: '' });
  }

  handleDogChange = (e) => {
    this.setState({ dogName: e.target.value });
  }

  handleEmployeeChange = (e) => {
    this.setState({ employeeName: e.target.value });
  }

  handleDateChange = (e) => {
    this.setState({ date: e.target.value });
  }

  render() {
    const { dogName, employeeName, date } = this.state;
    const { dogs, employees } = this.props;

    return (<form className="col-6 offset-3 WalkForm">
      <div className="input-group mb-3">
      <label htmlFor="dogName">Dog Name: </label>
      <select className="form-control" value={dogName} id="dogName" onChange={this.handleDogChange}>
        <option>Choose...</option>
       {
         dogs.map((dog) => (
           (<option key={dog.id} value={dog.id}>{dog.name}</option>)))
       }
      </select>
      </div>
      <div className="input-group mb-3">
            <label htmlFor="employeeName">Walkers: </label>
            <select
              className="form-control"
              id="employeeName"
              value={ employeeName }
              onChange={this.handleEmployeeChange}>
              <option defaultValue>Choose One...</option>
              {
              employees.map((employee) => (
                (<option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)))
              }
            </select>
          </div>
    <div className="input-group date">
    <label htmlFor="date">Select Date: </label>
    <input type="date" id="date" value={date} onChange={this.handleDateChange}/>
    </div>
    {
    <button onClick={this.saveWalkEvent} className="btn btn-secondary">Save Walk</button>
    }
    </form>
    );
  }
}

export default WalkForm;
