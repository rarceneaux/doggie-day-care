import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;


const getAllWalks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json`)
    .then((response) => {
      const allWalksObj = response.data;
      const walks = [];
      if (allWalksObj != null) {
        Object.keys(allWalksObj).forEach((walkId) => {
          const newWalk = allWalksObj[walkId];
          newWalk.id = walkId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((err) => {
      reject(err);
    });
});

const deleteAWalk = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);

const addAWalk = (walkInfo) => axios.post(`${baseUrl}/walks.json`, walkInfo);

export default { getAllWalks, deleteAWalk, addAWalk };
