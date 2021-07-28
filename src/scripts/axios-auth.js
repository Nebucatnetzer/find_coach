import axios from 'axios';

const getAPI = axios.create({
  baseURL:
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBrrv4iYvZkvC15i5Un3_maYKQhmJdXXo',
  timeout: 1000
});

export default getAPI;
