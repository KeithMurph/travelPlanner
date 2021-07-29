const router = require('express').Router();
 const sequelize = require('../../config/connection');
const { Traveller, Location,  Trips } = require('../../models');
// const { Traveller } = require('../../models/traveller');
// const { Location } = require('../../models/location');
// const { Trips } = require('../../models/trips');


//returns all traveller data without associated trips
router.get('/', async (req, res) => {
    try{
        const travellerData = await Traveller.findALL({
            include :[{ model: Traveller }, { model: Location}],
        });
        res.status(200).json(travellerData);  
    } catch (err) {
        res.status(500).json(err);
      }
});


// creates traveller data with responce
router.post('/', async (req, res) => {
    try {
      const travellerData = await Traveller.create(req.body);
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


// returns a single travellers with their associated trips
router.get('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.findByPk(req.params.id, {
        include: [{ model: Location }, { model: Trips }],
   
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// removes a traveller and any accociated trips
router.delete('/:id', async (req, res) => {
    try {
      const travellerData = await Traveller.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller found with that id!' });
        return;
      }
  
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;