const mongoose = require('mongoose'); 

const orderSchema = mongoose.Schema({  
    cust_id: {type: String},  
    ord_date: {type: Date} ,  
    price: {type: Number} ,  
    items: {type: Array},  
    status: {type: String}
  }); 

module.exports = mongoose.model('Orders',orderSchema);  