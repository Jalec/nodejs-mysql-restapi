const db = require('../db.js');


const getEmployees = async (req, res) => {
    try {
        const [rows] = await db.pool.query('SELECT * FROM employees');
        res.json(rows);
    } catch(error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const getEmployee = async (req, res) => {
    try {
        const [rows] = await db.pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id]);
        if(rows.length <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const createEmployees = async (req, res) => {
    try {
        const name = req.body.name;
        const salary = req.body.salary;
        const [rows] = await db.pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary]);
        res.send({ 
            id: rows.insertId,
            name,
            salary 
         });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};

const deleteEmployees = async (req, res) => {
    try {
        const [result] = await db.pool.query('DELETE FROM employees WHERE id = ?', [req.params.id]);
        if(result.affectedRows <= 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};


const updateEmployees = async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const salary = req.body.salary;
    try {
        const [result] = await db.pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
        if(result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        const [rows] = await db.pool.query('SELECT * FROM employees WHERE id = ?', [id]);
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
};



module.exports = { getEmployees, getEmployee, createEmployees, updateEmployees, deleteEmployees };