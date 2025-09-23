const userController = {
    registerUser: async (res,req) => {
        try {
            const {username,department,emailAddress, password} = req.body;
            const newUser = await userService.registerUser(username,department,emailAddress,password);
            res.status(200).json(newUser);
        } catch(err) {
            console.log("Error Register User:",err)
            res.status(500).json({message: "Internal Error!"})
        }
    }
}

export default userController;