const express = require('express');
const { testController } = require('../controllers/testController');

const router = express.Router();

//Routes
router.get('/', testController);

//export
module.exports = router;
