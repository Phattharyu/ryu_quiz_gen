import userService from "../services/user.service.js";
import bcrypt from 'bcryptjs';

const userController = {
    registerUser: async (req,res) => {
        try {
            const {username,department,emailAddress, user_password} = req.body;
            const hashed_password = await bcrypt.hash(user_password, 10);
            const newUser = await userService.registerUser(username,department,emailAddress,hashed_password);
            res.status(200).json(newUser);
        } catch(err) {
            console.log("Error Register User:",err)
            res.status(500).json({message: "Register Error!"})
        }
    },
    userLogin: async (req, res) => {
        try {
            const {username, user_password} = req.body;
            const hashed_password = await bcrypt.hash(user_password, 10);
            const user = await userService.userLogin(username, hashed_password);
            console.log(user);
            const isMatch = await bcrypt.compare(user_password, user.user_password);
            if (isMatch) {
                res.status(200).json({message:"Login Successful"});
            } else res.status(500).json({message:"Your username/password is wrong"});

            res.status(200).json(isMatch);
        } catch(err) {
            console.log("Error Login!");
            res.status(500).json({message:"Login Error!"});
        }

    }
}

export default userController;