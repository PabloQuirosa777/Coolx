var express = require("express");
var router = express.Router();
const puppeteerPdf = require("../controllers/puppeteer-pdf");

// Generar PDF de un proyecto
// localhost:4000/pdf/:project_id
router.get("/:project_id", puppeteerPdf.descargar);

module.exports = router;