const pool = require('../pool')

const getAllCars = (req, res) => {

    pool.query(
        'select * from cars'
    ,
    [],
    (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows);
    });
}

module.exports = getAllCars;