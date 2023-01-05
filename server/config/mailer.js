const nodemailer = require('nodemailer');
const router = require('express').Router();

  transporter.verify().then(() => {
    console.log("Listo para enviar emails");
  });

module.exports = {transporter};