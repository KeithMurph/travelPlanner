const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Trip } = require('../../models');
// const { Location } = require('../../models/location');
// const { Traveller } = require('../../models/traveller');

// returns all location data
router.get('/', async (req, res) => {
    try {
        const LocationData = await Location.findAll();
        res.status(200).json(LocationData);
       } catch (err) {
        console.log(err)
           res.status(500).json(err);
       }
});

// creates location data with its associated trips
router.post('/', async (req, res) => {
    try {
      const locationData = await Location.create(req.body);
      res.status(200).json(locationData);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

//  returns single locations data with its associated trips
router.get('/:id', async (req, res) => {
    try {
      const LocationData = await Location.findByPk(req.params.id, {
        include: [{ model: Trip }],
      });
  
      if (!LocationData) {
        res.status(404).json({ message: 'No location found with that id!' });
        return;
      }
  
      res.status(200).json(LocationData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

// removes a trip and returns succesful responce 
router.delete('/:id', async (req, res) => {
    try {
      const LocationData = await Location.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!LocationData) {
        res.status(404).json({ message: 'No location card found with that id!' });
        return;
      }
  
      res.status(200).json(LocationData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  module.exports = router;
