import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-app-a3a48.firebaseio.com/'
});

export default instance;