const connection = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const puppeteer = require("puppeteer");

class projectControllers {
  // Crear nuevo proyecto
  // localhost:4000/project/newProject/:user_id
  createNewProject = (req, res) => {
    const data = JSON.parse(req.body.newProject);
    const user_id = req.params.user_id;
    let img = [""];

    if (req.files != undefined) {
      img = req.files;
    }

    const {
      projectName,
      projectDescription,
      location,
      altitude,
      latitude,
      area,
      profit,
      projectCost,
      yearPlanting,
    } = data;

    let sql = `INSERT INTO project (project_name, project_description, location, altitude, latitude, area, profit, project_cost, year_Planting, user_id) VALUES ('${projectName}','${projectDescription}', '${location}', '${altitude}', '${latitude}', "${area}", '${profit}', '${projectCost}', '${yearPlanting}','${user_id}')`;

    connection.query(sql, (error, result) => {
      if (error) throw error;
      let project_id = result.insertId;
      this.saveProjectImages(img, project_id);
      res.status(200).json(result);
    });
  };

  //Guardar imágenes de los proyectos (no es una ruta, solo función)
  saveProjectImages = (images, project_id) => {
    let img = images;
    var time = new Date();
    let date_img = new Date(time);

    img.forEach((img) => {
      let sql = `INSERT INTO image (file_name, date_img, project_id) VALUES ('${img.filename}','${date_img}','${project_id}')`;
      connection.query(sql, (error, result) => {
        console.log(error);
      });
    });
  };

  // Editar proyecto
  // localhost:4000/project/editProject/:project_id
  editProject = (req, res) => {
    let project_id = req.params.project_id;
    const {
      project_name,
      project_description,
      location,
      altitude,
      latitude,
      area,
      profit,
      project_cost,
    } = req.body;

    let sql = `UPDATE project SET project_name='${project_name}', project_description='${project_description}', location = '${location}', altitude = '${altitude}', latitude = '${latitude}', area = ${area}, profit = ${profit}, project_cost = ${project_cost}  WHERE project_id = ${project_id}`;

    connection.query(sql, (error, result) => {
      if (error) throw error;
      error ? res.status(400).json({ error }) : res.status(200).json(req.body);
    });
  };

  //Editar status de proyecto
  //localhost:4000/project/editStatusProject/:project_id
  editStatusProject = (req, res) => {
    const { status } = req.body;
    const project_Id = req.params.project_id;

    let sql = `UPDATE project SET status = "${status}" WHERE project_id = ${project_Id}`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  // Mostrar la infomación de un proyecto
  // localhost:4000/project/:project_id
  getProject = (req, res) => {
    let project_id = req.params.project_id;

    let sql = `SELECT * FROM project
    WHERE project.project_id = ${project_id}`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  // Eliminar un proyecto
  // localhost:4000/project/deleteProject/:project_id
  deleteProject = (req, res) => {
    let project_id = req.params.project_id;
    let sql = `UPDATE project SET is_deleted = 1 WHERE project_id = "${project_id}"`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  // Cambiar usuario de un proyecto
  // localhost:4000/project/changeUser/:project_id/:user_id
  changeUser = (req, res) => {
    const { user_id, project_id } = req.params;
    let sql = `UPDATE project SET user_id='${user_id}' WHERE project_id = ${project_id}`;

    connection.query(sql, (error, result) => {
      error ? res.status(400).json({ error }) : res.status(200).json(result);
    });
  };

  //Mostrar informacion del Project_info
  //localhost:4000/project/:project_id/info
  getProjectInfo = (req, res) => {
    let project_id = req.params.project_id;

    let sql = `SELECT * FROM project_info WHERE project_id = ${project_id}`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
        console.log(error);
      }
      res.status(200).json(result);
    });
  };

  // Mostrar los proyectos solo de los administradores
  // localhost:4000/project/onlyAdmin
  onlyAdmin = (req, res) => {
    let sql = `SELECT * FROM project, user
    WHERE project.user_id = user.user_id
    AND user.user_type = 1 GROUP BY project.project_id`;

    connection.query(sql, (error, result) => {
      if (error) {
        res.status(400).json({ error });
        console.log(error);
      }
      res.status(200).json(result);
    });
  };

  //Mostrar todas las imagenes de un proyecto
  // localhost:4000/project/images/:project_id
  getImages = (req, res) => {
    let project_id = req.params.project_id;

    let sql = `SELECT * FROM image WHERE project_id = ${project_id}`;

    connection.query(sql, (error, resultImages) => {
      if (error) {
        res.status(400).json({ error });
        console.log(error);
      }
      res.status(200).json(resultImages);
      console.log(resultImages);
    });
  };
}

module.exports = new projectControllers();
