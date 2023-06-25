import authService from '../services/auth-service.js' 

const authController = {
    signup: async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const createdUser = await authService.signup(username, password);

        if(!createdUser) return res.status(406).send("username already exists.");

        return res.json(createdUser);
    },
    
    signin: async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        const User = await authService.signin(username, password, res);
        
        if(!User){;
            console.log(`Passou por aqui!`)
            return res;
        }
        
        return res.json(User);
    }
}

export default authController;