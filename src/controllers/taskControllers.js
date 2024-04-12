const connection = require('../config/db');
const dotenv = require('dotenv'). config();

async function storeTask(req,res) {
    const params = Array(
        req.body.title,
        req.body.description
    );

    const query = "INSERT INTO db_tasks(title, description) VALUES(?,?)"

    connection.query(query, params, (err, resuslts) => {
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
            })
        }
    })
}

module.exports = {
    storeTask
}