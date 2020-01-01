import React from 'react';
import PropTypes from 'prop-types';
import './Employee.scss';

import employeeShape from '../../helpers/propz/employeeShape';

class Employee extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employee } = this.props;
    return (
    <div className="card employee">
        <img src={employee.img} className="card-img-top staff" alt="..."/>
        <div class="card-body employee2">
        <p class="card-text">Employee Name: {employee.firstName}  {employee.lastName}</p>
    </div>
</div>
    );
  }
}

export default Employee;
