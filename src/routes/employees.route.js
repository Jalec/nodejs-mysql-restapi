const express = require('express');
const employeesController = require('../controllers/employees.controller.js');
const router = express.Router();

router.get('/employees', employeesController.getEmployees);

router.get('/employees/:id', employeesController.getEmployee);

router.post('/employees', employeesController.createEmployees);

router.patch('/employees/:id', employeesController.updateEmployees);

router.delete('/employees/:id', employeesController.deleteEmployees);


module.exports = { router };