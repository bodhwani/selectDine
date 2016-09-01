var mongoose = require('mongoose');

var reservation_schema = {
    type : Boolean(),
    name : { type : String , require : true},
    location : { type : String, require:true},
    table_id : { type : String, require : true},
    no_of_people : { type : String, require : true }
};

mongoose.exports = new mongoose.Schema(reservation_schema);
mongoose.exports.reservation_schema = reservation_schema;

//you have to include boolean in restaurent.So if he clicks reserves table then only reservation
// history will be displayed and if he choose reserve food + table, then order and transaction
// history will come.

//and i think no of people should be in order history,not in this.
