var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        unique: true,
        required:true
    },
   
    password: {
        type: String,
        trim: true,
        required:true

    },
    Usertype:{
        type:String,
        enum:["Customer","DeliveryPerson","Admin"],
        required:true

    }
  
}, {
    timestamps: true
}),

    User = mongoose.model('users_master', userSchema);

module.exports = User;