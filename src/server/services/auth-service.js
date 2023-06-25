import UserModel from '../models/user-model.js';
import bcrypt from 'bcrypt';

const userService = {
    signup: async (username, password) => {
        const user = await UserModel.findOne({ username: username });
        
        if(user) return null;

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const createdUser = await UserModel.create({
            username,
            password: hash
        });

        return createdUser;
    },
    signin: async (username, password, res) => {
        const user = await UserModel.findOne({ username: username});

        if(user === null){
            res.status(401).send("Username not found.");
            return null;   
        }
        console.log(bcrypt.compareSync(password, user.password));
        if(!bcrypt.compareSync(password, user.password)) {
            res.status(401).send("Invalid password.");
            return null;
        }

        return user;
    }
}

export default userService;