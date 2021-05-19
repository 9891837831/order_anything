var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const OrderSchema = new Schema({
   
  items:[
      {
          product_name:{
              type:String,
              required:true
          },
          quantity:{
              type:Number,
              default:1
          }
      }
  ],
  Delivery_person_id:{
      type:mongoose.Schema.Types.ObjectId
  },
  order_status:{
    type:String,
    enum:["TaskCreated","ReachedStore","Items Picked","Enroute","Delivered","Canceled"],
  },
  customerId:{
    type:mongoose.Schema.Types.ObjectId

  },
  PickupLocation:{
      type:String
  },
 
  
}),

    Orders = mongoose.model('orders_master', OrderSchema);

module.exports = Orders;
