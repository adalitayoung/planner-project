const db = require('../config/postgres')

//CRUD
const createUser = (request, response) => {
    const {firstName, lastName, email} = request.body;
    const query = 'INSERT INTO planner_project.user(first_name, last_name, id, email) VALUES ($1, $2, DEFAULT, $3)';
    db.query(query, [firstName, lastName, email], (err, res) => {
        if (err){
            console.log("Error in createUser function: "+ err)
            throw err;
        }
        response.status(201).send(`User added with ID: ${res.id}`)
    })
}

module.exports = {
    createUser
}