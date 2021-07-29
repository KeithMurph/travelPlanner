const Location = require('./location');
const Traveller = require('./traveller');
const Trip = require('./trips');




Traveller.hasMany(Trip);

Location.hasMany(Trip);

Trip.belongsTo(Traveller, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
  });
  
  
Trip.belongsTo(Location, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
  });




module.exports = { Location, Traveller, Trip };