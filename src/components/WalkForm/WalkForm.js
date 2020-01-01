import React from 'react';
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';
import walkShape from '../../helpers/propz/walkShape';

class WalkForm extends React.Component {
  state = {
    employeeName: '',
    dogName: '',
    date: '',
  }

  static propTypes = {
    addWalks: PropTypes.func,
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  addWalkEvent = (e) => {
    e.preventDefault();
    const { addWalks } = this.props;
    const newWalk = {
      dogId: this.state.dogName,
      employeeId: this.state.employeeName,
      date: this.state.date,
    };
    addWalks(newWalk);
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
    return (
   <h1>Walk Form Test</h1>
    );
  }
}

export default WalkForm;
