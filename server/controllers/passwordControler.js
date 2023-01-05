const usercontroler = require("./userControllers");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { response } = require("express");
require("dotenv").config();
const connection = require("../config/db");
const passGenerator = require("../middleware/passGenerator");
const bcrypt = require("bcrypt");

class PasswordControler {
  sendMail = (req, res) => {
    console.log("ha entrado");
    if (req.body.email == "") {
      res.status(400).send({
        message: "El email es requerido",
      });
      return;
    }
    console.log(req.body);

    try {
      connection.query(
        `SELECT * FROM user WHERE email = '${req.body.email}';`,
        (error, result) => {
          if (error) {
            res.status(400).json(error);
          } else {
            if (!result[0]) {
              return res.status(402).send({
                message: "No existe el mail",
              });
            } else {
              let password = passGenerator(6);
              const trasporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "coolx.earthproj@gmail.com",
                  pass: "zpbfimykotueqkas",
                },
              });

              let saltRounds = 10;

              const emailPort = process.env.EMAIL_PORT || 3000;
              bcrypt.genSalt(saltRounds, function (err, saltRounds) {
                bcrypt.hash(password, saltRounds, function (err, hash) {
                  let sql = `UPDATE user set password = "${hash}" WHERE user_id = ${result[0].user_id}`;

                  const mailOptions = {
                    from: "coolx.earthproj@gmail.com",
                    to: `${req.body.email}`,
                    subject: "Enlace para recuperar su cuenta de CoolX",
                    html: `<p> Tu nueva contraseña es <b>${password}</b> </p>`,
                  };

                  trasporter.sendMail(mailOptions, (err, response) => {
                    if (err) {
                      console.error("Ha ocurrido un error:", err);
                    } else {
                      console.log("Respuesta:", response);
                      res
                        .status(200)
                        .json("El email para la recuperacion ha sido enviado");
                    }
                  });

                  connection.query(sql, (error, result) => {
                    console.log(error);
                    error
                      ? res.status(400).json({ error })
                      : res.status(200).json(result);
                  });
                });
              });
            }
          }
        }
      );
    } catch (error) {
      res.status(500).send({
        message: "Ha ocurrido un error",
        error,
      });
    }
  };
}

module.exports = new PasswordControler();
