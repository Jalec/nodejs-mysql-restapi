const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller.js');


router.get('/ping', indexController.getPong );
 

module.exports = { router };