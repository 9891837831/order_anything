var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
   
  products:{
      product_name:{
          type:String,
          required:true
      },
      category_name:{
          type:String,
          required:true
      },
      Addresses:[
          {
              Loc1:{
                  type:String,
                  required:true

              },
              Loc2:{
                type:String,
                required:true

            }
          }
      ]

  }
      
  
}),

    Products = mongoose.model('products_master', ProductSchema);

module.exports = Products;
