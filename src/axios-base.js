import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://aprendendo-firebase-c5341.firebaseio.com/'
});

export default instance;