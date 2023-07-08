import UserModel from '../models/user-model.js';
import bcrypt from 'bcrypt';

const userService = {
    signup: async (email, password) => {
        const user = await UserModel.findOne({ email: email });
        
        if(user) return null;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        return hash;
    },
    signin: async (email, password, res) => {
        const user = await UserModel.findOne({ email: email});

        if(user === null){
            res.status(401).send("Email not found.");
            return null;   
        }
        
        if(!bcrypt.compareSync(password, user.password)) {
            res.status(401).send("Invalid password.");
            return null;
        }
            
        return user;
    }
}

export default userService;