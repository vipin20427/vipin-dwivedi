var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TechnicalTraining = new Schema({
    technical_training : [{
      training_name : String,
      duration : String,
      school : String,
    }]
});

module.exports = mongoose.model('TechnicalTraining', TechnicalTraining);
