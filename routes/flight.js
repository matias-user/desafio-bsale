const { Router } = require('express');
const { getFlights } = require('../controllers/flight');

const router = Router();
router.get('/:id/passengers', getFlights );
module.exports = router;