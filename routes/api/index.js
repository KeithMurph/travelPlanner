const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/travellers', locationRoutes );
router.use('/locations', travellerRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;