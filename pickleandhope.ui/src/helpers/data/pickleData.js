import axios from 'axios';
import { baseUrl } from '../../apiKeys.json';

const getPickles = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/api/pickles`).then((result) => {
    const allPickles = result.data;
    resolve(allPickles);
  }).catch((err) => reject(err));
});

export default { getPickles };
