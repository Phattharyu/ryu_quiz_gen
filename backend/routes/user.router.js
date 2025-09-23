import userController from '../controllers/user.controller.js';
//import checkMiddleware from "../middlewares/check.middleware.js"

const userRouter = (router) => {
    router.post("/register", userController.registerUser);
}


export default userRouter;