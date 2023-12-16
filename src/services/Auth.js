import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/';

const signUp =async (userData) => {
    try {
        const response = await axios.post(API_URL + 'sign_up',userData);
        return ('Registred Successfully',response.data);
    } catch (error) {
        console.log(error);
    }
}


export default {
    signUp,
}