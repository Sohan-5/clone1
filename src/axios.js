import axios from 'axios';

const instance =axios.create({
    baseURL:"https://tinder-clone-backend-100.herokuapp.com"
});

export default instance;