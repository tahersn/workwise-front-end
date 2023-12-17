import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api-auth/sign_up/';
const headers = {'Access-Control-Allow-Origin' : '*'};



export const signUp = async (userData) => {
    try {
        const response = await axios({
            method: 'post',
            url: API_URL,
            data: userData,
            headers: headers,
        });

        return ('Registered Successfully', response.data);
    } catch (error) {
        console.log(error);
        return ('Registration failed');
    }
};


// export default {
//     signUp,
// }