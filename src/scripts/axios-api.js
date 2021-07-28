import axios from 'axios';

const getAPI = axios.create({
  baseURL:
    'https://find-coach-e137c-default-rtdb.europe-west1.firebasedatabase.app/',
  timeout: 1000
});

export default getAPI;
