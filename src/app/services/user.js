import axios from 'axios';

class userService {
    async getUser(user){
        try {
            const response = await axios.post('http://localhost:8080/signin', user);
            
            if (response.status === 200) {
                return response.data;
            }else{
                return null;
            }
        } catch (error) {
            console.log('Error: ', error)
            return null;
        }
    }
}

export default new userService();