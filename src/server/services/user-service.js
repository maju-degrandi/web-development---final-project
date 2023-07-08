import userModel from '../models/user-model.js';

class UserService {
    async updateUserInfo(email, data) {
        const existingUser = await userModel.findOne( {email} );
        
        if (!existingUser) throw new Error("User not found");
        
        const updatedUserData = Object.assign({}, existingUser.toObject(), data);
        
        const updatedUser = await userModel.findOneAndUpdate(
            {email : email},
            updatedUserData,
          { new: true }
        );
    
        if (updatedUser)
          return updatedUser;
    
        throw new Error("User not found");
    }
    
    async updateUserAdm(id){
        const user = await userModel.findById(id);
        if (!user)
            return null;
        
        user.adm = !user.adm;
        await user.save();
        
        return user;
    }
}

export default new UserService();