import userModel from '../models/user-model.js';

class UserService {
    async getUsers(){
        try {
            const users = await userModel.find({}, {password:0});
            
            return users;
        } catch (error) {
            console.error(`Error: ${error}`)
            return null;
        }
    }
    
    async updateUserInfo(email, data) {
        const existingUser = await userModel.findOne( {email} , {password:0});
        
        if (!existingUser) throw new Error("User not found");
        
        const updatedUserData = JSON.parse(JSON.stringify(existingUser.toObject()));
        Object.assign(updatedUserData, data);
        
        const updatedUser = await userModel.findOneAndUpdate(
            {email : email},
            {$set : data},
            { new: true }
        );
        
        if (updatedUser)
          return updatedUser;
    
        throw new Error("User not found");
    }
    
    async updateUserAdm(id, idAdmin){
        const admin = await userModel.findById(idAdmin, {password:0});
        if(!admin.adm) return -1;
            
        const user = await userModel.findById(id, {password:0});
        console.log(user)
        if(!user) return -2;
        
        user.adm = !user.adm;
        await user.save();
        
        return user;
    }
}

export default new UserService();