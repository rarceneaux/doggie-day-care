import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEmployees = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json`)
    .then((response) => {
      const allEmployeesObj = response.data;
      const employees = [];
      if (allEmployeesObj != null) {
        Object.keys(allEmployeesObj).forEach((employeeId) => {
          const newEmployee = allEmployeesObj[employeeId];
          newEmployee.id = employeeId;
          employees.push(newEmployee);
        });
      }
      resolve(employees);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getAllEmployees };
