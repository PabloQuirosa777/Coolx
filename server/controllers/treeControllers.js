const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


class treeController {

    //1 crear arbol
    //localhost:4000/tree/createTree
    createTree = (req, res) => {

        const { tree_name, latin_name, avg_height_tree, avg_crown_area, avg_biomass, avg_age} = req.body;
           
        let sql = `INSERT INTO tree (tree_name, latin_name, avg_height_tree, avg_crown_area, avg_biomass, avg_age) VALUES ( '${tree_name}',"${latin_name}", "${avg_height_tree}", "${avg_crown_area}", "${avg_biomass}", "${avg_age}")`;
    
             connection.query(sql, (error, result) => {
               console.log(error);
               error
                  ? res.status(400).json({ error })
                  : res.status(200).json(result);
             });
        }; 


    //2 borrado logico arbol
    //localhost:4000/tree/deleteTree/:tree_id
    deleteTree = (req, res) => {

        let tree_id = req.params.tree_id;
        
        let sql = `UPDATE tree SET is_deleted = 1 WHERE tree_id = ${tree_id}`;

        connection.query(sql, (error, result) =>{
            error ? res.status(400).json({ error }) : res.status(200).json(result);
        });
    };


    //3 traer arbol para su edición
    //localhost:4000/tree/getEditTree/:tree_id
    getEditOneTree = (req, res) => {

        let tree_id = req.params.user_id;

        let sql = `SELECT * FROM user WHERE tree_id = ${tree_id}`;

        connection.query(sql, (error, result) => {
            error ? res.status(400).json({ error }) : res.status(200).json(result);
        });
    };


    //4 editar Arbol 
    // localhost:4000/tree/editTree/:tree_id
    editTree = (req, res) => {

        let tree_id = req.params.tree_id;

        const {
            tree_name,
            latin_name,
            avg_height_tree,
            avg_crown_area,
            avg_biomass,
            avg_age,
        } = req.body;

        let sql = `UPDATE tree SET tree_name = "${tree_name}", latin_name = "${latin_name}", avg_height_tree = ${avg_height_tree}, avg_crown_area = ${avg_crown_area}, avg_biomass = ${avg_biomass}, avg_age = ${avg_age} WHERE tree_id = ${tree_id}`;

        connection.query(sql, (error, result) => {
            if (error) throw error;
            error ? res.status(400).json({ error }) : res.status(200).json(req.body);
        });

    }
      

}



module.exports = new treeController();
