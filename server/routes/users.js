var express = require("express");
const authController = require("../controllers/authController");
const userControllers = require("../controllers/userControllers");
var router = express.Router();
const multer = require("../middleware/multer");
const multerSingle = require("../middleware/multerSingle");
const verify = require("../middleware/verify");

//1 createUser
//localhost:4000/users/registrocoolx
router.post("/registrocoolx", userControllers.createUser);

// 2. User login
// localhost:4000/users/login
router.post("/login", userControllers.login);

//3 Trae infromación de un usuario
//localhost:40000/users/oneUser/:user_id
router.get("/oneUser/:user_id", userControllers.selectOneUser);

//4 Editar usuario
//localhost:4000/users/editUser/:user_id
router.put("/editUser/:user_id", userControllers.editUser);

//5 traer la info de un usuario para su edit
//localhost:4000/users/editUser/:user_id
router.get("/getEditUser/:user_id", userControllers.getEditOneUser);

//6 borrado logico usuario
//localhost:4000/users/deleteUser/:user_id
router.delete("/deleteUser/:user_id", userControllers.deleteUser);

//7 mostrar todos los usuarios
//localhost:4000/users/allUsers
router.get("/allUsers", verify, userControllers.selectAllUsers);

//8 Enviar email de confirmación de registro
//localhost:4000/users/mailregistrocoolx
router.post("/mailregistrocoolx", authController.sendRegistration);

module.exports = router;
