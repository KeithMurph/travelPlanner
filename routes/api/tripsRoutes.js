const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Trip, Location, Traveller } = require('../../models');
// const { Trip } = require('../../models/trips');
// const { Location } = require('../../models/location');
// const { Traveller } = require('../../models/traveller');

// creates trip data with accociated travellers and locations
router.post('/', async (req, res) => {
    try {
        const TripData = await Trip.create(req.body);
        // include: [{ model: Location }, { model: Traveller }],


        res.status(200).json(TripData);
      } catch (err) {
        console.log(err)
        res.status(400).json(err);
      }

});


// removes trip with responce
router.delete('/:id', async (req, res) => {
    try {
      const TripData = await Trip.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!TripData) {
        res.status(404).json({ message: 'No trip found with that id!' });
        return;
      }
  
      res.status(200).json(TripData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });


module.exports = router;
