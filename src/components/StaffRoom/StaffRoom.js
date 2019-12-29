import React from 'react';
import PropTypes from 'prop-types';
import Employee from '../Employee/Employee';
import employeeShape from '../../helpers/propz/employeeShape';

import './StaffRoom.scss';
import employeesData from '../../helpers/data/employeesData';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;

    const employeeCards = employees.map((employee) => <Employee key={employee.id} employee={employee}/>);
    return (
      <div className="StaffRoom">
        {employeeCards}
      </div>
    );
  }
}
export default StaffRoom;
