const { request, response } = require('express');

const getFlights = (req = request, res = response) => {

    const { id } = req.params;
    console.log( id );
    
    res.status(200).json({
        msg:'Hola mundo',
        id
    })
}

module.exports = {
    getFlights
}