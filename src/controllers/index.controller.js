const db = require('../db.js');

const getPong = async (req, res) => {
    const result = await db.pool.query('SELECT 1+1 AS result');
    res.json(result);
 }

module.exports = { getPong };