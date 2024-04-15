const connection = require('../config/db');
const dotenv = require('dotenv'). config();

async function storeTask(req,res) {
    const params = Array(
        req.body.title,
        req.body.description
    );

    const query = "INSERT INTO tasks(title,description) VALUES(?,?)"

    connection.query(query, params, (err, results) => {
        if(results) {
            res
            .status(201)
            .json({
                success: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            res
            .status(400)
            .json({
                success: false,
                message: "Ops, deu problema!",
                data: err
            })
        }
    })
}

module.exports = {
    storeTask
}