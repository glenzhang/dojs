var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RainbowSchema = new Schema({
    name: String,
    age: { type: Number, min: 15, max: 200 }
});

module.exports = mongoose.model("Rainbow", RainbowSchema);
