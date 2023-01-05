const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class userController {

  //1.Crear usuario
  //localhost:4000/users/registrocoolx
  createUser = (req, res) => {

    const { user_name, email, password, surname, company, nif, phone } =
      req.body;

    let saltRounds = 8;

    bcrypt.genSalt(saltRounds, function (err, saltRounds) {
      bcrypt.hash(password, saltRounds, function (err, hash) {

        let sql = `INSERT INTO user (user_name, password, surname, company, nif, phone, email, position, country, currency) VALUES ('${user_name}', '${hash}', "${surname}", "${company}", "${nif}", "${phone}", '${email}', "", "", "")`;

        connection.query(sql, (error, result) => {
          console.log(error);
          error
            ? res.status(400).json({ error })
            : res.status(200).json(result);
        });
      });
    });
  };


  // 2. User login
  // localhost:4000/users/login
  login = (req, res) => {

    let { email, password } = req.body;

    let sql = `SELECT * FROM user WHERE email = '${email}'and is_deleted = 0`;

    connection.query(sql, (error, result) => {
      //en caso de error en la consulta
      if (error) return res.status(400).json(error);

      //en caso de no encontrar un user con dicho user_name o mail.
      if (!result || !result.length) {
        res.status(401).json("Usuario no registrado");
      } else {
        //en caso de que el mail o user_name sea correcto
        //aqui lo estamos haciendo con el mail
        console.log(result);
        const [user] = result;

        const hash = user.password;

        //capturo el user_id
        const user_id = user.user_id;

        //comparamos contraseñas
        bcrypt.compare(password, hash, (error, response) => {
          //si las contraseñas coinciden
          if (response === true) {
            const token = jwt.sign(
              {
                user: {
                  email: user.email,
                  name: user.user_name,
                  id: user_id,
                  type: user.user_type,
                },
              },
              process.env.SECRET,
              { expiresIn: "10d" }
            );
            res.status(200).json({ token });
            //si las contraseñas coinciden
          } else {
            res.status(401).json("Usuario y/o contraseña incorrectos");
          }
        });
      }
    });
  };


  //3 traer informacion de un usuario
  //localhost:4000/users/oneUser/:user_id

  selectOneUser = (req, res) => {

    const user_id = req.params.user_id;

    let sqlUser = `SELECT * FROM user WHERE user_id = ${user_id} AND is_deleted = 0`;
    let sqlProject = `SELECT * FROM image, project, user
    WHERE user.user_id = project.user_id AND project.project_id = image.project_id
    AND user.user_id = ${user_id} GROUP BY project.project_id`;
    
    connection.query(sqlUser, (error, resultUser) => {
      if (error) {
        res.status(400).json({ error });
        return;
      } 

      connection.query(sqlProject, (error2, resultProject) => {
        if (error2) {
          res.status(400).json({ error2 });
          console.log("error2");
          return;
        }
        res.status(200).json({ resultUser, resultProject });
      });
    });
  };


  // 4 editar Usuario
  // localhost:4000/users/editUser/:user_id
  editUser = (req, res) => {

    let user_id = req.params.user_id;

    const {
      user_name,
      surname,
      company,
      nif,
      position,
      phone,
      country,
      currency,
    } = req.body.register;
    console.log("hola ", req.body.register);

    let sql = `UPDATE user SET user_name = "${user_name}", surname = "${surname}", company = "${company}", nif = "${nif}", position = "${position}", phone = "${phone}", country = "${country}", currency = "${currency}" WHERE user_id = "${user_id}"`;

    connection.query(sql, (error, result) => {
      error
        ? res.status(400).json({ error })
        : res.status(200).json(req.body.register);
    });
  };


  //5 traer informacion de Usuario para editarlo
  //localhost:4000/users/editUser/:user_id
  getEditOneUser = (req, res) => {

    let user_id = req.params.user_id;

    let sql = `SELECT * FROM user WHERE user_id = "${user_id}"`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };


  //6 Borrado lógico de un usuario
  //localhost:4000/users/deleteUser/:user_id
  deleteUser = (req, res) => {

    let user_id = req.params.user_id;

    let sql = `UPDATE user SET is_deleted = 1 WHERE user_id = "${user_id}"`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //7 mostrar todos los usuarios
  //localhost:4000/users/allUsers
  selectAllUsers = (req, res) => {
    console.log("headers", req.headers.authorization);

    let sql = `SELECT * FROM user WHERE user_id = ${user_id} and is_deleted = 0`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };
}


module.exports = new userController();
