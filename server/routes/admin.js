var express = require("express");
const adminControllers = require("../controllers/adminControllers");
const contactController = require("../controllers/adminControllers");
var router = express.Router();

// Mostrar todos los usuarios
// localhost:4000/admin/:userId/allUsers
router.get("/:userId/allUsers", adminControllers.getAllUsers);

// Mostrar todos los proyectos
// localhost:4000/admin/:userId/allProjects
router.get("/:userId/allProjects", adminControllers.getAllProjects);

// Mostrar todos los árboles
// localhost:4000/admin/:userId/allTrees
router.get("/:userId/allTrees", adminControllers.getAllTrees);

module.exports = router;

