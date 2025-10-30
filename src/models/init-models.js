var DataTypes = require("sequelize").DataTypes;
var _profiles = require("./profiles");
var _stop_smoking = require("./stop_smoking");

function initModels(sequelize) {
  var profiles = _profiles(sequelize, DataTypes);
  var stop_smoking = _stop_smoking(sequelize, DataTypes);


  return {
    profiles,
    stop_smoking,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
