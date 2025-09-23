import { pool } from "../db.js";

const userService = {
    registerUser: async (username,department,emailAddress, password) => {
        const result = await pool.query(
            'INSERT INTO USERS (username,department,emailAddress, password) VALUES ($1,$2,$3,$4)',
            [username,department,emailAddress, password]
        );
        return result.rows[0];
    }
}

export default userService;