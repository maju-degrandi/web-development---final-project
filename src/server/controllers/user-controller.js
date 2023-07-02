import authService from '../services/auth-service.js' 
import userModel from '../models/user-model.js'

const authController = {
    signup: async (req, res) => {
        try {
            const newUser = new userModel({
                email : req.body.email,
                password : req.body.password,
                cpf : req.body.cpf,
                name : req.body.name,
                person : req.body.person,
                address : req.body.address,
                birthday : req.body.birthday,
            }) 
            
            const login = await authService.signup(newUser.email, newUser.password);
    
            if(!login) return res.status(406).send("Email already exists.");
    
            newUser.password = login;
            const createdUser = await newUser.save();
            
            if(createdUser)
                return res.status(200).json(createdUser);
            else
                return res.status(400).send('Usuário não criado.')
        } catch (error) {
            console.log(error);
            return res.status(400).send('Campos requeridos!')
        }
    },
    
    signin: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        const User = await authService.signin(email, password, res);
        
        if(!User)
            return res;
        
        return res.json(User);
    }
}

export default authController;