var mongoose = require('mongoose');

var category_veg_food = require('./category_food');
var veg_category_schema = {
    category_food : category_veg_food.fd_category_schema
};

module.exports = new mongoose.Schema(veg_category_schema);
module.exports.veg_category_schema = veg_category_schema;