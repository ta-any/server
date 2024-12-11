const express = require('express')
const router = express.Router()

const ADD_P = require("../controller/add_patient.js");
const ADD_D = require("../controller/add_doctors.js");

router.post("/add_patient", express.json(), ADD_P.add_patient);
router.post("/add_doctors", express.json(), ADD_D.add_doctors);


router.get('/about', (req, res) => {
    res.send('SERVER START')
})

module.exports = router