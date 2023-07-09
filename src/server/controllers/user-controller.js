import authService from '../services/auth-service.js' 
import userModel from '../models/user-model.js'
import userService from '../services/user-service.js';

const authController = {
    logout: async (req, res) => {
        console.log(req.session.email); 
        req.session.destroy((err) => {
        if(err){
            return res.status(500).json({ message: 'Session destroy error.'})   
        }else {
            res.clearCookie('user-session');
            return res.status(200).json({ message:'Session finished' });
        }
        });  
    },
    
    signup: async (req, res) => {
        try {
            const newUser = new userModel({
                email : req.body.email,
                password : req.body.password,
                cpf : req.body.cpf,
                name : req.body.name,
                person : req.body.person,
                address : req.body.address,
                birthday : req.body.birthday
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
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await authService.signin(email, password, res);
            
            if(!user) 
                return res;
            
            req.session.email = user.email;
            req.session.name = user.name;
            req.session.isAdmin = user.adm;
            
            return res.status(200).json(user);
        } catch (error) {
            console.error("Error SignIn", error);
            return res.status(500).json({ message: "Error signIn!", error: error });
        }
    }, 
    
    updateUserInfo: async (req, res) => {
        try {
            // ARRUMAR: Deveria ser a sessao
            // const email = req.session.email;
            const email = req.body.email;
            
            const updatedUser = await userService.updateUserInfo(email, req.body);
            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).send("Error updating user information");
        }
    },
    
    updateUserAdm: async (req, res) => {
        const { id } = req.params;
        
        try {
            const user = userService.updateUserAdm(id);
            
            if (!user)
                return res.status(404).json({ message: "User not found" });
        
            return res.status(200).json({ message: `Field 'adm' successfully updated to ${user.adm}` });
        } catch (error) {
            console.error("Error updating 'adm' field", error);
            return res.status(500).json({ message: "Error updating 'adm' field", 
                                          error: error.message });
        }        
    }
}

export default authController;