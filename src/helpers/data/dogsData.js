import axios from 'axios';
import apiKeys from '../apiKeys.json';
// import dogShape from '../propz/dogShape.js';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// const getAllDogs = () => dogs;

const getAllDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((response) => {
      const allDogsObj = response.data;
      const dogs = [];
      if (allDogsObj != null) {
        Object.keys(allDogsObj).forEach((dogId) => {
          const newDog = allDogsObj[dogId];
          newDog.id = dogId;
          dogs.push(newDog);
        });
      }
      resolve(dogs);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleDog = (dogId) => axios.get(`${baseUrl}/dogs/${dogId}.json`);

export default { getAllDogs, getSingleDog };
