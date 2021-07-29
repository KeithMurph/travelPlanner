const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          trip_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          traveller_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Travellers',
              key: 'id',
            },
          },
          location_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Locations',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Trip'
      }
)


module.exports = Trip;