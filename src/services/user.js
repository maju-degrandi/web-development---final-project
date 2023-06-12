import { users } from '../datas/users.js';

class userService {
    getUser(user){
        // this should be a BD request

        let i = users['Users'].findIndex((userU) => userU.email === user.email);
        if(i > -1 && user.password === users['Users'][i].password){
            return users['Users'][i];
        }
        return undefined;
    }
}

export default new userService();