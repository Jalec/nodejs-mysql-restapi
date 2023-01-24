const express = require('express');
const employeesRoutes = require('./routes/employees.route.js');
const indexRoutes = require('./routes/index.route.js');

const app = express();


app.use(express.json());

app.use(indexRoutes.router);
app.use('/api', employeesRoutes.router);

app.use((req, res, next) => {
   res.status(404).json({
      message: 'endpoint Not found'
   })
})

module.exports = { app };