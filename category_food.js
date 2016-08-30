var mongoose = require('mongoose');

var fd_category_schema = {
    id : { type : String, required : true, unique : true},
    name : { type : String, required: true},
    rating : {
        user_rating : { type : Array},
        stars : { type : Array, required : true, default : [0,0,0,0,0]}
    },
    cost : {
        actual_cost : {type : Number,required : true},
        discount : { type : Number},
        offer : { type : Number},
        final_cost : { type : Number , required : true }
    }
};
module.exports = new mongoose.Schema(fd_category_schema);
module.exports.fd_category_schema = fd_category_schema;
