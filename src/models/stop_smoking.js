const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stop_smoking', {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    stop_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_stop_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    attempts_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stop_smoking',
    schema: 'public',
    hasTrigger: true,
    timestamps: true,
    indexes: [
      {
        name: "stop_smoking_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
