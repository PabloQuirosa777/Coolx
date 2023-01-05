var express = require("express");
const treeControllers = require("../controllers/treeControllers");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");

//1 create tree
//localhost:4000/tree/createTree
router.post("/createTree", treeControllers.createTree);

//2 borrado logico arbol
//localhost:4000/tree/deleteTree/:tree_id
router.delete("/deleteTree/:tree_id", treeControllers.deleteTree);

//3 traer para editado de arbol
//localhost:4000/tree/getEditTree/:tree_id
router.get("/getEditTree/:tree_id", treeControllers.getEditOneTree);

//4 editar arbol
//localhost:4000/tree/editTree/:tree_id
router.put("/editTree/:tree_id", treeControllers.editTree);

module.exports = router

