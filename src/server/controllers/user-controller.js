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
        try {
            const email = req.body.email;
            const password = req.body.password;
    
            const User = await authService.signin(email, password, res);
            
            if(!User)
                return res;
                
            return res.json(User);
        } catch (error) {
            console.error("Error updating 'adm' field", error);
            return res.status(500).json({ message: "Error signin!", error: error });
        }
    }, 
    
    updateUserAdm: async (req, res) => {
        const { id } = req.params;
        
        try {
            const user = await userModel.findById(id);
            if (!user)
                return res.status(404).json({ message: "User not found" });
            
            user.adm = !user.adm;
            await user.save();
        
            return res.status(200).json({ message: `Field 'adm' successfully updated to ${user.adm}` });
        } catch (error) {
            console.error("Error updating 'adm' field", error);
            return res.status(500).json({ message: "Error updating 'adm' field", 
                                          error: error.message });
        }        
    }
}

export default authController;