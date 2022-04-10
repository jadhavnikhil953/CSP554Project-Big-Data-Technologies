const mongoose = require('mongoose'); 

const postSchema = mongoose.Schema({  
    postName: {type: String},  
    desc: {type: String}  
  }); 

module.exports = mongoose.model('Post',postSchema);  