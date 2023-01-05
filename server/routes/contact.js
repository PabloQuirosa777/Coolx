var express = require('express');
const authController = require("../controllers/authController");
var router = express.Router();



// Contact form
// localhost:4000/contact

router.post('/', authController.sendMails);
router.get('/', (req, res) => {
    res.status(200).send(html);
});



module.exports = router;