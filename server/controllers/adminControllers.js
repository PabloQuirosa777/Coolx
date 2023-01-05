const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class adminControllers {

    // Mostrar todos los usuarios
    // localhost:4000/admin/:userId/allUsers
    getAllUsers = (req, res) => {
        let sql ="SELECT * FROM user WHERE is_deleted = 0 and user_type = 0";

        connection.query(sql, (error, result)=>{
            error
            ? res.status(400).json({ error })
            : res.status(200).json(result);
        });
    };


    // Mostrar todos los proyectos
    // localhost:4000/admin/:userId/allProjects
    getAllProjects = (req, res) => {
        let sql ="SELECT * FROM project WHERE is_deleted = 0";

        connection.query(sql, (error, result)=>{
            error
            ? res.status(400).json({ error })
            : res.status(200).json(result);
        });
    };

    
    // Mostrar todos los árboles
    // localhost:4000/admin/:userId/allTrees
    getAllTrees = (req, res) => {
        let sql ="SELECT * FROM tree WHERE is_deleted = 0";
        
        connection.query(sql, (error, result)=>{
            error
            ? res.status(400).json({ error })
            : res.status(200).json(result);
        });
    };   

}

module.exports = new adminControllers();
