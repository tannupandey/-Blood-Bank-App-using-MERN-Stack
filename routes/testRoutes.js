const express = require('express');
const { testController } = require('../controllers/testController');

const router = express.Router();

//Routes
 router.get('/', (req, res)=>{
    res.send('Get Route working')
 });


//export
module.exports = router;
