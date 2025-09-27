import pool from "../models/user.js";

const userService = {
    registerUser: async (username,department,emailAddress, user_password) => {
        const result = await pool.query(
            'INSERT INTO USERS (username,department,emailAddress, user_password) VALUES ($1,$2,$3,$4)',
            [username,department,emailAddress, user_password]
        );
        return result.rows[0];
    },
    userLogin: async (username, hashed_password) => {
        console.log(username, hashed_password);
        const user = await pool.query(
            'SELECT * FROM USERS WHERE username = $1',[username]
        );
        return user.rows[0];
    }
}
 
export default userService;