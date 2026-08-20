const express = require("express");
const router = express.Router();
const certificateController = require("../controllers/certificatesController");

router.get("/api/certificates", certificateController.getCertificates);

module.exports = router;