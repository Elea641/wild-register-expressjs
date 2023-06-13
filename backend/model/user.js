const database = require("../config/database.js");

const getUser = async () => {
    try {
        const user = await database.query('SELECT * FROM user')
        return user;
    } catch (error) {
        console.error(error);
        throw new Error("Error retrieving user");
    }
};

const createUser = async (user) => {
    const { firstname = null, lastname = null, mail, hashedPassword, admin } = user;
    try {
        const [response] = await database.query(
            'INSERT INTO user (firstname, lastname, mail, password, is_admin) VALUES(?, ?, ?, ?, ?)',
            [firstname, lastname, mail, hashedPassword, admin]
        );
        if(response.affectedRows > 0){
            const id = response.insertId;
            return {
                id,
                firstname,
                lastname,
                mail,
                admin,
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error inserting user');
    }
};

module.exports = {
    getUser,
    createUser
}