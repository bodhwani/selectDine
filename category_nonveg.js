var mongoose = require('mongoose');

var category_nonveg_food = require('./category_food');

var nonveg_category_schema = {
    category_food : category_nonveg_food.fd_category_schema
}

module.exports = new mongoose.Schema(nonveg_category_schema);
module.exports.nonveg_category_schema = nonveg_category_schema;

