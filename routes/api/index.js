const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/travellers', travellerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;